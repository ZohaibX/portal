import * as React from 'react';
import '../../css/main.css'
import _ from 'lodash'


/// css
import {InputGroup , FormControl} from 'react-bootstrap'


const SearchField = ({rows , searchField , changeSearchField , updateCurrentPage}: 
  {rows: string[] , searchField:string , changeSearchField: any , updateCurrentPage: any}) => { 
  
  const handleChange = (e:any) => {
    updateCurrentPage(1)
    changeSearchField(e.currentTarget.value)
  }
  return (
    <form action="" className="search">
        <input
          value = {searchField}
          onChange={handleChange}
          type="text"
          className="search__input"
          placeholder="Search Your  Mail"
        />
      </form>
  )
}

export default {
  component: SearchField
}