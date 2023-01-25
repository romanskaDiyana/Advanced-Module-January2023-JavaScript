//01. Edit Element 
//Create function edit() that takes three parameters.

function editElements(ref, match, replacer) {
    //const pattern = new RegExp(match, 'g');
    const text = ref.textContent;
    const result = text.split(match).join(replacer);
    
    ref.textContent = result;
}