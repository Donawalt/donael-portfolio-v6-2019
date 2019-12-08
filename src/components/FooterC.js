import React from "react"
import Link from 'gatsby-link'

import '../style/footerC.scss'

const FooterC = () => (
    <>
        <div className="footerC">
            <h4 className="footerC-title">
                <p class="footer-C-title-content"><span>- Let's work together - Let's work together</span></p>
                <p class="footer-C-title-content fctc2"><span>- Let's work together - Let's work together</span></p>
            </h4>
            <hr/>
            <section>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/project/">Projects</Link></li>
                        <li><Link to="/about/">About</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="mailto:contact@donaelwalter.com" target="_blanck">contact@donaelwalter.com</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/donaël-walter/" target="_blanck">Linkedin</a></li>
                        <li><a href="https://github.com/Donawalt" target="_blanck">Github</a></li>
                        <li><a href="https://www.instagram.com/walt_dona/" target="_blanck">Instagram</a></li>
                    </ul>
                </div>
            </section>
        </div>
    </>
)

export default FooterC