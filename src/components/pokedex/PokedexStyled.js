import styled from 'styled-components'

const Wrapper = styled.div`
  .pageContainer {
    @media (min-width: 768px) and (max-width: 1279px) {
      display: flex;
      align-items: flex-start;
    }
    @media (min-width: 1280px) {
      display: flex;
      align-items: center;
    }

    .sideBarContainer {
      @media (min-width: 768px) {
        margin-left: 45px;
      }
    }
  }
`
export default Wrapper
