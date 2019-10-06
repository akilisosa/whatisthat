 async function ajax(){
         try {
             const data = await postData('https://gateway.watsonplatform.net/visual-recognition/api/v4/analyze?version=2019-02-11');
             console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
         }
         catch (error) {
             console.error(error);
         }
     }
    


     async function postData(url = '') {

        const formData = new FormData();
        const fileField = document.querySelector('input[type="file"]');
        
        
        formData.append('collection_ids', '331eced2-d224-4f29-8132-143f09817d1f');
        formData.append('images_file', fileField.files[0]);
        formData.append('features', 'objects' );
        formData.append('threshold', '.15');
        formData.append('apikey', 'qmpYNJF_NKwOLiAxJtRi1WOvIRQeNCfSmBBaYXBvwMZd');
        
        try {
        const response = await fetch('https://gateway.watsonplatform.net/visual-recognition/api/v4/analyze?version=2019-02-11', {
        method: 'POST',
        credentials: 'include',
        Authorization: 'Basic '+btoa('apikey:qmpYNJF_NKwOLiAxJtRi1WOvIRQeNCfSmBBaYXBvwMZd' ),
        mode: 'no-cors', 
        body: formData
        });
        return await response.json();
        console.log('Success:', JSON.stringify(result));
        } catch (error) {
        console.error('Error:', error);
        }
        
        }