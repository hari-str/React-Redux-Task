export default function validate(username, password) {
  let errors = {};

  //   console.log(errors);

  if (!username.trim()) {
    errors.username = "Username required!";
  }
  console.log(errors.username);

  if (!password.trim()) {
    errors.password = "Password required!";
  } else if (password.length < 6) {
    errors.password = "Password must 6 character or more";
  }

  console.log(errors.password);
  return errors;
}
