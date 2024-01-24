import { Link } from "react-router-dom";
import { PlayTrackIcon, PlusIcon } from "../icons/Svgs";

const TrackCard = ({track}) => {

  return (
    <article className="flex gap-4 items-center">
      <div className="w-[58px] h-[58px] rounded-md overflow-hidden border border-secundary">
        <img src={track.album.images[2].url} alt="" />
      </div>

      <div className="flex-1 grid gap-1">
        <h4 className="font-semibold line-clamp-1">{track.name}</h4>
        <ul className="">
          {
            track.artists.map((artist) => (
              <li key={artist.id}>
                <Link to={`/artista/${artist.id}`}>{artist.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="flex gap-2 pr-1">
        <button><PlayTrackIcon/></button>
        <button><PlusIcon/></button>
      </div>
    </article>
  )
}

export default TrackCard