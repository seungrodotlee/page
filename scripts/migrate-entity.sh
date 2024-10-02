FILE=src/@shared/types/entities.ts

npx supabase gen types --lang=typescript --project-id "$PROJECT_REF" --schema public
cat tmp > $FILE