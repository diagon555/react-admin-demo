import ProductIcon from '@material-ui/icons/Collections';
import ProductList from './ProductList';
import ProductEdit from './ProductEdit';
import ProductCreate from './ProductCreate';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    list: ProductList,
    create: ProductCreate,
    edit: ProductEdit,
    icon: ProductIcon,
};
