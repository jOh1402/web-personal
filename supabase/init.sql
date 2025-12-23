-- Taules bàsiques per Fitostesi

-- profiles (extensió del auth)
create table if not exists profiles (
  id uuid primary key references auth.users on delete cascade,
  full_name text,
  avatar_url text,
  is_admin boolean default false,
  created_at timestamptz default now()
);

-- events
create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  starts_at timestamptz not null,
  ends_at timestamptz,
  place text,
  status text default 'draft',
  created_by uuid references profiles(id),
  created_at timestamptz default now()
);

-- registrations
create table if not exists registrations (
  id uuid primary key default gen_random_uuid(),
  event_id uuid references events(id) on delete cascade,
  user_id uuid references profiles(id),
  name text,
  email text,
  created_at timestamptz default now(),
  status text default 'confirmed'
);