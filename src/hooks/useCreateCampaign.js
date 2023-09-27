import React from "react";
import { contractABI } from "../constants/ContractAbi";
import { contractAddress } from "../constants/ContractAddress";

const useCreateCampaign = () => {
  const createCampaign = async (title, fundingGoal, durationTime) => {
    try {
      const signer = await provider.getSigner();
      await contract
        .connect(signer)
        .proposeCampaign(title, fundingGoal, durationTime);
      return { status: true, msg: "Successfully created Campaign" };
    } catch (err) {
      console.error(err);
      return { status: false, msg: err.message };
    }
  };

  return {
    campaigns,
    createCampaign,
  };
};

export default useCreateCampaign;
