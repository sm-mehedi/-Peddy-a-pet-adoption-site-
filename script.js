



const loadAllData = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(data => showAllData(data.pets));
        // .then(data=> displayDetails(data.pets) )
}

const showAllData = (categories) => {
    const showData = document.getElementById('ShowData1'); 
    categories.forEach(element => {
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div class="card bg-base-100 w-50 max-sm:w-30 shadow-xl items-center">
                <figure>
                    <img class="object-contain rounded-lg w-full p-5"
                        src="${element.image ? element.image : "N/A"}" 
                        alt="${element.pet_name ? element.pet_name : "N/A"}" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-black text-4xl">
                    ${element.pet_name ? element.pet_name : "N/A"}
                    </h2>
                    <h4 class="flex gap-1 items-center">
                        <img class="w-4" src="https://cdn-icons-png.flaticon.com/128/17405/17405288.png" alt=""> 
                        Breed: ${element.breed ? element.breed : "N/A"}
                    </h4>
                    <h4 class="flex gap-1 items-center">
                        <img class="w-4" src="https://img.icons8.com/?size=32&id=QHEtypHttkOo&format=png" alt="">
                        Birth: ${element.date_of_birth ? new Date(element.date_of_birth).getFullYear() : "N/A"}
                    </h4>
                    <h4 class="flex gap-1 items-center">
                        <img class="w-4" src="https://img.icons8.com/?size=50&id=11780&format=png" alt=""> 
                        Gender: ${element.gender ? element.gender : "N/A"}
                    </h4>
                    <h4 class="flex gap-1 items-center">
                        <img class="w-4" src="https://img.icons8.com/?size=80&id=44373&format=png" alt=""> 
                        Price: ${element.price ? element.price : "N/A"}
                    </h4>
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
                            <button onclick="displayDetails(${element.petId})" class="cardButton btn w-14 rounded-lg">Details</button>

                        </div>
                    </div>
                </div>
            </div>
        `;
        showData.append(modal);
    });
};


loadAllData();

const displayDetails = (Det) => {
    const index = Number(Det) - 1; 
    const url = `https://openapi.programming-hero.com/api/peddy/pets`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        if (data.pets && data.pets.length > index && index >= 0) { 
            const petPrice = data.pets[index].price; 
            const petBreed = data.pets[index].breed; 
            const petCategory = data.pets[index].category; 
            const petGender = data.pets[index].gender; 
            const petImage = data.pets[index].image; 
            const petDetails = data.pets[index].pet_details; 
            const petVaccine = data.pets[index].vaccinated_status; 
            displayDetails1(petBreed,petCategory,petDetails,petGender,petImage,petPrice,petVaccine);
        } else {
            console.error('Invalid index or no pets available at this index.');
        }
    })
    .catch(err => console.error('Error fetching pet details:', err));
}

const displayDetails1=(a,b,c,d,e,f,g)=>{
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
    console.log(g);

    const detailContainer = document.getElementById('modal-content')
    detailContainer.innerHTML=`
    <div class="border p-4 rounded-lg shadow-lg max-w-md mx-auto">
  
  <img src=${e} alt="Pet Image" class="w-full rounded-lg">

  
  <hr class="my-4 border-gray-300">

  <div class="space-y-2">
    <p><strong>Breed:</strong> ${a}</p>
    <p><strong>Price:</strong> ${f}</p>
    <p><strong>Gender:</strong> ${d}</p>
    <p><strong>Category:</strong> ${b}</p>
    <p><strong>Vaccine:</strong> ${g}</p>
  </div>


  <hr class="my-4 border-gray-300">

  
  <div class="mt-4">
    <p class="text-gray-600">${c}</p>
  </div>
</div>


    
    
    `
    document.getElementById('showModal1').click();

}
