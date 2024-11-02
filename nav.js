
let elementLabelOne = document.getElementById('lblOne')
let elementLabelTwo = document.getElementById('lblTwo')
let elementLabelThree = document.getElementById('lblThree')

let elementID 

function getElementId(element){

  elementID = element.id

  if(elementID == 'lblOne'){

    elementLabelOne.setAttribute('style', 'color: #AE5AE4;')
    elementLabelTwo.setAttribute('style', 'color: #FFFFFF;')
    elementLabelThree.setAttribute('style', 'color: #FFFFFF;')

  }else if(elementID == 'lblTwo'){

    elementLabelOne.setAttribute('style', 'color: #FFFFFF;')
    elementLabelTwo.setAttribute('style', 'color: #AE5AE4;')
    elementLabelThree.setAttribute('style', 'color: #FFFFFF;')

  }else if(elementID == 'lblThree'){

    elementLabelOne.setAttribute('style', 'color: #FFFFFF;')
    elementLabelTwo.setAttribute('style', 'color: #FFFFFF;')
    elementLabelThree.setAttribute('style', 'color: #AE5AE4;')

  }

}


