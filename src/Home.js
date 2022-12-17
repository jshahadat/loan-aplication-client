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
        <div >
            <div>
                <div className="navbar bg-neutral text-neutral-content">
                    <h1 className="btn btn-ghost normal-case text-xl">Money Bank</h1>
                </div>
                <div className="flex mt-10 justify-center">

                    <div className='mr-5 tab-btn'>
                        <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)} >
                            Tab-1
                        </button>
                    </div>

                    <div className='mr-5 tab-btn'>
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
                <div>
                    <div className="content-tabs">
                        <div className={toggleState === 1 ? "content  active-content" : "content"}>
                            <div>
                                <TabOne></TabOne>
                            </div>
                        </div>


                        <div className="content-tabs">
                            <div className={toggleState === 2 ? "content  active-content" : "content"}>
                                <div>
                                    <TabTwo></TabTwo>
                                </div>
                            </div>
                        </div>

                        <div className="content-tabs">
                            <div className={toggleState === 3 ? "content  active-content" : "content"}>
                                <div>
                                    <TabThree></TabThree>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;