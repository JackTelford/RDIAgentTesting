import styled from "styled-components";

export const EmailContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 10%);
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 0;
  position: absolute;
  width: 600px;
  z-index: 1000;
`;

export const EmailBody = styled.div`
  flex: 1;
  overflow: hidden;
  padding: 10px;
  position: relative; /* Ensures the DropArea is positioned relative to the EmailBody */
`;

export const StyledInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 0;
  margin: 0;
  padding: 10px;
  width: 100%;
`;

export const StyledTextarea = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 0;
  margin: 0;
  padding: 10px;
  width: 100%;
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  border: none;
  border-radius: 0;
  color: #fff;
  cursor: pointer;
  padding: 10px 15px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ExitButton = styled.button`
  background-color: red;
  border: none;
  border-radius: 0;
  color: white;
  cursor: pointer;
  padding: 5px 10px;
  position: absolute;
  right: 10px;
  top: 10px;

  &:hover {
    background-color: darkred;
  }
`;

export const EmailHeader = styled.div`
  align-items: center;
  background-color: #f1f1f1;
  border-bottom: 1px solid #ccc;
  cursor: move;
  display: flex;
  justify-content: space-between;
  padding: 10px;

  h2 {
    margin: 0;
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

export const EmailIcon = styled.img`
  height: 40px;
  width: 40px;

  &:hover {
    opacity: 70%;
  }
`;

export const DropArea = styled.div<{ $isDragging: boolean }>`
  align-items: center;
  background-color: ${(props) =>
    props.$isDragging ? "#f0f8ff" : "transparent"};
  border: ${(props) => (props.$isDragging ? "2px dashed #007bff" : "none")};
  inset: 0;
  color: #007bff;
  display: ${(props) => (props.$isDragging ? "flex" : "none")};
  justify-content: center;
  padding: ${(props) => (props.$isDragging ? "10px" : "0")};
  position: absolute; /* Positioned absolutely within the EmailBody */
  transition:
    background-color 0.3s,
    border 0.3s;
  z-index: 1001; /* Ensure it is above other elements */

  &::after {
    content: ${(props) => (props.$isDragging ? "'Drop here'" : "''")};
    font-size: 1.5em;
  }
`;

export const Toolbar = styled.div`
  align-items: center;
  background-color: #f1f1f1;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 10px;

  .toolbar-button {
    background-color: #007bff;
    border: none;
    border-radius: 0;
    color: white;
    cursor: pointer;
    margin-left: 5px;
    padding: 5px 10px;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const AttachmentList = styled.div`
  margin-top: 15px;

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    background-color: #f1f1f1;
    border-radius: 4px;
    margin-bottom: 5px;
    padding: 5px;
  }
`;

export const UserAvatar = styled.img`
  border-radius: 50%;
  height: 40px;
  margin-right: 10px;
  width: 40px;
`;
