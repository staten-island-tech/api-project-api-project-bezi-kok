import { DOMSelectors } from "./DOM";
// import {genres} from "genre";

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    // console.log(searchParams);
    e.preventDefault();
    const searchParams = DOMSelectors.searchArea.value;
    const searchQuery = async function () {
      // console.log(asynic);
      try {
        const response = await fetch(
          `https://mugenmonkey.com/api/v0/ds3_builds?&query=${searchParams}`
        );
        const data = await response.json();

        const DS3build = data.ds3_builds[461097]; //// how the hell do I make this search all?
        // parsedData.ds3_builds.forEach((DS3build) => {
        console.log(DS3build);
        DOMSelectors.searchGrid.insertAdjacentHTML(
          "beforeend",
          `<div class="info-api-div-build-stats">
                    <div class="main-info">
                    <p class="build-title>Title: ${DS3build.title}</p>
                      <p class="build-gender">Gender: ${DS3build.gender}</p>
                      <p class="build-starting-class">Starting Class: ${DS3build.starting_class}</p>
                      <p class="build-description">Description: ${DS3build.description}</p>
                      <p class="build-user-id">User-Id: ${DS3build.user_id}</p>
                      <p class="build-id">Id: ${DS3build.id}</p>
                    </div>
                    <div class="core-stats">
                      <p class="build-level">Level: ${DS3build.level}</p>
                      <p class="build-vigor">Vigor: ${DS3build.vigor}</p>
                      <p class="build-attunement">Attunement: ${DS3build.attunement}</p>
                      <p class="build-endurance">Endurance: ${DS3build.endurance}</p>
                      <p class="build-vitality">Vitality: ${DS3build.vitality}</p>
                      <p class="build-strength">Strength: ${DS3build.strength}</p>
                      <p class="build-dexterity">Dexterity: ${DS3build.dexterity}</p>
                      <p class="build-intelligence">Intelligence: ${DS3build.intelligence}</p>
                      <p class="build-faith">Faith: ${DS3build.faith}</p>
                      <p class="build-luck">Luck: ${DS3build.luck}</p>
                      <p class="build-hollowing">Hollowing: ${DS3build.hollowing}</p>
                      <p class="build-covenant">Covenant: ${DS3build.covenant}</p>
                      <p class="build-two-hand">Two_Hand: ${DS3build.two_hand}</p>
                    </div>
                    <div class="author-details">
                      <p class="author-name">Author's name: ${DS3build.author}</p>
                      <p class="creation-date">Created On: ${DS3build.created_at}</p>
                      <p class="updated-date">Updated On:${DS3build.updated_at}</p>
                    </div>
                  </div>`
        );
        // searchQuery();
      } catch (error) {
        console.log(error);
        alert("Yep, something went wrong, for the millionth time! (╬ಠ益ಠ)");
      }
    };
    searchQuery();
  });
};

listen();
