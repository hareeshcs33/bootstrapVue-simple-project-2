import axios from "axios";
import { todoData } from "../data/todo-data";

export const getProducts = ({ commit }) => {
  axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
    commit("SET_PRODUCTS", response.data);
  });
};

// export const todoList = ({commit}) => {
//     axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
//         .then(response => {
//             commit('SET_TODOS', response.data);
//         })
// }

export const todoList = ({ commit }) => {
  commit("SET_TODOS", todoData);
};
