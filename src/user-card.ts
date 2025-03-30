// user-card.ts
import { of } from "rxjs";

class UserCard extends HTMLElement {
  constructor() {
    super();

    // attach Shadow DOM
    const shadow = this.attachShadow({ mode: "open" });

    // create elements
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "user-card");

    const name = this.getAttribute("name") || "Brak imienia";

    wrapper.innerHTML = `
        <style>
          .user-card {
            padding: 10px;
            border-radius: 8px;
            background-color: #f4f4f4;
            font-family: sans-serif;
            border: 1px solid #ddd;
          }
        </style>
        <p style="color: black">👤 Użytkownik: <strong>${name}</strong></p>
      `;

    // attach elements
    shadow.appendChild(wrapper);
    // main.ts

    const observable = of(1, 2, 3);

    observable.subscribe((value) => console.log(`Wartość: ${value}`));
  }
}

// define component
customElements.define("user-card", UserCard);
