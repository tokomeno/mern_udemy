import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import axios from 'axios'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Moment from 'react-moment'
import {deleteExperiance} from '../../actions/profileActions'

class Experience extends Component {
	state = {

	}
	componentWillMount(){

	}



  render() {
  	const experience = this.props.experience.map(exp => (
		<tr key={exp._id} >
			<td>{exp.company}</td>
			<td>{exp.title}</td> 
			<td>
				<Moment format="YYYY/MM/DD" >{exp.from}</Moment>
				-
				{exp.to === null ? ('now') : (<Moment format="YYYY/MM/DD" >{exp.to}</Moment>)}
			 </td>
			<td>
			<button className="btn btn danger" onClick={() => {
				this.props.deleteExperiance(exp._id, this.props.history)
			}}>Delete
			</button></td>
		</tr>
  	))
    return (
		<div className="mb-0">
			<h4 className="mb-4">Exper cred</h4>
			<table className="table ">
				<thead>
					<tr>
						<th>company</th>
						<th>title</th>
						<th>year</th>
						<th></th>
						<th></th>
					</tr>
					 
						{experience}
				 
				</thead>
			</table>
		</div>
    )
   }
}

Experience.propTypes = {
	todos: PropTypes.array.isRequired,
	deleteExperiance: PropTypes.func.isRequired
}


export default connect(null, {deleteExperiance})(withRouter(Experience))
