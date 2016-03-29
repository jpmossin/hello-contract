
contract hello {

  string public greeting;
  address owner;

  event Greeting(address greeter, string greeting);

  function hello() {
    owner = msg.sender;
    greeting = "Hello, Ethereum :)";
  }
  
  function greet(string _greeting) {
    Greeting(msg.sender, _greeting);
    greeting = _greeting;
  }

  function kill() {
    if (msg.sender == owner) {
      selfdestruct(owner);
    }
  }

}
