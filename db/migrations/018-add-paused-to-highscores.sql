ALTER TABLE highscores_entries ADD COLUMN paused INTEGER NOT NULL DEFAULT 0;
ALTER TABLE highscores_submissions ADD COLUMN paused INTEGER NOT NULL DEFAULT 0;
CREATE INDEX IF NOT EXISTS highscores_entries_index_paused ON highscores_entries (paused);
