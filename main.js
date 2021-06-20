const BASE_URL=`https://corona.lmao.ninja/v2/countries`
//that is the url from where we will get the updated data of covid afected people 
function updateMap(){
   fetch(BASE_URL)
   .then(res=>res.json())
   .then(countries=>{
      countries.forEach(country=>{
         createMarker(country)
      })
   })
   .catch(err=>console.log(err))
   
   
}

//this function create a marker based on lattitude and longtitude

function createMarker(country) {
   const latitude=country.countryInfo.lat
   const longitude=country.countryInfo.long
   let todayCases=country.todayCases
   let todayDeaths=country.todayDeaths
   //initialixe the marker provided by map box by latitude and longitude
   // Set options
   let color=null
   if(todayCases>1020){
      color=`rgb(255,0,0)`
   }else{
      color=`rgb(${todayCases/4},0,0)`
   }
   
    new mapboxgl.Marker({
         color:color,
         draggable: false
      })
      .setLngLat([longitude, latitude])
      .addTo(map);
   
   }

//let us call the function every 1 hour so that the data is alawyas updated
updateMap()
setInterval(updateMap,1000*(60*60))


//this is the response that we gate from the api
/*
Country: "Algeria"
CountryCode: "DZ"
Date: "2021-06-20T03:54:45.82Z"
ID: "62423fa2-edf5-4ab3-ad8a-761e45bcd36e"
NewConfirmed: 367
NewDeaths: 9
NewRecovered: 243
Premium: Object
Slug: "algeria"
TotalConfirmed: 135586
TotalDeaths: 3624
TotalRecovered: 94336
*/
/*
git init
git add README.md
git commit - m "first commit"
git branch - M main
git remote add origin https: //github.com/abuSayedsayed/coronaVirusTracker.git
   git push - u origin main
*/