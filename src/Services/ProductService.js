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
    Update(productId,product)
    {
        return this.client.put(`/product/update/${productId}`,product);
    }
    Delete(productId)
    {
        return this.client.delete(`/product/${productId}`);
    }
}

const Pdservice =new ProductService();
export default Pdservice;