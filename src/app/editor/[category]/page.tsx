import { editorContext } from "@/@pages/editor/editor.context";
import { EditorBridge } from "@/@pages/editor/editor.bridge";
import { getUser } from "@/@shared/supabase/user";

type EditorPageProps = {
  params: {
    category: string;
  };
};

export default async function EditorPage({
  params: { category },
}: EditorPageProps) {
  editorContext.set({ category });
  getUser();

  return <EditorBridge />;
}
