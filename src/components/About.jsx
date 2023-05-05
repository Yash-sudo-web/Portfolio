import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {services} from '../constants/constants'
import {fadeIn, textVariant} from '../utils/motion'
import {SectionWrapper} from '../hoc'
const About = () => {
  const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />
  
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
  return (
    <>
    <motion.div>
      <p className={styles.sectionSubText}>
        Introduction
      </p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    
    <motion.p variants={fadeIn("","",0.1,0.1)} className='mt-4 text-secondary text-[17px]
     max-w-3xl leading-[30px]'> 
    I'm Yash, a student and aspiring fullstack developer with a passion for building dynamic web applications.
    Although I'm relatively new to the field, I've been working hard to develop my skills in using MongoDB, Express, React, and Node.js to create functional and user-friendly applications.
    <br/><br/>
    As a beginner, I'm excited to explore different projects and technologies to gain more experience and knowledge in the field.
    Currently, I'm particularly interested in 3D frameworks and web3, and I'm eager to learn more about their potential applications in web development.
    <br/><br/>
    Although I may not have as much experience as some other developers, 
    I'm committed to working hard and delivering high-quality solutions that meet the needs of my clients and their users. I'm excited to see where my journey in web development takes me and look forward to constantly learning and growing in this field.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
    {services.map((service, index) =>(
      <ServiceCard key={service.title} index= {index} {...service} /> 
    ))}
    </div>
    </>
  )
}

export default SectionWrapper(About,"about")