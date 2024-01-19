import {FiSearch} from 'react-icons/fi'

import TracksList from '../TracksList'

import './style.css'
import PlayListContext from '../../Context/PlayListContext'

const BottomSection = () => (
  <PlayListContext.Consumer>
    {value => {
      const {searchInput, updateSearchInput} = value
      const onChangingInput = event => {
        updateSearchInput(event.target.value)
      }

      return (
        <div className="bottom-section-container">
          <div className="name-and-input-container">
            <h1 className="playlist-heading">Songs Playlist</h1>
            <div className="input-search-container">
              <input
                type="search"
                placeholder="Search"
                value={searchInput}
                onChange={onChangingInput}
              />
              <FiSearch className="search-icon" />
            </div>
          </div>
          <TracksList />
        </div>
      )
    }}
  </PlayListContext.Consumer>
)

export default BottomSection
