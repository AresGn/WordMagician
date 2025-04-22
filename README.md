# Word GPT Plus - Site Web

Ce dépôt contient le code source du site web de présentation de Word GPT Plus, un add-in Microsoft Word qui intègre l'IA dans votre traitement de texte.

## Structure du projet

```
/
├── index.html            # Page principale du site
├── manifest.xml          # Fichier manifest pour l'installation de l'add-in Word
├── src/                  # Répertoire source
│   ├── assets/           # Ressources statiques
│   │   ├── css/          # Fichiers CSS
│   │   │   ├── main.css        # Styles globaux
│   │   │   ├── header.css      # Styles pour le header
│   │   │   ├── features.css    # Styles pour la section des fonctionnalités
│   │   │   ├── installation.css # Styles pour la section d'installation
│   │   │   ├── faq.css         # Styles pour la section FAQ
│   │   │   ├── footer.css      # Styles pour le footer
│   │   │   └── notifications.css # Styles pour les notifications
│   │   ├── js/          # Fichiers JavaScript
│   │   │   └── main.js         # Script principal du site
│   │   └── images/      # Images et icônes
│   │       ├── pattern.svg     # Pattern d'arrière-plan du header
│   │       ├── preview.png     # Aperçu de l'interface
│   │       ├── step1.png       # Image pour l'étape 1 d'installation
│   │       ├── step2.png       # Image pour l'étape 2 d'installation
│   │       ├── step3.png       # Image pour l'étape 3 d'installation
│   │       └── step4.png       # Image pour l'étape 4 d'installation
│   └── components/      # Composants réutilisables (si nécessaire)
└── README.md            # Documentation du projet
```

## Technologies utilisées

- HTML5, CSS3 et JavaScript vanilla
- Swiper.js pour les diapositives du guide d'installation
- Font Awesome pour les icônes
- Google Fonts (Roboto) pour la typographie

## Fonctionnalités du site

1. Présentation de l'add-in Word GPT Plus
2. Téléchargement du fichier manifest.xml
3. Guide d'installation avec diapositives
4. Description des fonctionnalités principales
5. Guide d'utilisation détaillé
6. FAQ interactive
7. Pied de page avec liens utiles

## Images d'installation

Pour que le site fonctionne correctement, vous devez ajouter des captures d'écran des étapes d'installation dans le dossier `src/assets/images/`:

- `preview.png` : Aperçu de l'interface de l'add-in
- `step1.png` : Capture d'écran pour ouvrir Word
- `step2.png` : Capture d'écran pour accéder aux add-ins
- `step3.png` : Capture d'écran pour ajouter le manifest
- `step4.png` : Capture d'écran montrant l'add-in installé

## Personnalisation

Vous pouvez facilement personnaliser le site en modifiant les variables CSS dans le fichier `src/assets/css/main.css`:

```css
:root {
  --primary-color: #4285f4;
  --secondary-color: #f8f9fa;
  --accent-color: #34a853;
  --text-color: #202124;
  --light-text: #5f6368;
  --border-color: #dadce0;
  --shadow: 0 2px 10px rgba(0,0,0,0.1);
}
```

## Licence

Ce projet est sous licence MIT. 