const loadAllData = (data)=>{
    fetch('https://openapi.programming-hero.com/api/peddy/categories')

    .then(res=> res.json())

    .then(data => showAllData(data.categories))
}

loadAllData();
const showAllData = (categories) => {
    const ShowData = document.getElementById('ShowData');
    categories.forEach(element => {
        console.log(element); // Log the current element
        console.log(element.pets); // Log the pets array

        if (element.pets && element.pets.length > 0) { // Check if pets exists and is not empty
            const modal = document.createElement('div');
            modal.innerHTML = `
                <div class="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="${element.pets[0].image}"
                            alt="Image" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            ${element.pets[0].pet_name}
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">Fashion</div>
                            <div class="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            `;
            ShowData.append(modal); // Append inside the loop to add all modals
        } else {
            console.warn("No pets available for this category:", element);
        }
    });
};

