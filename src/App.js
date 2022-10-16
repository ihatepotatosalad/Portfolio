
import './App.css';

function App() {
  return (

    <div class="full-screen-container">
      <div class='login-container'>
        <h1 class='login-title'>Welcome</h1>
        <form class='form'>
          <div class='input-group'>
            <label for='email'>Email</label>
            <input type='email' name='email' id='email'></input>
            <span class='msg'>Valid Email</span>
          </div>
          <div class='input-group'>
            <label for='password'>Password</label>
            <input type='password' name='password' id='password'></input>
            <span class='msg'>Incorrect Password</span>
          </div>
          <button type='submit' class='login-button'>Login</button>
        </form>

      </div>

    </div>
  );
}

export default App;
