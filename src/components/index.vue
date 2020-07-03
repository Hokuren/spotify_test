<template>
    <div class="list">
        <app-navbar></app-navbar> 
        <h1>New releases</h1>
        <div>
          <div>
            left
          </div>   
          <div>
            right
          </div>         
        </div>
        <div class="list__content_cards"> 
          <div 
            class="list__content_cards--detail_card"
            v-for="(album,index) in albums" :key="index">
            <div class="card__content_img">
              <img :src="album.images[0].url" alt="">
            </div>
            <div class="card__content_text">
              <span>{{ album.name }}</span>
              <p>{{ album.album_type}}</p>
            </div>
          </div>
        </div>

       <!--  <div>
          <h1>Parametros</h1>
          <p>{{ albums }}</p>
        </div> -->
    </div>
</template>
<script>
import Navbar from './navbar'

export default {
  name: 'navbar',
  components: {
    appNavbar: Navbar
  },
  data () {
    return {
      playlist: [],
      albums: [],
      token: ''
    }
  },
  methods: {
    getPlayList(){
      /* let user_id = "javierking1993" */
      let user_id = "nicolasosorioarias"
      let limit = 20
      let offset = 1
      let userAccessToken = 'Bearer BQDGWrPwgRy-3K8LY_fNOCBoMKfbZ8JkaYKe2qnoYcFqJsb1U4Y2-K_onVNDG5lWiRbRgbtqN95VRXoNwP224W3Tb0QPTVm2-UDbHyROq15TBi1pTFKXtEoskGp9mNa7AFmqVH5GwhBErS_rYMR8cw"'
      try { 
        this.$http.get('https://api.spotify.com/v1/users/'+ user_id +'/playlists?limit='+limit+'&offset='+offset,{
            headers:{
            "Authorization": userAccessToken
          }
        })
        .then(function(response){
          this.playlist = response
          console.log(response)
        }, function(response){
          
        })
      } catch (e) {
        alert(e.message)
      }
    }, 
    getNewReleases(){
      /* let user_id = "javierking1993" */
      let user_id = "nicolasosorioarias"
      let limit = 10
      let offset = 0
      let token = 'BQDEcm43Ywcc3scxn78sCTh3B9nSrNHCnq7kUb1qCshO3esQHq50ChS9OipOYdca83vRgwc1xlJCVVpDpJra3YtN859tIs2rhN_PpZC-Hj3TYfMHQfCE8nyiR0fpgF7BLkNGrDh_yPaUCVv2pBOTI6xtdVH9ro__JSNi7nIDhAwdHcc'
      let userAccessToken = 'Bearer '+ token 
      try { 
        this.$http.get('https://api.spotify.com/v1/browse/new-releases?country=SE&offset='+offset+'&limit='+limit,{
            headers:{
            "Authorization": userAccessToken
          }
        })
        .then(function(response){
          this.albums = response.body.albums.items
          console.log(response)
        }, function(response){
          
        })
      } catch (e) {
        alert(e.message)
      }
    },
    getToken(){
      console.log('getToken()');
      /* let user_id = "javierking1993" */
      let my_client_id = '6af9833eeca84ef7a07b4295ba0c2d54';
      let my_client_secret = '3277d7728e1c413a9ae3e13824dce69e';
      let redirect_uri = 'http://localhost:8080/'
      let state = 'abc123'
      let scope = 'playlist-read-collaborative playlist-read-private'
      try { 
        this.$http.get('https://accounts.spotify.com/authorize?response_type=code&client_id=' + my_client_id + 
        '&redirect_uri='+ redirect_uri  +'&scope='+scope + '&state='+ state 
        ,{
          headers:{
            "Authorization": 'Basic ' + (my_client_id + ':' + my_client_secret).toString('base64')
          } 
        })
        .then(function(response){
          console.log('response token' ,response)
          this.token = response
          console.log(response)
        }, function(response){
          
        })
      } catch (e) {
        alert(e.message)
      }
    } 
  }, /* close methods */
  mounted(){
    /* this.getPlayList() */
    this.getToken();
    this.getNewReleases();
    
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .list {
    background-color: #151618; 
  
  }
  .list__content_cards {
    display: grid;
    grid-template-columns: repeat(5, 200px);
    grid-template-rows: repeat(2, 300px);
    grid-gap: 15px;
    justify-content: center;
    align-items: center;
  }
  .list__content_cards--detail_card {
    width: 200px;
  }
  

 /*  .card {

  } */
  .card__content_img {
    width: 200px;
    height: 200px;
  }
  .card__content_img  img{
    width: 100%;
    height: 200px;
    object-fit: contain;
    border-radius: 3%;
  }
  .card__content_text {
    width: 100%;
  }
  .card__content_text span {
    margin-top: 1em;
    display: block;
    color: white;
  }
  .card__content_text p {
    margin-top: 0.2em;
  }

</style>
