import axios from 'axios';
import cheerio from 'cheerio';

const GetListProducts = async (query) => {
    try {
        const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.carrefour.fr/s?q=${query}`);
        console.log(response);

        const $ = cheerio.load(response.data);

        // Sélectionner et extraire les titres des produits (par exemple, utiliser les bonnes classes CSS)
        const productTitles = [];

        // Exemple pour sélectionner des éléments (adapter le sélecteur selon la structure de la page)
        $('h2.product-title').each((index, element) => {
          const title = $(element).text();
          productTitles.push(title);
        });
    } catch(err) {
        
    }
};

const Products = {
    GetListProducts
};

export default Products;