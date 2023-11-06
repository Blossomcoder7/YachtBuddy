import React, { useContext, useEffect, useState } from "react";
import "./Style/Message.css";
import { UserContext } from '../../utils/UserContext';
import { httpAPI } from "../../AxiosApi";


export default function Message() {
  const [data, setData] = useState([]);
  const [text, setText] = useState();
  const [receiver, setReceiver] = useState();
  const [sender, setSender] = useState();
  const {user } = useContext(UserContext);

  console.log(user.id)
  const fetchData = async () => {
    try {
      const response = await httpAPI.get(
        `/admin/guestProfile`
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleReceiver = (receiver) => {
    console.log("Receiver Id", receiver._id);
    setReceiver(receiver._id); // Update the receiver state here
    setSender(user.id); // Update the receiver state here
    handelConversation(receiver._id, user.id); // Pass the correct receiver ID
  };

  const handelConversation = async (receiverId, senderId) => {
    try {
      const response = await httpAPI.post(
        `/chat/newConversation`,
        {
         receiver: receiverId, 
         sender: senderId,
        }
      );
      if(response.status === 200)
      {
      console.log(response.data);
      
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setText((prevData) => ({ ...prevData, [name]: value }));
  //   console.log(value);
  // };

  const handelSend = async () => {
    try {
      // setSender(user.id);
      const response = await httpAPI.post(`/chat/messages`, {
        text,
        receiver,
      });
      console.log({ text, receiver });
      if (response.status === 200) {
        console.log("Messase send successfully:", response.data);
      } else {
        console.error("Message not sent", response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="messageCenter">
        <div className="messageCenterL">
          {data.map((item) => (
            <div
              className="mesageSideBar"
              key={item._id}
              onClick={() => handleReceiver(item)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10Z"
                />
              </svg>
              <span>
                <h4>{item.name}</h4>
                {/* <p>user message</p> */}
              </span>
            </div>
          ))}
        </div>
        <div className="messageCenterR">
          <div className="messageNav">
            <div className="messageNavL">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10Z"
                />
              </svg>
              <span>
                <h3>User Name</h3>
              </span>
            </div>
          </div>
          <div className="messageChat">
            <div className="receiver">
              <p>Here is messasge Received</p>
            </div>
            <div className="sender">
              <p>Here is message Send</p>
            </div>
          </div>
          <div className="messageSender">
            <input
              type="text"
              placeholder="Enter Message Here"
              name="message"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            ></input>
            <button onClick={handelSend}>Send</button>
          </div>
        </div>
      </div>
    </>
  );
}
