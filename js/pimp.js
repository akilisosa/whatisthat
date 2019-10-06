function pimp(){



var data = new FormData();

const fileField = document.querySelector('input[type="file"]');

data.append("images_file", fileField);
data.append("collection_ids", "331eced2-d224-4f29-8132-143f09817d1f");
data.append("features", "objects");
data.append("threshold", "0.15");

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://gateway.watsonplatform.net/visual-recognition/api/v4/analyze?version=2019-02-11");
xhr.setRequestHeader("Authorization", "Basic YXBpa2V5OnFtcFlOSkZfTkt3T0xpQXhKdFJpMVdPdklSUWVOQ2ZTbUJCYVlYQnZ3TVpk");
xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
xhr.setRequestHeader("Connection", "keep-alive");
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);

}