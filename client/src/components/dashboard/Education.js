import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import axios from 'axios'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Moment from 'react-moment'
import {deleteEducation} from '../../actions/profileActions'

class Education extends Component {
	state = {

	}
	componentWillMount(){

	}



  render() {
  	const education = this.props.education.map(exp => (
		<tr key={exp._id} >
			<td>{exp.school}</td>
			<td>{exp.degree}</td> 
			<td>
				<Moment format="YYYY/MM/DD" >{exp.from}</Moment>
				-
				{exp.to === null ? ('now') : (<Moment format="YYYY/MM/DD" >{exp.to}</Moment>)}
			 </td>
			<td>
			<button className="btn btn danger" onClick={() => {
				this.props.deleteEducation(exp._id, this.props.history)
			}}>Delete
			</button></td>
		</tr>
  	))
    return (
		<div className="mb-0">
			<h4 className="mb-4">Edu cred</h4>
			<table className="table ">
				<thead>
					<tr>
						<th>school</th>
						<th>degree</th>
						<th>year</th>
						<th></th>
						<th></th>
					</tr>
					 
						{education}
				 
				</thead>
			</table>
		</div>
    )
   }
}

Education.propTypes = {
	todos: PropTypes.array.isRequired,
	deleteExperiance: PropTypes.func.isRequired
}


export default connect(null, {deleteEducation})(withRouter(Education))
