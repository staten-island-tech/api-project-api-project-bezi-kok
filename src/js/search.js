import { DOMSelectors } from "./DOM";
// import {genres} from "genre";

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const searchParams = DOMSelectors.searchArea.value;

    // const searchQuery = //input chunk of index.js here
  });
};

// searchQuery();
listen();
