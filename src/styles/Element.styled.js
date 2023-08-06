import styled from 'styled-components';
//import { Link } from 'react-router-dom';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Header = styled.header`
  background-color: ${p => p.theme.colors.accent};
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  width: 100%;
`;

const HeaderContainer = styled.div`
  padding: 0 32px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    padding-left: 48px;
    padding-right: 48px;
  }
  @media screen and (min-width: 1200px) {
    padding-left: 48px;
    padding-right: 48px;
    max-width: 1200px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 32px;
  @media screen and (min-width: 768px) {
    padding-left: 48px;
    padding-right: 48px;
  }
  @media screen and (min-width: 1200px) {
    padding-left: 48px;
    padding-right: 48px;
    max-width: 1200px;
  }
`;

const SearchBox = styled.div`
  padding: 16px 32px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  //max-width: 300px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin-top: 8px;
`;

const Input = styled.input`
  display: inline-block;
  max-width: 300px;
  font: inherit;
  font-size: 16px;
  outline: none;
  border-radius: 8px;
  padding: 4px;
  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;
const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  background-color: inherit;
  width: 40px;
  height: 40px;
  border: 0;
  margin-right: 4px;
  margin-left: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    transform: scale(1.2);
  }
`;

const ContainerInfo = styled.div`
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const ContentBox = styled.div`
  position: relative;
  padding: 20px;
  flex-basis: calc((100% - 30px) / 2);
  border: solid 1px black;
  border-radius: 8px;
`;

const Text = styled.p`
  color: black;
  font-weight: bold;
  line-height: ${p => p.theme.lineHeight.card};

  :not(:last-of-type) {
    margin-bottom: 16px;
  }
  :last-of-type {
    margin-bottom: 26px;
  }
`;

const TextInfo = styled.span`
  font-weight: normal;
`;

const ButtonDelete = styled.button`
  position: absolute;
  top: 10px;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  width: 40px;
  height: 40px;
  border: 0;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    transform: scale(1.2);
  }
  @media screen and (min-width: 768px) {
    top: 14px;
    right: 16px;
  }
  @media screen and (min-width: 1200px) {
    top: 14px;
    right: 20px;
  }
`;

const List = styled.ul``;

const ListItem = styled.li`
  border-radius: ${p => p.theme.radii.card};
  height: 24px;
  margin-bottom: 8px;
  font-weight: bold;
  cursor: pointer;
`;

const Title = styled.h1`
  color: hsl(269, 35%, 53%);
  padding-top: 32px;
  padding-bottom: 32px;
  margin: auto;
  text-align: center;
`;
const Galery = styled.ul`
  padding-top: 30px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  @media screen and (min-width: 1200px) {
  }
`;

const GaleryItem = styled.li`
  margin-bottom: 20px;
  padding: 12px;
  border: solid 1px black;
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 40px) / 3);
    margin-bottom: 0;
  }
  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 60px) / 4);
  }
`;

const Button = styled.button`
  display: block;
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeight.bold};
  margin: 0 auto;
  background-color: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.button};
  border-color: transparent;
  cursor: pointer;
  box-shadow: ${p => p.theme.boxShadow.button};
  transition: color 250ms linear;
  transition: background-color 250ms linear;
  transition: transform 250ms linear;

  &:hover {
    transform: scale(1.1);
  }
  &.active {
    background-color: ${p => p.theme.colors.buttonActiveBg};
  }
`;

export {
  Button,
  ButtonIcon,
  ButtonDelete,
  ContainerInfo,
  Form,
  Galery,
  GaleryItem,
  Header,
  HeaderContainer,
  Title,
  Input,
  List,
  ListItem,
  LoaderContainer,
  Container,
  Text,
  TextInfo,
  SearchBox,
  ContentBox,
};
