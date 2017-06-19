import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './common/TextInput';

const MovieForm = ({movie, onSave, onChange}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput 
        name="name"
        label="Movie"
        value={movie.name}
        onChange={onChange} />

      <TextInput
        name="director"
        label="Director"
        value={movie.director}
        onChange={onChange} />

      <TextInput
        name="released"
        label="Released"
        value={movie.released}
        onChange={onChange} />

      <TextInput
        name="description"
        label="Description"
        value={movie.description}
        onChange={onChange} />

        <input 
          type="submit"
          value={'Save'}
          className="btn btn-primary"
          onClick={onSave} />
    </form>
  );
};

MovieForm.propTypes = {
  movie: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MovieForm;