'use strict';

if (!window.location.href.includes('.html')) {
  window.location.href = window.location.href.includes('jpin730.github.io')
    ? '/jQuery-practice/index.html'
    : '/index.html';
}

if (window.location.href.includes('index.html')) {
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

  posts.forEach(function (post) {
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
}

const theme = $('#theme');

$('.to-red').click(function () {
  theme.attr('href', 'css/red.css');
});
$('.to-green').click(function () {
  theme.attr('href', 'css/green.css');
});
$('.to-blue').click(function () {
  theme.attr('href', 'css/blue.css');
});

const goToTop = $('.go-to-top');

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    goToTop.fadeIn();
  } else {
    goToTop.fadeOut();
  }
});

goToTop.click(function () {
  $('html, body').animate({ scrollTop: 0 });
});

const whoamiParr = $('.whoami p');
const usernameInput = $('#username');
$('.login form').submit(function (event) {
  event.preventDefault();
  const username = usernameInput.val().trim();
  let message;

  if (username.length > 0) {
    message = 'Welcome ' + username;
  } else {
    message = 'Please login';
  }

  usernameInput.val('');
  whoamiParr.html(message).css('textAlign', 'center');
});

if (window.location.href.includes('about.html')) {
  $('.accordion').accordion();
}

if (window.location.href.includes('clock.html')) {
  setInterval(function () {
    const time = moment().format('hh:mm:ss A');
    $('.clock').html(time);
  }, 1000);
}

if (window.location.href.includes('contact.html')) {
  $("form input[name='birth-date']").datepicker({
    dateFormat: 'mm/dd/yy',
  });

  $.validate({
    lang: 'en',
    errorMessagePosition: 'top',
    scrollToTopOnError: true,
  });
}
