import axios from "axios";

// Random user API
export default {
  getEmployeeList: function(language) {
    return new Promise((resolve, reject) => {
      axios.get("https://randomuser.me/api/?results=50&nat=us").then((res) => {
        const users = res.data.results;
        const results = users.map((user) => {
          return {
            id: user.id.value,
            firstname: user.name.first,
            lastname: user.name.last,
            email: user.email,
            image: user.picture.large,
            age: user.dob.age,
            registered: user.registered,
/*             location: {
              city: user.location.city,
              state: user.location.state,
              country: user.location.country,  
            } */
          };
        });
        resolve(results);
      }).catch((err) => reject(err));
    });
  },
  getRandomEmployee: function() {
    return axios.get("https://randomuser.me/api/?results=1&nat=us");
  },
};
