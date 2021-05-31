const products= document.querySelector('#product-link');
const company= document.querySelector('#company-link');
const connect = document.querySelector('#connect-link');
const dropDownProd=document.querySelector('#drop-down-products');
const dropDownComp=document.querySelector('#drop-down-company');
const dropDownConn=document.querySelector('#drop-down-connect');

//event listeners
products.addEventListener('click', dropDownProduct);
company.addEventListener('click', dropDownCompany);
connect.addEventListener('click', dropDownConnect);

//functions
function dropDownProduct(){
    dropDownProd.classList.toggle('active');
    if(dropDownComp.classList.contains('active')||dropDownConn.classList.contains('active')){
        dropDownComp.classList.remove('active');
        dropDownConn.classList.remove('active');
    }
}

function dropDownCompany(){
    dropDownComp.classList.toggle('active');
    if(dropDownProd.classList.contains('active')||dropDownConn.classList.contains('active')){
        dropDownProd.classList.remove('active');
        dropDownConn.classList.remove('active');
    }
}

function dropDownConnect(){
    dropDownConn.classList.toggle('active');
    if(dropDownProd.classList.contains('active')||dropDownComp.classList.contains('active')){
        dropDownProd.classList.remove('active');
        dropDownComp.classList.remove('active');
    }
}