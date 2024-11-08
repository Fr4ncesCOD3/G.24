      // Gestione click su mobile
      document.querySelectorAll('.content-item').forEach(item => {
        item.addEventListener('touchstart', function(e) {
          // Rimuovi la classe active da tutti gli elementi
          document.querySelectorAll('.content-item').forEach(el => {
            el.classList.remove('active');
            const img = el.querySelector('img');
            if (img) {
              img.style.transform = 'scale(1)';
            }
          });
          
          // Aggiungi la classe active all'elemento toccato
          this.classList.add('active');
          const img = this.querySelector('img');
          if (img) {
            img.style.transform = 'scale(1.2)';
          }
        });
      });

      // Gestione dropdown menu
      document.addEventListener('DOMContentLoaded', function() {
        const dropdownToggle = document.querySelector('.dropdown-toggle');
        const dropdownMenu = document.querySelector('.dropdown-menu');

        dropdownToggle.addEventListener('click', function(e) {
          e.preventDefault();
          dropdownMenu.classList.toggle('show');
        });

        // Chiudi il dropdown quando si clicca fuori
        document.addEventListener('click', function(e) {
          if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('show');
          }
        });
      });