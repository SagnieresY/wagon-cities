export default function(state, action) {
  if (state = null) {
    return [];
  }
  switch (action.type) {
    case "SET_CITY":
      return action.payload;
    default:
      return state;
  }
}

// export default function(state = null, action) {
//   switch (action.type) {
//     case 'SET_CITY': {
//       return action.payload;
//       console.log("reducer")
//     }
//     default: {
//       return state;
//     }
//   }
// }
