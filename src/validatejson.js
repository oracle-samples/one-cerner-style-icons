const { Console } = require('console');
const fs = require('fs');

let errorsExist = false;

// Returns object with list of Descriptive Names bearing target alias
const findAllIconsWithAlias = (targetAlias, iconData) => {
  const collisionData = {alias: targetAlias, descriptiveNames: [], instanceCount: 0};
  iconData.forEach(icon => {
    let aliasExistsInName = false;
    icon.aliases.forEach(({alias}) => {
      if(alias === targetAlias) {
        aliasExistsInName = true;
        collisionData.instanceCount += 1;
      }
    });
    icon.secretAliases.forEach(({alias}) => {
      if(alias === targetAlias) {
        aliasExistsInName = true;
        collisionData.instanceCount += 1;
      }
    });
    if(aliasExistsInName) collisionData.descriptiveNames.push(icon.descriptiveName);
  });
  return collisionData;
}

// Checks the icon data for conflicting aliases
const checkForAliasCollisions = (iconData) => {
  const collidingAliases = new Set();
  const checkedAliases = new Set();

  const checkAlias = ({alias}) => {
    if(checkedAliases.has(alias)){
      collidingAliases.add(alias);
    }
    checkedAliases.add(alias);
  }

  iconData.forEach(icon => {
    icon.aliases.forEach(checkAlias);
    icon.secretAliases.forEach(checkAlias);
  });

  const collisionData = [...collidingAliases].map((alias) => findAllIconsWithAlias(alias, iconData));
  if(collisionData && collisionData.length > 0){
    console.error(`⛔️ ERROR: ${collisionData.length} colliding alias${collisionData.length > 1 ? 'es' : ''} found:\n`)
    collisionData.forEach((collidingAlias) => {
      console.log(`${collidingAlias.instanceCount} instances of "${collidingAlias.alias}" with descriptive names:`)
      console.log(`  ${collidingAlias.descriptiveNames.join(', ')}\n`)
    });
    errorsExist = true;
  }
}

const validateData = (iconData) => {
  checkForAliasCollisions(iconData);
  if(errorsExist){
    process.exit(1);
  } else {
    console.log('CernerOneIcons.js checked successfully for duplicate aliases')
    process.exit(0);
  }
}

fs.readFile(__dirname + '/CernerOneIcons.json', 'utf-8', (err, data) => {
  if(err) {
    console.log(`Error in validatejson.js.\n ${err}`)
  } else {
    const iconData = JSON.parse(data);
    validateData(iconData);
  }
})