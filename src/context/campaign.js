import React, { createContext, useContext } from "react";
import { contractAddress } from "../constants/ContractAddress";
import { contractABI } from "../constants/ContractAbi";

const Campaign = createContext();

const CampaignProvider = ({ children }) => {
  return <Campaign.Provider value={{}}>{children}</Campaign.Provider>;
};

export const useCampaign = useContext(Campaign);

export default CampaignProvider;
