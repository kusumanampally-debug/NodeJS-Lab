function Register() {
  return (
    <div>
      <h2>Student Registration</h2>
      <form>
        <input type="text" placeholder="Student Name" />
        <br /><br />
        <input type="email" placeholder="Email" />
        <br /><br />
        <input type="password" placeholder="Password" />
        <br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;