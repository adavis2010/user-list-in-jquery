const url = "http://localhost:32405/api/users";

const userlist = () => {
  return $.getJSON(url);

}

const userDetail = (id) => {

  return $.getJSON(`${url}/${id}`); //will get one user back
}