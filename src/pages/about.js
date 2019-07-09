import React from 'react'
import {TweenLite, TimelineLite} from 'gsap'
import Layout from '../components/layout'
import Helmet from 'react-helmet';
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
      <SEO title='À propos' />
      <Layout>
        <section className="aboutSection">
          <div className="portraitWrapper">
            <img src={'portrait.jpg'} className="portraitPicture" loading="lazy"></img>
          </div>
          <article className="article">
            <h1>
              <div className="h1Wrapper"><p>Je suis</p></div>
              <div className="h1Wrapper"><p>Donaël Walter</p></div>
            </h1>
            <p className="intro">
              Développeur front-end, Webdesigner de <strong>Valence</strong>.
              Je suis actuellement en recherche d'un <strong>contrat de professionnalisation</strong> dans le domaine du <strong>Webdesign</strong> et/ou du <strong>développement Web</strong>, afin de poursuivre mes études au sein de l'école <a href="https://www.hetic.net/formations/bachelor-web/programme-bachelor-web" target="_blanck">@HETIC</a> en bachelor web.
            </p>
            <a className="mailLink" href="mailto:contact@donaelwalter.com">Contactez moi</a>
          </article>
        </section>
      </Layout>
      </>
    )
  }
}

export default IndexPage
