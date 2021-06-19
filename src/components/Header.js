import React from "react"
import PropTypes from "prop-types"
import Button from "./Button"

const Header = ({ title }) => {
  const onClick = () => {
    console.log("in parent event onClick")
  }

  return (
    <header className="header">
      <h3 className="header">{title}</h3>
      <Button text="Add" onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
  title: "Default Title"
}
Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
