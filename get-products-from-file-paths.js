
process.stdin.on('data', chunk => {
  let changedProducts = new Set()
  let transformedProducts =  chunk.toString().trim().split(" ")
  transformedProducts.forEach(product => {
    let splittedStr = product.split("/")
    const productName = splittedStr[1]

    if (!changedProducts.has(splittedStr[0] === 'developers.cloudflare.com')) {
      changedProducts.add('developers.cloudflare.com')
    }
  
    if (!changedProducts.has(productName)) {
        changedProducts.add(productName)
    }
  })

  let chandedProductsArr = [...changedProducts]

  chandedProductsArr.forEach(prod => {
    process.stdout.write(`${prod}\n`);
  })
})
  
process.stdin.on('end', () => process.exit(0))