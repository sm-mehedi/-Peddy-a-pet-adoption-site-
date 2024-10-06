const loadAllData = (data)=>{
    fetch('https://openapi.programming-hero.com/api/peddy/pets')

    .then(res=> res.json())

    .then(data => showAllData(data.pets))
    // .then(data => console.log(data.pets))
}



loadAllData();

const showAllData = (categories) => {
    const showData = document.getElementById('ShowData'); 
    categories.forEach(element => {
       
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div class="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img class="object-contain rounded-lg w-full p-5"
                        src="${element.image? element.image:"undefined"}" 
                        alt="${element.pet_name? element.pet_name:"undefined"}" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                    ${element.pet_name ? element.pet_name : "undefined"}
                    </h2>
                    <p>${element.pet_details?element.pet_details:"undefined"}</p>
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline">${element.category}</div>
                        <div class="badge badge-outline">Price: $${element.price}</div>
                    </div>
                </div>
            </div>
        `;
        showData.append(modal);
    });
};


