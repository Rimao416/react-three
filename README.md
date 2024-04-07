# Cours Three.Js 

## 02_ChargerChemise

**Packages à Installer**
- <group {...props} dispose={null}>: Cela crée un groupe d'objets en 3D qui peut être manipulé ensemble. Les propriétés props sont propagées au groupe. dispose={null} signifie que les ressources associées au groupe ne sont pas libérées automatiquement lors de la suppression du composant. Cela peut être utile lorsque vous utilisez useGLTF pour charger des modèles 3D, car cela gère déjà la libération des ressources.

- <mesh castShadow receiveShadow geometry={nodes.T_Shirt_male.geometry} material={materials.lambert1} />: Cela crée un objet en 3D de type "mesh" représentant la chemise. Les propriétés castShadow et receiveShadow indiquent que cet objet doit lancer des ombres et recevoir des ombres d'autres objets. geometry est défini sur nodes.T_Shirt_male.geometry, ce qui signifie qu'il utilise la géométrie de la chemise à partir du fichier GLTF chargé (nodes.T_Shirt_male représente le nœud de la chemise dans le fichier GLTF). material est défini sur materials.lambert1, ce qui indique le matériau à utiliser pour afficher la chemise. Dans ce cas, le matériau est lambert1, qui est probablement un matériau prédéfini inclus dans le fichier GLTF.

- <AccumulativeShadows ...>: Cela crée un composant pour les ombres accumulatives dans la scène. Les propriétés spécifiées, telles que temporal, frames, alphaTest, scale, rotation et position, contrôlent différents aspects de la manière dont les ombres sont générées et affichées.

- <RandomizedLight ...>: Cela crée un composant pour une lumière aléatoire dans la scène. Les propriétés telles que amount, radius, intensity, ambient et position définissent différents paramètres de la lumière, tels que le nombre de lumières, le rayon, l'intensité, l'éclairage ambiant et la position. Dans cet exemple, deux lumières aléatoires sont créées avec des paramètres différents et sont placées à des positions spécifiques dans la scène.

- Enfin, useGLTF.preload("/shirt_baked.glb") précharge le modèle de chemise en 3D pour améliorer les performances de chargement lors de l'affichage de la scène.


