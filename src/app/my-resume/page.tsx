import { CoolButton } from "@/components/ui";

export default function MyResume() {
  return (
    <main className="p-3">
      <nav className="flex justify-center">
        <ul className="text-center w-26">
          <CoolButton type="square" href={"/my-resume-1"}>
            Layout-1
          </CoolButton>
          <CoolButton type="square" href={"/my-resume-2"}>
            Layout-2
          </CoolButton>
          <CoolButton type="square" href={"/my-resume-3"}>
            Layout-3
          </CoolButton>
          <CoolButton type="square" href={"/"}>
            Me
          </CoolButton>
        </ul>
      </nav>
    </main>
  );
}
