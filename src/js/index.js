import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "https://mugenmonkey.com/api/v0/ds3_builds";

const query = async function () {
    try {
        const response = await fetch("https://mugenmonkey.com/api/v0/ds3_builds?per_page=100&page=100"
        );
        const data = await response.json();
        data.results.forEach(build => {
            DOMSelectors.grid.insertAdjacentHTML(
                "beforeend",

                );
        });
    }   catch (error) {
        console.log(error);
        alert("Yep, something went wrong! (╬ಠ益ಠ)");
    }
};
query();