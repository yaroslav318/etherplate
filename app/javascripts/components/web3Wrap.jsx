import React, {
  Component
} from 'react'

import Web3 from 'web3'
let localWeb3 = new Web3()

import SiteHeader from '@/components/application/layout/site-header'

import DownloadMetamaskButtonImg from '../../images/button--download-metamask.png'

import AppStoreButtonImg from '../../images/button--app-store.png'
import PlayStoreButtonImg from '../../images/button--play-store.png'

export default function web3Wrap(WrappedComponent) {

  // ...and returns another component...
  return class Web3Wrap extends React.Component {

    render () {
      var contents = <div />
      console.log(web3.eth)

      // // Checking if Web3 has been injected by the browser (Mist/MetaMask/Trust/etc)
      // if ((typeof web3 !== 'undefined') && web3.eth.accounts.length) {
      //   // Use the browser's ethereum provider
      //   var provider = web3.currentProvider
      // console.log(web3.eth)
      // console.log(web3.eth.accounts)
      // console.log(web3.eth.accounts.length)

      //   return <WrappedComponent {...this.props} />
      // } else if (web3) {
      // console.log('wow')
      //   return (
      //     <div>
      //       <section className="hero">
      //         <div className="hero-body">
      //           <div className="container has-text-centered">
      //             <div className="columns">
      //               <div className="column" />
      //               <div className="column is-two-thirds">
      //                 <h1 className="title">
      //                   Hoo-ray! <strong>MetaMask</strong> is installed!
      //                 </h1>
      //                 <h2 className="subtitle">
      //                   However, you need to unlock your account or create a new one. Click the Fox in the top-right corner of your browser, then refresh the page.
      //                 </h2>
      //               </div>
      //               <div className="column" />
      //             </div>
      //           </div>
      //         </div>
      //       </section>
      //     </div>
      //   )
      // } else {
      // console.log('down here')
      //   return (
      //     <div>
      //       <section className="hero">
      //         <div className="hero-body">
      //           <div className="container has-text-centered">
      //             <div className="columns">
      //               <div className="column" />
      //               <div className="column is-two-thirds">
      //                 <h1 className="title">
      //                   One second ...
      //                 </h1>
      //                 <h2 className="subtitle">
      //                   To use Etherplate you will need to install the <a href='https://metamask.io/' title='MetaMask' target='_blank'>MetaMask</a> extension for Chrome or Brave desktop browsers:
      //                 </h2>
      //                 <a href="https://metamask.io" title="Download Metamask"><img src={`/${DownloadMetamaskButtonImg}`} alt="Metamask Download Button" width="200" /></a>
      //                 <br />
      //                 <br />

      //                 <h2 className="subtitle">
      //                   If you're on mobile, download the Trust browser:
      //                 </h2>
      //                 <a href="https://itunes.apple.com/us/app/trust-ethereum-wallet/id1288339409" title="Download Trust from Apple App Store"><img src={`/${AppStoreButtonImg}`} alt="Apple App Store Button" /></a>
      //                 &nbsp; &nbsp; &nbsp;
      //                 <a href="https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp" title="Download Trust from Google Play Store"><img src={`/${PlayStoreButtonImg}`} alt="Google Play Store Button" /></a>
      //               </div>
      //               <div className="column" />
      //             </div>
      //           </div>
      //         </div>
      //       </section>
      //     </div>
      //   )
      // }

      return contents
    }

  }

}
