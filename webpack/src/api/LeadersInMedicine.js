const baseUrl = "http://localhost:8080/";
import Cookies from 'js-cookie';

export default class LeadersInMedicine {


  handleDeleteRequest(subUrl) {
    return new Promise( function(resolve, reject) {
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && (this.status >= 200 && this.status < 300)) {
          resolve(JSON.parse(this.responseText))
        } else if  (this.readyState == 4 && (this.status >= 400 && this.status < 500)) {
          reject(JSON.parse(this.responseText))
        } else if (this.readyState == 4 && (this.status >= 500 && this.status < 600 )) {
          reject(JSON.parse(this.responseText))
        } else if (this.readyState == 4) {
          reject(JSON.parse(this.responseText))
        }
      }
      xhttp.withCredentials = true;
      // let sessionCookieValue = Cookies.get('session');
      xhttp.open("DELETE", baseUrl + subUrl, true);
      // xhttp.setRequestHeader('Set-Cookie', 'Session='+sessionCookieValue+'; Path=/;');
      xhttp.send();
    })
  }

  handlePutRequest(subUrl, data) {
    return new Promise( function(resolve, reject) {
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && (this.status >= 200 && this.status < 300)) {
          resolve(JSON.parse(this.responseText))
        } else if  (this.readyState == 4 && (this.status >= 400 && this.status < 500)) {
          reject(JSON.parse(this.responseText))
        } else if (this.readyState == 4 && (this.status >= 500 && this.status < 600 )) {
          reject(JSON.parse(this.responseText))
        } else if (this.readyState == 4) {
          reject(JSON.parse(this.responseText))
        }
      }
      xhttp.withCredentials = true;
      // let sessionCookieValue = Cookies.get('session');
      xhttp.open("PUT", baseUrl + subUrl, true);
      // xhttp.setRequestHeader('Set-Cookie', 'Session='+sessionCookieValue+'; Path=/;');
      xhttp.send(JSON.stringify(data));
    })
  }

  handlePostRequest(subUrl, data) {
    return new Promise( function(resolve, reject) {
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && (this.status >= 200 && this.status < 300)) {
          resolve(JSON.parse(this.responseText))
        } else if  (this.readyState == 4 && (this.status >= 400 && this.status < 500)) {
          reject(JSON.parse(this.responseText))
        } else if (this.readyState == 4 && (this.status >= 500 && this.status < 600 )) {
          reject(JSON.parse(this.responseText))
        } else if (this.readyState == 4) {
          reject(JSON.parse(this.responseText))
        }
      }
      xhttp.withCredentials = true;
      // let sessionCookieValue = Cookies.get('session');
      xhttp.open("POST", baseUrl + subUrl, true);
      // xhttp.setRequestHeader('Set-Cookie', 'Session='+sessionCookieValue+'; Path=/;');
      xhttp.send(JSON.stringify(data));
    })
  }

  handleGetRequest(subUrl) {
    return new Promise( function(resolve, reject) {
      Cookies.get('session_id')
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        console.log(this.readyState)
        if (this.readyState == 4 && (this.status >= 200 && this.status < 300)) {
          resolve(JSON.parse(this.responseText))
        } else if  (this.readyState == 4 && (this.status >= 400 && this.status < 500)) {
          reject(JSON.parse(this.responseText))
        } else if (this.readyState == 4 && (this.status >= 500 && this.status < 600 )) {
          reject(JSON.parse(this.responseText))
        } else if (this.readyState == 4) {
          reject(JSON.parse(this.responseText))
        }
      }
      xhttp.withCredentials = true;
      // let sessionCookieValue = Cookies.get('session');
      xhttp.open("GET", baseUrl + subUrl, true);
      // xhttp.setRequestHeader('Set-Cookie', 'Session='+sessionCookieValue+'; Path=/;');
      xhttp.send();
    })
  }

  // handleGetRequest(subUrl) {
  //   return axios.get(baseUrl + subUrl, {'withCredentials': true})
  //     .then(
  //       function(response) {
  //         console.log(response)
  //       }
  //     ).catch(function (error) {
  //       console.log(error)
  //   })
  // }

  constructor() {
  }
}
