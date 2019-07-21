import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Particles from 'react-particles-js';
import ParticlesJson from './config/particlesjs-config'
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="logs" width="24" height="24" src="/img/log.png"></img>
          <div className="left">
            <nav>PAYLOGROUND</nav>
            <nav>ABOUT ME</nav>
          </div>
        </header>

        <main className="main">
          <div className="content">
            <p className="this-is">THIS IS</p>
            <p className="j-q" style={{ transform: 'scale(0.7)' }}>J&Q</p>
            <p className="a-w" style={{ transform: 'rotate(-2deg) scale(0.8)' }}>A WEB PORTALS</p>
            <p className="w-t" style={{ transform: 'rotate(2deg) scale(0.8)' }}>WLCOME TO THIS SITE</p>
          </div>
          <section className="feature">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="card">
                    <div class="card-body">
                    FEATURE
  </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                    <div class="card-body">
                    FEATURE
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                    <div class="card-body">
                    FEATURE
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* <Particles params={ParticlesJson}/> */}
          </section>
        </main>
        <footer className="footer">
          <div>
            <p> github | 简书 | csdn  ❤️ me</p>
            <p> github </p>
            <p>@ 2019 J & Q</p>

          </div>
        </footer>
      </div>
    );
  }
}

export default App;
