const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : '';

  if (Validator.isEmpty(data.text, {min:10, max: 300})) {
    errors.text = 'min max 30 300';
  }



  if (Validator.isEmpty(data.text)) {
    errors.text = 'text is required';
  }



  return {
    errors,
    isValid: isEmpty(errors)
  };
};
