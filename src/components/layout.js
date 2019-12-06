/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import Helmet from 'react-helmet'
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import {TweenLite} from 'gsap'
import favicon from '../images/favicon.png'

import '../style/layout.scss'
import Header from "./header"
import Footer from "./footer"
import Menu from "./Menu"

class Layout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'black',
      lang: 'fr'
    };


  }

  componentDidMount(){
    let cursor = document.querySelector('#cursor');
    let links = document.querySelectorAll('a');
    TweenLite.set(cursor, {borderColor: "red", height: "35px", width: "35px", backgroundColor:"transparent"});
    //////////////////////////////////////////////////////////////////////////////
    document.addEventListener('click',()=>{
      //réfléchir à une animation ici
    });
    //////////////////////////////////////////////////////////////////////////
    links.forEach(array => array.onmouseenter = ()=>{
      cursor.style.borderColor = "blue";
      cursor.style.height = "70px";
      cursor.style.width = "70px";
    } );
    links.forEach(array => array.onmouseout = ()=>{
      cursor.style.borderColor = "red";
      cursor.style.height = "35px";
      cursor.style.width = "35px";
      cursor.style.backgroundColor = "transparent";
    } );
  }
  //////////////////////////////////////////////////////////////////////////
  verifyLang(){
    if(this.state.lang === 'fr'){
      document.querySelector('html').setAttribute('lang', 'fr');
    }
    else{
      document.querySelector('html').setAttribute('lang', 'en');
    }
  }
  //////////////////////////////////////////////////////////
  render(){
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
          <Helmet link={[
              { rel: "icon", type: "image/png", href: `${favicon}` },
          ]}/>
          <section className="Layout" >
            <Header siteTitle={data.site.siteMetadata.title} />
            <div>
              <main>{this.props.children}</main>
            </div>
            <Footer/>
            <Menu/>
          </section>
          </>
        )}
      />
    )
  }
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
