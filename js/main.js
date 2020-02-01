/* EXERCICIOS E TESTES
const gridSection = document.getElementsByClassName('grid-section');

console.log(gridSection);

const firstGridSection = gridSection[0];

console.log(firstGridSection);

const gridSectionAnimais = document.querySelector('.animais');

console.log(gridSectionAnimais);

const gridSections = document.querySelectorAll('.grid-section');

console.log(gridSections);

const primeiraLi = document.querySelector('li');
const primeiraUl = document.querySelector('ul');

console.log(primeiraLi);
console.log(primeiraUl);

const allInternalLinks = document.querySelectorAll('[href^="#"]');
console.log(allInternalLinks);
*/

//Retorne no conosole todas as imagens do site
const images = document.querySelectorAll('img');
console.log(images);

//Retorne no console apenas as imagens que começaram com a palavra imagem
const images2 = document.querySelectorAll('[src^="img/imagem"]');
console.log(images2);

//Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

//Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2AnimaisDescricao = document.querySelector('.animais-descricao h2');
console.log(primeiroH2AnimaisDescricao);

//Selecione o ultimo p do site
const ultimoP = Array.from(document.querySelectorAll('p')).pop();
console.log(ultimoP);