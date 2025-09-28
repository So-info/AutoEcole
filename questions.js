// questions.js
/**
 * @typedef {{id:string, theme:string, level:string, question:string,
 *            answers:string[], correct:number|number[], multi?:boolean,
 *            explanation?:string}} Q
 */

/** @type {Q[]} */
window.BANK = window.BANK || [
    
{ id:"BD1", theme:"Priorité", level:"moyen", question:"À une intersection sans signalisation, j’applique…", answers:["La priorité à gauche", "La priorité à droite", "La priorité aux plus gros véhicules", "La priorité aux deux-roues"], correct:1, explanation:"En absence de signalisation, c’est la priorité à droite qui s’applique." },

{ id:"BD2", theme:"Rond-point", level:"moyen", question:"Dans un rond-point (priorité aux véhicules déjà engagés), je…", answers:["M’insère sans céder le passage", "Cède le passage aux véhicules circulant dans l’anneau", "M’arrête au milieu si je suis perdu", "Reste sur la voie intérieure pour sortir"], correct:1, explanation:"On cède aux véhicules déjà dans l’anneau et on se place à l’extérieur pour sortir." },

{ id:"BD3", theme:"Alcool", level:"moyen", question:"L’alcool au guidon…", answers:["Améliore la concentration", "Réduit les réflexes et la perception des risques", "N’influe pas sur l’équilibre", "Est sans effet sur la vision"], correct:1, explanation:"Même à faible dose, l’alcool altère réflexes, jugement et vision." },

{ id:"BD4", theme:"Temps de réaction", level:"moyen", question:"Avec un temps de réaction d’environ 1 seconde à 80 km/h, je parcours…", answers:["Environ 22 m", "Environ 8 m", "Environ 50 m", "Environ 100 m"], correct:0, explanation:"80 km/h ≈ 22 m/s. En 1 seconde de réaction, ~22 mètres sont parcourus." },

{ id:"BD5", theme:"Distances", level:"moyen", question:"La règle des 2 secondes sert à…", answers:["Caler la conso", "Déterminer une distance de sécurité minimale", "Régler l’ABS", "Optimiser la trajectoire de courbe"], correct:1, explanation:"Deux secondes de marge avec le véhicule de devant pour pouvoir réagir." },

{ id:"BD6", theme:"Équipement", level:"moyen", question:"Un blouson moto avec protections CE…", answers:["Est inutile en ville", "Limite la gravité des blessures en cas de chute", "Remplace les gants homologués", "Est interdit par forte chaleur"], correct:1, explanation:"Les EPI CE (blouson, dorsale, gants…) réduisent les lésions." },

{ id:"BD7", theme:"Frein moteur", level:"moyen", question:"Le frein moteur…", answers:["N’existe pas sur une moto", "Aide à stabiliser la machine en décélération", "Abrège la distance d’arrêt seul", "Fait patiner la roue arrière systématiquement"], correct:1, explanation:"Le frein moteur participe à la décélération et à la stabilité s’il est bien dosé." },

{ id:"BD8", theme:"Traction", level:"moyen", question:"L’antipatinage (TCS)…", answers:["Empêche toute chute", "Limite le patinage mais n’annule pas les lois d’adhérence", "Remplace les bons pneus", "Permet d’accélérer à fond partout"], correct:1, explanation:"Aide électronique utile, mais l’adhérence et la prudence restent essentielles." },

{ id:"BD9", theme:"Pluie", level:"moyen", question:"Après une averse, l’adhérence est souvent la plus mauvaise…", answers:["Dans les 5–10 premières minutes", "Après 2 heures", "Uniquement la nuit", "Seulement sur autoroute"], correct:0, explanation:"Dépôts et hydrocarbures remontent au début de la pluie : prudence." },

{ id:"BD10", theme:"Éclairage", level:"moyen", question:"De jour sous forte pluie, j’allume…", answers:["Les feux de route pour mieux voir", "Les feux de croisement pour être vu sans éblouir", "Aucun feu", "Uniquement les warnings"], correct:1, explanation:"Les feux de croisement améliorent la visibilité sans éblouir." },

{ id:"BD11", theme:"Freinage", level:"moyen", question:"Sur chaussée dégradée, en freinage d’urgence avec ABS, je…", answers:["Tire encore plus fort peu importe l’assiette", "Reste progressif et garde la moto droite", "Freine qu’avec l’arrière", "Coupe le contact"], correct:1, explanation:"Progressivité et moto droite aident l’ABS à travailler efficacement." },

{ id:"BD12", theme:"Pneus", level:"moyen", question:"Un témoin d’usure atteint signifie…", answers:["Pneu encore bon", "Pneu à remplacer", "Rien de particulier", "Pression trop élevée"], correct:1, explanation:"Témoin affleurant = pneu en fin de vie, remplacement nécessaire." },

{ id:"BD13", theme:"Charge", level:"moyen", question:"Avec bagagerie chargée, je…", answers:["Réduis mes distances de sécurité", "Ajuste pressions/Précontrainte selon le manuel et anticipe plus", "Place le lourd en haut", "Ne change rien"], correct:1, explanation:"Charge = comportement modifié → réglages adaptés + conduite souple." },

{ id:"BD14", theme:"Ville", level:"moyen", question:"Proximité d’un bus à l’arrêt : je…", answers:["Passe très près pour gagner du temps", "Laisse une marge latérale et surveille les piétons", "Accélère en klaxonnant", "Roule sur le trottoir"], correct:1, explanation:"Piétons pouvant surgir : vitesse réduite et marge de sécurité." },

{ id:"BD15", theme:"Défauts route", level:"moyen", question:"Plaques métalliques mouillées en virage…", answers:["Très adhérentes", "Glissantes : passer le plus droit possible, sans freinage/accélération", "Sans effet", "À privilégier pour freiner"], correct:1, explanation:"Comme la peinture au sol, elles deviennent glissantes : trajectoire neutre." },

{ id:"BD16", theme:"Signalisation", level:"moyen", question:"Ligne continue…", answers:["Peut être chevauchée pour dépasser", "Ne doit pas être franchie ni chevauchée, sauf cas particulier (obstacle, etc.)", "Ne concerne pas les deux-roues", "S’applique seulement de nuit"], correct:1, explanation:"La ligne continue interdit franchissement/chevauchement hors cas prévus." },

{ id:"BD17", theme:"Autoroute", level:"moyen", question:"Avant d’entrer sur autoroute, je…", answers:["M’arrête en bout de bretelle", "Utilise la voie d’accélération pour m’insérer au rythme du trafic", "Me place sur la BAU", "Clignote seulement après m’être inséré"], correct:1, explanation:"On accélère sur la bretelle et on s’insère en sécurité, clignotants à l’appui." },

{ id:"BD18", theme:"Éco-conduite", level:"moyen", question:"Une conduite souple (anticipation, rapports adaptés)…", answers:["Augmente la conso", "Réduit consommation et usure, et améliore la sécurité", "Abîme le moteur", "N’a aucun effet"], correct:1, explanation:"Anticipation et régimes adaptés = sobriété et sécurité." },

{ id:"BD19", theme:"Visibilité", level:"moyen", question:"Pour être mieux perçu par les autres usagers, je privilégie…", answers:["Trajectoire imprévisible", "Positionnement lisible, feux allumés et vitesse adaptée", "Équipements sombres non réfléchissants", "Feu de route en permanence"], correct:1, explanation:"Visibilité = éclairage, position, allure lisible." },

{ id:"BD20", theme:"Secours", level:"moyen", question:"Arrivant sur un accident : ordre d’actions correct…", answers:["Secourir puis alerter", "Protéger, Alerter, Secourir", "Photographier puis partir", "Déplacer tous les blessés"], correct:1, explanation:"On sécurise la zone, on alerte, puis on porte secours." },

{ id:"BE1", theme:"Virages", level:"moyen", question:"Regard en courbe : je…", answers:["Fixe l’obstacle", "Projette mon regard vers la sortie et la trajectoire", "Regarde ma roue avant", "Regarde mon compteur"], correct:1, explanation:"Regard loin/vers la sortie guide la trajectoire et la stabilité." },

{ id:"BE2", theme:"Chaîne", level:"moyen", question:"Une chaîne trop tendue…", answers:["Épargne la transmission", "Peut endommager roulements/boîte et nuire au confort", "Ne change rien", "Est préférable pour la précision"], correct:1, explanation:"Respecter la flèche constructeur pour préserver la transmission." },

{ id:"BE3", theme:"Feux", level:"moyen", question:"Les feux de détresse (warnings) s’utilisent…", answers:["Pour remonter une file", "En cas de panne ou de danger immédiat", "Pour demander le passage", "À la place des clignotants"], correct:1, explanation:"Ils signalent un danger/arrêt d’urgence, pas un déplacement ordinaire." },

{ id:"BE4", theme:"Passager", level:"moyen", question:"Avant d’emmener un passager, je lui demande…", answers:["De se pencher à l’inverse du pilote", "De suivre mes mouvements, garder les pieds sur les repose-pieds et ne pas bouger brusquement", "De tenir le guidon", "De monter avec sac non arrimé"], correct:1, explanation:"Consignes simples = stabilité et sécurité accrues pour tous les deux." },

{ id:"BF1", theme:"Équipement", level:"avancé", question:"Quels équipements sont obligatoires pour le conducteur d’une moto ?", answers:["Casque homologué et attaché", "Gants certifiés CE", "Blouson renforcé", "Gilet fluo"], correct:[0,1], multi:true, explanation:"Casque et gants CE sont obligatoires. Les autres équipements sont vivement conseillés." },

{ id:"BF2", theme:"Secours", level:"avancé", question:"Vous êtes témoin d’un accident moto. Quelles sont les premières actions correctes ?", answers:["Sécuriser la zone", "Donner immédiatement à boire au blessé", "Alerter les secours", "Retirer systématiquement le casque"], correct:[0,2], multi:true, explanation:"Protéger et alerter avant de secourir. Ne jamais retirer le casque sauf nécessité vitale." },

{ id:"BF3", theme:"Trajectoire", level:"avancé", question:"La trajectoire de sécurité en virage permet…", answers:["De garder une marge de sécurité avec la voie opposée", "D’élargir le champ de vision", "De passer plus vite sans risque", "De mieux anticiper les obstacles"], correct:[0,1,3], multi:true, explanation:"Entrée extérieure, corde retardée, sortie élargie = vision + marge + anticipation." },

{ id:"BF4", theme:"Conditions météo", level:"avancé", question:"Quels dangers sont accrus par temps froid et sec ?", answers:["Pneus plus longs à chauffer", "Adhérence réduite", "Visière embuée", "Adhérence optimale immédiate"], correct:[0,1,2], multi:true, explanation:"Froid = adhérence réduite, pneus lents à chauffer, buée possible." },

{ id:"BF5", theme:"Freinage", level:"avancé", question:"En cas de freinage d’urgence en courbe, avec ABS standard (non cornering)…", answers:["Le risque de chute existe toujours si l’angle est fort", "L’ABS ne compense pas la perte d’adhérence en virage prononcé", "Je peux freiner à n’importe quel angle sans danger", "Il faut réduire l’angle et rester progressif"], correct:[0,1,3], multi:true, explanation:"L’ABS standard ne gère pas l’angle → rester droit/progressif, réduire l’inclinaison." },

{ id:"BF6", theme:"Légalité", level:"avancé", question:"Quelles sont les conséquences de rouler sans assurance moto ?", answers:["Amende importante", "Immobilisation ou confiscation du véhicule", "Suspension de permis possible", "Aucune sanction si moto peu utilisée"], correct:[0,1,2], multi:true, explanation:"Assurance RC obligatoire : amende, immobilisation, suspension, voire poursuites." },

{ id:"BF7", theme:"Entretien", level:"avancé", question:"Un défaut de pression des pneus peut entraîner…", answers:["Surchauffe", "Usure prématurée", "Perte de stabilité", "Réduction de la distance de freinage"], correct:[0,1,2], multi:true, explanation:"Sous ou sur-gonflage = surchauffe, usure, mauvaise tenue de route. La distance de freinage augmente au lieu de diminuer." },

{ id:"BF8", theme:"Conduite en groupe", level:"avancé", question:"Pour rouler en sécurité en groupe de motards, il est recommandé de…", answers:["Se placer en quinconce", "Garder des distances de sécurité", "Klaxonner régulièrement", "Adapter la vitesse au plus lent"], correct:[0,1,3], multi:true, explanation:"Formation quinconce + distances + adaptation au plus lent assurent sécurité collective." },

{ id:"BF9", theme:"Visibilité", level:"avancé", question:"Pour améliorer ma visibilité active la nuit, je privilégie…", answers:["Feux de croisement allumés", "Équipements rétro-réfléchissants", "Vitesse excessive pour être vu", "Clignotants utilisés correctement"], correct:[0,1,3], multi:true, explanation:"Visibilité = éclairage adapté + rétro-réfléchissant + signalisation claire." },

{ id:"BF10", theme:"Secours", level:"avancé", question:"Lorsqu’une victime respire mais reste inconsciente, je…", answers:["La place en position latérale de sécurité (PLS)", "Je la redresse", "Je l’allonge sur le dos sans surveillance", "Je la surveille en attendant les secours"], correct:[0,3], multi:true, explanation:"Respire mais inconscient = PLS et surveillance constante jusqu’aux secours." },

{ id:"BG1", theme:"Signalisation", level:"facile", question:"Un panneau STOP m’impose…", answers:["De ralentir", "De céder le passage sans s’arrêter", "De m’arrêter et céder la priorité", "De passer rapidement"], correct:2, explanation:"Un STOP = arrêt obligatoire avant la ligne, puis céder la priorité." },

{ id:"BG2", theme:"Signalisation", level:"facile", question:"Un feu rouge signifie…", answers:["Passage autorisé", "Arrêt obligatoire", "Céder le passage", "Attention piétons"], correct:1, explanation:"Feu rouge = arrêt obligatoire, sans franchissement de la ligne." },

{ id:"BG3", theme:"Vitesse", level:"facile", question:"En agglomération, la vitesse maximale autorisée est généralement…", answers:["70 km/h", "50 km/h", "30 km/h", "90 km/h"], correct:1, explanation:"En agglomération, la limitation par défaut est 50 km/h." },

{ id:"BG4", theme:"Sécurité", level:"facile", question:"Quel est l’équipement obligatoire à moto ?", answers:["Casque homologué et attaché", "Blouson en cuir", "Bottes", "Jean renforcé"], correct:0, explanation:"Le casque homologué et attaché est obligatoire. Les autres équipements sont fortement conseillés." },

{ id:"BG5", theme:"Éclairage", level:"facile", question:"De nuit, je dois au minimum utiliser…", answers:["Les feux de croisement", "Les feux de route", "Les warnings", "Aucun feu"], correct:0, explanation:"Les feux de croisement sont obligatoires la nuit pour voir et être vu." },

{ id:"BG6", theme:"Piétons", level:"facile", question:"Face à un piéton engagé sur un passage protégé…", answers:["Je continue", "Je m’arrête et le laisse traverser", "Je klaxonne", "Je double rapidement"], correct:1, explanation:"Priorité absolue aux piétons engagés sur un passage piéton." },

{ id:"BG7", theme:"Entretien", level:"facile", question:"Avant de partir, je dois vérifier…", answers:["La pression des pneus", "L’état des freins", "Les feux", "Toutes ces réponses"], correct:3, explanation:"Un contrôle rapide (pneus, freins, feux) est indispensable à la sécurité." },

{ id:"BG8", theme:"Mécanique", level:"facile", question:"Le rétroviseur sert principalement à…", answers:["Décorer la moto", "Améliorer la visibilité arrière", "Voir mon visage", "Éviter les insectes"], correct:1, explanation:"Les rétroviseurs permettent de surveiller ce qui se passe derrière." },

{ id:"BG9", theme:"Routes", level:"facile", question:"Une route limitée à 90 km/h est…", answers:["Une autoroute", "Une route hors agglomération à double sens sans séparateur central", "Une zone 30", "Un chemin privé"], correct:1, explanation:"La limitation de base hors agglomération est 80 ou 90 km/h selon zones." },

{ id:"BG10", theme:"Comportement", level:"facile", question:"À moto, je dois toujours…", answers:["Rouler au milieu de la voie", "Adapter ma vitesse aux conditions", "Rouler collé aux autres", "Couper les virages"], correct:1, explanation:"La vitesse doit être adaptée aux conditions de circulation et météo." },

{ id:"BG11", theme:"Signalisation", level:"facile", question:"Un panneau de limitation 70 barré signifie…", answers:["La limitation passe à 50", "Fin de limitation spécifique, retour à la règle générale", "Interdiction de dépasser", "Fin d’autoroute"], correct:1, explanation:"Un panneau de fin de limitation annule la limite affichée, retour à la règle générale." },

{ id:"BG12", theme:"Alcool", level:"facile", question:"Le taux légal d’alcoolémie pour les conducteurs novices est de…", answers:["0,8 g/L", "0,5 g/L", "0,2 g/L", "0 g/L"], correct:2, explanation:"Les conducteurs novices (moins de 3 ans de permis) sont limités à 0,2 g/L." },

{ id:"BG13", theme:"Distances", level:"facile", question:"Plus je roule vite…", answers:["Moins j’ai besoin de distance de freinage", "Plus ma distance de freinage augmente", "La distance de freinage reste la même", "C’est sans importance"], correct:1, explanation:"La distance de freinage augmente avec la vitesse." },

{ id:"BG14", theme:"Équipement", level:"facile", question:"Le port de gants moto…", answers:["Est obligatoire", "Est facultatif", "Est réservé à la piste", "Est interdit en été"], correct:0, explanation:"Depuis 2016, le port de gants homologués est obligatoire pour conducteur et passager." },

{ id:"BG15", theme:"Météo", level:"facile", question:"Par temps de pluie, je dois…", answers:["Accélérer", "Augmenter mes distances de sécurité", "Rouler sans casque", "Coller le véhicule devant"], correct:1, explanation:"Pluie = distances plus grandes, conduite souple et prudente." },

{ id:"BG16", theme:"Ville", level:"facile", question:"Un enfant peut surgir entre deux véhicules en stationnement. Je…", answers:["Accélère", "Ralentis et reste vigilant", "Ferme les yeux", "Klaxonne sans ralentir"], correct:1, explanation:"En ville, vigilance accrue aux abords des écoles, véhicules en stationnement." },

{ id:"BG17", theme:"Autoroute", level:"facile", question:"La vitesse maximale sur autoroute (temps sec) est…", answers:["90 km/h", "110 km/h", "130 km/h", "150 km/h"], correct:2, explanation:"La limitation de base sur autoroute est 130 km/h, 110 sous pluie." },

{ id:"BG18", theme:"Fatigue", level:"facile", question:"Pour lutter contre la fatigue…", answers:["Je roule plus vite", "Je fais des pauses régulières", "Je serre les dents", "Je bois de l’alcool"], correct:1, explanation:"Des pauses toutes les 2 heures max permettent de limiter la fatigue." },

{ id:"BG19", theme:"Partage route", level:"facile", question:"Face à un vélo en ville, je dois…", answers:["Respecter 1 mètre minimum en le dépassant", "Coller la roue arrière", "Le doubler à 20 cm", "Klaxonner"], correct:0, explanation:"La distance minimale = 1 m en ville, 1,5 m hors agglomération." },

{ id:"BG20", theme:"Éclairage", level:"facile", question:"En entrant dans un tunnel éclairé, je…", answers:["Coupe mes feux", "Allume au minimum mes feux de croisement", "Utilise les pleins phares obligatoirement", "N’utilise aucun feu"], correct:1, explanation:"Feux de croisement obligatoires dans un tunnel, même éclairé." },

{ id:"BH1", theme:"Vitesse", level:"moyen", question:"Par temps de pluie en agglomération, la vitesse maximale autorisée est…", answers:["30 km/h", "50 km/h", "70 km/h", "90 km/h"], correct:1, explanation:"En agglomération, la limitation reste 50 km/h même sous la pluie (sauf zones spécifiques). La prudence impose souvent de rouler moins vite." },

{ id:"BH2", theme:"Freinage", level:"moyen", question:"Pour un freinage efficace à moto, je…", answers:["N’utilise que l’arrière", "Combine avant et arrière de manière progressive", "Freine fort de l’avant uniquement", "Utilise le frein moteur uniquement"], correct:1, explanation:"Le freinage combiné (avant + arrière) est le plus efficace et le plus stable." },

{ id:"BH3", theme:"Passager", level:"moyen", question:"Avec un passager, la moto…", answers:["Accélère plus fort", "Demande plus d’anticipation pour freinage et virage", "Ne change pas de comportement", "Consomme moins"], correct:1, explanation:"Le poids supplémentaire allonge les distances de freinage et modifie l’équilibre." },

{ id:"BH4", theme:"Autoroute", level:"moyen", question:"Sur autoroute, je dois garder une distance de sécurité d’au moins…", answers:["1 seconde", "2 secondes", "10 mètres", "5 secondes"], correct:1, explanation:"La règle des 2 secondes s’applique, et plus si conditions dégradées." },

{ id:"BH5", theme:"Signalisation", level:"moyen", question:"Un panneau triangulaire à bord rouge signale…", answers:["Une interdiction", "Un danger", "Une obligation", "Une information"], correct:1, explanation:"Les panneaux triangulaires à bord rouge signalent un danger." },

{ id:"BH6", theme:"Météo", level:"moyen", question:"Par vent latéral fort, je…", answers:["Me place plus à gauche de ma voie", "Reste souple sur le guidon et anticipe les rafales", "Me crispe", "Accélère à fond"], correct:1, explanation:"Souplesse, anticipation et maintien du cap limitent l’effet des rafales." },

{ id:"BH7", theme:"Équipement", level:"moyen", question:"Le gilet haute visibilité (jaune fluo)…", answers:["Est obligatoire en permanence", "Doit être à portée de main et porté en cas d’arrêt d’urgence", "Est inutile", "Remplace le casque"], correct:1, explanation:"Le gilet haute visibilité doit être porté en cas d’arrêt d’urgence sur route/autoroute." },

{ id:"BH8", theme:"Entretien", level:"moyen", question:"Une chaîne trop détendue…", answers:["Est plus confortable", "Peut sauter du pignon et causer un accident", "Améliore la vitesse", "Économise l’essence"], correct:1, explanation:"Une chaîne mal tendue = risque de déraillement, usure, perte de contrôle." },

{ id:"BH9", theme:"Interfile", level:"moyen", question:"La circulation interfile est…", answers:["Autorisée partout", "Strictement interdite", "Autorisée sous conditions sur certaines voies", "Réservée aux scooters"], correct:2, explanation:"Depuis 2021, l’interfile est autorisée à titre expérimental sur certains axes et sous conditions précises." },

{ id:"BH10", theme:"Visibilité", level:"moyen", question:"La meilleure manière d’être vu par une voiture avant un croisement est…", answers:["Klaxonner en continu", "Utiliser ses feux et se placer de manière lisible", "Rouler très vite", "Rester dans un angle mort"], correct:1, explanation:"Être visible = feux allumés, position claire et allure adaptée." },

{ id:"BH11", theme:"Route", level:"moyen", question:"En sortie de virage masqué, je découvre un obstacle…", answers:["Je freine fort en gardant la moto droite", "Je garde le cap sans rien faire", "J’accélère", "Je ferme les yeux"], correct:0, explanation:"Anticipation, trajectoire de sécurité et freinage moto droite permettent d’éviter l’obstacle." },

{ id:"BH12", theme:"Éco-conduite", level:"moyen", question:"Pour réduire ma consommation, je…", answers:["Accélère brutalement", "Anticipe et roule à régime adapté", "Coupe le moteur en descente", "Freine souvent"], correct:1, explanation:"Anticipation + douceur sur les gaz réduisent la consommation et l’usure." },

{ id:"BH13", theme:"Ville", level:"moyen", question:"Je double un véhicule arrêté devant un passage piéton…", answers:["C’est interdit car un piéton peut traverser", "C’est autorisé si je klaxonne", "Je peux si je roule vite", "Je peux en moto uniquement"], correct:0, explanation:"Interdiction absolue de dépasser un véhicule arrêté à un passage piéton." },

{ id:"BH14", theme:"Fatigue", level:"moyen", question:"La somnolence au guidon se manifeste par…", answers:["Réflexes plus rapides", "Bâillements, yeux lourds, baisse de concentration", "Meilleure vision", "Plus de précision"], correct:1, explanation:"Fatigue = baisse d’attention, réflexes ralentis. Pause obligatoire." },

{ id:"BH15", theme:"Autoroute", level:"moyen", question:"En cas de panne sur autoroute, je…", answers:["Reste sur la moto", "Me mets en sécurité derrière la glissière et appelle les secours", "Reste sur la BAU près du véhicule", "Roule à 20 km/h jusqu’à la sortie"], correct:1, explanation:"En panne = BAU + gilet + mise en sécurité derrière glissière + appel secours." },

{ id:"BH16", theme:"Virages", level:"moyen", question:"En entrée de virage, la bonne attitude est…", answers:["Freiner en plein angle", "Adapter sa vitesse avant d’incliner", "Regarder sa roue avant", "Accélérer brutalement"], correct:1, explanation:"On freine moto droite avant le virage, puis on incline en regardant la sortie." },

{ id:"BH17", theme:"Secours", level:"moyen", question:"Un blessé inconscient qui respire doit être…", answers:["Mis en PLS", "Laissé sur le dos", "Redressé", "Donner à boire"], correct:0, explanation:"Victime inconsciente mais qui respire = mise en Position Latérale de Sécurité." },

{ id:"BH18", theme:"Pneus", level:"moyen", question:"Un pneu usé jusqu’au témoin…", answers:["Peut encore rouler longtemps", "Doit être remplacé immédiatement", "Améliore l’adhérence", "Est obligatoire en compétition"], correct:1, explanation:"Témoin atteint = pneu lisse et dangereux, remplacement obligatoire." },

{ id:"BH19", theme:"Partage route", level:"moyen", question:"Face à un véhicule prioritaire (pompiers, ambulance)…", answers:["Je bloque la route", "Je me rabats calmement et le laisse passer", "J’accélère pour fuir", "Je continue sans changer"], correct:1, explanation:"Il faut faciliter le passage des véhicules prioritaires sans danger." },

{ id:"BH20", theme:"Climat", level:"moyen", question:"Par forte chaleur, je…", answers:["Enlève casque et gants", "Conserve mon équipement ventilé et m’hydrate régulièrement", "Roule torse nu", "Augmente ma vitesse"], correct:1, explanation:"L’équipement reste indispensable, privilégier textile ventilé et pauses hydratation." },

{ id:"BI1", theme:"Freinage", level:"avancé", question:"Lors d’un freinage d’urgence avec ABS en descente sinueuse, je…", answers:["Reste progressif et garde la moto la plus droite possible", "Utilise uniquement l’arrière", "Freine fort de l’avant en plein angle", "Réduis légèrement l’angle avant de freiner plus fort"], correct:[0,3], multi:true, explanation:"Même avec ABS, réduire l’angle et rester progressif augmente la stabilité." },

{ id:"BI2", theme:"Trajectoire sécurité", level:"avancé", question:"Les avantages de la trajectoire de sécurité sont…", answers:["Meilleure visibilité", "Marge avec la voie opposée", "Passage plus rapide assuré", "Anticipation des obstacles"], correct:[0,1,3], multi:true, explanation:"La trajectoire de sécurité vise vision, marge et anticipation, pas la vitesse." },

{ id:"BI3", theme:"Éclairage", level:"avancé", question:"De nuit sur route non éclairée, je dois utiliser…", answers:["Feux de route hors croisement", "Feux de croisement si un véhicule arrive en face", "Aucun feu", "Les warnings en continu"], correct:[0,1], multi:true, explanation:"Feux de route seuls si route libre, croisement si croisement d’un autre véhicule." },

{ id:"BI4", theme:"Autoroute", level:"avancé", question:"Sur autoroute, un dépassement de poids lourd expose à…", answers:["Effet de souffle latéral", "Angle mort prolongé", "Meilleure visibilité", "Risque accru si je reste trop longtemps à côté"], correct:[0,1,3], multi:true, explanation:"Le souffle et l’angle mort rendent dangereux un dépassement prolongé." },

{ id:"BI5", theme:"Entretien", level:"avancé", question:"Une chaîne trop tendue peut provoquer…", answers:["Usure prématurée des roulements", "Risque de casse", "Une meilleure accélération", "Contraintes sur la boîte"], correct:[0,1,3], multi:true, explanation:"Chaîne trop tendue = contraintes mécaniques et risques de casse." },

{ id:"BI6", theme:"Conduite groupe", level:"avancé", question:"Lors d’une sortie en groupe, les règles essentielles sont…", answers:["Position en quinconce", "Respecter distance de sécurité", "Adapter vitesse au plus lent", "Rouler côte à côte pour être visibles"], correct:[0,1,2], multi:true, explanation:"La formation en quinconce et l’adaptation au plus lent garantissent la sécurité." },

{ id:"BI7", theme:"Secours", level:"avancé", question:"Face à une victime inconsciente qui ne respire plus, j’applique…", answers:["PLS", "Massage cardiaque", "Retrait systématique du casque", "Alerte immédiate des secours"], correct:[1,3], multi:true, explanation:"PAS : Protéger, Alerter, Secourir → massage cardiaque + appel secours." },

{ id:"BI8", theme:"Météo", level:"avancé", question:"Quels facteurs augmentent le risque d’aquaplanage ?", answers:["Vitesse élevée", "Pneus usés ou sous-gonflés", "Accumulation d’eau", "Température élevée"], correct:[0,1,2], multi:true, explanation:"Vitesse, usure/sous-gonflage et eau en surface favorisent l’aquaplanage." },

{ id:"BI9", theme:"Fatigue", level:"avancé", question:"Quels sont les signes d’une somnolence au guidon ?", answers:["Clignements fréquents", "Micro-sommeils", "Réactions ralenties", "Meilleure vigilance"], correct:[0,1,2], multi:true, explanation:"Micro-sommeils et réflexes lents = danger vital, pause indispensable." },

{ id:"BI10", theme:"Vitesse", level:"avancé", question:"Sur une route à 80 km/h, par brouillard dense, je…", answers:["Maintiens 80 km/h", "Ralentis fortement et allume feux adaptés", "Passe en feux de route", "Augmente mes distances de sécurité"], correct:[1,3], multi:true, explanation:"En brouillard, adaptation de vitesse + distance de sécurité sont vitales." },

{ id:"BI11", theme:"Légalité", level:"avancé", question:"Quelles sanctions pour excès de vitesse de +50 km/h ?", answers:["Retrait de 6 points", "Suspension de permis", "Confiscation possible du véhicule", "Simple avertissement"], correct:[0,1,2], multi:true, explanation:"Un grand excès = délit avec sanctions lourdes (points, suspension, confiscation)." },

{ id:"BI12", theme:"Virages", level:"avancé", question:"Dans un virage serré en descente, je…", answers:["Anticipe la vitesse avant d’incliner", "Garde un filet de gaz", "Freine fort de l’avant en angle", "Regarde la sortie"], correct:[0,1,3], multi:true, explanation:"Vitesse adaptée + filet de gaz + regard sortie = stabilité." },

{ id:"BI13", theme:"Pneus", level:"avancé", question:"Un pneu sous-gonflé entraîne…", answers:["Consommation accrue", "Surchauffe", "Usure rapide", "Stabilité améliorée"], correct:[0,1,2], multi:true, explanation:"Sous-gonflage = usure, surchauffe et instabilité." },

{ id:"BI14", theme:"Signalisation", level:"avancé", question:"Un panneau rond bleu avec une moto blanche signifie…", answers:["Danger moto", "Obligation pour motos", "Interdiction", "Information"], correct:1, explanation:"Un panneau rond bleu indique une obligation." },

{ id:"BI15", theme:"Équipement", level:"avancé", question:"Éléments améliorant la visibilité passive du motard…", answers:["Catadioptres", "Couleurs claires de l’équipement", "Éclairage additionnel mal réglé", "Stickers rétro-réfléchissants"], correct:[0,1,3], multi:true, explanation:"Visibilité passive = éléments rétro-réfléchissants et couleurs visibles." },

{ id:"BI16", theme:"Entretien", level:"avancé", question:"Un liquide de frein usé peut entraîner…", answers:["Perte d’efficacité du freinage", "Allongement de la distance d’arrêt", "Corrosion du circuit", "Meilleure puissance"], correct:[0,1,2], multi:true, explanation:"Liquide usé = baisse efficacité + risque mécanique." },

{ id:"BI17", theme:"Ville", level:"avancé", question:"En circulation interfile, je…", answers:["Ne dépasse pas 50 km/h", "Ne roule pas plus de 20 km/h au-dessus du flux", "Klaxonne en continu", "Reste vigilant aux angles morts"], correct:[0,1,3], multi:true, explanation:"Interfile autorisée sous conditions : max 50 km/h, +20 km/h sur le flux, vigilance." },

{ id:"BI18", theme:"Carburant", level:"avancé", question:"Rouler souvent sur la réserve peut…", answers:["Entraîner aspiration d’impuretés", "Surchauffer la pompe", "Améliorer la consommation", "Endommager le moteur"], correct:[0,1,3], multi:true, explanation:"Réserve fréquente = impuretés + surchauffe pompe + risques mécaniques." },

{ id:"BI19", theme:"Secours", level:"avancé", question:"Quelles actions immédiates en cas de saignement abondant ?", answers:["Compression directe", "Attendre les secours sans rien faire", "Surélever le membre si possible", "Donner de l’eau"], correct:[0,2], multi:true, explanation:"Compression directe + surélévation = gestes vitaux." },

{ id:"BI20", theme:"Autoroute", level:"avancé", question:"La bande d’arrêt d’urgence peut être utilisée…", answers:["Pour dépasser un véhicule", "Uniquement en cas de panne ou urgence", "Pour rouler plus vite", "Jamais"], correct:1, explanation:"BAU strictement réservée aux arrêts d’urgence." },

{ id:"BI21", theme:"Virages", level:"avancé", question:"En virage avec gravillons, je…", answers:["Reste souple sur le guidon", "Réduis l’angle", "Accélère fort", "Freine brutalement de l’avant"], correct:[0,1], multi:true, explanation:"Réduction d’angle et souplesse limitent la perte d’adhérence." },

{ id:"BI22", theme:"Mécanique", level:"avancé", question:"Un disque de frein voilé entraîne…", answers:["Vibrations au freinage", "Perte d’efficacité", "Meilleure adhérence", "Usure prématurée des plaquettes"], correct:[0,1,3], multi:true, explanation:"Un disque voilé = vibrations + perte efficacité + usure rapide." },

{ id:"BI23", theme:"Électronique", level:"avancé", question:"L’ABS cornering permet…", answers:["De freiner efficacement en courbe en tenant compte de l’angle", "D’ignorer totalement les lois de l’adhérence", "De supprimer tout risque de chute", "D’améliorer la sécurité en virage"], correct:[0,3], multi:true, explanation:"L’ABS cornering optimise le freinage en virage mais ne supprime pas les limites physiques." },

{ id:"BI24", theme:"Légalité", level:"avancé", question:"Conduire sans permis valide entraîne…", answers:["Simple avertissement", "Amende lourde", "Immobilisation du véhicule", "Peine de prison possible"], correct:[1,2,3], multi:true, explanation:"Conduite sans permis = sanctions pénales sévères." },

{ id:"BI25", theme:"Éco-conduite", level:"avancé", question:"Quels comportements réduisent consommation et pollution ?", answers:["Accélérations progressives", "Régime moteur adapté", "Arrêts fréquents inutiles", "Anticipation du trafic"], correct:[0,1,3], multi:true, explanation:"Éco-conduite = douceur, anticipation, régime optimal." },

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
