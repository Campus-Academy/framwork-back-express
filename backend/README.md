# Campus-network-app
Campus-network-api est le back du projet Campus Network.
Le projet est une application web qui consiste à faire un reseau social interne pour l'école Campus Academy.

---

## 💿 Installation du projet
```
npm install
```

### Compilation pour le dev
```
npm run dev
```
--- 
## 🔧 Accès aux outils du projet :
### Mongo :
cloud.mongodb.com : connexion avec Google
### Google : 
email : campusnetwork44@gmail.com / mot de passe : Campusnetwork44@
### Heruko (intégration continue):
email : campusnetwork44@gmail.com / mot de passe : Campusnetwork44@

---
## ⚠️ Les bonnes pratiques à adoptées ⚠️
### Git :
- Toujours se créer une branche pour développer **une et une seule** fonctionnalité, une tache ou un bug !
- Chaque branche devra être nommée avec son **type d'US et son numéro d'US**, exemple : feature/CNK-24
- Chaque commit devra dire ce qui a été ajouter, exmemple :
```
git commit -m "Ajout de la page de connexion + modification du router pour faire la redirection vers la page de login si néccessaire"
```
- Ne jamais push sur la branche dev/prod/pre-prod, toujours faire un merge request 
- Relecture de code et testes obligatoires par un **autre** developpeur afin de valider une merge request

### Code :
- Nom de variable et fonction en **anglais** + explicite + respect du camel case ! <br/>*Exemple : **a**n**C**ar, **g**et**U**ser()  <br/> Contre-exemple : var1, Var2, ACAr, Getuser(), getuser() <br/>*
- Faire un commentaire en francais pour chaque fonction et partie de code complexe exemple : 
```
// fonction qui permet de recupérer un utilisateur via son id
getUserById(){
    ...
}
```
- utilisez de manière privligiée les `forEach` plutôt que des boucles `for`
- utilisez de manière privligiée les `switch case` plutôt que des `if, else if` à répétition
- optimiser votre code pour qu'il soit **le plus compact et lisible possible** (grâce aux `filter`, `findIndex`, `find` ...)
<br/>
- Si un module doit être installé, faites en part à l'équipe, toujours prendre des modules populaires et sous licence libre de préférence (MIT ...)

## Outils conseillés
- VS Code + extension : GitLens
- Chrome + extension : Postman (pour tester ses requêtes API)
