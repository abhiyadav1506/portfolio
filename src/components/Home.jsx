import React from 'react';
import '../styles/Home.css';
import LinkedInicon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from "@material-ui/icons/GitHub";



const Home = () => {
  return (
    <div className="home"> 
    <div className="about">
      <h2> Hi, My Name is Abhishek yadav</h2>
      <div className="prompt">
        <p>
          A software developer with passion of learning and creating.
        </p> 
        <LinkedInicon />
        <EmailIcon />
        <GithubIcon />
      </div>
    </div>
    <div className="skills">
      <h1>Skills</h1>
      <ol className='list'>
        <li className='item'>
        <h2>front-End</h2>
        <span> HTML,CSS,REACTJS </span>
        </li>
        <li className='item'>
          <h2>languages</h2>
          <span> HTML,CSS,JAVASCRIPT </span>
        </li>
      </ol>
    </div>
    </div>
  )
}

export default Home