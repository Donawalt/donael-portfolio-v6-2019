import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import {TweenLite, TimelineLite} from 'gsap'
import get from 'lodash/get'
import SEO from '../components/seo'

import Img from 'gatsby-image'

import { graphql } from 'gatsby'

import Layout from '../components/layout'

import '../style/post.scss'

class ProjectPostTemplate extends React.Component {
  constructor(){
    super();
  }

  componentDidMount(){
    let title = document.querySelector('.titleProject');
    let thumbnail = document.querySelector('.featuredImage');
    let content = document.querySelector('.content-project');
    let tl = new TimelineLite();

    TweenLite.set(title,{y:-100});
    TweenLite.set(thumbnail,{opacity: 0});
    TweenLite.set(content,{opacity:"0"});
    tl.to(thumbnail,0.1000,{opacity: 1});
    tl.to(title,0.600,{y: 0});
    tl.fromTo(content,0.800,{opacity:0, y:50},{opacity:1, y:0});
  }
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pageContext

    return (
        <Layout>
        <section className="Post" id="BlogPost">
        <SEO title={post.frontmatter.title} lang="fr" description={post.html}/>
        <div className="header-project">
          <div className="titleWrapper"><h1 className="titleProject">{post.frontmatter.title}</h1></div>
          <div className="background_thumbnail">
            <div className="dona-circle-container">
              <div className="dona-circle"></div>
            </div>
            <div>
              <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} className="featuredImage" />
            </div>
          </div>
        </div>
        <div className="content-project">
          <div  id="aPost" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <div className="suggestion-project">
          <center>NEXT</center>
          <section>
            {
            next &&
            <Link to={next.fields.slug} rel="next" className="nextLink">
             {
               //next.frontmatter.title}
               next.frontmatter.title
             }
            </Link>
            }
          </section>
        </div>
      </section>
      </Layout>
    )
  }
}

export default ProjectPostTemplate

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        featuredImage {
            childImageSharp{
              sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
                    }
                    }
                  }
      }
    }
  }
`
