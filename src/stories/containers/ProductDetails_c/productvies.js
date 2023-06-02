import React, { useState } from 'react';

const Productvies = () => {
// const [selectedAttributes, setSelectedAttributes] = useState({});
//   const [selectedVariant, setSelectedVariant] = useState(null);
//   const product = {
//     id: 1,
//     name: 'Product Name',
//     price: 9.99,
//     variants: [
//       { id: 0, color: 'Black', size: 'Small', image: 'black-small.jpg' },
//     //   { id: 1, color: 'Black', size: 'Medium', image: 'black-medium.jpg' },
//     //   { id: 2, color: 'Black', size: 'Small', image: 'black-large.jpg' },
//       { id: 3, color: 'White', size: 'Small', image: 'white-small.jpg' },
//       { id: 4, color: 'White', size: 'Medium', image: 'white-medium.jpg' },
//       { id: 5, color: 'White', size: 'Large', image: 'white-large.jpg' },
//     ],
//     attributes: [
//       { id: 1, name: 'Color', values: ['Black', 'White'] },
//       { id: 2, name: 'Size', values: ['Small', 'Medium', 'Large'] },
//     ],
//   };
//   const handleAttributeChange = (attributeId, value) => {
//     setSelectedAttributes({ ...selectedAttributes, [attributeId]: value });
//     setSelectedVariant(null);
//   };

// const handleAttributeChange = (attributeId, value) => {
//   // Create a copy of the currently selected attributes object
//   const newSelectedAttributes = { ...selectedAttributes };
//   // Update the value for the selected attribute
//   newSelectedAttributes[attributeId] = value;
//   // If this attribute has any dependent attributes, reset their values
//   const dependentAttributes = product.attributes.filter(
//     attribute => attribute.parentId === attributeId
//   );
//   dependentAttributes.forEach(dependentAttribute => {
//     newSelectedAttributes[dependentAttribute.id] = "";
//   });
//   // Update the state with the new selected attributes
//   setSelectedAttributes(newSelectedAttributes);
//   // Reset the selected variant
//   setSelectedVariant(null);
// };
//   const handleVariantClick = (variant) => {
//     setSelectedVariant(variant);
//   };
//   const availableVariants = product.variants.filter((variant) => {
//     return Object.keys(selectedAttributes).every((attributeId) => {
//       return variant[product.attributes.find((a) => a.id === parseInt(attributeId)).name.toLowerCase()] === selectedAttributes[attributeId];
//     });
//   });
  return (
    // <div>
    //   <h1>{product.name}</h1>
    //   <p>Price: ${product.price}</p>
    //   <div>
    //     {product.attributes.map((attribute) => (
    //       <div key={attribute.id}>
    //         <h2>Select a {attribute.name}:</h2>
    //         <select value={selectedAttributes[attribute.id] || ''} onChange={(e) => handleAttributeChange(attribute.id, e.target.value)}>
    //           <option value="">Select a {attribute.name}</option>
    //           {attribute.values.map((value) => (
    //             <option key={value} value={value}>
    //               {value}
    //             </option>
    //           ))}
    //         </select>
    //       </div>
    //     ))}
    //   </div>
    //   {selectedVariant ? (
    //     <div>
    //       <h3>Selected variant:</h3>
    //       <p>Color: {selectedVariant.color}</p>
    //       <p>Size: {selectedVariant.size}</p>
    //       <img src={selectedVariant.image} alt={selectedVariant.color + ' ' + selectedVariant.size} />
    //     </div>
    //   ) : (
    //     <div>
    //       <h2>Select a variant:</h2>
    //       {availableVariants.map((variant) => (
    //         <div key={variant.id} onClick={() => handleVariantClick(variant)}>
    //           <p>Color: {variant.color}</p>
    //           <p>Size: {variant.size}</p>
    //           <img src={variant.image} alt={variant.color + ' ' + variant.size} />
    //         </div>
    //       ))}
    //     </div>
    //   )}
    // </div>
<></>
  );
};
export default Productvies;
