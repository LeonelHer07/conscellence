import React from 'react'
import Title from './Title'
import Cards from './Cards'


const Secctionrun = () => {
  return (
    <div className='w-full  pt-[130px] flex flex-col items-center mb-[120px]'>
        <Title/>

        <div className='flex flex-col md:flex-row md:gap-6 items-start'>
            <Cards num="01" head="Stagnant Growth?" text="Unleash your business's true potential by identifying growth barriers and implementing strategic solutions."/>
            <Cards num="02" head="Operational Inefficiencies?" text="Streamline your operations with our consulting expertise, optimizing processes for enhanced efficiency." />
            <Cards num="03" head="Market Challenges?" text="Overcome market challenges with tailored strategies designed to position your business for success." />
        </div>
        

    </div>
  )
}

export default Secctionrun