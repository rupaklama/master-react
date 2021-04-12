import update from 'immutability-helper';
import { ProductFilters } from '../../store/reducers/productDetailsReducer';
import { upperCaseFirstLetter } from '../../utils/helper';
import Checkbox from '../Checkbox/Checkbox';
import './allProductsSideBar.style.css';

export interface ProductFiltersProps {
  productFilters: ProductFilters;
}

const AllProductsSideBar: React.FC<ProductFiltersProps> = ({ productFilters }) => {
  const handleFilterChange = (filterCategory: string, filterValue: string) => (value: boolean) => {
    // let newUserFilters: ProductFilters;
    // if (value) {
    //   newUserFilters = update(userFilters, { [filterCategory]: { $push: [filterValue] } });
    // } else {
    //   newUserFilters = update(userFilters, {
    //     [filterCategory]: {
    //       $set: userFilters[filterCategory as keyof ProductFilters].filter(val => val !== filterValue),
    //     },
    //   });
    // }
    // onUpdateUserFilters(newUserFilters);
  };

  const renderFilters = () => {
    // productFilters - is an Object with Array of strings
    // Using Object.keys to get keys of an Object which are our categories
    return Object.keys(productFilters).map(filterCategory => {
      // console.log(filterCategory); - gender, category & trends
      // keyof - we will use the keys of ProductFilters as a 'type' for our filterCategory
      const filterValues = productFilters[filterCategory as keyof ProductFilters];
      console.log(filterValues); // array of strings

      return (
        <div key={filterCategory} className='product-filter'>
          {/* func to make first letter to uppercase - Gender */}
          <p>{upperCaseFirstLetter(filterCategory)}</p>
          {filterValues.map(filterValue => {
            // console.log(filterValue); Men, Short etc
            return (
              <div key={filterValue} className='filter-checkbox'>
                <Checkbox onChange={handleFilterChange(filterCategory, filterValue)}>{filterValue}</Checkbox>
              </div>
            );
          })}
        </div>
      );
    });
  };
  return <div className='all-products-side-bar'>{renderFilters()}</div>;
};

export default AllProductsSideBar;
