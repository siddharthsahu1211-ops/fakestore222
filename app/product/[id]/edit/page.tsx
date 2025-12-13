import ProductForm from "@/components/ProductForm";

export default async function EditProductPage({ params }: any) {
  const { id } = await params;

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  async function handleEdit(formData: any) {
    await fetch(`https://dummyjson.com/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("Product Updated!");
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow mt-10">
      <h1 className="text-2xl font-bold mb-6">Edit Product</h1>

      <ProductForm
        initialData={product}
        submitText="Save Changes"
        onSubmit={handleEdit}
      />
    </div>
  );
}