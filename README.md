<<<<<<< HEAD
HRnet React — Modernisation de l'application interne
Bienvenue dans la version React de l'application HRnet pour WealthHealth.
Cette migration vise à améliorer la stabilité, les performances et la maintenabilité en remplaçant l'ancien front-end jQuery.

 Stack Technique
React 18 (avec Vite)

Redux Toolkit pour la gestion d'état

Tailwind CSS pour le style

React Router pour la navigation

TypeScript pour la robustesse du code

 Objectifs de la Migration
Conversion complète de l'application HRnet en React

Suppression de toute dépendance à jQuery

Remplacement des plugins jQuery par des composants React natifs ou bibliothèques modernes

Application d'un paradigme de programmation fonctionnelle (pas de classes, que des hooks/fonctions)

Amélioration des performances mesurées via Lighthouse audits

 Plugins jQuery Convertis
Conformément aux exigences, les plugins jQuery de l'application originale ont été remplacés comme suit :


Fonctionnalité	Plugin jQuery initial	Remplacement React
Fenêtre modale	jQuery.modal.js	Conversion manuelle → Composant Modal (src/components/Modal.tsx)
Sélecteur de date	jQuery.datetimepicker.js	Bibliothèque react-datepicker
Menus déroulants	Plugin jQuery custom	Bibliothèque react-select
Table de données	Plugin jQuery DataTables	Bibliothèque @tanstack/react-table
Composants Principaux
Modal — Fenêtre Modale Réutilisable
Le composant Modal est un composant 100% React, conçu pour remplacer le plugin jQuery de modale tout en respectant les meilleures pratiques modernes.


 Fonctionnalités Clés
Fermeture via la touche Échap

Fermeture en cliquant en dehors de la modale

Animations d'ouverture/fermeture

Scroll lock du body pour empêcher de scroller derrière la modale ouverte

Accessibilité améliorée (Focus Trap simplifié, ARIA labels)

Responsive Design


Performances
Audit Lighthouse réalisé avant et après conversion.

Résultats : amélioration significative sur le chargement, l'interactivité et les meilleures pratiques.

Suppression de lourdes dépendances DOM-manipulatrices (jQuery) ➔ réduction du temps de chargement.


 Installation et Lancement du Projet

# Installation
npm install

# Lancement en développement
npm run dev

# Build de production
npm run build

# Lancer un serveur local sur le build
npm run preview





=======
# HRNet - Version React

HRNet est une application web moderne de gestion des ressources humaines développée avec React. Cette version est une refonte de l'application existante, offrant une meilleure expérience utilisateur et des performances optimisées.

## 🚀 Technologies Utilisées

- **React** - Bibliothèque JavaScript pour la construction d'interfaces utilisateur
- **Vite** - Outil de build ultra-rapide
- **TypeScript** - Typage statique pour JavaScript
- **Redux** - Gestion d'état
- **Tailwind CSS** - Framework CSS utilitaire
- **React Router** - Routage côté client
- **React Table** - Gestion des tableaux de données
- **React Datepicker** - Sélecteur de dates
- **ESLint** - Linting du code
- **PostCSS** - Transformation des styles CSS

## 📦 Installation

1. Clonez le dépôt :
```bash
git clone [URL_DU_REPO]
```

2. Installez les dépendances :
```bash
npm install
```

## 🛠️ Commandes Disponibles

- **Développement** : `npm run dev`
  - Lance le serveur de développement
  - Accessible sur `http://localhost:5173`

- **Build Production** : `npm run build`
  - Crée une version optimisée pour la production
  - Les fichiers sont générés dans le dossier `dist/`

- **Lint** : `npm run lint`
  - Vérifie la qualité du code

## 📊 Performance Lighthouse

Les tests de performance ont été effectués avec Lighthouse. Voici les résultats moyens :

| Catégorie | Score |
|-----------|-------|
| Performance | 95 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

### Améliorations SEO Récentes
- Ajout de meta description pertinente
- Titre de page optimisé
- Structure HTML sémantique
- Balises meta appropriées

## 🎯 Composant hrnet-react-modal

Le projet inclut un composant modal personnalisé `hrnet-react-modal`, développé spécifiquement pour les besoins de l'application HRNet.

### Caractéristiques
- Design moderne et responsive
- Animations fluides
- Accessibilité optimisée
- Support du clavier
- Gestion des événements de fermeture

Pour plus d'informations sur l'utilisation du composant modal, consultez la [documentation du composant](home/project/README.md).

## 📝 Structure du Projet

```
src/
├── components/     # Composants réutilisables
├── pages/         # Pages de l'application
├── store/         # Configuration Redux
├── types/         # Définitions TypeScript
└── App.tsx        # Point d'entrée de l'application
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails. 
>>>>>>> 638cb66 (correction)
