# Деплой на GitHub Pages

## Почему не открывалось приложение

**GitHub Pages раздаёт только статические файлы** (HTML, CSS, JS). Он **не запускает** Next.js как сервер. Поэтому при простом пуше кода показывался README или список файлов, а не собранное приложение.

Сейчас проект настроен на **статический экспорт**: при сборке Next.js кладёт готовый сайт в папку `out/`, и именно её содержимое нужно публиковать на GitHub Pages.

## Что сделано в репозитории

1. **Статический экспорт** — в `next.config.ts` включён `output: 'export'` и задан `basePath` для адреса `https://tim124v.github.io/forma-register/`.
2. **GitHub Actions** — workflow в `.github/workflows/deploy-pages.yml` при каждом пуше в `main`:
   - ставит зависимости;
   - собирает проект с `NEXT_PUBLIC_BASE_PATH=/forma-register`;
   - публикует папку `out/` в GitHub Pages.

## Что нужно сделать тебе

### 1. Включить публикацию из GitHub Actions

1. Открой репозиторий на GitHub: **forma-register**.
2. Зайди в **Settings** → **Pages** (слева в меню).
3. В блоке **Build and deployment** в поле **Source** выбери **GitHub Actions**.

Если выберешь ветку или папку — будет использоваться старое поведение (README и т.п.). Нужен именно источник **GitHub Actions**.

### 2. Запушить изменения и дождаться деплоя

Закоммить и запушь текущие изменения (в т.ч. `next.config.ts` и `.github/workflows/deploy-pages.yml`):

```bash
git add .
git commit -m "Add static export and GitHub Pages deploy"
git push origin main
```

После пуша открой вкладку **Actions** в репозитории: должен запуститься workflow **Deploy to GitHub Pages**. Дождись зелёной галочки (успешного завершения).

### 3. Открыть сайт

Через 1–2 минуты после успешного деплоя открой:

**https://tim124v.github.io/forma-register/**

Должна открыться твоя страница с формой входа и 3D-сценой.

---

## Локальная разработка

Локально ничего не меняется:

```bash
npm run dev
```

Открывай http://localhost:3000 — `basePath` при разработке не используется.

## Сборка под GitHub Pages локально (по желанию)

Чтобы проверить сборку так же, как в Actions:

```bash
NEXT_PUBLIC_BASE_PATH=/forma-register npm run build
```

Готовый сайт будет в папке `out/`. Его можно открыть локально через любой статический сервер, указав базовый путь `/forma-register/`.
