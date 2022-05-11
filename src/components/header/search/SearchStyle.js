import styled from "@emotion/styled";

/* Search Style */

export const SearchWrapper = styled.div`
    height: 75px
    justify-content: center;
    margin: auto 20px;
`;

export const Input = styled.input`
    height: 36px;
    min-width: 535px;
    margin: 0 auto;
    display: block;
    font-size: 24px;
    text-align: center;
    &:hover {
        color: #ff4301;
      }
    @media (max-width: 850px) {
        min-width: 150px;
        font-size: 10px;
      }
`
