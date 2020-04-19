import React, { Fragment } from 'react';
import NavbarFooter from '../../components/common/navbar_footer';
import SectionWrapper from '../../components/common/section_wrapper'
import Artists from '../../components/artists'

const ArtistScreen = () => {
 return(
   <Fragment>
     <SectionWrapper>
       <Artists />
       <NavbarFooter/>
     </SectionWrapper>
   </Fragment>
);
}
export default ArtistScreen;