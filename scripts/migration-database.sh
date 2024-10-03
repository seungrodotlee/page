npx supabase gen types --lang=typescript --project-id "$PROJECT_REF" --schema public | tee ./scripts/temp

npx node ./scripts/export-types.js

rm -rf ./scripts/temp