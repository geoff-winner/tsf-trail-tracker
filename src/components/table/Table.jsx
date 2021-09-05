import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as appActions from '../../modules/app/actions/index';

import './Table.css';

const Table = () => {
  const dispatch = useDispatch();
  const tableRowColor = (trail) => {
    return trail === 'Closed' ? 'bg-danger table-cell' : 'table-cell';
  };
  const tableCellColor = (trail) => {
    return trail === 'Open' ? 'trail-status-good table-cell' : 'table-cell';
  };
  const userIsLoggedIn = useSelector((state) => state.user.userIsLoggedIn);
  const trailData = useSelector((state) => state.app.trailConditions);
  const [value, setValue] = useState('');
  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
  });
  const [trailNumber, setTrailNumber] = useState('');
  const [trailName, setTrailName] = useState('');
  const [trailDifficulty, setTrailDifficulty] = useState('');
  const [trailStatus, setTrailStatus] = useState('');
  const [trailCondition, setTrailCondition] = useState('');
  const [lastVisitedDate, setLastVisitedDate] = useState('');

  const onEdit = ({
    id,
    editedTrailNumber,
    editedTrailName,
    editedTrailDifficulty,
    editedTrailStatus,
    editedTrailCondition,
    editedLastVisitedDate,
  }) => {
    setInEditMode({
      status: true,
      rowKey: id,
    });
    setTrailNumber(editedTrailNumber);
    setTrailName(editedTrailName);
    setTrailDifficulty(editedTrailDifficulty);
    setTrailStatus(editedTrailStatus);
    setTrailCondition(editedTrailCondition);
    setLastVisitedDate(editedLastVisitedDate);
  };
  const updateTrailValue = (index) => {
    dispatch(
      appActions.updateTrailConditions(
        index,
        trailNumber,
        trailName,
        trailDifficulty,
        trailStatus,
        trailCondition,
        lastVisitedDate,
      ),
    );
    setInEditMode({
      status: false,
      rowKey: null,
    });
  };
  return (
    <>
      <div className="table-search">
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className="table-search-input"
          placeholder="Search by trail name"
        />
      </div>
      <table className="table table-striped table-dark table-hover table-responsive-xl">
        <thead>
          <tr>
            <th scope="col" className="table-cell">
              Trail #
            </th>
            <th scope="col" className="table-cell">
              Name
            </th>
            <th scope="col" className="table-cell">
              Difficulty
            </th>
            <th scope="col" className="table-cell">
              Status
            </th>
            <th scope="col" className="table-cell">
              Condition
            </th>
            <th scope="col" className="table-cell">
              Last Visited Date
            </th>
          </tr>
        </thead>
        <tbody>
          {trailData
            .filter((trail) => {
              if (!value) return true;
              return trail.trailName
                .toLowerCase()
                .includes(value.toLowerCase());
            })
            .map((trail, index) => {
              return inEditMode.status && inEditMode.rowKey === trail.id ? (
                <tr key={trail.id}>
                  <td className="table-cell">
                    <input
                      value={trailNumber}
                      onChange={(event) => {
                        setTrailNumber(event.target.value);
                      }}
                    />
                  </td>
                  <td className="table-cell">
                    <input
                      value={trailName}
                      onChange={(event) => {
                        setTrailName(event.target.value);
                      }}
                    />
                  </td>
                  <td className="table-cell">
                    <input
                      value={trailDifficulty}
                      onChange={(event) => {
                        setTrailDifficulty(event.target.value);
                      }}
                    />
                  </td>
                  <td className="table-cell">
                    <input
                      value={trailStatus}
                      onChange={(event) => {
                        setTrailStatus(event.target.value);
                      }}
                    />
                  </td>
                  <td className="table-cell">
                    <input
                      value={trailCondition}
                      onChange={(event) => {
                        setTrailCondition(event.target.value);
                      }}
                    />
                  </td>
                  <td className="table-cell">
                    <input
                      value={lastVisitedDate}
                      onChange={(event) => {
                        setLastVisitedDate(event.target.value);
                      }}
                    />
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => updateTrailValue(trail.id)}
                    >
                      Save
                    </button>
                  </td>
                </tr>
              ) : (
                <tr key={trail.id} className={tableRowColor(trail.trailStatus)}>
                  <td key={index + 2} className="table-cell">
                    {trail.trailNumber}
                  </td>
                  <td key={index + 3} className="table-cell">
                    {trail.trailName}
                  </td>
                  <td key={index + 4} className="table-cell">
                    {trail.trailDifficulty}
                  </td>
                  <td
                    key={index + 5}
                    className={tableCellColor(trail.trailStatus)}
                  >
                    {trail.trailStatus}
                  </td>
                  <td key={index + 6} className="table-cell">
                    {trail.trailCondition}
                  </td>
                  <td key={index + 7} className="table-cell">
                    {trail.lastVisitedDate}
                  </td>
                  {userIsLoggedIn && (
                    <td>
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() =>
                          onEdit({
                            id: trail.id,
                            editedTrailNumber: trail.trailNumber,
                            editedTrailName: trail.trailName,
                            editedTrailDifficulty: trail.trailDifficulty,
                            editedTrailStatus: trail.trailStatus,
                            editedTrailCondition: trail.trailCondition,
                            editedLastVisitedDate: trail.lastVisitedDate,
                          })
                        }
                      >
                        Edit
                      </button>
                    </td>
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
