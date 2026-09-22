function submitQuiz() {

    
    let name = document.getElementById("name").value;
    let rollno = document.getElementById("rollno").value;
    let section = document.getElementById("section").value;

    let score = 0;

    
    if (document.getElementById("q1b").checked) {
        score++;
    }

    
    if (document.getElementById("q2c").checked) {
        score++;
    }

   
    if (document.getElementById("q3c").checked) {
        score++;
    }

    
    if (document.getElementById("q4c").checked) {
        score++;
    }

    if (document.getElementById("q5d").checked) {
        score++;
    }

    
    alert(
        "Name: " + name +
        "\nRoll No: " + rollno +
        "\nSection: " + section +
        "\n\nYour Score: " + score + " / 5"
    );
}

