/**
 * Authorize and use base line methods for endpoints.
 * The function BaseAPI at the begining is the class 
 * constuctor while the prototype defines the class methods.
 * @class BaseAPI
 */
const BaseAPI = (port = 0) => {
  // Set a port to be used in constructing the URL for requests
  this.port = port;
  // Setting the request types for REST
  this.requestTypes = {
    get:'GET',
    post:'POST',
    put:'PUT',
    delete:'DELETE'
  }
  return this;
}
/**
 * The Class methods
 */
BaseAPI.prototype =  {
  /**
   * Using base path and the extention, gets a promise containing data
   * @method get
   * @param {string} extention - some variation of paths defined above.
   * @returns a promise containing data
   */
  get(extention) {
    return this.sendRequest(
      this.requestTypes.get,
      extention
    )
  },
  /**
   * Using base path and the extention, posts stringified JSON to the api.
   * @method post
   * @param {string} extention - the endpoint path extention
   * @param {object} data - the data from each editor
   * @returns a promise containing data
   */
  post(extention, data) {
    return this.sendRequest(
      this.requestTypes.post,
      extention,
      JSON.stringify(data)
    )
  },
  /**
   * Using base path and the extention, converts incoming object into a FormData object and posts to the api.
   * Note this is usefull when sending files to the api as files don't stringify well.
   * @method postForm
   * @param {string} extention - the endpoint path extention
   * @param {object} data - the data from each editor
   * @returns a promise containing data
   */
  postForm(extention, data) {
    // Put the data in from format
    const form = new FormData();
    for (let key in data) {
      form.append(key, data[key]);
    }
    return this.sendRequest(
      this.requestTypes.post,
      extention,
      form
    )
  },
  /**
   * Build the base url to hit the target api hosted from the same machine as the ui
   * @method baseURL
   * @returns {String} - The base url for the api
   */
  baseURL() {
    let protocol = "http:";
    let hostname = "localhost";
    try {
      if (window.location.protocol.toLocaleLowerCase().includes("https")) {
        protocol = "https:";
      }
      hostname = window.location.hostname;
    }
    catch (e) {
      console.log(e)
    }
    let url =  protocol + "//" + hostname;
    if(this.port){
      url += ":" + this.port;
    }
    return url;
  },
  /**
   * @method getHeaders
   * @returns {Object} - a headers object.
   */
  getHeaders(form = false) {
    const myHeaders = new Headers();
    // If it isn't form data set type to json
    if (!form) {
      myHeaders.append("Content-Type", "application/json");
    }
    // grab token from local storage
    const token = localStorage.getItem("Token");
    if (token) {
      myHeaders.append("Authorization", "Bearer " + token);
    }
    return myHeaders;
  },
  
  /**
   * @method sendRequest
   * @param {string} method - http method: GET, POST, PUT, DELETE, etc.
   * @param {*} extention - the endpoint path extention
   * @param {*} [data={}] - data to send. Is optional for gets
   * @return {*} The result is a promise. To read the result use await or then.
   */
  sendRequest(method, extention, body = {}) {
    // Forming the fetch request with the right method and headers
    const Data = {
      method, // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: this.getHeaders(),
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
    };
    // Attach the body if it was passed in
    if(body){
      Data.body = body // body data type must match "Content-Type" header
    }

    // Uses path to always set the base path for data service.
    return fetch(this.baseURL() + extention, Data)
      .then((result) => {
        if (result && result.status === 200) {
          return result.json();
        }
        return result.text().then(text => { throw new Error(text) })
      })
      .catch(error => {
        throw(error);
      });
  },
};

export default BaseAPI;
