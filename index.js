// apikey:- 026f868300634bff8ee3b5d8d7fc6fed 
// let source = 'the-times-of-india';
// let apiKey = '026f868300634bff8ee3b5d8d7fc6fed';

let newsAccordion = document.getElementById('newsAccordion');

// ajax request 

const xhr = new XMLHttpRequest();

 // Open the object
    xhr.open('GET', `news.json`, true);


    
    // What to do when response is ready
    xhr.onload = function () {
      if(this.status === 200){

       let json= JSON.parse(this.responseText);
       let articles = json.articles;
      //  console.log(articles);
       let newHtml = "";
       articles.forEach(function(element, index) {
      let news = `<p>
       <div class="">
         <a class="btn btn-primary" data-bs-toggle="" href="#collapse" role="button" aria-expanded="false"
           aria-controls="collapse">
           <b>Breaking News ${index +1} <span class="badge bg-danger">New!!</span> :- </b>${element['title']}
         </a>
       </div>
       </p>
       <div class="" id="collapse">
         <div class="card card-body">
         ${element['content']} <a href="${element['url']}"  target="_blank"> Read More.. </a>
         <div><b>Published Date :-</b> ${element['publishedAt']}</div>
         </div>
       </div>`
       newHtml += news;
      });
      newsAccordion.innerHTML = newHtml;

      }
      else{
          console.log("Some error occured")
      }
  }


  // send the request 
  xhr.send();