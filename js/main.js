'use strict';

$(document).ready(function () {
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    pause: 2000,
    auto: true,
  });
});

const posts = [
  {
    title: 'Title of the posts 1',
    date: moment().format('ddd, MMMM Do YYYY'),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio   nam fuga minus perspiciatis inventore earum illum atque ea maiores facere possimus, officiis soluta ut aliquid repellendus nesciunt quidem sapiente neque?',
  },
  {
    title: 'Title of the posts 2',
    date: moment().format('ddd, MMMM Do YYYY'),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio   nam fuga minus perspiciatis inventore earum illum atque ea maiores facere possimus, officiis soluta ut aliquid repellendus nesciunt quidem sapiente neque?',
  },
  {
    title: 'Title of the posts 3',
    date: moment().format('ddd, MMMM Do YYYY'),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio   nam fuga minus perspiciatis inventore earum illum atque ea maiores facere possimus, officiis soluta ut aliquid repellendus nesciunt quidem sapiente neque?',
  },
  {
    title: 'Title of the posts 4',
    date: moment().format('ddd, MMMM Do YYYY'),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio   nam fuga minus perspiciatis inventore earum illum atque ea maiores facere possimus, officiis soluta ut aliquid repellendus nesciunt quidem sapiente neque?',
  },
  {
    title: 'Title of the posts 5',
    date: moment().format('ddd, MMMM Do YYYY'),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio   nam fuga minus perspiciatis inventore earum illum atque ea maiores facere possimus, officiis soluta ut aliquid repellendus nesciunt quidem sapiente neque?',
  },
];

const divPosts = $('div.posts');

posts.forEach((post) => {
  const template = `
    <article class="post">
      <h2>${post.title}</h2>
      <small>Publication date: ${post.date}</small>
      <p>
        ${post.content}
      </p>
      <a href="#">Read more</a>
    </article> `;

  divPosts.append(template);
});
