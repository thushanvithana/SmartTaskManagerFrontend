import React from 'react';
import PropTypes from 'prop-types';

const TaskForm = ({ formData, onChange, onSubmit, editId }) => {
  return (
    <div className="card p-4 mb-4">
      <h2 className="h5 mb-3">{editId ? 'Update Task' : 'Create New Task'}</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={onChange}
            className="form-control"
            required
            placeholder="Enter task title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={onChange}
            className="form-control"
            rows="3"
            placeholder="Enter task description"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={onChange}
            className="form-select"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          {editId ? 'Update Task' : 'Create Task'}
        </button>
      </form>
    </div>
  );
};

TaskForm.propTypes = {
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  editId: PropTypes.string,
};

export default TaskForm;
