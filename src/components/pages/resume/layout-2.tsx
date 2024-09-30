import { MY_DATA2 } from "@/utils/data";

export function Layout2() {
  return (
    <main className="p-3">
      <div className="h-full flex min-h-[calc(100vh-32px)] max-w-[1111px] m-auto bg-gray-200">
        <div className="text-black flex ">
          <div className="h-auto  w-1/2 bg-[#e1c0c06b]">
            <div>
              <div className="pl-7 h-80 bg-[#b9a5a5]">
                <div className="text-black pb-4">
                  <h1 className="max-[600px]:text-3xl text-5xl font-bold mt-0 pt-7">
                    {MY_DATA2.profile.name}
                  </h1>
                </div>
                <div className="leading-relaxed flex gap-0.5 flex-col pr-8">
                  <h1 className="text-left text-sm font-medium pt-4">
                    {MY_DATA2.profile.address}
                  </h1>
                  <h1 className="text-left text-sm font-medium">
                    {MY_DATA2.profile.email}
                  </h1>
                  <h1 className="text-left text-sm font-medium">
                    Contact no.: {MY_DATA2.profile.phone}
                  </h1>
                  <h1 className="text-left text-[#0A66C2] text-sm font-medium">
                    <a href={MY_DATA2.profile.linkedIn} target="black">
                      {MY_DATA2.profile.linkedIn}
                    </a>
                  </h1>
                </div>
              </div>
              <div className="">
                <div className="pl-7 pr-8 pt-6">
                  <h1 className="text-xl mb-4 font-semibold uppercase">
                    SKILLS
                  </h1>
                  <div className="">
                    {(MY_DATA2.skills || []).map((item, skillsId) => {
                      return (
                        <div className="mb-4" key={"skills" + skillsId}>
                          <h1 className="text-xl text-teal-200 font-semibold">
                            {item.name}
                          </h1>
                          <div className="ml-6">
                            {(item.skillData || []).map((skill, skillId) => {
                              return (
                                <div
                                  className="flex align-baseline gap-4"
                                  key={"skill" + skillId}
                                >
                                  <ul className="list-disc list-inside font-semibold">
                                    <li>{skill}</li>
                                  </ul>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="pl-7 pr-8 mt-4">
                  <h1 className="text-xl mb-4 font-semibold uppercase">
                    EDUCATION
                  </h1>
                  <div className="">
                    <div className="mb-4">
                      <h1 className="font-semibold">
                        {MY_DATA2.education.institute}
                      </h1>
                      <p className="italic font-semibold">
                        {MY_DATA2.education.ug}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 w-full">
            <div className="pl-8 pr-10 flex items-center leading-relaxed h-80 bg-[#e9d2d26b]">
              <div>
                <h1 className="text-xl font-semibold uppercase">
                  Professional Summary
                </h1>
                <p className="mt-2 py-1 rounded-xl">
                  {MY_DATA2.profile.aboutMe}
                </p>
              </div>
            </div>
            <div className="pl-8 pr-10 mt-6">
              <h1 className="text-xl font-semibold uppercase">
                Website,Portfolios,Profile
              </h1>
              <a
                href={MY_DATA2.profile.portfolio}
                target="blank"
                className="text-[#0A66C2]"
              >
                {MY_DATA2.profile.portfolio}
              </a>
            </div>
            <div className="pl-8 pr-10 mt-6">
              <h1 className="text-xl mb-4 font-semibold uppercase">
                Work History
              </h1>
              <div>
                {(MY_DATA2.experience || []).map((item, id) => {
                  return (
                    <div className="py-1.5 mb-3 rounded-xl" key={"exe" + id}>
                      <div className="mb-4">
                        <h1 className="text-[18px] font-semibold uppercase">
                          {item.org}
                        </h1>
                        <p>{item.status}</p>
                      </div>
                      <div>
                        {(item.projects || []).map((proj, projId) => {
                          return (
                            <div className="mb-4" key={"proj" + projId}>
                              <h1 className="text-[18px] font-semibold uppercase">
                                {proj.name}
                              </h1>
                              <div className="ml-4 leading-relaxed">
                                {(proj.description || []).map((des, idDes) => {
                                  return (
                                    <div
                                      className="flex align-baseline gap-4"
                                      key={"des" + idDes}
                                    >
                                      <ul className="list-disc list-inside">
                                        <li>{des}</li>
                                      </ul>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
