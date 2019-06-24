import React from 'react';
import './style.scss';

const menu = (props) => {
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
  <ul className="menu-items">
   {categories.map(category => 
    <li key={category.name} onPointerEnter={() => props.toggleCategoryOpen(category.name)} onPointerLeave={() => props.toggleCategoryOpen(category.name)}>
     <a href={`/${category.name}`}>{category.name.toUpperCase()}</a>
     {(props.openCategory === category.name && category.subcategories) && 
     <ul className="dropdown">
      {category.subcategories.map(subcategory => 
       <li key={subcategory}>
        <a href={`/${category.name}/${subcategory}`}>{subcategory.toUpperCase()}</a>
       </li>
      )}
     </ul>}       
    </li>
   )}
  </ul>
 )
}

export default menu
