export class Book {
  constructor(title,author,description,pages,currentPage,read){
    this.title = title;
    this.author = author;
    this.description= description;
    this.pages = pages;
    this.currentPage = 1;
    this.read = false;
  }

      readBook(page){

          if(page<1 || page>this.pages){
            alert("erreur nb page invalide");
            return 0;
            }

            else if (page >= 1 && page < this.pages) {
            this.currentPage = page;
            
            return 1;
            }

            else if(page === this.pages ){
            this.currentPage = page;
            this.read = true ; 
            return 1;                          
            }
            
           

                    } 
                }


const firstBook= new Book("bonjour","moi","inventer par moi tres tres court",30,25,false);
let secondBook = new Book("Angélique","Guillaume Musso","Après un accident cardiaque, Mathias Taillefer se réveille dans une chambre d’hôpital. Une jeune fille inconnue se tient à son chevet. C’est Louise Collange, une étudiante venue jouer bénévolement du violoncelle aux patients",230,20,false);
let thirdBook= new Book("Le Horla","Guy de Maupassant","Un être invisible hante un personnage qui ne peut lui échapper. Une jeune morte réapparait dans un château gardé par un étrange jardinier. Une main s'anime et tue l'homme qui la gardait chez lui comme un trophée...Voici le sujet de trois des sept nouvelles de ce recueil, sept nouvelles fascinantes où le lecteur, confronté à des faits insolites et",160,130,false)

firstBook.readBook(30);
secondBook.readBook(230);
thirdBook.readBook(30);
export const books = [firstBook,secondBook,thirdBook];
