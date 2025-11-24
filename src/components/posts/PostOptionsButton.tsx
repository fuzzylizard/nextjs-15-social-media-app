import { PostData } from "@/lib/types";
import { useState } from "react";
import DeletePostDialogue from "./DeletePostDialogue";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoreHorizontal, Trash2, Trash2Icon } from "lucide-react";

interface PostOptionsButtonProps {
  post: PostData;
  className?: string;
}

export default function PostOptionsButton({
  post,
  className,
}: PostOptionsButtonProps) {
  const [showDeleteDialogue, setShowDeleteDialogue] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="ghost" className={className}>
            <MoreHorizontal className="size-5 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setShowDeleteDialogue(true)}>
            <span className="flex items-center gap-3 text-destructive">
              <Trash2 className="size-4" />
              Delete
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DeletePostDialogue
        post={post}
        open={showDeleteDialogue}
        onClose={() => setShowDeleteDialogue(false)}
      />
    </>
  );
}
