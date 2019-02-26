import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import isEmpty from '../../validation/is-empty'

// import axios from 'axios'

class ProfileItem extends Component {
	state = {

	}
	componentWillMount(){
console.log(this.props)
	}

  render() {
  	let {profile} = this.props
    return (
		<div className="card card-body bg-ligth mb-3">
			<div className="row">
				<div className="col-2">
					<img src={profile.user.avatar} className="rounded-circle"/>
				</div>
					<div className="col-lg-6 col-md-4  col-8">
					<h3>{profile.user.name}</h3>
					<p>
						{profile.status} {isEmpty(profile.company) ? null : (<sapn>at {profile.company}</sapn>)}
					</p>

					<p>
						 {isEmpty(profile.location) ? null : (<sapn>at {profile.location}</sapn>)}
					</p>
					<Link to={`/profile/${profile.handle}`} className="btn btn-info" >
					View Profile
					</Link>
</div>
					<div className="col-md-4 d-none d-md-block">
						<h4>Skiils</h4>
						<ul className="list-group">
							{profile.skills.slice(0,4).map(skill => {
								return (
									<li key="index" className="list-group-item">
										<i className="fa fa-check pr-1"></i>
										{skill}
									</li>
									)
							})}
						</ul>
					</div>
					
				
			</div>
		</div>
    )
   }
}

ProfileItem.propTypes = {
	profile: PropTypes.object.isRequired
}

export default ProfileItem

