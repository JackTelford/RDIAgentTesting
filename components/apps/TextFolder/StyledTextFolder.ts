// path: components/apps/TextFolder/StyledTextFolder.ts
import styled from "styled-components";

export const FolderContainer = styled.div`
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

export const FolderHeader = styled.div`
  align-items: center;
  background-color: #a2a2a2;
  border-bottom: 1px solid #000;
  cursor: move;
  display: flex;
  justify-content: space-between;
  padding: 10px;

  h2 {
    margin: 0;
  }
`;

export const ExitButton = styled.button`
  background-color: red;
  border: none;
  color: white;
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    background-color: darkred;
  }
`;

export const FileContainer = styled.div`
  flex: 1;
  overflow: hidden;
  padding: 10px;
  position: relative;
`;

export const FileContent = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
`;

export const IconContainer = styled.div`
  background-image: url("/System/Icons/48x48/documents.png");
  background-size: cover;
  cursor: pointer;
  display: inline-block;
  height: 32px;
  width: 32px;
`;

export const SmallIconContainer = styled.div`
  background-image: url("/System/Icons/48x48/folder.png");
  background-size: cover;
  cursor: pointer;
  display: inline-block;
  height: 80px;
  margin-right: 5px;
  width: 80px;
`;

export const RDIIconContainer = styled.div`
  background-image: url("/System/Icons/48x48/FolderWindows.png");
  background-size: cover;
  cursor: pointer;
  display: inline-block;
  height: 80px;
  margin-right: 5px;
  width: 80px;
`;

export const DesktopIconContainer = styled.div`
  background-image: url("/System/Icons/48x48/desktop.png");
  background-size: cover;
  cursor: pointer;
  display: inline-block;
  height: 80px;
  margin-right: 5px;
  width: 80px;
`;

export const PicturesIconContainer = styled.div`
  background-image: url("/System/Icons/48x48/pictures.png");
  background-size: cover;
  cursor: pointer;
  display: inline-block;
  height: 80px;
  margin-right: 5px;
  width: 80px;
`;

export const DownloadsIconContainer = styled.div`
  background-image: url("/System/Icons/48x48/downloads.png");
  background-size: cover;
  cursor: pointer;
  display: inline-block;
  height: 80px;
  margin-right: 5px;
  width: 80px;
`;

export const NewFolder = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 10%);
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 10px;
  width: 100%;
`;

export const NewFolderIconContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
`;

export const BackButton = styled.button`
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 10px 20px;

  &:hover {
    background-color: #0056b3;
  }
`;
