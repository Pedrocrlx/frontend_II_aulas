import axios from "axios";

const fetchUsers = async () => {
  const response = await axios
    .get("https://6819013d5a4b07b9d1d1a725.mockapi.io/todo/users")
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
    return response;
};

export default fetchUsers;
