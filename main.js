const contractABI = [{"inputs":[{"internalType":"address","name":"_renderer","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_TOTAL_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SECS_IN_DAY","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"amount","type":"uint8"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"allowlistMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"allowlistSaleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allowlistTokensPerAddress","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"allowlistedMints","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"chaosStates","outputs":[{"internalType":"uint64","name":"anchorTimestamp","type":"uint64"},{"internalType":"uint64","name":"setDay","type":"uint64"},{"internalType":"uint128","name":"rand","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getEntropy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getRenderedAnim","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getRenderedSVG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mint_price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint64","name":"_number","type":"uint64"}],"name":"observe","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"amount","type":"uint8"}],"name":"publicMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"publicMints","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicSaleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicTokensPerAddress","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renderer","outputs":[{"internalType":"contract CRRendererTest","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"amount","type":"uint8"}],"name":"reserveMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_allowlistSaleIsActive","type":"bool"},{"internalType":"bool","name":"_publicSaleIsActive","type":"bool"}],"name":"setAllowlistAndPublicSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"merkleRoot","type":"bytes32"}],"name":"setAllowlistMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"tokensPerAddress","type":"uint8"}],"name":"setMaxMintsPerAllowlistedAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"tokensPerAddress","type":"uint8"}],"name":"setMaxMintsPerPublicAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];

const contractAddress = "0x24f3EBe64e205955AF1d6F674Aec08f0dbc94043";

const allowlist = [
  {
    address: '0x188b9f204BdED52A1333c645aD212D5e6358bAD9',
    proof: [
      '0x6e33e81f208eeaf662522ed3c1f02c3dcd2d54104ab10bfb5d126eb7076636ed',
      '0x485bd2808492830420530c3ab6939b801e65d427c085586c71321f70e6d790da',
      '0xdd8bcb48f3721a782a5b92e5e52f3e272683acf506ae930613244355c4fd0048'
    ]
  },
  {
    address: '0x7CA6e33921B94a1fdB3bD8D6AC5A417E507a2C91',
    proof: [
      '0x245be38ba6a699cb9fa8ca5c4f5c20adee6ee1ab22ec072d5c01c10fc1ccf96c',
      '0x19b31e02ff5176dca6afb8b7876f7dd71fbeac559e6aa671dc66c0a4ae147eca',
      '0xdd8bcb48f3721a782a5b92e5e52f3e272683acf506ae930613244355c4fd0048'
    ]
  }
];

function findProofForAddress(userAddress) {
  const entry = allowlist.find((item) => item.address.toLowerCase() === userAddress.toLowerCase());
  return entry ? entry.proof : null;
}

let provider, signer, contract, userAddress;

async function connectWallet() {
  if (window.ethereum) {
    try {
      provider = new ethers.providers.Web3Provider(window.ethereum);
      signer = provider.getSigner();
      contract = new ethers.Contract(contractAddress, contractABI, signer);

      // Request the user's address
      await window.ethereum.request({ method: "eth_requestAccounts" });

      // Get the user's address
      userAddress = await signer.getAddress();
      console.log("Connected address:", userAddress);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }

    await updateRemainingNFTs();

  } else {
    alert("Please install MetaMask or another compatible wallet.");
  }
}

async function updateRemainingNFTs() {
  const tokenCounter = await contract.totalSupply();
  const remainingNFTs = 400 - tokenCounter.toNumber();
  document.getElementById("remainingNFTs").innerText = `Remaining NFTs: ${remainingNFTs} / 400`;
}

async function mint() {
  if (!userAddress) {
    alert("Please connect your wallet first.");
    return;
  }

  const mintAmount = parseInt(document.getElementById("mintAmount").value);

  if (isNaN(mintAmount) || mintAmount < 1 || mintAmount > 4) {
    alert("Please choose a valid number of NFTs to mint (1-4).");
    return;
  }

  const merkleProof = findProofForAddress(userAddress);

  if (!merkleProof) {
    alert("Your address is not in the allowlist.");
    return;
  }

  try {
    const mintPrice = await contract.mint_price();
    const totalPrice = mintPrice.mul(mintAmount);
    const tx = await contract.allowlistMint(mintAmount, merkleProof, { value: totalPrice });
    await tx.wait();
    console.log(`Minted ${mintAmount} tokens`);
  } catch (error) {
    console.error("Minting failed:", error);
  }

}

function addEventListeners() {
  document.getElementById("connectWalletButton").addEventListener("click", connectWallet);
  document.getElementById("mintButton").addEventListener("click", mint);
}

document.addEventListener("DOMContentLoaded", addEventListeners);
