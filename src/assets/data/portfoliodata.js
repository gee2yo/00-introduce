const portfolioData = {
  portfolioList: [
    {
      name: "Firefly Forest",
      period: "2021.01 - 2021.02",
      project: "Toy",
      logo: "instagram",
      percent: "100%",
      link: "https://firefly-app-eb8f3.web.app/",
      github: "https://github.com/hjban-dev/firefly",
      description:
        "대나무 숲에서 아이디어를 얻어 만든 반딧불이의 숲 프로젝트입니다.\n익명으로 정보를 쓰고 다른 사람의 정보도 확인 할 수 있는 웹 앱입니다. Firebase를 통해 배포하였고, 약 2주동안 진행하였습니다.",
      tech: [
        "Html & CSS",
        "Canvas",
        "Javascript",
        "React",
        "Node.js",
        "Firebase",
        "Database",
      ],
      image: [
        {
          name: "firefly/landing.gif",
          tit: "메인페이지",
          desc: "앱에 대해 설명 해주는 메인 페이지입니다. \n배경의 애니메이션은 Canvas를 사용하였습니다.",
        },
        {
          name: "firefly/write.gif",
          tit: "반딧불이 날리기",
          desc: "로그인을 하지 않아도 업로드가 가능합니다. \n보내는 정보와 받는 정보는 default값으로 반딧불이가 저장되지만, 변경도 가능합니다.",
        },
        {
          name: "firefly/detail.gif",
          tit: "반딧불이 구경하기",
          desc: "업로드가 된 글을 확인할 수 있습니다. \n데이터는 입력자의 시간 데이터 정보와 함께 DB에 저장되고, 입력자가 보내는 정보와 받는 정보를 적었다면 상세 페이지에서 확인 할 수 있습니다. 데이터는 입력자의 정보와 함께 내림차순으로 노출됩니다.",
        },
      ],
    },
  ],
};

export default portfolioData;
