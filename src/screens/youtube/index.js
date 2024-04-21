import React from 'react';
import AboutCarousel from '../about/aboutCarousel';
import Part1 from '../about/part1';
import YouTubeChannelPreviews from './youtube';


function Youtube() {

    return (
        <div>
            <AboutCarousel />
            <Part1 heading2={'Youtube Videos'} heading3={'Home/Youtube'} />
            <YouTubeChannelPreviews channelIds={['UCZpDdPU79jKSdwV3KJxULdA']}/>
        </div >
    );
}

export default Youtube;
