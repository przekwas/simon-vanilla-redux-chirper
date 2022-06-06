import { useSelector } from 'react-redux';

const Timeline = () => {

    const chirps = useSelector(globalState => globalState.chirps.list);

	return (
		<div>
			<h2>Timeline</h2>
			<hr />
			<ul>
				{chirps.map(chirp => (
					<li>{chirp}</li>
				))}
			</ul>
		</div>
	);
};

export default Timeline;
