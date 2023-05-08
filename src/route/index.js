// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Україна, м.Київ, вул. Незалежності',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
      },

      experience: {
        title: 'Other experience',
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
      },
    },
    footer,
  })
})

router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'NPM',
          point: 2,
          isTop: false,
        },
        {
          name: 'Handlebars',
          point: 7,
        },
        {
          name: 'VS code',
          point: 10,
          isTop: true,
        },
        {
          name: 'Git',
          point: 5,
        },
        {
          name: 'Terminal',
          point: 7,
        },
        {
          name: 'Figma',
          point: 9,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Чай',
          isMain: false,
        },
        {
          name: 'Кава',
          isMain: false,
        },
        {
          name: 'Сік',
          isMain: true,
        },
        {
          name: 'Молоко',
          isMain: true,
        },
      ],
    },
    footer,
  })
})

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'дитячий садок',
          isEnd: true,
        },
        {
          name: 'школа',
          isEnd: true,
        },
        {
          name: 'технікум',
          isEnd: false,
        },
        {
          name: 'вечірня школа',
          isEnd: false,
        },
        {
          name: 'коледж',
          isEnd: false,
        },
        {
          name: 'університет',
          isEnd: true,
        },
      ],
      certificates: [
        {
          name: 'фізкультура',
          id: '3',
        },
        {
          name: 'історія',
          id: '5',
        },
        {
          name: 'географія',
          id: '12',
        },
      ],
    },
    footer,
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Dev',
          company: {
            name: 'IT-brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '06.03.2023',
            to: null,
          },
          profectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'Nedo.js',
                },
                {
                  name: 'HTML/CSS',
                },
              ],
              awards: [
                {
                  name: 'background verification...',
                },
                {
                  name: 'SEO optimized pages...',
                },
              ],
              stackAmount: 12,
              awardAmount: 32,
            },
          ],
        },
      ],
    },
    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
