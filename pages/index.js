import React, { Component } from 'react'

import IntlContainer from '../src/containers/IntlContainer'
import HomePage from '../src/components/HomePage'
import Layout from '../src/components/Layout'

class Page extends Component {
  render () {
    const intl = this.props.intl

    return (
      <IntlContainer>
        <Layout>
          <HomePage />
        </Layout>
      </IntlContainer>
    )
  }
}

export default Page
