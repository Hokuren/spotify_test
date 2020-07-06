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
        <div  v-if="albums.length > 0"
              class="list__content_cards"> 
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

        <div>
          <h1>Autentificar</h1>
          <button @click="pushClick()">
            Click
          </button>
           <button @click="postToken()">
            Post Token
          </button>
        </div>
        <div>
          <h1>Parametros</h1>
          <p>{{ firstToken }}</p>
          <p>{{ albums }}</p>
          <p>{{ display }}</p>
        </div>
    </div>
</template>
<script>
import Navbar from './navbar'

export default {
  name: 'navbar',
  components: {
    appNavbar: Navbar
  },
  props: ['hash'], 
  data () {
    return {
      playlist: [],
      albums: [],
      token: '',
      display: false,
      token: ''
    }
  },
  methods: {
   /*  getPlayList(){
      //let user_id = "javierking1993" 
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
    },  */
    getNewReleases(){
      /* let user_id = "javierking1993" */
      let user_id = "javierking1993"
      let limit = 10
      let offset = 0
      let token = 'BQC7bY30bS6aJ3LShJ1Ed4lTY-H8CDFNqdlr_KZXVE7tScjhaF4ojagIRpID1--h9Xuq1XDQCvzpO2CA_5WpZ211c4Q8xipMtwdAT_vfzGHI5vW6tGFZJOwgMi4cfRpLRX95piGZBHpqeJx0ACZeHA'
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
    login(callback) {
      console.log('login()')
      var CLIENT_ID = '6af9833eeca84ef7a07b4295ba0c2d54';
      var REDIRECT_URI = 'http://localhost:8080/callback/';
      function getLoginURL(scopes) {
          return 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID +
            '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) +
            '&scope=' + encodeURIComponent(scopes.join(' ')) +
            '&response_type=code';
      }
      var url = getLoginURL([
          'user-read-email'
      ]);
      /* console.log('URL ',url) */
      var width = 450,
          height = 730,
          left = (screen.width / 2) - (width / 2),
          top = (screen.height / 2) - (height / 2);
     
      var w = window.open(url, '_self', 'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
      
    },
    getUserData(accessToken) {
      console.log('getUserData(accessToken)')
      try { 
        this.$http.get('https://api.spotify.com/v1/me',{
            headers:{
            "Authorization": 'Bearer' + accessToken
          }
        })
        .then(function(response){
          console.log('accessToken'. response)
        }, function(response){
          //error
        })
      } catch (e) {
        alert(e.message)
      }
    },
    getAuth() {
      this.login(function(accessToken) {
      this.getUserData(accessToken)
          .then(function(response) {
              console.log(response);
          });
      });
     
    },
    pushClick() {
      this.getAuth()
    },
    postToken() {
      console.log('postToken()')
      let client_id = '6af9833eeca84ef7a07b4295ba0c2d54'
      let client_secret = '3277d7728e1c413a9ae3e13824dce69e'
      var REDIRECT_URI = 'http://localhost:8080/callback/';
      var encodedData = window.btoa(client_id + ':' + client_secret);
      console.log('encodedData', encodedData )
     console.log('post token ', this.token);
      try { 
        this.$http.post('https://accounts.spotify.com/api/token',
            /*  +'grant_type=application/x-www-form-urlencoded'
             +'&refresh_token='
        ,    */
            {
              "grant_type":    "authorization_code",
              "code": this.token,
              "redirect_uri": REDIRECT_URI,
            } 
            ,{
            headers:{
            "Authorization": 'Basic ' + encodedData, 
            "Access-Control-Allow-Origin": "http://localhost:8080",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
          }
        })
        .then(function(response){
          console.log('POST  ', response)
        }, function(response){
          //error
        })
      } catch (e) {
        alert(e.message)
      }
    },
  }, /* close methods */
  computed: {
    firstToken(){
      let token = 'none'
      this.token = 'none'
      try {
        let url = location.href
        token = url.replace(/[http://localhost:8080/callback/?code=]/g,'')
        /* url.substring(url.indexOf('access_token=') + 13,url.indexOf('&token_type=') ) */
        this.token = token
      } catch (error) {
        
      }
      return token 
    }
    
  },
  mounted(){
  /*     if (this.token !== 'none'){
        this.getNewReleases()
        this.display = true;
      }    */ 
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
