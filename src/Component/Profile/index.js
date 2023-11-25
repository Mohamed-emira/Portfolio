import React from 'react';
import './style.css';

export default function Profile() {
  return (
    <div className='container'>
    <div className='profile'>
      <div className='myprofile'>
        <h2 className='myprofile-title'><span>My</span>Profile</h2>
        <ul className='myprofile-list'>
          <li className='myprofile-item'>
            <span>Name</span>
            Mohamed Hassan
            </li>
          <li className='myprofile-item'>
            <span>Birthday</span>
            1/10/1995
          </li>
          <li className='myprofile-item'>
            <span>Address</span>
            El Mansoura
          </li>
          <li className='myprofile-item'>
            <span>Phone</span>
            0021060793802
          </li>
          <li className='myprofile-item'>
            <span>Email</span>
            mohamedemira2525@gmail.com
          </li>
          <li className='myprofile-item'>
            <span>Website</span>
            <span className='web'>www.google.com</span>
          </li>
        </ul>
      </div>

      <div className='someskills'>
        <h2 className='someskills-title'>Some<span>skills</span> </h2>
        <p className='someskills-details'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis<br/> esse cupiditate, omnis similique.
        </p>

        <div className='bar'>
          <div className='bar-item'>
            <p className='bar-title'>Bootsrtap</p>
            <p className='bar-percent'>100%</p>
            <div className='bar-percentage'>
              <span className='sp1'></span>
            </div>
          </div>

          <div className='bar-item'>
            <p className='bar-title'>Css3</p>
            <p className='bar-percent'>90%</p>
            <div className='bar-percentage'>
              <span className='sp2'></span>
            </div>
          </div>

          <div className='bar-item'>
            <p className='bar-title'>Photoshop</p>
            <p className='bar-percent'>80%</p>
            <div className='bar-percentage'>
              <span className='sp3'></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
