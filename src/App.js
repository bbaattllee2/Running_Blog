import './App.css';
import useDocumentTitle from './useDocumentTitle';
import AddNavigation from './AddNavigation';
import AddContact from './AddContact';

const blog_title = "James's Running Blog 🏃‍♂️"

export function Home() {

  useDocumentTitle(`Home | ${blog_title} `);

  return (
    <>
      <header>
        {AddNavigation()}  
      </header>
      <body class="">
        <h1>Welcome to my running blog</h1>
      </body>
      <footer>
        {AddContact()}
      </footer>
    </>
  )
}

export function About() {

  useDocumentTitle(`About Me | ${blog_title} `);

  return (
    <>
      <header>
        {AddNavigation()}
      </header>
      <body>
        <h1>About Me</h1>
      </body>
      <footer>
        {AddContact()}
      </footer>
    </>
  )
}

export function Runs() {

  useDocumentTitle(`Runs | ${blog_title} `);

  return (
    <>
      <header>
        {AddNavigation()}
      </header>
      <body className='Body'>
        <h1>Run Data</h1>
      </body>
      <footer>
        {AddContact()}
      </footer>
    </>
    
  )
}

export function App() {
  return (
    <div>
      <Home />
    </div>
  );
}
