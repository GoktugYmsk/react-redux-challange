import Home from './components/Home';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { dark } from './components/altcomponents/Child1';
import { light } from './components/altcomponents/Child1';
import { setMessage } from './components/altcomponents/Child1';
import Contact from './components/Contact';
import Context from './components/Context';



function App() {
  const dispatch = useDispatch();
  const screen = useSelector((state) => state.activeTheme.theme);

  return (
    <div className={`App ${!screen ? 'appDark' : 'appLight'}`}>
      Home sayfası
      <button onClick={() => dispatch(dark())}>Koyu tema</button>
      <button onClick={() => dispatch(light())}>Açık tema</button>
      <input placeholder="Bir mesaj giriniz" onChange={(e) => dispatch(setMessage(e.target.value))} />
      <br />
      <br />
      {!screen ? "siyah ekran" : "beyaz ekran"}
      <br />
      <Home />
      <Contact/>
      <br/>
      <Context/>
    </div>
  );
}

export default App;
