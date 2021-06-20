function route(path){
    location.href = path;
}

function getProduct(productCategory, id, source){
    localStorage.setItem('viewProductCate', productCategory);
    localStorage.setItem('viewProductId', id);
    localStorage.setItem('source', source);
    window.location.href = 'productIntro.html?productCategory='+ productCategory +'&id='+ id;
  }

  function getCategory(category){
    localStorage.setItem('categoryIntro', category);
    window.location.href = 'category.html?category='+ category;      
  }