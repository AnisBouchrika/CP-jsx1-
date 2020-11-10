
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <section>
      <h1 className="bigtitle">React js</h1>
      <h3>Login to learn</h3>
      <form class="form-inline" action="/action_page.php">
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
    </div>
    
    <button type="submit" class="btn-btn-default">Submit</button>
  </form>
  </section>
  );
}

export default App;
