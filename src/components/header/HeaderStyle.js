import styled from "@emotion/styled";

/* Header Style */

export const HeaderWrapper = styled.div`
    background: #181818;
    display: flex;
    height: 75px;
    position: absolute;
    width: 100%;
    justify-content: space-between;
`;

export const Button = styled.button`
  padding: 0;
  background-color: #181818;
  font-size: 36px;
  border: 0;
  color: #f9f6ee;
  font-weight: bold;
  font-family: Lato;
  font-weight: 700;
  &:hover {
    color: #ff4301;
  }
  @media (max-width: 850px) {
    font-size: 18px;
  }
`;

export const SubImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 10px;
`;
