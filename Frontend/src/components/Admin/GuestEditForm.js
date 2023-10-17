
import React, { useCallback, useState } from 'react';
import "./Style/GuestEditForm.css"; // Add a CSS file for styling the modal

const GuestEditForm = ({ guestData, onClose, onSave, isOpen }) => {
 const [editedData, setEditedData] = useState(guestData);

 const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
 };

 const handleSave = useCallback(() => {
    onSave(editedData);
    onClose();
 }, [editedData, onSave, onClose]);

 return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Edit Guest Profile</h2>
        <form onSubmit={handleSave}>
         
            <input type="text" name="name" value={editedData.name} onChange={handleChange} />
            <input type="text" name="email" value={editedData.email} onChange={handleChange} />
            <select name="role" value={editedData.role} onChange={handleChange}>
              <option value="user">user</option>
              <option value="owner">owner</option>
              <option value="admin">admin</option>
            </select>
            <input type="text" name="mobileNo" value={editedData.mobileNo} onChange={handleChange} />
        <div>
        <button type="submit">Save</button>
        <button onClick={onClose}>Cancel</button>

        </div>
        </form>
      </div>

    </div>
 );
};

export default GuestEditForm;