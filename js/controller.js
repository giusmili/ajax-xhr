
// Request status
const  xhr = new XMLHttpRequest();
const  url = "./api/produit.json";
const  warning = document.querySelector("section");

 xhr.onreadystatechange = () => {

        // Vérifier si la requête de récupération est terminée
        if (xhr.readyState == 4 && xhr.status == 200) { 
        
          // Parse jSon, pour transformer le fichier txt en flux json
          let jsonData = JSON.parse(xhr.responseText);
            console.log(jsonData)
          // appel de la méthode, passage en paramètre de la requete  
          showProd(jsonData);
        }
        else{
        console.log("erreur de requête");
        warning.innerHTML = `<p>Erreur de requête : ${xhr.status}</p>`
    }
};

// traitement des données récupérées 
const showProd=(data)=>{

    let output = "<ul>"; // Open list
    let i;
    
    // itération sur les donnée depuis l'objet data
    for (i in data.produits) {
        output += `<li>Nom : ${data.produits[i].nom}</li>
                   <li>Marque : ${data.produits[i].Marque}</li>
                   <li>Prix : ${data.produits[i].prix} &euro;</li>
                 `; 
        
    }
    
    output += "</ul>"; 
 
    
    document.querySelector("section").innerHTML = `<h2> <span aria=hidden="true"> 🧑‍💻 </span> Tous vos produits </h2> ${output}`;
    localStorage.setItem("Data", JSON.stringify(data));
    
 }
  xhr.open("GET", url, true);
  xhr.send()

        


