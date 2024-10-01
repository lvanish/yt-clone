import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    title: "lofi hip hop radio 📚 beats to relax/study to",
    image: "thumb_img.jpg",
    thumbImage: "channel_img.jpg",
    author: "Lofi girl",
    views: "109M",
    timestamp: "9 years ago",
  },
  {
    title: "lofi hip hop radio 📚 beats to relax/study to",
    image: "thumb_img.jpg",
    thumbImage: "channel_img.jpg",
    author: "Lofi girl",
    views: "109M",
    timestamp: "9 years ago",
  },
  {
    title: "lofi hip hop radio 📚 beats to relax/study to",
    image: "thumb_img.jpg",
    thumbImage: "channel_img.jpg",
    author: "Lofi girl",
    views: "109M",
    timestamp: "9 years ago",
  },
  {
    title: "lofi hip hop radio 📚 beats to relax/study to",
    image: "thumb_img.jpg",
    thumbImage: "channel_img.jpg",
    author: "Lofi girl",
    views: "109M",
    timestamp: "9 years ago",
  },
  {
    title: "lofi hip hop radio 📚 beats to relax/study to",
    image: "thumb_img.jpg",
    thumbImage: "channel_img.jpg",
    author: "Lofi girl",
    views: "109M",
    timestamp: "9 years ago",
  },
  {
    title: "lofi hip hop radio 📚 beats to relax/study to",
    image: "thumb_img.jpg",
    thumbImage: "channel_img.jpg",
    author: "Lofi girl",
    views: "109M",
    timestamp: "9 years ago",
  },
  {
    title: "lofi hip hop radio 📚 beats to relax/study to",
    image: "thumb_img.jpg",
    thumbImage: "channel_img.jpg",
    author: "Lofi girl",
    views: "109M",
    timestamp: "9 years ago",
  },
  {
    title: "lofi hip hop radio 📚 beats to relax/study to",
    image: "thumb_img.jpg",
    thumbImage: "channel_img.jpg",
    author: "Lofi girl",
    views: "109M",
    timestamp: "9 years ago",
  },
  {
    title: "lofi hip hop radio 📚 beats to relax/study to",
    image: "thumb_img.jpg",
    thumbImage: "channel_img.jpg",
    author: "Lofi girl",
    views: "109M",
    timestamp: "9 years ago",
  },
  {
    title: "lofi hip hop radio 📚 beats to relax/study to",
    image: "thumb_img.jpg",
    thumbImage: "channel_img.jpg",
    author: "Lofi girl",
    views: "109M",
    timestamp: "9 years ago",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            image={video.image}
            thumbImage={video.thumbImage}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
          ></VideoCard>
        </div>
      ))}
    </div>
  );
};
