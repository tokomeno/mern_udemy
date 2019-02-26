import React, {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'
import TextFieldGroup from '../common/TextFieldGroup'
import TextAreaFieldGroup from '../common/TextAreaFieldGroup'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {addEducation} from '../../actions/profileActions'

class AddEducation extends Component {
	constructor(props){
		super(props)
		this.state = {
			school: '',
			degree: '',
			fieldofstudy:'',
			from: '',
			to:'',
			current: false,
			description: '',
			errors:{},
			disabled: false
		}
	}

	onSubmit = (e) => {
		e.preventDefault();
		console.log('sub')

		this.props.addEducation(this.state, this.props.history)
	}


	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onCheck = (e) => {
			this.setState({
				disabled: !this.state.disabled,
				current: !this.state.current
			})
	}

	render(){
		const {errors} = this.props
		return(
			<div className="add-experiance">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<Link to="/dashboard" className="btn btn-light">
							Back
							</Link>
							<h3>
								AddEducation
							</h3>
		

							<form onSubmit={this.onSubmit}>

							<TextFieldGroup
								placeholder="school"
								name="school"
								value={this.state.school} 
								onChange={this.onChange}
								error={errors.school}
							/>
								
							<TextFieldGroup
								placeholder="degree"
								name="degree"
								value={this.state.degree} 
								onChange={this.onChange}
								error={errors.degree}
							/>
	

							<TextFieldGroup
								placeholder="fieldofstudy"
								name="fieldofstudy"
								value={this.state.fieldofstudy} 
								onChange={this.onChange}
								error={errors.fieldofstudy}
							/>

							<h5>From Date</h5>
							<TextFieldGroup
								type="date"
								placeholder="from"
								name="from"
								value={this.state.from} 
								onChange={this.onChange}
								error={errors.from}
							/>



							<h6>To Date</h6>
							<TextFieldGroup
								type="date"
								placeholder="to"
								name="to"
								value={this.state.to} 
								onChange={this.onChange}
								error={errors.to}
								disabled={this.state.disabled ? 'disabled' : ''}
							/>

							<div className="form-check mb-4">
								<input type="checkbox" 
								className="form-check-input"
								name="current"
								value={this.state.current}
								checked={this.state.current}
								onChange={this.onCheck}
								id="current"
								/>
								<label htmlFor="current" className="form-check-label">
									current Job
								</label>
							</div>



						 <TextAreaFieldGroup
					          placeholder="Desc"
					          name="description"
					          value={this.state.description}
					          onChange={this.onChange}
					          error={errors.description}
					          info="Tell us a little about yourself"
					        />


							<button className="btn btn-info" type="submit">Submit</button>

							</form>

						</div>
					</div>
				</div>
			</div>
		)
	}

}


AddEducation.propTypes = {
	profile: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
	addEducation: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	profile: state.profile,
	errors:state.errors
})

export default connect(mapStateToProps, {addEducation})(withRouter(AddEducation))
// export default connect()(AddEducation)
