import React, { Component } from 'react';
import Logo from '../../static/levis_logo.png'
import Menu from './Menu'
import Searchbar from './Searchbar'
import MenuIcon from '../../static/menu_icon.png'
import './style.scss';

class Header extends Component {
 state = {
  openMenu: false, 
  openCategory: null,
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

 toggleCategoryOpen = (category) => {
  let isTheCategoryAlreadyOpen = this.state.openCategory === category
  this.setState({openCategory: isTheCategoryAlreadyOpen ? null : category})
 }

 toggleDropdownMenuOpen = () => {
  this.setState({openMenu: !this.state.openMenu, openCategory: null})
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
