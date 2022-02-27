const ADD_PLAYER = "ADD_PLAYER";
const MODIFY_PLAYER = "MODIFY_PLAYER";
const DELETE_PLAYER = "DELETE_PLAYER";
const CREATE_TEAMS = "CREATE_TEAMS";

let id = 3;

const addPlayer = (player) => {
  id++;
  return {
    type: ADD_PLAYER,
    payload: { id, ...player },
  };
};

const modifyPlayer = () => ({ type: MODIFY_PLAYER });

const deletePlayer = (id) => ({ type: DELETE_PLAYER, payload: id });

const createTeams = () => ({ type: CREATE_TEAMS });

module.exports = {
  ADD_PLAYER,
  MODIFY_PLAYER,
  DELETE_PLAYER,
  CREATE_TEAMS,
  addPlayer,
  modifyPlayer,
  deletePlayer,
  createTeams,
};
