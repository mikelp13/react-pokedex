import styled from 'styled-components'

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 40px;
  width: 100%;
  padding: 10px 20px;
  background: #0f95e4;
  border: 2px solid #0f95e4;
  border-radius: 3px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: #fff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 50%;
  }
  @media (min-width: 1280px) {
    width: 20%;
  }

  &:hover,
  &:focus {
    background: #025ebf;
    border-color: #025ebf;
  }
`
export default ButtonStyled
