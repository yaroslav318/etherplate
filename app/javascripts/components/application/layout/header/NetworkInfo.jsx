import React, { Component } from 'react'

import Address from '@/components/address'
import Ether from '@/components/ether'

import AvatarPlaceholderImage from '@/../images/avatar-placeholder.png'

// import './header.scss';

const NetworkInfo = class extends Component {

  constructor (props) {
    super(props)

    this.state = {
      accountAddress: '',
      balance: null,
      networkName: ''
    }
  }

  componentDidMount() {
    if (window.web3 !== undefined) {
      this.setState({ accountAddress: window.web3.eth.defaultAccount })

      this.getNetworkName()
      this.getBalance()
    }
  }

  getNetworkName() {
    window.web3.eth.net.getId().then(netId => {
      let networkName = '';

      switch (netId) {
        case 1:
          networkName = "Ethereum Main";
          break
        case 2:
          networkName = "Morden Testnet";
          break
        case 3:
          networkName = "Ropsten Testnet";
          break
        case 4:
          networkName = "Rinkeby Testnet";
          break
        case 42:
          networkName = "Kovan Testnet";
          break
        default:
          networkName = "Unknown (localhost?)";
      }

      this.setState({ networkName })
    })
  }

  getBalance() {
    window.web3.eth.getBalance(window.web3.eth.defaultAccount).then((balance) => {
      this.setState({ balance })
    })
  }

  render() {
    if (window.web3 === undefined) {
      return null
    } else {
      return (
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              &bull; {this.state.networkName}
            </div>
            <div className="navbar-item">
              <Ether wei={this.state.balance} />
            </div>
            <div className="navbar-item">
              <figure className="image is-32x32">
                <img className="is-circular" src={`/${AvatarPlaceholderImage}`} />
              </figure>
              &nbsp;
              <Address address={this.state.accountAddress} toggleFull={true} />
            </div>
          </div>
        </div>
      )
    }
  }
}

export default NetworkInfo;
