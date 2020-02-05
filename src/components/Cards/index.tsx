import React from 'react';
import Card from 'components/Card';
import { Wrapper } from './styles';

const Cards = () => (
  <Wrapper>
    <Card title="Green House" variant="pink" />
    <Card title="Cyber Punk" variant="green" />
    <Card title="Easy Crypto" variant="purple" />
    <Card title="Travel App" variant="blue" />
    <Card title="Landing Page" variant="orange" />
    <Card title="7 +" noTitle variant="blackLight" />
  </Wrapper>
);

export default Cards;
