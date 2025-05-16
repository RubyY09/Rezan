document.addEventListener('DOMContentLoaded', () => {
    // On récupère toutes les sections
    const sections = {
        deux: document.getElementById('deux'),
        un: document.getElementById('un'),
        trois: document.getElementById('trois')
    };

    // Fonction utilitaire pour changer de section
    function afficherSection(id) {
        for (let key in sections) {
            if (sections[key]) {
                sections[key].classList.remove('active');
            }
        }
        if (sections[id]) {
            sections[id].classList.add('active');
        }
    }

    // Bouton ramen dans section "un" et "trois"
    document.querySelectorAll('.btn-un').forEach(btn => {
        btn.addEventListener('click', () => {
            afficherSection('deux');
        });
    });

    // Bouton udon dans section "deux" et "trois"
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', () => {
            afficherSection('un');
        });
    });

    // Bouton yakisoba dans section "un"
    document.querySelectorAll('.btn-deux').forEach(btn => {
        btn.addEventListener('click', () => {
            afficherSection('trois');
        });
    });

    // Directement aller à la section 3 (YAKISOBA) depuis la section 1
    document.querySelectorAll('.btn-deux').forEach(btn => {
        btn.addEventListener('click', () => {
            afficherSection('trois');
        });
    });
});


var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}








