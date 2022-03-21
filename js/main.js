function calcBmi(massKg, heightCm) {
    if (massKg && heightCm && !isNaN(massKg) && !isNaN(heightCm) ) {
        return massKg / ((heightCm / 100) ** 2)
    } else return -1
}
//Überprüfung der Eingabebedigung, z.B. wenn keine Zahl

function determineResult(bmi) {
    let res
    if (bmi < 0) res = "ERROR"
    else if (bmi < 10) res = "meist nicht mit Überleben vereinbar"
    else if (bmi < 12) res = "akute Lebensgefahr"
    else if (bmi < 13) res = "hochgradiges Untergewicht Grad II"
    else if (bmi < 16) res = "hochgradiges Untergewicht Grad I"
    else if (bmi < 17) res = "Mäßiges Untergewicht"
    else if (bmi < 17.5) res = "Anorektisches Gewicht"
    else if (bmi < 18.5) res = "Leichtes Untergewicht"
    else if (bmi < 25) res = "Normalgewicht"
    else if (bmi < 30) res = "Präadipositas"
    else if (bmi < 35) res = "Adipositas Grad I"
    else if (bmi < 40) res = "Adipositas Grad II"
    else if (bmi >= 40) res = "Adipositas Grad III"
    else if (bmi >= 148 && bmi < 155) res = "Extremwerte"
    return res
}
//Ergebnisüberprüfung je nach Erfüllung der Bedingung

function getInputMass() {
    return document.querySelector("#InputMass").value
}

function getInputHeight() {
    return document.querySelector("#InputHeight").value
}
//Eingabe von Körpergröße und Körpergewicht

function setResultText(value) {
    document.querySelector("#Result").innerHTML = "Ergebnis: " + value
}

function setBmiResult() {
    setResultText(determineResult(calcBmi(getInputMass(), getInputHeight())))
}
//Zusammenrechnen bzw. Ergebniss der gegebenen Werte
