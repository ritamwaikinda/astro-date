import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Inbox.css';
import { AppContext } from '../../context/AppContext';

const Inbox = () => {
  const [inbox, setInbox] = useState([]);
  const [user, setUser] = useState('');
  const [chat, setChat] = useState([]);
  const [match, setMatch] = useState('');
  const { currentUser, recipient, setRecipient } = useContext(AppContext);

  useEffect(() => {
    axios
      .get(`/api/users/inbox`, { withCredentials: true })
      .then((response) => {
        setInbox(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // axios
    // .get(`/api/users/inbox/${inbox.id}`, { withCredentials: true })
    // .then((response) => {
    //   setChat(response.data);
    //   console.log(response.data);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }, []);

  return (
    <div>
      <div>
        <div className="background">
          <div className="titleInfo">YOUR MESSAGES</div>

          {inbox &&
            inbox.map((inbox) => {
              return (
                <div className="incoming">
                  <span className="avatar">{inbox.avatar}</span>

                  <div className="messageBox">
                    <Link
                      to={`/conversation/${inbox.conversation_id}`}
                      onClick={() => setRecipient(inbox.match_id)}
                    >
                      <div className="messageTitle">{inbox.firstName}</div>
                      <div className="text">{inbox.message}</div>
                    </Link>
                  </div>
                </div>
              );
            })}
          <div className="button">
            <span className="buttonText">Upgrade Membership</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
