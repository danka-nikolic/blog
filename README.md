	# BloGEO

	BloGEO predstavlja malu web aplikaciju koja se bavi izradom, izmenom i brisanjem blogova.
	Backend je Java Maven projekat pisan u Dropwizard framework-u (Java 1.8), dok je frontend aplikacija pisana u Angular.io (Angular 10).
	Frontend i backend aplikacija komuniciraju putem http REST poziva.

	Uputstvo za korišćenje aplikacije:
	Backend 

	1. Potrebno je da imate instaliranu PostgreSQL bazu koja radi na portu 5432. 
	   Zatim ručno kreirati bazu pod nazivom `blog_db` (pomoću pgAdmin-a/DbVisualizer-a/nekog trećeg db client-a).
	
	2. Potrebno je zapakovati backend aplikaciju komandom `mvn clean package` (u blog folderu).
	
	3. Pokrenuti backend aplikaciju komandom `java -jar target/blog-0.0.1-SNAPSHOT.jar server blog.yml`
	(ukoliko je Windows operativni sistem `java -jar target\blog-0.0.1-SNAPSHOT.jar server blog.yml`).
	
	Ukoliko u bazi nema slogova u blog tabeli, backend aplikacija će prilikom pokretanja insertovati inicijalnih 5 blogova. :)

	Frontend
	
	1. Potrebno je da imate instaliran Node.js.
	
	2. Potrebno je instalirati potrebne pakete komandom `npm install` (u folderu blog-web-client)
	
	3. Pokrenuti frontend aplikaciju komandom `ng serve` (u folderu blog-web-client)
	
	- Otvoriti browser na putanji `http://localhost:4200/`.
	
	- Ulogujte korišćenjem korisničkog imena `admin` i lozinke `admin123`.

	- Nakon uspešnog prijavljivanja, otvara Vam se početna strana aplikacije u kojoj se nalaze podrazumevani blogovi. 
	  Na ovoj strani možete dodati novi blog klikom na dugme `Add new blog...` ili pročitati/obrisati pojedinačni blog klikom na dugme `View/Delete`.
	  Takođe, u svakom trenutku se možete izlogovati klikom na `Logout`.

	- Ukoliko ste odabrali `View`, pojavljuje se i nova funkcionalnost Edit koja omogućuje izmenu izabranog bloga. 
	  Pored dugmeta `Edit`, tu je i dugme `Delete`, kao i `Go back to the main` page za povratak na glavnu stranu aplikacije.
