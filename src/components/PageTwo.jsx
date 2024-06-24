import { useState } from "react";
import React from "react";
import PageOne from "./PageOne";
import PageThree from "./PageThree";
import { IoIosArrowBack } from "react-icons/io";
import svg from "../assets/ai-file-type-svgrepo-com.svg";
export default function PageTwo() {
  const [activeTab, setActiveTab] = useState(5);
  const [showPageOne, setShowPageOne] = useState(false);
  const [showPageThree, setShowPageThree] = useState(false);

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
  const handleBackToThree = () => {
    setShowPageThree(true);
  };
  if (showPageThree) {
    return <PageThree />;
  }
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
          style={{ height: "580px" }}
          className="w-s  bg-white rounded-md p-4"
        >
          <div className="flex items-end gap-2">
            <IoIosArrowBack
              className="w-6 h-6 text-black-300 bg-gray-300 hover:bg-blue-400 rounded-lg cursor-pointer"
              onClick={handleBackToHome}
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
          <div className="w-56">
            <h2 className="text-sm font-bold text-gray-600  mb-2">
              Text Entered
            </h2>
            <h2 className="text-xs font-bold text-gray-400  mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing quas
              molestias, nam consectetur facere odit.
            </h2>
            <hr className="py-2" />
            <h2 className="text-sm font-bold text-gray-600  mb-2">Uploads</h2>
          </div>
          <div
            style={{ width: "250px" }}
            className="border-2  border-gray-300 rounded-lg  bg-blue-200 "
          >
            <div className="flex  p-2">
              <h3 className="text-md font-bold text-gray-500">
                Uploaded files
              </h3>
              <div className="badge ml-4 badge-sm mt-1 badge-info gap-2">
                5/5
              </div>
            </div>
            <div className="border-2 mb-2 border-gray-200 bg-gray-100 rounded-lg mx-2 py-1 px-4 flex items-center">
              <img className="w-6" src={svg} alt="not found" />
              <p className="text-sm  font-bold text-gray-500">
                Case document.pdf{" "}
              </p>
            </div>
            <div className="border-2 mb-2 border-gray-200 bg-gray-100 rounded-lg mx-2 py-1 px-4 flex items-center">
              <img className="w-6" src={svg} alt="not found" />
              <p className="text-sm  font-bold text-gray-500">
                Case document.pdf{" "}
              </p>
            </div>
            <div className="border-2 mb-2 border-gray-200 bg-gray-100 rounded-lg mx-2 py-1 px-4 flex items-center">
              <img className="w-6" src={svg} alt="not found" />
              <p className="text-sm  font-bold text-gray-500">
                Case document.pdf{" "}
              </p>
            </div>
            <div className="border-2 mb-2 border-gray-200 bg-gray-100 rounded-lg mx-2 py-1 px-4 flex items-center">
              <img className="w-6" src={svg} alt="not found" />
              <p className="text-sm  font-bold text-gray-500">
                Case document.pdf{" "}
              </p>
            </div>
            <div className="border-2 mb-2 border-gray-200 bg-gray-100 rounded-lg mx-2 py-1 px-4 flex items-center">
              <img className="w-6" src={svg} alt="not found" />
              <p className="text-sm  font-bold text-gray-500">
                Case document.pdf{" "}
              </p>
            </div>
          </div>
        </div>
        <div style={{ width: "750px" }} className="w-600 bg-white rounded-md">
          <div className="tabs tabs-lifted">
            <div role="tablist" className="flex">
              <div
                role="tab"
                className={`tab ${
                  activeTab === 1
                    ? "bg-blue-600 text-white tab-active rounded-tl-lg rounded-tr-lg"
                    : "border-2 border-b-0 rounded-tl-lg rounded-tr-lg"
                }`}
                onClick={() => toggleTab(1)}
              >
                Case Desc
              </div>
              <div
                role="tab"
                className={`tab ${
                  activeTab === 2
                    ? "bg-blue-600 text-white tab-active rounded-tl-lg rounded-tr-lg"
                    : "border-2 border-b-0 rounded-tl-lg rounded-tr-lg"
                }`}
                onClick={() => toggleTab(2)}
              >
                Act & Lows
              </div>
              <div
                role="tab"
                className={`tab ${
                  activeTab === 3
                    ? "bg-blue-600 text-white tab-active rounded-tl-lg rounded-tr-lg"
                    : "border-2 border-b-0 rounded-tl-lg rounded-tr-lg"
                }`}
                onClick={() => toggleTab(3)}
              >
                Judgement
              </div>
              <div
                role="tab"
                className={`tab ${
                  activeTab === 4
                    ? "bg-blue-600 text-white tab-active rounded-tl-lg rounded-tr-lg"
                    : "border-2 border-b-0 rounded-tl-lg rounded-tr-lg"
                }`}
                onClick={() => toggleTab(4)}
              >
                Templates
              </div>
              <div
                role="tab"
                className={`tab ${
                  activeTab === 5
                    ? "bg-blue-600 tab text-white tab-active rounded-tl-lg rounded-tr-lg"
                    : "border-2 border-b-0 rounded-tl-lg rounded-tr-lg"
                }`}
                onClick={() => toggleTab(5)}
              >
                Question
              </div>
              <div
                role="tab"
                className={`tab ${
                  activeTab === 6
                    ? "bg-blue-600 text-white tab-active rounded-tl-lg rounded-tr-lg"
                    : "border-2 border-b-0 rounded-tl-lg rounded-tr-lg"
                }`}
                onClick={() => toggleTab(6)}
              >
                Support
              </div>
            </div>

            {activeTab === 1 && (
              <div className="content">
                <h2>Question </h2>
                <p>Support templates, acts & laws for Question 1...</p>
              </div>
            )}

            {activeTab === 2 && (
              <div className="content">
                <h2>Question </h2>
                <p>Support templates, acts & laws for Question 2...</p>
              </div>
            )}

            {activeTab === 3 && (
              <div className="content">
                <h2>Question 3 </h2>
                <p>Support templates, acts & laws for Question 3...</p>
              </div>
            )}

            {activeTab === 4 && (
              <div className="content">
                <h2>Question 4 Content</h2>
                <p>Support templates, acts & laws for Question 4...</p>
              </div>
            )}

            {activeTab === 5 && (
              <div className="content">
                <h2 className="font-bold text-lg px-4 mt-4">Questions</h2>
                <div className="px-6">
                  <div>
                    <button className="px-4 rounded-full text-sm  font-bold text-white py-1 bg-gradient-to-r to-[#025BD4] from-blue-500 hover:from-blue-400 hover:to-blue-300">
                      By Petitioner
                    </button>
                    <button className="px-4 ml-3 rounded-full text-sm  font-bold text-gray-400 py-1 bg-gradient-to-r border-2  hover:from-blue-400 hover:to-blue-300">
                      By Respodent
                    </button>
                  </div>

                  <div className="overflow-y-auto max-h-96">
                    <div className="my-4">
                      <p className="text- text-gray-700 font-bold">
                        1. Was the dog on a leash or under the control of the
                        owner at the time of the incident?
                      </p>
                      <p className="text-sm text-gray-600">
                        Reason: This question aims to establish whether the
                        owner was negligent in controlling the dog, which is
                        crucial for proving liability.
                      </p>
                    </div>
                    <hr className="my-4 " />

                    <div className="my-4">
                      <p className="text- text-gray-700 font-bold">
                        2. Did the dog show any signs of aggression or previous
                        violent behavior before the incident?
                      </p>
                      <p className="text-sm text-gray-600">
                        Reason: This question is important to demonstrate the
                        owner's knowledge of the dog's aggressive tendencies,
                        which can support the claim of negligence.
                      </p>
                    </div>
                    <hr className="my-4 " />

                    <div className="my-4">
                      <p className="text- text-gray-700 font-bold">
                        3. Were there any warning signs or notices indicating
                        the presence of a dangerous dog on the owner's property?
                      </p>
                      <p className="text-sm text-gray-600">
                        Reason: This question seeks to determine if the owner
                        took reasonable precautions to warn others about the
                        potential danger posed by the dog.
                      </p>
                    </div>
                    <hr className="my-4 " />

                    <div className="my-4">
                      <p className="text- text-gray-700 font-bold">
                        4. Has the dog been involved in similar incidents of
                        biting or aggression in the past?
                      </p>
                      <p className="text-sm text-gray-600">
                        Reason: This question is relevant to establish a pattern
                        of behavior and the owner's awareness of the dog's
                        propensity for aggression.
                      </p>
                    </div>
                    <hr className="my-4 " />

                    <div className="my-4">
                      <p className="text- text-gray-700 font-bold">
                        5. Did the owner take immediate steps to assist or
                        provide medical aid to the victim after the dog bite
                        incident?
                      </p>
                      <p className="text-sm text-gray-600">
                        Reason: This question aims to establish the owner's
                        response to the incident and their level of
                        responsibility towards the victim.
                      </p>
                    </div>
                    <hr className="my-4 " />

                    <div className="my-4">
                      <p className="text- text-gray-700 font-bold">
                        6. Has the owner received complaints or warnings about
                        the dog's behavior from neighbors or authorities?
                      </p>
                      <p className="text-sm text-gray-600">
                        Reason: This question helps to determine if the owner
                        was aware of the dog's behavior as perceived by others
                        in the community.
                      </p>
                    </div>
                    <hr className="my-4 " />

                    <div className="my-4">
                      <p className="text- text-gray-700 font-bold">
                        7. Did the incident occur in an area where dogs are
                        typically allowed or designated as off-limits?
                      </p>
                      <p className="text-sm text-gray-600">
                        Reason: This question assesses whether the incident
                        happened in a place where the presence of a dog might be
                        expected or prohibited.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-end pt-4 px-4">
                    <div className="flex-grow"></div>
                    <button
                      onClick={handleBackToThree}
                      className="px-4  rounded-full text-sm  font-bold text-white py-1 bg-gradient-to-r to-[#025BD4] from-blue-500 hover:from-blue-400 hover:to-blue-300"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 6 && (
              <div className="content">
                <h2>Question 6 Content</h2>
                <p>Support templates, acts & laws for Question 6...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
