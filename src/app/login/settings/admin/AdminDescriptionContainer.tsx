import AdminDescriptionLayout from "./AdminDescriptionLayout";
import AdminEditLayout from "./AdminEditLayout";

export default function AdminDescriptionContainer({
  editing,
}: {
  editing: boolean;
}) {
  return <>{editing ? <AdminEditLayout /> : <AdminDescriptionLayout />}</>;
}
