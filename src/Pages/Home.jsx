import React from 'react'
import stillLogo from '../Assets/stillLogo.png'

const Home = () => {
    return (
        <div>
            <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>

                <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                    {/* Replace justify-center and get closer to the edge, maybe once video is added it should be fixed   */}
                    <div className='flex flex-col justify-start md:items-start w-full px-1 py-8 '>
                        <h1 className='pt-3 text-5xl md:text-7xl font-bold text-left'>Introduce.</h1>
                        <h1 className=' text-5xl md:text-7xl font-bold text-left'>Educate.</h1>
                        <h1 className=' text-5xl md:text-7xl font-bold text-left'>Inspire.</h1>
                        {/* <p className='text-2xl'>This is Code-I-Con.</p> */}
                        <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
                    </div>
                    <div>
                        <img className='w-full ' src={stillLogo} alt="/" />
                    </div>
                </div>

            </div>

            <div className='w-full my-32'>
                <div className='max-w-[1240px] mx-auto'>

                    <div className='text-center'>
                        {/* add inspirational text here */}
                        <p className='text-3xl py-6 text-gray-500'>We are a nonprofit that strives to convey our passion for technology to young minds and encourage them to look into STEM career paths. </p>
                    </div>

                    <div className='grid md:grid-cols-3 gap-1 px-2 text-center my-9'>
                        <div className='border py-8 rounded-xl shadow-xl'>
                            <p className='text-4xl font-bold text-indigo-600'>Mentoring</p>
                            <p className='text-gray-400 mt-2 text-2xl'>Unique Strategies</p>
                        </div>

                        <div className='border py-8 rounded-xl shadow-xl'>
                            <p className='text-4xl font-bold text-indigo-600'>Curriculum</p>
                            <p className='text-gray-400 mt-2 text-2xl'>First Class</p>
                        </div>

                        <div className='border py-8 rounded-xl shadow-xl'>
                            <p className='text-4xl font-bold text-indigo-600'>Something</p>
                            <p className='text-gray-400 mt-2 text-2xl'>Something</p>
                        </div>
                    </div>

                    <div className='text-center'>
                        <h2 className='text-5xl font-bold pt-20'>This is Code-I-Con.</h2>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home
