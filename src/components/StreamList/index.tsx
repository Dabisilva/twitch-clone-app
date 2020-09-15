import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import { 
  List,
  StreamContainer,
  Streamthumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  TagRow,
  TagView,
  TagText,
  StreamDescription,
  StreamCategory
 } from './styles';

const StreamList: React.FC = () => {
  const Streamitem = () => (
    <StreamContainer>
      <Streamthumbnail source={streamThumbnail}/>

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar/>
            <StreamUsername numberOfLines={1}>Dabi_Oficial</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Front-end com nextjs, chakra ui
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Science e tecnology
          </StreamCategory>
        </StreamRow>


        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          
          <TagView>
            <TagText>Web development</TagText>
          </TagView>

        </TagRow>
      </StreamColumn>
    </StreamContainer>
  )
  return (
    <List>
      <Streamitem/>
      <Streamitem/>
      <Streamitem/>
      <Streamitem/>
    </List>
  );
};

export default StreamList;
