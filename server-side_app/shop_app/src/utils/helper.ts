import { ProductFilters } from '../store/reducers/productDetailsReducer';

// This function will make first letter of a word to UPPERCASE - Gender
export const upperCaseFirstLetter = (str: string) => str[0].toUpperCase() + str.substr(1).toLowerCase();

// converting our 'filters' to an array of categories
export const convertFiltersToCategories = (filters: ProductFilters) => {
  // to hold our categories
  let categories: string[] = [];

  Object.keys(filters).forEach(filterCategory => {
    const categoryFilters = filters[filterCategory as keyof ProductFilters];
    // if categoryFilters array has values then we will add to our array above
    // concat() method is used to merge two or more arrays & returns a new array
    if (categoryFilters.length) categories = categories.concat(categoryFilters);
  });

  return categories;
};

export const omit = (obj: any, keysToOmit: string[]) => {
  const newObj: any = {};

  Object.keys(obj).forEach(key => {
    if (!keysToOmit.includes(key)) newObj[key] = obj[key];
  });

  return newObj;
};
