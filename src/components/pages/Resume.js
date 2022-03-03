import React from 'react';

export default function Resume() {
   return (
     <div>
     <div className="resume d-flex justify-content-center">
      <a href={process.env.PUBLIC_URL + '/ResumeNL.pdf'} target="_blank" rel='noreferrer' id = "resumeText" >Click to view my Resume</a>
       </div>
       </div>
   )
}
