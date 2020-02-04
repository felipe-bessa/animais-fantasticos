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
************************************************************************

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

//Adicione a classe ativo a todos os itens do menu
const menuItems = document.querySelectorAll('.menu ul li');
menuItems.forEach((item) => item.classList.add('ativo'));

//Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItems.forEach((item, index) => {
  if(index >= 1) {
    item.classList.remove('ativo');
  }
});

//Verifique se as imagens tem o atributo "alt"
//OBS as Imagens já foram selecionadas previamente em exercicio anterior
images.forEach((image) => {
  console.log(image.hasAttribute('alt'));
});

//Modifique o "href" do link externo do menu
const linkExterno = document.querySelector('a[href^="http"]');
linkExterno.setAttribute('href', 'https://www.google.com');
*/

//Selecionando as imagens dos animais e as areas de conteúdo para fazer a páginação dinâmica
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

//Função para habilitar uma descrição de um animal em função de um número.
function activeTab(index) {
  tabContent.forEach((section) => {
    section.classList.remove('ativo');
  });
  tabContent[index].classList.add('ativo');
}

tabMenu.forEach((item, index) => {
  item.addEventListener('click', () => {
    activeTab(index);
  });
});