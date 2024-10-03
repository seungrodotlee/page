const fs = require("fs/promises");

(async () => {
  console.log("--------------run----------------");
  const temp = await fs.readFile("./scripts/temp", { encoding: "utf-8" });

  const refinedFileContent = temp
    .split("export")
    .filter((_, idx) => idx > 0)
    .map((line) => `export${line}`)
    .join("");

  await fs.mkdir("./src/@shared/supabase/types", { recursive: true });

  await fs.writeFile(
    "./src/@shared/supabase/types/database.type.ts",
    refinedFileContent,
    {
      encoding: "utf-8",
    }
  );
})();
