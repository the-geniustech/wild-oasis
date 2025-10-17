import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { CurrentBookingUploader } from "../data/Uploader";

function Settings() {
  return (
    <Row>
      <Heading as="h1">Update hotel settings</Heading>
      <UpdateSettingsForm />

      <CurrentBookingUploader />
    </Row>
  );
}

export default Settings;
