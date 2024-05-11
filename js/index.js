
  let city =  document.getElementById("city");
  let temperture = document.getElementById("temperture");
  let direction = document.getElementById("direction");
  let windkph = document.getElementById("windkph");
  let humidity = document.getElementById("humidity");
  let texttoday = document.getElementById("texttoday");
  let imgtoday = document.getElementById("imgtoday");
  let temptomorrow = document.querySelectorAll(".temptomorrow");
  let mintomorrow = document.querySelectorAll(".mintomorrow"); 
  let texttomorrow = document.querySelectorAll(".texttomorrow");
  let imgtomorrow = document.querySelectorAll(".imgtomorrow");
  let namedayproject = document.getElementById("namedayproject");
  let numdayproject = document.getElementById("numdayproject");
  let monthdayproject = document.getElementById("monthdayproject");
  let nextnameday = document.querySelectorAll(".nextnameday");
  let findinput = document.getElementById("findinput");
 
  let data = 0;
 
  // ليه مش ف البدايه بيبعت aswan ك parameter
   async function getData(cityname="Aswan"){
    let Response = await fetch( `https://api.weatherapi.com/v1/forecast.json?key=71dbd040c45b418aa92175158231802&q=${cityname}&days=3`);
        let Data = await Response.json();
         data = Data ;
         displaydata()
         nextDay()
  }


    

   let date = new Date();


      function displaydata(){

        city.innerHTML = data.location.name;
        temperture.innerHTML = data.current.temp_c ;
        direction.innerHTML = data.current.wind_dir ;
        windkph.innerHTML = data.current.wind_kph +"km/h";
         humidity.innerHTML = data.current.humidity + "%";
         texttoday.innerHTML = data.current.condition.text;
         imgtoday.setAttribute("src",data.current.condition.icon);
         namedayproject.innerHTML = date.toLocaleDateString("en-US" ,{weekday:"long"})
         numdayproject.innerHTML = date.getDate();
         monthdayproject.innerHTML = date.toLocaleDateString("en-US" , {month:"long"})
      }



      function nextDay(){

     for(let i=0 ; i<2 ; i++){
      let nexttomorow = new Date(data.forecast.forecastday[i+1].date);
      nextnameday[i].innerHTML = nexttomorow.toLocaleDateString("en-US",{weekday:"long"})

      temptomorrow[i].innerHTML = data.forecast.forecastday[i+1].day.maxtemp_c;
      mintomorrow[i].innerHTML = data.forecast.forecastday[i+1].day.mintemp_c;
      texttomorrow[i].innerHTML = data.forecast.forecastday[i+1].day.condition.text; 
      imgtomorrow[i].setAttribute("src",data.forecast.forecastday[i+1].day.condition.icon);
      
     }
  }

  findinput.addEventListener("input" , function(){
  let valuesearch = findinput.value;
   getData(findinput.value);
     city.innerHTML=valuesearch;

  })
