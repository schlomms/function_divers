function chopeId(element, classeToMove, attributName, attributValues) {
    for (const attributValue of attributValues) {
        if ($(element).attr(attributName) !== attributValue) { // si c'est pas le bon id -> add
            $(element).addClass(classeToMove);
        } else {
            $(element).removeClass(classeToMove); //si c'est c'est le bon -> remove
            console.log(element);
            removeClassForEveryParents(element, classeToMove); // -> remove pour les parents jusqu'a element
            removeClassForEveryChildren(element, classeToMove); // -> remove pour les gosses si un autre est passé par la
            return;
        }
        if ($(element).children().length > 0) { //je dig la suite du DOM
            for (const child of $(element).children()) {
                chopeId(child, classeToMove, attributName, attributValues);
            }
        }
    }

}

function removeClassForEveryParents(element, classToRemove) {
    for (const parent of $(element).parents()) {
        let tagNameParent = $(parent).prop('tagName').toLowerCase();
        if (tagNameParent !== element) {
            $(parent).removeClass(classToRemove);
        } else {
            $(parent).removeClass(classToRemove);
            break;
        }
    }
}

function removeClassForEveryChildren(element, classeToAdd) {
    for (const child of $(element).children()) {
        $(child).removeClass(classeToAdd);
    }
}
/* un appel de la
function serait:
$(document).ready(function() {
    chopeId('body', 'hidden', 'id', ['maDiv', 'text']);
    //mettre la valeur des attributs dans l'ordre d'apparition dans le dom  
}); */