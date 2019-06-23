import React, { Component } from 'react';
import MenuIcon from '../../static/menu_icon.png'
import Logo from '../../static/levis_logo.png'
import Searchbar from './Searchbar'
import './style.scss';
import Menu from './Menu'
class Header extends Component {
  state = {
  	openMenu: false, 
  	openCategory: 'mujer',
  	mobile: false
  }

  componentDidMount() {
  	this.detectIfWeAreOnMobile()
  	window.addEventListener('resize', this.detectIfWeAreOnMobile.bind(this));
		}

		componentWillUnmount() {
  	window.removeEventListener('resize', this.detectIfWeAreOnMobile.bind(this));
		} 

  detectIfWeAreOnMobile() {
  	const isItAlreadyOpenedAndOnMobile = this.state.mobile && this.state.openMenu
  	const isItOnMobileNow = window.innerWidth < 640
  	this.setState({mobile: isItOnMobileNow, openMenu: isItOnMobileNow ? isItAlreadyOpenedAndOnMobile : true})
 	}

  toggleDropdownMenuOpen = () => {
  	this.setState({openMenu: !this.state.openMenu, openCategory: null})
  }

  toggleCategoryOpen = (category) => {
  	let isTheCategoryAlreadyOpen = this.state.openCategory === category
  	this.setState({openCategory: isTheCategoryAlreadyOpen ? null : category})
  }

	 render() {
  return (
 	<header className="main-header">
 			<img id="logo" src={Logo} alt="Logo de Levi's"/>
 			{this.state.mobile && <button onClick={this.toggleDropdownMenuOpen}><img src={MenuIcon} alt="Menú desplegable"/></button>}
 			{this.state.openMenu && 
 				<div className="header-items">
 					<Menu toggleCategoryOpen={this.toggleCategoryOpen} openCategory={this.state.openCategory}/>
 					<Searchbar />
 				</div>}
 	</header>

    );
  }
}
export default Header
