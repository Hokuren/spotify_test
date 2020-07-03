import Vue from'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

/* Vue.http.options.root = 'https://api.spotify.com/v1/';  */

Vue.http.headers.common['Accept-Language'] = 'es'
Vue.http.headers.common["DYNAMIC-LANGUAGE"] = 'es';
Vue.http.headers.common["Content-Type"]= "application/vnd.api+json";
Vue.http.headers.common.Accept= "application/vnd.api+json";
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.http.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, PUT, DELETE, HEAD'
Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Access-Control-Allow-Headers, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Content-Type, Authentication, Accept-Language'

