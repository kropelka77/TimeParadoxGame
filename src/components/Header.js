import React from 'react';
import '../styles/header.css';
import PropTypes from 'prop-types';
import { trackEvent, initAnalytics } from '../utils/analytics'

function Header (props) {
  let rules, check;
  if (props.showingRules) {
    rules = (<div className="rules">
      <img src="images/doctor.svg" alt="TheDoctor" width="45" height="45" />
      <img src="images/tardis.svg" alt="Tardis" width="50" height="50" />
      <p>Your job is to place Doctors next to their Tardis. Keep in mind that:</p>
      <ul>
        <li>Each Doctor has exactly one Tardis (so the number of both is equal).</li>
        <li>The number of Doctors in a row or a column is indicated by the respective numbers
          around the edge.</li>
        <li>The Doctor can only stand horizontally or vertically adjacent to his Tardis
          (not diagonally).</li>
        <li>It's ok for Tardis to appear next to each other, but Doctor seeing himself might cause
            a time paradox - never place them vertically, horizontally, or diagonally adjacent.</li>
        <li>The Tardis can be found next to more than one Doctor, but it still connects to
          only one of them.</li>
        <li>To place Doctor right-click or double-click on an empty square. If you're sure that
          a square cannot contain Doctor, click once to mark it with X.</li>
        <li>You can check your progress or see the solution in the menu bar.</li>
      </ul>
      <p>Good luck &amp; Allons-y!</p>
    </div>);
  }

  if (props.showingCheck) {
    props.isCorrect ? check = <div className="check">Everything is correct!</div> :
                      check = <div className="check">Oh, there's something wrong!</div>
  }

  return (
    <header>
      <h1>Time Paradox Puzzle</h1>
      <nav>
        <ul>
          <li className="nav" onClick={()=>{
            initAnalytics()
            trackEvent({
              category: 'Nav clicked',
              action: 'Click to check',
              label: 'check'
            })
            props.checkCorrect();
            props.showContent("showingCheck", true);
            setTimeout(()=>props.showContent("showingCheck", false), 1500);
            }}>Check</li>
          <li
            className="nav"
            onClick={()=>props.showContent("showingSolution")}
          >Solution</li>
          <li
            className="nav"
            onClick={()=>{confirm("Are you sure you want to start a new game?") ? props.newGame() : console.log('cancel')}
            }
          >New</li>
          <li
            className="nav"
            tabIndex={0}
            onClick={()=>props.showContent("showingRules")}
            onBlur={()=>props.showContent("showingRules", false)}
          >Rules</li>
        </ul>
        {rules}
        {check}
      </nav>
    </header>
  );
}

Header.propTypes = {
  showingRules: PropTypes.bool.isRequired,
  showingCheck: PropTypes.bool.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  checkCorrect: PropTypes.func.isRequired,
  showContent: PropTypes.func.isRequired,
  newGame: PropTypes.func.isRequired,
}

export default Header;