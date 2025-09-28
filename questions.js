// questions.js
/**
 * @typedef {{id:string, theme:string, level:string, question:string,
 *            answers:string[], correct:number|number[], multi?:boolean,
 *            explanation?:string}} Q
 */

/** @type {Q[]} */
window.BANK = window.BANK || [
{ id:"BA1", theme:"Équipement", level:"moyen", question:"Le port du gilet airbag moto homologué…", answers:["Est obligatoire pour tous", "Peut améliorer la protection thoracique et cervicale en cas de chute", "Remplace le casque", "Interdit en ville"], correct:1, explanation:"L'airbag n’est pas obligatoire mais il complète efficacement le casque, gants et blouson." },

{ id:"BA2", theme:"Vitesse", level:"moyen", question:"Sur route secondaire limitée à 80 km/h, la distance de sécurité minimale est…", answers:["1 seconde", "2 secondes", "3 mètres", "Aucune obligation"], correct:1, explanation:"La règle des 2 secondes s’applique en toutes circonstances, plus si conditions dégradées." },

{ id:"BA3", theme:"Freinage", level:"moyen", question:"Avec ABS, en freinage d’urgence…", answers:["Je peux écraser brutalement les freins sans risque", "Je reste progressif et garde la moto droite", "Je n’utilise pas l’avant", "Je coupe le contact"], correct:1, explanation:"L’ABS aide à éviter le blocage, mais n’annule pas la nécessité d’un freinage contrôlé et droit." },

{ id:"BA4", theme:"Route", level:"moyen", question:"En virage aveugle, la bonne attitude est…", answers:["Freiner en plein angle", "Réduire l’allure avant, rester à droite et garder une marge", "Couper la trajectoire pour élargir la vue", "Accélérer fort"], correct:1, explanation:"Entrée modérée, placement à droite et regard loin assurent visibilité et sécurité." },

{ id:"BA5", theme:"Passager", level:"moyen", question:"Avec un passager inexpérimenté, je…", answers:["Augmente mes distances de sécurité et roule plus souplement", "Freine plus fort pour compenser", "Change de voie souvent", "Ne donne aucune consigne"], correct:0, explanation:"Un passager modifie l’équilibre, la conduite doit être plus anticipative et douce." },

{ id:"BA6", theme:"Entretien", level:"moyen", question:"Le liquide de refroidissement doit être contrôlé…", answers:["Uniquement l’été", "Régulièrement, car une fuite peut entraîner une surchauffe et casse moteur", "Jamais sur une moto", "Seulement à froid extrême"], correct:1, explanation:"Un niveau correct évite la surchauffe et préserve le moteur." },

{ id:"BA7", theme:"Météo", level:"moyen", question:"Sous pluie battante, je…", answers:["Roule visière ouverte", "Ralentis, augmente ma distance, allume mes feux et reste doux sur les commandes", "Freine tard et fort", "Roule collé au véhicule devant"], correct:1, explanation:"Visibilité et adhérence réduites → anticipation et douceur indispensables." },

{ id:"BA8", theme:"Autoroute", level:"moyen", question:"Lors d’un dépassement de poids lourd, je…", answers:["Reste longtemps à côté", "Dépasse franchement, reste visible et garde mes distances", "Me place dans son angle mort", "Me rabats sans clignotant"], correct:1, explanation:"Le souffle et les angles morts rendent dangereux un dépassement trop long." },

{ id:"BA9", theme:"Visibilité", level:"moyen", question:"De jour en interfile, être visible signifie…", answers:["Klaxonner en continu", "Feux allumés, vitesse modérée et positionnement clair", "Se coller aux voitures", "Rouler sans équipement"], correct:1, explanation:"La visibilité repose sur éclairage, équipement, positionnement et vitesse adaptée." },

{ id:"BA10", theme:"Fatigue", level:"moyen", question:"Un signe typique de fatigue en roulant est…", answers:["Meilleure concentration", "Réactions ralenties et vision qui se brouille", "Plus grande réactivité", "Envie d’accélérer"], correct:1, explanation:"Bâillements, yeux lourds, manque d’attention = pause indispensable." },

{ id:"BA11", theme:"Partage route", level:"moyen", question:"Face à un cycliste en agglomération, je…", answers:["Le dépasse à 50 cm", "Respecte au moins 1 m en ville (1,5 m hors agglomération)", "Passe très vite", "Klaxonne pour prévenir"], correct:1, explanation:"Distance légale = 1 m en ville, 1,5 m hors agglomération." },

{ id:"BA12", theme:"Mécanique", level:"moyen", question:"Un pneu sous-gonflé…", answers:["Améliore l’adhérence", "Se chauffe plus, s’use vite et réduit la tenue de route", "Consomme moins", "Ne change rien"], correct:1, explanation:"Sous-gonflage = risque d’éclatement, usure accélérée, mauvaise stabilité." },

{ id:"BA13", theme:"Virages", level:"moyen", question:"Pour corriger une trajectoire trop large en virage…", answers:["Je relève la moto doucement et freine arrière", "Je freine fort de l’avant en angle", "Je ferme les yeux", "Je coupe brutalement les gaz"], correct:0, explanation:"Réduire l’angle, utiliser légèrement l’arrière, garder regard vers sortie." },

{ id:"BA14", theme:"Signalisation", level:"moyen", question:"Un panneau rond bleu avec pictogramme moto signifie…", answers:["Danger moto", "Obligation pour motos", "Interdiction", "Information"], correct:1, explanation:"Un rond bleu = obligation (ex. piste obligatoire pour cycles/motos selon pictogramme)." },

{ id:"BA15", theme:"Secours", level:"moyen", question:"Une victime qui saigne abondamment…", answers:["Je serre la plaie avec une compression directe", "J’attends sans rien faire", "Je retire le casque", "Je donne de l’eau"], correct:0, explanation:"Compression directe = geste vital avant toute autre action." },

{ id:"BA16", theme:"Pratique", level:"moyen", question:"Démarrage sur sol glissant (pluie, gravier)…", answers:["Coup de gaz fort", "Gaz doux et embrayage progressif", "Toujours en 2e", "Accélération brutale"], correct:1, explanation:"Filet de gaz + embrayage progressif évitent patinage et perte d’équilibre." },

{ id:"BA17", theme:"Légalité", level:"moyen", question:"Le port du casque homologué est…", answers:["Facultatif en ville", "Obligatoire pour pilote et passager", "Réservé aux longs trajets", "Uniquement pour motos > 125 cm³"], correct:1, explanation:"Casque homologué attaché obligatoire en toutes circonstances, pilote et passager." },

{ id:"BA18", theme:"Pannes", level:"moyen", question:"Si ma moto cale en plein carrefour…", answers:["Je redémarre calmement si possible, sinon je pousse en sécurité", "Je reste au milieu", "J’abandonne la moto", "Je klaxonne sans agir"], correct:0, explanation:"Sécurité avant tout : tenter redémarrage rapide ou dégager la moto." },

{ id:"BA19", theme:"Adhérence", level:"moyen", question:"Les passages piétons peints mouillés sont…", answers:["Très adhérents", "Glissants, à franchir droit et sans freinage", "Sans danger", "À privilégier en virage"], correct:1, explanation:"Comme plaques métalliques : franchissez droit, pas d’angle ni freinage." },

{ id:"BA20", theme:"Formation", level:"moyen", question:"Le principal objectif de la trajectoire de sécurité est…", answers:["Aller plus vite", "Améliorer la visibilité et garder de la marge en cas d’imprévu", "Faire joli", "Rouler au milieu"], correct:1, explanation:"Entrée extérieure, corde tardive, sortie large = vision, stabilité, sécurité." },


{ id:"BB1", theme:"Autoroute", level:"moyen", question:"En cas de pluie sur autoroute, la vitesse maximale autorisée est…", answers:["130 km/h", "110 km/h", "100 km/h", "90 km/h"], correct:1, explanation:"Sous pluie, la limitation passe de 130 à 110 km/h." },

{ id:"BB2", theme:"Freinage", level:"moyen", question:"L’utilisation combinée des freins avant et arrière…", answers:["Améliore la stabilité et réduit la distance d’arrêt", "Allonge la distance de freinage", "Est inutile", "Est interdite"], correct:0, explanation:"La répartition du freinage entre avant et arrière assure efficacité et stabilité." },

{ id:"BB3", theme:"Passager", level:"moyen", question:"Avec un passager, la pression des pneus…", answers:["Doit rester identique", "Peut nécessiter un ajustement selon préconisation constructeur", "Doit être réduite", "N’a aucune importance"], correct:1, explanation:"Les constructeurs recommandent souvent une pression légèrement plus élevée." },

{ id:"BB4", theme:"Météo", level:"moyen", question:"Par brouillard dense, je…", answers:["Allume mes feux de route", "Allume mes feux de croisement et/ou antibrouillard si disponible", "Éteins tout éclairage", "Roulez en plein phare"], correct:1, explanation:"Feux de croisement ou antibrouillard, pas de pleins phares qui éblouissent." },

{ id:"BB5", theme:"Entretien", level:"moyen", question:"Un niveau d’huile moteur trop élevé…", answers:["Est sans danger", "Peut endommager le moteur (surpression, fuite)", "Lubrifie mieux", "Permet de rouler plus longtemps"], correct:1, explanation:"Un excès d’huile nuit à la lubrification et peut abîmer joints et moteur." },

{ id:"BB6", theme:"Ville", level:"moyen", question:"En circulation interfile, la vitesse conseillée est…", answers:["Max 20 km/h de plus que le flux, sans dépasser 50 km/h", "Même vitesse que les voitures", "À fond pour passer vite", "Peu importe"], correct:0, explanation:"Le code prévoit une vitesse max de 50 km/h et 20 km/h au-dessus du flux." },

{ id:"BB7", theme:"Trajectoire", level:"moyen", question:"Pour négocier un virage serré à basse vitesse, je…", answers:["Fixe ma roue avant", "Tourne la tête vers la sortie, embrayage et filet de gaz", "Freine de l’avant", "Bloque mon guidon"], correct:1, explanation:"Regard et équilibre sont essentiels à basse vitesse." },

{ id:"BB8", theme:"Secours", level:"moyen", question:"Un motard accidenté qui ne respire plus…", answers:["Je le mets en PLS", "J’alerte immédiatement et commence le massage cardiaque", "Je retire son casque systématiquement", "Je le fais boire"], correct:1, explanation:"PAS : Protéger, Alerter, Secourir → massage cardiaque si absence de respiration." },

{ id:"BB9", theme:"Adhérence", level:"moyen", question:"Une route froide et sèche offre…", answers:["La même adhérence qu’en été", "Moins d’adhérence, pneus plus longs à chauffer", "Meilleure adhérence", "Aucune différence"], correct:1, explanation:"Températures basses réduisent l’adhérence et rallongent la mise en température." },

{ id:"BB10", theme:"Équipement", level:"moyen", question:"Les gants obligatoires doivent être…", answers:["Homologués CE", "Peu importe", "Uniquement en hiver", "Réservés aux longs trajets"], correct:0, explanation:"Depuis 2016, gants CE obligatoires pour conducteur et passager." },

{ id:"BB11", theme:"Autoroute", level:"moyen", question:"La bande d’arrêt d’urgence peut être utilisée…", answers:["Pour dépasser", "Uniquement en cas de panne ou urgence", "Pour rouler plus vite", "Jamais"], correct:1, explanation:"La BAU est strictement réservée aux pannes/urgences." },

{ id:"BB12", theme:"Virages", level:"moyen", question:"Le contre-braquage est…", answers:["Un mythe", "Un principe réel permettant d’inscrire la moto en virage dès 30 km/h", "Uniquement sur piste", "Dangereux"], correct:1, explanation:"Appuyer sur le guidon du côté du virage fait basculer la moto." },

{ id:"BB13", theme:"Entretien", level:"moyen", question:"Un filtre à air encrassé…", answers:["Améliore la performance", "Réduit la puissance et augmente la consommation", "N’a aucun effet", "Protège mieux"], correct:1, explanation:"Un filtre sale empêche une bonne combustion → perte de puissance + surconsommation." },

{ id:"BB14", theme:"Fatigue", level:"moyen", question:"Pour éviter la somnolence lors d’un long trajet…", answers:["Je bois du café uniquement", "Je fais des pauses toutes les 2h max et m’hydrate", "Je force malgré la fatigue", "Je roule la nuit"], correct:1, explanation:"Pause régulière, hydratation, alimentation légère = clés contre la fatigue." },

{ id:"BB15", theme:"Partage route", level:"moyen", question:"Lorsqu’une ambulance active son gyrophare derrière moi, je…", answers:["Accélère pour m’écarter", "Me rabats calmement dès que possible pour laisser passer", "Bloque le passage", "Klaxonne"], correct:1, explanation:"Il faut faciliter son passage sans danger ni brusquerie." },

{ id:"BB16", theme:"Pratique", level:"moyen", question:"À l’arrêt en côte, pour ne pas reculer…", answers:["J’utilise l’embrayage et le frein arrière", "Je lâche tout", "Je reste sur le frein avant seulement", "J’accélère à fond"], correct:0, explanation:"Frein arrière + embrayage/gaz assurent contrôle et stabilité." },

{ id:"BB17", theme:"Signalisation", level:"moyen", question:"Un panneau triangulaire avec une moto signifie…", answers:["Obligation", "Danger de circulation spécifique de motos", "Interdiction", "Information"], correct:1, explanation:"Triangle rouge = danger, ici lié aux motos (trafic, traversées possibles)." },

{ id:"BB18", theme:"Mécanique", level:"moyen", question:"Un disque de frein voilé peut provoquer…", answers:["Aucun effet", "Des vibrations et freinage moins efficace", "Une meilleure puissance de freinage", "Une économie d’essence"], correct:1, explanation:"Un disque voilé = perte d’efficacité et vibrations, dangereux." },

{ id:"BB19", theme:"Légalité", level:"moyen", question:"Rouler sans assurance moto…", answers:["Est autorisé si on fait attention", "Est passible de fortes sanctions (amende, immobilisation, suspension)", "Est toléré en campagne", "Ne concerne que les gros cubes"], correct:1, explanation:"Assurance RC obligatoire → sinon amende, saisie, suspension." },

{ id:"BB20", theme:"Éclairage", level:"moyen", question:"De nuit sur route éclairée, j’utilise…", answers:["Les feux de croisement", "Les feux de route en permanence", "Les warnings", "Pas de feu"], correct:0, explanation:"En agglomération éclairée, feu de croisement suffisant pour voir et être vu." },


{ id:"BC1", theme:"Virages", level:"moyen", question:"À l’approche d’un virage inconnu en descente, je…", answers:["Freine tard en plein angle", "Réduis l’allure avant l’inclinaison et garde un filet de gaz", "Reste sur le frein avant dans l’angle", "Coupe totalement les gaz jusqu’à l’apex"], correct:1, explanation:"Freiner moto droite puis conserver un filet de gaz stabilise la moto en descente." },

{ id:"BC2", theme:"Pneus", level:"moyen", question:"Indice de charge et de vitesse d’un pneu…", answers:["Sont décoratifs", "Doivent être au moins égaux aux préconisations constructeur", "Peuvent être inférieurs si on roule doucement", "N’existent que pour l’avant"], correct:1, explanation:"Respecter les indices garantit tenue mécanique et légale du pneu." },

{ id:"BC3", theme:"Freinage", level:"moyen", question:"Sur revêtement bosselé en freinage d’urgence, je…", answers:["Augmente la pression brutalement", "Reste progressif et laisse travailler l’ABS si équipé", "Utilise uniquement l’arrière très fort", "Coupe le contact"], correct:1, explanation:"Progressivité + maintien de la trajectoire; l’ABS gère les pertes d’adhérence ponctuelles." },

{ id:"BC4", theme:"Éclairage", level:"moyen", question:"De jour par pluie et faible luminosité, pour être vu je…", answers:["Éteins les feux", "Allume les feux de croisement", "Utilise les feux de route", "Utilise les warnings en continu"], correct:1, explanation:"Les feux de croisement améliorent la détection sans éblouir." },

{ id:"BC5", theme:"Passager", level:"moyen", question:"Avant départ, je vérifie pour le passager…", answers:["Casque attaché et gants homologués", "Chaussures ouvertes", "Sac non arrimé", "Qu’il se tient à une main"], correct:0, explanation:"EPI homologués et arrimage des objets indispensables à la sécurité." },

{ id:"BC6", theme:"Entretien", level:"moyen", question:"Un kit chaîne correctement réglé…", answers:["Doit être tendu au maximum", "Respecte la flèche prescrite et reçoit une lubrification régulière", "Se lubrifie à chaud uniquement", "N’a pas besoin de contrôle"], correct:1, explanation:"Tension/flèche constructeur + lubrification = longévité et sécurité." },

{ id:"BC7", theme:"Météo", level:"moyen", question:"Risque d’aquaplanage accru lorsque…", answers:["Pneus neufs et route sèche", "Vitesse élevée, eau accumulée, pneus usés ou sous-gonflés", "Température élevée", "Vent arrière"], correct:1, explanation:"Eau, vitesse et pneus inadaptés favorisent la perte de contact." },

{ id:"BC8", theme:"Partage de la route", level:"moyen", question:"À une intersection masquée par des véhicules en stationnement, je…", answers:["Accélère pour dégager vite", "Ralenti, me décale pour voir et me rends visible", "Serre à droite sans regarder", "Klaxonne et passe"], correct:1, explanation:"Décalage, regard et vitesse réduite rétablissent la visibilité mutuelle." },

{ id:"BC9", theme:"Trajectoire sécu", level:"moyen", question:"La corde tardive sur route permet principalement…", answers:["D’attaquer plus fort", "D’augmenter le champ de vision en sortie et la marge face aux obstacles", "De freiner plus longtemps en angle", "De couper la voie opposée"], correct:1, explanation:"Vision + marge → meilleure capacité d’évitement." },

{ id:"BC10", theme:"Secours", level:"moyen", question:"Avant de secourir, la priorité absolue est…", answers:["Photographier la scène", "Sécuriser la zone pour éviter le sur-accident", "Déplacer tous les blessés", "Donner à boire"], correct:1, explanation:"Protéger (sécuriser), Alerter, Secourir." },

{ id:"BC11", theme:"Ville", level:"moyen", question:"Ouverture de portière imprévisible : je…", answers:["Roule près des voitures stationnées", "Laisse un couloir de sécurité et surveille signes (têtes, feux) ", "Klaxonne en continu", "Regarde seulement mon compteur"], correct:1, explanation:"Anticipation par marge latérale et observation des indices." },

{ id:"BC12", theme:"Frein arrière", level:"moyen", question:"À très basse vitesse en manœuvre, le frein arrière…", answers:["Déstabilise la moto", "Aide à tendre la transmission et stabiliser l’assiette", "Est interdit", "Doit être écrasé"], correct:1, explanation:"Dosé finement, il stabilise et complète l’embrayage/gaz." },

{ id:"BC13", theme:"Ergonomie", level:"moyen", question:"Position des mains pour une bonne finesse de commande…", answers:["Poignets cassés vers le bas", "Poignets alignés, bras détendus, coudes souples", "Bras tendus et rigides", "Doigts constamment crispés"], correct:1, explanation:"Souplesse = précision des commandes et moins de fatigue." },

{ id:"BC14", theme:"Légalité", level:"moyen", question:"Transport d’objets sur le dos (sac à dos lourd)…", answers:["Sans incidence", "Peut aggraver les blessures et gêner l’équilibre", "Obligatoire en ville", "Remplace une bagagerie"], correct:1, explanation:"Privilégier arrimage/bagagerie; éviter charges hautes et mobiles sur le dos." },

{ id:"BC15", theme:"Pannes", level:"moyen", question:"Câble d’embrayage qui commence à gripper en roulant : signes…", answers:["Commande plus dure et retour irrégulier", "Moto qui tire à droite", "Clignotant qui clignote vite", "Chaîne qui couine"], correct:0, explanation:"Dureté/retour = lubrification/ajustement à prévoir, risque de rupture." },

{ id:"BC16", theme:"Autoroute", level:"moyen", question:"Entrée de tunnel venteux : je…", answers:["Me crispe", "Reste souple, réduis légèrement la vitesse et tiens mon cap", "Relâche le guidon", "Accélère fort"], correct:1, explanation:"Rafales possibles : souplesse et cap stable." },

{ id:"BC17", theme:"Électronique", level:"moyen", question:"L’ABS en courbe (cornering ABS)…", answers:["N’existe pas", "Optimise le freinage en prenant en compte l’angle, mais ne supprime pas la limite d’adhérence", "Permet de freiner à n’importe quel angle sans risque", "Remplace la trajectoire"], correct:1, explanation:"Aide avancée, mais les lois physiques restent les mêmes." },

{ id:"BC18", theme:"Carburant", level:"moyen", question:"Rouler souvent en réserve…", answers:["Sans effet", "Peut entraîner aspiration d’impuretés et surchauffe de pompe", "Nettoie le réservoir", "Économise la pompe"], correct:1, explanation:"Mieux vaut ravitailler avant la réserve pour préserver le circuit." },

{ id:"BC19", theme:"Adhérence", level:"moyen", question:"Peinture au sol chaude en été…", answers:["Très adhérente", "Peut devenir glissante, surtout à l’angle", "Sans effet", "À privilégier pour freiner"], correct:1, explanation:"Éviter de solliciter frein/angle dessus; passer droit si possible." },

{ id:"BC20", theme:"Équipement", level:"avancé", question:"Éléments augmentant la visibilité active (plusieurs réponses)", answers:["Couleurs claires/fluos de l’équipement", "Feu de croisement allumé", "Catadioptres en bon état", "Éclairage additionnel mal réglé éblouissant"], correct:[0,1,2], multi:true, explanation:"Visibilité = combinaison équipement/éclairage/positionnement; éviter tout éblouissement." }

];


