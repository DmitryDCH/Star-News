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
    console.log(news);
}

function entertaimentNews(news){
    console.log(news);
}

function healthNews(news){
    console.log(news);
}

function scienceNews(news){
    console.log(news);
}

function technologyNews(news){
    console.log(news);
}

/*
function show_business(news){
    var root_business = document.querySelector(".user_news_root");
    var title = document.createElement("h2");

    title.innerHTML = "Business section";
    title.style = "text-transform: uppercase; text-align:center";

    root_business.appendChild(title);
    for(var i = 0; i < 5; i++){
        var news_group = document.createElement("div");
        var news_img = document.createElement("img");
        var news_link = document.createElement("a");
    
        news_img.setAttribute("src", news.articles[i].urlToImage);
        news_img.setAttribute("alt", "news_img");
        news_img.style = "height = 150px; width: 150px; margin: 0 auto;"
        
        news_group.setAttribute("style","text-align:center");
        news_group.className = "d-flex flex-column justify-content-around";

        news_link.innerText = news.articles[i].title + " (click)";
        news_link.setAttribute("href", news.articles[i].url);
        news_link.setAttribute("target","_blank");
        news_link.className = "text_style";
    
        root_business.appendChild(news_group);
        news_group.appendChild(news_img);
        news_group.appendChild(news_link);
    }
}

function show_entertaim(news){
    var root_entertaim = document.querySelector(".random_news_root");
    
    var title = document.createElement("h2");

    title.innerHTML = "Entertaiment Section";

    title.style = "text-align:center";

    root_entertaim.appendChild(title);

    for(var i = 0; i < 4; i++){
        var news_group = document.createElement("div");
        var news_img = document.createElement("img");
        var news_link = document.createElement("a");
    
        news_img.setAttribute("src", news.articles[i].urlToImage);
        news_img.setAttribute("alt", "news_img");
        news_img.style = "height = 150px; width: 150px; margin: 0 auto;"
        
        news_group.setAttribute("style","text-align:center");
        news_group.className = "d-flex flex-column justify-content-around";

        news_link.innerText = news.articles[i].title + " (деталіше)";
        news_link.setAttribute("href", news.articles[i].url);
        news_link.setAttribute("target","_blank");
        news_link.className = "text_style";
    
        root_entertaim.appendChild(news_group);
        news_group.appendChild(news_img);
        news_group.appendChild(news_link);
    }
}

function show_health(news){
    var root_health = document.querySelector(".random_news_root2");

    var title = document.createElement("h2");

    title.innerHTML = "Health Section";

    title.style = "text-align:center";

    root_health.appendChild(title);

    for(var i = 0; i < 3; i++){
        var news_group = document.createElement("div");
        var news_img = document.createElement("img");
        var news_link = document.createElement("a");
    
        news_img.setAttribute("src", news.articles[i].urlToImage);
        news_img.setAttribute("alt", "news_img");
        news_img.style = "height = 150px; width: 150px; margin: 0 auto;"
        
        news_group.setAttribute("style","text-align:center");
        news_group.className = "d-flex flex-column justify-content-around";

        news_link.innerText = news.articles[i].title + " (деталіше)";
        news_link.setAttribute("href", news.articles[i].url);
        news_link.setAttribute("target","_blank");
        news_link.className = "text_style";
    
        root_health.appendChild(news_group);
        news_group.appendChild(news_img);
        news_group.appendChild(news_link);
    }
}
function show_science(news){
    var root_science = document.querySelector(".random_news_root3");
    root_science.style = "border-top: 3px solid black; border-radius: 5%";
    
    for(var i = 0; i < 4; i++){
        var news_group = document.createElement("div");
        var news_img = document.createElement("img");
        var news_link = document.createElement("a");
    
        news_img.setAttribute("src", news.articles[i].urlToImage);
        news_img.setAttribute("alt", "news_img");
        news_img.style = "height = 150px; width: 150px; margin: 0 auto;"
        
        news_group.setAttribute("style","text-align:center");
        news_group.className = "d-flex flex-column justify-content-around";

        news_link.innerText = news.articles[i].title + " (деталіше)";
        news_link.setAttribute("href", news.articles[i].url);
        news_link.setAttribute("target","_blank");
        news_link.className = "text_style";
    
        root_science.appendChild(news_group);
        news_group.appendChild(news_img);
        news_group.appendChild(news_link);
    }
}

function show_tech(news){
    var root_tech = document.querySelector(".random_news_root4");
    root_tech.style = "border-top: 3px solid black; border-radius: 5%;";
    
    for(var i = 0; i < 4; i++){
        var news_group = document.createElement("div");
        var news_img = document.createElement("img");
        var news_link = document.createElement("a");
    
        news_img.setAttribute("src", news.articles[i].urlToImage);
        news_img.setAttribute("alt", "news_img");
        news_img.style = "height = 150px; width: 150px; margin: 0 auto;"
        
        news_group.setAttribute("style","text-align:center");
        news_group.className = "d-flex flex-column justify-content-around";

        news_link.innerText = news.articles[i].title + " (деталіше)";
        news_link.setAttribute("href", news.articles[i].url);
        news_link.setAttribute("target","_blank");
        news_link.className = "text_style";
    
        root_tech.appendChild(news_group);
        news_group.appendChild(news_img);
        news_group.appendChild(news_link);
    }
}
*/



/* UI scripts */
function hide_inp(){
    var input_search = document.querySelector(".input_search");
    var button_search = document.querySelector(".search_button");
    var text = document.querySelector(".text");

    var class_search = input_search.getAttribute("class");

    if(class_search == "input_search d-none"){
        input_search.setAttribute("class", "input_search d-block");
        button_search.setAttribute("class", "btn btn-success search_button d-block");
        text.setAttribute("class", "text d-none");
    } else{
        input_search.setAttribute("class", "input_search d-none");
        button_search.setAttribute("class", "btn btn-success search_button d-none");
        text.setAttribute("class", "text d-block");
    }
}

