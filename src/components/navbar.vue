<template>
  <div class="navabar">
    <div class="navabar__content_ico">
      <img :src="icono_logo" alt=""> 
    </div>
    <div class="navabar__content"> 
      <div class="navabar__content_search_artist">
        <img :src="icono_lupa" alt="">
        <input type="text" placeholder="Buscar Artista" name="" id="">
      </div>
    </div>
    <div class="navabar__content">
      <div class="navabar__content_search_song">
        <img :src="icono_lupa" alt="">
        <input type="text" placeholder="Buscar Cancion" name="" id="">
      </div>
    </div>
  </div>
</template>
<script>
import spotifz_log from '@/assets/logo_spotify.png'
import icono_lupa from '@/assets/icono_lupa.png'
export default {
  name: 'navbar',
  computed: {
    icono_logo: () => spotifz_log,
    icono_lupa: () => icono_lupa
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navabar {
    height: 60px;
    background-color: #5F5957;
    justify-items: center;
    align-items: flex-start;
    display: flex;
  }
  .navabar__content_ico {
    height: 60px;
    width: 200px;
    justify-items: center;
    align-items: center;
    display: flex;
    padding-left: 2em;
  }
  .navabar__content_ico img {
    height: 45px;
  }
  .navabar__content{
    justify-items: center;
    align-items: center;
    display: flex; 
    height: 60px; 
  }
  .navabar__content_search_artist {
    height: 50px;
    width: 220px;
    justify-items: center;
    align-items: center;
    display: flex;
    margin-left: 2em;
    background-color: #66605E;
    border-radius: 5%;
  }
  .navabar__content_search_artist img{
    height: 30px;
  }
  .navabar__content_search_artist input{
    background-color: #66605E;
    height: max-content;
    color:#BFB5B2;
    padding-right: 1em;
    border-width: none !important;
    border-style: none !important;
    border-color: none !important;
    outline: none;
  }
  .navabar__content_search_song {
    height: 50px;
    width: 220px;
    justify-items: center;
    align-items: center;
    display: flex;
    margin-left: 2em;
    background-color: #66605E;
    border-radius: 5%;
  }
  .navabar__content_search_song img{
    height: 30px;
  }
  .navabar__content_search_song input{
    background-color: #66605E;
    height: max-content;
    color:#BFB5B2;
    padding-right: 1em;
    border-width: none !important;
    border-style: none !important;
    border-color: none !important;
    outline: none;
  }

</style>
