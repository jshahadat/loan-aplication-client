import React from 'react';
import { toast } from 'react-hot-toast';

const TabTwo = () => {



    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const businessName = form.businessname.value
        const gst = form.gst.value
        const address = form.address.value;
        const email = form.email.value
        const description = form.description.value;
        const addBussinessDetails = {
            businessName,
            gst,
            address,
            email,
            description
        }
        fetch('https://loan-aplication-server.vercel.app/businessdetails', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addBussinessDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast('Your bussiness Add successfully')
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
                                    <h2 className="font-bold text-2xl text-[#002D74] mb-4">Business Details</h2>

                                    <div className='lg:flex'>
                                        <div className=' pb-6 lg:mr-6'>
                                            <input className="p-2 lg:w-64  w-80  rounded-xl border" type="text" name="businessname"
                                                placeholder="Applicant’s business name" required />
                                        </div>
                                        <div className="relative  ">

                                            <input className="p-2 lg:w-64  w-80 rounded-xl border" type="number" name="gst" placeholder=" GST No." required />
                                        </div>
                                    </div>
                                    <div className='lg:flex mt-5'>
                                        <div className="relative pb-6 lg:mr-6">
                                            <input className="lg:w-64  w-80 p-2 rounded-xl border" type="text" name="address" placeholder="Address" required />
                                        </div>
                                        <div className="relative">
                                            <input className="p-2  lg:w-64  w-80 rounded-xl border" type="Email" name="email" placeholder="Business Email" required />
                                        </div>
                                    </div>
                                    <div className="relative pb-6">
                                        <input className="p-2 mt-5 h-28 lg:w-full  w-80 rounded-xl border" type="text" name="description" placeholder="Description" required />
                                    </div>
                                    <div className='mt-1 ml-0'>
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

export default TabTwo;