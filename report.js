const container1 = document.querySelector("#container1")
const b1 = document.querySelector(".btns")
const b2 = document.querySelector(".btns2")
const b3 = document.querySelector("#submit")

// container2.style.display = "none";
// container3.style.display = "none";
// container1.style.display = "grid";

// b1.addEventListener("click", () => {
//     container2.style.display = "grid";
//     container3.style.display = "none";
//     container1.style.display = "none";
// })

// b2.addEventListener("click", () => {
//     container2.style.display = "none";
//     container3.style.display = "grid";
//     container1.style.display = "none";
// })
slide=[`<h1>Cybercrime - Report</h1>
        <div class="section-title">Victim Details</div>
        <hr class="div1">
        <form action="" id="1">
            <label>Victim name</label>
            <input type="text" placeholder="name" id="name" name="name">
            <label>Age</label>
            <input type="number" id="age" name="age" min="0" max="120" placeholder="Age">
            <label>Gender</label>
            <select name="Gender">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
            </select>
            <!-- <label>Contact</label>
            <input type="number" id="number" name="con" placeholder="+91-" pattern="[+]?[0-9\- ]{10,15}" required> -->
            <label>Incident description</label>
            <textarea name="incident_desc" rows="4" placeholder="Address of Victim"></textarea>
<div class="but">
            <button class="btns" onclick="next()"><i class="fa-solid fa-arrow-right"></i></button>
            <button class="btns" onclick="Prev()" style="visibility:hidden";>Previous</button>
            </div>
        </form>`,` <h1>Cybercrime - Report</h1>
        <div class="section-title">Crime Details</div>
        <hr class="div1">
        <form action="" id="2">
            <label>Type of Cybercrime</label>
            <select name="crime_type">
                <option>Phishing</option>
                <option>Online Scam</option>
                <option>Identity Theft</option>
                <option>Hacking</option>
                <option>Data Breach</option>
                <option>Other</option>
            </select>
            <label>Incident Description</label>
            <textarea name="incident_desc" rows="4" placeholder="Details of the incident..."></textarea>
            <label>Date of Incident</label>
            <input type="date" name="incident_date" placeholder="dd/mm/yy">
            <label>Was any data or money compromised?</label>
            <select name="data_loss">
                <option>Yes</option>
                <option>No</option>
                <option>Not Sure</option>
            </select>
            <div class="but">
            <button class="btns" onclick="Prev()"><i class="fa-solid fa-arrow-right fa-flip-horizontal"></i></button>
            <button class="btns" onclick="next()"><i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </form>
        
    `,`
<form action="" id="f3">
<h1>Cybercrime - Report</h1>
        <div class="section-title">Crime Details</div>
        <hr class="div1">
            <label>Did you report this to police or cyber cell?</label>
            <select name="reported">
                <option>Yes</option>
                <option>No</option>
            </select>
            <label>Evidence or Screenshot Links</label>
            <input type="text" name="evidence" placeholder="Paste URL(s) if any">
            <label>Platform involved in the attack</label>
            <input type="text" name="platform" placeholder="e.g., Facebook, Instagram, Bank site">
            <label>Have you experienced similar incidents before?</label>
            <select name="repeat_incident">
                <option>Yes</option>
                <option>No</option>
            </select>
            <label>Actions you’ve taken so far</label>
            <textarea name="actions_taken" rows="4" placeholder="What steps have you taken after the attack?"></textarea>
            <label>Do you consent to sharing this with authorities?</label>
            <select name="consent">
                <option>Yes</option>
                <option>No</option>
            </select>
            <div class="but">
             <button class="btns" onclick="Prev()"><i class="fa-solid fa-arrow-right fa-flip-horizontal"></i></button>
            <button type="submit" id="submit">Submit Form</button>
            </div>
        </form>
        `

]
let count=0
function next(){
    count+=1;
    container1.innerHTML=slide[count];
   

}
function Prev(){
    count-=1
    container1.innerHTML=slide[count]
}

