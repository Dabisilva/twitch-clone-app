import React from 'react';
import { Text } from 'react-native';

import { 
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RightSide,
  WhiteCircle
 } from './styles';

const ChannelList: React.FC = () => {
  const ChannelItems = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar/>

        <Column>
          <Username>rocketseat_oficial</Username>
          <Info>36 news videos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle/>
      </RightSide>
    </ChannelContainer>
  )

  return (
    <List>
      <ChannelItems/>
      <ChannelItems/>
      <ChannelItems/>
      <ChannelItems/>
      <ChannelItems/>
      <ChannelItems/>
      <ChannelItems/>
      <ChannelItems/>
    </List>
  );
};

export default ChannelList;
