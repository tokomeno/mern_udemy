import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
// import axios from 'axios'
import {connect} from 'react-redux'
import {getCurrentProfile, deleteAcount} from '../../actions/profileActions'

import Spinner from '../common/Spinner'
import ProfileActions from './ProfileActions'

import Experience from './Experience'
import Education from './Education'

class Dashboard extends Component {

	componentWillMount(){
		console.log(this.props)
		this.props.getCurrentProfile()
	}

	onDeleteClick = () => {
		// alert(1)
		this.props.deleteAcount()
	}

  render() {
  	const {user} = this.props.auth
  	const {profile, loading} = this.props.profile

  	let dashboardContent;

  	if(profile === null || loading){
  		dashboardContent = <Spinner/>
  	}else{
  		// dashboardContent =
  		if(Object.keys(profile).length > 0){
  			dashboardContent = (
  				<div>
  					<h1>
	  				Welcome <Link to={profile.handle}> {user.name} </Link>
	  				</h1>
	  				<ProfileActions></ProfileActions>

	  				<Experience experience={profile.experience} ></Experience>
	  				<Education education={profile.education} > </Education>

	  				<div className="mt-3" >
						<button  onClick={this.onDeleteClick} className="btn btn-danger">Deelte</button>
	  				</div>
  				</div>
  			)
  		}else{
  			dashboardContent = (
				<div>
					<p className="lead text-muted">Welcome {user.name}</p>
					<p>Set profile</p>
					<Link to="/create-profile" className="btn btn-lg btn-info">
						Create Profile
					</Link>
				</div>
  			)
  		}
  	}
    return (
		<div className="dashboard">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="display-4">dashboard</div>
						{dashboardContent}
					</div>
				</div>
			</div>
		</div>
    )
   }
}
Dashboard.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	profile: state.profile,
	auth:state.auth
})

export default connect(mapStateToProps, {getCurrentProfile, deleteAcount})(Dashboard)
