import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/avatar1.jpeg';
import { Button } from '@chakra-ui/react';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          {/* <p className='py-2 text-gray-600'>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p> */}
          <p className='py-2 text-gray-600'>
            I am a full stack web and mobile developer with extensive experience in building robust, scalable, and efficient full stack applications. My expertise lies in utilizing a variety of technologies to create seamless user experiences across web and mobile platforms.
          </p>
          <p className='py-2 text-gray-600'>
            I specialize in building mobile-responsive front-end UI applications that connect with APIs and integrate with various backend technologies. I am well-versed in both traditional server-rendered web applications as well as modern single-page applications (SPAs) and progressive web apps (PWAs).
          </p>
          <p className='py-2 text-gray-600'>
            My primary tech stack includes Python with Django for backend development, JavaScript with React.js for front-end development, and React Native for mobile app development. I have extensive experience working with databases, particularly PostgreSQL, and utilizing Firebase for real-time database and authentication.
          </p>
          <div>
          <Link href='/#contact'>
          <Button variant="solid" colorScheme="blue" className='px-8 py-2 mt-4 mr-8'>Contact Me</Button>
          </Link>
          <Link href='/#projects'>
          <Button variant="solid" colorScheme="blue" className='px-8 py-2 mt-4 mr-8'>Some of my Projects</Button>
          
          </Link>
          </div>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};


export default About;
