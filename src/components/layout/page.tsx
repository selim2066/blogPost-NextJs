export const dynamic = 'force-dynamic';
const AboutPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
//throw new Error("Failed to load About Page");
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};

export default AboutPage;
