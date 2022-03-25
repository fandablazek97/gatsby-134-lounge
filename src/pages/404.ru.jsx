import { navigate } from "gatsby";

// Layout
import AppLayout from "layouts/AppLayout";
import LangLayout from "layouts/ru/LangLayout";

// Global Components
import Seo from "components/Seo";
import Button from "components/ui/Button";

// Icons
import { HiHome } from "react-icons/hi";

export default function NotFoundPage() {
  return (
    <AppLayout>
      <LangLayout>
        <Seo title="404: Страница не найдена" robotsEnabled={false} />

        <header className="relative h-screen min-h-[640px] w-screen">
          <div className="ui-wrapper flex h-full flex-col items-center justify-center">
            <span className="ui-heading" data-heading="xl">
              &#128531;
            </span>
            <h1 className="ui-heading text-center font-serif text-3xl text-primary sm:text-5xl lg:text-6xl">
              Страница не найдена
            </h1>
            <p className="ui-lead mx-auto mb-16 max-w-3xl text-center">
              Никуда пока не беги! Похоже, что страница, которую вы пытаетесь
              find больше не существует или был перемещен. Нажмите кнопку вы
              можете легко перейти на главную страницу.
            </p>
            <Button
              as="a"
              onClick={() => {
                navigate("/ru/");
              }}
              IconLeft={<HiHome />}
            >
              Главная страница
            </Button>
          </div>
        </header>
      </LangLayout>
    </AppLayout>
  );
}
