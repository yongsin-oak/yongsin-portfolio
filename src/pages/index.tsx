import Image from "next/image";
import Text from "@/components/ui/text";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("home");
  return (
    <section style={{ height: "calc(100vh - 4rem - 1px)" }}>
      <div className="grid grid-cols-2 w-full h-full">
        <div className="self-center">
          <Text size="4xl" weight="extrabold">
            {t("introduceTitle")}
          </Text>
          <Text size="4xl" weight="extrabold" className="text-primary">
          {t("WebDeveloper")}
          </Text>
        </div>
        <div className="justify-self-center h-fit self-end">
          <div className=" w-96 h-96 bg-primary absolute -z-10 rounded-full"></div>
          <Image
            src="/images/oakProfile.png"
            alt="Profile"
            width={300}
            height={300}
            priority
          />
        </div>
      </div>
    </section>
  );
};
export default Home;
