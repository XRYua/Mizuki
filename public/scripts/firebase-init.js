import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
	getAnalytics,
	isSupported,
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";

const firebaseConfig = {
	apiKey: "AIzaSyAujCG8K9zbRnEw3Ooy59ws9-4vuh2vtpA",
	authDomain: "mutsumi-xryua.firebaseapp.com",
	projectId: "mutsumi-xryua",
	storageBucket: "mutsumi-xryua.firebasestorage.app",
	messagingSenderId: "56727805431",
	appId: "1:56727805431:web:bf572aab58a7098bf322f2",
	measurementId: "G-GSS08H0DQ7",
};

const app = initializeApp(firebaseConfig);

isSupported().then((supported) => {
	if (supported) {
		getAnalytics(app);
	}
});
