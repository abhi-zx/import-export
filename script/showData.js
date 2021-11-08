async function getdata(url){
    let res = await fetch(url)
     let data = await res.json();
     return data;
}
function append(data,container){
    data.forEach(({strMeal,strSource})=>{
        let div = document.createElement('div')
        let p=document.createElement('p')

        p.innerText=strMeal;

        let img = document.createElement('img')
        img.src=strSource;

        div.append(img,p);

        container.append(div);
    })

}
export {getdata,append}