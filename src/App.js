import './App.css';
import { createGlobalStyle } from 'styled-components'
import Nav from './componenets/Nav';
import Head from './componenets/Head';
import TodoTemplate from './componenets/todo/TodoTemplate';
import CalendarTemplate from './componenets/calendar/CalendarTemplate';
import { Route, Routes} from 'react-router-dom';
import Calendar from './componenets/calendar/Calendar';
import TodoHead from './componenets/todo/TodoHead';
import TodoList from './componenets/todo/TodoList';
import TodoCreate from './componenets/todo/TodoCreate';
import { TodoProvider } from './componenets/todo/TodoContext';


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
      <TodoProvider>
      <GlobalStyle/>
      <Head/>
      <Nav/>
      <Routes>
        <Route path="/" element={<TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>} />
        <Route path="/calendar" element={<CalendarTemplate>
          <Calendar />
        </CalendarTemplate>} />
      </Routes>
      </TodoProvider>
    </div>
  );
}

export default App;
