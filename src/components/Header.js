import React from "react"
import PropTypes from "prop-types"
import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h3 className="header">{title}</h3>
      <Button color="green" text={showAdd ? "Close" : "Add"} onClick={onAdd} />
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
