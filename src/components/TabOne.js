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
            <div>
                <form onSubmit={handleSubmit}>
                    <section className="flex lg:mr-10 mr-5 ml-5 lg:ml-10 justify-center">
                        <div className="bg-gray-100 flex rounded-2xl shadow-lg  lg:w-fit w-96 p-5 items-center">

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

export default TabOne;