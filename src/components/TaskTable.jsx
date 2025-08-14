import React from 'react';
import PropTypes from 'prop-types';

const TaskTable = ({ tasks, onEdit, onDelete }) => {
  return (
    <table className="table table-hover table-bordered">
      <thead className="table-light">
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Created Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.length === 0 ? (
          <tr>
            <td colSpan="5" className="text-center">No tasks found.</td>
          </tr>
        ) : (
          tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description || '-'}</td>
              <td>{task.status}</td>
              <td>{new Date(task.createdDate).toLocaleString()}</td>
              <td>
                <button className="btn btn-warning me-2" onClick={() => onEdit(task)}>Edit</button>
                <button className="btn btn-danger" onClick={() => onDelete(task.id)}>Delete</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

TaskTable.propTypes = {
  tasks: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskTable;
