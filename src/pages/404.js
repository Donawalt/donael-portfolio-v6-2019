import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout'
import '../style/notFound.scss'

class NotFound extends React.Component {
  componentDidMount(){

  }

  render(){
    return(
      <Layout>
      <div className="contentGrid">
        <div>
          <h1>Maybe we lost our way.</h1>
        </div>
        <div>
          <img src={'../404.svg'} alt="404 Image" />
        </div>
        <div>
          <Link className="backlink" to="/" >Back to Home</Link>
        </div>
      </div>
      <div className="backgroundImgWrapper">
      </div>
      </Layout>
    )
  }
}

export default NotFound
