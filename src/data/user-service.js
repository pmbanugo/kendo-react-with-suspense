export async function getUsers(count = 10) {
  const url = `https://randomuser.me/api/?results=${count}`;

  const response = await fetch(url);
  const data = await response.json();
  return data.results.map(({ name, dob, gender, location }) => ({
    name: `${name.first} ${name.last}`,
    age: dob.age,
    gender: gender,
    country: location.country,
  }));
}

export const fetchUsers = (count = 10) => {
  return wrapPromise(getUsers(count));
};

// Note: this is a simplified implementation.
function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

export default getUsers;
