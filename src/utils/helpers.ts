// Function to create slug from model name
export const slug = (name: string) => {
  return name.toLowerCase().replace(/\s/g, "-");
};
