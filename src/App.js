import React from 'react';
import ellipse from './images/ellipse.svg'
import superhero from './images/superhero.svg'
import GitHubButton from 'react-github-btn'
import Menu from './components/Menu';

const App = () => {
  return (
    <div>
      <div className="w-100 vh-100">
        <Menu/>
        <img alt="ellipse" src={ellipse} className="ellipse"/>
        <div className="container d-flex justify-content-between mt-5">
          <div className="pt-5 pl-5">
            <div className="font-weight-bold primary pt-5">Hello, I'm</div>
            <div className="pt-5">
              <div className="font-weight-bold primary font-size-100">MOJILA</div>
              <div className="font-weight-bold primary font-size-100 title-shadow">MOJILA</div>
            </div>
            <div className="text-uppercase primary font-weight-bold description">happy working as frontend developer</div>
            <div className="pt-2">
              <GitHubButton href="https://github.com/mojila" data-size="large" data-show-count="true" aria-label="Follow @mojila on GitHub">Follow @mojila</GitHubButton>
            </div>
          </div>
          <div className="rotate">
            <img className="superhero-animation" height="440px" src={superhero} alt="superhero"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
