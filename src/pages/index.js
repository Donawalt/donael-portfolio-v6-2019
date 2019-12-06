import React from 'react'
import {Component} from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { render } from "react-dom";
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import {TweenLite} from 'gsap'
import Helmet from 'react-helmet'


import Loader from '../components/Loader'

import Layout from '../components/layout'
import '../style/index.scss'


class BlogIndex extends Component {

  constructor(){
    super();

  }

  componentDidMount(){
    let scroll = document.querySelector('body').style.overflow = "hidden";
    const projectWrapper = document.querySelector('.project-wrapper');
    let figure = document.querySelectorAll('.fiche');
    let nbProject = figure.length;
    let diapoNum=0;
    const t = nbProject.toString();
    const d = document.querySelectorAll('span.total');
    document.querySelector('body').style.overflow = "hidden";
    let swippable = true;
    for(let cpt=0; cpt< d.length; cpt++){
        d[cpt].innerHTML= t;
     };
    ///////////////////////////////////////////////////////////////////////////
      let projectLinkContainer =  document.querySelectorAll('.group-1, .group-1 a');
      let featuredImages = document.querySelectorAll('.featuredImage');
      let cursor = document.querySelector('#cursor');
      projectLinkContainer.forEach(projectLink => projectLink.onmouseenter = ()=>{
        for(let cpt=0; cpt< featuredImages.length; cpt++){
            featuredImages[cpt].style.filter="grayscale(0%)";
            cursor.style.borderColor = "blue";
            cursor.style.height = "70px";
            cursor.style.width = "70px";
         }
      });

      projectLinkContainer.forEach(projectLink => projectLink.onmouseout= ()=>{
        for(let cpt=0; cpt< featuredImages.length; cpt++){
            featuredImages[cpt].style.filter="grayscale(100%)";
            cursor.style.borderColor = "red";
            cursor.style.height = "35px";
            cursor.style.width = "35px";
            cursor.style.backgroundColor = "transparent";
         }
      });

    ///////////////////////////////////////////////////////////////////////////
    TweenLite.set(document.querySelectorAll('h3>span>p'),{y:210});
    function appearTitle(){
      TweenLite.fromTo(document.querySelectorAll('h3>span>p'),2,{y:210},{y:0});
    }

    TweenLite.delayedCall(2, appearTitle);
    ///////////////////////////////////////////////////////////////////////////
    window.onkeyup = function(e) {
      var key = e.keyCode ? e.keyCode : e.which;
      console.log(key);
      if(swippable === true){
        if (key === 37 || key === 81 ) {
         prec();
       }else if (key === 39 || key === 68) {
         suiv();
        }
      }
   }
   /////////////////////////////////////////
   document.getElementById('project-content').addEventListener("wheel", function(event){
    event.preventDefault();
    if(swippable === true){
      if(event.deltaY>0){
        suiv();
      }
      else {
        prec();
      }
    }
  });
   ////////////////////////////////////////
   document.querySelectorAll('.precB').forEach((el)=>{
     el.addEventListener("click", function(){
     if(swippable === true){
         prec();
     }
   })});
   ////////////////////////////////////////
   document.querySelectorAll('.suivB').forEach((el)=>{
     el.addEventListener("click", function(){
     if(swippable === true){
         suiv();
     }
   })});
   ////////////////////////////////////////
   function figures() {
     for(let cpt=0; cpt< figure.length; cpt++){
         figure[cpt].removeAttribute("style");
      }
    }

    figures();

    function affichage(diapoNum) {
      figure[diapoNum].classList.add("ficheShow");
      figure[diapoNum].classList.remove("ficheEnter");
      TweenLite.fromTo(document.querySelectorAll('.ficheShow h3>span>p'),1.5,{y:210},{y:0});
      TweenLite.fromTo(document.querySelectorAll('.num >p'),0.5,{y:210},{y:0});
      swippable = true;
    }

    affichage(diapoNum);

    function prec() {
        if(diapoNum ===0) // si la diapo est égal à 2
        {
           figure[diapoNum].classList.remove("ficheShow");
           figure[diapoNum].classList.add("ficheOut");
           TweenLite.to(document.querySelectorAll('.ficheOut h3>span>p, .ficheEnter h3>span>p, .fiche h3>span>p'),0.5,{y:210});
           TweenLite.to(document.querySelectorAll('.num >p'),0.5,{y:210});
           figure[nbProject-1].classList.add("ficheEnter");
           swippable=false;
           setTimeout(()=>{
             swippable=false;
             figure[diapoNum].classList.remove("ficheOut");
             diapoNum = nbProject-1; //la variable diapoNum prend donc la valeur de la première diapo
             affichage(diapoNum); //on affiche la première diapo
           },800);
         }
         else
         {
           figure[diapoNum].classList.remove("ficheShow");
           figure[diapoNum].classList.add("ficheOut");
           TweenLite.to(document.querySelectorAll('.ficheOut h3>span>p, .ficheEnter h3>span>p, .fiche h3>span>p'),0.5,{y:210});
           TweenLite.to(document.querySelectorAll('.num >p'),0.5,{y:210});
           figure[diapoNum-1].classList.add("ficheEnter");
           swippable=false;
           setTimeout(()=>{
             swippable=false;
             figure[diapoNum].classList.remove("ficheOut");
             diapoNum = diapoNum-1;
             affichage(diapoNum);
           },800);
         }
       }

     function suiv() {
         if(diapoNum ===nbProject-1) // si la diapo est égal à 2
         {
           figure[diapoNum].classList.remove("ficheShow");
           figure[diapoNum].classList.add("ficheOut");
           TweenLite.to(document.querySelectorAll('.ficheOut h3>span>p, .ficheEnter h3>span>p, .fiche h3>span>p'),0.5,{y:210});
           TweenLite.to(document.querySelectorAll('.num >p'),0.5,{y:210});
           figure[0].classList.add("ficheEnter");
           swippable=false;
           setTimeout(()=>{
             swippable=false;
             figure[diapoNum].classList.remove("ficheOut");
             diapoNum = 0; //la variable diapoNum prend donc la valeur de la première diapo
             affichage(diapoNum); //on affiche la première diapo
           },800);
         }
         else
         {
              figure[diapoNum].classList.remove("ficheShow");
              figure[diapoNum].classList.add("ficheOut");
              TweenLite.to(document.querySelectorAll('.ficheOut h3>span>p, .ficheEnter h3>span>p, .fiche h3>span>p'),0.5,{y:210});
              TweenLite.to(document.querySelectorAll('.num >p'),0.5,{y:210});
              figure[diapoNum+1].classList.add("ficheEnter");
              swippable=false;
              setTimeout(()=>{
                swippable=false;
                figure[diapoNum].classList.remove("ficheOut");
                diapoNum = diapoNum+1;
                affichage(diapoNum);
              },800);
         }
       }
       ////////////////////////////////////////////////////////////////////////
       //

      ////////////////////////////////////////////////////////////////////////
  }

