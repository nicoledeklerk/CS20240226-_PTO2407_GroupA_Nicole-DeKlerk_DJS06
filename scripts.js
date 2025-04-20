// A list of provinces:
const provinces = [
  'Western Cape', 
  'Gauteng', 'Northern Cape',
  'Eastern Cape',
  'KwaZulu-Natal', 
  'Free State'
];

// A list of names:
const names = [
  'Ashwin', 
  'Sibongile', 
  'Jan-Hendrik', 
  'SifIso', 
  'Shailen', 
  'Frikkie'
];

// Logs names & provinces to console //
names.forEach(name => console.log(name)); // loops through each element in names array and prints it out to console //
provinces.forEach(province => console.log(province)); // loops through each element in names array and prints it out to console //

/*
* The .forEach() function takes the console.log callback function & calls it once for each element in the array //
* The callback function defines what should happen to each element in the array //
*/ 


// Log each name with matching province //
names.forEach((name, index) => { // The callback function passed to names.forEach()
  const province = provinces[index];
  console.log(`${name} (${province})`);
});

// Uppercase province names //
const upperCaseProvinces = provinces.map(province => province.toUpperCase()); // implicit return //
console.log(upperCaseProvinces);

// Length of each name //
const nameLengths = names.map(name => name.length);

// Alphabetical sorting //
const alphabeticalProvinces = [...provinces].sort(); // Avoids array mutation and side-effects //
console.log(alphabeticalProvinces);

// Filtering Cape //
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces);
console.log('Remaining provinces:', filteredProvinces.length);

// Name containing 'S' //
const nameHasS = names.map(name =>
  name.split('').some(char => char === 'S')
);

// Object mapping names //
const name$Province = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

console.log((() => {
  // Log item names //
  products.forEach(item => console.log(item.product));

  // Filter products with short names //
  const shortProducts = products.filter(item => item.product.length <= 5);

  // Price manipulation using reduce //
  const pricedProducts = products
  .filter(item => typeof item.price === 'number' || item.price.trim() !== '')
  .map(item => ({ ...item, price: Number(item.price) }));

  const totalPrice = pricedProducts.reduce((total, item) => total + item.price, 0);

  // Concatenate product names using reduce //
  const concatenatedNames = products.reduce((acc, item) => acc + item.product, '');

  // Find price extremes //
  const prices = pricedProducts.map( item => item.price);
  const priceExtremes = `Highest: ${Math.max(...prices)}. Lowest: ${Math.min(...prices)}.`;
 // Object transformation
  const transformedProducts = products.map(({ product, price }) => ({
    name: product,
    cost: price
  }));

  // Return all the data as object //
  return {
    shortProducts,
    totalPrice,
    concatenatedNames,
    priceExtremes,
    transformedProducts
  };
})());

