import styled from "styled-components";

export const ChatContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 10%);
  display: flex;
  flex-direction: column;
  height: 600px;
  padding: 20px;
  position: absolute;
  width: 400px;
  z-index: 1000;
`;

export const ChatHeader = styled.div`
  align-items: center;
  background-color: #a2a2a2;
  border-bottom: 1px solid #000;
  cursor: move; /* Indicate that this part is draggable */
  display: flex;
  justify-content: space-between;
  padding: 10px;

  h2 {
    margin: 0;
  }
`;

export const BackButton = styled.button`
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const BackButtonContainer = styled.div`
  display: flex;
  height: 40px;
  justify-content: flex-end;
  padding: 5px;
`;

export const MessagesContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
  margin-bottom: 15px;
  overflow-y: auto;
  padding: 10px;
`;

export const Message = styled.div`
  background-color: #007bff;
  border-radius: 4px;
  color: white;
  margin-bottom: 10px;
  padding: 10px;

  &:nth-child(even) {
    background-color: #f1f1f1;
    color: black;
  }
`;

export const InputContainer = styled.div`
  display: flex;

  select,
  input {
    border: 1px solid #ccc;
    border-radius: 4px;
    flex: 1; /* Make the input take up remaining space */
    margin-right: 10px;
    padding: 10px;
  }

  button {
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    padding: 10px 15px;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const ExitButton = styled.button`
  background-color: red;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 5px 10px;
  position: absolute;
  right: 5px;
  top: 5px;

  &:hover {
    background-color: darkred;
  }
`;

export const IconContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;

  span {
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
  }
`;

export const UserListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserItem = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  padding: 10px;

  &:hover {
    background-color: #b7b5b5;
  }

  img {
    border-radius: 50%;
    height: 40px;
    margin-right: 10px;
    width: 40px;
  }

  .notification-container {
    align-items: center;
    display: flex;
    margin-top: 5px; /* Add some space between the message text and the notification */
  }

  .user-details {
    display: flex;
    flex-direction: column;
  }

  .user-name {
    align-items: center;
    display: flex;
  }

  .notification-dot {
    align-items: center;
    background-color: red;
    border-radius: 50%;
    color: white;
    display: flex;
    font-size: 12px;
    height: 20px;
    justify-content: center;
    margin-left: 5px;
    width: 20px;
  }

  small {
    color: #888;
    display: flex;
    flex-direction: column; /* Stack messages vertically */
    margin-top: 5px; /* Add space between the user name and the message text */
  }
`;
