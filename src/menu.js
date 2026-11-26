import {div, create, p,h, cover_hero} from "./utilities.js";
import file_minion_image from "./images/n23club-steak-503768.jpg";
import pasta_image from "./images/ritae-pasta-3547078.jpg";
import potatoes_image from "./images/mondgesicht-sweet-potatoes-8295778.jpg";
import poke_image from "./images/joannawielgosz-pasta-7209002.jpg";
export default function generate_menu(){
    const elems = [];
    // Each dish has text right beneath it - so alt="" should be used to not duplicate information.
    const dishes_arrays = [
        ["File Minion - 22$",file_minion_image,"",["panoram__item--long" ,"panoram__item--tall"]],
        ["Pasta Carbonara - 17$",pasta_image],
        ["Sweet potatoes - 11$",potatoes_image],
        ["Poke bowl - 13$",poke_image,"",["panoram__item--long"]],
    ]
    elems.push(...generate_cuisine_section(dishes_arrays));
    return elems;
};
function generate_cuisine_section(dishes_arrays){
    const section_cuisine = create("section",["section", "stack"]);
    const cuisine_text = div(["article"]);
    const heading = h(2,"Silvecia dishes",["article__header"]);
    cuisine_text.append(heading,p(`Sivecia - is one of the leaders in Fusion. It started deeply bonded with classic French cuisine but with time it has drifted away to let you taste diffrent visions and cuisines.Our chef is himself from Japan but he studied in best French University and has visited many countries. So you can choose variety of different tastes and choose which cuisine is the best!We have to present you our new autumn collection - refreshing and light taste. It was carefully designed by our su-chef Viesta Daldora. Please provide him with your rating so that he could continue to become better.`));
    const slogan = div(["slogan"]);
    slogan.append(p("Made to be shared",["slogan__title"]));
    const panorama = div(["panoram"]);
    panorama.append(...dishes_arrays.map((elem) => {
        const result = cover_hero(...elem);
        result.classList.add("panoram__item");
        return result;
}));
    section_cuisine.append(cuisine_text,slogan,panorama);
    return [section_cuisine];
}