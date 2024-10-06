const showSpinner = () => {
    const showData = document.getElementById('ShowData1');
    showData.innerHTML = `
        <div class="flex justify-center items-center h-full">
            <img src="./images/Rhombus.gif" alt="Loading..." />
        </div>
    `;
};

const hideSpinner = () => {
    const showData = document.getElementById('ShowData1');
    showData.innerHTML = ""; 
};

const loadAllData = () => {
    showSpinner(); 
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(data => {
            hideSpinner(); 
            showAllData(data.pets);
        })
        .catch(error => {
            hideSpinner(); 
            console.error('Error fetching data:', error);
        });
};

const showAllData = (categories) => {
    showSpinner(); 

    const showData = document.getElementById('ShowData1'); 
    showData.innerHTML = "";

    
    if (!categories || categories.length === 0) {
        const noDataImage = document.createElement('div');
        noDataImage.id = 'noDataDiv';
        noDataImage.className = 'flex flex-col items-center justify-center h-screen  md:translate-x-20 lg:translate-x-56'; 
        noDataImage.innerHTML = `
            <img src="./images/error.webp" alt="No Data" class="mb-4 max-w-full" />
            <h2 class="text-4xl font-bold text-center">No Information Available</h2>
        `;
    
        showData.appendChild(noDataImage);
        return; 
    }
    
    

    categories.forEach(element => {
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div class="card bg-base-100 w-50 max-sm:w-30 shadow-xl items-center">
                <figure>
                    <img class="object-contain rounded-lg w-full p-5"
                        src="${element.image ? element.image : 'N/A'}" 
                        alt="${element.pet_name ? element.pet_name : 'N/A'}" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-black text-4xl">
                    ${element.pet_name ? element.pet_name : 'N/A'}
                    </h2>
                    <h4 class="flex gap-1 items-center">
                        <img class="w-4" src="https://cdn-icons-png.flaticon.com/128/17405/17405288.png" alt=""> 
                        Breed: ${element.breed ? element.breed : 'N/A'}
                    </h4>
                    <h4 class="flex gap-1 items-center">
                        <img class="w-4" src="https://img.icons8.com/?size=32&id=QHEtypHttkOo&format=png" alt="">
                        Birth: ${element.date_of_birth ? new Date(element.date_of_birth).getFullYear() : 'N/A'}
                    </h4>
                    <h4 class="flex gap-1 items-center">
                        <img class="w-4" src="https://img.icons8.com/?size=50&id=11780&format=png" alt=""> 
                        Gender: ${element.gender ? element.gender : 'N/A'}
                    </h4>
                    <h4 class="flex gap-1 items-center">
                        <img class="w-4" src="https://img.icons8.com/?size=80&id=44373&format=png" alt=""> 
                        Price: ${element.price ? element.price : 'N/A'}
                    </h4>
                    <hr>
                    <div class="card-actions justify-end gap-3">
                        <div>
                            <button onclick="pictodiv('${element.image}')" class="cardButton btn w-14 color-white p-4 rounded-lg">
                                <img src="https://img.icons8.com/?size=80&id=gaPaLIcj658F&format=png" alt="">
                            </button>
                        </div>
                        <div>
                            <button onclick="adopt()" class="cardButton btn w-14 rounded-lg">Adopt</button>
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


const sortByPriceDescending = (pets) => {
    return pets.sort((a, b) => {
        const priceA = a.price || 0;
        const priceB = b.price || 0;
        return priceB - priceA; 
    });
}

const sortButtonHandler = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(data => {
            const sortedPets = sortByPriceDescending(data.pets);
            showAllData(sortedPets);
        });
}


document.getElementById('sortButtonId').addEventListener('click', sortButtonHandler);

const loadCategoryVideos = (id) => {
    showSpinner();
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
        .then(res => res.json())
        .then(data => {
            hideSpinner();
            showAllData(data.data); 
        })
        .catch(error => {
            hideSpinner(); 
            console.error('Error fetching category videos:', error);
        });
};

loadAllData();


const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log(error));
};

const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('category');
    categories.forEach(item => {
        const buttonContainer = document.createElement('div');
        buttonContainer.innerHTML = `
            <div class="flex-row justify-center items-center ml-3">
                <button onclick="loadCategoryVideos('${item.category}')" class="flex gap-7 items-center styled-button p-5 w-44">
                    <img class="w-6" src="${item.category_icon}" alt="${item.category} Image" class="mb-2">
                    <span class="text-2xl">${item.category}</span>
                </button>
            </div>
        `;

        categoryContainer.append(buttonContainer);
    });
};

loadCategories();


const pictodiv = (imageURL) => {
    const show = document.getElementById('ShowData2');
    const imageDiv = document.createElement('div');
    
    
    imageDiv.innerHTML = `
        <img class="rounded-lg w-full" src="${imageURL}" alt="Image" />
        <br>
    `;
    

    show.appendChild(imageDiv);
};


const adopt = () => {
    const dc = document.getElementById('modal-content1');
    dc.innerHTML = `
    <div class="p-6 bg-green-100 rounded-lg shadow-lg max-w-md mx-auto text-center">
        <h1 class="text-2xl font-bold text-green-700">Congratulations!</h1>
        <h1 class="text-2xl font-bold text-green-700">Adoption process successfull</h1>
        <img src="https://media.giphy.com/media/xUOxf0akiVBK6R8jGU/giphy.gif" alt="Congrats GIF">
        <div id="countdown" class="text-4xl mt-4">5</div> 
    </div>
    `;

   
    document.getElementById('adopt').click();
    count = 3; 
    countdown(); 
};

const countdown = () => {
    const countdownElement = document.getElementById("countdown");
    
    if (count >= 1) {
        countdownElement.textContent = count;
        count--;
        setTimeout(countdown, 1000);
        

    }
    else{
        document.getElementById('customModal1').close();
    }
};


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