Object.freeze(window.BANK);
window.BANK.forEach(q => {
  if (Array.isArray(q.answers)) Object.freeze(q.answers);
  if (Array.isArray(q.correct)) Object.freeze(q.correct);
});

(function validateBank(bank){
  const ids = new Set();
  bank.forEach((q, i) => {
    const where = `#${i} (${q.id || 'sans id'})`;
    // id unique
    if (q.id) {
      if (ids.has(q.id)) console.warn(`ID en double ${where}:`, q.id);
      ids.add(q.id);
    } else {
      console.warn(`ID manquant ${where}`);
    }
    // réponses
    if (!Array.isArray(q.answers) || q.answers.length < 2) {
      console.warn(`Réponses invalides ${where}: il faut au moins 2 propositions`);
    }
    // cohérence correct/multi
    if (q.multi) {
      if (!Array.isArray(q.correct) || q.correct.length === 0) {
        console.warn(`Question multi sans tableau correct ${where}`);
      } else {
        q.correct.forEach(idx => {
          if (idx < 0 || idx >= q.answers.length) {
            console.warn(`Index correct hors borne ${where}:`, idx);
          }
        });
      }
    } else {
      if (Array.isArray(q.correct)) {
        console.warn(`Question non-multi avec correct[] ${where}`);
      } else if (typeof q.correct !== 'number' || q.correct < 0 || q.correct >= q.answers.length) {
        console.warn(`Index correct invalide ${where}:`, q.correct);
      }
    }
  });
})(window.BANK);
