import { DOMSelectors } from "./DOM";
// import { genres } from "./genre";

const key = "https://mugenmonkey.com/api/v0/ds3_builds";

const query = async function () {
    try {
        const response = await fetch("https://mugenmonkey.com/api/v0/ds3_builds?per_page=1&page=1"
        );
        const data = await response.json();
        data.gender.forEach((DS3build) => {
            DOMSelectors.grid.insertAdjacentHTML(
                "beforeend",
                `<div class="info-div-build-stats">
                <div class="main-info">
                  <p class="gender">${DS3build.gender}</p>
                  <p class="build-starting-class">${DS3build.starting_class}</p>
                  <p class="build-description">${DS3build.description}</p>
                  <p class="build-user-id">${DS3build.user_id}</p>
                  <p class="build-id">${DS3build.id}</p>
                </div>
                <div class="core-stats">
                  <p class="build-level">kedsh</p>
                  <p class="build-vigor">hyt5</p>
                  <p class="build-attunement">htr5</p>
                  <p class="build-endurance">jdj</p>
                  <p class="build-vitality">ebfc</p>
                  <p class="build-strength">ufdnu</p>
                  <p class="build-dexterity">fneuws</p>
                  <p class="build-intelligence">fefs</p>
                  <p class="build-faith">fsds</p>
                  <p class="build-luck">fdss</p>
                  <p class="build-hollowing">dfd</p>
                  <p class="build-covenant">wknfsduwnusafdnuwe</p>
                  <p class="build-two-hand">wedwq</p>
                </div>
                <div class="build-add-ons">
                  <p class="build-head-id">dwd</p>
                  <p class="build-body-id">wdws</p>
                  <p class="build-arms-id">wdds</p>
                  <p class="build-legs-id">wdds</p>
                  <p class="build-ring1-id">wdds</p>
                  <p class="build-ring2-id">wdds</p>
                  <p class="build-ring3-id">wdds</p>
                  <p class="build-ring4-id">wdds</p>
                  <p class="build-1h1-id">wdds</p>
                  <p class="build-1h2-id">wdds</p>
                  <p class="build-1h3-id">wdds</p>
                  <p class="build-rh1-id">ewfg</p>
                  <p class="build-rh2-id">ewfg</p>
                  <p class="build-rh3-id">ewfg</p>
                </div>
                <div class="build-spells">
                  <p class="build-spell1-id">jusw</p>
                  <p class="build-spell2-id">jusw</p>
                  <p class="build-spell3-id">jusw</p>
                  <p class="build-spell4-id">jusw</p>
                  <p class="build-spell5-id">jusw</p>
                  <p class="build-spell6-id">jusw</p>
                  <p class="build-spell7-id">jusw</p>
                  <p class="build-spell8-id">jusw</p>
                  <p class="build-spell9-id">jusw</p>
                  <p class="build-spell10-id">jusw</p>
                </div>
                <div class="author-details">
                  <p class="author-name">2wdwasrdfweasf</p>
                  <p class="creation-date">2re23wrd32wrdc3ews</p>
                  <p class="updated-date">ewsdfcewsdzfcedw</p>
                </div>
              </div>`
                );
        });
    }   catch (error) {
        console.log(error);
        alert("Yep, something went wrong! (╬ಠ益ಠ)");
    }
};
query();