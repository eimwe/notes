# Notes

Progressive Web App made with Vue.js 3 + TypeScript along with VueUse composables, TailwindCSS + DaisyUI components and Pinia for state management.

[![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)](https://vuejs.org/) [![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Pinia](https://img.shields.io/badge/Pinia-ffd859?style=for-the-badge)](https://pinia.vuejs.org/) [![DaisyUI](https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/) [![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) [![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

## Demo

[![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=flat&logo=github&logoColor=white)](https://eimwe.github.io/notes/)

## Project Setup

1. Clone the repository
2. Run `npm ci` to install dependencies
3. Run one of the following commands:

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Preview the Production Build

```sh
npm run preview
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Format with [Prettier](https://prettier.io/)

```sh
npm run format
```

## Test environment

| Browser         | Version |
| --------------- | ------- |
| Google Chrome   | 114     |
| Mozilla Firefox | 114     |
| Safari          | 16      |

## Attributions

1. **Irene** for testing the project across numerous devices 🤝
2. [Danny](https://www.youtube.com/@MakeAppswithDanny) for inspiration by [their repo](https://github.com/dannyconnell/vue-composition-api-course);
3. [DarkLite1](https://stackoverflow.com/users/2304170/darklite1) for an answer why Object is possibly 'null' in [this stackoverflow reply](https://stackoverflow.com/a/65106524)**\***;
4. [jcalz](https://stackoverflow.com/users/2887218/jcalz) for clarifying TS extending interfaces in [their post](https://stackoverflow.com/a/75365744)**\***;
5. [Mohamed Raza](https://stackoverflow.com/users/11043676/mohamed-raza) for an elegant way of creating unique IDs in [their post](https://stackoverflow.com/a/64511988)**\***;
6. [neiya](https://stackoverflow.com/users/5548351/neiya) for solving _not assignable to parameter of type never_ error in TypeScript in [this post](https://stackoverflow.com/a/60741864)**\***;
7. [Chris Coyier](https://css-tricks.com/author/chriscoyier/) for the detailed guide on how to stick footer to the very bottom of the page in [this CSS-Tricks article](https://css-tricks.com/a-clever-sticky-footer-technique/). I abandoned this approach later on, but it serves its purpose well enough on early stages;
8. [kissu](https://stackoverflow.com/users/8816585/kissu) for [showing the way](https://stackoverflow.com/a/72232713) to work with dynamic components in Vue 3 Comosition API **\***. This technique was adopted by me at first, but I switched to the reusable components instead at the end;
9. [Adri HM](https://stackoverflow.com/users/10805872/adri-hm) for finding solution to their own issue on catching child events from RouterView perspective. [Here's the solution](https://stackoverflow.com/a/64619880)**\***;
10. [Raf1k](https://stackoverflow.com/users/15041521/raf1k) for a simple yet great solution on filtering arrays in [their stackoverflow post](https://stackoverflow.com/a/72530341)**\***;
11. [CodingIntrigue](https://stackoverflow.com/users/571194/codingintrigue) for introducing `findIndex` method to find and update values in an array of objects. [Here's their solution](https://stackoverflow.com/a/35206193)**\***;
12. [Aaron Beall](https://stackoverflow.com/users/2225281/aaron-beall) for a hint on a non-null operator in TS taken from [this reply](https://stackoverflow.com/a/52838793)**\***;
13. [Jasser Mark Arioste](https://reacthustle.com/about) for a solution on how to close DaisyUI Dropdown written in great detail in their [ReactHustle blog post](https://reacthustle.com/blog/how-to-close-daisyui-dropdown-with-one-click);
14. [Brian Bauman](https://stackoverflow.com/users/1803609/brian-bauman) for clarifying how the `activeElement` works in [their reply](https://stackoverflow.com/a/54933808)**\***;
15. [Tyler Potts](https://www.youtube.com/@TylerPotts) for inspiration in trying out PWA taken from [this video](https://youtu.be/5yuET794hDY);
16. [Shawn Wildermuth](https://www.youtube.com/@swildermuth) for an example of Vite PWA plugin usage [Shawn's YT video](https://youtu.be/YSGLw4T8BgQ);
17. [storyset](https://www.freepik.com/author/stories) for [the image](https://www.freepik.com/free-vector/add-notes-concept-illustration_8887086.htm#query=make%20notes&position=19&from_view=author) I used in this project's social preview.

**\*** - _all stackoverflow content is licensed by https://creativecommons.org/licenses/by-sa/4.0/_

## Contributing

If you get interested in this project, I'd be glad to see your contributions. Pull requests are welcome!
