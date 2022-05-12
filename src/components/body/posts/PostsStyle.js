import styled from "@emotion/styled";

export const PostWrapper = styled.div`
    min-width: 500px;
    max-width:45%;
    max-height: 750px;
    background: #3d3d3d;
    color: #f9f6ee;
    margin-bottom: 15px;
    margin-top: 15px;
    border: 1.5px solid #f9f6ee;
    border-radius: 20px;
    &:hover {
      border-color: #ff4301;
    }
    @media (max-width: 850px) {
      min-width: 85%;
      margin: 15px auto;
    }
`;

export const NoResultDiv = styled.div`
    margin: 150px auto;
    width: 35%;
    height: 500px;
    color: #f9f6ee;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 850px) {
      margin: 100px auto 50px auto;
    }
`;

export const Post = styled.div`
    width:55%;
    @media (max-width: 850px) {
      width:95%;
    }
`;

export const Image = styled.img`
    max-height: 400px;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    @media (max-width: 850px) {
      max-height: 400px;
      min-height: 300px;
      max-width: 85%;
    }
`;

export const H1 = styled.h1`
    font-size: 40px;
    padding-left: 15px;
    color: #f9f6ee;
    &:hover {
      color: #ff4301;
    }
    @media (max-width: 850px) {
      font-size: 28px;
    }
`;
export const H1long = styled.h1`
    font-size: 24px;
    padding-left: 15px;
    padding-top: 20px;
    color: #f9f6ee;
    &:hover {
      color: #ff4301;
    }
    @media (max-width: 850px) {
      font-size: 18px;
    }
`;
export const H2 = styled.h2`
    font-size: 18px;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1.5px solid black;
`;

export const Stats = styled.div`
  display: flex;
  justify-content: center;
  background: #181818;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const StatImg = styled.img`
  width: 25px;
  height: 25px;
  @media (max-width: 850px) {
    max-height: 15px;
    max-width: 15px;
  }
`;

export const IndStat = styled.div`
  padding: 0px 25px;
  margin: 5px 10px;
  min-width: 50px;
  text-align: left;
  font-size: 18px;
  display: flex;
  justify-content: space-around;
  @media (max-width: 850px) {
   font-size: 12px;
   padding: 0 5px;
  }
`;

export const IndPost = styled.div`
  margin-bottom: 20px;

`;

export const IndPara = styled.p`
  padding: 0 25px;
`;

export const Icon = styled.div`
  padding: 0 15px;
  align-items: right;
`;

export const PostHeader = styled.div`
    display: flex;
    margin-top: 80px;
    width:50%;
    @media (max-width: 850px) {
      width: 100%;
      margin: 0 auto;
      justify-content: center;
    }
`;

export const SubImage = styled.img`
    width: 95px;
    height: 95px;
    border-radius: 50%;
    border: 2px solid #ff4301;
    @media (max-width: 850px) {
      width: 75px;
      height: 75px;
    }
`;

export const Divider = styled.div`
    font-size: 24px;
`;

export const ATag = styled.a`
  text-decoration: none;
  &:visted {
    text-decoration: none;
  }
`;
