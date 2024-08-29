import { CoolLinkButton, SmoothScrollAnimation } from "@/components/ui";

export default function MyResume() {
  return (
    <main className="p-3">
      <nav className="flex justify-center">
        <ul className="text-center w-26">
          <SmoothScrollAnimation delay={0.2}>
            <CoolLinkButton type="square" href={"/my-resume-1"}>
              Layout-1
            </CoolLinkButton>
          </SmoothScrollAnimation>

          <SmoothScrollAnimation delay={0.3}>
            <CoolLinkButton type="square" href={"/my-resume-2"}>
              Layout-2
            </CoolLinkButton>
          </SmoothScrollAnimation>
          <SmoothScrollAnimation delay={0.4}>
            <CoolLinkButton type="square" href={"/my-resume-3"}>
              Layout-3
            </CoolLinkButton>
          </SmoothScrollAnimation>
          <SmoothScrollAnimation delay={0.5}>
            <CoolLinkButton type="square" href={"/"}>
              Me
            </CoolLinkButton>
          </SmoothScrollAnimation>
        </ul>
      </nav>
    </main>
  );
}
