
const data = {
    
    "product":[
      {
          "id": 1,
          "Name": "КОМПЬЮТЕР OPTIMA GAME",
          "Processor": "ПРОЦЕССОР: INTEL CORE I5-11400",
          "Graphik": "ВИДЕОКАРТА: RTX 3050",
          "Ram": "ОПЕРАТИВНАЯ ПАМЯТЬ: 16GB",
          "Harddrive": "ТИП ЖЕСТКОГО ДИСКА: SSD",
          "Price": "2183.00 BYN"
      },
      {
          "id": 2,
          "Name": "КОМПЬЮТЕР BASIC ВК44827",
          "Processor": "ПРОЦЕССОР: AMD RYZEN 5 3600",
          "Graphik": "ВИДЕОКАРТА: RTX 3050 8GB",
          "Ram": "ОПЕРАТИВНАЯ ПАМЯТЬ: 2X8GB",
          "Harddrive": "ТИП ЖЕСТКОГО ДИСКА: SSD",
          "Price": "2204.00 BYN"
      },
      {
          "id": 3,
          "Name": "КОМПЬЮТЕР OPTIMA ВК45065",
          "Processor": "ПРОЦЕССОР: INTEL CORE I5-12400F",
          "Graphik": "ВИДЕОКАРТА: RTX 4060 8GB",
          "Ram": "ОПЕРАТИВНАЯ ПАМЯТЬ: 2X16GB",
          "Harddrive": "ТИП ЖЕСТКОГО ДИСКА: M2 SSD",
          "Price": "3535.00 BYN"
      },
      {
          "id": 4,
          "Name": "КОМПЬЮТЕР OPTIMA ВК45043",
          "Processor": "ПРОЦЕССОР: AMD RYZEN 5 5600",
          "Graphik": "ВИДЕОКАРТА: RTX 4070 12GB",
          "Ram": "ОПЕРАТИВНАЯ ПАМЯТЬ: 2X16GB",
          "Harddrive": "ТИП ЖЕСТКОГО ДИСКА: M2 SSD",
          "Price": "4648.00 BYN"
      },
      {
          "id": 5,
          "Name": "КОМПЬЮТЕР MASTER ВК45051",
          "Processor": "ПРОЦЕССОР: INTEL CORE I5-14400F",
          "Graphik": "ВИДЕОКАРТА: RTX 4070 SUPER 12GB",
          "Ram": "ОПЕРАТИВНАЯ ПАМЯТЬ: 2X16GB",
          "Harddrive": "ТИП ЖЕСТКОГО ДИСКА: M2 SSD",
          "Price": "6296.00 BYN"
      },
      {
          "id": 6,
          "Name": "КОМПЬЮТЕР MASTER ВК45052",
          "Processor": "ПРОЦЕССОР: INTEL CORE I5-13600KF",
          "Graphik": "ВИДЕОКАРТА: RTX 4070 SUPER 12GB",
          "Ram": "ОПЕРАТИВНАЯ ПАМЯТЬ: 2X16GB",
          "Harddrive": "ТИП ЖЕСТКОГО ДИСКА: M2 SSD",
          "Price": "6771.00 BYN"
      }
  ]
};

// Функция для сортировки товаров по возрастанию цены
function sortProductsAsc() {
    
    
    
    clearProductData(); // Очищаем данные перед сортировкой
    data.product.sort((a, b) => parseFloat(a.Price) - parseFloat(b.Price));
    renderProducts(); // Вызываем функцию для отображения отсортированных товаров

    document.getElementById("btndown").style.display = "none";
    document.getElementById("btnup").style.display = "block";
}

// Функция для сортировки товаров по убыванию цены
function sortProductsDesc() {
    
    clearProductData(); // Очищаем данные перед сортировкой
    data.product.sort((a, b) => parseFloat(b.Price) - parseFloat(a.Price));
    renderProducts(); // Вызываем функцию для отображения отсортированных товаров

    document.getElementById("btndown").style.display = "block";
    document.getElementById("btnup").style.display = "none";
}

// Функция для очистки данных перед сортировкой
function clearProductData() {
    for (let i = 0; i < data.product.length; i++) {
        const productBlock = document.getElementById(`product${i + 1}`);
        const info = productBlock.querySelector('.product-info');
        info.innerHTML = ''; // Удаляем все дочерние элементы из .product-info
    }
}

// Функция для заполнения блоков информацией из JSON
function renderProducts() {
    for (let i = 0; i < data.product.length; i++) {
        const product = data.product[i];
        const productBlock = document.getElementById(`product${i + 1}`);
        const info = productBlock.querySelector('.product-info');
        
        const name = document.createElement('h3');
        name.textContent = product.Name;
        info.appendChild(name);
        
        const processor = document.createElement('p');
        processor.textContent = product.Processor;
        info.appendChild(processor);
        
        const graphik = document.createElement('p');
        graphik.textContent = product.Graphik;
        info.appendChild(graphik);
        
        const ram = document.createElement('p');
        ram.textContent = product.Ram;
        info.appendChild(ram);
        
        const harddrive = document.createElement('p');
        harddrive.textContent = product.Harddrive;
        info.appendChild(harddrive);
        
        const price = document.createElement('h2');
        price.textContent = product.Price;
        info.appendChild(price);
    }
}

// Инициализация страницы
renderProducts();