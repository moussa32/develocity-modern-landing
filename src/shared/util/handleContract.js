import { ethers } from "ethers";
import contractAbi from "../../assets/contractABI.json";

export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const walletContract = new ethers.Contract("0xc1ec20ef71c47004616a7c82ce0dd6a60fbe897c", contractAbi, provider);
