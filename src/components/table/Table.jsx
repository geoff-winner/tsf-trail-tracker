import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './Table.css';

const Table = () => {
  const tableRowColor = trail => {
    return trail === 'Closed' ? 'bg-danger' : '';
  }
  const tableCellColor = trail => {
    return trail === 'Open' ? 'trail-status-good' : '';
  }
  const [value, setValue] = useState('');
  const trailData = useSelector(state => state.app.trailConditions);
  return (
      <>
        <div className="table-search">
          <input
            type="text"
            onChange={e => setValue(e.target.value)}
            value={value}
            className="table-search-input"
            placeholder="Search by trail name"
          />
        </div>
        <table className="table table-striped table-dark table-hover table-responsive-xl">
          <thead>
          <tr>
            <th scope="col">Trail #</th>
            <th scope="col">Name</th>
            <th scope="col">Difficulty</th>
            <th scope="col">Status</th>
            <th scope="col">Condition</th>
            <th scope="col">Last Visited Date</th>
          </tr>
          </thead>
          <tbody>
          {trailData.filter(
            trail => {
              if (!value) return true
              return trail.trailName.toLowerCase().includes(value.toLowerCase());
            }).map((trail, index) => {
            return (
              <tr key={index + 1} className={tableRowColor(trail.trailStatus)}>
                <th key={index + 2}>{trail.trailNumber}</th>
                <td key={index + 3}>{trail.trailName}</td>
                <td key={index + 4}>{trail.trailDifficulty}</td>
                <td key={index + 5} className={tableCellColor(trail.trailStatus)}>{trail.trailStatus}</td>
                <td key={index + 6}>{trail.trailCondition}</td>
                <td key={index + 7}>{trail.lastVisitedDate}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </>
  );
}

export default Table;
