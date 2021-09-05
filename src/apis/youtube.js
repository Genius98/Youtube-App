import axios from "axios";

const KEY = "AIzaSyDv7mYoUE_VZYXM8t7VwoAZlqPQlZWNmcE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
