import React from 'react';
import '../styles/board.css';
import PropTypes from 'prop-types';

import Cell from './Cell.js';


function Board (props) {
  return (
    <div className="board">
      {bulidLabels(props.labels)}
      <div className="grid">
        {bulidGrid(props.data)}
      </div>
      <div className="win" style={
          {visibility: props.won ? 'visible' : 'hidden',
           opacity: props.won ? 1 : 0,
           transition: props.won ? 'visibility 0s, opacity 0.2s linear' : ''}
      }>
        <p>You won! Brilliant!</p>
        <button type="button" className="btn" onClick={()=>props.newGame()}>New Game</button>
      </div>
    </div>
  );

  function bulidGrid(data) {
    return data.map((row, i) => {
      return <div className="row" key={`row_${i}`}>{row.map((col, j) => {
        return <div className="col" key={`col_${j}`}>
          <Cell
            handleCellClick={(event) => {props.handleCellClick(i, j, event)}}
            type={(props.showingSolution ? col.correct : col.user)}/>
        </div>
      })}</div>
    });
  }

  function bulidLabels(labels) {
    return labels.map((label, i) => {
      if (i === 0) {
        return <div className="labelH" key="labelH">{label.map((element, j) => {
          return <div className="labElement" key={`element_${j}`}>{element}</div>
        })}</div>
      }
      return <div className="labelV" key="labelV">{label.map((element, j) => {
        return <div className="labElement" key={`element_${j}`}>{element}</div>
      })}</div>
    });
  }

}

Board.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  showingSolution: PropTypes.bool.isRequired,
  won: PropTypes.bool.isRequired,
  handleCellClick: PropTypes.func.isRequired,
  newGame: PropTypes.func.isRequired,
}

export default Board;