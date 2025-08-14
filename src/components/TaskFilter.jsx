import React from 'react';
import PropTypes from 'prop-types';

const TaskFilter = ({ searchTerm, setSearchTerm, filterStatus, setFilterStatus, sortBy, setSortBy }) => {
  return (
    <div className="row mb-3">
      <div className="col-md-4 mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="col-md-4 mb-2">
        <select className="form-select" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="All">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className="col-md-4 mb-2">
        <select className="form-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="createdDesc">Newest First</option>
          <option value="createdAsc">Oldest First</option>
          <option value="status">Status (A-Z)</option>
        </select>
      </div>
    </div>
  );
};

TaskFilter.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  filterStatus: PropTypes.string.isRequired,
  setFilterStatus: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
  setSortBy: PropTypes.func.isRequired,
};

export default TaskFilter;
