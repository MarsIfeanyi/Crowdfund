import React from "react";
import useCampaign from "../hooks/useCampaign";
import { ethers } from "ethers";
import { shortenAccount } from "../utils";

const IdToCrowdFund = () => {
  const allCampaigns = useCampaign();
  return (
    <>
      <h2 className="text-center  text-3xl text-blue-600 mt-14 font-medium shadow-lg  ">
        Active and Ongoing Campaigns
      </h2>
      <div className="grid grid-cols-3 mx-14 mt-4">
        {allCampaigns.map((campaign, index) => (
          <div key={index}>
            <div className="flex flex-row">
              <h4>Title:</h4> {campaign.title}
            </div>
            <div className="flex flex-row">
              <h4>Funding Goal:</h4> {ethers.formatEther(campaign.fundingGoal)}
            </div>
            <div className="flex flex-row">
              <h4>Owner:</h4>
              {shortenAccount(campaign.owner)}
            </div>
            <div className="flex flex-row">
              <h4>Time Duration:</h4>
              {ethers.formatUnits(campaign.durationTime)}
            </div>
            <div className="flex flex-row">
              <h4>Campaign Status:</h4>
              {campaign.isActive ? "Active" : "false"}
            </div>
            <div className="flex flex-row">
              <h4>Funding Balance:</h4>
              {ethers.formatEther(campaign.fundingBalance)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IdToCrowdFund;
