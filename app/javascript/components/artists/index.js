import React, { Fragment, useState, useEffect } from 'react';
import { Heading, Columns, Image } from 'react-bulma-components';
import styled from 'styled-components';
import ArtistsService from '../../services/artists';
import { useParams } from 'react-router-dom';
import Album from '../common/album';
import Musics from '../musics';
import Favorite from '../common/favorite';

const DivVSpaced = styled.div`
 margin-top: 20px;
 margin-bottom: 20px;
`

const Artists = () => {
 let { id } = useParams();
 const [artist, setArtist] = useState([]);
 const [albums, setAlbums] = useState([]);
 const [favorite, setFavorite] = useState([]);

 async function fetchArtist() {
   const response = await ArtistsService.show(id);
   setArtist(response.data);
   setAlbums(response.data['albums']);
   setFavorite(response.data['favorite']);
 }
  
  useEffect(() => {
   fetchArtist();
  }, []);

  const albums_components = albums.map((album, key) =>
   <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
    <Album artist_name={album.artist_name} title={album.title} cover_url={album.cover_url} key={key} id={album.id}/>
   </Columns.Column>
  );

 return (
   <Fragment>
   	<Columns className='is-vcentered is-mobile is-centered'>
      <Columns.Column desktop={{size: 3}} className='has-text-centered'>
       <Image src={artist.photo_url} />
       <DivVSpaced>
          <Columns>
            <Columns.Column desktop={{size: 10}}>
             <Heading size={5} className='has-text-white'>
              {artist.name}
             </Heading>
            </Columns.Column>

            <Columns.Column desktop={{size: 2}}>
              <Favorite id={artist.id} kind='artists' favored={favorite}/>
            </Columns.Column>
          </Columns>
       </DivVSpaced>
      </Columns.Column>
     </Columns>

    <Columns className='is-vcentered is-mobile is-centered'>
       <DivVSpaced>
         <Heading size={5} subtitle className='has-text-white'>Álbums</Heading>
       </DivVSpaced>
    </Columns>

    <Columns>
      {albums_components}
    </Columns>

    <Columns className='is-vcentered is-mobile is-centered'>
       <DivVSpaced>
         <Heading size={5} subtitle className='has-text-white'>Músicas</Heading>
       </DivVSpaced>
    </Columns>
    
    <Musics songs={artist.songs || []} />
   </Fragment>
 );
}
export default Artists;