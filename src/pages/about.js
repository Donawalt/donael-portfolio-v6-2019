import React from 'react'
import { withPrefix } from 'gatsby'
import {TweenLite, TimelineLite} from 'gsap'
import Layout from '../components/layout'
import SEO from '../components/seo'


import '../style/about.scss'
class IndexPage extends React.Component {
  componentDidMount(){
    let aboutSection = document.querySelector('.aboutSection');
    let aboutTitle = document.querySelectorAll('.h1Wrapper p');
    let aboutIntro = document.querySelector('.intro');
    let aboutMail = document.querySelector('.mailLink');
    let tL = new TimelineLite();

    TweenLite.set([aboutSection,aboutTitle,aboutIntro,aboutMail], {opacity:0});

    tL.fromTo(aboutSection,1, {opacity:0}, {opacity:1});
    tL.fromTo(aboutTitle,0.8, {opacity:0, y:100}, {opacity:1, y:0});
    tL.fromTo(aboutIntro,0.7, {opacity:0, y:50},{opacity:1, y:0});
    tL.fromTo(aboutMail,0.6, {opacity:0, y:-25},{opacity:1, y:0});
  }
  render(){
    return(
      <>
      <SEO title='About' />
      <Layout>
        <section className="aboutSection">
          <div className="portraitWrapper">
            <img src={withPrefix('portrait.jpg')} className="portraitPicture" loading="lazy"></img>
          </div>
          <article className="article">
            <h1>
              <div className="h1Wrapper"><p>I am</p></div>
              <div className="h1Wrapper"><p>Donaël Walter</p></div>
            </h1>
            <p className="intro">
              Front-end Developer and UI/UX Designer in Paris. I work at <a href="https://opsone.net" target="_blank">OPSONE</a> as a Web Designer. I study at <a href="https://www.hetic.net" target="_blank">HÉTIC</a> in Web development and Webdesign. I'm also available in freelancing.
            </p>
            <a className="mailLink" href="mailto:contact@donaelwalter.com">Contact me</a>
          </article>
        </section>
      </Layout>
      </>
    )
  }
}

export default IndexPage
