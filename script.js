AOS.init({
    duration: 1200,
  })

fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/escape-game.json')
.then(response => {
    if (!response.ok) {
        throw new Error('Failed to load JSON data');
        }
        return response.json();
    })
    .then(data => {
        
        
        //naviguer dans le tableaux
        for (const key in data) {
            console.log(key);
        }
        
        //crée du html dans le body
        document.body.innerHTML = `
        <header>
        <nav class="tete">
        <a href="#presentation">presentation</a>
        <a href="#avantagesClients">avantagesClients</a>
        <a href="#activites">activites</a>
        <a href="#temoignages">temoignages</a>
        </nav>
        </header>
        
        <section id="presentation" class="Parent">
        <section>
        <h1>${data.nomCommercial}</h1>
        <p>${data.phraseAccroche}</p>
        <button>${data.texteAppelAction}</button>
        </section>
        </section>
        
        <section id="avantagesClients" class="Parent">
        </section>
        
        <section id="activites" class="Parent">
        </section>

        <section id="temoignages" class="Parent">
        </section>
        
        <footer class="enfant"><a href="">copyright - Mentions legal</a></footer>
        `     
        //récupère un element par sont id
        let avantageClients = document.getElementById("avantagesClients")
        let activites = document.getElementById("activites")
        let temoignages = document.getElementById("temoignages")
        
        //tableaux avantagesclients
        data.avantagesClients.forEach(element => {
            console.log(element);
            let h3 = document.createElement("h3")
            h3.setAttribute("data-aos","fade-up")
            h3.textContent=element
            h3.classList.add("couleur")
            avantageClients.appendChild(h3)
        });
        
        //tableaux activites
        data.activites.forEach(element => {
            let div = document.createElement("div")
            // div.classList.add("Enfant","couleur")
            div.setAttribute("class", "Enfant couleur")
            div.setAttribute("data-aos","fade-up")
            
            let h2 = document.createElement("h2")
            h2.textContent=element.nom
            div.appendChild(h2)
            
            let p = document.createElement("p")
            p.textContent=element.description
            div.appendChild(p)
            
            let img = document.createElement("img")
            img.src=element["image-url"]
            div.appendChild(img)
            
            activites.appendChild(div)
        })
        
        //tableaux temoignages
        data.temoignages.forEach(element => {
            let div = document.createElement("div")
            div.setAttribute("class", "Enfant couleur")
            div.setAttribute("data-aos","fade-up")
            
            let h2 = document.createElement("h2")
            h2.textContent=element.typeExperience
            div.appendChild(h2)
            
            let p1 = document.createElement("p")
            p1.textContent=element.prenom
            div.appendChild(p1)
            
            let p2 = document.createElement("p")
            p2.textContent=element.commentaire
            div.appendChild(p2)
            
            let p3 = document.createElement("p")
            p3.textContent=element.note + " / 5"
            div.appendChild(p3)
            
            temoignages.appendChild(div)
        })
    })
    .catch(error => console.error('Error:', error));
    