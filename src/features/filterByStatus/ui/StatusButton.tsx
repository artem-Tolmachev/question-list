import Button from "@/shared/ui/Button/Button";
import type { StatusItem } from "../model/types";

interface Props {
  status: StatusItem;
}
export default function StatusButton({status}: Props) {

  return (
    <div>
      <Button
        variant={'primary'}
      >
        {status.label}
      </Button>
    </div>
  )
}
