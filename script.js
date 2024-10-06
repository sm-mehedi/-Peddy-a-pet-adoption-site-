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
            <div class="card bg-base-100 w-50 max-sm:w-30 shadow-xl items-center">
                <figure>
                    <img class="object-contain rounded-lg w-full p-5"
                        src="${element.image? element.image:"N/A"}" 
                        alt="${element.pet_name? element.pet_name:"N/A"}" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-black text-4xl">
                    ${element.pet_name ? element.pet_name : "N/A"}
                    </h2>
                    
                 
                    <h4 class="flex gap-1 items-center"><img class="w-4" src="https://cdn-icons-png.flaticon.com/128/17405/17405288.png"  alt=""> Breed: ${element.breed ? element.breed : "N/A"}</h4>

                    

                     <h4 class="flex gap-1 items-center"><img class="w-4" src="https://img.icons8.com/?size=32&id=QHEtypHttkOo&format=png"  alt="">
                     Birth: ${element.date_of_birth ? new Date(element.date_of_birth).getFullYear() : "N/A"}</h4>

                     <h4 class="flex gap-1 items-center"><img class="w-4" src="https://img.icons8.com/?size=50&id=11780&format=png"  alt="">Gender: ${element.gender ? element.gender : "N/A"}</h4>
                     <h4 class="flex gap-1 items-center"><img class="w-4" src="https://img.icons8.com/?size=80&id=44373&format=png"  alt="">Price: ${element.price ? element.price : "N/A"}</h4>
                     <hr>
                    <div class="card-actions justify-end gap-3">
                        <div>
                            <button class="cardButton btn w-14 color-white p-4 rounded-lg">
                                <img src="https://img.icons8.com/?size=80&id=gaPaLIcj658F&format=png" alt="">
                            </button>
                        </div>
                        <div>
                            <button class="cardButton btn w-14 rounded-lg">Adopt</button>
                        </div>
                        <div>
                            <button class="cardButton btn w-14 rounded-lg">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        showData.append(modal);
    });
};


