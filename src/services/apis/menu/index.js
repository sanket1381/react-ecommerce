import {categorydata,subcategorydata} from '../../dummyData/Menu'

export const getCategoryData = async () => {
	try {
	  return categorydata;
	} catch (e) {
	  console.log(e);
	}
  };


  export const getSubCategoryData = async () => {
	try {
	  return subcategorydata;
	} catch (e) {
	  console.log(e);
	}
  };