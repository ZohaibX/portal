import * as React from 'react'
import "../../css/main.css"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import search from '@fortawesome/fontawesome-free-solid/faSearch'


const Navbar = () => {
  const [searchField , changeSearchField] = React.useState("")
  
  return(
    <header className="header">

      <div className="logo-div">
      <img src={'https://project-1-bucket.s3.amazonaws.com/logo-1.png'} alt="" className="logo" />

        <div className="logo-text">
            <h3 className="logo-text__h3">
              University
            </h3>
            <p className="logo-text__p">
              Portal
            </p>
          </div>
      </div>

      <form action="" className="search">
        <input
          value = {searchField}
          onChange={(e) => changeSearchField(e.currentTarget.value)}
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