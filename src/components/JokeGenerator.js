import './JokeGenerator.css';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { getJoke } from '../state/action-creators';

function JokeGenerator() {
  const dispatch = useDispatch();
  const jokeData = useSelector(state => state.joke);
  const newJoke = () => {
    dispatch(getJoke());
  };

  useEffect(() => {
    dispatch(getJoke());
  }, [dispatch]);

  return (
    <div className='joke__container'>
      <p>{jokeData.joke}</p>
      <button onClick={newJoke}>Generate New Joke</button>
    </div>
  );
}

export default JokeGenerator;
