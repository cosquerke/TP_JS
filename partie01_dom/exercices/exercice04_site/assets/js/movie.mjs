"use struct"
//TODO
import {movieDAO} from "./dao/movieDAO.mjs";
import {imgURL} from './data/const.mjs';

const content = document.querySelector(".content");

const params = new URLSearchParams(window.location.search);

const film = await movieDAO.getById(params.get('id'));


let article = document.createElement("article");

let link = document.createElement("a");
link.setAttribute("href", "movie.html?id="+film.id);
let image = document.createElement("img");
image.setAttribute("src",imgURL+"/"+film.poster_path);

let global_div = document.createElement("div");
let first_div = document.createElement("div");
first_div.textContent = film.release_date;
let second_div = document.createElement("div");
second_div.textContent = film.original_title;
let third_div = document.createElement("div");
third_div.textContent = film.vote_average;

global_div.appendChild(first_div);
global_div.appendChild(second_div);
global_div.appendChild(third_div);

link.appendChild(image);
link.appendChild(global_div);

article.appendChild(link);

content.appendChild(article);

