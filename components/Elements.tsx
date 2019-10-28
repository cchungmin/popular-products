import styled from 'styled-components';
import FlexBox from './FlexBox';

const Header = styled.h1`
  border-bottom: 1px solid #f1f1f1;
  margin-bottom: 0;
`

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #f1f1f1;
  padding: 2em 0;
`;

const Panel = styled.li`
  display: flex;
  margin-bottom: 1em;
`;

const Product = styled.a`
  display: flex;
  cursor: pointer;
  transition: .6s ease;
  &:hover {
    opacity: .6;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  margin-left: .5em;
`

const VoteCount = styled.h3`
  display: flex;
  align-items: center;
`;

const PruductImage = styled(FlexBox)`
  margin-right: 1em;
`;

const ProductTitle = styled.h2`
  color: #517fa6;
  font-size: 1em;
`;

const VoteCountCTA = styled.input`
  outline: none;
  transition: .6s ease;
  &:hover {
    opacity: .6;
  }
`;

const Submitted = styled(FlexBox)`
  color: #b6b6b6;
  display: flex;
  align-items: center;
  margin-top: .5em;
`;

export {
  Header,
  Container,
  Panel,
  Product,
  Avatar,
  VoteCount,
  PruductImage,
  ProductTitle,
  VoteCountCTA,
  Submitted,
}
