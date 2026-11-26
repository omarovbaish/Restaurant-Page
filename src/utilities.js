function create(elem,classes){
    const value = document.createElement(elem);
    if (classes !== undefined) value.classList.add(...classes);
    return value;
}
const div = create.bind(null,"div");
function p(textContent,classes){
    const para = create("p",classes);
    para.textContent = textContent;
    return para;
}
function h(rank, textContent,classes){
    const heading = create(`h${rank}`,classes);
    heading.textContent = textContent;
    return heading;
}
function img(src,alt="",classes){
    const image = create("img",classes);
    image.alt = alt;
    image.src = src;
    return image;
}
function card(textContent,src,alt,classes=[]){
    const card_elem = div(["card",...classes]);
    const image = img(src,alt,["card__image"])
    const card_text = div(["card__text"]);
    card_text.textContent = textContent;
    card_elem.append(image,card_text);
    return card_elem;
}
function cover_hero(textContent,src,alt,classes=[]){
    const hero_card = div(["cover","hero","hero--card",...classes]);
    const image = img(src,alt,["cover__image","cover__image--important"]);
    const hero_card_text = div(["hero__text"]);
    hero_card_text.append(p(textContent));
    hero_card.append(image,hero_card_text);
    return hero_card;
}
export {create, div, p, img, h, card, cover_hero};