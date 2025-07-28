import { useEffect, useState } from 'react';
import { SectionB as Section, Subtitle } from '../styles/GlobalStyle';

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
// const CHANNEL_HANDLE = '@asusrid';
// const CHANNEL_ID = "UCFFjDaUViPNzEvXwITjv8gw"
const UPL_PLAYLIST_ID = "UUFFjDaUViPNzEvXwITjv8gw"

export default function Comunity() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        // ID del canal desde el handle
        // const searchRes = await fetch(
        //   `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${CHANNEL_HANDLE}&type=channel&key=${YOUTUBE_API_KEY}`
        // );
        // const searchData = await searchRes.json();

        // const channelId = searchData.items?.[0]?.snippet?.channelId;
        // if (!channelId) throw new Error("No se encontró el canal");

        // playlist de uploads del canal
        // const channelRes = await fetch(
        //   `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
        // );
        // const channelData = await channelRes.json();

        // const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

        // if (!uploadsPlaylistId) throw new Error("No se encontró la playlist de videos");

        // GET videos de esa playlist
        const videosRes = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${UPL_PLAYLIST_ID}&maxResults=3&key=${YOUTUBE_API_KEY}`
        );
        const videosData = await videosRes.json();

        setVideos(videosData.items || []);
      } catch (error) {
        console.error("Error al cargar videos:", error);
      }
    }

    fetchVideos();
  }, []);

  return (
    <Section id="comunidad">
      <h3>
        <span>Descubre</span> la comunidad
      </h3>
      <Subtitle>
        Bienvenido a la comunidad de automatizaciones con agentes de IA.
      </Subtitle>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {videos.map((video) => {
          const videoId = video.snippet.resourceId.videoId;
          return (
            <iframe
              key={videoId}
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          );
        })}
      </div>
    </Section>
  );
}
