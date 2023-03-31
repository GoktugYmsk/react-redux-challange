import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dark, light } from "./altcomponents/Child1";

function Home() {
  const dispatch = useDispatch();
  const screen = useSelector((state) => state.activeTheme.theme);

  return (
    <div className={`homeContainer ${!screen ? 'homeDark' : 'homeLight'}`}>
      Home sayfası
      <button onClick={() => dispatch(dark())}>Koyu tema</button>
      <button onClick={() => dispatch(light())}>Açık tema</button>
      <br />
      <br />
      {!screen ? "siyah ekran" : "beyaz ekran"}
      <br />
    </div>
  );
}

export default Home;
