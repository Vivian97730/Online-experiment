function route(path){
    location.href = path;
}

function getProduct(productCategory, id, source){
  // localStorage.setItem('viewProductCate', productCategory);
  // localStorage.setItem('viewProductId', id);
  if(source == 'preference'){
    localStorage.setItem('fromPreference', 1);
  }else if(source == 'allProduct'){
    localStorage.setItem('fromAllProduct', 1);
  }else if(source == 'category'){
    localStorage.setItem('fromCategory', 1);
  }else if(source == 'hotProduct'){
    localStorage.setItem('fromHotProduct', 1);
  }else if(source == 'recommend'){
    localStorage.setItem('fromRecommend', 1);
  }
  window.location.href = 'productIntro.html?productCategory='+ productCategory +'&id='+ id;
}

function getCategory(category){
  // localStorage.setItem('categoryIntro', category);
  window.location.href = 'category.html?category='+ category;      
}