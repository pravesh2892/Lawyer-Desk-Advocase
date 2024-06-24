import { useState } from "react";
import React from "react";
import PageOne from "./PageOne";
import left from "../assets/left-arrow-circle-svgrepo-com.svg";
import svg from "../assets/file-file-type-svgrepo-com.svg";
export default function PageThree() {
  const [activeTab, setActiveTab] = useState(5);
  const [showPageOne, setShowPageOne] = useState(false);
  const toggleTab = (tabIndex) => {
    if (activeTab === tabIndex) {
      setActiveTab(null);
    } else {
      setActiveTab(tabIndex);
    }
  };

  const handleBackToHome = () => {
    setShowPageOne(true);
  };

  if (showPageOne) {
    return <PageOne />;
  }
  return (
    <div
      className="flex  justify-center min-h-screen"
      style={{ backgroundColor: "rgb(59 130 246 / 0.5)" }}
    >
      <div className="flex  pt-4 gap-x-4">
        <div
          style={{ height: "600px" }}
          className="w-s  bg-white rounded-md p-4"
        >
          <div className="flex items-end">
            <div className="flex-grow"></div>
            <img
              className="w-6 bg-gray-300 hover:bg-blue-400 rounded-lg"
              onClick={handleBackToHome}
              src={left}
              alt="not found"
            />
            <button
              onClick={handleBackToHome}
              className="px-12 rounded text-xs font-bold text-white py-1 bg-gradient-to-r to-[#025BD4] from-blue-500 hover:from-blue-400 hover:to-blue-300"
            >
              Back to home
            </button>
          </div>
          <h2 className="text-md font-bold text-gray-600 mb-2">
            Given Information
          </h2>
          <hr className="py-2" />
          <div style={{ width: "220px" }} className="w-56">
            <h2 className="text-sm font-bold text-gray-600  mb-2">
              Your Search
            </h2>
            <h2 className="text-sm font-bold text-gray-400  mb-2">
              Hebbeas Corporas
            </h2>

            <h2 className="text-md font-bold text-gray-600  mb-4">Recents</h2>

            <div className="border-2 min-w-56 border-gray-300 rounded-lg mb-4 p-2">
              <div className="">
                <div className="flex  items-center justify-between ">
                  <p className="text-xs font-bold text-gray-500 mr-4">Deeds</p>
                  <p className="text-xs font-bold  text-right rounded text-green-600 bg-green-200 ">
                    Completed
                  </p>
                </div>

                <p className="text-sm text-blue-700 font-bold">
                  The Cyberbullying Consp...
                </p>
                <p className="text-xs font-bold text-gray-500 mr-4">10 min</p>
              </div>
            </div>

            <div className="border-2 min-w-56 border-gray-300 rounded-lg mb-4 p-2">
              <div className="">
                <div className="flex  items-center justify-between ">
                  <p className="text-xs font-bold text-gray-500 mr-4">
                    CONTRACT
                  </p>
                  <p className="text-xs font-bold  text-right rounded text-orange-600 bg-orange-200 ">
                    In progress
                  </p>
                </div>

                <p className="text-sm text-blue-700 font-bold">
                  The Data Breach Deliemma
                </p>
                <p className="text-xs font-bold text-gray-500 mr-4">
                  1 hour ago
                </p>
              </div>
            </div>
            <div className="border-2 min-w-56 border-gray-300 rounded-lg mb-4 p-2">
              <div className="">
                <div className="flex  items-center justify-between ">
                  <p className="text-xs font-bold text-gray-500 mr-4">
                    COURT ORDER
                  </p>
                  <p className="text-xs font-bold  text-right rounded text-pink-600 bg-pink-200 ">
                    Failed
                  </p>
                </div>

                <p className="text-sm text-blue-700 font-bold">
                  The Green Tech Scandal
                </p>
                <p className="text-xs font-bold text-gray-500 mr-4">
                  1 days ago
                </p>
              </div>
            </div>
            <div className="border-2 min-w-56 border-gray-300 rounded-lg mb-4 p-2">
              <div className="">
                <div className="flex  items-center justify-between ">
                  <p className="text-xs font-bold text-gray-500 mr-4">DEE</p>
                  <p className="text-xs font-bold  text-right rounded text-green-600 bg-green-200 ">
                    Completed
                  </p>
                </div>

                <p className="text-sm text-blue-700 font-bold">
                  The Cyberbullying Consp...
                </p>
                <p className="text-xs font-bold text-gray-500 mr-4">
                  2 days ago
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ width: "550px" }}
          className="w-600 bg-white px-6 pt-4 rounded-md"
        >
          <h2 className="text-xl text-gray-700 font-bold font-sans">
            {" "}
            Case flow{" "}
          </h2>
          <h2 className="text-lg text-blue-500 font-bold font-sans">
            {" "}
            Select the document for drafting{" "}
          </h2>

          <div className="flex items-center">
            <div className="relative">
              <div className="h-5 w-5 bg-blue-600 rounded-full mb-0 ml-1"></div>
              <div className="absolute top-5 left-3 bottom-0 border-l-4 h-36 border-gray-600"></div>
            </div>
          </div>
          <div className="ml-6 mt-0">
            <h2 className="text-xl text-gray-700 font-bold pb-2 font-sans">
              {" "}
              Pre litigation
            </h2>

            <div className="border-2 border-gray-300 rounded-lg mb-2 p-2">
              <div className="">
                <div className="flex">
                  <img className="w-6 px-1" src={svg} alt="not found" />
                  <p className="text-sm text-gray-700 font-bold">
                    Legal Notice
                  </p>
                </div>

                <p className="text-xs font-bold text-gray-500 mr-4">
                  Notifies the opposing party of the dispute and demands
                  resolution
                </p>
              </div>
            </div>
            <div className="border-2 border-gray-300 rounded-lg mb-2 p-2">
              <div className="">
                <div className="flex">
                  <img className="w-6 px-1" src={svg} alt="not found" />
                  <p className="text-sm text-gray-700 font-bold">
                    Reply to Legal Notice
                  </p>
                </div>

                <p className="text-xs font-bold text-gray-500 mr-4">
                  A response to a legal notice received from the opposing party.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative">
              <div className="h-5 w-5 bg-blue-600 rounded-full mb-0 ml-1"></div>
              <div className="absolute top-5 left-3 bottom-0 border-l-4 h-72 border-gray-600"></div>
            </div>
          </div>
          <div className="ml-6 mt-0">
            <h2 className="text-xl text-gray-700 font-bold pb-2 font-sans">
              Litigation
            </h2>

            <div className="border-2 border-gray-300 rounded-lg mb-2 p-2">
              <div className="">
                <div className="flex">
                  <img className="w-6 px-1" src={svg} alt="not found" />
                  <p className="text-sm text-gray-700 font-bold">
                    Plaint/Complaint
                  </p>
                </div>

                <p className="text-xs font-bold text-gray-500 mr-4">
                  Initiates the lawsuit, detailing the plaintiff's claims.
                </p>
              </div>
            </div>
            <div className="border-2 border-gray-300 rounded-lg mb-2 p-2">
              <div className="">
                <div className="flex">
                  <img className="w-6 px-1" src={svg} alt="not found" />
                  <p className="text-sm text-gray-700 font-bold">Vakalatnama</p>
                </div>

                <p className="text-xs font-bold text-gray-500 mr-4">
                  Authorizes a lawyer to represent the client in court.
                </p>
              </div>
            </div>
            <div className="border-2 border-gray-300 rounded-lg mb-2 p-2">
              <div className="">
                <div className="flex">
                  <img className="w-6 px-1" src={svg} alt="not found" />
                  <p className="text-sm text-gray-700 font-bold">
                    Written Statement/Answe
                  </p>
                </div>

                <p className="text-xs font-bold text-gray-500 mr-4">
                  The defendant's formal response to the plaint.
                </p>
              </div>
            </div>
            <div className="border-2 border-gray-300 rounded-lg mb-2 p-2">
              <div className="">
                <div className="flex">
                  <img className="w-6 px-1" src={svg} alt="not found" />
                  <p className="text-sm text-gray-700 font-bold">
                    Reply to Written Statement
                  </p>
                </div>

                <p className="text-xs font-bold text-gray-500 mr-4">
                  Addresses points raised in the defendant's written statement.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative">
              <div className="h-5 w-5 bg-blue-600 rounded-full mb-4 ml-1"></div>
            </div>
          </div>
        </div>
        <div
          style={{ height: "600px" }}
          className="w-s  bg-white rounded-md px-4"
        >
          <ul className="steps font-bold text-sm steps-vertical">
            <li data-content="✓" className="step step-primary">
              Start
            </li>
            <li data-content="✓" className="step step-primary">
              Continue
            </li>
            <li data-content="✓" className="step  step-primary">
              Analysis
            </li>
            <li data-content="✓" className="step step-neutral ">
              Additional Documents
            </li>
            <li data-content="✓" className="step step-neutral">
              Relief Suggestions
            </li>
            <li data-content="✓" className="step step-neutral">
              First Draft
            </li>
            <li data-content="✓" className="step step-neutral">
              Q&A
            </li>
            <li data-content="✓" className="step step-neutral">
              Final Draft
            </li>
          </ul>
          <div className="flex items-end">
            <div className="flex-grow"></div>
            <button
              onClick={handleBackToHome}
              className="mt-4 rounded-full px-12  text-xs font-bold text-white py-1 bg-gradient-to-r to-[#025BD4] from-blue-500 hover:from-pink-500 hover:to-yellow-500"
            >
              Back to home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
