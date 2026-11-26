import {div, create, p,img,h} from "./utilities.js";
import manager_image_path from "./images/whitesession-business-woman-2756210.jpg";
export default function generate_contacts(){
    const elems = [];
    elems.push(...generate_numbers_section());
    return elems;
}
function generate_numbers_section(){
    const section_numbers = create("section");
    const heading = h(2,"Our contacts")
    const numbers_row = div(["columns-group"]);
    numbers_row.append(
        p("Our whatsapp number: +1002345434"),
        p("Our telegramn number: +1002365464"),
        p("Our home number: +3452345434"),
    )
    const manager_information = div(["media"]);
    const manager_information_container = div(["media__container"]);
    const manager_image = img(manager_image_path,"Renala Alavion",["media__image"]);
    const manager_article = div(["media__body","article", "article--advertising"]);
    manager_article.append(
        h(3,"Head manager",["article__header"]),
        p("For business offers or if you want to talk to manager please contact our Head manager - Renala Alavion."),
        p("She works from 9 AM until 5 PM. So please do not call her at 1 AM."),
        p("If you prefer to write, send your proposal by email and we will get back to you as soon as possible. Our email is sevicia_group@gmail.com"),
        p("Please note that we do not work on weekends and public holidays.")
    )
    manager_information_container.append(manager_image,manager_article);
    manager_information.append(manager_information_container);
    section_numbers.append(heading,numbers_row,manager_information);
    return [section_numbers];
}