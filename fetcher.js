
const fetchURL = async (url) => {
    let fetchData =  await fetch(url)
    let data = await fetchData.text()
     let dom = new DOMParser()
     let NewData = dom.parseFromString(data, 'text/xml')
     console.log(data)
     console.log(NewData)
     urlCollector(NewData)
 }
 
     let getSiteData = (url) => console.log(url)
 
     const urlCollector = (data) =>{
         let getUrl = data.getElementsByTagName('loc')
       
 
    for(let value of getUrl){
        
        console.log(value.textContent);
 
    }
     }
    
 fetchURL('http://voofacts.com/post-sitemap.xml') 