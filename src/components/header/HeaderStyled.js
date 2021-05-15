import styled from 'styled-components';

const HeaderStyled = styled.header`
  position: fixed;
  width: 100%;
  background-color: #ffffff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 1000;
  .header {
    text-align: center;
    padding: 15px 0;
  }
  .headerLogo {
    font-size: 25px;
    font-weight: 700;

  }
`;

export default HeaderStyled;