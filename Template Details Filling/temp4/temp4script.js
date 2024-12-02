document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("resume-form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
    });

    const workExperiencesContainer = document.getElementById("work-experiences");
    const addExperienceButton = document.getElementById("add-experience");
    let experienceCounter = 0;
    addExperienceButton.addEventListener("click", function () {
        experienceCounter++;
        const newExperienceSection = document.createElement("div"); 
        newExperienceSection.classList.add("experience");
        newExperienceSection.innerHTML = `
            <label for="work-exp">Work Experience ${experienceCounter}</label>
            <input type="text" id="position${experienceCounter}" placeholder="Position" style="margin-bottom: 10px" required>
            <input type="text" id="company${experienceCounter}" placeholder="Company name" style="margin-bottom: 10px" required>
            <input type="text" id="workLocation${experienceCounter}" placeholder="Location" style="margin-bottom: 10px" required>
            <textarea id="workDescription${experienceCounter}" placeholder="Description" style="margin-bottom: 10px" required>
        `;
        workExperiencesContainer.appendChild(newExperienceSection);
    });

    const EducationContainer = document.getElementById("education-section");
    const addEducationButton = document.getElementById("add-education");
    let educationCounter = 0;
    addEducationButton.addEventListener("click", function () {
        educationCounter++;
        const newEducationSection = document.createElement("div"); 
        newEducationSection.classList.add("education");
        newEducationSection.innerHTML = `
            <label for="education">Education:</label>
            <input type="text" id="school${educationCounter}" placeholder="School" style="margin-bottom: 10px" required />
            <input type="text" id="degree${educationCounter}" placeholder="Degree" style="margin-bottom: 10px" required />
            <input type="text" id="fieldOfStudy${educationCounter}" placeholder="Field of study" style="margin-bottom: 10px" required />
            <input type="text" id="eduLocation${educationCounter}" placeholder="Location" style="margin-bottom: 10px" required />
        `;
        EducationContainer.appendChild(newEducationSection);
    });

    const SkillsContainer = document.getElementById("skills-section");
    const addSkillsButton = document.getElementById("add-skills");
    let skillsCounter = 0;
    addSkillsButton.addEventListener("click", function () {
        skillsCounter++;
        const newSkillsSection = document.createElement("div"); 
        newSkillsSection.classList.add("skill");
        newSkillsSection.innerHTML = `
        <label for="skills">Skills:</label>
        <input type="text" id="skill1${skillsCounter}" placeholder="Skill" style="margin-bottom: 10px" required />
        <input type="text" id="exp1${skillsCounter}" placeholder="Years of experience" style="margin-bottom: 10px"
            required />
        `;
        SkillsContainer.appendChild(newSkillsSection);
    });

    //PREVIEW SECTION CODE

    const saveButton = document.getElementById("preview-button");
    saveButton.addEventListener("click", function () {
        const previewPanel = document.getElementById("fixed-column");
        const workExperienceSections = document.querySelectorAll(".experience");
        let workExperienceHTML= "";
        workExperienceSections.forEach(function (experience, index) {
            const position = experience.querySelector(`#position${index + 1}`).value;
            const company = experience.querySelector(`#company${index + 1}`).value;
            const location = experience.querySelector(`#workLocation${index + 1}`).value;
            const description = experience.querySelector(`#workDescription${index + 1}`).value;
            

            workExperienceHTML += `
                <p>${position} at ${company}, ${location}</p>
                <p>${description}</p>
            `;
        });

        const educationSections = document.querySelectorAll(".education");
        let educationHTML= "";
        educationSections.forEach(function (education, index) {
            const school = education.querySelector(`#school${index + 1}`).value;
            const degree = education.querySelector(`#degree${index + 1}`).value;
            const fieldOfStudy = education.querySelector(`#fieldOfStudy${index + 1}`).value;
            const eduLocation = education.querySelector(`#eduLocation${index + 1}`).value;

            educationHTML += `
                <p>${school}</p>
                <p>${degree} in ${fieldOfStudy}, ${eduLocation}</p>
            `;
        });

        const skillsSections = document.querySelectorAll(".skill");
        let skillsHTML= "";
        skillsSections.forEach(function (skill, index) {
            const skill1 = skill.querySelector(`#skill1${index + 1}`).value;
            const exp1 = skill.querySelector(`#exp1${index + 1}`).value;

            skillsHTML += `
                <p>${skill1}, ${exp1} years of experience</p>
            `;
        });

        const name = document.getElementById("name").value;
        const location = document.getElementById("location").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const summary = document.getElementById("summary").value;

        const resumeHTML = `
            <h3>${name}</h3>
            <p id="main">${location}</p>
            <p id="main">${phone}</p>
            <p id="main">${email}</p>
            <p id="main">${summary}</p>
            <div id="icon-border">
                <span id="icon" class="material-symbols-outlined">business_center</span>
            </div>
            <div class="line-container">
                <svg height="10" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <line stroke="red" stroke-width="3" stroke-dasharray="2, 4" x1="0" y1="0" x2="100%" y2="0"/>
                </svg>
                <div class="text">WORK EXPERIENCE</div>
                <svg height="10" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <line stroke="red" stroke-width="3" stroke-dasharray="2, 4" x1="0" y1="0" x2="100%" y2="0"/>
                </svg>
            </div>
            ${workExperienceHTML}
            <div id="icon-border">
                <span id="icon" class="material-symbols-outlined">school</span>
            </div>
            <div class="line-container">
                <svg height="10" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <line stroke="red" stroke-width="3" stroke-dasharray="2, 4" x1="0" y1="0" x2="100%" y2="0"/>
                </svg>
                <div class="text">EDUCATION</div>
                <svg height="10" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <line stroke="red" stroke-width="3" stroke-dasharray="2, 4" x1="0" y1="0" x2="100%" y2="0"/>
                </svg>
            </div>
            ${educationHTML}
            <div id="icon-border">
            <span id="icon" class="material-symbols-outlined">lightbulb</span>
            </div>
            <div class="line-container">
                <svg height="10" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <line stroke="red" stroke-width="3" stroke-dasharray="2, 4" x1="0" y1="0" x2="100%" y2="0"/>
                </svg>
                <div class="text">SKILLS</div>
                <svg height="10" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <line stroke="red" stroke-width="3" stroke-dasharray="2, 4" x1="0" y1="0" x2="100%" y2="0"/>
                </svg>
            </div>
            ${skillsHTML}
            `;

        previewPanel.style.display = "block";
        previewPanel.innerHTML = resumeHTML;

        document.getElementById("temp-image").style.display = "none";
    });



        document.getElementById("download-button").addEventListener("click", function () {
            const element = document.getElementById("fixed-column");

            var opt = {
                margin: 1,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
            };

            html2pdf().from(element).set(opt).save();

        });

});