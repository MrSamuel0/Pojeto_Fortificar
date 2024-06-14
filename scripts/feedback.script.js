function feedbackObj(type, description, owner) {
    const feedback = {
        type,
        description,
        owner
    };
    const date = new Date();
    feedback.date = date.toLocaleDateString();

    return feedback;
}


function addToLocalStorage() {
    const email = document.getElementById("input_email").value;
    const typeSuggestion = document.getElementById("sel").value;
    const description = document.getElementById("texto").value;
    const feedbacks = JSON.parse(localStorage.getItem("Feedbacks")) || [];

    if (!(email.length >= 8 && typeSuggestion && description.length >= 20)) {
        return window.alert("Os dados devem ser preenchidos");
    }

    const feedback = feedbackObj(typeSuggestion, description, email);
    feedbacks.push(feedback);
    localStorage.setItem("Feedbacks", JSON.stringify(feedbacks));
    return window.open("form_reg.html", "_self");
}
