import React from 'react';

const FAQ = () => {
    return (
        <section class="accordion container mx-auto p-3" id="accordionExample">
            <hr />
            <h1 class="text-center">F.A.Q</h1>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <h4>How React Works?</h4>
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <article class="accordion-body text-muted">
                        Firstly browser render engine recieves HTML file & CSS file then  parse them and creates a DOM tree & a CSSOM tree.
                        After creating both, browser engine creates a Render tree which goes through a layout phase which decides where every element should be placed. After that getting all things engine paints everything to output.
                        So when we manupulate DOM everytime and change the data to the UI. Render tree re calculate the hole process again which is very inefficient.
                        Here React uses Virtual DOM. When any state is changed Virtual DOM creates  a replica of real DOM and compares through diff algorithm. After finding the changes it simply paint that particular changed element or data effeciently.

                    </article>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <h4>How useState Works?</h4>
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <article class="accordion-body text-muted">
                        useState is called React's hook. useState is a function itself when we call in our code it returns a variable to store data and a setter function to modify data of that variable under the hood. When we call useState it keeps e initial value and store it behind the scene. By calling it's setter function pass data through argument it simply compares the previous value and the new value. If any changes found it sets the new value to the variable, else it keep the previous data same.
                    </article>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <h4>Difference between props & state</h4>
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <article class="accordion-body text-muted">
                        1. props are immutable but states are mutable.
                        2. props are read-only but the states changes
                        3. props helps to pass the data from a component to another component but state holds the data.
                    </article>
                </div>
            </div>
        </section>
    );
};

export default FAQ;