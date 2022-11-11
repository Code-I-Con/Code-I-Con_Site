import React from 'react'

const About = () => {
    return (
        <div className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto'>

                <div className='text-center'>
                    {/* add inspirational text here */}
                    <p className='text-3xl py-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione explicabo voluptate quas recusandae ut adipisci.</p>
                </div>

                <div className='grid md:grid-cols-3 gap-1 px-2 text-center my-9'>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-4xl font-bold text-indigo-600'>Mentoring</p>
                        <p className='text-gray-400 mt-2 text-2xl'>Unique Strategies</p>
                    </div>

                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-4xl font-bold text-indigo-600'>Curriculum</p>
                        <p className='text-gray-400 mt-2 text-2xl'>World Class</p>
                    </div>

                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-4xl font-bold text-indigo-600'>Something</p>
                        <p className='text-gray-400 mt-2 text-2xl'>Something</p>
                    </div>
                </div>

                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>This is Code-I-Con.</h2>
                </div>

            </div>
        </div>
    )
}

export default About
