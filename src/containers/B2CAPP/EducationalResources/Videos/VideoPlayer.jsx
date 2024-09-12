import React, { useState } from 'react';
//https://drive.google.com/file/d/1k1qCyn9jtwajrOSJ18_sTx0sKxn-G-kV/view?usp=drive_link
const VideoWithThumbnail = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoFileId = '1k1qCyn9jtwajrOSJ18_sTx0sKxn-G-kV'; // Replace with your Google Drive video file ID

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div>
      {!isPlaying ? (
        // Show the thumbnail initially
        <img
          src={`https://drive.google.com/thumbnail?id=${videoFileId}`}
          alt="Video Thumbnail"
          style={{ cursor: 'pointer' }}
          onClick={handlePlayVideo}
          width="640"
          height="360"
        />
      ) : (
        // Show the video player after clicking the thumbnail
        <iframe
          src={`https://drive.google.com/file/d/${videoFileId}/preview`}
          width="640"
          height="360"
          allow="autoplay"
          allowFullScreen
          title="Google Drive Video"
        ></iframe>
      )}
    </div>
  );
};

export default VideoWithThumbnail;
