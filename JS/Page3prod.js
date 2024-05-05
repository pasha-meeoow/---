
const data = {
    
    "product":[
      {
          "id": 1,
          "Name": "КОМПЬЮТЕР EXTREME ВК45070",
          "Processor": "ПРОЦЕССОР: INTEL CORE I7-14700KF",
          "Graphik": "ВИДЕОКАРТА: RTX 4080 SUPER 16GB",
          "Ram": "ОПЕРАТИВНАЯ ПАМЯТЬ: 2X32GB",
          "Harddrive": "ТИП ЖЕСТКОГО ДИСКА: M2 SSD",
          "Price": "14990.00 BYN"
      },
      {
          "id": 2,
          "Name": "КОМПЬЮТЕР ULTRA Z690",
          "Processor": "ПРОЦЕССОР: INTEL CORE I9-12900K",
          "Graphik": "ВИДЕОКАРТА: RTX 4080",
          "Ram": "ОПЕРАТИВНАЯ ПАМЯТЬ: 2X16GB",
          "Harddrive": "ТИП ЖЕСТКОГО ДИСКА: SSD",
          "Price": "9231.00  BYN"
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
