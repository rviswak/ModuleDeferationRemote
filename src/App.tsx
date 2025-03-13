import ReactDOM from "react-dom/client";
import Counter from "./counter";
import "./index.css";
import MediaCard from "./imgCard";
// import cv from "./UI.pdf"
// import Pdf from './documents/dummy.pdf'
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Counter />
    <MediaCard title="Remote 1" description="some description" />
    <MediaCard title="Remote 2" description="some description" />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);