  componentWillUnmount(){
    document.querySelector('body').style.overflow = "scroll";
    document.getElementById('project-content').addEventListener("wheel", function (event) {
        event.stopPropagation();
    }, true);
  }
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    return (
      <>
        <Loader/>
        <Helmet>
          <title>Portfolio | Donaël Walter</title>
          <meta name="description" content="I am an Freelance Webdesigner and Front-end developper. I am also a student at HÉTIC and Webdesigner at OPSONE "/>
        </Helmet>
        <Layout>
        <section className="project-wrapper" id="project-content">
      {posts.map(({ node }, index) => {
        const title = get(node, 'frontmatter.title') || node.fields.slug
        return (
          <figure key={node.fields.slug} className="fiche">
            <div className="dona-infos-project">
              <div className="dona-infos-title-container">
                <h3>
                  <span><p>{title}</p></span>
                </h3>
              </div>
              <div className="dona-infos-container">
                <div className="arrow arianne"><span className="precB">{'<'}</span><span className="suivB">{'>'}</span></div>
                <div className="numb arianne"><span className="num"><p>{index+1}</p></span><div className="bar"></div><span className="total"></span></div>
                <div className="group-voir">
                  <Link to={node.fields.slug}>
                    <span className={"link-project-"+index+' '+'group-1'}>
                      See
                    </span>
                  </Link>  
                </div>
                <div className="group-info">
                  <span className="group">
                    <p className="category">{node.frontmatter.type}</p>
                    <p className="date">{node.frontmatter.date}</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="background_thumbnail">
              <div className="dona-circle-container">
                <div className="dona-circle"></div>
              </div>
              <div className="backgroundFeaturedImage">
                <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} className="featuredImage" />
              </div>
            </div>
          </figure>
        )
      })}
    </section>
        </Layout>
        </>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC},  limit: 5) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            type
            featuredImage {
                childImageSharp{
                    sizes(maxWidth: 2000) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
          }
        }
      }
    }
  }
`
