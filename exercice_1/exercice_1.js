// Creer une fonction qui prends en argument deux nombres et qui retourne la division du premier par le deuxieme

    /*function divide(a, b){
        return a/b;
    }
    divide(3, 4);*/


// Creer une fonction
// Afficher le contenu d'un tableau de nombre dans une chaine de caractere avec une limite de 5 nombres affichés (dans la console)
// Exemple [2,4,5] => affiche "2 4 5"
// Exemple [2,4,5,7,9,34,7] => affiche "2 4 5 7 9"

     /*   function tb(t){
           console.log(t.join(" "));
           let resultat = "";
           for (let i = 0; i < t.length; i++) {
                console.log(t[i]);
                if(i < 5){
                    resultat += t[i] + " ";
                }
            }
            console.log(resultat.trim());
        }
        tb([2,4,5,7,9,34,7]); */

       function tb(t){

            for (let i = 0; i < t.length; i++) {
                let t = [1, 4, 6, 8, 6, 2, 3];
                console.log(t)
            }
        }

       
        

// Creer une fonction
// Afficher le contenu d'un tableau de nombre dans une chaine de caractere avec une limite de 15 caracteres affichés 
// (dans la console, les espaces comptent)
// Exemple [2,4,5] => affiche "2 4 5"
// Exemple [2,4,5,7,9,34,7,89] => affiche "2 4 5 7 9 34 7 "
// BONUS SUPPRIMER LE DERNIER CARACTERE SI C EST UN ESPACE

        function tb2(t2) {
            console.log(t2.join(" "));
        }

        tb2([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2]);

// Creer une fonction qui retourne la moyenne d'un tableau de nombre passé en argument
// Exemple f([2,3,4]) retournera 3

// Creer une fonction qui prend un tableau de nombre en argument et un nombre X
// qui retournera un tableau dans lequel on ajoute X  au elements du tableau d'origine
// Exemple f([3, 7, 2], 1) retournera [4,8,3]
// Exemple f([12, 4, 65], 10) retournera [22, 14, 75]

// Creer une fonction qui prend en argument un tableau de nombre
// qui retourne un tableau contenant uniquement les nombres supérieur ou egal à 18
// Exemple f([2,6,12,32,42,65]) retournera [12, 32, 42, 65]

// Creer une foncion prend en argument deux tableaux
// vous passerez une chaine de caractere appelée mode qui modifiera le resultat
//
// si mode est "difference"
// la fonction retourne les valeurs du premier tableau qui ne sont pas dans le deuxieme
// exemple f([2, 1], [2, 3]) retounera [1]
// 
// si mode est "intersection"
// la fonction retourne les valeurs du premier tableau qui sont dans le deuxieme
// exemple f([2, 1], [2, 3]) retounera [2]


