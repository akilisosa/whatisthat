function aj(){
    var fs = require("fs");
    var request = require("request");
    
    var options = { method: 'POST',
      url: 'https://gateway.watsonplatform.net/visual-recognition/api/v4/analyze',
      qs: { version: '2019-02-11' },
      headers: 
       { 'cache-control': 'no-cache',
         Connection: 'keep-alive',
         'Content-Length': '6411',
         'Accept-Encoding': 'gzip, deflate',
         'Content-Type': 'multipart/form-data; boundary=--------------------------774233041009300511014411',
         Host: 'gateway.watsonplatform.net',
         'Postman-Token': 'd9dfc173-8a0e-4ce1-b597-ae1ad71fc403,01c2da7c-5172-4acd-84d5-bdb03df14465',
         'Cache-Control': 'no-cache',
         Accept: '*/*',
         'User-Agent': 'PostmanRuntime/7.17.1',
         Authorization: 'Basic YXBpa2V5OnFtcFlOSkZfTkt3T0xpQXhKdFJpMVdPdklSUWVOQ2ZTbUJCYVlYQnZ3TVpk',
         'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
      formData: 
       { images_file: 
          { value: 'fs.createReadStream("/C:/Users/akili/Pictures/pimples/pimp5.jpg")',
            options: 
             { filename: '/C:/Users/akili/Pictures/pimples/pimp5.jpg',
               contentType: null } },
         collection_ids: '331eced2-d224-4f29-8132-143f09817d1f',
         features: 'objects',
         threshold: '0.15' } };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      console.log(body);
    });
    
}
