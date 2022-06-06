import { ADD_CHIRP } from './types';

export const addChirp = newChirp => ({
    type: ADD_CHIRP,
    payload: newChirp
});
	 

