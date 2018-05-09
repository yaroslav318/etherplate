import React, {
  Component
} from 'react'

import nfToken from '@/contracts/nfToken-factory'
import TokenList from './token-list'

export default class ReceivedTokens extends Component {

  constructor (props) {
    super(props)
    this.state = {
      tokens: []
    }
  }

  // componentDidMount () {
    // nfToken().then((instance) => {
    //   this.boughtToken = instance.BoughtToken({
    //       recipient: web3.eth.accounts[0]
    //     }, {
    //       fromBlock: 0, toBlock: 'latest'
    //     }
    //   )

    //   this.boughtToken.watch((error, result) => {
    //     if (error)
    //       console.error(error)
    //     else {
    //       this.setState({
    //         tokens: this.state.tokens.concat(result)
    //       })
    //     }
    //   })
    // }).catch((error) => {
    //   console.error(error)
    // })
  // }

  // componentWillUnmount () {
  //   if (this.boughtToken) this.boughtToken.stopWatching()
  // }

  render () {
    return (
      <div>
        <TokenList tokens={this.state.tokens} />
      </div>
    )
  }
}
