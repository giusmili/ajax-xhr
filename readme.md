# 🚀 Historique XHR (XMLHttpRequest)
![cover](https://www.codeimmersives.com/wp-content/uploads/2018/06/JS-JSON-AJAX-jQuery-logos.jpg!)

## 📝Ajax : Asynchronous Javascript And XML (Jesse James Garrett)
> L'objet XMLHttpRequest permet d'envoyer des requêtes HTTP vers le serveur, de recevoir
des réponses et de mettre à jour une partie de la page web. En mode asynchrone, cette
mise à jour se réalise sans avoir à recharger la page et donc de façon totalement
transparente pour l'utilisateur.
L'objet XMLHttpRequest s'utilise donc dans une architecture de type client/serveur.

## L'object XMLHttpRequest
```js
const  xhr = new XMLHttpRequest();
const  url = "./api/produit.json";

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
```

## 📝Mode de fonctionnement :
* L'objet XMLHttpRequest est créé par le moteur Javascript du navigateur
* Cet objet est alors utilisé pour effectuer une requête HTTP vers le serveur.
* La réponse est fournie par ce dernier au navigateur.
* A l'aide du html le résultat est ensuite affiché dans le navigateur

## Image ci-dessous
![ajax](<1 O4oAOnufvUx8ztPgVe3v2A-1.png>)

## 📝Acronyme AJAX (Asynchronous, Javascript and XML)
> AJAX est une méthode utilisant différentes technologies ajoutées aux navigateurs web entre 1995 et 2005, et dont la particularité est de permettre d'effectuer des requêtes au serveur web

<small><em>By Militello Giuseppe</em></small>

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)