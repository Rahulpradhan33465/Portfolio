import React from 'react';
import Typical from 'react-typical';
import Resume from '../../assets/Resume.pdf';
import Navbar from '../Navbar/Navbar';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <Navbar />
      <div className="profile-parent">
        <div className="profile-details" id="home">
          <div className="colz">
            <div className="icons">
              <a href="https://www.instagram.com/rahul_pradhan_hpy">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
            <div className="icons">
              <a href="https://www.facebook.com/100035490184814">
                <i className="fa fa-facebook-square"></i>
              </a>
            </div>
            <div className="icons">
              <a href="#youtube">
                <i className="fa fa-youtube-square"></i>
              </a>
            </div>
            <div className="icons">
              <a href="#google">
                <i className="fa fa-google-plus-square"></i>
              </a>
            </div>
            <div className="icons">
              <a href="https://www.instagram.com/rahul_pradhan_hpy">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
            <div className="icons">
              <a href="#twitter">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-detail-name">
            <span className="primary-text">
              Hello I'M <span className="highlighted-text">Rahul</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  steps={[
                    'Ethusiastic Dev ',
                    1000,
                    'Full Stack Developer',
                    1000,
                    'MERN Stack Developer',
                    1000,
                    'DSA And Problem Solver',
                    1000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </h1>
              <span className="profile-role-tagline">
                <p className="primary-text">
                  {' '}
                  Knack of building application with front and back end
                  operations.{' '}
                </p>
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn-primary">Hire me</button>
            <a href={Resume} download="Resume.pdf">
              <button className="btn-secondary">Get Resume</button>
            </a>
          </div>
        </div>

        <div className="profile__container">
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
