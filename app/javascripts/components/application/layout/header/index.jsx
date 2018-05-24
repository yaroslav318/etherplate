import React, {
  Component
} from 'react'
import { Link } from 'react-router-dom'

import Address from '@/components/address'

import EtherplateWhiteLogoImage from '@/../images/logos/etherplate-logo--white--lg.png'
import AvatarPlaceholderImage from '@/../images/avatar-placeholder.png'

import './header.scss';

export default class Header extends Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {

          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target);

          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }

    // Links
    var $navbarLinks = Array.prototype.slice.call(document.querySelectorAll('.navbar-item a'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarLinks.forEach(function ($el) {
        $el.addEventListener('click', function () {
          $navbarLinks.forEach(function ($el) { $el.classList.remove('is-active'); });

          // Get the target from the "data-target" attribute of navbarBurger
          var target = $navbarBurgers[0].dataset.target;
          var $target = document.getElementById(target);

          // Toggle the class on both the "navbar-item" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }

  }

  render () {
    return (
      <nav id="navbar" className="navbar is-fixed-top is-dark">
        <div id="specialShadow" className="bd-special-shadow">
        </div>

        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item">
              <Link to="/">
                <img src={`/${EtherplateWhiteLogoImage}`} />
              </Link>
            </div>

            <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className="navbar-menu" id="navMenu">
            <div className="navbar-start">
              <div className="navbar-item">
                <Link to="/tokens/new" className="button is-info">
                  <span>Purchase Token</span>
                </Link>
              </div>
              <div className="navbar-item">
                <Link to='/tokens/all'>
                  <span>All Tokens</span>
                </Link>
              </div>
              <div className="navbar-item">
                <Link to='/tokens/purchased'>
                  <span>My Purchase History</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                &bull; Rinkeby Testnet
              </div>
              <div className="navbar-item">
                1.2 Ξ
              </div>
              <div className="navbar-item">
                <figure className="image is-32x32">
                  <img className="is-circular" src={`/${AvatarPlaceholderImage}`} />
                </figure>
                &nbsp;
                <Address address='0xaefbae9e2582318a3869a347067109679d5861fb' toggleFull={true} />
              </div>
            </div>
          </div>
        </div>

      </nav>
    )
  }
}
