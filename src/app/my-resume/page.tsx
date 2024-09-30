import { CoolButton, SmoothScrollAnimation } from "@/components/ui";

export default function MyResume() {
  return (
    <main className="p-3">
      <nav className="flex justify-center">
        <ul className="text-center w-26">
          <SmoothScrollAnimation delay={0.2}>
            <CoolButton type="square" href={"/my-resume-1"}>
              Layout-1
            </CoolButton>
          </SmoothScrollAnimation>

          <SmoothScrollAnimation delay={0.3}>
            <CoolButton type="square" href={"/my-resume-2"}>
              Layout-2
            </CoolButton>
          </SmoothScrollAnimation>
          <SmoothScrollAnimation delay={0.4}>
            <CoolButton type="square" href={"/my-resume-3"}>
              Layout-3
            </CoolButton>
          </SmoothScrollAnimation>
          <SmoothScrollAnimation delay={0.5}>
            <CoolButton type="square" href={"/"}>
              Me
            </CoolButton>
          </SmoothScrollAnimation>
        </ul>
      </nav>
    </main>
  );
}
