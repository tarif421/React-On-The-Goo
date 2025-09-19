import { Suspense } from "react";
import "./App.css";
import Countries from "./Components/Countries/Countries";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());

function App() {
  return (
    <>
      <h2>React on the go</h2>
      <Suspense
        fallback={
          <p>
            <span class="loading loading-bars loading-xl"></span>
          </p>
        }
      >
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
