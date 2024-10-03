import { select } from "@/@shared/supabase/select";
import { main } from "./main.style";

export async function Main() {
  const abouts = await select("abouts", "*, contacts( * )");
  const about = abouts.find((about) => about.selected) ?? abouts[0];

  return (
    <div className={main.root}>
      <h1>{about.title}</h1>
      <p>{about.content}</p>
      <ul>
        {about.contacts.map((contact) => (
          <a key={contact.id} href={contact.link}>
            {contact.label}
          </a>
        ))}
      </ul>
    </div>
  );
}
