import React from "react";
import ReactDOM from "react-dom/client"; // react-dom - библиотека для преобразования компонентов React в html
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // создает точку запуска
root.render(<App />);
