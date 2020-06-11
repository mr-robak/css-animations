import React from "react";

export default function App() {
  return (
    <div>
      <div className="searchbar">
        <input placeholder="Search" />
        <div className="dropdown_positioner">
          <div className="dropdown">
            <ul>
              <li>
                <strong>re</strong>al life CSS transition
              </li>
              <li>
                <strong>Re</strong>act hooks
              </li>
              <li>
                pa<strong>re</strong>ntheses
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p>Use the searchbar above</p>
    </div>
  );
}
