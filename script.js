document.addEventListener('DOMContentLoaded', () => {
    const homeTab = document.getElementById('homeTab');
    const registerTab = document.getElementById('registerTab');
    const loginTab = document.getElementById('loginTab');
    const protectedTab = document.getElementById('protectedTab');
    const profileButton = document.getElementById('profileButton');
    const settingsButton = document.getElementById('settingsButton');
    const messagesButton = document.getElementById('messagesButton');
    const notificationsButton = document.getElementById('notificationsButton');
    const logoutButton = document.getElementById('logoutButton');
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const profileDiv = document.getElementById('profileDiv');
    const settingsDiv = document.getElementById('settingsDiv');
    const messagesDiv = document.getElementById('messagesDiv');
    const notificationsDiv = document.getElementById('notificationsDiv');
    const homeDiv = document.getElementById('homeDiv');
    const registerDiv = document.getElementById('registerDiv');
    const loginDiv = document.getElementById('loginDiv');
    const protectedDiv = document.getElementById('protectedDiv');
    const togglePasswordReg = document.getElementById('togglePasswordReg');
    const togglePasswordLogin = document.getElementById('togglePasswordLogin');
    const profileName = document.getElementById('profileName');
    const profileSurname = document.getElementById('profileSurname');
    const profileEmail = document.getElementById('profileEmail');
    const profilePhone = document.getElementById('profilePhone');
    const profileDob = document.getElementById('profileDob');
    const profileGender = document.getElementById('profileGender');
    const profileAddress = document.getElementById('profileAddress');
    const profileJob = document.getElementById('profileJob');
    const profilePic = document.querySelector('.profile-photo');

    // Function to show a specific section and hide others
    function showDiv(divToShow) {
        const sections = [homeDiv, registerDiv, loginDiv, protectedDiv, profileDiv, settingsDiv, messagesDiv, notificationsDiv];
        sections.forEach(section => {
            section.style.display = 'none';
        });
        divToShow.style.display = 'block';
    }

    // Event listeners for tab clicks
    homeTab.addEventListener('click', () => {
        showDiv(homeDiv);
        protectedTab.style.display = 'none';
    });

    registerTab.addEventListener('click', () => {
        showDiv(registerDiv);
        protectedTab.style.display = 'none';
    });

    loginTab.addEventListener('click', () => {
        showDiv(loginDiv);
        protectedTab.style.display = 'none';
    });

    protectedTab.addEventListener('click', () => {
        showDiv(protectedDiv);
        profileButton.style.display = 'block';
        settingsButton.style.display = 'block';
        messagesButton.style.display = 'block';
        notificationsButton.style.display = 'block';
    });

    profileButton.addEventListener('click', () => showDiv(profileDiv));
    settingsButton.addEventListener('click', () => showDiv(settingsDiv));
    messagesButton.addEventListener('click', () => showDiv(messagesDiv));
    notificationsButton.addEventListener('click', () => showDiv(notificationsDiv));
    logoutButton.addEventListener('click', () => {
        showDiv(homeDiv);
        protectedTab.style.display = 'none';
    });

    // Toggle password visibility
    togglePasswordReg.addEventListener('click', () => {
        const regPassword = document.getElementById('regPassword');
        regPassword.type = regPassword.type === 'password' ? 'text' : 'password';
    });

    togglePasswordLogin.addEventListener('click', () => {
        const loginPassword = document.getElementById('loginPassword');
        loginPassword.type = loginPassword.type === 'password' ? 'text' : 'password';
    });

    // Handle form submissions
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle registration logic here
        document.getElementById('registerMessage').textContent = 'Registration successful!';
        showDiv(loginDiv);
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle login logic here
        document.getElementById('loginMessage').textContent = 'Login successful!';
        showDiv(protectedDiv);
        protectedTab.style.display = 'block'; // Make sure protectedTab is visible
    });
// Function to update profile info
    function updateProfileInfo() {
        profileName.textContent = document.getElementById('profileNameInput').value;
        profileSurname.textContent = document.getElementById('profileSurnameInput').value;
        profileEmail.textContent = document.getElementById('profileEmailInput').value;
        profilePhone.textContent = document.getElementById('profilePhoneInput').value;
        profileDob.textContent = document.getElementById('profileDobInput').value;
        profileGender.textContent = document.getElementById('profileGenderInput').value;
        profileCountry.textContent = document.getElementById('profileCountryInput').selectedOptions[0].text; // Updated line
        profileAddress.textContent = document.getElementById('profileAddressInput').value;
        profileJob.textContent = document.getElementById('profileJobInput').value;
    }

    // Handle settings form submission
    document.getElementById('settingsForm').addEventListener('submit', (e) => {
        e.preventDefault();
        updateProfileInfo();

        // Handle profile picture upload
        const profilePicInput = document.getElementById('profilePicInput');
        if (profilePicInput.files && profilePicInput.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                profilePic.src = event.target.result;
            };
            reader.readAsDataURL(profilePicInput.files[0]);
        }

        alert('Settings saved!');
    });


    // Messages section
    document.getElementById('searchMessagesButton').addEventListener('click', () => {
        const searchValue = document.getElementById('searchMessagesInput').value;
        console.log('Searching messages for:', searchValue);
    });

    // Notifications section
    const notificationsList = document.getElementById('notificationsList');
    notificationsList.innerHTML = `
        <li>Notification 1: Example notification message.</li>
        <li>Notification 2: Another example notification.</li>
    `;







});
