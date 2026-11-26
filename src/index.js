import "./styles.css"
import generateHome from "./home.js";
import generateMenu from "./menu.js";
import generateContacts from "./contacts.js";
const toggles = {
    "home" : generateHome,
    "menu" : generateMenu,
    "contacts" : generateContacts,
}
const main_content = document.querySelector("[data-content]");
const main_content_toggles = document.querySelector("[data-content-controls]");
main_content_toggles.addEventListener("click",(e) => {
    const toggle_link = e.target.closest("[data-link]");
    if (toggle_link !== null){
        const new_content = toggles[toggle_link.dataset.link]?.();
        if (new_content !== undefined) replace_main_content(new_content);
    } 
})
function replace_main_content(new_content){
    main_content.replaceChildren(...new_content);
}
replace_main_content(generateHome());
const header = document.querySelector("[data-top-header]");
header.addEventListener("click",(e)=>{
    const button = e.target.closest("[data-top-header-close]");
    if (button !== null){
        header.classList.toggle("is-closed");
        button.ariaExpanded = button.ariaExpanded === "false";
    }
})
const book_table_dialog = document.querySelector("[data-book-table-dialog]");
const book_table_button = document.querySelector("[data-book-table]");
const book_table_dialog_form = document.querySelector("[data-book-table-dialog-form]");
book_table_button.addEventListener("click",(e)=>{
    book_table_dialog.showModal();
});
book_table_dialog.addEventListener("click",(e)=>{
    const close_button = e.target.closest("[data-book-table-dialog-close]");
    if (close_button !== null){
        book_table_dialog.close();
    }
});
book_table_dialog.addEventListener("submit",(e) => {
    e.preventDefault();
    book_table_dialog_form.reset();
    book_table_dialog.close();
});