import React, { Fragment, useState, useEffect } from 'react';
import { Heading, Columns, Image } from 'react-bulma-components';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ArtistsService from '../../../services/artists';

const DivVSpaced = styled.div`
 margin-top: 20px;
 margin-bottom: 20px;
`

const Artists = (props) => {

 return (
   <Fragment>
   		<Image src={props.photo}/>

      <DivVSpaced>
        <Heading size={6} className='has-text-white'>{props.name}</Heading>
      </DivVSpaced>
   </Fragment>
);
}
export default Artists;