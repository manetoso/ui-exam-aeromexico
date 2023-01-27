# UI EXAM FOR AEROMEXICO
Develop by **Emmanuel Cortes**

- You can see this proyect here: [Harry Potter App](https://ui-exam-aeromexico.vercel.app/)
- [Portfolio](https://wwww.ecortes.dev)
- [GitHub](https://github.com/manetoso)
- [LinkedIn](https://www.linkedin.com/in/emma-cortes)

---

## TABLE OF CONTENT

1. <a href="#test-questions">TEST QUESTIONS</a>
2. <a href="#server">SERVER</a>
3. <a href="#run-dev">INSTRUCTIONS TO RUN THE APP IN DEVELOPMENT</a>
4. <a href="#run-tests">INSTRUCTIONS TO RUN TESTS</a>
5. <a href="#tasks-list">TASKS LIST</a>
6. <a href="#dependencies">DEPENDENCIES</a>

---

<h2 id="test-questions">TEST QUESTIONS</h2>

1. **¿Qué es lo que más te gustó de tu desarrollo?**
	> *Debido a que actualmenete se me dificultan menos los estilos y el responsive encuento mayor reto y satisfacción implementando animaciones e interacciones que llamen la atención del usuario.*
2. **Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras
hecho?**
	> *Creo que hay varias cosas que me hubiera gustado poder hacer, pero las más notorias serían añadir animaciones cuando los componentes se montan y se desmontan para hacer que la app tuviera una mejor fluides visual, implementar un toast para notificar al usuario de las diferentes acciones que hiciera, crear una forma de guardar las imágenes de nuevos personajes permanentemente y finalmente crear un formulario reactivo, que notifique visualmente al usuario de cualquier error al instante.*
3. **Descríbenos un pain point o bug con el que te hayas encontrado y como lo
solucionaste**
	> *Diría que con el único problema que me encontré fue con saber usar la librería <mark>json-server</mark> no sabía cómo desplegarla en producción por lo que decidí hacer otro repo donde se esté sirviendo el API solamente. Tampoco supe si la librería es capaz de almacenar y servir imágenes por lo que usé el método <mark>URL.createObjectURL</mark> para crear una url de la imágen seleccionada para que fuera visible mientras el navegador no fuera refrescado. Por último, al subir a producción hubo un error donde fallaba por una promesa con el formulario, lo solucioné dejando de usar la data que retornaba el API pues al final la data la creo antes de crear la request.*

---

<h2 id="server">SERVER</h2>

The app has **json-server** as a dependency to use it on development, but I create another repo and uploaded to **Vercel** to use it as a API on production.
[API link](https://harry-potter-api-psi.vercel.app/).

---

<h2 id="run-dev">INSTRUCTIONS TO RUN THE APP IN DEVELOPMENT</h2>

If you wonder how to run the app in development environment, simply create an .env file with this variable:
```
	REACT_APP_SERVER_URL=http://localhost:3001
```

And open 2 terminals and tap these commands on each window:
```
	npm start
	npm run json-server
```

---

<h2 id="run-tests">INSTRUCTIONS TO RUN TESTS</h2>

The tests where develop with [Jest](https://jestjs.io/) with the default configuration of [create-react-app](https://create-react-app.dev/).

1. Should be on the proyect folder.
2. Execute the command <mark>npm run test</mark>.

By this moment Jest will promp their cli, the keys that can be taped are:

1. <mark>a</mark> to run all tests.
2. <mark>f</mark> to run only failde tests.
3. <mark>q</mark> to quit the cli.
4. <mark>p</mark> to filter by test filename.
5. <mark>t</mark> to filter by test name.
6. <mark>Enter</mark> to trigger a test run.

There is a total of **7** test files, **2** for hooks and **5** for components. I am not that familiar with tests therefore there is a total of **22** tests. You can see the name of the files as a list pressing the <mark>a</mark> tap so you can be able to see the description of each test in that file when executing it.

---

<h2 id="tasks-list">TASKS LIST</h2>

With this list I track my work-flow when developing the app, you can confirm it checking my commits on the [repo](https://github.com/manetoso/ui-exam-aeromexico/commits/main). I pushed everything to main because I was working alone.

This list help me have a clear work-flow and avoiding to much refactorization of the same code on each commit, this is how I strucutre features when using agile methods.

- [x]  Set up SASS
- [x]  Set up Redux
- [x]  Set up json-server
- [x]  Build page layout
- [x]  Create Buttons component
- [x]  Create Card component
- [x]  Create CardContainer component
- [x]  Pull data to show on the cards adding all the interactions like loading spinner, filtering by students or staff
- [x]  Create Heading component
- [x]  Create Menu (navbar) component
- [x]  Create FavList component
- [x]  Create method to add and remove characters from the favlist with interactions and animations
- [x]  Create Modal component
- [x]  Create method to add a new Character
- [x]  Create tests
- [x]  Answer readme questions

---

<h2 id="dependencies">DEPENDENCIES</h2>

- [json-server](https://github.com/typicode/json-server).
- [sass](https://sass-lang.com/).
- [react-redux](https://redux.js.org/introduction/getting-started).
- [@reduxjs/toolkit](https://redux.js.org/introduction/getting-started).
- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/).
- [@testing-library/jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/).