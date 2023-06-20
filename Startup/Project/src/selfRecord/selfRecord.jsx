import React from 'react';
import {Link} from 'react-router-dom';

export function SelfRecord() {
  return (
    <main className='container-fluid text-center'>
      <div>
        <h1>
            Good Job King!
        </h1>
        <h3>
            How was your workout?
        </h3>
        <form method="get" action="record.html" id="RYW">
            <label for="textarea"></label>
            <textarea id="textarea" name="varTextarea"></textarea>
          <h3>
            Difficulty level
          </h3>
          <div className="range-slider">
            <input className="range-slider__range" type="range" value="250" min="0" max="10" step="1"/>
            <span className="range-slider__value">0</span>
          </div>
          <Link className="nav-link" to="/record">record</Link>
        </form>
    </div>
    </main>
  );
}