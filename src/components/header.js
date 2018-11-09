import React from 'react'
import { Link } from 'gatsby'
import Navigation from '../components/Navigation'
const Header = ({ siteData }) => (
  <header className="rm-header">
    <div className="rm-container">
      <div className="rm-header__grid">
        <div className="rm-header__main">
          <Link
            to="/"
            className="brand"
          >
            <h2 className="emile">
                {siteData.suptitle}
            </h2>
            <h1 className="brand-name">
                {siteData.title}
            </h1>
          </Link>
        </div>
        <div className="rm-header__aside" style={{ backgroundImage: 'url(https://rougon-macquart.com/images/header_image.jpg)' }}>
            <img className="header-image" src="" alt="" />
        </div>
        <Navigation />
      </div>
    </div>
  </header>
)
export default Header
