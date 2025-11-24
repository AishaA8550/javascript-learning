function handleCostKeyDown(event) {
     if (event.key === 'Enter') {
      calculateTotal();
    }
    }

    function calculateTotal(){
        const inputElement = document.querySelector('.js-cost-button');
        // Convert the numbers to cents by * 100.
        let cost = Number(inputElement.value) *100;
        if (cost < 4000 ) {
            cost += 1000;
        }
     document.querySelector('.js-totalcost').innerHTML = `$${cost/100}`;
    }

   

    function Subscribe() {
    const ElementText = document.querySelector('.js-subscribe-button')
    
    if (ElementText.innerText === 'Subscribe') {
        ElementText.innerHTML = 'Subscribed'
        ElementText.classList.add 
        ('is-subscribed');
    } else {
        ElementText.innerHTML = 'Subscribe'
        ElementText.classList.remove
        ('is-subscribed');
    }

}

