import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Burger from './atoms/Burger'
import '../style/header.scss'

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link
          to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div>
      <Burger/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Donaël Walter`,
}

export default Header
