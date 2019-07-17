import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import {TweenLite, TimelineLite} from 'gsap'
import SEO from '../components/seo'

import Layout from '../components/layout'
import '../style/project.scss'
class Project extends React.Component {
  componentDidMount(){
    let sectionProject = document.querySelector('.sectionProject');
    let contentProjectWrapper = document.querySelectorAll('.contentProjectWrapper');
    let contentBack = document.querySelectorAll('.contentBack');
    let tl = new TimelineLite();

    TweenLite.set([contentProjectWrapper,contentBack], {opacity:0});

    tl.fromTo(contentProjectWrapper,0.8, {opacity:0}, {opacity:1});
    tl.fromTo(contentBack,0.6, {opacity:0, y:50},{opacity:1, y:0});

  }

  render(){
    const projects = get(this, 'props.data.allMarkdownRemark.edges')
    return(
      <Layout>
      <SEO title="Projects" />
      <section className="sectionProject">
        <div className="contentProjectWrapper">
        {projects.map(({ node }, index) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <figure key={node.fields.slug}>
            <Link to={node.fields.slug}>
              <div className="contentFront">
                <p className="numberProject">0{index+1}</p>
              </div>
              <div className="contentBack">
                <div className="featuredImageWrapper">
                  <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} className="featuredImage" />
                </div>
                <div className="titleWrapper">
                  <Link to={node.fields.slug}>
                  <div className="contentTitleWrapper">
                    <p>Discover</p>
                    <p>{title}</p>
                  </div>
                  </Link>
                </div>
              </div>
              </Link>
            </figure>
          )
        })}
        </div>
      </section>
      </Layout>
    )
  }
}

export default Project

export const pageQuery = graphql`
  query projectQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
