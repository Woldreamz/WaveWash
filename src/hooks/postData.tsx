import axios from "axios";


interface postData {
    url: string
    body: any
}


export const fetchHandle = async (data: postData) => {
  const {url, body} = data
  return   axios
          .post(url, body, 
              {
                  headers:{"Content-Type": "application/json"}
              })
      
          .then( (response: any) =>  response)
}

// then(onfulfilled?: ((value: AxiosResponse<any, any>) => AxiosResponse<any, any> | PromiseLike<AxiosResponse<any, any>>) | null | undefined, onrejected?: ((reason: any) => any) | null | undefined): Promise<any>