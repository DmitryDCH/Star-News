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
    Request_curse();
    Request_weather();
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

    var news_root = document.querySelector(".business_news");

    var title = document.createElement("h3");
    title.innerHTML = " Business News";
    title.style.textAlign = "center";

    news_root.appendChild(title);
   for(var i = 0; i < 4; i++){

        var img = document.createElement("img");
        img.setAttribute("src",  news.articles[i].urlToImage);
        img.style.margin = "20px 0px 5px 0px";
        img.style.height = "350px";

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
        description.setAttribute("target", "_blank");
        description.style.marginTop = "10px";
        description.style.fontWeight = "bold";

        news_root.appendChild(img);
        news_root.appendChild(description);
        news_root.appendChild(author);
        news_root.appendChild(time);

        var loader = document.querySelector(".business_news .loader");
        loader.style.display = "none";
    }
}

function entertaimentNews(news){

    var news_root = document.querySelector(".entertaiment_news");

    var title = document.createElement("h3");
    title.innerHTML = " Entertaiment News";
    title.style.textAlign = "center";

    news_root.appendChild(title);
   for(var i = 0; i < 4; i++){

        var img = document.createElement("img");
        img.setAttribute("src",  news.articles[i].urlToImage);
        img.style.margin = "20px 0px 5px 0px";
        img.style.height = "350px";

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
        description.setAttribute("target", "_blank");
        description.style.marginTop = "10px";
        description.style.fontWeight = "bold";

        news_root.appendChild(img); 
        news_root.appendChild(description);
        news_root.appendChild(author);
        news_root.appendChild(time);

        var loader = document.querySelector(".entertaiment_news .loader");
        loader.style.display = "none";
   }
}

function healthNews(news){

    var news_root = document.querySelector(".health_news");

    var title = document.createElement("h3");
    title.innerHTML = "Health News";
    title.style.textAlign = "center";

    news_root.appendChild(title);
   for(var i = 0; i < 2; i++){

        var img = document.createElement("img");
        img.setAttribute("src",  news.articles[i].urlToImage);
        img.style.margin = "20px 0px 5px 0px";
        img.style.height = "350px";

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
        description.setAttribute("target", "_blank");
        description.style.marginTop = "10px";
        description.style.fontWeight = "bold";

        news_root.appendChild(img);
        news_root.appendChild(description);
        news_root.appendChild(author);
        news_root.appendChild(time);
        
        var loader = document.querySelector(".health_news .loader");
        loader.style.display = "none";
    }
}

function scienceNews(news){

    var news_root = document.querySelector(".science_news");

    var title = document.createElement("h3");
    title.innerHTML = " Science News";
    title.style.textAlign = "center";

    news_root.appendChild(title);
   for(var i = 0; i < 4; i++){

        var img = document.createElement("img");
        img.setAttribute("src",  news.articles[i].urlToImage);
        img.style.margin = "20px 0px 5px 0px";
        img.style.height = "350px";

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
        description.setAttribute("target", "_blank");
        description.style.marginTop = "10px";
        description.style.fontWeight = "bold";

        news_root.appendChild(img);
        news_root.appendChild(description);
        news_root.appendChild(author);
        news_root.appendChild(time);

        var loader = document.querySelector(".science_news .loader");
        loader.style.display = "none";
    }
}

function technologyNews(news){
   
   var news_root = document.querySelector(".technology_news");

   var title = document.createElement("h3");
   title.innerHTML = " Technology News";
   title.style.textAlign = "center";

   news_root.appendChild(title);

    for(var i = 0; i < 4; i++){

      var img = document.createElement("img");
      img.setAttribute("src",  news.articles[i].urlToImage);
      img.style.margin = "20px 0px 5px 0px";
      img.style.height = "350px";

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
     description.setAttribute("target", "_blank");
     description.style.marginTop = "10px";
     description.style.fontWeight = "bold";
    
     
     news_root.appendChild(img);
     news_root.appendChild(description);
     news_root.appendChild(author);
     news_root.appendChild(time);

     var loader = document.querySelector(".technology_news .loader");
     loader.style.display = "none";
 }
}
/* new features */

function Request_curse(){
    var xhr = new XMLHttpRequest();
  
    var url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
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
        //console.log(data);

        var buy_usd = document.querySelector(".buy_usd");
        buy_usd.innerHTML = data[0].buy;

        var sale_usd = document.querySelector(".sale_usd");
        sale_usd.innerHTML = data[0].sale;

        var buy_eur = document.querySelector(".buy_eur");
        buy_eur.innerHTML = data[1].buy;

        var sale_eur = document.querySelector(".sale_eur");
        sale_eur.innerHTML = data[1].sale;

        var buy_rub = document.querySelector(".buy_rub");
        buy_rub.innerHTML = data[2].buy;

        var sale_rub = document.querySelector(".sale_rub");
        sale_rub.innerHTML = data[2].sale;
      }
    };
}


/* weather */

function Request_weather(){
    var xhr = new XMLHttpRequest();
  
    var url = "http://api.openweathermap.org/data/2.5/forecast?id=695594&APPID=4f2331b24742b87ee96385337c44b6f6";
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
        console.log(data);

        for (var i = 0; i < 5; i++){
        var weather_root = document.querySelector(".weather");
        
        var data_day = document.createElement("p");
        data_day.setAttribute("class", "data_day");
        data_day.innerHTML = data.city.name + " " + data.city.country;

        var time = document.createElement("p");
        time.setAttribute("class", "day");
        time.innerHTML = "Date: " + data.list[i].dt_txt;
        time.style.borderTop = "2px solid black";
        time.style.borderTopRightRadius = "15%";
        time.style.borderTopLeftRadius = "15%";
        time.style.paddingBottom = "50px";

        var icon = document.createElement("img");
        icon.setAttribute("src", `https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`);
        icon.setAttribute("alt", "icon");
        icon.style.display = "block";
        icon.style.margin = "0 auto";

        var description_icon = document.createElement("p");
        description_icon.innerHTML = data.list[i].weather[0].description;
        description_icon.style.textAlign = "center";
        description_icon.style.fontWeight = "bold";


        var max = document.createElement("p");
        max.setAttribute("class", "min_degrees");
        max.innerHTML = ("Max temperature: " + Math.round(data.list[i].main.temp_max-273) + "°C");
        max.style.color = "red";

        var min = document.createElement("p");
        min.setAttribute("class", "min_degrees");
        min.innerHTML = ("Min temperature: " + Math.round(data.list[i].main.temp_min-273) + "°C");
        min.style.borderBottom = "2px solid black";
        min.style.borderBottomLeftRadius = "15%";
        min.style.borderBottomRightRadius = "15%";
        min.style.paddingBottom = "50px";
        min.style.color = "blue";

        weather_root.appendChild(data_day);
        weather_root.appendChild(time);
        weather_root.appendChild(icon);
        weather_root.appendChild(description_icon);
        weather_root.appendChild(max);
        weather_root.append(min);
        }
      }
    };
}

/* UI features (button up)*/
var button_up = document.querySelector(".buttonUP a i");

window.addEventListener("scroll", function(){
  if(window.scrollY > 150){
    button_up.style.display = "block";
  } else{
    button_up.style.display = "none";
  }
});
