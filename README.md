# WebDev-Intern-Assignment-3-Submit

## Tech Stack

- Laravel
- React + Vite
- PostgreSQL (Neon Console)
- Deploy Railway, Vercel

## Configure Environment

Edit `.env` and configure database connection:

```
SESSION_DRIVER=file

DB_CONNECTION=pgsql
DB_HOST=your_host
DB_PORT=5432
DB_DATABASE=your_database
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

## Run Backend

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan serve
```

Backend runs at [http://localhost:8000](http://localhost:8000)

## Run Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at [http://localhost:5173](http://localhost:5173)

## CORS Configuration

If you encounter CORS issues when running locally, update the allowed origins in:

```
backend/config/cors.php
```

Example:

```
'allowed_origins' => [
    'http://localhost:5173'
],
```

## All link

- [Demo](https://web-dev-intern-assignment-3-submit.vercel.app)
- [Backend API](https://webdev-intern-assignment-3-submit-production.up.railway.app)
- [Repository](https://github.com/quangtiss/WebDev-Intern-Assignment-3-Submit)
