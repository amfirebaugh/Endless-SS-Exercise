import axios from 'axios';

export default {
  retrieve: function() {
    return axios.get(
      'https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge'
    );
  }
};
