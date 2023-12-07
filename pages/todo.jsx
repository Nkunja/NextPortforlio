import Image from 'next/image';
import React from 'react';
import TodoImg from '../public/assets/projects/todo.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import { Button } from '@chakra-ui/react';

const todo = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={TodoImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>To-Do App</h2>
          <h3>Javascript / HTML / CSS</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I built thid application in HTML and CSS and added its functuionalities in Javascript. It is
            a good and simple application that can help you as you plan your activities to keep reminders.
          </p>
          <a
            href='https://github.com/Nkunja/To-do-app'
            target='_blank'
            rel='noreferrer'
          >
            <Button variant="solid" colorScheme="blue" className='px-8 py-2 mt-4 mr-8'>Code</Button>
          </a>
          <a
            href='https://to-do-app-gray-ten.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <Button variant="solid" colorScheme="blue" className='px-8 py-2 mt-4 mr-8'>Demo</Button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> IMDB API
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
        <Button variant="solid" colorScheme="red" className='px-8 py-2 mt-4 mr-8'>Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default todo;
