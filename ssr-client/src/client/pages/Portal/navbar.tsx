import * as React from 'react'
import "../../css/main.css"
import user from './user.jpg'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import search from '@fortawesome/fontawesome-free-solid/faSearch'

const Navbar = () => {
  return(
    <header className="header">

      <div className="logo-div">
      <img src={'https://project-1-bucket.s3.amazonaws.com/logo-1.png'} alt="" className="logo" />
      </div>

      <form action="" className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search Departments"
        />
        <button className="search__button">
          <FontAwesomeIcon className="search__icon" icon={search}/>
        </button>
      </form>
    </header>
  )
}

export default {
  component: Navbar 
}