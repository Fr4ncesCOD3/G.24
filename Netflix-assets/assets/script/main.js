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