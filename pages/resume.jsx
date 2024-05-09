import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'react';


const resume = () => {
  const documentURL = 'https://docs.google.com/document/d/1PGC5JVIMxgdamr2XRBQf8OPedtRk9V98lEGqSrMJsJY/edit?usp=sharing';
  return (
    <>
      <Head>
        <title>Nkunja Resume</title>
        
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Nkunja Denis Munene</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/nkunja-denis-147904205/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/Nkunja'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div>
          <iframe src={documentURL} width="100%" height="600px" />
        </div>
        
      </div>
    </>
  );
};

export default resume;


// import React from 'react';
// import Head from 'next/head';
// import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

// const Resume = () => {
//   // Replace 'YOUR_DOCUMENT_SHAREABLE_LINK' with the shareable link of your Google Drive document
//   const documentURL = 'https://docs.google.com/document/d/1PGC5JVIMxgdamr2XRBQf8OPedtRk9V98lEGqSrMJsJY/edit?usp=sharing';

//   return (
//     <>
//       <Head>
//         <title>Nkunja Resume</title>
//       </Head>

//       <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
//         <h2 className='text-center'>Resume</h2>
//         <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
//           <h2 className='text-center'>Nkunja Denis Munene</h2>
//           <div className='flex'>
//             <a
//               href='https://www.linkedin.com/in/nkunja-denis-147904205/'
//               target='_blank'
//               rel='noreferrer'
//             >
//               <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
//             </a>
//             <a
//               href='https://github.com/Nkunja'
//               target='_blank'
//               rel='noreferrer'
//             >
//               <FaGithub size={20} style={{ marginRight: '1rem' }} />
//             </a>
//           </div>
//         </div>
//         {/* Use the shareable link to embed the document */}
//         <iframe src={`${documentURL}/export?format=pdf`} width="100%" height="600px" />
//       </div>
//     </>
//   );
// };

// export default Resume;
