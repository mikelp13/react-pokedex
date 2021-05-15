import styled from 'styled-components'

const BarStyled = styled.div`
  padding: 25px 15px;
  background-color: transparent;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 250px;
  }
  @media (min-width: 1280px) {
    width: 430px;
    padding: 50px 25px;
  }

  .pokemonImage {
    margin-bottom: 20px;
    @media (min-width: 1280px) {
      margin-bottom: 50px;
    }
  }
  .pokemonName {
    text-align: center;
    margin-bottom: 25px;
    font-size: 30px;
    font-weight: 700;
    @media (min-width: 1280px) {
      font-size: 40px;
    }
  }
  table {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    border-collapse: collapse;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }

  td {
    border: 1px solid #c9c9c9;
    padding: 4px;
    @media (min-width: 1280px) {
      padding: 10px;
      font-size: 20px;
    }
  }

  span {
    margin-right: 10px;
  }
`
export default BarStyled
