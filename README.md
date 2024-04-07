# Cours Three.Js

**Packages à Installer**
- React Three Drei / npm install @react-three/drei
 > Le package react-three/drei est une bibliothèque complémentaire pour React et Three.js, une bibliothèque JavaScript 3D. Il offre une gamme de composants, de hooks et d'utilitaires pour simplifier le processus de développement d'applications WebGL 3D avec React.

- React Three Fiber / npm install @react-three/fiber
> react-three/fiber est un wrapper pour Three.js dans l'écosystème React. Il fournit une couche d'abstraction pour utiliser Three.js avec React de manière plus efficace et plus intuitive. La principale caractéristique de react-three/fiber est qu'il repose sur une architecture de rendu appelée "React Fiber", d'où son nom.

**Explication du Code**

- <Canvas> : C'est un composant fourni par @react-three/fiber qui crée un conteneur de scène WebGL dans votre application React. Il encapsule tous les éléments 3D de votre scène.

> D'après ce que j'ai compris, c'est lui qui rend notre élément 3D, si vous le retirez, vous ne verrez pas votre élément 3D


- eventSource et eventPrefix : Ces propriétés sont utilisées pour spécifier la source des événements pour les contrôles de caméra. Dans cet exemple, vous avez défini document.getElementById("root") comme source des événements, ce qui signifie que les événements seront écoutés au niveau du composant ayant l'ID "root" dans votre DOM. La propriété eventPrefix est utilisée pour spécifier le préfixe des événements, dans ce cas, "client".

- camera : C'est une propriété de <Canvas> qui permet de définir les propriétés de la caméra de la scène. Vous avez spécifié une position par défaut pour la caméra en utilisant les coordonnées [position] et un champ de vision (fov) de 25 degrés.

- <Center> : C'est un composant fourni par @react-three/drei qui est utilisé pour centrer son contenu dans la scène. Dans cet exemple, il est utilisé pour centrer le contenu de la scène, qui est un composant <Shrit /> (il semble qu'il y ait une faute de frappe dans le nom du composant, c'est peut-être <Shirt />).

- <OrbitControls> : C'est un composant fourni par @react-three/drei qui ajoute des contrôles d'orbite à la caméra de la scène, permettant à l'utilisateur de naviguer autour des objets de la scène en utilisant la souris ou les gestes tactiles.

> C'est que j'ai compris est que c'est grâce à lui que l'utilisateur peut bouger le cube

