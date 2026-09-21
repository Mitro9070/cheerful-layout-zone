import result1480 from "@/assets/results/clients/client-result-1480.jpg";
import result1481 from "@/assets/results/clients/client-result-1481.jpg";
import result1482 from "@/assets/results/clients/client-result-1482.jpg";
import result2736 from "@/assets/results/clients/client-result-2736.jpg";
import result2738 from "@/assets/results/clients/client-result-2738.jpg";
import result2741 from "@/assets/results/clients/client-result-2741.jpg";

export type ClientResult = {
  src: string;
  alt: string;
  label: string;
};

export const clientResults: ClientResult[] = [
  {
    src: result1480,
    alt: "Результат коррекции силуэта клиентки, вид сбоку до и после",
    label: "Коррекция силуэта · вид сбоку",
  },
  {
    src: result1481,
    alt: "Результат коррекции силуэта клиентки, вид со спины до и после",
    label: "Коррекция силуэта · вид со спины",
  },
  {
    src: result1482,
    alt: "Результат коррекции силуэта клиентки, вид спереди до и после",
    label: "Коррекция силуэта · вид спереди",
  },
  {
    src: result2736,
    alt: "Реальный результат аппаратной коррекции фигуры, вид сбоку до и после",
    label: "Аппаратная коррекция · вид сбоку",
  },
  {
    src: result2738,
    alt: "Реальный результат аппаратной коррекции фигуры, вид со спины до и после",
    label: "Аппаратная коррекция · вид со спины",
  },
  {
    src: result2741,
    alt: "Реальный результат аппаратной коррекции фигуры, вид спереди до и после",
    label: "Аппаратная коррекция · вид спереди",
  },
];