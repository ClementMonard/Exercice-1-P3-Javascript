//Déclaration de la fonction pour changer d'image et y ajouter une bordure rouge de 3px
function borderImage(){
  //Récupération de l'id de l'image1 pour y changer sa source
  document.getElementById('image1').src = 'images/image1_2.jpg'
  //Ajout de la bordure rouge de 3px au survol du curseur
  document.getElementById('image1').style.border = '3px solid red';
}
//Déclaration de la fonction pour remettre l'image de base et enlever la bordure une fois le curseur en dehors de l'image
function borderImageOut(){
  //Suppression de la bordure une fois le curseur sorti de l'image en y mettant une valeur vide
  document.getElementById('image1').style.border = '';
  //Changement de l'image pour y remettre celle de base une fois le curseur sorti de l'image
  document.getElementById('image1').src = 'images/image1.jpg';
}
