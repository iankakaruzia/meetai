import { ResponsiveDialog } from "@/components/responsive-dialog";
import { MeetingForm } from "./meeting-form";
import { MeetingGetOne } from "../../types";

type UpdateMeetingDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues: MeetingGetOne;
};

export function UpdateMeetingDialog({
  open,
  onOpenChange,
  initialValues,
}: UpdateMeetingDialogProps) {
  return (
    <ResponsiveDialog
      title="Edit Meeting"
      description="Edit the meeting details"
      open={open}
      onOpenChange={onOpenChange}
    >
      <MeetingForm
        initialValues={initialValues}
        onSuccess={() => {
          onOpenChange(false);
        }}
        onCancel={() => onOpenChange(false)}
      />
    </ResponsiveDialog>
  );
}
