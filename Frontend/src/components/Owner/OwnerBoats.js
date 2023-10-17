import axios from 'axios'
import React, { useEffect, useState } from 'react'
import backendURL from "../../AxiosApi";


export default function OwnerBoats() {
    const [boats, setBoats] = useState([]);
    const [image, setImage] = useState([]);


    const fetchBoats = async () => {
      try {
        const response = await axios.get(`${backendURL}/boat/ownerBoat`);
        console.log(response.data.boat)
        if(response.status === 200){
         setBoats(response.data.boat);
        }else if(response.status === 404){
          alert("No Boat Found");
        }
        
      } catch (error) {
        console.error('Error fetching boats:', error);
      }
    };
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${backendURL}/img/boatImage`);
        console.log(response.data)
        if(response.status === 200){
         setImage(response?.data?.files);
        }else if(response.status === 404){
          alert("No Image Found");
        }
        
      } catch (error) {
        console.error('Error fetching boats:', error);
      }
    };
    useEffect(()=>{
      fetchBoats();
      fetchImages();
    }, []);

    // const getImageUrl = (image) => {
    //   console.log(image);
    //   if (image && image.path) {
    //     // const imagePath = image.path.replace(/\\/g, '/');
    //     console.log(`http://localhost:5000/${image}`)
    //     return `http://localhost:5000/${image}`;
    //   }
    //   return '';
    // };

  return (
    <>
<div className='AllBoat'>
<h2>Boats Listed by Owner</h2>
      {boats && boats.length > 0 ? (
            boats.map((boat) => (
              <>
              <p>{boat._id}</p>
                <h3>{boat.name}</h3>
                <p>{boat.description}</p>
                </>

            ))
          ) : (
            <li>No boats found</li>
          )}
    </div>    
      {image && image.length > 0 ? (
            image.map((img) => (
              <>
              <img key={img._id} src={`http://localhost:5000/uploads/${img}`} alt="boat" style={{width: "300px"}}/>
                </>

            ))
          ) : (
            <li>No boats found</li>
          )}
    </>
)
}

