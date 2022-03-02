import React from 'react';

export default function Resume() {
   return (
     <div className=''>
       <h1>Check out my Resume</h1>
       <a href={process.env.PUBLIC_URL + '/ResumeNL.pdf'} target="_blank" rel='noreferrer'>Click to view my Resume</a>
       </div>
   )
}
