import styled from 'styled-components';

const NotifWrapper = styled.div`
  position: absolute;
  top: 80px;
  right: 20px; 
  background-color: #F1392D;
  color: #fff;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius:5px;
    @media (min-width: 768px) {
        right: 40px;
        top: 100px; 
    }
`;
export default NotifWrapper;