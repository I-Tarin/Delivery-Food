const restorant = 'food-band'

const renderItems = (data) => {
  console.log(data);

  /* В каждой функции renderItems полученный массив необходимо перебрать и вывести в консоль каждый элемент массива по очереди.*/
  data.forEach((elem) => {
    console.log(elem);
  })
}

fetch(`./db/${restorant}.json`)
  .then((response) => response.json())
  .then((data) => {
    renderItems(data)
  })
  .catch((error) => {
    console.log(error);
  })