import styled from "@emotion/styled";

/* Subreddit Style */

export const SubredditWrapper = styled.div`
    margin: 150px auto;
    justify-content: left;
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 850px) {
      margin: 100px auto 50px auto;
    }
`;

export const SubButton = styled.button`
  padding: 0;
  margin: 5px;
  background: #3d3d3d;
  font-size: 16px;
  border: 0;
  color: #f9f6ee;
  font-family: Lato;
  font-weight: 400;
  border: 1.5px solid #f9f6ee;
  border-radius: 10px;
  &:hover {
    border-color: #ff4301;
  }
`;

export const SubList = styled.li`
  padding: 15px;
  min-width: 240px;
  display: flex;
  text-align: left;
`;

export const UnorderList = styled.ul`
  list-style-type: none;
  max-width: 250px;
  padding: 0;
  @media (max-width: 850px) {
    display: none;
  }
`;

export const SubTitle  = styled.div`
  font-size: 38px;
  text-align: center;
  color: #f9f6ee;
  border-bottom: 3px solid #ff4301;
  @media (max-width: 850px) {
    width: 275px;
  }
`;

export const SubImage = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid #ff4301;
    margin: 10px;
`;

export const SubName = styled.div`
    text-align: center;
    padding-top: 18px;
`;

export const DropDown = styled.select`
  display: none;
  margin-top: 25px;
  padding: 10px;
  font-size: 16px;
  @media (max-width: 850px) {
    display: flex;

  }
`;
