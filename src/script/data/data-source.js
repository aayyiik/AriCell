
class DataSource {
static searchPhone (keyword) {
  return fetch(`http://phone-specs-api.azharimm.dev/search?query=${keyword}`)
          .then(response => {
            return response.json();
          })
          .then(responseJson =>{
            if(responseJson.data.phones) {
                return Promise.resolve(responseJson.data.phones);
            }else{
              return Promise.reject(`${keyword} is not found`);
            }
          });
} 
}

export default DataSource;