import { connect } from 'react-redux';

const Timeline = props => {
	return (
		<div>
			<h2>Timeline</h2>
			<hr />
			<ul>
				{props.chirps.map(chirp => (
					<li>{chirp}</li>
				))}
			</ul>
		</div>
	);
};

const mapStateToProps = state => {
	return { chirps: state.chirps.list };
};

export default connect(mapStateToProps)(Timeline);
