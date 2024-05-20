import AuthForm from "@/components/AuthForm";

const page = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="login" />
    </section>
  );
};

export default page;
