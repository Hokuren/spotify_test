import Navbar from '@/components/navbar.vue'
import Index from '@/components/index.vue'
import Artists from '@/components/artists.vue'
import SearchSong from '@/components/search_song.vue'
import ArtistDetail from '@/components/artist_detail.vue'

export default [
  { path: '/', component: Index,  name: 'index'  },
  { path: '/artists', component: Artists,  name: 'artists'  },
  { path: '/search_song', component: SearchSong,  name: 'search_song'  },
  { path: '/artist_detail', component: ArtistDetail,  name: 'artist_detail'  },
  { path: '/callback', component: Index,  name: 'callback'  }
]