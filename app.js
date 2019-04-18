var productsCountEl = document.getElementById('products-count')
console.log(productsCountEl)

addToCartButtons = document.querySelectorAll(".add-to-cart")
console.log(addToCartButtons)

for(var i = 0; i < addToCartButtons.length; i++){
	addToCartButtons[i].addEventListener("click",function(e){
		e.preventDefault()
		var preProductsCount = +productsCountEl.textContent /*textContent вытянуть текстовое значение*/
		productsCountEl.textContent = preProductsCount + 1
	})
}