# Guide pour le site web de l'add-in Word GPT Plus

Ce document décrit la structure et le contenu recommandés pour votre site web d'une seule page qui expliquera l'add-in Word GPT Plus à vos amis.

## Structure du site

Votre site devrait comporter les sections suivantes :

1. **En-tête / Bannière** - Titre et brève description
2. **Présentation de l'add-in** - Ce qu'est Word GPT Plus et ses avantages
3. **Téléchargement** - Bouton pour télécharger le fichier manifest.xml
4. **Guide d'installation** - Instructions pas à pas avec captures d'écran
5. **Fonctionnalités principales** - Explication des fonctions essentielles
6. **Guide d'utilisation** - Comment utiliser chaque élément de l'interface
7. **FAQ** - Questions fréquemment posées
8. **Pied de page** - Informations de contact et crédits

## Contenu détaillé par section

### 1. En-tête / Bannière

```html
<header>
  <h1>Word GPT Plus</h1>
  <p>L'intelligence artificielle au service de votre rédaction dans Microsoft Word</p>
  <div class="cta-button">
    <a href="#download">Télécharger maintenant</a>
  </div>
</header>
```

### 2. Présentation de l'add-in

Cette section doit expliquer simplement ce qu'est l'add-in et ses avantages.

**Contenu recommandé :**
- Word GPT Plus est un module complémentaire pour Microsoft Word qui intègre la puissance de l'IA directement dans votre traitement de texte.
- Il vous permet de générer du texte, améliorer votre style, traduire du contenu, résumer des documents et bien plus, directement depuis l'interface de Word.
- Compatible avec plusieurs API d'IA (Gemini, Together, OpenRouter) pour vous donner le choix de l'IA qui vous convient le mieux.
- Interface entièrement en français et intuitive.

### 3. Téléchargement

```html
<section id="download">
  <h2>Téléchargement</h2>
  <p>Pour commencer, téléchargez le fichier manifest.xml qui permettra d'installer l'add-in dans Word :</p>
  <div class="download-button">
    <a href="manifest.xml" download>Télécharger manifest.xml</a>
  </div>
  <p><small>Ce fichier est configuré pour se connecter à l'add-in hébergé à l'adresse : https://ia-in-word.vercel.app</small></p>
</section>
```

### 4. Guide d'installation

Instructions détaillées avec captures d'écran pour :

1. **Ouvrir Word** 
   - Lancez Microsoft Word et ouvrez un document
   
2. **Accéder aux add-ins**
   - Cliquez sur l'onglet "Insertion" dans le ruban
   - Cliquez sur "Add-ins" ou "Mes add-ins" (varie selon les versions)

3. **Ajouter le manifest**
   - Cliquez sur "Mes add-ins"
   - Sélectionnez "Charger un add-in personnalisé" (ou "Gérer mes add-ins" puis "Charger un add-in")
   - Parcourez vos fichiers et sélectionnez le manifest.xml téléchargé
   - Cliquez sur "Ouvrir" ou "OK"

4. **Vérifier l'installation**
   - L'add-in Word GPT Plus devrait apparaître dans le ruban de Word, généralement sous l'onglet "Accueil"
   - Cliquez sur son icône pour ouvrir le volet de l'add-in

### 5. Fonctionnalités principales

Présentation des principales fonctionnalités avec des icônes ou illustrations :

- **Génération de texte** : Créez du contenu original basé sur vos instructions
- **Traduction** : Traduisez vos textes en plus de 40 langues différentes
- **Résumé** : Obtenez un résumé concis de votre texte sélectionné
- **Amélioration du style** : Perfectionnez la clarté et la qualité de vos écrits
- **Correction grammaticale** : Identifiez et corrigez les erreurs grammaticales
- **Rédaction académique** : Transformez votre texte en style académique professionnel
- **Conversation continue** : Poursuivez l'échange avec l'IA pour affiner les résultats

### 6. Guide d'utilisation

Explication détaillée de chaque élément de l'interface :

#### Interface principale

**Champ "Personnage"**
- C'est le ton ou le style que l'IA va adopter (professeur, rédacteur créatif, etc.)
- Vous pouvez sélectionner un personnage prédéfini dans la liste déroulante
- Vous pouvez créer vos propres personnages avec le bouton "+"
- Vous pouvez supprimer des personnages avec le bouton "-"

**Champ "Instruction"**
- C'est la consigne précise que vous donnez à l'IA
- Exemples : "Rédige une introduction sur...", "Explique ce concept..."
- Vous pouvez sauvegarder vos instructions fréquentes avec le bouton "+"
- Vous pouvez supprimer des instructions avec le bouton "-"

**Langue de réponse**
- Sélectionnez la langue dans laquelle l'IA doit vous répondre
- Plus de 40 langues disponibles

**Type d'insertion**
- Remplacer : remplace le texte sélectionné par la réponse de l'IA
- Ajouter : ajoute la réponse à la suite du texte sélectionné
- Nouvelle ligne : insère la réponse après le texte sélectionné avec un saut de ligne
- Aucune action : affiche seulement la réponse sans modifier le document

**Boutons d'action**
- Traduire : traduit le texte sélectionné dans la langue choisie
- Résumer : crée un résumé concis du texte sélectionné
- Améliorer : améliore la clarté et le style du texte
- Grammaire : corrige les erreurs grammaticales
- Académique : transforme le texte en style académique
- Paramètres : accède aux paramètres de l'add-in (configuration des API)

