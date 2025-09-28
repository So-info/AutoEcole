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

{ id:"BA20", theme:"Formation", level:"moyen", question:"Le principal objectif de la trajectoire de sécurité est…", answers:["Aller plus vite", "Améliorer la visibilité et garder de la marge en cas d’imprévu", "Faire joli", "Rouler au milieu"], correct:1, explanation:"Entrée extérieure, corde tardive, sortie large = vision, stabilité, sécurité." }


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

{ id:"BB20", theme:"Éclairage", level:"moyen", question:"De nuit sur route éclairée, j’utilise…", answers:["Les feux de croisement", "Les feux de route en permanence", "Les warnings", "Pas de feu"], correct:0, explanation:"En agglomération éclairée, feu de croisement suffisant pour voir et être vu." }


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
