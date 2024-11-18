import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { XIcon } from "lucide-react";

interface ThumbanilProps {
   url: string | null | undefined;
}

export const Thumbnail = ({ url }: ThumbanilProps) => {
   if (!url) return null;

   return (
      <Dialog>
         <DialogTrigger>
            <div className="relative overflow-hidden max-w-[360px] border rounded-lg my-2 cursor-zoom-in">
               <img src={url} alt="Message image" className="rounded-md object-cover size-full" />
            </div>
         </DialogTrigger>
         <DialogContent className="max-w-[800px] border-none bg-transparent p-0 shadow-none">
            <img src={url} alt="Message image" className="rounded-md object-cover size-full" />
         </DialogContent>
      </Dialog>
   );
};
