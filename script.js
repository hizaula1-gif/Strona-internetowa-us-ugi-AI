document.getElementById('biezacy-rok').textContent = new Date().getFullYear();

const formularz = document.getElementById('formularz-kontaktowy');
const poleImie = document.getElementById('pole-imie');
const poleEmail = document.getElementById('pole-email');
const poleWww = document.getElementById('pole-www');
const komunikat = document.getElementById('komunikat');

formularz.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const imie = poleImie.value.trim();
    const email = poleEmail.value.trim();
    const www = poleWww.value.trim();

    if (!imie || !email || !www) {
        pokazKomunikat('Wypełnij wszystkie wymagane pola!', 'blad');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        pokazKomunikat('Wprowadź poprawny adres e-mail!', 'blad');
        return;
    }

    pokazKomunikat('Dziękujemy! Formularz został poprawnie wysłany.', 'sukces');
    formularz.reset();
});

function pokazKomunikat(tresc, klasa) {
    komunikat.textContent = tresc;
    komunikat.className = klasa;
}