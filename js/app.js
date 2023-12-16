document.addEventListener("DOMContentLoaded",e =>{
    let xml, xmlhttp, xmlDoc, vliste
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "produit.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML; 
    console.log(xmlDoc);
    vliste = "";
    xml = xmlDoc.getElementsByTagName("produit");
  
    console.log(xml[0].childNodes[1]);
    for (let i = 0; i < xml.length; i++) {
    
        //variables pour les noeuds
                const  image = xml[i].getElementsByTagName("image")[0].getAttribute("path");
                const  nom = xml[i].getElementsByTagName("nom")[0].childNodes[0].nodeValue;
                const  marque = xml[i].getElementsByTagName("marque")[0].childNodes[0].nodeValue;
                const  prix = xml[i].getElementsByTagName("prix")[0].childNodes[0].nodeValue;
    
        //ajout de chaque propriété dans boucle
                
                console.table(`${image} ${nom} ${marque} ${prix}`);
                    
                    vliste += `
                                <li><img src="${image}" alt="${nom}"></li>
                                <li>Nom : ${nom} </li>
                                <li>Marque : ${marque} </li>
                                <li>Prix : ${prix} </li>
                                `
                 
                //stockage dans un tableau
                    myStock=[];
                    myStock.push(nom,marque,prix);
                    console.log(JSON.stringify(myStock));
                    localStorage.setItem("stock", myStock)
           
         }
  
  
    document.querySelector("ul").innerHTML = vliste; 
    
})