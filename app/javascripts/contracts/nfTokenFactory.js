import TruffleContract from 'truffle-contract'
import NFTokenABI from '../../../build/contracts/NFToken.json'

const nfToken = TruffleContract(NFTokenABI)

export default async function (web3) {
  var contractInstance

  nfToken.setProvider(web3.currentProvider)
  nfToken.web3.eth.defaultAccount = web3.eth.defaultAccount

  await nfToken.deployed().then((instance) => { contractInstance = instance })

  return new web3.eth.Contract(contractInstance.abi, contractInstance.address, {
    from: web3.eth.defaultAccount
  })
}

