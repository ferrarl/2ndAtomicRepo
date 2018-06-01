document.addEventListener("DOMContentLoaded", function(){
    let headerContainer = document.createElement('div');
    let h1Heading = document.createElement('h1');
    let h1Text = document.createTextNode('This is an h1');
    let h2Heading = document.createElement('h2');
    let h2Text = document.createTextNode('This is an h2');
    let h3Heading = document.createElement('h3');
    let h3Text = document.createTextNode('This is an h3');
    let h4Heading = document.createElement('h4');
    let h4Text = document.createTextNode('This is an h4');
    let h5Heading = document.createElement('h5');
    let h5Text = document.createTextNode('This is an h5');
    let h6Heading = document.createElement('h6');
    let h6Text = document.createTextNode('This is an h6');
    
    h1Heading.appendChild(h1Text);
    headerContainer.appendChild(h1Heading);
    document.body.appendChild(headerContainer);
    h2Heading.appendChild(h2Text);
    headerContainer.appendChild(h2Heading);
    document.body.appendChild(headerContainer);
    h3Heading.appendChild(h3Text);
    headerContainer.appendChild(h3Heading);
    document.body.appendChild(headerContainer);
    h4Heading.appendChild(h4Text);
    headerContainer.appendChild(h4Heading);
    document.body.appendChild(headerContainer);
    h5Heading.appendChild(h5Text);
    headerContainer.appendChild(h5Heading);
    document.body.appendChild(headerContainer);
    h6Heading.appendChild(h6Text);
    headerContainer.appendChild(h6Heading);
    document.body.appendChild(headerContainer);




})







