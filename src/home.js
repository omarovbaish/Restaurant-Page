import {div, create, p, img,h, card} from "./utilities.js";
import sivecia_facade from "./images/chiemseherin-facade-9641925.jpg";
import roberto_image from "./images/dendir-cook-4872956.jpg";
import karlos_image from "./images/phdtrung-chef-963195.jpg";
import viesta_image from "./images/tahhanjames00-james-tahhan-8020408.jpg"
export default function generate_home(){
    const elems = [];
    elems.push(...generate_history(sivecia_facade));
    // Each chef_image has text right beneath it - so alt="" should be used to not duplicate information in my opinion.
    const chefs = [
        ["Roberto Silvamy",roberto_image],
        ["Karlos Sivra", karlos_image],
        ["Viesta Daldora", viesta_image],
    ]
    elems.push(...generate_about_chefs(chefs));
    return elems;
}
function generate_history(reustarant_image_path){
    /* In future it may return more than one section. There is not always hierarchy*/
    const section_history = create("section",["section","section--dark"]);
    const hero = div(["cover","hero"]);
    const reustarant_image = img(reustarant_image_path,"",["cover__image"]);
    const hero_text = div(["hero__text","hero__text--attention", "article"]);
    const hero_header = h(2,"Sivecia history",["article__header"]);
    hero_text.append(hero_header,p("Sivecia is a one of the oldest reustaurants in the Europe. Founded in late 1789 in France it works until our days almost 200 years. "),
    p("It has gotten many rewards and have reputation one of the most prestige and ancient institutes. We have very high standarts and rigorous system that ve have been trying out for last 150 years."));
    hero.append(reustarant_image,hero_text);
    section_history.append(hero);
    return [section_history];
}
function generate_about_chefs(card_arrays){
    const section_chefs = create("section",["section","section--dark","media-gallery"]);
    const chefs_images = div(["media-gallery__images"]);
    chefs_images.append(...card_arrays.map((elem) => card(...elem)));
    const chefs_text = div(["article","media-gallery__body"]);
    const heading = h(2,"Sivecia chefs",["article__header"]);
    chefs_text.append(heading,
        p("We have many wonderful chefs from all around the world."),
        p("They have studied in best universities across the world and have plenty awards like Michlen stars. We have close ties with Le Cordon Bleu and our chefs regularly teach there and learn something new.")
    )
    section_chefs.append(chefs_images,chefs_text);
    return [section_chefs];
}