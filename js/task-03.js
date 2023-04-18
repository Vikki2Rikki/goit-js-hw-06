const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryContainerEl = document.querySelector('.gallery');

const galleryList = images.map(({ url, alt }) => {
 return `<li class="gallery-item" style = "flex-basis: calc((100% - 2 * 16px) / 3);"><img class="gallery-img" src="${url}" alt="${alt}" width="100%" heigth = "auto"></li>`
}).join('');



galleryContainerEl.style.listStyle = 'none';
galleryContainerEl.style.marginTop = '0';
galleryContainerEl.style.marginBotoom = '0';
galleryContainerEl.style.paddingLeft = '0';
 galleryContainerEl.style.display = 'flex';
galleryContainerEl.style.gap = '16px';

galleryContainerEl.insertAdjacentHTML('beforeend', galleryList);


