import React from "react";
import { useTitle } from "../../hooks/useTitle";
import filterImage from "../../assets/additionpic1/filter.png";

export const Projects1 = () => {
  useTitle("Codebook-Tp");

  return (
    <main className="">
      <section className="dark:text-white max-w-screen-xl">
        <h1 className="mb-7 text-center text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Codebook-Tp
        </h1>
        <div className="flex items-center justify-center">
          <img
            className="my-7 rounded-xl object-cover"
            src="/assets/projectSinglePagePic/Codebook/header.png"
            alt="Codebook-Tp"
          />
        </div>
        <div className="my-16">
          <h2 className="my-4 font-bold text-4xl md:text-5xl">
            What is "Codebook-Tp" ?
          </h2>
          <div className="text-xl md:text-2xl">
            &emsp;Codebook is an innovative e-commerce website that leverages
            cutting-edge technologies to offer an exceptional shopping
            experience. Built with ReactJS, Tailwind CSS, JSON Server with
            authentication, and the power of useContext and Reducer, Codebook
            delivers a seamless, secure, and user-friendly platform for all your
            online shopping needs
          </div>
        </div>
        <div>
          <div className="my-16">
            <h2 className="my-4 font-bold text-4xl md:text-5xl">
              Why I need to create this web-app?
            </h2>
            <div>
              <p className="text-xl md:text-2xl">
                &emsp; Creating Codebook, an e-commerce website powered by
                ReactJS, Tailwind CSS, JSON Server Auth, and utilizing the
                useContext and Reducer features, is an outstanding opportunity
                for me to learn and practice React development. This project
                enables me to delve into the world of React, a widely-used
                JavaScript library for building dynamic user interfaces.
                <br />
              </p>
              <p className="text-xl md:text-2xl">
                <br /> &emsp;Additionally, I can enhance my UI design skills by
                implementing effective styling using Tailwind CSS, a
                utility-first CSS framework. Understanding authentication
                mechanisms and ensuring data security is made possible through
                JSON Server Auth, safeguarding user information.
              </p>
              <div className="flex mt-4">
                <img src={filterImage} alt="filterimage" className="mr-4" />
                <div>
                  <p className="text-xl md:text-2xl">
                    <br /> &emsp;Meanwhile, I can efficiently manage and share
                    the state within my application, thanks to React's
                    useContext and Reducer features. Moreover, I get to create a
                    responsive website that adapts seamlessly to various
                    devices, honing my web development skills.
                  </p>
                  <p className="text-xl md:text-2xl">
                    <br /> &emsp;Through this hands-on experience, I can build a
                    fully-functional e-commerce platform complete with features
                    like a product catalog, shopping cart, user profiles, search
                    and filtering, secure checkout, and real-time updates. This
                    project encompasses real-world problem-solving in web
                    development, covering user authentication, database
                    management, payment processing, and optimizing the user
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="my-16">
            <h2 className="my-4 font-bold text-4xl md:text-5xl">Conclusion</h2>
            <div className="text-xl md:text-2xl">
              &emsp;  In conclusion, developing Codebook provides me with a
              holistic learning experience in modern web development, making it
              a valuable educational endeavor.
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="mb-2 ">
            The initial loading may be slower due to the deployment of a free
            API
          </p>
          <div className="flex justify-center">
            <a
              href="https://codebook-tp.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="h-12 text-base flex items-center justify-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="w-7 mr-4 flex items-center"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#ffffff"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth={1}
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit={10}
                    strokeDashoffset={0}
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M8.03125,8.45703c-0.26088,0.00188 -0.52094,0.1055 -0.71094,0.3125c-3.925,4.272 -6.32031,9.97147 -6.32031,16.23047c0,6.259 2.39531,11.95847 6.32031,16.23047c0.38,0.414 1.03659,0.41262 1.43359,0.01563l2.12891,-2.12891c0.383,-0.383 0.38058,-0.99253 0.01758,-1.39453c-3.045,-3.37 -4.90039,-7.83366 -4.90039,-12.72266c0,-4.889 1.85539,-9.35266 4.90039,-12.72266c0.363,-0.402 0.36542,-1.01053 -0.01758,-1.39453l-2.12891,-2.12891c-0.1985,-0.1985 -0.46178,-0.29875 -0.72266,-0.29687zM41.96875,8.45703c-0.26112,-0.00162 -0.52416,0.09838 -0.72266,0.29688l-2.13086,2.13086c-0.383,0.383 -0.38058,0.99058 -0.01758,1.39258c3.046,3.369 4.90234,7.83366 4.90234,12.72266c0,4.889 -1.85539,9.35266 -4.90039,12.72266c-0.363,0.402 -0.36542,1.01053 0.01758,1.39453l2.12891,2.12891c0.397,0.397 1.05359,0.39738 1.43359,-0.01562c3.925,-4.272 6.32031,-9.97147 6.32031,-16.23047c0,-6.259 -2.39531,-11.95847 -6.32031,-16.23047c-0.19,-0.207 -0.44981,-0.31087 -0.71094,-0.3125zM35.625,14.83789c-0.26987,-0.01338 -0.54541,0.08251 -0.75391,0.29101l-2.13086,2.13086c-0.359,0.359 -0.39827,0.93717 -0.07227,1.32617c1.456,1.738 2.33203,3.97506 2.33203,6.41406c0,2.439 -0.87603,4.67511 -2.33203,6.41211c-0.326,0.389 -0.28674,0.96717 0.07227,1.32617l2.13086,2.13281c0.417,0.417 1.09642,0.37959 1.48242,-0.06641c2.272,-2.629 3.64648,-6.05669 3.64648,-9.80469c0,-3.748 -1.37448,-7.17569 -3.64648,-9.80469c-0.193,-0.223 -0.45864,-0.34405 -0.72852,-0.35742zM14.375,14.83984c-0.26988,0.01337 -0.53552,0.13442 -0.72852,0.35742c-2.272,2.628 -3.64648,6.05473 -3.64648,9.80273c0,3.748 1.37448,7.17569 3.64648,9.80469c0.386,0.446 1.06542,0.48341 1.48242,0.06641l2.13086,-2.13086c0.359,-0.359 0.39827,-0.93717 0.07227,-1.32617c-1.456,-1.738 -2.33203,-3.97506 -2.33203,-6.41406c0,-2.439 0.87603,-4.67511 2.33203,-6.41211c0.326,-0.389 0.28674,-0.96717 -0.07227,-1.32617l-2.13086,-2.13281c-0.2085,-0.2085 -0.48403,-0.30244 -0.75391,-0.28906zM25,19c-3.314,0 -6,2.686 -6,6c0,3.314 2.686,6 6,6c3.314,0 6,-2.686 6,-6c0,-3.314 -2.686,-6 -6,-6z" />
                    </g>
                  </g>
                </svg>
                Try it yourself
              </button>
            </a>
            <a
              href="https://github.com/Tanapon-p/codebookecommerce"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="h-12 flex items-center border text-black hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-gray-300 dark:hover:bg-gray-400 focus:outline-none dark:focus:ring-blue-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="w-8 mr-4 flex"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill=""
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(8.53333,8.53333)">
                      <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path>
                    </g>
                  </g>
                </svg>
                Source Code
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
