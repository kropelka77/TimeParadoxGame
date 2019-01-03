import React from 'react';
import PropTypes from 'prop-types';

function Cell (props) {
  return (
    <div
      className="cell"
      onMouseUp={(event)=>props.handleCellClick(event)}
      onContextMenu={(e)=>e.preventDefault()}
      tabIndex={0}>

      {drawCell(props.type)}
    </div>

  );

  function drawCell(type) {
    if (type === "doctor") {
      return <img src="images/doctor.svg" alt="TheDoctor" width="35" height="35" tabIndex={0}/>
    } else if (type === "tardis") {
      return <img src="images/tardis.svg" alt="Tardis" width="37" height="37" tabIndex={0}/>
    } else if (type === "empty") {
      return ""
    } else if (type === "x") {
      return <img src="images/cross.svg" alt="cross" width="30" height="30" tabIndex={0}/>
    }
  }
}

Cell.propTypes = {
  handleCellClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}

export default Cell;