import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { NavLink, Redirect } from 'react-router-dom';
// import '../App.css';
import Header from '../partials/Header';
import Nav from '../partials/Nav';
import MainMenu from '../partials/MainMenu'
import ComputerIcon from '../../img/computer.png';
import ProfilePicture from '../../img/profile_picture.png';
import PageTemplate from '../partials/PageTemplate';
import AboutMenu from './AboutMenu';
import Company from './Company';
import History from './History';
import Services from './Services';
import Location from './Location';


export const About = () =>
  <PageTemplate>
    <section className="about">
      <Route component={AboutMenu} />
      <Route exact path="/about" component={Company} />
      <Route path="/about/history" component={History} />
      <Route path="/about/services" component={Services} />
      <Route path="/about/location" component={Location} />
    </section>
  </PageTemplate>

export default About;


// export default function About(props) {
//   return (
//     <div className="about-container">
//       <PageTemplate />
//       <h1 className="about-title">Our Mission</h1>
//       <figure className="about-figure">
//         <div className="about-image-container">
//
//         </div>
//         <figcaption>
//           <p>
//             DevOps requires custom solutions for
//             their operational environment. When there
//             isn't a marketplace for your unique problem,
//             it is best to look to fellow engineers for
//             custom solutions. ScriptHub allows DevOps
//             engineers to advertise jobs or take on
//             micro-contracts, allowing for focus on core
//             responsibilities. Have the power of an entire
//             team at the fraction of the cost.
//           </p>
//         </figcaption>
//       </figure>
//
//     </div>
//   );
// }
