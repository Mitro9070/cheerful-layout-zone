// Реальные фото студии «Импульс» (фотосессия), файлы лежат в src/assets.
import teamTrio from "@/assets/photo/team/trio.jpg";
import teamTrioGoggles from "@/assets/photo/team/trio-goggles.jpg";
import teamMasterMagic from "@/assets/photo/team/master-magic.jpg";
import teamMasterMagicHandpiece from "@/assets/photo/team/master-magic-handpiece.jpg";
import teamMasterPortrait from "@/assets/photo/team/master-portrait.jpg";
import teamMasterLaserRoom from "@/assets/photo/team/master-laser-room.jpg";
import teamMasterCouch from "@/assets/photo/team/master-couch.jpg";
import teamMasterSmile from "@/assets/photo/team/master-smile.jpg";
import teamMasterSugaring from "@/assets/photo/team/master-sugaring.jpg";
import teamMasterWax from "@/assets/photo/team/master-wax.jpg";
import teamMasterWaxTwo from "@/assets/photo/team/master-wax-two.jpg";
import teamMasterPaste from "@/assets/photo/team/master-paste.jpg";
import teamDuoEmslim from "@/assets/photo/team/duo-emslim.jpg";
import teamDuoTurbo from "@/assets/photo/team/duo-turbo-g5.jpg";
import teamMasterTurbo from "@/assets/photo/team/master-turbo-g5.jpg";

import eqMagicOne from "@/assets/photo/equipment/magic-one.jpg";
import eqMagicFull from "@/assets/photo/equipment/magic-full.jpg";
import eqMagicScreen from "@/assets/photo/equipment/magic-screen.jpg";
import eqMagicAlt from "@/assets/photo/equipment/magic-one-alt.jpg";
import eqEmslim from "@/assets/photo/equipment/emslim-neo.jpg";
import eqTurbo from "@/assets/photo/equipment/turbo-g5.jpg";

import workLaserProcedure from "@/assets/photo/work/laser-procedure.jpg";
import workMasterHandpiece from "@/assets/photo/work/master-handpiece.jpg";
import workHandpieceScreen from "@/assets/photo/work/handpiece-screen.jpg";
import workHandpiecePoint from "@/assets/photo/work/handpiece-point.jpg";
import workSettings from "@/assets/photo/work/settings.jpg";
import workUnderarms1 from "@/assets/photo/work/underarms-1.jpg";
import workUnderarms2 from "@/assets/photo/work/underarms-2.jpg";
import workLegsPulse from "@/assets/photo/work/legs-pulse.jpg";
import workLegsMaster from "@/assets/photo/work/legs-master.jpg";
import workLaserLeg from "@/assets/photo/work/laser-leg.jpg";
import workGelHands from "@/assets/photo/work/gel-hands.jpg";
import workWaxCartridge from "@/assets/photo/work/wax-cartridge.jpg";
import workMasterGoggles from "@/assets/photo/work/master-laser-goggles.jpg";

import studioLaserRoom from "@/assets/photo/studio/laser-room.jpg";
import studioCertificates from "@/assets/photo/studio/certificates.jpg";
import studioCertificatesShelf from "@/assets/photo/studio/certificates-shelf.jpg";
import studioPaste from "@/assets/photo/studio/sugaring-paste.jpg";
import studioPasteJar from "@/assets/photo/studio/sugaring-paste-jar.jpg";

import electroMaster from "@/assets/photo/electro/electro-master.jpg";
import electroNeedle from "@/assets/photo/electro/electro-needle.jpg";
import electroProcess from "@/assets/photo/electro/electro-process.jpg";

export type Photo = { src: string; alt: string };

const p = (src: string, alt: string): Photo => ({ src, alt });

export const teamPhotos: Photo[] = [
  p(teamTrio, "Специалисты студии «Импульс» в кабинете лазерной эпиляции"),
  p(teamTrioGoggles, "Команда студии «Импульс» в защитных очках у диодного лазера"),
  p(teamMasterMagic, "Специалист студии рядом с диодным лазером Magic One"),
  p(teamMasterPortrait, "Специалист студии «Импульс» в форме студии"),
  p(teamMasterLaserRoom, "Специалист по лазерной эпиляции в кабинете студии"),
  p(teamMasterCouch, "Специалист студии «Импульс» в процедурном кабинете"),
  p(teamMasterSmile, "Специалист студии «Импульс»"),
  p(teamMasterMagicHandpiece, "Специалист с манипулой диодного лазера"),
];

// Три мастера студии, по одному отдельному кадру на каждую (без общих фото команды).
export const teamMemberPhotos: Photo[] = [
  p(teamMasterMagic, "Мастер студии «Импульс» рядом с диодным лазером Magic One"),
  p(teamMasterPortrait, "Мастер студии «Импульс» в процедурном кабинете"),
  p(teamMasterMagicHandpiece, "Мастер студии «Импульс» с манипулой диодного лазера"),
];

