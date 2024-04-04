# Contexte

Morning News est une application web qui va vous permettre d’afficher les news récentes du journal The Verge. Vous pourrez également sauvegarder vos articles préférés et les retrouver en vous connectant à votre compte.

Cette appli sera développée en React et inclus les briques techniques suivante : la navigation, Redux, l’authentification…

# Backend

- Mise en place de la connexion utilisateur pour pouvoir créer un compte, vous connecter à celui-ci et vous déconnecter : connexion à la base de données et création des routes nécessaires
- Renforcement de la sécurité de votre authentification en ajoutant un token et en hachant le mot de passe utilisateur.
- Restriction d’usage en bloquant l’usage de la fonctionnalité bookmarks aux personnes qui ne sont pas connectées.

# Frontend

- Mise en place la navigation et alimentation de l’application d’informations réelles grâce à NewsAPI un webservice spécialisé dans la diffusion de news classées par source.
- Developpement de la possibilité de sauvegarder vos articles favoris dans l’onglet “Bookmarks” grâce à Redux.
- Utilisation de Redux pour partager les informations de connexion sur toute votre application.
- Mise en place de la persistance du store Redux
- Possibilité de masquer certains articles, ceux que vous avez déjà lus par exemple.
