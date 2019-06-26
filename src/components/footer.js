import React from "react"
import Checker from './atoms/checker'

import '../style/footer.scss'


const Footer = () => (
  <footer>
    <div>
      <Checker />
    </div>
    <div>
      <nav className="dona-lang-nav">
        <span>EN</span>
        {'/'}
        <span  className="dona-lang-activate">FR</span>
      </nav>
    </div>
  </footer>
)


export default Footer
