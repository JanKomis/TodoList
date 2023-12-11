import { BeakerIcon } from "@primer/octicons-react";

//import Checkbox from "./components/reusable components/Checkbox";
//import Button from "./components/reusable components/Button";

export default function Footer() {
  return (
    <footer>
      <p>
        ©2023 by{" "}
        <a href="https://janhajek.com/" className="font-bold">
          Jan Hajek
        </a>
      </p>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, rerum perferendis ipsa odit provident illum ipsam molestiae incidunt nemo exercitationem repellendus facere quo eveniet dolor dicta? Corporis repellendus aut assumenda.</p>

      
      

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eius quidem fugit. Incidunt, mollitia sunt est magnam temporibus ut placeat porro impedit tempora vel odit omnis totam accusantium quisquam quae!</p>

      <div className="flex items-center">
        <input type="checkbox" id="checkbox" className="appearance-none peer hidden " />
        <label
          htmlFor="checkbox"
          className="appearance-none w-5 h-5 border-2 border-blue-500 rounded-md cursor-pointer"
        >
          <BeakerIcon className="w-3 h-3 text-blue-600 peer-checked:block hidden" />
        </label>
      </div>
    </footer>
  );
}
