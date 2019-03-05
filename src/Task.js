import React, { Component } from 'react';
import { Grid, GridCell } from '@rmwc/grid';
import { TextField } from '@rmwc/textfield';
import { Select } from '@rmwc/select';
import { Typography } from '@rmwc/typography';

import { connect } from 'react-redux';
import { setColor, setText } from './store/actions/ColorActions';

class Tasks extends Component {
	render() {
		const { color, setColor, text, setText } = this.props;
		return (
			<Grid>
				<GridCell span={12}>
					<Typography tag="h1" use="headline4">
						A simple POC of RMWC using redux
					</Typography>
				</GridCell>

				<GridCell span={12}>
					<TextField
						outlined
						label="Write Something here..."
						value={text}
						onChange={e => setText(e.target.value)}
					/>
					<p style={{ color: color }}>{text ? 'You are typing ' + text : ''}</p>
				</GridCell>
				<GridCell span={12}>
					<Select
						outlined
						label="Select color"
						options={['Red', 'Green', 'Black']}
						style={{ width: '15em' }}
						onChange={e => setColor(e.target.value)}
					/>
					<p style={{ color: color }}>{color ? 'You selected ' + color + ' color' : ''}</p>
				</GridCell>
			</Grid>
		);
	}
}

const mapStateToProps = state => {
	return {
		color: state.clr.color,
		text: state.clr.text,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setColor: color => dispatch(setColor(color)),
		setText: text => dispatch(setText(text)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Tasks);
