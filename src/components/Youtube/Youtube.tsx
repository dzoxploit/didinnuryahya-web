import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import axios from "axios";
import ScrollAnimation from "react-animate-on-scroll";
import externalLink from "../../assets/external-link.svg";
import xml2js from "xml2js";

// Define the type for a video
type Video = {
  id: string;
  title: string;
  link: string;
  thumbnail: string;
  publishedAt: string;
};

const fetchYouTubeVideosRSS = async (): Promise<Video[]> => {
  try {
    const response = await axios.get("https://www.youtube.com/feeds/videos.xml?channel_id=YOUR_CHANNEL_ID");
    const parsed = await xml2js.parseStringPromise(response.data, { explicitArray: false });
    return parsed.feed.entry.map((video: any) => ({
      id: video["yt:videoId"],
      title: video.title,
      link: video.link.$.href,
      thumbnail: video["media:group"]["media:thumbnail"].$.url,
      publishedAt: video.published,
    }));
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return [];
  }
};

export function YouTubeVideos() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const getVideos = async () => {
      const data: Video[] = await fetchYouTubeVideosRSS();
      setVideos(data);
    };

    getVideos();
  }, []);

  return (
    <Container id="portfolio">
      <h2>My YouTube Videos</h2>
      <div className="projects">
        {videos.map((video) => (
          <ScrollAnimation key={video.id} animateIn="flipInX">
            <div className="project">
              <header>
                <div className="project-links">
                  <a href={video.link} target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Watch video" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>{video.title}</h3>
                <img src={video.thumbnail} alt={video.title} />
                <p>Published: {new Date(video.publishedAt).toLocaleDateString()}</p>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
