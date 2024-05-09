import { Button, DarkThemeToggle, Flowbite } from "flowbite-react";

import "./App.css";

function App() {
  return (
    <>
      <div className="dark:bg-black">
        <div>
          <Button>Click me</Button>
        </div>

        <h1 className="dark:text-white">DarkMode test</h1>

        <Flowbite>
          <DarkThemeToggle />
        </Flowbite>
      </div>
    </>
  );
}

export default App;