export const teamSugaringPhotos: Photo[] = [
  p(teamMasterSugaring, "Специалист студии по шугарингу и восковой депиляции"),
  p(teamMasterWax, "Специалист с картриджами воска для депиляции"),
  p(teamMasterWaxTwo, "Материалы для восковой депиляции в студии «Импульс»"),
  p(teamMasterPaste, "Специалист с сахарной пастой для шугаринга"),
];

export const teamBodyPhotos: Photo[] = [
  p(teamDuoEmslim, "Специалисты студии с аппаратом для коррекции фигуры"),
  p(teamDuoTurbo, "Специалисты студии с аппаратом вибрационно-роликового массажа Turbo G5"),
  p(teamMasterTurbo, "Специалист с манипулой аппарата Turbo G5"),
];

export const menMasterPhotos: Photo[] = [
  p(teamMasterLaserRoom, "Специалист по лазерной эпиляции в кабинете студии"),
  p(teamMasterMagicHandpiece, "Специалист студии с манипулой диодного лазера"),
  p(workGelHands, "Специалист подготавливает средство перед лазерной эпиляцией"),
];

export const menHeroPhoto = p(
  teamMasterMagic,
  "Специалист студии рядом с аппаратом для лазерной эпиляции",
);

export const equipmentPhotos: Photo[] = [
  p(eqMagicOne, "Диодный лазер Magic One в студии «Импульс»"),
  p(eqMagicFull, "Аппарат диодной лазерной эпиляции Magic"),
  p(eqMagicScreen, "Экран выбора зон на аппарате диодной эпиляции"),
  p(eqMagicAlt, "Аппарат Magic One в кабинете студии"),
];

export const bodyEquipmentPhotos: Photo[] = [
  p(eqEmslim, "Аппарат EMSlim neo для коррекции фигуры"),
  p(eqTurbo, "Аппарат вибрационно-роликового массажа Turbo G5"),
];

export const laserWorkPhotos: Photo[] = [
  p(workLaserProcedure, "Процедура лазерной эпиляции в студии «Импульс»"),
  p(workUnderarms1, "Лазерная эпиляция зоны подмышек"),
  p(workLegsPulse, "Манипула лазера во время эпиляции ног"),
  p(workMasterHandpiece, "Специалист проводит лазерную эпиляцию"),
  p(workSettings, "Настройка параметров аппарата перед процедурой"),
  p(workHandpieceScreen, "Экран аппарата во время процедуры эпиляции"),
  p(workUnderarms2, "Лазерная эпиляция подмышек, другой ракурс"),
  p(workLegsMaster, "Лазерная эпиляция ног в студии «Импульс»"),
  p(workLaserLeg, "Крупный план лазерной эпиляции ног"),
  p(workMasterGoggles, "Специалист в защитных очках во время процедуры"),
  p(workHandpiecePoint, "Манипула диодного лазера в руке специалиста"),
  p(workGelHands, "Подготовка геля перед процедурой эпиляции"),
];

// Живые кадры для комплексов: последовательность подобрана по зонам и смыслу карточек.
export const offerPhotos: Photo[] = [
  p(eqMagicScreen, "Настройка диодного лазера перед процедурой"),
  p(teamMasterMagic, "Мастер студии рядом с диодным лазером Magic One"),
  p(workLegsMaster, "Лазерная эпиляция ног в студии «Импульс»"),
  p(teamMasterMagicHandpiece, "Мастер студии с манипулой Magic One"),
  p(workLaserProcedure, "Процедура лазерной эпиляции в студии «Импульс»"),
  p(teamMasterTurbo, "Мастер проводит аппаратную процедуру для тела"),
];

export const complexPhotos: Photo[] = [
  p(teamMasterLaserRoom, "Мастер лазерной эпиляции в кабинете студии"),
  p(workLaserLeg, "Лазерная эпиляция ног крупным планом"),
  p(workMasterHandpiece, "Мастер проводит лазерную эпиляцию"),
  p(workLegsPulse, "Процедура лазерной эпиляции ног"),
  p(workSettings, "Настройка лазерного аппарата"),
  p(eqMagicFull, "Диодный лазер Magic в кабинете студии"),
];

export const sugaringWorkPhotos: Photo[] = [
  p(workWaxCartridge, "Картриджи воска для депиляции"),
  p(studioPaste, "Сахарная паста для шугаринга"),
  p(studioPasteJar, "Паста для шугаринга в студии «Импульс»"),
];

export const studioPhotos: Photo[] = [
  p(studioLaserRoom, "Кабинет лазерной эпиляции студии «Импульс» в Истре"),
  p(studioCertificates, "Сертификаты специалистов студии «Импульс»"),
  p(studioCertificatesShelf, "Полка с сертификатами и декором в студии"),
];

export const electroPhotos: Photo[] = [
  p(electroMaster, "Мастер студии проводит электроэпиляцию"),
  p(electroNeedle, "Подготовка одноразовой иглы для электроэпиляции"),
  p(electroProcess, "Точечная обработка волос во время электроэпиляции"),
];

export const heroTeamPhoto = p(teamTrio, "Команда студии «Импульс» в Истре");
