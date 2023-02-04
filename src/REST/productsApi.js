const ENDPOINT = 'https://63befa87f5cfc0949b668e06.mockapi.io/api/jmrhadz/performance-exhaust-plus'

class ProductsApi {
    get = async () => {
        try {const resp = await fetch(ENDPOINT)
            const data = await resp.json()
            return data;
        } catch(e) {
            //console.log('fetch products had an issue', e)
        }
    }

    put = async (product) => {
        //console.log("api: updating", product.name)
        try {const resp = await fetch(`${ENDPOINT}/${product._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        return await resp.json()
        } catch(e) {
            //console.log('update product had an issue', e)
        }
    }
    
    post = async (product) => {
        //console.log("api: creating", product.name)
        try{const resp = await fetch(ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        return await resp.json()
        } catch(e) {
            //console.log('Creating product had an issue', e)
        }
    }

    delete = async (product) => {
        //console.log("api: deleting", product.name)
        try{const resp = await fetch(`${ENDPOINT}/${product._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await resp.json()
        } catch(e) {
            //console.log('Deleting product had an issue', e)
        }
    }
}

export const productsAPI = new ProductsApi();