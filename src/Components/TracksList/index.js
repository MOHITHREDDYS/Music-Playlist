import {AiOutlineDelete} from 'react-icons/ai'

import PlayListContext from '../../Context/PlayListContext'

import './style.css'

const TracksList = () => (
  <PlayListContext.Consumer>
    {value => {
      const {searchInput, tracksList, updateTracksList} = value

      const filteredTrackList = tracksList.filter(eachTrack =>
        eachTrack.name.toLowerCase().includes(searchInput.toLowerCase()),
      )

      return (
        <ul>
          {filteredTrackList.map(trackDetails => {
            const {id, imageUrl, name, genre, duration} = trackDetails
            const onClickingDeleteIcon = () => {
              updateTracksList(id)
            }
            return (
              <li key={id}>
                <div className="track-image-name-container">
                  <img src={imageUrl} alt="track" className="track-image" />
                  <div>
                    <h1 className="track-name">{name}</h1>
                    <p className="track-genre">{genre}</p>
                  </div>
                </div>
                <div className="duration-and-delete-container">
                  <p className="track-duration">{duration}</p>
                  <AiOutlineDelete
                    className="delete-icon"
                    onClick={onClickingDeleteIcon}
                  />
                </div>
              </li>
            )
          })}
        </ul>
      )
    }}
  </PlayListContext.Consumer>
)

export default TracksList
