import client from '../config/shopifyConfig';

export const getProducts = async () => {
  const productsQuery = client.graphQLClient.query(root => {
    root.addConnection('products', {args: {first: 5}}, product => {
      product.add('title');
      product.add('description');
    });
  });
  return new Promise((resolve, reject) => {
    client.graphQLClient
      .send(productsQuery)
      .then(result => {
        if (result.data.products.edges) {
          console.log('before resolve ', result.data.products.edges);
          resolve(result.data.products.edges);
        }
      })
      .catch(error => reject(error));
  });
};
