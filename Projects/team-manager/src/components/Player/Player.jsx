import React from "react";
import { useDispatch } from "react-redux";
import { deletePlayer } from "../../redux/actions/actions";

const Player = (props) => {
  const dispatch = useDispatch();

  const handlerClick = () => {
    dispatch(deletePlayer(props.id));
  };

  //console.log(props);

  return (
    <div>
      <button onClick={handlerClick}>X</button>
      <h3> {props.name} </h3>
      <div>
        <p>Att: {props.attack} </p>
        <p>Def: {props.defense}</p>
        <p>Dri: {props.dribble}</p>
      </div>
    </div>
  );
};

export default Player;
