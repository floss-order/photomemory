import React from 'react'

import './Searchbar.css'

function Searchbar() {
    return (
        <form className="search-form">
          <label className="search-form_label" htmlFor="search-bar">Type the name of an Instagram account</label>
          <input className="search-form_bar" type="search" placeholder="@username" name="search-bar" id="search-bar"/>
          {/* <input type="submit"/> */}
        </form>
    )
}

export default Searchbar
