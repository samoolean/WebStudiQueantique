import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La Galerie", "/pages/galerie.html"),
    new Route("/signin", "Signin", "/pages/auth/signin.html"),
    new Route("/signup", "Signup", "/pages/auth/signup.html", "/js/auth/signup.js"),
    new Route("/editpassword", "editpassword", "/pages/auth/editpassword.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Tim la princesse";