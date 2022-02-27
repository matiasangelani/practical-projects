import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTeams } from "../../redux/actions/actions.js";
import Player from "../Player/Player.jsx";
//import players from "../../db/players.json";

const Players = () => {
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();

  const handlerClick = () => {
    // const modifyPlayers = players.map((p) => {
    //   let att, def, dri;

    //   att = parseInt(p.attack);
    //   def = parseInt(p.defense);
    //   dri = parseInt(p.dribble);
    //   console.log(att, def, dri);

    //   console.log(p.average);
    //   return {
    //     id: p.id,
    //     name: p.name,
    //     attack: p.attack,
    //     defense: p.defense,
    //     dribble: p.dribble,
    //     average: (att + def + dri) / 3,
    //   };
    // });
    // console.log(modifyPlayers);
    dispatch(createTeams());
  };

  return (
    <>
      {players?.map((p) => (
        <Player key={p.id} {...p} />
      ))}
      <button onClick={handlerClick}>Create teams</button>
    </>
  );
};

export default Players;
