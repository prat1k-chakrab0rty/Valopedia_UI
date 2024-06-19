import React from 'react'
import { Link } from "react-router-dom";
import AgentsImg from "../imgs/agents.jpg";
import MapsImg from "../imgs/maps.jpeg";
import WeaponsImg from "../imgs/weapons.jpg";

const Home = () => {
  return (
    <div className='container'>
      <div className="section">
        <Link className='link' to="/maps">
          <div className="section-container">
            <div className="sec-img">
              <img src={MapsImg} alt="" />
            </div>
            <div className="sec-details">
              <h2>Maps</h2>
              <p className='desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, enim. Nihil molestiae beatae ducimus iste inventore facilis atque quo? Debitis voluptas error et quasi, amet ratione fugiat cumque numquam doloremque!
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="section">
        <Link className='link' to="/agents">
          <div className="section-container">
            <div className="sec-img">
              <img src={AgentsImg} alt="" />
            </div>
            <div className="sec-details">
              <h2>Agents</h2>
              <p className='desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, enim. Nihil molestiae beatae ducimus iste inventore facilis atque quo? Debitis voluptas error et quasi, amet ratione fugiat cumque numquam doloremque!
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="section">
        <Link className='link' to="/weapons">
          <div className="section-container">
            <div className="sec-img">
              <img src={WeaponsImg} alt="" />
            </div>
            <div className="sec-details">
              <h2>Weapons</h2>
              <p className='desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, enim. Nihil molestiae beatae ducimus iste inventore facilis atque quo? Debitis voluptas error et quasi, amet ratione fugiat cumque numquam doloremque!
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home