const words = [
    "initiative",
    "Cross-group",
    "policy",
    "uniform",
    "Phased",
    "interactive",
    "web-enabled",
    "Adaptive",
    "Balanced",
    "exuding",
    "Persistent",
    "zero administration",
    "bi-directional",
    "archive",
    "functionalities",
    "user-facing",
    "leverage",
    "capability",
    "Re-engineered",
    "standardization",
    "holistic",
    "Realigned",
    "forecast",
    "Adaptive",
    "website",
    "Ameliorated",
    "real-time",
    "Intuitive",
    "functionalities",
    "open architecture",
    "Enterprise-wide",
    "Visionary",
    "analyzer",
    "context-sensitive",
    "interactive",
    "systematic",
    "foreground",
    "demand-driven",
    "frame",
    "capability",
    "Synergistic",
    "moratorium",
    "software",
    "Multi-tiered",
    "intranet",
    "Optional",
    "neutral",
    "optimal",
    "Graphical User Interface",
    "radical",
    "Versatile",
    "local",
    "eco-centric",
    "neutral",
    "attitude-oriented",
    "strategy",
    "Focused",
    "needs-based",
    "challenge",
    "Cloned",
    "clear-thinking",
    "Down-sized",
    "interface",
    "Operative",
    "fresh-thinking",
    "circuit",
    "Multi-channelled",
    "algorithm",
    "scalable",
    "upward-trending",
    "explicit",
    "open architecture",
    "Progressive",
    "ability",
    "collaboration",
    "global",
    "maximized",
    "content-based",
    "real-time",
    "portal",
    "multimedia",
    "Cross-group",
    "paradigm",
    "Customer-focused",
    "non-volatile",
    "composite",
    "open system",
    "Configurable",
    "Optional",
    "systematic",
    "content-based",
    "complexity",
    "Re-contextualized",
    "protocol",
    "productivity",
    "Automated",
    "Universal",
    "methodical",
    "full-range",
    "Virtual",
    "throughput",
    "Inverse",
    "open architecture",
    "Business-focused",
    "contextually-based",
    "uniform",
    "application",
    "24 hour",
    "motivating",
    "moratorium",
    "Assimilated",
    "Innovative",
    "foreground",
    "concept",
    "website",
    "Polarised",
    "Customer-focused",
    "Proactive",
    "collaboration",
    "protocol",
    "system-worthy",
    "Balanced",
    "background",
    "neural-net",
    "benchmark",
    "Function-based",
    "bandwidth-monitored",
    "interactive",
    "Switchable",
    "installation",
    "time-frame",
    "Grass-roots",
    "Cross-platform",
    "contingency",
    "Enhanced",
    "Implemented",
    "database",
    "bandwidth-monitored",
    "application",
    "moderator",
    "regional",
    "paradigm",
    "protocol",
    "intranet",
    "Team-oriented",
    "methodology",
    "clear-thinking",
    "product",
    "eco-centric",
    "definition",
    "support",
    "circuit",
    "composite",
    "composite",
    "De-engineered",
    "moratorium",
    "Open-source",
    "Seamless",
    "human-resource",
    "multimedia",
    "leverage",
    "superstructure",
    "static",
    "hierarchy",
    "demand-driven",
    "zero tolerance",
    "3rd generation",
    "needs-based",
    "systematic",
    "firmware",
    "Organized",
    "ability",
    "Polarised",
    "Mandatory",
    "Proactive",
    "Quality-focused",
    "protocol",
    "Cloned",
    "instruction set",
    "Re-contextualized",
    "mobile",
    "holistic",
    "even-keeled",
    "User-centric",
    "Sharable",
    "archive",
    "neutral",
    "Self-enabling",
    "encompassing",
    "open architecture",
    "Optimized",
    "non-volatile",
    "hardware",
    "internet solution",
    "empowering",
    "Exclusive",
    "policy",
    "3rd generation",
    "leading edge",
    "knowledge base",
    "Profit-focused",
    "strategy",
    "exuding",
    "Assimilated",
    "Monitored",
    "encompassing",
    "Assimilated",
    "attitude",
    "Assimilated",
    "incremental",
    "definition",
    "Horizontal",
    "analyzer",
    "throughput",
    "middleware",
    "context-sensitive",
    "Decentralized",
    "dedicated",
    "multimedia",
    "Managed",
    "leverage",
    "groupware",
    "secured line",
    "zero administration",
    "Versatile",
    "forecast",
    "3rd generation",
    "Front-line",
    "matrices",
    "Progressive",
    "budgetary management",
    "encompassing",
    "moderator",
    "capacity",
    "impactful",
    "flexibility",
    "support",
    "website",
    "regional",
    "incremental",
    "Decentralized",
    "Organized",
    "fresh-thinking",
    "actuating",
    "process improvement",
    "superstructure",
    "capability",
    "intermediate",
    "groupware",
    "open architecture",
    "Enhanced",
    "Organized",
    "intangible",
    "success",
    "matrices",
    "bandwidth-monitored",
    "intermediate",
    "Diverse",
    "moderator",
    "heuristic",
    "next generation",
    "open architecture",
    "Assimilated",
    "open architecture",
    "Team-oriented",
    "5th generation",
    "moderator",
    "Fundamental",
    "directional",
    "object-oriented",
    "Configurable",
    "scalable",
    "user-facing",
    "systematic",
    "didactic",
    "product",
    "3rd generation",
    "open architecture",
    "Streamlined",
    "implementation",
    "foreground",
    "internet solution",
    "Focused",
    "model",
    "optimizing",
    "Polarised",
    "ability",
    "background",
    "high-level",
    "Synchronised",
    "Function-based",
    "artificial intelligence",
    "Devolved",
    "extranet",
    "Polarised",
    "secured line",
    "Configurable",
    "system engine",
    "neural-net",
    "radical",
    "superstructure",
    "Advanced",
    "incremental",
    "benchmark",
    "background",
    "Operative",
    "Innovative",
    "software",
    "Grass-roots",
    "circuit",
    "local",
    "capability",
    "flexibility",
    "Seamless",
    "explicit",
    "Seamless",
    "Quality-focused",
    "upward-trending",
    "homogeneous",
    "Pre-emptive",
    "Front-line",
    "contextually-based",
    "workforce",
    "24/7",
    "Future-proofed",
    "Advanced",
    "even-keeled",
    "tertiary",
    "motivating",
    "moratorium",
    "dynamic",
    "Organic",
    "zero tolerance",
    "paradigm",
    "hybrid",
    "multi-state",
    "Enterprise-wide",
    "Operative",
    "info-mediaries",
    "strategy",
    "non-volatile",
    "challenge",
    "local area network",
    "asymmetric",
    "Multi-lateral",
    "executive",
    "software",
    "Extended",
    "optimizing",
    "optimizing",
    "De-engineered",
    "national",
    "implementation",
    "6th generation",
    "adapter",
    "system engine",
    "synergy",
    "foreground",
    "core",
    "intermediate",
    "24 hour",
    "product",
    "zero defect",
    "methodical",
    "Triple-buffered",
    "content-based",
    "Re-contextualized",
    "product",
    "motivating",
    "Object-based",
    "implementation",
    "model",
    "utilisation",
    "user-facing",
    "Synchronised",
    "access",
    "adapter",
    "strategy",
    "Function-based",
    "interface",
    "scalable",
    "support",
    "challenge",
    "client-server",
    "task-force",
    "Monitored",
    "Monitored",
    "monitoring",
    "tangible",
    "local area network",
    "Customizable",
    "Right-sized",
    "Up-sized",
    "throughput",
    "support",
    "methodology",
    "dedicated",
    "Re-contextualized",
    "pricing structure",
    "responsive",
    "encoding",
    "success",
    "neutral",
    "hardware",
    "Self-enabling",
    "zero administration",
    "artificial intelligence",
    "Focused",
    "archive",
    "Vision-oriented",
    "superstructure",
    "even-keeled",
    "projection",
    "Quality-focused",
    "Implemented",
    "complexity",
    "knowledge base",
    "motivating",
    "24 hour",
    "zero administration",
    "Programmable",
    "benchmark",
    "regional",
    "4th generation",
    "Enhanced",
    "Optional",
    "bifurcated",
    "Digitized",
    "moderator",
    "superstructure",
    "Multi-tiered",
    "Reactive",
    "Intuitive",
    "database",
    "time-frame",
    "Exclusive",
    "parallelism",
    "Pre-emptive",
    "Face to face",
    "benchmark",
    "Compatible",
    "adapter",
    "national",
    "encompassing",
    "impactful",
    "24/7",
    "4th generation",
    "user-facing",
    "Streamlined",
    "eco-centric",
    "local area network",
    "local area network",
    "adapter",
    "Focused",
    "model",
    "emulation",
    "motivating",
    "Total",
    "neural-net",
    "Grass-roots",
    "Fundamental",
    "Focused",
    "tangible",
    "installation",
    "internet solution",
    "Re-engineered",
    "methodology",
    "local area network",
    "Assimilated",
    "toolset",
    "Phased",
    "secured line",
    "Graphic Interface",
    "protocol",
    "methodical",
    "firmware",
    "Customer-focused",
    "executive",
    "Inverse",
    "reciprocal",
    "incremental",
    "Diverse",
    "secondary",
    "4th generation",
    "Customer-focused",
    "utilisation",
    "productivity",
    "leverage",
    "bi-directional",
    "Focused",
    "solution",
    "bi-directional",
    "Secured",
    "orchestration",
    "methodical",
    "holistic",
    "radical",
    "approach",
    "Enhanced",
    "didactic",
    "Profound",
    "upward-trending",
    "didactic",
    "extranet",
    "core",
    "hierarchy",
    "zero defect",
    "contingency",
    "Business-focused",
    "actuating",
    "support",
    "task-force",
    "transitional",
    "complexity",
    "secondary",
    "productivity",
    "De-engineered",
    "Synergized",
    "mission-critical",
    "portal",
    "bifurcated",
    "didactic",
    "Persevering",
    "radical",
    "alliance",
    "Multi-tiered",
    "help-desk",
    "secondary",
    "Customizable",
    "protocol",
    "definition",
    "Open-source",
    "Reactive",
    "definition",
    "motivating",
    "neutral",
    "high-level",
    "Persistent",
    "Mandatory",
    "high-level",
    "24 hour",
    "fresh-thinking",
    "Virtual",
    "instruction set",
    "system engine",
    "actuating",
    "leading edge",
    "asymmetric",
    "archive",
    "Profound",
    "Adaptive",
    "knowledge user",
    "circuit",
    "composite",
    "ability",
    "even-keeled",
    "cohesive",
    "conglomeration",
    "needs-based",
    "process improvement",
    "Cross-group",
    "orchestration",
    "explicit",
    "Distributed",
    "forecast",
    "Seamless",
    "Advanced",
    "didactic",
    "Graphic Interface",
    "regional",
    "Advanced",
    "attitude",
    "system-worthy",
    "firmware",
    "optimal",
    "Re-engineered",
    "Organic",
    "Progressive",
    "infrastructure",
    "object-oriented",
    "strategy",
    "Stand-alone",
    "structure",
    "heuristic",
    "structure",
    "Seamless",
    "methodology",
    "system-worthy",
    "alliance",
    "5th generation",
    "24 hour",
    "Profit-focused",
    "heuristic",
    "array",
    "array",
    "time-frame",
    "User-friendly",
    "executive",
    "De-engineered",
    "methodology",
    "web-enabled",
    "approach",
    "Devolved",
    "structure",
    "Decentralized",
    "incremental",
    "composite",
    "interactive",
    "Visionary",
    "modular",
    "Digitized",
    "definition",
    "bottom-line",
    "bottom-line",
    "User-centric",
    "algorithm",
    "Diverse",
    "artificial intelligence",
    "task-force",
    "Advanced",
    "Polarised",
    "adapter",
    "application",
    "implementation",
    "solution",
    "Multi-channelled",
    "hardware",
    "interface",
    "Multi-channelled",
    "solution-oriented",
    "zero administration",
    "regional",
    "Versatile",
    "Enterprise-wide",
    "support",
    "Object-based",
    "didactic",
    "productivity",
    "matrix",
    "customer loyalty",
    "neutral",
    "disintermediate",
    "solution-oriented",
    "disintermediate",
    "demand-driven",
    "optimizing",
    "Inverse",
    "matrix",
    "zero administration",
    "Cross-group",
    "attitude-oriented",
    "complexity",
    "directional",
    "archive",
    "website",
    "workforce",
    "global",
    "3rd generation",
    "Monitored",
    "help-desk",
    "framework",
    "Switchable",
    "static",
    "local",
    "national",
    "empowering",
    "Distributed",
    "Reduced",
    "Visionary",
    "holistic",
    "local",
    "zero administration",
    "architecture",
    "Cross-group",
    "grid-enabled",
    "hierarchy",
    "Automated",
    "Quality-focused",
    "Digitized",
    "Total",
    "Customizable",
    "User-centric",
    "time-frame",
    "conglomeration",
    "coherent",
    "initiative",
    "6th generation",
    "toolset",
    "info-mediaries",
    "secured line",
    "encoding",
    "groupware",
    "Open-source",
    "functionalities",
    "Customizable",
    "systematic",
    "emulation",
    "3rd generation",
    "client-driven",
    "system-worthy",
    "monitoring",
    "Networked",
    "Optional",
    "installation",
    "interactive",
    "multi-tasking",
    "installation",
    "bandwidth-monitored",
    "analyzing",
    "focus group",
    "discrete",
    "Distributed",
    "concept",
    "Down-sized",
    "Compatible",
    "web-enabled",
    "Horizontal",
    "Secured",
    "matrices",
    "instruction set",
    "foreground",
    "asynchronous",
    "intermediate",
    "Mandatory",
    "executive",
    "parallelism",
    "Decentralized",
    "static",
    "discrete",
    "tangible",
    "Vision-oriented",
    "hybrid",
    "time-frame",
    "Quality-focused",
    "stable",
    "Persistent",
    "Implemented",
    "archive",
    "Sharable",
    "workforce",
    "Visionary",
    "Right-sized",
    "open architecture",
    "Centralized",
    "Compatible",
    "knowledge user",
    "application",
    "Polarised",
    "Fundamental",
    "De-engineered",
    "interactive",
    "capability",
    "definition",
    "Seamless",
    "approach",
    "Graphic Interface",
    "bifurcated",
    "Operative",
    "web-enabled",
    "monitoring",
    "Reactive",
    "solution",
    "focus group",
    "Synchronised",
    "motivating",
    "Distributed",
    "success",
    "open architecture",
    "Advanced",
    "Reverse-engineered",
    "capacity",
    "Enhanced",
    "actuating",
    "heuristic",
    "Synergistic",
    "Face to face",
    "Mandatory",
    "holistic",
    "contextually-based",
    "matrix",
    "portal",
    "stable",
    "standardization",
    "Right-sized",
    "scalable",
    "time-frame",
    "system engine",
    "Expanded",
    "fresh-thinking",
    "standardization",
    "value-added",
    "model",
    "reciprocal",
    "migration",
    "bottom-line",
    "service-desk",
    "synergy",
    "maximized",
    "4th generation",
    "software",
    "access",
    "utilisation",
    "Phased",
    "De-engineered",
    "open system",
    "methodology",
    "asymmetric",
    "leading edge",
    "Operative",
    "Face to face",
    "Sharable",
    "knowledge user",
    "installation",
    "coherent",
    "leading edge",
    "empowering",
    "Vision-oriented",
    "encoding",
    "Automated",
    "leverage",
    "hardware",
    "dynamic",
    "exuding",
    "human-resource",
    "Persistent",
    "Reverse-engineered",
    "Reactive",
    "architecture",
    "composite",
    "24/7",
    "non-volatile",
    "Graphical User Interface",
    "clear-thinking",
    "disintermediate",
    "portal",
    "interface",
    "Intuitive",
    "empowering",
    "5th generation",
    "task-force",
    "needs-based",
    "asymmetric",
    "Pre-emptive",
    "Sharable",
    "clear-thinking",
    "Managed",
    "tangible",
    "encompassing",
    "Organic",
    "dedicated",
    "real-time",
    "open system",
    "solution",
    "tertiary",
    "analyzing",
    "portal",
    "collaboration",
    "policy",
    "open architecture",
    "project",
    "optimal",
    "groupware",
    "tangible",
    "Sharable",
    "zero defect",
    "4th generation",
    "firmware",
    "asymmetric",
    "application",
    "logistical",
    "well-modulated",
    "Horizontal",
    "Right-sized",
    "emulation",
    "archive",
    "Polarised",
    "Synergized",
    "Optional",
    "Ameliorated",
    "info-mediaries",
    "Enterprise-wide",
    "global",
    "customer loyalty",
    "leverage",
    "Inverse",
    "function",
    "multimedia",
    "policy",
    "customer loyalty",
    "structure",
    "actuating",
    "logistical",
    "Implemented",
    "non-volatile",
    "motivating",
    "capacity",
    "uniform",
    "local",
    "moderator",
    "dynamic",
    "Seamless",
    "responsive",
    "paradigm",
    "didactic",
    "exuding",
    "tangible",
    "moderator",
    "capacity",
    "contextually-based",
    "complexity",
    "approach",
    "fault-tolerant",
    "local",
    "value-added",
    "strategy",
    "moratorium",
    "focus group",
    "flexibility",
    "system engine",
    "mobile",
    "executive",
    "Automated",
    "Streamlined",
    "grid-enabled",
    "matrix",
    "Down-sized",
    "algorithm",
    "User-centric",
    "executive",
    "success",
    "zero administration",
    "moratorium",
    "Cross-platform",
    "Optimized",
    "clear-thinking",
    "Persistent",
    "user-facing",
    "database",
    "local area network",
    "zero tolerance",
    "scalable",
    "firmware",
    "User-friendly",
    "contingency",
    "Multi-channelled",
    "interactive",
    "access",
    "responsive",
    "process improvement",
    "process improvement",
    "Secured",
    "Sharable",
    "open system",
    "background",
    "Integrated",
    "Virtual",
    "Reactive",
    "hub",
    "pricing structure",
    "zero tolerance",
    "pricing structure",
    "Realigned",
    "Intuitive",
    "Advanced",
    "flexibility",
    "Triple-buffered",
    "secured line",
    "Cross-group",
    "Team-oriented",
    "functionalities",
    "Ergonomic",
    "instruction set",
    "Innovative",
    "Proactive",
    "foreground",
    "benchmark",
    "well-modulated",
    "Multi-layered",
    "system-worthy",
    "architecture",
    "neural-net",
    "needs-based",
    "Reactive",
    "Triple-buffered",
    "matrices",
    "migration",
    "Versatile",
    "model",
    "Monitored",
    "Organic",
    "moderator",
    "Open-architected",
    "maximized",
    "responsive",
    "projection",
    "background",
    "challenge",
    "bifurcated",
    "alliance",
    "Integrated",
];

// Dans le fichier index.html
// mettez en place un champ input
// en dessous de ce champ input placez un ul
// dans le ul afficher des li contenant les phrases du tableau words
// uniqement si le champs input contient 3 lettres minimum
// et si la phrase contient les lettres saisies
// exemple
// si il y a "tion" dans le champ input les phrases projection, migration, zero administration, ... aparaitrons
// seuls les 15 premiers resultats devront apparaitre
