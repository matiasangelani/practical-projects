import * as actions from "../actions/actions";
import data from "../../db/players.json";

const initialState = {
  players: data,
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_PLAYER:
      return {
        players: [...state.players, action.payload],
      };
    case actions.MODIFY_PLAYER:
      return {};
    case actions.DELETE_PLAYER:
      return {
        players: state.players.filter((p) => p.id !== action.payload),
      };
    case actions.CREATE_TEAMS:
      return {
        players: state.players.map((p) => {
          let att, def, dri;

          att = parseInt(p.attack);
          def = parseInt(p.defense);
          dri = parseInt(p.dribble);

          return {
            id: p.id,
            name: p.name,
            attack: p.attack,
            defense: p.defense,
            dribble: p.dribble,
            average: (att + def + dri) / 3,
          };
        }),
      };
    default:
      return state;
  }
};

export default teamReducer;
