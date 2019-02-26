import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
// import axios from 'axios'
import Spinner from '../common/Spinner'
import { getProfiles } from '../../actions/profileActions'
import ProfileItem from './ProfileItem'

class Profiles extends Component {
	state = {

	}
	componentWillMount(){
		this.props.getProfiles();
	}

  render() {
  	const {profiles, loading} = this.props.profile
  	console.log(profiles)
  	let profileItems;
    if(profiles === null || loading){
    	profileItems = <Spinner />
    }else{
    	if(profiles.length > 0){
    		profileItems = profiles.map(p => (<ProfileItem  key={p._id} profile={p} />)	)

    	}else{
    		profileItems = <h4>No profiles found...</h4>	
    	}
    }
    return (
		<div className="profiles">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h1 className="display-4">Dev Profiles</h1>

						{profileItems}
					</div>
				</div>
			</div>
		</div>
    )
   }
}
Profiles.propTypes = {
	getProfiles: PropTypes.func.isRequired,
	profile: PropTypes.array.isRequired,
	// profiles: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
	profile: state.profile
})

export default connect(mapStateToProps, {getProfiles})(Profiles)

