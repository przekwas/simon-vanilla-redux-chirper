import { connect } from 'react-redux';
import { chirps } from '../actions';
import { useState } from 'react';

const Form = props => {

    const [val, setVal] = useState('');

    const handleSubmit = () => {
        props.doodoo(val);
        setVal('');
    }

	return (
		<div>
            <label>{props.pizza}</label>
            <input value={val} onChange={e => setVal(e.target.value)} />
			<button onClick={handleSubmit}>Add Chirp?</button>
		</div>
	);
};

const mapDispatchToProps = {
    doodoo: chirps.addChirp
}

export default connect(null, mapDispatchToProps)(Form);
