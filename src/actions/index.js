// TODO: add and export your own actions
import cities from "../cities";

export function setCities() {
  return {
    type: "SET_CITIES",
    payload: cities
  };
}

// export function selectFlat(flat) {
//   return {
//     type: "SELECT_FLAT",
//     payload: flat
//   };
// }
