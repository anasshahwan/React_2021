import React from 'react'
import PropTypes from 'prop-types'
function Header(props) {
    return (
        <nav className ="navbar navbar-light bg-primary">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Todo App React </span>
  </div>
</nav>
    )
}


Header.defaultProps = {
    title: "React_2021 Todo App"
}

Header.propTypes = {
    title : PropTypes.string,
     
}

export default Header
