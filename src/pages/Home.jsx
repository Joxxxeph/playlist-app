import { useEffect, useState } from "react";
import { SearchIcon } from "../components/icons/Svgs";
import Header from "../components/layouts/Header";
import { axiosMusic } from "../utils/configAxios";
import TrackList from "../components/shared/TrackList";

const Home = () => {

  const [tracksRecommendations, setTracksRecommendations] = useState([])

  useEffect(() => {
    axiosMusic
    .get('/api/tracks/recommendations?seed_genres=rock,metal')
    .then(({data}) => setTracksRecommendations(data.tracks))
    .catch((error) => console.log(error))
  }, [])
  

  return (
    <section
      className="bg-darkFound text-white font-urbanist h-screen
    grid grid-rows-[auto_1fr] "
    >
      <Header />

      <section className="py-12 px-6 overflow-y-auto">
        <main className=" mx-auto w-[min(600px,_100%)] bg-primary-dark py-8 px-5 sm:px-12
          rounded-[30px]">
          <form action="" className="bg-white/10 p-[.65rem] px-4 rounded-[12.20px] flex gap-4">
            <button> <SearchIcon /> </button>
            <input size={6} className="bg-transparent outline-none flex-1" type="text" placeholder="Buscar"/>
            <select className="bg-transparent outline-none" name="" id="">
              <option value="">1</option>
            </select>
          </form>
          
          <TrackList tracks={tracksRecommendations} />

        </main>
      </section>
    </section>
  );
};

export default Home;
