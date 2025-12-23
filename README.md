# Fitostesi — SPA (Vite + React + TypeScript) + Supabase

Aquest repo conté un scaffold per una SPA amb Vite, React, TypeScript, Tailwind i Supabase.

Ràpidament:

1. Instal·la dependències

```bash
npm install
```

2. Crea un projecte a Supabase (https://app.supabase.com) i copia els valors:
- VITE_SUPABASE_URL
- VITE_SUPABASE_ANON_KEY

3. Desa aquestes variables en un fitxer `.env` local (només per desenvolupament):

```
VITE_SUPABASE_URL=https://xyz.supabase.co
VITE_SUPABASE_ANON_KEY=public-anon-key
```

4. Crea les taules a Supabase: puja el fitxer `supabase/init.sql` o executa les consultes al SQL Editor.

5. Executa en local:

```bash
npm run dev
```

6. Deploy: recomanat Vercel. A Vercel configura les variables d'entorn `VITE_SUPABASE_URL` i `VITE_SUPABASE_ANON_KEY`.

Notes:
- No posis claus secretes al repo.
- El README inclou l'SQL de base a `supabase/init.sql`.