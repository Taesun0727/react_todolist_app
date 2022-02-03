import './App.css';
import { createGlobalStyle } from 'styled-components'
import Template from './componenets/Template';
import Nav from './componenets/Nav';
import Head from './componenets/Head';
import TodoTemplate from './componenets/todo/TodoTemplate';
import CalendarTemplate from './componenets/calendar/CalendarTemplate';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Calendar from './componenets/calendar/Calendar';
import TodoHead from './componenets/todo/TodoHead';


const GlobalStyle = createGlobalStyle`
  body {
    background: #FBF8F1;
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Head/>
      <Nav/>
      <Routes>
        <Route path="/" element={<TodoTemplate>
          <TodoHead />
        </TodoTemplate>} />
        <Route path="/calendar" element={<CalendarTemplate>
          <Calendar />
        </CalendarTemplate>} />
      </Routes>
    </div>
  );
}

export default App;
