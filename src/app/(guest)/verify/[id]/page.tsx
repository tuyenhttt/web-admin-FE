import Verify from "@/components/auth/verify";

const VerfiyPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <>
      <Verify id={id} />
    </>
  );
};
export default VerfiyPage;
