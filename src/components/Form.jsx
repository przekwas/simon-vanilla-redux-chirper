import { useDispatch } from 'react-redux';
import { chirps } from '../actions';
import { useState } from 'react';

const Form = () => {
    const dispatch = useDispatch();
    const [val, setVal] = useState('');

    const handleSubmit = () => {
        dispatch(chirps.addChirp(val));
        setVal('');
    }

	return (
		<div>
            <input value={val} onChange={e => setVal(e.target.value)} />
			<button onClick={handleSubmit}>Add Chirp?</button>
		</div>
	);
};

export default Form;