import React from 'react'
import './News.css'

export default class News extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor (props) {
    super(props);
    this.state = {
      customers: []
    }
  }

  componentDidMount () {
    fetch('/api/customers')
      .then((res) => res.json())
      .then((customers) => {
        this.setState({ customers }, () => console.log('SET_STATE!'))
      })
      .catch((err) => console.log(err))
  }

  render () {
    return (
      <div className="news">
        <h1>
             Hello,
          {this.props.data}
        </h1>
        <h2>
          {this.state.customers.map((item, i) => <p key={i}> {`${item.firstName}:${item.lastName}`}</p>)}
        </h2>
      </div>
    )
  }
}
