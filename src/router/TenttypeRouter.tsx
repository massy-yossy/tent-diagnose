import DomeDurable from "../components/answer/tenttypePage/dome/DomeDurable";
import DomeStylish from "../components/answer/tenttypePage/dome/DomeStylish";
import OnepollCheap from "../components/answer/tenttypePage/onepoll/OnepollCheap";
import OnepollCheap3over from "../components/answer/tenttypePage/onepoll/OnepollCheap3over";
import OnepollDome from "../components/answer/tenttypePage/onepoll/OnepollDome";
import OnepollDome3over from "../components/answer/tenttypePage/onepoll/OnepollDome3over";
import OnepollFamily from "../components/answer/tenttypePage/onepoll/OnepollFamily";
import OnepollShelter from "../components/answer/tenttypePage/onepoll/OnepollShelter";
import OnepollShelter3over from "../components/answer/tenttypePage/onepoll/OnepollShelter3over";
import TunnelFamily from "../components/answer/tenttypePage/tunnel/TunnelFamily";
import TworoomGood3over from "../components/answer/tenttypePage/tworoom/TworoomGood3over";
import TworoomLodgeFamily from "../components/answer/tenttypePage/tworoom/TworoomLodgeFamily";

export const TenttypeRouter = [
  //1人用
  {
    path: "/tenttype_01",
    compornent: <OnepollCheap />
  },
  {
    path: "/tenttype_02",
    compornent: <DomeDurable />
  },
  {
    path: "/tenttype_03",
    compornent: <DomeStylish />
  },
  {
    path: "/tenttype_04",
    compornent: <OnepollShelter />
  },
  {
    path: "/tenttype_05",
    compornent: <OnepollDome />
  },
  //グループ用
  {
    path: "/tenttype_11",
    compornent: <OnepollCheap3over />
  },
  {
    path: "/tenttype_12",
    compornent: <TworoomGood3over />
  },
  {
    path: "/tenttype_13",
    compornent: <OnepollShelter3over />
  },
  {
    path: "/tenttype_14",
    compornent: <OnepollDome3over />
  },
  //ファミリー用
  {
    path: "/tenttype_21",
    compornent: <OnepollFamily />
  },
  {
    path: "/tenttype_22",
    compornent: <TunnelFamily />
  },
  {
    path: "/tenttype_23",
    compornent: <TworoomLodgeFamily />
  },
]
