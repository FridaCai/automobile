import React from 'react';
function Nav() {
  return (
    <div className="App">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link" href="#">赫尔姆兹</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">膨胀腔</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">1/4波长管</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">怠速噪声</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
