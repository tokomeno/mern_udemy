import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
// import axios from 'axios'
import {connect} from 'react-redux'
import {getCurrentProfile} from '../../actions/profileActions'

import Spinner from '../common/Spinner'

class Dashboard extends Component {

	componentWillMount(){
		console.log(this.props)
		this.props.getCurrentProfile()
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
  			dashboardContent = <h1>dddddddddd</h1>
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

export default connect(mapStateToProps, {getCurrentProfile})(Dashboard)
