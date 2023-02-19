import './App.css';
import useDocumentTitle from './useDocumentTitle';
import AddNavigation from './AddNavigation';

const blog_title = "James's Running Blog 🏃‍♂️"

export function Home() {

  useDocumentTitle(`Home | ${blog_title} `);

  return (
    <div className="Page">
      {AddNavigation()}
      <h1>Welcome to my running blog</h1>
    </div>
  )
}

export function About() {

  useDocumentTitle(`About Me | ${blog_title} `);

  return (
    <div className="Page">
      {AddNavigation()}
      <h1>About Me</h1>
    </div>
  )
}

export function Runs() {

  useDocumentTitle(`Runs | ${blog_title} `);

  return (
    <div className="Page">
      {AddNavigation()}
      <h1>Run Data</h1>
    </div>
  )
}

export function App() {
  return (
    <div className="Page">
      <Home />
    </div>
  );
}
