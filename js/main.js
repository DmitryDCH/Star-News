window.addEventListener("load", init);
function init(){
    var apikey = "b426b1761d53466c9ca16514d9a564d8";
    var category = ["business", "entertainment", "health", "science", "technology"];

    var callbackFunction = [
        { news: businessNews },
        { news: entertaimentNews },
        { news: healthNews },
        { news: scienceNews },
        { news: technologyNews }
      ];

    for (var i = 0; i < category.length; i++) {
        Request(category[i], apikey, callbackFunction[i].news);
    }
}

function Request(category, apikey, callback){
    var url = `https://newsapi.org/v2/top-headlines?country=ua&category=${category}&apiKey=${apikey}`;

    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
  
    xhr.send();
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState != 4) return;
  
      if (xhr.status != 200) {
        var errStatus = xhr.status;
        var errText = xhr.statusText;
        console.log(errStatus + ": " + errText);
      } else {
        var data = JSON.parse(xhr.responseText);
        callback(data);
      }
    };
}

function businessNews(news){
    //console.log("businessNews", news);

    var news_root = document.querySelector(".business_news");

    var title = document.createElement("h3");
    title.innerHTML = " Business News";
    title.style.textAlign = "center";

    news_root.appendChild(title);
   for(var i = 0; i < 3; i++){
        var author = document.createElement("span");
        author.innerHTML = news.articles[i].author;
        author.className = "author";

        if(news.articles[i].author == null){
            author.innerHTML = "(author anonim)";
        }

        var time = document.createElement("span");
        time.innerHTML = news.articles[i].publishedAt;
        time.className = "time";

        var description = document.createElement("a");
        description.innerHTML =  news.articles[i].title;
        description.className = "news";
        description.setAttribute("href",  news.articles[i].url);
        description.style.marginTop = "10px";

        news_root.appendChild(description);
        news_root.appendChild(author);
        news_root.appendChild(time);
   }
}

function entertaimentNews(news){
    //console.log("EntertaimentNews", news);

    var news_root = document.querySelector(".entertaiment_news");

    var title = document.createElement("h3");
    title.innerHTML = " Entertaiment News";
    title.style.textAlign = "center";

    news_root.appendChild(title);
   for(var i = 0; i < 3; i++){
        var author = document.createElement("span");
        author.innerHTML = news.articles[i].author;
        author.className = "author";

        if(news.articles[i].author == null){
            author.innerHTML = "(author anonim)";
        }

        var time = document.createElement("span");
        time.innerHTML = news.articles[i].publishedAt;
        time.className = "time";

        var description = document.createElement("a");
        description.innerHTML =  news.articles[i].title;
        description.className = "news";
        description.setAttribute("href",  news.articles[i].url);
        description.style.marginTop = "10px";

        news_root.appendChild(description);
        news_root.appendChild(author);
        news_root.appendChild(time);
   }
}

function healthNews(news){
    //console.log("HealthNews", news);

    var news_root = document.querySelector(".health_news");

    var title = document.createElement("h3");
    title.innerHTML = "Health News";
    title.style.textAlign = "center";

    news_root.appendChild(title);
   for(var i = 0; i < 3; i++){
        var author = document.createElement("span");
        author.innerHTML = news.articles[i].author;
        author.className = "author";

        if(news.articles[i].author == null){
            author.innerHTML = "(author anonim)";
        }

        var time = document.createElement("span");
        time.innerHTML = news.articles[i].publishedAt;
        time.className = "time";

        var description = document.createElement("a");
        description.innerHTML =  news.articles[i].title;
        description.className = "news";
        description.setAttribute("href",  news.articles[i].url);
        description.style.marginTop = "10px";

        news_root.appendChild(description);
        news_root.appendChild(author);
        news_root.appendChild(time);    
    }
}

function scienceNews(news){
    //console.log("scienceNews", news);

    var news_root = document.querySelector(".science_news");

    var title = document.createElement("h3");
    title.innerHTML = " Science News";
    title.style.textAlign = "center";

    news_root.appendChild(title);
   for(var i = 0; i < 3; i++){
        var author = document.createElement("span");
        author.innerHTML = news.articles[i].author;
        author.className = "author";

        if(news.articles[i].author == null){
            author.innerHTML = "(author anonim)";
        }

        var time = document.createElement("span");
        time.innerHTML = news.articles[i].publishedAt;
        time.className = "time";

        var description = document.createElement("a");
        description.innerHTML =  news.articles[i].title;
        description.className = "news";
        description.setAttribute("href",  news.articles[i].url);
        description.style.marginTop = "10px";

        news_root.appendChild(description);
        news_root.appendChild(author);
        news_root.appendChild(time);
    }
}

function technologyNews(news){
   // console.log("technologyNews",news);

   var news_root = document.querySelector(".technology_news");

   var title = document.createElement("h3");
   title.innerHTML = " Technology News";
   title.style.textAlign = "center";

   news_root.appendChild(title);
  for(var i = 0; i < 3; i++){
       var author = document.createElement("span");
       author.innerHTML = news.articles[i].author;
       author.className = "author";

       if(news.articles[i].author == null){
           author.innerHTML = "(author anonim)";
       }

       var time = document.createElement("span");
       time.innerHTML = news.articles[i].publishedAt;
       time.className = "time";

       var description = document.createElement("a");
       description.innerHTML =  news.articles[i].title;
       description.className = "news";
       description.setAttribute("href",  news.articles[i].url);
       description.style.marginTop = "10px";

       news_root.appendChild(description);
       news_root.appendChild(author);
       news_root.appendChild(time);
   }
}


