import Image from "next/image";
import Text from "@/components/ui/text";
import { useEffect, useState } from "react";
import { Section } from "@radix-ui/themes";

const Home = () => {
  return (
    <Section height={"100vh"}>
      <div className="grid grid-cols-2 w-full">
        <Text size="4xl" weight="extrabold">
          Hi I am Developer
        </Text>
        <div className="justify-self-center" style={{ maxWidth: "90%" }}>
          <Image
            src="/images/oakProfile.png"
            alt="Profile"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </Section>
  );
};
// export async function getServerSideProps({ locale }: { locale: string }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common", "home"], nextI18nextConfig)),
//       // Will be passed to the page component as props
//     },
//   };
// }
export default Home;
