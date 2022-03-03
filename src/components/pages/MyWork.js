import React from "react";


export default function MyWork() {return ( <div>
<h1>My Work</h1>
<section id="portfolio">
      <div className="border column">
          <div className = "row">
              <a href="https://cinemajik.herokuapp.com/" target="_blank" rel='noreferrer'>
                  <figure className="container">
                      <div id="cinemagic" className="card-image small-card"> 
                          <div className="layer"></div>
                      </div>
                      <div className="work-title">
                          <h3>Cinemagic</h3>
                          <p>Fullstack app, finds where movies are played</p>
                      </div>
                  </figure>
              </a>
        </div>
        <div className="row">
              <a href="https://cmoney574.github.io/Currency-Comparisons/" target="_blank" rel='noreferrer'>
                  <figure className="container">
                      <div id="currencycomparison" className="card-image"> 
                          <div className="layer"></div>
                      </div>
                      <div className="work-title">
                          <h3>Currency Comparisons  </h3>
                          <p className="small-text">3rd Party API with JS/HTML/Bootstrap</p>
                      </div>
                  </figure>
              </a>
          </div>
        <div>
              <a href="https://github.com/NickLyle2009/Professional-README-Generator" target="_blank" rel='noreferrer'>
                  <figure className="container">
                      <div id="README" className="card-image small-card">
                          <div className="layer"></div> 
                      </div>
                      <div className="work-title">
                          <h3>README Generator</h3> 
                          <p>Generates README through JS, inquirer/</p>
                      </div>
                  </figure>
              </a>
          </div>
       
          <div className="row">
              <a href="https://nicklyle2009.github.io/password-generator/" target="_blank" rel='noreferrer'>
                  <figure className="container">
                      <div id="passwordGenerator" className="card-image small-card"> 
                          <div className="layer"></div>
                      </div>
                      <div className="work-title">
                          <h3>Password Generator</h3>
                          <p>Creates Randomized passwords</p>
                      </div>
                  </figure>
              </a>
              </div>
            <div>
              <a href="https://github.com/NickLyle2009/Employee-tracking-mysql" target="_blank" rel='noreferrer'>
                  <figure className="container">
                      <div id="employeeTracking" className="card-image small-card"> 
                          <div className="layer"></div>
                      </div>
                      <div className="work-title">
                          <h3>Employee Management System</h3>
                          <p>Manage Database, Mysql</p>
                      </div>
                  </figure>
              </a>
              </div>
          </div>
  </section>
</div>
);
}