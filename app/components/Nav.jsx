var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function() {
    return (
      <div>

        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="dropdown menu">
              <li className="menu-text">
                ReactTimerApp
              </li>
              <li>
                <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
              </li>
              <li>
                <Link to="/countdown" activeClassName="active-link">Countdown</Link>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">
                Created by: <a href="https://github.com/ErraticCreation" target="_blank">Tarah Nixon</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Nav;
