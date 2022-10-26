import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Eccom from '../public/assets/projects/eccom.png';
import travelImg from '../public/assets/projects/Travel.png'
import todoImg from '../public/assets/projects/todo.png'
// import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Nkunja Eccommerce Shop'
            backgroundImg={Eccom}
            projectUrl='/eccom'
            tech='React JS'
          />
          <ProjectItem
            title='Travel App'
            backgroundImg={travelImg}
            projectUrl='/travel'
            tech='React JS'

          />
          <ProjectItem
            title='To-Do App'
            backgroundImg={todoImg}
            projectUrl='/todo'
            tech='React JS'

          />
          {/* <ProjectItem
            title='Twitch UI'
            backgroundImg={Eccom}
            projectUrl='/twitch'
            tech='Next JS'

          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
