import React, { Component } from 'react';
import MenuIcon from '../../static/menu_icon.png'
import './style.scss';

class Header extends Component {
  state = {
  	openMenu: true, 
  	openCategory: null,
  	mobile: false,
  }

  detectIfWeAreOnMobile() {
  	this.setState({mobile: window.innerWidth < 780});
		}

  toggleDropdownMenuOpen = () => {
  	this.setState({openMenu: !this.state.openMenu, openCategory: null})
  }

  toggleCategoryOpen = (category) => {
  	let isTheCategoryAlreadyOpen = this.state.openCategory === category
  	this.setState({openCategory: isTheCategoryAlreadyOpen ? null : category})
  }

  componentDidMount() {
  	window.addEventListener('resize', this.detectIfWeAreOnMobile.bind(this));
		}

componentWillUnmount() {
  window.removeEventListener('resize', this.detectIfWeAreOnMobile.bind(this));
} 

  render() {
  	const categories = [
  	  {
  	  	name: 'hombre',
  	  	subcategories: ['remeras', 'jeans']
  	  },
  	  {
  	  	name: 'mujer',
  	  	subcategories: ['remeras', 'jeans']
  	  },
  	  {
  	  	name: 'contacto'
  	  }
  	]
    
  return (
 	<header className="main-header">
 	 <button onClick={this.toggleDropdownMenuOpen}>
 	  <img src={MenuIcon} alt="menú" />
 	 </button>
 		{this.state.openMenu && 
 			<div>
 			<ul>
 				{categories.map(category => 
 					<li 
 					onMouseEnter={() => this.toggleCategoryOpen(category.name)} 
 					onMouseLeave={() => this.toggleCategoryOpen(category.name)}>
 					<a href={`/${category.name}`}>{category.name}</a>
 						{(this.state.openCategory === category.name && category.subcategories) && 
 							<ul>
 								{category.subcategories.map(subcategory => <li>
 									<a href={`/${category.name}/${subcategory}`}>{subcategory}</a>
 								</li>)}
 							</ul>
 						}				
 					</li>
 				)}
 			</ul>
 			<input type="search" />
 			</div>
 		}	
 	</header>

    );
  }
}
export default Header
