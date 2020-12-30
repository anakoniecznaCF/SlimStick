import React from 'react';

import {
  DesktopOfferWrapper,
  ContentOfferWrapper,
  LeftSideOfferWrapper,
  RightSideOfferWrapper,
  OfferContent,
  OfferImageWrapper,
} from './DesktopOfferTable.styles.js'



const DesktopOfferTable = ({...props}) => {
  return(
    <DesktopOfferWrapper>
      <ContentOfferWrapper>
        <LeftSideOfferWrapper flex_end>
          <OfferContent column>
            <strong>2 małe opakowania</strong> <br />
            (oferta regularna)
          </OfferContent>
        </LeftSideOfferWrapper>
        <RightSideOfferWrapper flex_end>
          <OfferContent column full_width>
            <strong>1 DUŻE opakowanie</strong> <br />
            (oferta specjalna)
          </OfferContent>
        </RightSideOfferWrapper>
      </ContentOfferWrapper>
      <ContentOfferWrapper light>
        <LeftSideOfferWrapper flex_end>
          <OfferImageWrapper secondary_margin>
            <img src={ props.img1 } alt='sensual shape'></img>
          </OfferImageWrapper>
        </LeftSideOfferWrapper>
        <RightSideOfferWrapper light>
          <OfferImageWrapper>
            <img src={ props.img2 } alt='sensual shape'></img>
          </OfferImageWrapper>
        </RightSideOfferWrapper>
      </ContentOfferWrapper>
      <ContentOfferWrapper>
        <LeftSideOfferWrapper>
          <OfferContent>
            <strong>Ilość plastrów</strong>
          </OfferContent>
          <OfferContent>
            2 × 30 = <strong>60</strong>
          </OfferContent>
        </LeftSideOfferWrapper>
        <RightSideOfferWrapper>
          <OfferContent>
            <strong>60</strong>
          </OfferContent>
        </RightSideOfferWrapper>
      </ContentOfferWrapper>
      <ContentOfferWrapper light>
        <LeftSideOfferWrapper>
          <OfferContent>
            <strong>Wysyłka</strong>
          </OfferContent>
          <OfferContent>
            <strong>60 zł</strong>
          </OfferContent>
        </LeftSideOfferWrapper>
        <RightSideOfferWrapper light>
          <OfferContent>
          <strong>0</strong>
          </OfferContent>
        </RightSideOfferWrapper>
      </ContentOfferWrapper>
      <ContentOfferWrapper>
        <LeftSideOfferWrapper>
          <OfferContent>
            <strong>Cena</strong>
          </OfferContent>
          <OfferContent>
            634 zł + 60 zł = <strong>694 zł</strong>
          </OfferContent>
        </LeftSideOfferWrapper>
        <RightSideOfferWrapper>
          <OfferContent>
            <strong>234 zł</strong>
          </OfferContent>
        </RightSideOfferWrapper>
      </ContentOfferWrapper>
    </DesktopOfferWrapper>
  )
}

export default DesktopOfferTable;