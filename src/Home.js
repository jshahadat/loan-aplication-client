import React, { useState } from 'react';
import TabOne from './components/TabOne';
import TabThree from './components/TabThree';
import TabTwo from './components/TabTwo';
import './Home.css'


const Home = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        // <div className=''>
        //     <div>
        //         <div className="navbar bg-neutral text-neutral-content">
        //             <h1 className="btn btn-ghost normal-case text-xl">Money Bank</h1>
        //         </div>
        //         <div className="flex mt-10 justify-center">

        //             <div className='mr-5 tab-btn'>
        //                 <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)} >
        //                     Tab-1
        //                 </button>
        //             </div>

        //             <div className='mr-5 tab-btn'>
        //                 <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
        //                     Tab-2
        //                 </button>

        //             </div>

        //             <div className='mr-5 tab-btn'>
        //                 <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
        //                     Tab-3
        //                 </button>

        //             </div>
        //         </div>
        //         <div>


        //             <div className="content-tabs">

        //                 <div className={toggleState === 1 ? "content  active-content" : "content"}>
        //                     <div>
        //                         <TabOne></TabOne>
        //                     </div>
        //                 </div>


        //                 <div className="content-tabs">
        //                     <div className={toggleState === 2 ? "content  active-content" : "content"}>
        //                         <div>
        //                             <TabTwo></TabTwo>
        //                         </div>
        //                     </div>
        //                 </div>

        //                 <div className="content-tabs">
        //                     <div className={toggleState === 3 ? "content  active-content" : "content"}>
        //                         <div>
        //                             <TabThree></TabThree>
        //                         </div>
        //                     </div>
        //                 </div>


        //             </div>
        //         </div>
        //     </div>
        // </div>





        <div className='w-fit'>


            {/* <div class="steps">
                <div class="step step-one">
                    <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)} >
                        Tab-1
                    </button>
                    <div class="liner"></div>
                    <span>Hello!</span>
                </div>

                <div class="step step-two">
                    <div class="liner"></div>
                    <span>Rating</span>
                </div>


                <div class="step step-three">
                    <div class="liner"></div>
                    <span>Conclusion</span>
                </div>
            </div> */}

            <div className="navbar bg-neutral text-neutral-content ">
                <h1 className="btn btn-ghost normal-case text-xl">Money Bank</h1>
            </div>
            <div class="bg-gray-50 min-h-screen lg:w-screen w-fit  flex flex-col items-center justify-center lg:px-16">

                <div className="flex mt-10 justify-center">

                    <div className='mr-5 tab-btn '>
                        <div className='step step-one'>
                            <div className='liner'></div>
                            <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)} >
                                Tab-1
                            </button>
                        </div>
                    </div>

                    <div className='mr-5 tab-btn step-two'>
                        <div className='liner'></div>
                        <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
                            Tab-2
                        </button>

                    </div>

                    <div className='mr-5 tab-btn'>
                        <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
                            Tab-3
                        </button>

                    </div>
                </div>

                <div className="conten-tabs">

                    <div className={toggleState === 1 ? "conten  active-conten" : "conten"}>
                        <div>
                            <TabOne></TabOne>
                        </div>
                    </div>


                    <div className="conten-tabs">
                        <div className={toggleState === 2 ? "conten  active-conten" : "conten"}>
                            <div>
                                <TabTwo></TabTwo>
                            </div>
                        </div>
                    </div>

                    <div className="conten-tabs">
                        <div className={toggleState === 3 ? "conten  active-conten" : "conten"}>
                            <div>
                                <TabThree></TabThree>
                            </div>
                        </div>
                    </div>


                </div>

                {/* <div class="relative w-full max-w-lg">
                    <div class="absolute lg:top-0 top-0 lg:left-8 left-1 lg:w-72 w-72 lg:h-72 h-60  bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div class="absolute lg:top-0 lg:left-80 left-40 lg:w-72 lg:h-72 h-60 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div class="absolute lg:-bottom-8 lg:left-40 top-30 left-40 w-72 lg:h-72 h-60 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    <div class="relative space-y-2">

                        <div class="ml-0 pr-8 lg:mr-9  rounded-lg flex items-center justify-between space-x-4">
                            <TabOne></TabOne>
                        </div>
                    </div>
                </div> */}
            </div>

        </div>
    );
};

export default Home;