import styled from "styled-components";

export const EmailForm = styled.form`
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 10%); /* Corrected opacity */
  display: flex;
  flex-direction: column;
  left: 0;
  margin: 0; /* Removed margin to avoid unexpected jumps */
  padding: 20px;
  position: absolute; /* Ensure absolute positioning for dragging */
  top: 0;
  width: 400px;

  input,
  textarea {
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 15px;
    padding: 10px;
  }

  .submit-button {
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    padding: 10px 15px;

    &:hover {
      background-color: #0056b3;
    }
  }

  .exit-button {
    background-color: red;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    padding: 5px 10px;
    position: absolute;
    right: 10px;
    top: 10px;

    &:hover {
      background-color: darkred;
    }
  }
`;

export const IconContainer = styled.div`
  align-items: center;
  display: flex;

  span {
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
  }
`;

export const EmailIcon = styled.img`
  cursor: pointer;
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
  color: ${(props) => (props.$isDragging ? "#007bff" : "inherit")};
  display: flex;
  justify-content: center;
  left: 50%;
  padding: ${(props) => (props.$isDragging ? "10px" : "0")};
  position: fixed;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  transition:
    background-color 0.3s,
    border 0.3s;
  z-index: 10;

  &::after {
    color: #007bff;
    content: ${(props) => (props.$isDragging ? "'Drop here'" : "''")};
    font-size: 1.5em;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
