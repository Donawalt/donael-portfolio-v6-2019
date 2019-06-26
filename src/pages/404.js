import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/Layout'
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
          <h2>On s'est peut-être égarés.</h2>
        </div>
        <div>
          <img src={'../404.png'} alt="404 Image" />
        </div>
        <div>
          <Link to="/" >Retourner à l'acceuil </Link>
        </div>
      </div>
      <div className="backgroundImgWrapper">
      </div>
      </Layout>
    )
  }
}

export default NotFound
