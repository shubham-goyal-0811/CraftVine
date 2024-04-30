import React, { useState } from "react";
import sellerhome from "./assets/sellerhome.jpeg";
import accLogin from "./assets/accLogin.jpeg";
import appstep2 from "./assets/application-step2.jpeg";
import UploadPDFButton from "./UploadPDFButton";
import verifyimg from "./assets/verify.jpeg";
import UploadJpegButton from "./UploadJpegButton";
import goods from "./assets/goods.jpeg";
import CategorySelection from "./CategorySelection";
import logo from "./assets/mainlogo4.png";
// import ImageUploadComponent from "./ImageUploadComponent";


const Seller = () => {
  return (
    <div>
      {/* navbar */}
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <a
            href="#"
            className="flex title-font font-medium items-center    mb-4 md:mb-0"
          >
            <img
              src={logo}
              className="w-10 h-10 rounded-full"
              alt="Logo"
            />
            {/* Add your logo image here */}
            <span className="ml-3 text-xl text-white">CraftsVine</span>
          </a>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            GO Back
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="#header"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* navbar ends */}
      {/* welcome section start */}
      <section className="text-gray-600 body-font">
        <div className="container mt-0 mx-auto flex px-5 py-8 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={sellerhome}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Kindly Upload Your Supportive Documents
            </h1>
            <p className="mb-8 leading-relaxed">
              We would like to verify you first as a seller so for that Kindly
              Upload all your supportive Documents
            </p>
            <div className="flex justify-center">
              <button
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={() => {
                  document
                    .getElementById("sellerbano")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* welcome section ended */}

      {/* become a seller steps start */}
      <section className="text-gray-600 body-font mt-0 pt-0">
        {/* step 1 */}
        <div className="px-5 py-2 sm:py-8 mx-auto flex flex-wrap flex-col">
          <div className="flex mx-auto flex-wrap mb-20" id="sellerbano">
            <a className="sm:px-8 py-3 w-full sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t sm:rounded-none">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              STEP 1
            </a>
          </div>
          <img
            className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
            alt="hero"
            src={accLogin}
          />
          <div className="flex flex-col text-center w-full">
            <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
              Create Your CraftVine Seller Account
            </h1>
            {/* input fileds for id password start*/}
            <section className="text-gray-600 body-font">
              <div className="container px-2 py-8 mx-auto space-x-1 flex flex-wrap flex-col">
                <div className="mx-auto">
                  <div className="input flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2">
                    <input
                      type="email"
                      placeholder="Email"
                      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                      className="sm:px-6 py-3 w-full sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="sm:px-6 py-3 w-full sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t"
                    />
                  </div>

                  <button
                    className="sm:px-6 py-5 w-full sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider"
                    onClick={() => {
                      document
                        .getElementById("step2")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </section>
            {/* input field for id password end */}
          </div>
          {/* step 1 end */}
        </div>
        {/* Step 2 start */}
        <div className="px-2 py-2 sm:py-8 mx-auto flex flex-wrap flex-col">
          <div className="flex mx-auto flex-wrap mb-20 " id="step2">
            <a className="sm:px-8 py-3 w-full sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t sm:rounded-none">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              STEP 2
            </a>
            {/* Add similar JSX elements for STEP 2, STEP 3, and STEP 4 */}
          </div>
          <img
            className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
            alt="hero"
            src={verifyimg}
          />
          <div className="flex flex-col text-center w-full">
            <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
              Verify Yourself
            </h1>
            <p className="mx-auto leading-relaxed text-base">
              <div className="uploadcontainer flex flex-col sm:space-y-2">
                <div className="upimg flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 justify-center items-center">
                  <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
                    Upload Your Aadhar Card :
                  </h1>
                  <UploadJpegButton />
                </div>
                <div className="upimg flex flex-col sm:flex-row space-y-0 sm:space-y-0 sm:space-x-2">
                  <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
                    Upload Your Shop's Registration Certificate :
                  </h1>
                  <UploadPDFButton />
                </div>
                <div className="upimg flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
                    Upload Your PAN Card :
                  </h1>
                  <UploadJpegButton />
                  
                </div>
              </div>

              <button
                className="sm:px-6 py-5 w-full sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider"
                onClick={() => {
                  document
                    .getElementById("step3")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Next
              </button>
            </p>
          </div>
        </div>
        {/* step 2 start */}

        {/* step 3 */}
        <div className="px-2 py-2 sm:py-8 mx-auto flex flex-wrap flex-col">
          <div className="flex mx-auto flex-wrap mb-20 " id="step3">
            <a className="sm:px-8 py-3 w-full sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t sm:rounded-none">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              STEP 3
            </a>
            {/* Add similar JSX elements for STEP 2, STEP 3, and STEP 4 */}
          </div>
          <img
            className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
            alt="hero"
            src={appstep2}
          />
          <div className="flex flex-col text-center w-full">
            <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
              Submit an Application
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Write an application and submit it in{" "}
              <span style={{ fontWeight: "bold" }}>.pdf</span> format.
              <details>
                <summary>Application Format</summary>
                <p>
                  Application To become a seller <br />
                  Date: [Date] <br />
                  Dear Hiring Manager,
                  <br /> I am writing to express my interest to become a seller
                  on CrartVine. I have been selling handmade goos since [Years],
                  I believe I am well-equipped to contribute to your team and
                  help CraftVine achieve its goals. [Include any relevant
                  experience, skills, and achievements.]. Thank you for
                  considering my application. I look forward to the opportunity
                  to discuss how my skills and experience align with the needs
                  of your team.
                  <br />
                  Sincerely,
                  <br /> [Your Name] [Shop Name]
                </p>
              </details>
              <UploadPDFButton />
              <button
                className="sm:px-6 py-5 w-full sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider"
                onClick={() => {
                  document
                    .getElementById("step4")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Next
              </button>
            </p>
          </div>
        </div>
        {/* step 3 end */}
        {/* Step 4 start */}
        <div className="px-2 py-2 sm:py-8 mx-auto flex flex-wrap flex-col">
          <div className="flex mx-auto flex-wrap mb-20 " id="step4">
            <a className="sm:px-8 py-3 w-full sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t sm:rounded-none">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              STEP 4
            </a>
            {/* Add similar JSX elements for STEP 2, STEP 3, and STEP 4 */}
          </div>
          <img
            className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
            alt="hero"
            src={goods}
          />
          <div className="flex flex-col text-center w-full">
            <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
              List Your Goods
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Choose all types of goods you deal in :)
              <CategorySelection />
              <button
                className="sm:px-6 py-5 w-full sm:w-auto justify-center sm:justify-start border-b-2 title-font  bg-green-400 rounded-full font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider"
                onClick={() => {
                  document
                    .getElementById("step4")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                FINISH
              </button>
            </p>
          </div>
        </div>
        {/* Step 4 end */}
      </section>
      {/* become a seller section ended */}
      {/* footer */}
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src={logo} className="w-10 h-10 rounded-full" alt="Logo" />
            {/* Add your logo image here */}
            <span className="ml-3 text-xl">CraftsVine</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 CraftsVine
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>

      {/* footer ended */}


    </div>
  );
};

export default Seller;
