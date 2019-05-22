import App, {Container} from 'next/app'
import React from 'react'
import nextRedux from '../store/redux-config';
import { Provider } from 'react-redux'

class MyApp extends App {
  render () {
    const {Component, pageProps, reduxStore} = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default nextRedux(MyApp)
