import TopSearch from './TopSearch';
import MainContent from './MainContent';
import Ads from './Ads';
import NextSeason from './NextSeason';
import LastEpisode from './LastEpisode';
import GreatSeries from './GreatSeries';
import LastMovies from './LastMovies';
import LegendarySeries from './LegendarySeries';
import Collections from './Collections';

import { useContext } from 'react';

export default function Content(){
    return( 
        <div className="flex-column w-full">
            <TopSearch/>
            <Ads/>
            <MainContent/>
            <NextSeason/>
            <LastEpisode/>
            <GreatSeries/>
            <div className='flex max-[640px]:flex-col'>
                <LastMovies/>
                <LegendarySeries/>
            </div>
            <Collections/>
        </div>
    );
}