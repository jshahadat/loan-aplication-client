import React from 'react';
import { toast } from 'react-hot-toast';


const TabOne = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.title.value
        const moblie = form.moblie.value
        const age = form.age.value;
        const permanentAddress = form.permanentAddress.value
        const presentAddress = form.presentAddress.value;
        const addPesonal = {
            name,
            moblie,
            age,
            permanentAddress,
            presentAddress
        }
        fetch('https://loan-aplication-server.vercel.app/personaldetails', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addPesonal)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast('Your Details Add successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));
    }
    return (
        <div>

            <div class="relative w-full max-w-lg">
                <div class="absolute lg:top-0 top-0 lg:left-2 left-1 lg:w-72 w-72 lg:h-72 h-60  bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div class="absolute lg:top-0 lg:left-80 left-32 w-72  lg:h-72 h-60 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div class="absolute lg:-bottom-8 lg:left-40 top-56 left-20 w-72 lg:h-72 h-60 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>


                <div class="relative space-y-2">

                    <div>
                        <form onSubmit={handleSubmit}>
                            <section className="flex lg:mr-10 mr-5 ml-5 lg:ml-10 justify-center">
                                <div className=" flex rounded-2xl shadow-lg  lg:w-fit w-96 p-5 items-center">

                                    <div className='flex justify-center'>
                                        <div className="">
                                            <h2 className="font-bold text-2xl text-[#002D74] mb-4">Personal Details</h2>

                                            <div className='lg:flex'>
                                                <div className=' pb-6 lg:mr-6'>
                                                    <input className="p-2 lg:w-64 w-80 rounded-xl border" type="text" name="title"
                                                        placeholder="First Name" required />
                                                </div>
                                                <div className="relative">

                                                    <input className="p-2 lg:w-64 w-80  rounded-xl border" type="text" name="img" placeholder="Last Name" required />
                                                </div>
                                            </div>
                                            <div className='lg:flex mt-5'>
                                                <div className="relative pb-6 lg:mr-6">
                                                    <input className="lg:w-64  w-80 p-2 rounded-xl border" type="number" name="moblie" placeholder="Mobile Number" required />
                                                </div>
                                                <div className="relative">
                                                    <input className="p-2 lg:w-64  w-80 rounded-xl border" type="number" name="age" placeholder="Age" required />
                                                </div>
                                            </div>
                                            <div className='lg:flex mt-5'>
                                                <div className="relative pb-6 lg:mr-6">
                                                    <input className="lg:w-64  w-80 p-2 rounded-xl border" type="text" name="presentAddress" placeholder="Present Address" required />
                                                </div>
                                                <div className="relative pb-6">
                                                    <input className="p-2 lg:w-64  w-80 rounded-xl border" type="text" name="permanentAddress" placeholder="Permanent address" required />
                                                </div>
                                            </div>

                                            <div class="mb-4 relative w-28 h-12 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                                <div className=' w-28 h-28  bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute'>
                                                    <input className='w-28 h-28 btn btn-outline bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute' type="submit" />
                                                </div>
                                                <div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </section>





                        </form>

                    </div>


                </div>
            </div>


            {/* <div>
                <form onSubmit={handleSubmit}>
                    <section className="flex lg:mr-10 mr-5 ml-5 lg:ml-10 justify-center">
                        <div className=" flex rounded-2xl shadow-lg lg:w-fit w-96 lg:p-5 pl-8 items-center">

                            <div className='flex justify-center'>
                                <div className="">
                                    <h2 className="font-bold text-2xl text-[#002D74] mb-4">Personal Details</h2>

                                    <div className='lg:flex'>
                                        <div className=' pb-6 lg:mr-6'>
                                            <input className="p-2 lg:w-64  w-80  rounded-xl border" type="text" name="title"
                                                placeholder="First Name" required />
                                        </div>
                                        <div className="relative">

                                            <input className="p-2 lg:w-64  w-80  rounded-xl border" type="text" name="img" placeholder="Last Name" required />
                                        </div>
                                    </div>
                                    <div className='lg:flex mt-5'>
                                        <div className="relative pb-6 lg:mr-6">
                                            <input className="lg:w-64  w-80 p-2 rounded-xl border" type="number" name="moblie" placeholder="Mobile Number" required />
                                        </div>
                                        <div className="relative">
                                            <input className="p-2 lg:w-64  w-80 rounded-xl border" type="number" name="age" placeholder="Age" required />
                                        </div>
                                    </div>
                                    <div className='lg:flex mt-5'>
                                        <div className="relative pb-6 lg:mr-6">
                                            <input className="lg:w-64  w-80 p-2 rounded-xl border" type="text" name="presentAddress" placeholder="Present Address" required />
                                        </div>
                                        <div className="relative pb-6">
                                            <input className="p-2 lg:w-64  w-80 rounded-xl border" type="text" name="permanentAddress" placeholder="Permanent address" required />
                                        </div>
                                    </div>

                                    <div>
                                        <input className='btn' type="submit" value="Submit" />
                                        <a href="#_" class="relative inline-block text-lg group">
                                            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                                <span class="relative">Button Text</span>
                                            </span>
                                            <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </section>





                </form>

            </div> */}
        </div>
    );
};

export default TabOne;