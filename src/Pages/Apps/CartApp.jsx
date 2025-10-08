import React from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import BannerImg from "../../assets/hero.png";

// {
//     "id": 1,
//     "image": "https://i.ibb.co.com/q9Dg3yL/spotify-logo.jpg",
//     "title": "Spotify",
//     "companyName": "Spotify Ltd.",
//     "description": "Spotify is a leading music streaming app that offers millions of songs, podcasts, and playlists from around the world. Users can create personalized playlists, discover new artists, and download tracks for offline listening. With seamless device syncing, Spotify ensures your music is always with you.",
//     "size": 120,
//     "reviews": 5400000,
//     "ratingAvg": 4.7,
//     "downloads": 500000000,
//     "ratings": [
//         {
//             "name": "1 star",
//             "count": 50000
//         },
//         {
//             "name": "2 star",
//             "count": 80000
//         },
//         {
//             "name": "3 star",
//             "count": 150000
//         },
//         {
//             "name": "4 star",
//             "count": 700000
//         },
//         {
//             "name": "5 star",
//             "count": 4200000
//         }
//     ]
// }

const CartApp = ({ singleApp }) => {
  const { image, title, downloads,companyName, ratingAvg } = singleApp;
  console.log(singleApp);

  return (
    <div
      className=" rounded-lg shadow-md p-3 bg-white 
                    hover:shadow-xl hover:-translate-y-2 hover:scale-105 
                    transition-transform duration-300 my-5 mx-5"
    >
      {/* App Image */}
      <img
        className="h-[226px] w-full object-cover rounded-md mb-4"
        src={image}
        alt="Forest App"
      />

      {/* App Title */}
      <h1 className="text-xl font-bold mb-4 text-center">{`${title}:${companyName}`}</h1>

      {/* Stats */}
      <div className="flex items-center justify-between gap-4">
        <div className="bg-gray-200 flex items-center gap-2 p-2 rounded-sm">
          <img className="w-4 h-4" src={downloadIcon} alt="Download" />
          <h3 className="font-medium text-[#00D390]">{downloads}</h3>
        </div>

        <div className="bg-gray-200 flex items-center gap-2 p-2 rounded-sm">
          <img className="w-4 h-4" src={ratingIcon} alt="Rating" />
          <h3 className="text-[#00D390] font-medium">{ratingAvg}</h3>
        </div>
      </div>
    </div>
  );
};

export default CartApp;
