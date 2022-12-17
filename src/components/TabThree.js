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
            <div>
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
            </div>
        </div>
    );
};

export default TabThree;