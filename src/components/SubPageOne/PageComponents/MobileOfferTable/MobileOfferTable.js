import React from 'react';

import {
  MobileOfferWrapper,
  TableOfferWrapper,
  HeaderTableOffer,
  TableImage,
  TableContent
} from './MobileOfferTable.styles.js'


const MobileOfferTable = ({ ...props }) => {
  return(
    <MobileOfferWrapper>
      <TableOfferWrapper>
        <HeaderTableOffer>
          <strong>2 małe opakowania</strong> <br />
          (oferta regularna)
        </HeaderTableOffer>
        <TableImage>
          <img src={ props.img1 } alt='sensual shape'></img>
        </TableImage>
        <TableContent>
          <strong>Ilość plastrów</strong> <br />
          2 x 15 = 30
        </TableContent>
        <TableContent>
          <strong>Wysyłka</strong> <br />
          2 × 30 = 60 zł
        </TableContent>
        <TableContent>
          <strong>Cena</strong> <br />
          634 zł + 60 zł = 694 zł
        </TableContent>
      </TableOfferWrapper>

      <TableOfferWrapper dark>
        <HeaderTableOffer dark>
          <strong>1 DUŻE opakowanie</strong> <br />
          (oferta specjalna)
        </HeaderTableOffer>
        <TableImage>
          <img src={ props.img2 } alt='sensual shape'></img>
        </TableImage>

        <TableContent>
          <strong>Ilość plastrów</strong> <br />
          60
        </TableContent>
        <TableContent>
          <strong>Wysyłka</strong> <br />
          0 zł
        </TableContent>
        <TableContent>
          <strong>Cena</strong> <br />
          234 zł
        </TableContent>
      </TableOfferWrapper>
      
    </MobileOfferWrapper>
  )
}

export default MobileOfferTable;