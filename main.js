const animals = [
    {
      imageUrl: 'http://timberwolfdog.com/wp-content/uploads/2018/12/8341061516_1167d5605d_z1.jpg',
      name: 'Max',
      petType: 'dog',
      color: 'Color: Black and White',
      specialSkill: 'Imagine a baby tiger that will remain small,cute and not dangerous for the rest of its life. Yes, this Bengal cat looks like a baby tiger, if not cuter.',
    },
  
    {
      imageUrl: 'https://cdn.pixabay.com/photo/2019/02/21/10/24/wolf-dog-4011011__340.jpg',
      name: 'Jack',
      petType: 'dog',
      color: 'Color: Brown and White',
    },
    {
      imageUrl: 'https://www.schleich-s.com/media/catalog/product/cache/17/small_image/600x/41ff4e9c985d00a9b9c6d7454ded3dd0/1/4/14525_main_v13_tp.jpg',
      name: 'Tyrannosaurus',
      petType: 'dino',
      color: 'Color: Green and Brown',
    },
    {
      imageUrl: 'https://media.australianmuseum.net.au/media/dd/images/Some_image.width-1600.496365f.jpg',
      name: 'Archaeopteryx',
      petType: 'dino',
      color: 'Color: Green, Brown and Blue',
     },
    {
      imageUrl: 'https://i.pinimg.com/originals/70/80/bc/7080bcdbead0d6ea823b9393721d0de3.jpg',
      name: 'Lucy',
      petType: 'cat',
      color: 'Color: Brown and White',
    },
    {
      imageUrl: 'https://turntable.kagiso.io/images/Thor_the_cat_.width-800.jpg',
      name:'Sophie',
      petType: 'cat',
      color: 'Color: Black and Brown',
   
    },
  
    {
      imageUrl: 'http://www.tigersincrisis.com/wp-content/uploads/2014/01/siberian_tiger_1.jpg',
      name:'Siberian Tiger',
      petType: 'tiger',
      color: 'Color: Black Golden and White',
   
    },
  ];
  
  const printToDom = (toPrint, divId) => {
      document.getElementById(divId).innerHTML = toPrint
  }
  
  const animalBuilder = (animalsArray) => {
      let domString = ''
    for (let i = 0; i < animalsArray.length; i++) {
        const animal = animalsArray[i]
        domString += `
        <div class="card">
            <h2 class="animal-name">${animal.name}</h2>
            <img src=${animal.imageUrl} alt='Image of ${animal.name}' />
            <h2 class="animal-color">${animal.color}</h2>
            <h2 class="animal-petType">${animal.petType}</h2>
            <h2 class="animal-specialSkill">${animal.specialSkill}</h2>
            </div>
            
            `
        }
        printToDom(domString, 'animal-zone')
      }
    const buttonClick = (e) => {
      // figure out WHO this petType is for the button we clicked on
      const petType = e.target.id
      // only get those animals from the list of all the animals
      const selectedAnimals = []
      for (let i = 0; i < animals.length; i ++) {
          const animal = animals[i]
          if (animal.petType === petType) {
              selectedAnimals.push(animal)
          }
      }
  if (petType === 'all') {
      animalBuilder(animals);
    } else {
      animalBuilder(selectedAnimals);
    }
  // pass small list of animals back into the animal builder
  }
  
  document.getElementById('dog').addEventListener('click', buttonClick)
  document.getElementById('dino').addEventListener('click', buttonClick)
  document.getElementById('tiger').addEventListener('click', buttonClick)
  document.getElementById('cat').addEventListener('click', buttonClick)
  document.getElementById('all').addEventListener('click', buttonClick)
  
  animalBuilder(animals)
  
  
  
  
  
  
  