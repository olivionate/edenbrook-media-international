import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageGenerator from "@/components/ImageGenerator";

const GenerateImages = () => {
  const handleImagesGenerated = (images: string[]) => {
    console.log("Generated images:", images);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">Generate Service Images</h1>
            <p className="text-lg text-muted-foreground">
              Create high-resolution, diverse AI images for all your services
            </p>
          </div>
          <ImageGenerator onImagesGenerated={handleImagesGenerated} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GenerateImages;