# React Store Live - ciągle aktualizowane
React Store App jest to moja pierwsza, w pełni samodzielnie tworzona aplikacja internetowa w React.js. Podczas nauki zdecydowałem, że nadeszła odpowiednia pora na utrwalenie wszystkiego co dotychczas poznałem. Tym samym postanowiłem stworzyć Single Page Application, która wykorzystuje informacje pochodzące z zewnętrznego API. Od samego początku, celem było stworzenie mini sklepu internetowego (bez funkcjonalności backendowych). Chciałem powtórzyć wszystko co związane m.in. z Routingiem czy Reduxem.

## W projekcie użyłem
- React
- React Router v6
- Redux Toolkit
- React Toastify
- Local Storage

## Czego uczy mnie projekt?

Podczas wykonywania projektu uczę się wykorzystania Reacta podczas budowania Single Page Application opartej o dane pochodzące z zewnętrznego API. Uczę się na bieżąco korzystania z App Wide states i użycia Redux Toolkit. Poznałem coś takiego jak React Toastify i nauczyłem się z niego korzystać. Dodatkowo poznałem zagadnienie związane z optymalizacją strony, nazwane Lazy Loading. Aplikacja, dla lepszego UX wykorzystuje również Local Storage, z którego również nauczyłem się korzystać. Wykorzystywany jest on przy okazji koszyka i przechowywania jego zawartości.

**Zobacz stronę internetową [LIVE](http://store.lemiszewski.pl)**

![projectMockup2](https://user-images.githubusercontent.com/76050486/166917532-e6186a97-9718-480b-a468-f09bc8c0f2d3.png)

# Podstawowe założenia projektu

Użytkownik, wchodząc na stronę internetową, ma bezpośredni dostęp do sklepu internetowego. Podzielony został on na trzy różne działy obuwnicze - męski, damski oraz dziecięcy. Jako, że jest to **Single Page Application**, poruszanie pomiędzy komponentami, zrealizowane zostało przy pomocy **React Router** w wersji 6 i obsługi adresu URL dodatkowymi, opcjonalnymi parametrami. Z poziomu sklepu, użytkownik jest w stanie filtrować zwrócone wyniki. Obecnie dostarczone zostały cztery opcje filtracji: płeć, marka, kolorystyka oraz cena.

Główny komponent sklepu zawiera dynamicznie dopasowywane pod kątem wymagań użytkownika dane, pochodzące z zewnętrznego **API**. Dane te przedstawiają poszczególne produkty, wraz ze wszelkimi szczegółami, tj. kolorystyka, zdjęcia, marka, nazwa itp.

![storeMockup2](https://user-images.githubusercontent.com/76050486/166917686-c30eef92-1bf8-4d99-aa53-244f6ad64a86.jpg)

Każdy produkt można zarówno dodać do koszyka jak i go usunąć. W tym celu wystarczy nacisnąć na zdjęcie interesującego nas produktu oraz wybrać jedną z dwóch akcji, które reprezentowane są przez specjalne ikony. Pierwsza z nich służy do dodawania do koszyka natomiast druga do wyświetlania szczegółów danego produktu. Po umieszczeniu produktu w koszyku, zmianie ulega stan koszyka.

![addingToCart](https://user-images.githubusercontent.com/76050486/166917742-ae5ada2e-5788-4f74-8961-f6727da67fbe.jpg)

## Koszyk

Dostęp do koszyka możliwy jest z każdego miejsca aplikacji. Sam koszyk posiada dynamiczny content, który dopasowywany jest w zależności od tego czy coś się w nim znajduje czy nie. W ten sposób można odpowiednio informować użytkownika o aktualnym stanie zakupów. W momencie gdy użytkownik doda produkty do koszyka, jest on w stanie bezpośrednio z jego poziomu zmieniać ich ilość jak i całkowicie je usuwać. Aktualna cena jest dopasowywana w sposób dynamiczny bazując na aktualnej ilości produktów w koszyku.

![emptyCartMockup2](https://user-images.githubusercontent.com/76050486/166917821-1944f2cb-fa15-40e7-8b22-06fb4d62243c.jpg)

![cartMockup2](https://user-images.githubusercontent.com/76050486/166917848-a8e77738-96b4-4b5e-aed0-2ca913f08765.jpg)

Dodatkowo koszyk posiada kilka etapów. Pierwszym z nich jest sprawdzanie aktualnego zamówienia, drugim jest sama jego realizacja, która odbywa się poprzez wypełnienie specjalnie przygotowanego formularza. Formularz posiada podstawową walidację, zrealizowaną przy pomocy customowego hooka.

![cartFormMockup2](https://user-images.githubusercontent.com/76050486/166917976-9d08b004-7e32-4656-9960-74084b31b62c.jpg)

Po prawidłowej realizacji zamówienia, użytkownikowi ukazuje się specjalny ekran potwierdzający. Dodatkowo cała dotychczasowa zawartość koszyka jest czyszczona a sam użytkownik ma do wyboru dwie akcje - kontynuowanie zakupów jak i przejście do strony głównej.

![completedOrderMockup2](https://user-images.githubusercontent.com/76050486/166918024-4738a787-bd5e-441f-9e40-e5fba01607b0.jpg)

## Szczegóły produktów

Każdy produkt posiada swój osobny widok, do którego użytkownik może przejść w celu poznania większej ilości szczegółów na temat konkretnego obuwia. Aktualnie widok ten jest dość podstawowy i nie zawiera bardzo dużej ilości informacji, aczkolwiek w przyszłości, w łatwy sposób można go rozwinąć o dodatkowe funkcjonalności.

![productDetailsMockup2](https://user-images.githubusercontent.com/76050486/166918100-8910b7ff-1440-47c2-8cbe-0fd2f673b607.jpg)

# Proces tworzenia projektu

Projekt zrealizowany został przy użyciu biblioteki **React.js** oraz podstawowych narzędzi, służących zarówno do projektowania warstwy wizualnej jak i do kodowania strony internetowej. W trakcie pracy korzystałem z programu **Visual Studio Code**. Do kontroli wersji oprogramowania, standardowo skorzystałem z **Github**. Aby aplikacja mogła być pełnoprawną **Single Page Application** wykorzystałem **React Router** w wersji 6. Przy okazji tworzenia koszyka, postanowiłem, że przydatne mogą okazać się tzw. **App Wide States**, które dostarczył mi **Redux Toolkit**. Dodatkowo do obsługi pól tekstowych formularza wykorzystałem stworzony przeze mnie customowy **Hook**, który oparty jest o **useReducer()**. W celach wizualnych, oraz dla lepszego UX zdecydowałem się skorzystać z biblioteki **React Toastify**, która dostarczyła mi prostych powiadomień, które pokazują się na ekranie użytkownika w momencie zmian stanu koszyka. Dodawanie, usuwanie i zmiana elementów koszyka generuje odpowiednie komunikaty, napisane w języku angielskim. Strona przeszła również podstawową optymalizację. Postanowiłem wykorzystać tzw. **Lazy Loading** po to, aby komponenty ładowane były tylko wtedy, gdy jest to wymagane. Aplikacja ta jest co prawda na tyle mała, że różnica nie jest diametralnie wielka, aczkolwiek uznałem, że jest to dobrą praktyką a przy okazji dobrym ćwiczeniem.


**WYMAGANIA MINIMALNE**
- Pozyskiwanie danych z zewnętrznego API
- Przedstawienie danych w sklepie
- Podział sklepu ze względu na płeć
- Obsługa routingu na stronie
- Wprowadzenie systemu filtracji produktów
- Wprowadzenie komponentu koszyka
- Obsługa ikony koszyka (licznika produktów)
- Obsługa zawartości koszyka
- Zarządzanie stanem koszyka z wykorzystaniem Redux Toolkit
- Umożliwienie dodawanie/usuwanie elementów oraz modyfikowanie elementów koszyka
- Dodanie różnych widoków koszyka
- Udostępnienie formularza do składania zamówienia
- Dodanie strony z detalami produktów

**POCZYNIONE KROKI**
- Inicjalizacja projektu i repozytorium
- Stworzenie konceptu strony
- Stworzenie struktury katalogów
- Podział strony na komponenty
- Stworzenie kluczowych komponentów
- Wykorzystanie React Router do stworzenia routingu
- Zastosowanie Lazy Loading w celu optymalizacji strony
- Stworzenie store do przechowywania stanów aplikacji
- Stworzenie i obługa koszyka i jego stanów
- Ostylowanie aplikacji
- Dodanie powiadomień z biblioteki React Toastify
- Przeprowadzenie testów manualnych

# Responsywność

Jak dobrze wiemy, dostępność aplikacji na urządzeniach mobilnych jest w obecnych czasach rzeczą kluczową. Tym samym, bardzo ważnym było dla mnie zapewnienie odpowiednich widoków dla korzystających ze smartphonów. React Store App jest w pełni responsywna. Cały proces stylowania aplikacji przeprowadzony został zgodnie z zasadą Mobile First.

![responsiveMockup2](https://user-images.githubusercontent.com/76050486/166918676-4473e561-21d9-48a2-b8ba-2fdd57788a6b.png)

# Instalacja
1. Klonowanie repozytorium
2. Instalacja npm install
3. Uruchomienie npm start

# Kontakt
Miło mi jeżeli dotrwałeś/aś do końca. Jestem początkującym Frontend Developerem, który poszukuje pierwszych doświadczeń komercyjnych. Jeżeli jesteś zainteresowany/a współpracą proszę o kontakt. Z miłą chęcią podejmę się rozmowy.

- **hello@lemiszewski.pl**

Jeżeli masz ochotę zobaczyć inne moje projekty, również takie, których nie zobaczysz na Githubie, zachęcam do zajrzenia na moje portfolio. Znajduje się ono pod adresem **www.lemiszewski.pl**
