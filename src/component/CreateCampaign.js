import { Dialog, Transition } from "@headlessui/react";
import { ethers } from "ethers";
import React, { Fragment, useState } from "react";
import { useConnection } from "../context/connection";
import { contractAddress } from "../constants/ContractAddress";
import { contractABI } from "../constants/ContractAbi";

const CreateCampaign = () => {
  const [title, setTitle] = useState();
  const [goal, setGoal] = useState();
  const [duration, setDuration] = useState();

  const { provider } = useConnection();

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleCreateCampaign = async (e) => {
    e.preventDefault();
    const crowdfundContract = new ethers.Contract(
      contractAddress,
      contractABI,
      provider
    );

    await crowdfundContract.proposeCampaign(title, goal, duration);
  };

  return (
    <Fragment>
      <button
        onClick={openModal}
        className="w-[fit-content] block rounded-md mx-auto bg-blue-400 px-4 py-4 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        Create a Campaign
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Create Campaign
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequuntur, numquam.
                    </p>
                  </div>
                  <form
                    onSubmit={handleCreateCampaign}
                    className="mt-4 space-y-4"
                  >
                    <div className="flex flex-col">
                      <label className="font-bold">Title</label>
                      <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="outline-0 py-2 px-1 rounded-lg mt-2 border border-blue-400"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-bold">Goal</label>
                      <input
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        type="number"
                        className="outline-0 py-2 px-1 rounded-lg mt-2 border border-blue-400"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-bold">Duration(Minutes)</label>
                      <input
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        type="number"
                        className="outline-0 py-2 px-1 rounded-lg mt-2 border border-blue-400"
                      />
                    </div>
                    <div className="cursor-pointer w-full rounded-md bg-blue-400 p-3 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-center">
                      <button type="submit">Create Campaign</button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Fragment>
  );
};

export default CreateCampaign;
