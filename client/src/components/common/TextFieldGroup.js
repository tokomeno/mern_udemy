import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const TextFieldGroup = ({
	name,
	placeholder,
	value,
	label,
	error,
	onChange,
	disabled,
	type,
	info
}) => {
	return (
	    <div className="form-group">
	      <input
	      type={type}
	       className={classnames('form-control form-control-lg', {
	       	'is-invalid':error
	       })}
	       placeholder={placeholder}
	       onChange={onChange}
	        value={value}
	        name={name}
	        disabled={disabled}
	        />
	        {info && (<div className="form-text text-muted">{info}</div>)}
	        {error && (<div className="invalid-feedback">{error}</div>)}
	    </div>
	)
}


TextFieldGroup.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	info: PropTypes.string,
	error: PropTypes.string,
	type: PropTypes.string.isRequired,
	onChange:  PropTypes.func.isRequired,
	disabled:  PropTypes.string
}

TextFieldGroup.defaultProps = {
	type: 'text',
	// disabled: '',
	// info: false
}




export default TextFieldGroup
