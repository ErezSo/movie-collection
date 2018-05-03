import React from "react";
import PropTypes from "prop-types";

const styles = {
  textarea: {
    width: "60%" 
  }
}

const TextInput = ({ name, label, onChange, placeholder, value }) =>
  <div className="form-group">
    <label htmlFor={name}>
      {label}
    </label>
    <div className="field">
      <textarea
        type="text"
        name={name}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={styles.textarea}
        rows="10"
      />
    </div>
  </div>;

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default TextInput;
