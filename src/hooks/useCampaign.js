import { useState, useEffect } from "react";
import { useConnection } from "../context/connection";
import { ethers } from "ethers";
import { contractABI } from "../constants/ContractAbi";
import { contractAddress } from "../constants/ContractAddress";

const useCampaign = () => {
  const { provider, isActive } = useConnection();
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    if (!isActive || !provider) return;
    const getContractData = async () => {
      const crowdFundContract = new ethers.Contract(
        contractAddress,
        contractABI,
        provider
      );
      try {
        const campaignIds = await crowdFundContract.id();
        const allCreatedCampaigns = [];
        for (let index = 1; index <= campaignIds; index++) {
          const campaign = crowdFundContract.crowd(index);
          allCreatedCampaigns.push(campaign);
        }

        const campaignDetails = await Promise.all(allCreatedCampaigns);
        setCampaigns(campaignDetails);
      } catch (error) {
        console.log(error);
      }
    };

    getContractData();
  }, [provider, isActive]);

  return campaigns;
};

export default useCampaign;
