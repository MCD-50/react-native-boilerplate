//import from system
import React, { Component } from 'react';
import { Navigator } from 'react-native';

//import from app
import { ThemeProvider } from 'react-native-material-component';
import { Page } from './src/enums/Page.js';
import { uiTheme } from './src/constants/AppStyle.js';
const UIManager = require('UIManager');

//pages
import SplashPage from './src/ui/views/SplashPage';
import LoginPage from './src/ui/views/LoginPage';
import RegistrationPage from './src/ui/views/RegistrationPage'; 

//in home page section
import CategoryPage from './src/ui/views/CategoryPage';
import CartPage from './src/ui/views/CartPage';
import RecommendedPage from './src/ui/views/RecommendedPage';

//for showing category and sub category
import SubCategoryPage from './src/ui/views/SubCategoryPage'
import ProductPage from './src/ui/views/ProductPage';
import ProductDetailPage from './src/ui/views/ProductDetailPage';

import ProfilePage from './src/ui/views/ProfilePage';

class Kick extends Component {
	constructor(params) {
		super(params);
	}

	componentDidMount() {
		if (UIManager.setLayoutAnimationEnabledExperimental) {
			UIManager.setLayoutAnimationEnabledExperimental(true);
		}
	}

	renderNavigation(route, navigator) {
		const id = route.id;
		if (id == 1)
			return <SplashPage navigator={navigator} route={route} />
		else if (id == 2)
			return <LoginPage navigator={navigator} route={route} />
		else if (id == 3)
			return <RegistrationPage navigator={navigator} route={route} />
		else if (id == 4)
			return <CategoryPage navigator={navigator} route={route} />
		else if (id == 5)
			return <CartPage navigator={navigator} route={route} />
		else if (id == 6)
			return <RecommendedPage navigator={navigator} route={route} />
		else if (id == 7)
			return <SubCategoryPage navigator={navigator} route={route} />
		else if (id == 8)
			return <ProductPage navigator={navigator} route={route} />
		else if (id == 9)
			return <ProductDetailPage navigator={navigator} route={route} />
		else if (id == 10)
			return <ProfilePage navigator={navigator} route={route} />
	}

	render() {
		return (
			<ThemeProvider uiTheme={uiTheme}>
				<Navigator initialRoute={{ id: 1, name: 'Splash' }}
					renderScene={this.renderNavigation.bind(this)}
					configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottomAndroid} />
			</ThemeProvider>
		);
	}
}

export default Kick;