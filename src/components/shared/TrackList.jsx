import TrackCard from "./TrackCard"

const TrackList = ({ tracks }) => {
  return (
    <section className="grid gap-6 pt-8">
      {
        tracks.map((track) => 
          <TrackCard key={track.id} track={track}/>
        )
      }
    </section>
  )
}

export default TrackList