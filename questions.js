// questions.js
/**
 * @typedef {{id:string, theme:string, level:string, question:string,
 *            answers:string[], correct:number|number[], multi?:boolean,
 *            explanation?:string}} Q
 */

/** @type {Q[]} */
window.BANK = window.BANK || [
{ id:"H2", theme:"Fatigue", level:"moyen", question:"Pour prévenir la fatigue…", answers:["Je roule la nuit pour éviter la chaleur", "Je fais des pauses régulières et m'hydrate", "Je serre le réservoir plus fort", "Je monte le son de la musique"], correct:1, explanation:"Hydratation, pauses régulières, alimentation légère et sommeil suffisant avant départ." },


{ id:"I1", theme:"Passager", level:"facile", question:"Avec un passager, la moto…", answers:["Freine plus court", "Accélère mieux", "Nécessite d'augmenter les distances et d'adapter les réglages", "Ne change pas"], correct:2, explanation:"Masse plus élevée = distances de freinage plus longues, motricité et équilibre différents." },
{ id:"I2", theme:"Passager", level:"moyen", question:"Avant d'emmener un passager, je lui rappelle…", answers:["De rester rigide et regarder la roue", "De suivre mes mouvements, garder les pieds sur repose‑pieds et ne pas bouger brusquement", "De se pencher à l'opposé", "De lâcher les poignées"], correct:1, explanation:"Un passager qui accompagne le pilote facilite l'équilibre et la trajectoire." },


{ id:"J1", theme:"Freinage", level:"moyen", question:"Un freinage d'urgence efficace, c'est…", answers:["Tout de l'avant, d'un coup", "Progressif puis plus ferme, répartition avant/arrière, regard loin", "Uniquement l'arrière", "Couper l'allumage"], correct:1, explanation:"Saisir la garde puis appuyer fortement en ligne droite, poids sur l'avant, rétrogradage si besoin." },
{ id:"J2", theme:"Freinage", level:"moyen", question:"Sur route mouillée, le freinage…", answers:["Se fait aussi fort qu'au sec", "Demande plus de distance et de douceur", "Se fait seulement de l'arrière", "Est inutile avec ABS"], correct:1, explanation:"Adoucissez la pression, anticipez plus tôt, gardez la moto droite autant que possible." },


{ id:"K1", theme:"Visibilité", level:"moyen", question:"Pour être mieux vu en journée, je…", answers:["Éteins l'éclairage", "Allume le feu de croisement et porte des équipements clairs", "Clignote en permanence", "Utilise l'appel de phare en continu"], correct:1, explanation:"Feu de croisement et équipement visible améliorent la détection par les autres usagers." },
{ id:"K2", theme:"Visibilité", level:"moyen", question:"Angle mort des voitures : je…", answers:["Reste à hauteur de portière", "Évite de stationner durablement dans cette zone et me rends visible", "Colle le pare‑choc", "Klaxonne systématiquement"], correct:1, explanation:"Décalez‑vous pour être vu dans les rétros, gardez une distance et anticipez les changements de file." },


{ id:"L1", theme:"Environnement", level:"moyen", question:"Pneus froids en début de trajet…", answers:["Offrent l'adhérence maximale", "Exigent une conduite douce le temps de chauffer", "N'ont d'effet qu'en été", "Ne concernent pas les motos"], correct:1, explanation:"Quelques kilomètres sont nécessaires pour atteindre la température d'usage et l'adhérence optimale." },
{ id:"L2", theme:"Environnement", level:"moyen", question:"Rails, grilles, plaques métalliques…", answers:["Offrent une excellente adhérence", "Peuvent être très glissants surtout mouillés", "Peuvent être franchis en angle prononcé", "Se traversent en freinant fort"], correct:1, explanation:"Franchissez les rails/grilles le plus droit possible, sans freinage ni angle marqué." },


{ id:"M1", theme:"Entretien", level:"moyen", question:"Une chaîne trop détendue…", answers:["Améliore le confort", "Risque de sauter et d'endommager la transmission", "Économise l'essence", "N'est pas un problème"], correct:1, explanation:"Tension conforme et lubrification régulière = longévité et sécurité." },
{ id:"M2", theme:"Entretien", level:"moyen", question:"Un témoin d'usure sur pneu…", answers:["N'existe pas", "Indique la limite légale d'usure", "S'allume au tableau de bord", "Sert uniquement sur piste"], correct:1, explanation:"Les témoins (TWI) dans les rainures indiquent la profondeur minimale restante." },


{ id:"N1", theme:"Chargement", level:"moyen", question:"Charger la moto (bagagerie)…", answers:["N'influe pas la tenue de route", "Nécessite de répartir les masses et d'arrimer solidement", "Se fait lourd à l'arrière uniquement", "Se fait sans vérifier la pression"], correct:1, explanation:"Répartition équilibrée et arrimage sûr évitent louvoiements et pertes d'équilibre." },
{ id:"N2", theme:"Chargement", level:"moyen", question:"Avec top‑case lourd, la direction…", answers:["Devient plus vive", "Peut devenir légère et instable à haute vitesse", "Devient neutre", "Se verrouille"], correct:1, explanation:"Un poids en hauteur/à l'arrière modifie la répartition et peut induire des mouvements parasites." },


{ id:"O1", theme:"Météo", level:"moyen", question:"Par grand vent latéral, j'adopte…", answers:["Position très rigide", "Souplesse, réduction de vitesse, anticipation des rafales et des zones exposées", "Je lâche le guidon", "Je roule au milieu"], correct:1, explanation:"Souplesse et anticipation, attention aux ponts, sorties de tunnels, dépassements de PL." },
{ id:"O2", theme:"Météo", level:"moyen", question:"Par forte chaleur, je…", answers:["Roulez sans équipement", "Porte un équipement ventilé et m'hydrate", "Monte la pression des pneus", "Coupe mes pauses"], correct:1, explanation:"La sécurité prime : équipement ventilé homologué et pauses + hydratation." },


{ id:"P1", theme:"Pannes", level:"moyen", question:"En cas de crevaison en roulant, je…", answers:["Freine fort de l'avant", "Reste souple, ralentis progressivement et me mets en sécurité", "Balance la moto pour répartir", "Accélère pour réchauffer"], correct:1, explanation:"Restez droit, pas d'actions brusques, arrêtez‑vous en sécurité pour inspection/réparation." },
{ id:"P2", theme:"Pannes", level:"moyen", question:"Batterie faible : au démarrage…", answers:["J'insiste longtemps sur le démarreur", "Je coupe consommateurs et tente par petites impulsions", "J'accélère à fond au point mort", "Je débranche le phare longue portée uniquement"], correct:1, explanation:"Réduisez les consommateurs, évitez d'insister longtemps au démarreur pour ménager la batterie." },


{ id:"Q1", theme:"Partage de la route", level:"moyen", question:"Près d'un poids lourd, je…", answers:["Reste dans ses angles morts", "Garde mes distances et dépasse franchement en restant visible", "Colle à gauche de sa remorque", "Me cale devant son pare‑choc"], correct:1, explanation:"Nombreux angles morts et souffle : restez visibles et éloignés; dépassez sans traîner." },
{ id:"Q2", theme:"Partage de la route", level:"moyen", question:"Aux passages piétons, je…", answers:["Dépasse par la droite", "Ralentis et cède le passage aux piétons engagés", "Pousse un appel de phare pour passer", "Me faufile entre piétons"], correct:1, explanation:"Les piétons engagés sont prioritaires. Anticipez et ralentissez." },


{ id:"R1", theme:"Manœuvres", level:"moyen", question:"Demi‑tour serré : je…", answers:["Regarde devant ma roue", "Tourne la tête et regarde la sortie, garde du léger gaz et embrayage", "Freine de l'avant en plein braquage", "Bloque les bras"], correct:1, explanation:"Regard, équilibre, léger filet de gaz, embrayage pour contrôler l'allure." },
{ id:"R2", theme:"Manœuvres", level:"moyen", question:"Marche arrière à pied :", answers:["Moteur coupé uniquement", "Moteur possible mais prudence, position à gauche, regard, frein arrière prêt", "Toujours en selle", "Interdite"], correct:1, explanation:"Sécurité d'abord : contrôle des appuis, frein arrière prêt, zone dégagée." },


{ id:"S1", theme:"Mécanique", level:"moyen", question:"Une huile trop vieille…", answers:["Lubrifie mieux", "Perd de ses qualités et encrasse", "N'a aucun impact", "Refroidit davantage"], correct:1, explanation:"Respectez les périodicités de vidange, filtre inclus." },
{ id:"S2", theme:"Mécanique", level:"moyen", question:"Liquide de frein hygroscopique signifie…", answers:["Qui repousse l'eau", "Qui absorbe l'humidité de l'air", "Qui devient solide à chaud", "Sans importance"], correct:1, explanation:"L'eau absorbée abaisse le point d'ébullition → purge périodique nécessaire." },


{ id:"T1", theme:"Trajectoire sécu", level:"moyen", question:"Entrée de virage en sécurité sur route : je privilégie…", answers:["Entrée serrée à la corde", "Entrée large, regard loin, corde tardive, sortie ouverte", "Entrée au milieu", "Freinage en plein angle"], correct:1, explanation:"Trajectoire sécurité route : entrée extérieure, corde tardive → meilleure visibilité et marge." },
{ id:"T2", theme:"Trajectoire sécu", level:"moyen", question:"Pour éviter le regard figé sur un obstacle (ciblage), je…", answers:["Fixe l'obstacle", "Regarde l'échappatoire et dirige la moto vers l'espace libre", "Ferme les yeux", "Ralentis en ligne uniquement"], correct:1, explanation:"Votre moto suit le regard : fixez l'issue, pas le danger." },


{ id:"U1", theme:"Avertisseurs", level:"facile", question:"L'avertisseur sonore…", answers:["S'utilise uniquement pour saluer", "S'utilise pour prévenir d'un danger immédiat", "Est interdit en ville", "Doit être utilisé en continu"], correct:1, explanation:"Son usage est réservé à la prévention des dangers, sans abus." },
{ id:"U2", theme:"Éclairage", level:"moyen", question:"De nuit, hors agglomération, je peux utiliser…", answers:["Uniquement le feu de croisement", "Les feux de route si je ne risque pas d'éblouir", "Les feux de détresse en continu", "Aucun feu"], correct:1, explanation:"Feux de route autorisés s'ils n'éblouissent personne en face ou devant." },


{ id:"V1", theme:"Adhérence", level:"moyen", question:"Température basse + route humide =", answers:["Adhérence accrue", "Adhérence réduite, commandes douces et marges augmentées", "Aucun effet", "Permet de freiner plus court"], correct:1, explanation:"Conditions défavorables : augmentez les distances et la progressivité." },
{ id:"V2", theme:"Adhérence", level:"moyen", question:"Les bandes de bitume de réparation (nids‑de‑poule rebouchés)…", answers:["Sont très adhérentes", "Peuvent être glissantes surtout en été", "Ne concernent pas les motos", "Se prennent en fort angle"], correct:1, explanation:"Évitez de les prendre en plein angle, surtout chaud → film bitumineux glissant." },


{ id:"W1", theme:"Légalité", level:"moyen", question:"Échappement non homologué trop bruyant…", answers:["Améliore la sécurité", "Exposé à contravention et nuisance", "Toujours autorisé", "Sans effet"], correct:1, explanation:"Nuisances sonores et risque de sanctions, préférez l'homologué." },
{ id:"W2", theme:"Légalité", level:"moyen", question:"Plaque immatriculation repliée ou trop petite…", answers:["Sans importance", "Susceptible de verbalisation", "Obligatoire en ville", "Réservée à la piste seulement"], correct:1, explanation:"Conformité de la plaque requise sur route ouverte." },


{ id:"X1", theme:"Secours", level:"moyen", question:"Après un accident, la bonne conduite (PAS)…", answers:["Protéger, Alerter, Secourir", "Photographier, Alerter, Partir", "Secourir d'abord", "Toujours déplacer les blessés"], correct:0, explanation:"Sécurisez la zone, alertez les secours, puis prodiguez les gestes adaptés sans vous mettre en danger." },
{ id:"X2", theme:"Secours", level:"moyen", question:"Un blessé inconscient qui respire…", answers:["Reste sur le dos", "Est placé en PLS (position latérale de sécurité)", "On lui donne à boire", "On retire le casque systématiquement"], correct:1, explanation:"PLS si respiration présente. Ne retirez pas le casque sauf nécessité vitale par personne formée." },


{ id:"Y1", theme:"Pratique", level:"moyen", question:"Démarrage en côte :", answers:["Un grand coup de gaz sans embrayage", "Je joue l'embrayage avec un filet de gaz et maintiens le frein arrière", "Je lâche tout d'un coup", "Je coupe le moteur"], correct:1, explanation:"Coordination embrayage/gaz + maintien du frein arrière pour contrôler le point de patinage." },
{ id:"Y2", theme:"Pratique", level:"moyen", question:"À basse vitesse, la stabilité est aidée par…", answers:["Regard loin + filet de gaz + embrayage", "Frein avant serré en permanence", "Braquage opposé", "Aucun des choix"], correct:0, explanation:"Regard loin, filet de gaz constant, embrayage pour doser l'allure, frein arrière si besoin." },


{ id:"Z1", theme:"Divers", level:"moyen", question:"Rouler longtemps avec visière embuée…", answers:["Améliore la concentration", "Réduit fortement la visibilité, j'aère et traite la visière", "Sans effet", "Obligatoire par froid"], correct:1, explanation:"Utilisez l'entrebâillement, un insert antibuée ou un traitement anti‑fog." },
{ id:"Z2", theme:"Divers", level:"moyen", question:"Trajectoire de sécurité en montagne :", answers:["Coupe les virages pour élargir", "Respecte sa voie, anticipe gravillons/animaux et garde de la marge", "Se cale près du ravin", "Accélère en aveugle"], correct:1, explanation:"Visibilité limitée et risques spécifiques : restez dans votre voie et conservez de la marge." },


// Questions multi‑réponses (multi: true, correct: [indices])
{ id:"MUL1", theme:"Équipement", level:"avancé", question:"Éléments d'équipement de protection recommandés (plusieurs réponses)", answers:["Blouson renforcé", "Jean classique", "Pantalon avec protections", "Chaussures montantes renforcées"], correct:[0,2,3], multi:true, explanation:"Outre casque/gants obligatoires, privilégiez blouson renforcé, pantalon protégé, chaussures montantes." },
{ id:"MUL2", theme:"Conduite", level:"avancé", question:"Bonnes pratiques sous forte pluie (plusieurs réponses)", answers:["Doubler la distance de sécurité", "Accélérations/freinages doux", "Rester sur les bandes blanches", "Allumer feu de croisement"], correct:[0,1,3], multi:true, explanation:"Augmentez les marges, évitez zones glissantes, feu de croisement pour être vu." },
{ id:"MUL3", theme:"Entretien", level:"avancé", question:"Contrôles courants avant départ (plusieurs réponses)", answers:["Pneus (état/pression)", "Freins/éclairage", "Tension chaîne", "Couleur du réservoir"], correct:[0,1,2], multi:true, explanation:"Un tour de la moto : pneus, freins, éclairage, chaîne, fuites éventuelles, commandes." },


// Ajouts pour étoffer la banque
{ id:"AA1", theme:"Virages", level:"moyen", question:"Surprise en virage (gravillons), je…", answers:["Redresse doucement et freine principalement arrière", "Garde l'angle et freine fort avant", "Relève et braque brutalement", "Regarde devant ma roue"], correct:0, explanation:"Réduisez l'angle, regard loin, frein arrière doux pour stabiliser." },
{ id:"AA2", theme:"Virages", level:"moyen", question:"Contre‑braquage à vitesse > 30 km/h…", answers:["N'existe pas", "Permet d'inscrire la moto en courbe en poussant sur le guidon du côté où l'on veut tourner", "Se fait avec les pieds uniquement", "Toujours dangereux"], correct:1, explanation:"Léger appui sur la poignée du côté du virage pour initier l'inclinaison." },
{ id:"AB1", theme:"Autoroute", level:"moyen", question:"Entrée sur autoroute :", answers:["Je m'insère sans regarder", "J'utilise la voie d'accélération pour atteindre la vitesse du flux et je m'insère en sécurité", "Je m'arrête en bout de bretelle", "Je serre la bande d'arrêt d'urgence"], correct:1, explanation:"Adaptez la vitesse, contrôles rétros/angle mort, clignotant et insertion fluide." },
{ id:"AC1", theme:"Ville", level:"moyen", question:"En ville, principaux risques…", answers:["Piétons, portières, changements de file, intersections", "Manque d'oxygène", "Animaux sauvages", "Chutes de pierres"], correct:0, explanation:"Anticipez ouvertures de portières, piétons, véhicules qui tournent sans clignotant." },
{ id:"AD1", theme:"Feux", level:"moyen", question:"Feux de détresse (warning)…", answers:["À utiliser pour signaler un danger ou un ralentissement important", "Pour dire merci", "Pour rouler en inter‑file", "En virage pour éclairer"], correct:0, explanation:"Réservés au signalement d'un danger/ralentissement." },
{ id:"AE1", theme:"Stationnement", level:"moyen", question:"Stationner la moto…", answers:["Sur trottoir sans gêner", "Sur emplacement autorisé, stable, béquille solide, 1ère enclenchée si pente", "Uniquement face au vent", "Peu importe l'inclinaison"], correct:1, explanation:"Choisissez un sol stable, évitez pentes fortes, vérifiez béquille et sécurité." },
{ id:"AF1", theme:"Sécurité active", level:"moyen", question:"Système airbag moto…", answers:["Gadget inutile", "Peut réduire la gravité des blessures lors d'un choc", "Interdit sur route", "Remplace le casque"], correct:1, explanation:"Airbag = protection complémentaire, ne remplace aucun autre EPI." },
{ id:"AG1", theme:"Trafic", level:"moyen", question:"Embouteillages : je…", answers:["Double à vive allure entre files", "Reste très modéré et anticipe ouvertures de portières", "Coupe par la BAU systématiquement", "Roule feux éteints"], correct:1, explanation:"Visibilité, modération, patience et anticipation sont clés." },
{ id:"AH1", theme:"Piste vs route", level:"moyen", question:"Techniques piste (freinage tardif, grande prise d'angle)…", answers:["À reproduire sur route ouverte", "À adapter prudemment, route = aléas et visibilité limitée", "Toujours meilleures partout", "Sans différence"], correct:1, explanation:"La route impose marge/lecture, pas de visibilité ni dégagements comme sur piste." },
{ id:"AI1", theme:"Électronique", level:"moyen", question:"Contrôle de traction (TCS)…", answers:["Accélère à votre place", "Limite le patinage de la roue arrière", "Freine automatiquement", "Supprime tout risque de glisse"], correct:1, explanation:"Le TCS corrige le couple pour réduire le patinage; restez progressif sur l'accélérateur." },
{ id:"AJ1", theme:"Pneus", level:"moyen", question:"Carrés/plat sur pneu arrière…", answers:["Aucun effet", "Peut rendre la moto moins vive et instable en mise sur l'angle", "Meilleure adhérence", "Obligatoire"], correct:1, explanation:"Usure en plat modifie le profil → réactions moins progressives en virage." },
{ id:"AK1", theme:"Frein arrière", level:"moyen", question:"Frein arrière en virage…", answers:["Toujours fort", "Peut aider très légèrement à resserrer la trajectoire si moto assez droite", "Interdit", "À utiliser pour accélérer"], correct:1, explanation:"Dosage fin et moto la plus droite possible; sinon risque de perte d'adhérence." },
{ id:"AL1", theme:"Chaussée", level:"moyen", question:"Feuilles mortes humides…", answers:["Très adhérentes", "Glissantes, éviter l'angle et rester doux", "À privilégier pour freiner", "Sans effet"], correct:1, explanation:"Comme peinture au sol : adhérence réduite, passer droit si possible." },
{ id:"AM1", theme:"Éclairage", level:"moyen", question:"Appel de phare…", answers:["À utiliser en permanence", "Ponctuel pour prévenir ou signaler sa présence sans éblouir", "Interdit partout", "À la place du clignotant"], correct:1, explanation:"Usage mesuré pour avertir, pas pour imposer le passage." },
{ id:"AN1", theme:"Virages", level:"moyen", question:"Sortie de virage : je…", answers:["Regarde la corde", "Regarde loin vers la ligne droite et ré‑accélère progressivement", "Coupe les gaz brutalement", "Change de voie sans regarder"], correct:1, explanation:"Regard loin et remise de gaz progressive quand la moto se redresse." },
{ id:"AO1", theme:"Autoroute", level:"moyen", question:"Bande d'arrêt d'urgence (BAU)…", answers:["Peut servir à remonter les files", "Réservée aux urgences/pannes", "Voie rapide pour motos", "Zone de dépassement"], correct:1, explanation:"BAU uniquement en cas d'urgence/panne/consignes des autorités." },
{ id:"AP1", theme:"Ville", level:"moyen", question:"Bus qui quitte un arrêt…", answers:["Toujours prioritaire à pleine vitesse", "À laisser s'insérer prudemment s'il signale", "À dépasser coûte que coûte", "À klaxonner"], correct:1, explanation:"Anticipez et facilitez son insertion si clignotant activé, sans vous mettre en danger." },
{ id:"AQ1", theme:"Conso", level:"moyen", question:"Pour consommer moins…", answers:["Accélérations franches et freinages tardifs", "Conduite souple, pression pneus correcte, entretien à jour", "Pneus sous‑gonflés", "Charge mal répartie"], correct:1, explanation:"Souplesse + pneus/entretien corrects = conso maîtrisée." },
{ id:"AR1", theme:"Moto école", level:"facile", question:"Regard en slalom lent…", answers:["Sur les plots", "Au loin dans l'axe de sortie", "Au guidon", "Au compteur"], correct:1, explanation:"Le regard dirige la trajectoire; évitez de fixer les obstacles (plots)." },
{ id:"AS1", theme:"Autoroute", level:"moyen", question:"Distance avec véhicule devant à 130 km/h (sec)…", answers:["1 seconde suffit", "Au moins 2 secondes (plus si conditions)", "Jamais nécessaire", "Au pare‑choc"], correct:1, explanation:"Règle des 2 secondes minimum; augmentez si pluie/vent/fatigue." },
{ id:"AT1", theme:"Passager", level:"moyen", question:"Communication pilote‑passager…", answers:["Inutile", "Utile via signes simples ou intercom, pour manœuvres et arrêts", "Interdite", "À éviter"], correct:1, explanation:"Un minimum de consignes et de signaux améliore la sécurité et le confort." },
{ id:"AU1", theme:"Freinage", level:"moyen", question:"Transfert de masse au freinage…", answers:["Vers l'arrière", "Vers l'avant, charge la roue avant et allège l'arrière", "Aucun effet", "Inverse selon la couleur"], correct:1, explanation:"D'où l'efficacité de l'avant mais risque de blocage de l'arrière si trop chargé." },
{ id:"AV1", theme:"Virages", level:"moyen", question:"Point de corde tardif sur route…", answers:["Diminue la visibilité", "Augmente la visibilité en sortie et la marge de sécurité", "Ne change rien", "Réservé aux circuits"], correct:1, explanation:"Permet de voir plus tôt la sortie et de garder de la marge face aux surprises." },
{ id:"AW1", theme:"Angles morts", level:"moyen", question:"Camion articulé : zones à éviter…", answers:["Juste devant, latéraux proches, arrière", "Partout on est visible", "Uniquement arrière", "Aucune"], correct:0, explanation:"Ces zones masquées varient selon le gabarit; restez visibles et distants." },
{ id:"AX1", theme:"Pédagogie", level:"moyen", question:"Entraînement efficace…", answers:["Répéter vite sans corriger", "Analyser ses erreurs et retravailler les thèmes faibles", "Éviter les explications", "Ne jamais varier"], correct:1, explanation:"Révisez vos erreurs, ciblez vos thèmes faibles, variabilité des séries." },
{ id:"AY1", theme:"Virages", level:"moyen", question:"Regard figé (target fixation)…", answers:["Aucun danger", "Fait aller la moto vers l'obstacle", "Améliore la trajectoire", "Permet de freiner plus court"], correct:1, explanation:"Contre : cherchez et fixez la zone où vous voulez aller (échappatoire)." },
{ id:"AZ1", theme:"Panneau", level:"moyen", question:"Carré/rectangle bleu…", answers:["Danger", "Indication/information", "Interdiction", "Obligation"], correct:1, explanation:"Bleu carré/rectangle = indication; rond bleu = obligation; triangle = danger; rond rouge = interdiction." },
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
