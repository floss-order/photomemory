import React from 'react'

import './Searchbar.css'

function Searchbar() {
    return (
        <form className="search_form">
          <label className="search_form__label" htmlFor="search-bar">Type the name of an Instagram account</label>
          <input className="search_form__bar" type="search" placeholder="@username" name="search-bar" id="search-bar"/>
          {/* <input type="submit"/> */}
        </form>
    )
}

export default Searchbar
