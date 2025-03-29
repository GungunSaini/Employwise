import { useEffect, useState } from "react";
import axios from "axios";
import "./List.css";

const List = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const fetchUsers = async (pageNumber) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${pageNumber}`);
      setUsers(response.data.data);
    } catch (err) {
      setError("Failed to load users.");
    } finally {
      setLoading(false);
    }
  };

  // Handle Delete
  const handleDelete = (id) => {
    const filteredUsers = users.filter(user => user.id !== id);
    setUsers(filteredUsers);
  };

  // Handle Edit
  const handleEdit = (user) => {
    setEditingUser(user.id);
    setUpdatedName(user.first_name);
  };

  // Handle Save
  const handleSave = (id) => {
    const updatedUsers = users.map(user =>
      user.id === id ? { ...user, first_name: updatedName } : user
    );
    setUsers(updatedUsers);
    setEditingUser(null);
  };

  return (
    <div className="list">
      <h2>Users List</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar} alt={user.first_name} width="50" className="user-image" />
            {editingUser === user.id ? (
              <>
                <input
                  type="text"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                />
                <button onClick={() => handleSave(user.id)} className="save-button">Save</button>
              </>
            ) : (
              <>
                {user.first_name} {user.last_name}<br/>
                {user.email}<br/>
                <button onClick={() => handleEdit(user)} className="edit-button">Edit</button>
                <button onClick={() => handleDelete(user.id)} className="delete-button">Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>

      <div>
        <button className="prev-button"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))} 
          disabled={page === 1}
        >
          Previous
        </button>
        <span> Page {page} </span>
        <button className="next-button"
          onClick={() => setPage((prev) => prev + 1)} 
          disabled={page === 2} // The API has only 2 pages
        >
          Next
        </button>
      </div>

    </div>
  );
};

export default List;
