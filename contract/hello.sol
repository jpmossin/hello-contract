
contract hello {

  string public greeting;

  event Greeting(address greeter, string _greeting);

  function hello() {
    greeting = "Hello :)";
  }
  
  function greet(string _greeting) {
    Greeting(msg.sender, _greeting);
    greeting = _greeting;
  }

}
