import React, { useEffect, useState } from 'react';
import "./Style/GuestProfile.css";
import GuestEditForm from './GuestEditForm';
import { httpAPI } from '../../AxiosApi';


export default function GuestProfile() {
    const [data, setData] = useState([]);
    const [isEditFormOpen, setEditFormOpen] = useState(false);
    const [selectedGuest, setSelectedGuest] = useState(null);

    const fetchData = async () => {
        try {
          const response = await httpAPI.get(`/admin/guestProfile`);
          setData(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);

      const handleEditClick = (guest) => {
        console.log('Edit clicked');
        setSelectedGuest(guest);
        setEditFormOpen(true);
      };
    
      const handleEditFormClose = () => {
        setEditFormOpen(false);
        setSelectedGuest(null);
      };
    
      const handleSaveEdit = async (editedData) => {
        try {
            // Make a PUT request to update the guest data
            const response = await httpAPI.put(`/admin/updateGuest/${editedData._id}`, editedData);
            
            // Check the response and handle accordingly
            if (response.status === 200) {
              console.log('Guest updated successfully:', response.data.guest);
              const updatedData = data.map((item) => (item._id === editedData._id ? response.data.guest : item));
              setData(updatedData);              
            } else {
              console.error('Error updating guest:', response.data.message);
            }
      
            // Close the edit form
            handleEditFormClose();
          } catch (error) {
            console.error('Error updating guest:', error);
            // Handle the error (e.g., show an error message to the user)
          }
        
      };
    
  return (
   <>
   <div className="listedBOaTs">
        <div className="listedBoatCont">
          <div className="ListedBoatHead">
            <div className="ListBoatCont">Guest Name</div>
            <div className="ListBoatCont">Email</div>
            <div className="ListBoatCont">Role</div>
            <div className="ListBoatCont">Mobile No.</div>
            <div className="ListBoatCont">Created At</div>
            <div className="ListBoatCont">Edit</div>
          </div>
          {data.map((item) => (
  <div key={item._id} className="ListedBoatHead ListedBoatHeadC">
    <div className="ListBoatCont">{item.name}</div>
    <div className="ListBoatCont">{item.email.substring(0,18)}</div>
    <div className="ListBoatCont">{item.role}</div>
    <div className="ListBoatCont">{item.mobileNo}</div>
    <div className="ListBoatCont view">{item.createdAt.substring(0,10)}</div>
    <div className="ListBoatCont sTatusBtn">
      <button className="acceptBtn" onClick={() => handleEditClick(item)}>
        Edit
      </button>
    </div>
  </div>
))}
        </div>
        {isEditFormOpen && selectedGuest && (
          <GuestEditForm
          guestData={selectedGuest}
          onClose={handleEditFormClose}
          onSave={handleSaveEdit}
          isOpen={isEditFormOpen}
          />
        )}  
      </div>
    </>
  )
}
