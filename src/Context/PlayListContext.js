import React from 'react'

const PlayListContext = React.createContext({
  tracksList: [],
  updateTracksList: () => {},
  searchInput: '',
  updateSearchInput: () => {},
})

export default PlayListContext
