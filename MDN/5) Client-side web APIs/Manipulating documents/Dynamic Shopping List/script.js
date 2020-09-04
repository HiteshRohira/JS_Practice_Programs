let list = document.querySelector("ul");
      let input = document.querySelector("input");
      let addButton = document.querySelector("button");

      addButton.onclick = function () {
        
        let itemName = input.value;
        
        // input.value = "";
        
        let listItem = document.createElement("li");
        let span = document.createElement("span");
        let deleteButton = document.createElement("button");
        
        listItem.appendChild(span);
        listItem.appendChild(deleteButton);

        span.textContent = itemName;
        deleteButton.textContent = "X";

        list.appendChild(listItem);
        
        // deleteButton.addEventListener("click", () => listItem.remove());

        deleteButton.onclick = function() {
          listItem.remove();
        }
      }

      // addButton.addEventListener("click", () => addItem());

      input.focus();