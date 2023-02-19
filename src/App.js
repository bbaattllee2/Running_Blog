import './App.css';
import useDocumentTitle from './useDocumentTitle';
import { DatePicker } from 'antd'

const blog_title = "James's Running Blog 🏃‍♂️"

export function Home() {

  useDocumentTitle(`Home | ${blog_title} `);

  return (
    <>
      <h1>{blog_title}</h1>
      <DatePicker />
    </>
  )
}

export function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}
