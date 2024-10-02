import { select } from "@/@shared/utils/supabase/select";
import { main } from "./main.style";

export async function Main() {
  const data = await select("about", "*, contact( * )");
  const about = data.find((about) => about.selected);

  return (
    <div className={main.root}>
      <h1>{about?.title}</h1>
      <p>{about?.content}</p>
      <ul>
        {about?.contact.map((contact) => (
          <a key={contact.id} href={contact.link}>
            {contact.label}
          </a>
        ))}
      </ul>
    </div>
  );
}
