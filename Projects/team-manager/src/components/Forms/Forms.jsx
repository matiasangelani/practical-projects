import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlayer } from "../../redux/actions/actions";

const Forms = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    attack: "",
    defense: "",
    dribble: "",
  });

  const handlerChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(addPlayer(state));
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={state.name}
        onChange={handlerChange}
      />
      <input
        type="text"
        name="attack"
        placeholder="Attack"
        value={state.attack}
        onChange={handlerChange}
      />
      <input
        type="text"
        name="defense"
        placeholder="Defense"
        value={state.defense}
        onChange={handlerChange}
      />
      <input
        type="text"
        name="dribble"
        placeholder="Dribble"
        value={state.dribble}
        onChange={handlerChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Forms;
