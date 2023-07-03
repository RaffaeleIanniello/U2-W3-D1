
const petNameInput = document.getElementById("petName")

const ownerNameInput = document.getElementById("ownerName")

const speciesInput = document.getElementById("species")
const breedInput = document.getElementById("breed")

const animals = []

class Animals {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }
}

const renderList = function () {
 
  const animalsList = document.querySelector('ul')

  animalsList.innerHTML = ''

  animals.forEach((animals) => {

    const newLi = document.createElement('li')
  
    newLi.innerText = `${animals.petName} ${animals.ownerName} ${animals.species} ${animals.breed}`
  
    animalsList.appendChild(newLi)
  })
}

const formReference = document.querySelector('form')
formReference.addEventListener('submit', function (e) {
  e.preventDefault() 
  const newAnimals = new Animals(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value
  )

  console.log('ANIMALE CREATO', newAnimals)
  
  contacts.push(newAnimals)

  petNameInput.value = ""
  ownerNameInput.value = ""
  speciesInput.value = ""
  breedInput.value = ""
 
  renderList()
})