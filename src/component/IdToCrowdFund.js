import React from "react";
import useCampaign from "../hooks/useCampaign";
import { ethers } from "ethers";

const IdToCrowdFund = () => {
  const allCampaigns = useCampaign();
  return (
    <>
      <h2 className="text-center  text-3xl text-blue-600 mt-14 font-medium shadow-lg  ">
        Active and Ongoing Campaigns
      </h2>
      <div className="campaign-list text-sm lg:grid grid-cols-2 gap-4  m-8 font-medium">
        {allCampaigns.map((campaign, index) => (
          <div
            key={index}
            className="bg-blue-400/80 p-4 rounded-xl flex mb-2 flex-col gap-2"
          >
            <div>
              <span className="bg-white/70 p-1 rounded-md mr-2">Title:</span>{" "}
              {campaign.title}
            </div>
            <div>
              <span className="bg-white/70 p-1 rounded-md mr-2">
                Funding Goal:
              </span>{" "}
              {ethers.formatEther(campaign.fundingGoal)}
            </div>
            <div>
              <span className="bg-white/70 p-1 rounded-md mr-2">Owner:</span>
              {campaign.owner}
            </div>
            <div>
              <span className="bg-white/70 p-1 rounded-md mr-2">
                Time Duration:
              </span>
              {ethers.formatUnits(campaign.durationTime)}
            </div>
            <div>
              <span className="bg-white/70 p-1 rounded-md mr-2">
                Campaign Status:
              </span>
              {campaign.isActive ? "Active" : "false"}
            </div>
            <div>
              <span className="bg-white/70 p-1 rounded-md mr-2">
                Funding Balance:
              </span>
              {ethers.formatEther(campaign.fundingBalance)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IdToCrowdFund;
