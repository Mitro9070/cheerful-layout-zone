import result1480 from "@/assets/results/clients/client-result-1480.jpg.asset.json";
import result1481 from "@/assets/results/clients/client-result-1481.jpg.asset.json";
import result1482 from "@/assets/results/clients/client-result-1482.jpg.asset.json";
import result2736 from "@/assets/results/clients/client-result-2736.jpg.asset.json";
import result2738 from "@/assets/results/clients/client-result-2738.jpg.asset.json";
import result2741 from "@/assets/results/clients/client-result-2741.jpg.asset.json";
import resultUnderarms from "@/assets/results/clients/client-result-underarms.jpg.asset.json";
import resultLegs from "@/assets/results/clients/client-result-legs.jpg.asset.json";

export type ClientResult = {
  src: string;
  alt: string;
  label: string;
};

export const clientResults: ClientResult[] = [
  {
    src: result1480.url,
    alt: "Результат коррекции силуэта клиентки, вид сбоку до и после",
    label: "Коррекция силуэта · вид сбоку",
  },
  {
    src: result1481.url,
    alt: "Результат коррекции силуэта клиентки, вид со спины до и после",
    label: "Коррекция силуэта · вид со спины",
  },
  {
    src: result1482.url,
    alt: "Результат коррекции силуэта клиентки, вид спереди до и после",
    label: "Коррекция силуэта · вид спереди",
  },
  {
    src: result2736.url,
    alt: "Реальный результат аппаратной коррекции фигуры, вид сбоку до и после",
    label: "Аппаратная коррекция · вид сбоку",
  },
  {
    src: result2738.url,
    alt: "Реальный результат аппаратной коррекции фигуры, вид со спины до и после",
    label: "Аппаратная коррекция · вид со спины",
  },
  {
    src: result2741.url,
    alt: "Реальный результат аппаратной коррекции фигуры, вид спереди до и после",
    label: "Аппаратная коррекция · вид спереди",
  },
  {
    src: resultUnderarms.url,
    alt: "Реальный результат процедуры в зоне подмышек до и после",
    label: "Результат процедуры · зона подмышек",
  },
  {
    src: resultLegs.url,
    alt: "Реальный результат процедуры в зоне голеней до и после",
    label: "Результат процедуры · голени",
  },
];