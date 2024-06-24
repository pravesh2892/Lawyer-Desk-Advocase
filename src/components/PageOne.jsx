import React, { useState } from "react";
import image4 from "../assets/upload-svgrepo-com.svg";
import image2 from "../assets/ai-file-type-svgrepo-com.svg";
import image3 from "../assets/psd-file-type-svgrepo-com.svg";
import image1 from "../assets/align-two-columns-svgrepo-com.svg";

import PageTwo from "./PageTwo";
export default function Home() {
  const [showPageTwo, setShowPageTwo] = useState(false);

  const handleNext = () => {
    setShowPageTwo(true);
  };

  if (showPageTwo) {
    return <PageTwo />;
  }
  return (
    <div
      className="flex justify-center min-h-screen"
      style={{ backgroundColor: "rgb(59 130 246 / 0.5)" }}
    >
      <div className="flex pt-4 gap-x-4 w-full max-w-5xl">
        <div className="w-96 bg-white rounded-md p-4">
          <h2 className="text-md font-bold text-gray-600 mb-2">
            Recent Studies
          </h2>

          <div className="border-2 border-gray-300 rounded-lg mb-4 p-2">
            <div>
              <p className="text-sm text-blue-700 font-bold">
                "Long Bite Complainet"
              </p>
              <div className="flex pt-2 items-center justify-between">
                <p className="text-xs font-bold text-gray-500 mr-4">
                  2 days ago
                </p>
                <p className="text-xs font-bold text-right rounded text-green-600 bg-green-200">
                  Completed
                </p>
              </div>
            </div>
          </div>

          <div className="border-2 border-gray-300 rounded-lg mb-4 p-2">
            <div>
              <p className="text-sm text-blue-700 font-bold">
                "cyber bullying conspiracy"
              </p>
              <div className="flex pt-2 items-center justify-between">
                <p className="text-xs font-bold text-gray-500 mr-4">
                  2 days ago
                </p>
                <p className="text-xs font-bold text-right rounded text-green-600 bg-green-200">
                  Completed
                </p>
              </div>
            </div>
          </div>

          <div className="border-2 border-gray-300 rounded-lg mb-4 p-2">
            <div>
              <p className="text-sm text-blue-700 font-bold">
                "The data dilemma"
              </p>
              <div className="flex pt-2 items-center justify-between">
                <p className="text-xs font-bold text-gray-500 mr-4">
                  2 days ago
                </p>
                <p className="text-xs font-bold text-right rounded text-green-600 bg-green-200">
                  Completed
                </p>
              </div>
            </div>
          </div>

          <div className="border-2 border-gray-300 rounded-lg mb-4 p-2">
            <div>
              <p className="text-sm text-blue-700 font-bold">
                "The data dilemma"
              </p>
              <div className="flex pt-2 items-center justify-between">
                <p className="text-xs font-bold text-gray-500 mr-4">
                  2 days ago
                </p>
                <p className="text-xs font-bold text-right rounded text-orange-600 bg-orange-200">
                  in progress
                </p>
              </div>
            </div>
          </div>

          <div className="border-2 border-gray-300 rounded-lg mb-4 p-2">
            <div>
              <p className="text-sm text-blue-700 font-bold">
                "The data dilemma"
              </p>
              <div className="flex pt-2 items-center justify-between">
                <p className="text-xs font-bold text-gray-500 mr-4">
                  2 days ago
                </p>
                <p className="text-xs font-bold text-right rounded text-pink-600 bg-pink-200">
                  failed
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-grow bg-white rounded-md p-4">
          <div className="flex">
            <img className="w-8" src={image1} alt="not found" />
            <h2 className="text-md pt-1 text-gray-700 font-bold">
              Get Complete about case from AI driven research assistance
            </h2>
          </div>
          <textarea
            placeholder="Ex: Land Dispute, Mumbai, recent judgement"
            className="textarea textarea-bordered bg-white textarea-xs m-2 w-full max-w-lg"
          ></textarea>

          <div className="border-dashed bg-gray-100 border-2 border-gray-400 rounded-lg p-4">
            <div className="flex items-center pt-4 justify-center">
              <img className="w-4" src={image4} alt="not found" />
            </div>
            <div className="flex items-center mb-4">
              <span className="flex-grow text-sm font-bold ml-12">
                Drag drop here or click here to upload
              </span>
              <label
                htmlFor="file-upload"
                className="flex items-center mr-32 justify-center text-blue-500 underline cursor-pointer hover:text-blue-600 transition duration-300 ml-2"
              >
                Upload file
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                  max="1"
                />
              </label>
            </div>
            <div className="flex ml-44 flex-col">
              <p className="text-xs text-gray-700 font-bold mt-2">
                Maximum uploads: 1
              </p>
              <p className="text-xs text-gray-400 font-bold mt-2">
                File format: pdf, jpg, jpeg, png
              </p>
            </div>
          </div>

          <div className="flex p-4">
            <h3>Uploaded files</h3>
            <div className="badge ml-4 badge-sm mt-1 badge-info gap-2">3/5</div>
          </div>

          <div className="border-2 mb-4 border-gray-100 bg-gray-100 rounded-lg px-2 flex items-center">
            <img src={image2} alt="not found" className="w-6" />
            <p className="text-sm font-bold text-gray-500">Case document.pdf</p>
            <div className="ml-auto pb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-4 h-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>

          <div className="border-2 mb-4 border-gray-100 bg-gray-100 rounded-lg px-2 flex items-center">
            <img src={image3} alt="not found" className="w-6" />
            <p className="text-sm font-bold text-gray-500">Case document.pdf</p>
            <div className="ml-auto pb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-4 h-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>

          <div className="border-2 mb-4 border-gray-100 bg-gray-100 rounded-lg px-2 flex items-center">
            <img src={image3} alt="not found" className="w-6" />
            <p className="text-sm font-bold text-gray-500">Case document.pdf</p>
            <div className="ml-auto pb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-4 h-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>

          <div className="flex items-end pt-24">
            <div className="flex-grow"></div>
            <button
              onClick={handleNext}
              className="px-16 rounded-full text-xs font-bold text-white py-1 bg-gradient-to-r to-[#025BD4] from-blue-500 hover:from-blue-400 hover:to-blue-300"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
