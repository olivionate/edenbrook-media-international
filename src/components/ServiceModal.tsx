import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ServiceModalProps {
  title: string;
  content: string | JSX.Element;
  children: React.ReactNode;
}

const ServiceModal = ({ title, content, children }: ServiceModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] bg-background border shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary mb-4">
            {title}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="text-foreground leading-relaxed space-y-4">
            {typeof content === 'string' ? (
              <div className="whitespace-pre-line">{content}</div>
            ) : (
              content
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;