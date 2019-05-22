import React, {Component} from 'react'
import {connect} from 'react-redux'
import {startClock, serverRenderClock} from '../actions/action_clock';
import Clock from '../components/clock';
import Counter from '../components/counter';
import SearchBar from '../containers/search_bar';
import SearchBar2 from '../containers/search_bar2';

class Index extends Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    reduxStore.dispatch(serverRenderClock(isServer))
    return {}
  }

  componentDidMount () {
    const {dispatch} = this.props
    this.timer = startClock(dispatch)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    const {clock} = this.props;
    return (
      <div>
        <Clock lastUpdate={clock.lastUpdate} light={clock.light} />
        <Counter />
        <SearchBar />
        <SearchBar2 />
      </div>
    );
  }
}

function mapStateToProps (state) {
  const { clock } = state
  return { clock }
}

export default connect(mapStateToProps)(Index)
