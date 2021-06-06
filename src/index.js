import "./styles.css";


import { jsPDF } from "jspdf";

// Default export is a4 paper, portrait, using millimeters for units

var pdf = new jsPDF('p', 'pt', 'a4');

    function onClick() {
        window.html2canvas = html2canvas
        const doc = document.getElementsByTagName('div')[0];

        if (doc) {
            console.log("div is ");
            console.log(doc);
            console.log("hellowww");



            pdf.html(document.getElementById('doc'), {
                callback: function (pdf) {
                    pdf.save('DOC.pdf');
                }
            })
       }
     }

var element = document.getElementById("D");
element.addEventListener("click", onClick);
