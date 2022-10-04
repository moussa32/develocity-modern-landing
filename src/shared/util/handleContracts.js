import { ethers } from "ethers";

export const getBUSDContract = (provider) =>
  new ethers.Contract(
    "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7",
    ["function balanceOf(address) view returns (uint)", "function approve(address, uint256) external returns (bool)"],
    provider
  );
