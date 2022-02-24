# LAB - 11

## Bus Mall

Create an app that takes in 3 random images from a product catalogue for a user to vote on which one they like the best. This will help the client have better information on how to sell their products.

### Author: Thomas Basham

### Links and Resources

[code 201 lab set up](https://codefellows.github.io/code-201-guide/curriculum/class-02/project-setup)

[Chartjs](https://www.chartjs.org/)

[Article on local storage](http://diveinto.html5doctor.com/storage.html)

### Reflections and Comments

### Lab 11

    This lab felt like I was pulling all of the fundamentals from lab 10 and using them in a slightly different way. Last week DOM manipulation seemed like a daunting task to me, and now it flows effortlessly. Organizing all of the html elements is becoming secondhand as well. It didn't take long to put the page together. It was exciting putting together the event handling and getting the clicks to add "votes" to each image. I had some extra time after getting everything to function properly, so I went ahead and started styling the page using grid layout to match the wireframe asset provided. I hope that's not incorrect to do. Overall this went really well and it feels good to be understanding some of these concepts even better. It took me about 7 hours to complete this assignment, which is about how long I thought it would take. 

### Lab 12

    In lab 12 we took our first dive into 3rd party libraries and used the chartjs plugin to create a chart. We replaced the list that had our data rendered into it with a fancy chart, and used the same data. The chartjs website was helpful at explaining how to use their plugin and I'm really excited to see what other plugins are out there. Another thing I replaced from the last lab was the button. Instead I had the chart appear once the roundsAllowed var went to 0. One last thing that I added was a header that displays while there are still rounds of voting left and counts down with each vote, then dissapears when there are no rounds left. This might be a bit extra but I feel like it made the app more ux friendly. 

### Lab 13

    This lab we wrote the code to store the data from the users 'votes' and 'views' per product. I think this is one of the most boring parts of the project but definitely useful. We used JSON to strinify our data and then put the data into the users local storage. It was fulfilling to see that all of this hard work will be stored on someones machine somewhere. 

Some notes on Local Storage from demo

  // ********* LOCAL STORAGE BEGINS ***********

    // Step 1: Stringify our data

     // Step 2: Set the item into Local Storage


     // **** LOCAL STORAGE CONTINUED ****

     // Step 3: Get it out of local storage
    
     // Step 4: Parse our data for our code to read


     // ******* LOCAL STORAGE CONTINUED PT 2 *********

     // Step 5: Use the data that came out of localStorage
