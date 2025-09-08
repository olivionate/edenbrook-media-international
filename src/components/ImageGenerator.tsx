import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RunwareService } from "@/services/runwareService";
import { toast } from "sonner";
import { Loader2, Download } from "lucide-react";

interface ImageGeneratorProps {
  onImagesGenerated: (images: string[]) => void;
}

const ImageGenerator = ({ onImagesGenerated }: ImageGeneratorProps) => {
  const [apiKey, setApiKey] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);

  const servicePrompts = [
    {
      name: "PR & Marketing Consultancy",
      prompt: "Professional diverse team of marketing consultants in a modern office, African American woman presenting strategy to Hispanic man and Asian woman, charts and graphs on screens, high resolution, professional lighting, corporate environment"
    },
    {
      name: "Creative Design & Branding",
      prompt: "Creative diverse design team collaborating, Indian woman designer working with Caucasian man and Black woman on brand identity, colorful design studio with mood boards and creative materials, high resolution, vibrant colors"
    },
    {
      name: "Event Management & Planning",
      prompt: "Professional event planners coordinating elegant corporate event, diverse team including Middle Eastern woman, Latino man, and Asian woman discussing details, luxury venue background, high resolution, sophisticated atmosphere"
    },
    {
      name: "Publishing & Printing",
      prompt: "Modern printing facility with diverse workers, African woman operating high-tech printing equipment alongside Caucasian man and Hispanic woman, books and magazines being produced, high resolution, industrial lighting"
    },
    {
      name: "Web Design & Development",
      prompt: "Diverse team of web developers coding, Asian man, Black woman, and Middle Eastern woman working on multiple monitors showing website designs, modern tech office, high resolution, tech startup atmosphere"
    },
    {
      name: "Business & Strategic Plans",
      prompt: "Executive boardroom with diverse business leaders, Hispanic woman CEO presenting strategic plans to mixed-race team including African American man and Caucasian woman, professional corporate setting, high resolution"
    },
    {
      name: "Multimedia Production",
      prompt: "Professional video production studio with diverse crew, Indian man director working with Latina woman cinematographer and Black man sound engineer, high-end camera equipment, high resolution, creative lighting"
    },
    {
      name: "Capacity Building & Training",
      prompt: "Corporate training session with diverse participants, Middle Eastern woman trainer presenting to mixed group including Asian man, African woman, and Caucasian man, modern conference room, high resolution, learning environment"
    }
  ];

  const generateAllImages = async () => {
    if (!apiKey.trim()) {
      toast.error("Please enter your Runware API key");
      return;
    }

    setIsGenerating(true);
    const runwareService = new RunwareService(apiKey);
    const newImages: string[] = [];

    try {
      for (let i = 0; i < servicePrompts.length; i++) {
        const prompt = servicePrompts[i];
        toast.info(`Generating image ${i + 1}/8: ${prompt.name}`);
        
        const result = await runwareService.generateImage({
          positivePrompt: prompt.prompt,
          width: 1920,
          height: 1080,
          numberResults: 1,
          outputFormat: "WEBP"
        });

        newImages.push(result.imageURL);
        
        // Download and save the image to assets
        const response = await fetch(result.imageURL);
        const blob = await response.blob();
        const fileName = `service-${prompt.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}.webp`;
        
        // Create a download link (since we can't directly save to assets folder)
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(url);
      }

      setGeneratedImages(newImages);
      onImagesGenerated(newImages);
      toast.success("All service images generated successfully!");
      
    } catch (error) {
      console.error("Error generating images:", error);
      toast.error("Failed to generate images. Please check your API key and try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Generate High-Resolution Service Images</CardTitle>
        <CardDescription>
          Generate diverse, high-quality AI images for all services. You'll need a Runware API key from{" "}
          <a href="https://runware.ai" target="_blank" rel="noopener noreferrer" className="text-primary underline">
            runware.ai
          </a>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="apiKey">Runware API Key</Label>
          <Input
            id="apiKey"
            type="password"
            placeholder="Enter your Runware API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
        </div>
        
        <Button 
          onClick={generateAllImages} 
          disabled={isGenerating || !apiKey.trim()}
          className="w-full"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating Images...
            </>
          ) : (
            <>
              <Download className="mr-2 h-4 w-4" />
              Generate All Service Images
            </>
          )}
        </Button>

        {generatedImages.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {generatedImages.map((imageUrl, index) => (
              <div key={index} className="space-y-2">
                <img 
                  src={imageUrl} 
                  alt={servicePrompts[index].name}
                  className="w-full h-24 object-cover rounded-lg"
                />
                <p className="text-xs text-center">{servicePrompts[index].name}</p>
              </div>
            ))}
          </div>
        )}

        <div className="text-sm text-muted-foreground mt-4">
          <p className="font-semibold">Instructions:</p>
          <ol className="list-decimal list-inside space-y-1 mt-2">
            <li>Get your API key from <a href="https://runware.ai" target="_blank" rel="noopener noreferrer" className="text-primary underline">runware.ai</a></li>
            <li>Enter your API key above and click "Generate All Service Images"</li>
            <li>Images will be generated and automatically downloaded</li>
            <li>Save the downloaded images to your src/assets folder</li>
            <li>Update the import paths in your service pages</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageGenerator;