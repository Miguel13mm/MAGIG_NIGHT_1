 // Set the countdown date (adjust it according to your needs)
    var countdownDate = new Date("2023-06-01T09:00:00").getTime();

    // Update the countdown every 1 second
    var countdownTimer = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the countdown date
      var distance = countdownDate - now;

      // Calculate the days, hours, minutes, and seconds remaining
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the countdown
      document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      // If the countdown is finished, display a message
      if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "Maintenance Complete!";
      }
    }, 1000);