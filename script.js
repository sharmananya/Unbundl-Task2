document.addEventListener("DOMContentLoaded", function () {
    const chocolateList = document.getElementById("chocolate-list");
    const selectedChocolates = document.getElementById("selected-chocolates");
    const totalPriceElement = document.getElementById("total-price");

    const chocolates = [
        { id: 1, name: "Milk Chocolate", price: 2.50 },
        { id: 2, name: "Dark Chocolate", price: 3.00 },
        { id: 3, name: "White Chocolate", price: 2.75 },
        { id: 4, name: "Caramel-filled Chocolate", price: 3.50 },
        { id: 5, name: "Hazelnut Chocolate", price: 3.75 },
        { id: 6, name: "Mint Chocolate", price: 3.25 },
        { id: 7, name: "Orange-flavored Chocolate", price: 3.00 },
        { id: 8, name: "Almond Chocolate", price: 4.00 },
        { id: 9, name: "Coconut Chocolate", price: 3.50 },
        { id: 10, name: "Raspberry-filled Chocolate", price: 4.25 },
        { id: 11, name: "Peanut Butter Chocolate", price: 4.00 },
        { id: 12, name: "Strawberry-filled Chocolate", price: 4.50},
    ];

    chocolates.forEach(chocolate => {
        const chocolateElement = document.createElement("div");
        chocolateElement.className = "chocolate";
        chocolateElement.textContent = chocolate.name + " - $" + chocolate.price.toFixed(2);

        chocolateElement.addEventListener("click", () => toggleChocolate(chocolate));

        chocolateList.appendChild(chocolateElement);
    });

    let selectedChocolatesArray = [];

    function toggleChocolate(chocolate) {
        const index = selectedChocolatesArray.findIndex(choc => choc.id === chocolate.id);

        if (index === -1) {
            if (selectedChocolatesArray.length < 8) {
                selectedChocolatesArray.push(chocolate);
            } else {
                alert("You can only select up to 8 chocolates.");
            }
        } else {
            selectedChocolatesArray.splice(index, 1);
        }

        updateSelectedChocolates();
        updateChocolateHighlights();

    }

    function updateChocolateHighlights() {
        const chocolateElements = document.querySelectorAll(".chocolate");
    
        chocolateElements.forEach((element, index) => {
            const chocolate = chocolates[index];
    
            if (selectedChocolatesArray.includes(chocolate)) {
                element.classList.add("selected");
            } else {
                element.classList.remove("selected");
            }
        });
    }

    function updateSelectedChocolates() {
        selectedChocolates.innerHTML = "";
        let totalPrice = 0;

        selectedChocolatesArray.forEach(chocolate => {
            const listItem = document.createElement("li");
            listItem.textContent = chocolate.name;
            selectedChocolates.appendChild(listItem);

            totalPrice += chocolate.price;
        });

        totalPriceElement.textContent = "Total Price: $" + totalPrice.toFixed(2);
    }
    
});