**Boutons principaux**
- Démarrer : lance une nouvelle conversation avec l'IA en utilisant le texte sélectionné, l'instruction et le personnage choisis
- Continuer : poursuit la conversation avec l'IA en lui demandant de développer ou d'améliorer sa réponse précédente (disponible uniquement pour certaines API)

#### Configuration API

Pour utiliser l'add-in, vous devez configurer au moins une API :

1. Cliquez sur le bouton "Paramètres"
2. Sélectionnez l'API que vous souhaitez utiliser (Gemini, Together, OpenRouter)
3. Entrez votre clé API dans le champ correspondant
4. Sélectionnez le modèle souhaité
5. Cliquez sur "Confirmer" pour sauvegarder vos paramètres

### 7. FAQ

Incluez les questions fréquemment posées et leurs réponses :

**Q : L'add-in est-il gratuit ?**  
R : L'add-in lui-même est gratuit, mais vous devez avoir vos propres clés API pour les services d'IA (Gemini, Together, OpenRouter).

**Q : Où puis-je obtenir une clé API ?**  
R : Vous pouvez obtenir une clé API Gemini gratuitement sur le site de Google AI, une clé Together sur together.ai ou une clé OpenRouter sur openrouter.ai.

**Q : Mes données sont-elles sécurisées ?**  
R : Vos textes sont envoyés directement aux API d'IA que vous avez configurées. Vos clés API sont stockées localement dans votre navigateur et ne sont jamais partagées.

**Q : Puis-je utiliser l'add-in hors ligne ?**  
R : Non, une connexion internet est nécessaire car l'add-in se connecte à des API en ligne.

**Q : Quelle API est recommandée pour commencer ?**  
R : L'API Gemini de Google est recommandée pour débuter car elle offre une généreuse utilisation gratuite.

**Q : Comment changer la langue de l'interface ?**  
R : L'interface est en français par défaut. Vous pouvez changer la langue dans les paramètres en cliquant sur "Paramètres" puis en modifiant "Langue de l'interface".

### 8. Pied de page

```html
<footer>
  <p>Word GPT Plus est un projet open source basé sur <a href="https://github.com/Kuingsmile/word-GPT-Plus" target="_blank">word-GPT-Plus</a>.</p>
  <p>Pour toute question ou support : <a href="mailto:votre-email@example.com">votre-email@example.com</a></p>
  <p>© 2023 Votre Nom. Tous droits réservés.</p>
</footer>
```

## Styles recommandés

Pour un site élégant et facile à utiliser, je vous recommande :

- Couleurs : bleu foncé (#1a73e8) comme couleur principale, blanc pour le fond, accents en gris clair
- Police : une police sans-serif comme Roboto ou Open Sans pour la lisibilité
- Images : des captures d'écran claires de chaque étape d'installation et d'utilisation
- Design responsive : s'adapte aux écrans mobiles et ordinateurs

## Exemple de structure CSS simplifiée

```css
:root {
  --primary-color: #1a73e8;
  --secondary-color: #f1f3f4;
  --text-color: #202124;
  --light-text: #5f6368;
}

body {
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

header {
  background-color: var(--primary-color);
  color: white;
  text-align: center;
  padding: 60px 0;
}

section {
  padding: 40px 0;
}

.cta-button a, .download-button a {
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.cta-button a:hover, .download-button a:hover {
  background-color: #0d5bcd;
}

.feature-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 40px 0;
}

.feature {
  flex-basis: calc(33.333% - 20px);
  margin-bottom: 30px;
  background: var(--secondary-color);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.installation-steps {
  counter-reset: step-counter;
}

.step {
  margin-bottom: 30px;
  padding-left: 50px;
  position: relative;
}

.step::before {
  content: counter(step-counter);
  counter-increment: step-counter;
  position: absolute;
  left: 0;
  top: 0;
  width: 35px;
  height: 35px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.screenshot {
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 15px 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

footer {
  background-color: var(--secondary-color);
  padding: 30px 0;
  text-align: center;
  margin-top: 40px;
}

/* Responsive design */
@media (max-width: 768px) {
  .feature {
    flex-basis: calc(50% - 15px);
  }
}

@media (max-width: 576px) {
  .feature {
    flex-basis: 100%;
  }
}
```

## JavaScript recommandé

Si vous souhaitez ajouter un peu d'interactivité, voici quelques fonctionnalités JavaScript utiles :

1. **Accordéon pour la FAQ**
```javascript
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    question.classList.toggle('active');
  });
});
```

2. **Défilement doux vers les ancres**
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
```

3. **Notification après téléchargement du manifest**
```javascript
document.querySelector('.download-button a').addEventListener('click', () => {
  setTimeout(() => {
    alert('Téléchargement terminé ! Suivez maintenant les instructions d\'installation.');
  }, 1000);
});
```

## Conclusion

En suivant ces recommandations, vous créerez un site web explicatif complet et facile à comprendre qui permettra à vos amis d'installer et d'utiliser efficacement l'add-in Word GPT Plus. N'oubliez pas d'ajouter suffisamment de captures d'écran pour rendre les instructions visuelles et plus faciles à suivre.

Le site devrait rester simple mais efficace, avec toutes les informations nécessaires présentées de manière claire et accessible. Bonne création ! 