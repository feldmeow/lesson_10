'use strict';
const adv = document.querySelector('.adv');
adv.remove();


const books = document.querySelectorAll('.book'),

  secondBookUl = document.getElementsByTagName('ul')[0],
  secondBookChapters = secondBookUl.getElementsByTagName('li'),
  fifthBookUl = document.getElementsByTagName('ul')[5],
  fifthBookChapters = fifthBookUl.getElementsByTagName('li'),
  sixthBookUl = document.getElementsByTagName('ul')[2],
  sixthBookChapters = sixthBookUl.getElementsByTagName('li'),
  thirdBookTitle = document.getElementsByTagName('a')[4];



secondBookChapters[9].after(secondBookChapters[2]);
secondBookChapters[2].after(secondBookChapters[5]);
secondBookChapters[3].after(secondBookChapters[7]);

fifthBookChapters[1].after(fifthBookChapters[9]);
fifthBookChapters[5].after(fifthBookChapters[3]);
fifthBookChapters[8].after(fifthBookChapters[6]);

const newChapter = document.createElement('li');
newChapter.textContent = 'Глава 8: За пределами ES6';
sixthBookChapters[8].after(newChapter);


thirdBookTitle.textContent = 'Книга 3. this и Прототипы Объектов';

document.body.style.backgroundImage = 'url(image/you-dont-know-js.jpg';

books[0].before(books[1]);
books[5].after(books[2]);
books[0].after(books[4]);










































