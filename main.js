/***********************
 * ITERATION FUNCTIONS *
 **********************/
const makeDino = function (species, period, carnivore, extinct = false) {
  const dino  = {
    species: species,
    period: period,
    carnivore: carnivore,
    extinct: extinct,
  }
  return dino;
}

const singularizeDinos = function(dinos) {
  const copyOfDinos = [...dinos];
  return copyOfDinos.map(function(dino) {
    const copyOfDinoInternal = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);
    if(copyOfDinoInternal.species.endsWith('us') === true) {
      copyOfDinoInternal.species = copyOfDinoInternal.species.slice(0, -2);
    }
    return copyOfDinoInternal;
  });
}

const truncateDinos = function(dinos) {
  const copyOfDinos = [...dinos];
  return copyOfDinos.map(function(dino) {
    const copyOfDinoInternal = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);
    if(copyOfDinoInternal.species.length > 10) {
      copyOfDinoInternal.species = `${copyOfDinoInternal.species.substr(0, 7)}...`;
    }
    return copyOfDinoInternal;
  });
}

const makeAllExtinct = function(dinos) {
  const copyOfDinos = [...dinos];
  return copyOfDinos.map(function(dino) {
    const copyOfDinoInternal = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);
    if (copyOfDinoInternal.extinct === true || copyOfDinoInternal.extinct === false) {
      copyOfDinoInternal.extinct = true;
    }
    return copyOfDinoInternal;
  }); 
}


const carnivoresOnly = function(dinos) {
  const copyOfDinos = [...dinos];
  return copyOfDinos.filter(function(dino) {
    const copyOfDinoInternal = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);
    if (copyOfDinoInternal.carnivore === true);
      return copyOfDinoInternal.carnivore;
  });
}

const herbivoresOnly = function(dinos) {
  const copyOfDinos = [...dinos];
  return copyOfDinos.filter(function(dino) {
    const copyOfDinoInternal = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);
    if(copyOfDinoInternal.carnivore === false) {
      return copyOfDinoInternal;
    }
  });
}

const extinctOnly = function(dinos) {
  const copyOfDinos = [...dinos];
  return copyOfDinos.filter(function(dino) {
    const copyOfDinoInternal = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);
    if(copyOfDinoInternal.extinct === true) {
      return copyOfDinoInternal;
    }
  });
}

const notExtinct = function(dinos) {
  const copyOfDinos = [...dinos];
  return copyOfDinos.filter(function(dino) {
    const copyOfDinoInternal = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);
    if(copyOfDinoInternal.extinct === false) {
      return copyOfDinoInternal;
    }
  });
}

const triassicOnly = function(dinos) {
  const copyOfDinos = [...dinos];
  return copyOfDinos.filter(function(dino) {
    const copyOfDinoInternal = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);
    if(copyOfDinoInternal.period === 'Triassic') {
      return copyOfDinoInternal;
    }
  });
}

const notTriassic = function(dinos) {
  const copyOfDinos = [...dinos];
  return copyOfDinos.filter(function(dino) {
    const copyOfDinoInternal = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);
    if(copyOfDinoInternal.period !== 'Triassic') {
      return copyOfDinoInternal;
    }
  });
}

const bySpecies = function(dinos) {
  const copyOfDinos = [...dinos];
  return copyOfDinos.sort(function(dino1, dino2) {
    const copyOfDino1 = makeDino(dino1.species, dino1.period, dino1.carnivore, dino1.extinct);
    const copyOfDino2 = makeDino(dino2.species, dino2.period, dino2.carnivore, dino2.extinct);
  
    if (copyOfDino1.species > copyOfDino2.species) {
      return 5;
    } else if (copyOfDino1.species < copyOfDino2.species) {
      return -5;
    } else  {
      return 0;
    }
  });
}

const byExtinctLast = function(dinos) {
  const copyOfDinos = [...dinos];
  return copyOfDinos.sort(function(dino1, dino2) {
    const copyOfDino1 = makeDino(dino1.species, dino1.period, dino1.carnivore, dino1.extinct);
    const copyOfDino2 = makeDino(dino2.species, dino2.period, dino2.carnivore, dino2.extinct);
  
    if (copyOfDino1.extinct > copyOfDino2.extinct) {
      return 5;
    } else if (copyOfDino1.extinct < copyOfDino2.extinct) {
      return -5;
    } else  {
      return 0;
    }
  })
}

const byCarnivoresFirst = function(dinos) {
  const copyOfDinos = [...dinos];
  return copyOfDinos.sort(function(dino1, dino2) {
    const copyOfDino1 = makeDino(dino1.species, dino1.period, dino1.carnivore, dino1.extinct);
    const copyOfDino2 = makeDino(dino2.species, dino2.period, dino2.carnivore, dino2.extinct);
  
    if (copyOfDino1.carnivore < copyOfDino2.carnivore) {
      return 5;
    } else if (copyOfDino1.carnivore > copyOfDino2.carnivore) {
      return -5;
    } else  {
      return 0;
    }
  })
}

const byPeriod = function(dinos) {
  const copyOfDinos = [...dinos];
  return copyOfDinos.sort(function(dino1, dino2) {
    const copyOfDino1 = makeDino(dino1.species, dino1.period, dino1.carnivore, dino1.extinct);
    const copyOfDino2 = makeDino(dino2.species, dino2.period, dino2.carnivore, dino2.extinct);
  
    if (dino1.period === 'Jurassic' && dino2.period === 'Triassic') {
      return 5;
    } else if (dino1.period === 'Cretaceous' && dino2.period === 'Triassic') {
      return 5;
    } else if (dino1.period === 'Cretaceous' && dino2.period === 'Jurassic') {
      return 5;
    } else if (dino1.period === 'Jurassic' && dino2.period === 'Cretaceous') {
      return -5;
    } else if (dino1.period === 'Triassic' && dino2.period === 'Cretaceous') {
      return -5;
    } else if (dino1.period === 'Triassic' && dino2.period === 'Jurassic') {
      return -5;
    } else {
      return 0;
    }
  })
}




/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

  if (typeof makeDino === 'undefined') {
    makeDino = undefined
  }

  if (typeof singularizeDinos === 'undefined') {
    singularizeDinos = undefined
  }

  if (typeof truncateDinos === 'undefined') {
    truncateDinos = undefined
  }

  if (typeof makeAllExtinct === 'undefined') {
    makeAllExtinct = undefined
  }

  if (typeof carnivoresOnly === 'undefined') {
    carnivoresOnly = undefined
  }

  if (typeof herbivoresOnly === 'undefined') {
    herbivoresOnly = undefined
  }

  if (typeof extinctOnly === 'undefined') {
    extinctOnly = undefined
  }

  if (typeof notExtinct === 'undefined') {
    notExtinct = undefined
  }

  if (typeof triassicOnly === 'undefined') {
    triassicOnly = undefined
  }

  if (typeof notTriassic === 'undefined') {
    notTriassic = undefined
  }

  if (typeof bySpecies === 'undefined') {
    bySpecies = undefined
  }

  if (typeof byExtinctLast === 'undefined') {
    byExtinctLast = undefined
  }

  if (typeof byCarnivoresFirst === 'undefined') {
    byCarnivoresFirst = undefined
  }

  if (typeof byPeriod === 'undefined') {
    byPeriod = undefined
  }



module.exports = {
  makeDino,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
  bySpecies,
  byExtinctLast,
  byCarnivoresFirst,
  byPeriod,
}
