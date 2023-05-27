import axios from "axios";

const getgitRepo = (data) => {
  try {
    return axios
      .get("https://api.github.com/search/repositories?per_page=10", {
        params: data,
      })
      .then((response) => response);
  } catch (e) {
    console.log(e);
  }
};

const gitService = {
  getgitRepo,
};

export default gitService;
