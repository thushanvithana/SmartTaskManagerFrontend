import { useState, useEffect } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from './api/taskService';
import TaskForm from './components/TaskForm.jsx';
import TaskFilter from './components/TaskFilter.jsx';
import TaskTable from './components/TaskTable.jsx';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '', status: 'Pending' });
  const [editId, setEditId] = useState(null);
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('createdDesc');
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    loadTasks();
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  const loadTasks = async () => {
    try {
      const res = await fetchTasks();
      setTasks(res.data);
      setError('');
    } catch (err) {
      setError(err.response?.statusText || 'Failed to load tasks.');
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...formData, status: formData.status.toLowerCase() };
      if (editId) await updateTask(editId, payload);
      else await createTask(payload);
      setFormData({ title: '', description: '', status: 'Pending' });
      setEditId(null);
      loadTasks();
    } catch (err) {
      setError(err.response?.data || 'Error saving task.');
    }
  };

  const handleEdit = (task) => setFormData({ title: task.title, description: task.description, status: task.status }) || setEditId(task.id);

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      loadTasks();
    } catch {
      setError('Error deleting task.');
    }
  };

  let displayedTasks = tasks
    .filter((t) => filterStatus === 'All' || t.status.toLowerCase() === filterStatus.toLowerCase())
    .filter((t) => !searchTerm || t.title.toLowerCase().includes(searchTerm.toLowerCase()) || t.description.toLowerCase().includes(searchTerm.toLowerCase()));

  displayedTasks.sort((a, b) => {
    if (sortBy === 'createdDesc') return new Date(b.createdDate) - new Date(a.createdDate);
    if (sortBy === 'createdAsc') return new Date(a.createdDate) - new Date(b.createdDate);
    if (sortBy === 'status') return a.status.localeCompare(b.status);
    return 0;
  });

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Smart Task Manager</h1>
        <button className="btn btn-secondary" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <TaskForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} editId={editId} />
      <TaskFilter
        searchTerm={searchTerm} setSearchTerm={setSearchTerm}
        filterStatus={filterStatus} setFilterStatus={setFilterStatus}
        sortBy={sortBy} setSortBy={setSortBy}
      />
      <TaskTable tasks={displayedTasks} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}
