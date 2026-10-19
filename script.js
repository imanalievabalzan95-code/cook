const ALLERGENS = [
  { id: "milk", label: "Молоко", icon: "milk" },
  { id: "eggs", label: "Яйца", icon: "egg" },
  { id: "gluten", label: "Глютен", icon: "wheat" },
  { id: "nuts", label: "Орехи", icon: "nut" },
  { id: "fish", label: "Рыба", icon: "fish" },
  { id: "soy", label: "Соя", icon: "bean" },
  { id: "sesame", label: "Кунжут", icon: "sprout" },
  { id: "mustard", label: "Горчица", icon: "sprout" }
];

const recipes = [
  {id:1,title:"Панкейки с ягодами",category:"Завтраки",time:20,servings:2,level:"Легко",description:"Пышные панкейки с нежной текстурой и свежими ягодами.",image:"https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=85",allergens:["milk","eggs","gluten"],ingredients:["Мука — 150 г","Молоко — 180 мл","Яйцо — 1 шт.","Разрыхлитель — 1 ч. л.","Сахар — 1 ст. л.","Ягоды — 100 г"],steps:["Смешай муку, сахар и разрыхлитель.","Добавь молоко и яйцо, перемешай до однородности.","Жарь небольшие панкейки на слегка смазанной сковороде по 1–2 минуты с каждой стороны.","Подавай с ягодами."],descriptionLong:"Домашние панкейки для уютного завтрака. Подавай с любимыми сезонными ягодами."},
  {id:2,title:"Авокадо-тост",category:"Завтраки",time:10,servings:1,level:"Легко",description:"Хрустящий тост с авокадо, лимоном и зеленью.",image:"https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",allergens:["gluten","sesame"],ingredients:["Хлеб — 2 ломтика","Авокадо — 1 шт.","Лимонный сок — 1 ч. л.","Оливковое масло — 1 ч. л.","Соль и перец — по вкусу","Кунжут — по желанию"],steps:["Подрумянь хлеб в тостере или на сухой сковороде.","Разомни авокадо вилкой с лимонным соком, солью и перцем.","Выложи авокадо на тосты, сбрызни маслом и добавь кунжут по желанию."],descriptionLong:"Быстрый свежий завтрак, который легко дополнить помидорами или зеленью."},
  {id:3,title:"Овсяная каша с бананом",category:"Завтраки",time:12,servings:1,level:"Легко",description:"Тёплая каша с бананом, корицей и мёдом.",image:"https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=900&q=85",allergens:["gluten"],ingredients:["Овсяные хлопья — 50 г","Вода или молоко — 200 мл","Банан — 1 шт.","Корица — щепотка","Мёд — по вкусу"],steps:["Доведи воду или молоко до кипения.","Добавь хлопья и вари 5–7 минут, помешивая.","Нарежь банан, добавь его к каше вместе с корицей.","При желании подсласти мёдом."],descriptionLong:"Простой согревающий завтрак. Для безглютенового варианта выбирай овсяные хлопья с соответствующей маркировкой."},
  {id:4,title:"Крем-суп из тыквы",category:"Обеды",time:30,servings:3,level:"Легко",description:"Бархатистый тыквенный суп с мягким пряным вкусом.",image:"https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=900&q=85",allergens:["milk"],ingredients:["Тыква — 500 г","Морковь — 1 шт.","Лук — 1 шт.","Овощной бульон — 500 мл","Сливки — 100 мл","Оливковое масло — 1 ст. л."],steps:["Нарежь тыкву, морковь и лук небольшими кусочками.","Обжарь лук с морковью на масле 3–4 минуты.","Добавь тыкву и бульон, вари до мягкости около 20 минут.","Измельчи блендером, влей сливки и прогрей ещё 2 минуты."],descriptionLong:"Нежный сезонный суп. Чтобы исключить молочный аллерген, можно использовать подходящие растительные сливки после проверки состава."},
  {id:5,title:"Паста с томатами",category:"Обеды",time:25,servings:2,level:"Легко",description:"Паста с сочными томатами, чесноком и базиликом.",image:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",allergens:["gluten"],ingredients:["Паста — 180 г","Помидоры черри — 250 г","Чеснок — 2 зубчика","Оливковое масло — 2 ст. л.","Базилик — несколько листьев","Соль и перец — по вкусу"],steps:["Отвари пасту согласно инструкции на упаковке.","Разогрей масло, добавь измельчённый чеснок на 30 секунд.","Добавь половинки томатов и готовь 5–7 минут.","Смешай соус с пастой, добавь базилик и подавай."],descriptionLong:"Итальянское настроение из простых продуктов. Выбирай пасту без глютена, если это необходимо, и проверь маркировку."},
  {id:6,title:"Курица с овощами",category:"Ужины",time:35,servings:2,level:"Средне",description:"Запечённая курица с разноцветными овощами и травами.",image:"https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85",allergens:[],ingredients:["Куриное филе — 350 г","Болгарский перец — 1 шт.","Кабачок — 1 шт.","Красный лук — 1 шт.","Оливковое масло — 1 ст. л.","Паприка, соль и перец — по вкусу"],steps:["Разогрей духовку до 200 °C.","Нарежь курицу и овощи кусочками одинакового размера.","Смешай с маслом и специями, разложи на противне.","Запекай 22–28 минут до полной готовности курицы."],descriptionLong:"Сытный ужин на одном противне. Проверяй готовность курицы в самой толстой части."},
  {id:7,title:"Лосось с лимоном",category:"Ужины",time:25,servings:2,level:"Легко",description:"Нежная рыба с лимоном и ароматными травами.",image:"https://images.unsplash.com/photo-146 fish?auto=format&fit=crop&w=900&q=85".replace("146 fish","1467003909585-2f8a72700288"),allergens:["fish"],ingredients:["Филе лосося — 2 кусочка","Лимон — ½ шт.","Оливковое масло — 1 ст. л.","Укроп — по вкусу","Соль и перец — по вкусу"],steps:["Разогрей духовку до 190 °C.","Положи рыбу на пергамент, добавь масло, соль и перец.","Сверху выложи лимон и укроп.","Запекай 12–16 минут в зависимости от толщины филе."],descriptionLong:"Простой ужин с рыбой. Не подходит при аллергии на рыбу; учитывай возможный контакт с другими морепродуктами."},
  {id:8,title:"Греческий салат",category:"Салаты",time:15,servings:2,level:"Легко",description:"Свежие овощи, оливки и сыр фета с заправкой.",image:"https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85",allergens:["milk"],ingredients:["Огурец — 1 шт.","Помидоры — 2 шт.","Сладкий перец — 1 шт.","Фета — 100 г","Оливки — 50 г","Оливковое масло — 1 ст. л."],steps:["Крупно нарежь огурец, помидоры и перец.","Добавь оливки и нарезанную фету.","Полей оливковым маслом, аккуратно перемешай.","Подавай сразу после приготовления."],descriptionLong:"Свежий салат в средиземноморском стиле. Сыр фета содержит молочный аллерген."},
  {id:9,title:"Салат с киноа",category:"Салаты",time:25,servings:2,level:"Легко",description:"Лёгкий салат с киноа, огурцом, зеленью и лимоном.",image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",allergens:[],ingredients:["Киноа — 100 г","Огурец — 1 шт.","Помидоры черри — 150 г","Петрушка — небольшой пучок","Лимонный сок — 1 ст. л.","Оливковое масло — 1 ст. л."],steps:["Промой киноа и отвари по инструкции на упаковке.","Остуди крупу и нарежь овощи.","Смешай всё с зеленью, лимонным соком и маслом.","Попробуй и добавь соль по вкусу."],descriptionLong:"Свежий и сытный салат. Указанные ингредиенты не содержат перечисленных основных аллергенов, но обязательно проверяй упаковки."},
  {id:10,title:"Яблочный крамбл",category:"Десерты",time:35,servings:4,level:"Легко",description:"Запечённые яблоки под хрустящей коричной крошкой.",image:"https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=900&q=85",allergens:["gluten","milk"],ingredients:["Яблоки — 4 шт.","Мука — 100 г","Холодное сливочное масло — 70 г","Сахар — 50 г","Корица — 1 ч. л."],steps:["Разогрей духовку до 180 °C.","Нарежь яблоки и выложи в форму, посыпь корицей.","Перетри муку, сахар и холодное масло в крошку.","Распредели крошку сверху и выпекай 25 минут до золотистого цвета."],descriptionLong:"Тёплый домашний десерт. Масло содержит молочный аллерген, а обычная пшеничная мука — глютен."},
  {id:11,title:"Шоколадный мусс",category:"Десерты",time:20,servings:3,level:"Средне",description:"Воздушный шоколадный десерт с нежной текстурой.",image:"https://images.unsplash.com/photo-1511715112108-9acc2b5a5d2b?auto=format&fit=crop&w=900&q=85",allergens:["milk","eggs"],ingredients:["Тёмный шоколад — 150 г","Сливки 33% — 200 мл","Яйца — 2 шт.","Сахарная пудра — 1 ст. л."],steps:["Растопи шоколад на водяной бане и слегка остуди.","Отдельно взбей охлаждённые сливки до мягких пиков.","Аккуратно смешай шоколад со сливками и пастеризованными яйцами.","Разложи по стаканчикам и охлади не менее 2 часов."],descriptionLong:"Шоколадный мусс содержит молоко и яйца. Для рецепта без термической обработки используй безопасные пастеризованные яйца."},
  {id:12,title:"Домашние сырники",category:"Завтраки",time:25,servings:2,level:"Легко",description:"Румяные сырники со сметаной или ягодным соусом.",image:"https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=900&q=85",allergens:["milk","eggs","gluten"],ingredients:["Творог — 300 г","Яйцо — 1 шт.","Мука — 3 ст. л.","Сахар — 1 ст. л.","Ваниль — по вкусу","Масло для жарки"],steps:["Разомни творог вилкой и смешай с яйцом, сахаром и ванилью.","Добавь муку и перемешай до мягкого теста.","Сформируй небольшие сырники, слегка обваляй в муке.","Жарь на среднем огне по 3–4 минуты с каждой стороны."],descriptionLong:"Знакомый домашний завтрак. Творог содержит молочный аллерген, а яйцо и пшеничная мука — распространённые аллергены."}
];

const state = { category: "Все", search: "", selectedAllergens: new Set(), strictAvoid: true, favoritesOnly: false };
const grid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");
const filterPanel = document.getElementById("allergy-tools");
const favorites = new Set(JSON.parse(localStorage.getItem("cookAtHomeFavorites") || "[]"));
let toastTimer;

function allergenLabel(id) { return ALLERGENS.find(a => a.id === id)?.label || id; }
function safeText(text) { return String(text).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function icon(name) { return `<i data-lucide="${name}"></i>`; }
function updateIcons() { if (window.lucide) window.lucide.createIcons(); }
function saveFavorites() { localStorage.setItem("cookAtHomeFavorites", JSON.stringify([...favorites])); }
function notify(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message; toast.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}
function renderAllergenOptions() {
  document.getElementById("allergenOptions").innerHTML = ALLERGENS.map(a => `
    <label class="allergen-option"><input type="checkbox" value="${a.id}" ${state.selectedAllergens.has(a.id) ? "checked" : ""}> ${safeText(a.label)}</label>
  `).join("");
  document.querySelectorAll("#allergenOptions input").forEach(input => input.addEventListener("change", () => {
    input.checked ? state.selectedAllergens.add(input.value) : state.selectedAllergens.delete(input.value);
    renderRecipes();
  }));
}
function filteredRecipes() {
  const query = state.search.trim().toLocaleLowerCase("ru");
  return recipes.filter(recipe => {
    if (state.category !== "Все" && recipe.category !== state.category) return false;
    if (state.favoritesOnly && !favorites.has(recipe.id)) return false;
    const searchTarget = [recipe.title, recipe.category, recipe.description, ...recipe.ingredients].join(" ").toLocaleLowerCase("ru");
    if (query && !searchTarget.includes(query)) return false;
    const hasSelectedAllergen = recipe.allergens.some(a => state.selectedAllergens.has(a));
    if (state.strictAvoid && hasSelectedAllergen) return false;
    return true;
  });
}
function renderRecipes() {
  const filtered = filteredRecipes();
  document.getElementById("resultsCount").textContent = `${filtered.length} ${plural(filtered.length, "рецепт", "рецепта", "рецептов")}`;
  document.getElementById("favoritesCount").textContent = favorites.size;
  document.getElementById("activeFilterCount").textContent = state.selectedAllergens.size;
  document.getElementById("resetSearch").classList.toggle("visible", !!state.search || state.category !== "Все" || state.favoritesOnly || state.selectedAllergens.size > 0);
  grid.classList.toggle("hidden", filtered.length === 0);
  document.getElementById("emptyState").classList.toggle("hidden", filtered.length !== 0);
  grid.innerHTML = filtered.map(recipe => {
    const selected = recipe.allergens.filter(a => state.selectedAllergens.has(a));
    const hasConflict = selected.length > 0;
    const allergens = recipe.allergens.length ? recipe.allergens.map(allergenLabel).join(", ") : "Не указаны в списке";
    return `<article class="recipe-card">
      <div class="card-image" role="button" tabindex="0" aria-label="Открыть рецепт ${safeText(recipe.title)}" data-open="${recipe.id}" style="background-image:url('${recipe.image}')">
        <span class="card-category">${safeText(recipe.category)}</span>
        <button class="favorite-button ${favorites.has(recipe.id) ? "is-favorite" : ""}" data-favorite="${recipe.id}" aria-label="${favorites.has(recipe.id) ? "Убрать из избранного" : "Добавить в избранное"}">${icon("heart")}</button>
      </div>
      <div class="card-body">
        <h3 class="card-title" data-open="${recipe.id}">${safeText(recipe.title)}</h3>
        <p class="card-description">${safeText(recipe.description)}</p>
        <div class="card-meta"><span>${icon("clock-3")} ${recipe.time} мин</span><span>${icon("users")} ${recipe.servings} порц.</span></div>
        <div class="card-bottom"><div class="allergen-mini" title="Аллергены: ${safeText(allergens)}">${icon("shield-alert")}<span>${recipe.allergens.length ? safeText(allergens) : "Без отмеченных аллергенов"}</span></div><button class="recipe-open" data-open="${recipe.id}" aria-label="Подробнее">${icon("arrow-up-right")}</button></div>
        ${hasConflict && !state.strictAvoid ? `<div class="allergen-warning">${icon("alert-triangle")} Есть выбранный аллерген: ${selected.map(allergenLabel).join(", ")}</div>` : ""}
      </div>
    </article>`;
  }).join("");
  updateIcons();
}
function plural(n, one, few, many) {
  const n10 = n % 10, n100 = n % 100;
  if (n10 === 1 && n100 !== 11) return one;
  if (n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14)) return few;
  return many;
}
function setCategory(category) {
  state.category = category;
  document.querySelectorAll(".category-chip").forEach(btn => btn.classList.toggle("active", btn.dataset.category === category));
  renderRecipes();
}
function toggleFavorite(id) {
  if (favorites.has(id)) { favorites.delete(id); notify("Удалено из избранного"); }
  else { favorites.add(id); notify("Добавлено в избранное ♡"); }
  saveFavorites(); renderRecipes();
}
function openRecipe(id) {
  const r = recipes.find(recipe => recipe.id === Number(id));
  if (!r) return;
  document.getElementById("modalPhoto").style.backgroundImage = `url('${r.image}')`;
  document.getElementById("modalCategory").textContent = r.category;
  document.getElementById("modalTitle").textContent = r.title;
  document.getElementById("modalMeta").innerHTML = `<span>${icon("clock-3")} ${r.time} минут</span><span>${icon("users")} ${r.servings} порц.</span><span>${icon("chef-hat")} ${r.level}</span>`;
  document.getElementById("modalDescription").textContent = r.descriptionLong || r.description;
  document.getElementById("modalAllergens").innerHTML = `<strong>${icon("shield-alert")} Возможные аллергены</strong>${r.allergens.length ? r.allergens.map(allergenLabel).join(", ") : "В списке основных аллергенов не указаны"}`;
  document.getElementById("modalIngredients").innerHTML = r.ingredients.map(x => `<li>${safeText(x)}</li>`).join("");
  document.getElementById("modalSteps").innerHTML = r.steps.map(x => `<li>${safeText(x)}</li>`).join("");
  document.getElementById("recipeModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
  updateIcons();
}
function closeModal() { document.getElementById("recipeModal").classList.add("hidden"); document.body.style.overflow = ""; }

searchInput.addEventListener("input", e => { state.search = e.target.value; renderRecipes(); });
document.getElementById("categoryRow").addEventListener("click", e => {
  const btn = e.target.closest("[data-category]");
  if (btn) { state.favoritesOnly = false; document.getElementById("favoritesNav").classList.remove("active"); setCategory(btn.dataset.category); }
});
document.getElementById("filterToggle").addEventListener("click", () => filterPanel.classList.toggle("open"));
document.getElementById("strictAvoid").addEventListener("change", e => { state.strictAvoid = e.target.checked; renderRecipes(); });
document.getElementById("clearFilters").addEventListener("click", () => {
  state.selectedAllergens.clear(); state.strictAvoid = true; document.getElementById("strictAvoid").checked = true; renderAllergenOptions(); renderRecipes();
});
document.getElementById("resetSearch").addEventListener("click", resetAll);
document.getElementById("emptyReset").addEventListener("click", resetAll);
function resetAll() {
  state.category = "Все"; state.search = ""; state.selectedAllergens.clear(); state.strictAvoid = true; state.favoritesOnly = false;
  searchInput.value = ""; document.getElementById("strictAvoid").checked = true;
  document.getElementById("favoritesNav").classList.remove("active");
  renderAllergenOptions(); setCategory("Все"); renderRecipes();
}
grid.addEventListener("click", e => {
  const fav = e.target.closest("[data-favorite]");
  if (fav) { e.stopPropagation(); toggleFavorite(Number(fav.dataset.favorite)); return; }
  const open = e.target.closest("[data-open]");
  if (open) openRecipe(open.dataset.open);
});
grid.addEventListener("keydown", e => { if ((e.key === "Enter" || e.key === " ") && e.target.matches("[data-open]")) { e.preventDefault(); openRecipe(e.target.dataset.open); } });
document.getElementById("favoritesNav").addEventListener("click", () => {
  state.favoritesOnly = !state.favoritesOnly;
  document.getElementById("favoritesNav").classList.toggle("active", state.favoritesOnly);
  if (state.favoritesOnly) { state.category = "Все"; document.querySelectorAll(".category-chip").forEach(b => b.classList.toggle("active", b.dataset.category === "Все")); }
  renderRecipes();
  document.getElementById("recipes").scrollIntoView({behavior:"smooth"});
  if (state.favoritesOnly && favorites.size === 0) notify("Пока нет избранных рецептов");
});
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("recipeModal").addEventListener("click", e => { if (e.target.id === "recipeModal") closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
document.getElementById("mobileMenu").addEventListener("click", () => {
  const nav = document.querySelector(".main-nav"); nav.classList.toggle("open");
});
document.querySelectorAll(".main-nav a").forEach(a => a.addEventListener("click", () => document.querySelector(".main-nav").classList.remove("open")));

renderAllergenOptions();
renderRecipes();
updateIcons();