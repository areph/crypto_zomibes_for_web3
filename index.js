import abi from './abi';
import factory_abi from './factory_abi';

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
  console.log(web3);
  console.log("Metamask used");
} else {
  // set the provider you want from Web3.providers
  alert("please install meta mask.")
  // web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

const abi2 = abi;
const factory_abi2 = factory_abi;

console.log(factory_abi2);
/* abi generated by the compiler */
var account = '';
var accountInterval = setInterval(function() {
  if (web3.eth.accounts[0] !== account) {
    // MetaMask のアカウント（アドレス）が切り替わった
    account = web3.eth.accounts[0];

    var ZombieFactoryContract = web3.eth.contract(factory_abi2);
    var ZombieFeedingContract = web3.eth.contract(abi2);

    var zombieFactoryContractAddress = "0x52c05381c9e5cb5cfe0cd8f7d3a4d69d1d932604";
    var zombieFeedingContractAddress = "0xa9b125e77ede33f482adef1623384f0cae823419";

    var ZombieFactory = ZombieFactoryContract.at(zombieFactoryContractAddress);
    var ZombieFeeding = ZombieFeedingContract.at(zombieFeedingContractAddress);

    ZombieFeeding.NewZombie(function(error, result) {
      if (error) return
      // この関数はレッスン1でやったのと同じようにゾンビを表示するものだ：
      generateZombie(result.zombieId, result.name, result.dna)
    })
  }
}, 300);
