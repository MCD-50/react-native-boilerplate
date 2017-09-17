//import from system
import React, { Component, PropTypes } from 'react';
import { BackAndroid } from 'react-native';

//import from app
import Container from '../../../Container';


const propTypes = {
	navigator: PropTypes.object.isRequired,
	route: PropTypes.object.isRequired,
};


class ProfilePage extends Component {
	constructor(params) { 
		super(params);
		this.state = {

		}
		this.onPopUp = this.onPopUp.bind(this);
	}

	componentWillMount() {
		this.addBackEvent();
	}

	componentWillUnmount() {
		this.removeBackEvent();
	}


	addBackEvent() {
		BackAndroid.addEventListener('hardwareBackPress', () => {
			this.popUp();
		});
	}

	removeBackEvent() {
		BackAndroid.removeEventListener('hardwareBackPress', () => {
			this.onPopUp();
		});
	}

	onPopUp() {
		if (this.props.navigator && this.props.navigator.getCurrentRoutes().length > 1) {
			this.props.navigator.pop();
			return true;
		}
		return false;
	}

	render() {
		return (
			<Container>

			</Container>
		)
	}
}

ProfilePage.propTypes = propTypes;
export default ProfilePage;