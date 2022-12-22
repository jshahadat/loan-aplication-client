import React from 'react';
import { toast } from 'react-hot-toast';

const TabThree = () => {


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const loan = form.loan.value
        const interest = form.interest.value
        const tenure = form.tenure.value;
        const purpose = form.purpose.value
        const addLoanDetail = {
            loan,
            interest,
            tenure,
            purpose,
        }
        fetch('https://loan-aplication-server.vercel.app/loandetails', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addLoanDetail)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast('Your Loan Detail Add successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));
    }
    return (
        <div>




            <div class="relative w-full max-w-lg">
                <div class="absolute lg:top-0 top-0 lg:left-2 left-1 lg:w-72 w-72 lg:h-72 h-60  bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div class="absolute lg:top-0 lg:left-72 left-32 w-72  lg:h-72 h-60 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div class="absolute lg:-bottom-8 lg:left-40 top-42 left-20 w-72 lg:h-72 h-60 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div class="relative space-y-2">

                    <div>
                        <form onSubmit={handleSubmit}>
                            <section className="flex lg:mr-10 mr-5 ml-5 lg:ml-10 justify-center">
                                <div className="flex rounded-2xl shadow-lg  lg:w-fit w-96 p-5 items-center">

                                    <div className='flex justify-center'>
                                        <div className="">
                                            <h2 className="font-bold text-2xl mb-4 text-[#002D74]">Loan Application details</h2>

                                            <div className='lg:flex'>
                                                <div className=' pb-6 lg:mr-6'>
                                                    <input className="p-2 lg:w-64  w-80  rounded-xl border" type="number" name="loan"
                                                        placeholder="Loan Amount" required />
                                                </div>
                                                <div className="relative  ">

                                                    <input className="p-2 lg:w-64  w-80 rounded-xl border" type="number" name="interest" placeholder="Interest Rate," required />
                                                </div>
                                            </div>
                                            <div className='lg:flex mt-5 pb-6'>
                                                <div className="relative pb-6 lg:mr-6">
                                                    <input className="lg:w-64  w-80 p-2 rounded-xl border" type="text" name="tenure" placeholder="loan tenure" required />
                                                </div>
                                                <div className="relative">
                                                    <input className="p-2 lg:w-64  w-80 rounded-xl border" type="text" name="purpose" placeholder="Purpose Of loan" required />
                                                </div>
                                            </div>

                                            <div class="relative w-28 h-12 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
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
                        <div className="bg-gray-100 flex rounded-2xl shadow-lg  lg:w-fit w-96 p-5 items-center">

                            <div className='flex justify-center'>
                                <div className="">
                                    <h2 className="font-bold text-2xl mb-4 text-[#002D74]">Loan Application details</h2>

                                    <div className='lg:flex'>
                                        <div className=' pb-6 lg:mr-6'>
                                            <input className="p-2 lg:w-64  w-80  rounded-xl border" type="number" name="loan"
                                                placeholder="Loan Amount" required />
                                        </div>
                                        <div className="relative  ">

                                            <input className="p-2 lg:w-64  w-80 rounded-xl border" type="number" name="interest" placeholder="Interest Rate," required />
                                        </div>
                                    </div>
                                    <div className='lg:flex mt-5 pb-6'>
                                        <div className="relative pb-6 lg:mr-6">
                                            <input className="lg:w-64  w-80 p-2 rounded-xl border" type="text" name="tenure" placeholder="loan tenure" required />
                                        </div>
                                        <div className="relative">
                                            <input className="p-2 lg:w-64  w-80 rounded-xl border" type="text" name="purpose" placeholder="Purpose Of loan" required />
                                        </div>
                                    </div>

                                    <div className=''>
                                        <input className='btn' type="submit" value="Submit" />
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

export default TabThree;