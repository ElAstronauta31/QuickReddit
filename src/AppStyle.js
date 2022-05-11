import styled from "@emotion/styled";


/* Main Style */

export const Wrapper = styled.div`
    background: #212121;
    font-family: Lato;
`;


export const MainWrapper = styled.main`
    display: flex;
    @media (max-width: 850px) {
        padding-left: 35px;
        flex-direction: column;
      }
`;
