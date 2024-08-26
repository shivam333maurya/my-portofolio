import { CoolLinkButton } from "@/components/ui";

export default function MyResume() {
  return (
    <main className="p-3">
      <nav className="flex justify-center">
        <ul className="text-center w-26">
          <CoolLinkButton type="square" href={"/my-resume-1"}>
            Layout-1
          </CoolLinkButton>
          <CoolLinkButton type="square" href={"/my-resume-2"}>
            Layout-2
          </CoolLinkButton>
          <CoolLinkButton type="square" href={"/my-resume-3"}>
            Layout-3
          </CoolLinkButton>
          <CoolLinkButton type="square" href={"/"}>
            Me
          </CoolLinkButton>
        </ul>
      </nav>
    </main>
  );
}
