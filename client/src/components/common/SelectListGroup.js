import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const SelectListGroup = ({
	name,
	value,
	label,
	error,
	onChange,
	disabled,
	options,
	info
}) => {
	const selectOptions = options.map(option => (
		<option value={option.value} key={option.label} >
			{option.label}
		</option>
	))
	return (
	    <div className="form-group">
	      <select
	       className={classnames('form-control form-control-lg', {
	       	'is-invalid':error
	       })}
	       onChange={onChange}
	        value={value}
	        name={name}
	        disabled={disabled}
	        >
				{selectOptions}
	       </select>
	        {info && (<div className="form-text text-muted">{info}</div>)}
	        {error && (<div className="invalid-feedback">{error}</div>)}
	    </div>
	)
}


SelectListGroup.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	info: PropTypes.string,
	error: PropTypes.string,
	onChange:  PropTypes.func.isRequired,
	disabled:  PropTypes.string,
	options: PropTypes.array.isRequired
}

SelectListGroup.defaultProps = {
	// type: 'text',
	// disabled: '',
	// info: false
}




export default SelectListGroup
