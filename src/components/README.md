HRnet React — Modernisation de l'application interne
Bienvenue dans la version React de l'application HRnet pour WealthHealth.
Cette migration vise à améliorer la stabilité, les performances et la maintenabilité en remplaçant l'ancien front-end jQuery.

Stack Technique :

React 18 (avec Vite)

Redux Toolkit pour la gestion d'état

Tailwind CSS pour le style

React Router pour la navigation

TypeScript pour la robustesse du code


Objectifs de la Migration : 

Conversion complète de l'application HRnet en React

Suppression de toute dépendance à jQuery

Remplacement des plugins jQuery par des composants React natifs ou bibliothèques modernes

Application d'un paradigme de programmation fonctionnelle (pas de classes, que des hooks/fonctions)

Amélioration des performances mesurées via Lighthouse audits



Plugins jQuery Convertis: 

Conformément aux exigences, les plugins jQuery de l'application originale ont été remplacés comme suit :


Fonctionnalité	Plugin jQuery initial	Remplacement React
Fenêtre modale	jQuery.modal.js	Conversion manuelle → Composant Modal (src/components/Modal.tsx)
Sélecteur de date	jQuery.datetimepicker.js	Bibliothèque react-datepicker
Menus déroulants	Plugin jQuery custom	Bibliothèque react-select
Table de données	Plugin jQuery DataTables	Bibliothèque @tanstack/react-table


 Composants Principaux :

Modal — Fenêtre Modale Réutilisable
Le composant Modal est un composant 100% React, conçu pour remplacer le plugin jQuery de modale tout en respectant les meilleures pratiques modernes.



Fonctionnalités Clés :

Fermeture via la touche Échap

Fermeture en cliquant en dehors de la modale

Animations d'ouverture/fermeture

Scroll lock du body pour empêcher de scroller derrière la modale ouverte

Accessibilité améliorée (Focus Trap simplifié, ARIA labels)

Responsive Design




 Installation et Lancement du Projet : 

 # Installation
npm install

# Lancement en développement
npm run dev

# Build de production
npm run build

# Lancer un serveur local sur le build
npm run preview