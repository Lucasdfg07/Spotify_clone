import React, { Fragment, useState, useEffect } from 'react';
import { Heading, Columns, Image } from 'react-bulma-components';
import styled from 'styled-components';
import AlbumsService from '../../services/albums';
import { useParams } from 'react-router-dom';
import Musics from '../musics';
import Favorite from '../common/favorite';

const DivVSpaced = styled.div`
 margin-top: 20px;
 margin-bottom: 20px;
`

const Albums = () => {
  let { id } = useParams();
  const [album, setAlbum] = useState([]);

  async function fetchAlbum() {
    const response = await AlbumsService.show(id);
    setAlbum(response.data);
  }

  useEffect(() => {
    fetchAlbum();
  }, []);

 return (
   <Fragment>
    <Columns className='is-vcentered is-mobile is-centered'>
     <Columns.Column desktop={{size: 3}} className='has-text-centered'>
       <Image src={album.cover_url}/>
       <DivVSpaced>
          <Columns>
             <Columns.Column desktop={{size: 10}}>
              <Heading size={5} className='has-text-white'>{album.title}</Heading>
              <Heading size={5} subtitle className='has-text-white'>{album.artist_name}</Heading>
             </Columns.Column>

            <Columns.Column desktop={{size: 2}}>
              <Favorite id={album.id} kind='albums' favored={album.favorite}/>
            </Columns.Column>
          </Columns>
       </DivVSpaced>
     </Columns.Column>
    </Columns>
    <Musics songs={album.songs || []} />
   </Fragment>
 );
}
export default Albums;