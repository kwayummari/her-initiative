import React, { useState, useEffect } from 'react';
import './YouTubeChannelPreviews.css'; // Import CSS file for styling

const YouTubeChannelPreviews = ({ channelIds }) => {
    const [videosData, setVideosData] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const requests = channelIds.map((channelId) =>
          fetch(
            `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBhauCQSNazmw9IxohDEhTxDvxZFEXns7c&channelId=${channelId}&part=snippet,id&order=date&maxResults=50`
          )
        );
        const responses = await Promise.all(requests);
        const data = await Promise.all(responses.map((res) => res.json()));
        setVideosData(data.map((item) => item.items));
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [channelIds]);
    

  return (
    <div className="video-container">
      {videosData &&
        videosData.map((videos, index) => (
          <div key={index} className="channel-container">
            <div className="video-grid">
              {videos &&
                videos.map((video) => (
                  <div key={video.id.videoId} className="video-item">
                    <h3>{video.snippet.title}</h3>
                    <iframe
                      width="320"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.id.videoId}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={video.snippet.title}
                    ></iframe>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default YouTubeChannelPreviews;
