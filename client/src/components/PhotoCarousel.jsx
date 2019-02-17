import React from 'react';
import styled from 'styled-components';

const PhotoCarousel = props => (
  <div>
    <div>
      <CarouselDiv style={{
        backgroundImage: `url(${props.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      />
    </div>
    <div>
      <CaptionWrapper>
        <Caption>{props.caption}</Caption>
        <Date>{props.date}</Date>
      </CaptionWrapper>
      <div>
        <Username>{props.username}</Username>
      </div>
    </div>
  </div>
);

const CarouselDiv = styled.div`
  display: flex;
  justify-item: center;
  margin: auto;
  position: relative;
  height: 590px;
  width: 590px;
  transition: 'transform ease-out 0.45s';
`;

const Caption = styled.span`
  color: #fff;
  height: auto;
  position: relative;
  margin: 10px 5px 0 0;
  font-size: 1em;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  font-weight: 700;
`;

const Username = styled.div`
  display: block;
  font-size: .85em;
  font-weight: 200;
  height: auto;
  position: relative;
  margin: 0;
  color: #fff;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
`;

const Date = styled.span`
  display: in-line block;
  font-weight: 200;
  font-size: 1em;
  height: auto;
  position: relative;
  margin-top: 10px;
  color: #fff;
  // font-family: 'Istok Web', sans-serif;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
`;

const CaptionWrapper = styled.div`
  margin: 5px 0;
`;

export default PhotoCarousel;
