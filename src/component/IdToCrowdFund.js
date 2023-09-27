import React from "react";
import useCampaign from "../hooks/useCampaign";
import { ethers } from "ethers";
import { shortenAccount, formatDate } from "../utils";

const IdToCrowdFund = () => {
  const allCampaigns = useCampaign();

  const reversedCampaigns = [...allCampaigns].reverse();

  return (
    <>
      <h2 className="text-center  text-3xl text-blue-400 mt-14 font-medium shadow-lg p-4  ">
        Active and Ongoing Campaigns
      </h2>
      <div className="grid grid-cols-3 mx-14 mt-4 gap-8 border  shadow-xl  rounded-xl p-8  ">
        {reversedCampaigns.map((campaign, index) => (
          <div key={index} className="border-b-4 border-2 rounded-2xl p-4">
            <div className="flex flex-row gap-2">
              <h4 className="headerStyle ">Title:</h4> {campaign.title}
            </div>
            <div className="flex flex-row gap-2">
              <h4 className="headerStyle ">Funding Goal:</h4>{" "}
              {ethers.formatEther(campaign.fundingGoal)}
            </div>
            <div className="flex flex-row gap-2">
              <h4 className="headerStyle ">Owner:</h4>
              {shortenAccount(campaign.owner)}
            </div>
            <div className="flex flex-row gap-2">
              <h4 className="headerStyle ">Time Duration:</h4>

              {formatDate(ethers.formatUnits(campaign.durationTime, 0))}
            </div>
            <div className="flex flex-row gap-2">
              <h4 className="headerStyle ">Campaign Status:</h4>
              {campaign.isActive ? "Active" : "false"}
            </div>
            <div className="flex flex-row gap-2">
              <h4 className="headerStyle ">Funding Balance:</h4>
              {ethers.formatEther(campaign.fundingBalance)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IdToCrowdFund;
