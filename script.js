const loadAllData = (data)=>{
    fetch('https://openapi.programming-hero.com/api/peddy/pets')

    .then(res=> res.json())

    .then(data => showAllData(data.pets))
    
}



loadAllData();

const showAllData = (categories) => {
    const showData = document.getElementById('ShowData1'); 
    categories.forEach(element => {
       
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div class="card bg-base-100 w-50 shadow-xl">
                <figure>
                    <img class="object-contain rounded-lg w-full p-5"
                        src="${element.image? element.image:"N/A"}" 
                        alt="${element.pet_name? element.pet_name:"N/A"}" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-black text-4xl">
                    ${element.pet_name ? element.pet_name : "N/A"}
                    </h2>
                    
                    <h4>Breed: ${element.breed ? element.breed : "N/A"}</h4>

                     <h4>Birth: ${element.date_of_birth ? new Date(element.date_of_birth).getFullYear() : "N/A"}</h4>

                     <h4>Gender: ${element.gender ? element.gender : "N/A"}</h4>
                     <h4>Price: ${element.price ? element.price : "N/A"}</h4>
                     <hr>
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


