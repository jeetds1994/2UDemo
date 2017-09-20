import React from 'react'
import Message from './components/Message'
import Partners from './components/Partners'
import NoBackRow from './components/NoBackRow'
import News from './components/News'

export default class Homepage extends React.Component{
  render(){
    return(
      <div>
        <div id="messagecontainer">
          <Message />
        </div>
        <div >
          <Partners />
        </div>
        <div>
          <NoBackRow />
        </div>
        <div>
          <News />
        </div>
      </div>
    )
  }
}
