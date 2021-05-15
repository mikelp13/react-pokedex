import styled from 'styled-components'

const ListStyled = styled.ul`
    margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }

  .listItem {
    padding: 20px;
    background-color: #e9e9e9;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);

    @media screen and (min-width: 320px) and (max-width: 767px) {
      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }

    @media screen and (min-width: 768px) and (max-width: 1279px) {
      width: calc((100% - 30px) / 2);

      &:not(:nth-child(2n)) {
        margin-right: 30px;
      }

      &:not(:nth-last-child(-n + 2)) {
        margin-bottom: 30px;
      }
    }

    @media screen and (min-width: 1280px) {
      margin-right: 30px;
      margin-bottom: 30px;
      /* width: 370px; */
      width: calc((100% - 60px) / 3);

      &:nth-child(3n) {
        margin-right: 0;
      }

      &:nth-last-child(-n + 3) {
        margin-bottom: 0;
      }
    }

    &:hover,
    &:focus {
      background-color: transparent;
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12),
        0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
    }
  }
  .pokemonImage {
    margin: 0 auto 15px;
  }
  .pokemonName {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .typesList {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .typeItem {
    padding: 5px 15px;
    border-radius:3px;
  }
`
export default ListStyled
