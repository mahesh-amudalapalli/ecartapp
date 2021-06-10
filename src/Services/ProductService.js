import appclient from '../appClient/api.client.js'

class ProductService
{
    constructor()
    {
        this.client=appclient;
    }
    GetAll()
    {
        return this.client.get('/product');
    }
    Create(product)
    {
        return this.client.post('/product/create',product);
    }
}

const Pdservice =new ProductService();
export default Pdservice;