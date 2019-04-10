window.addEventListener("load", init);
function init(){
    /* My Hurd Code then push into third branch and 
    merge with DEV and create pretty UI */
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
    console.log("businessNews", news);
}
function entertaimentNews(news){
    console.log("EntertaimentNews", news);
}
function healthNews(news){
    console.log("HealthNews", news);
}
function scienceNews(news){
    console.log("scienceNews", news);
}
function technologyNews(news){
    console.log("technologyNews",news);
}





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

