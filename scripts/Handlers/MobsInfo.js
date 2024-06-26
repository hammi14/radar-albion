class MobsInfo {
  constructor() {
    this.moblist = {};
  }

  addItem(id, tier, type, loc) {
    if (!this.moblist[id]) {
      this.moblist[id] = [];
    }

    this.moblist[id][0] = tier;
    this.moblist[id][1] = type;
    this.moblist[id][2] = loc;
  }

  initMobs() {
    this.addItem(16, 4, 3, "droneicon");
    this.addItem(17, 5, 3, "droneicon");
    this.addItem(18, 5, 3, "droneicon");
    this.addItem(19, 7, 3, "droneicon");
    this.addItem(20, 5, 3, "droneicon");
    this.addItem(22, 5, 3, "droneicon");
    this.addItem(23, 5, 3, "droneicon");
    this.addItem(24, 5, 3, "droneicon");
    this.addItem(25, 5, 3, "droneicon");
    this.addItem(26, 5, 3, "droneicon");
    this.addItem(30, 5, 3, "droneicon");
    this.addItem(34, 5, 3, "droneicon");
    this.addItem(36, 5, 3, "droneicon");
    this.addItem(38, 5, 3, "droneicon");
    this.addItem(58, 5, 3, "droneicon");
    this.addItem(60, 5, 3, "droneicon");
    this.addItem(61, 7, 3, "droneicon");
    this.addItem(64, 5, 3, "droneicon");
    this.addItem(71, 5, 3, "droneicon");
    this.addItem(74, 5, 3, "droneicon");
    this.addItem(77, 5, 3, "droneicon");
    this.addItem(111, 3, 1, "hide");
    this.addItem(112, 4, 1, "hide");
    this.addItem(113, 5, 1, "hide");
    this.addItem(114, 6, 1, "hide");
    this.addItem(115, 7, 1, "hide");
    this.addItem(116, 8, 1, "hide");
    this.addItem(145, 2, 1, "hide");
    this.addItem(146, 3, 1, "hide");
    this.addItem(147, 3, 1, "hide");
    this.addItem(148, 4, 1, "hide");
    this.addItem(149, 5, 1, "hide");
    this.addItem(150, 6, 1, "hide");
    this.addItem(151, 6, 1, "hide");
    this.addItem(152, 7, 1, "hide");
    this.addItem(153, 8, 1, "hide");
    this.addItem(154, 8, 1, "hide");
    this.addItem(162, 3, 1, "hide");
    this.addItem(163, 3, 1, "hide");
    this.addItem(164, 4, 1, "hide");
    this.addItem(165, 5, 1, "hide");
    this.addItem(166, 7, 1, "hide");
    this.addItem(167, 8, 1, "hide");
    this.addItem(173, 3, 1, "hide");
    this.addItem(174, 3, 1, "hide");
    this.addItem(175, 4, 1, "hide");
    this.addItem(176, 5, 1, "hide");
    this.addItem(177, 6, 1, "hide");
    this.addItem(178, 7, 1, "hide");
    this.addItem(180, 8, 1, "hide");
    this.addItem(201, 4, 1, "hide");
    this.addItem(209, 1, 1, "hide");
    this.addItem(212, 4, 1, "hide");
    this.addItem(213, 5, 1, "hide");
    this.addItem(215, 7, 1, "hide");
    this.addItem(257, 3, 0, "fiber");
    this.addItem(258, 3, 0, "fiber");
    this.addItem(259, 5, 0, "fiber");
    this.addItem(260, 7, 0, "fiber");
    this.addItem(261, 1, 1, "hide");
    this.addItem(262, 5, 1, "hide");
    this.addItem(263, 7, 1, "hide");
    this.addItem(264, 4, 1, "hide");
    this.addItem(265, 5, 1, "hide");
    this.addItem(266, 6, 1, "hide");
    this.addItem(267, 7, 1, "hide");
    this.addItem(268, 8, 1, "hide");
    this.addItem(269, 3, 0, "wood");
    this.addItem(270, 3, 0, "wood");
    this.addItem(271, 5, 0, "wood");
    this.addItem(272, 5, 0, "wood");
    this.addItem(273, 7, 0, "wood");
    this.addItem(274, 3, 0, "rock");
    this.addItem(275, 3, 0, "rock");
    this.addItem(276, 5, 0, "rock");
    this.addItem(277, 5, 0, "rock");
    this.addItem(278, 4, 1, "hide");
    this.addItem(279, 5, 1, "hide");
    this.addItem(280, 5, 1, "hide");
    this.addItem(281, 6, 1, "hide");
    this.addItem(282, 7, 1, "hide");
    this.addItem(283, 8, 1, "hide");
    this.addItem(289, 4, 1, "hide");
    this.addItem(290, 5, 1, "hide");
    this.addItem(291, 6, 1, "hide");
    this.addItem(292, 7, 1, "hide");
    this.addItem(293, 8, 1, "hide");
    this.addItem(294, 4, 0, "wood");
    this.addItem(295, 5, 0, "wood");
    this.addItem(296, 1, 1, "hide");
    this.addItem(297, 2, 1, "hide");
    this.addItem(298, 4, 0, "wood");
    this.addItem(299, 3, 1, "hide");
    this.addItem(300, 5, 1, "hide");
    this.addItem(301, 5, 1, "hide");
    this.addItem(302, 6, 1, "hide");
    this.addItem(303, 6, 1, "hide");
    this.addItem(304, 7, 1, "hide");
    this.addItem(308, 3, 0, "rock");
    this.addItem(309, 4, 0, "rock");
    this.addItem(310, 5, 0, "rock");
    this.addItem(311, 6, 0, "rock");
    this.addItem(312, 8, 0, "rock");
    this.addItem(313, 1, 1, "hide");
    this.addItem(314, 2, 1, "hide");
    this.addItem(315, 3, 1, "hide");
    this.addItem(316, 4, 1, "hide");
    this.addItem(317, 5, 1, "hide");
    this.addItem(318, 6, 1, "hide");
    this.addItem(323, 6, 0, "fiber");
    this.addItem(324, 1, 1, "hide");
    this.addItem(325, 4, 1, "hide");
    this.addItem(326, 5, 1, "hide");
    this.addItem(327, 6, 1, "hide");
    this.addItem(328, 6, 1, "hide");
    this.addItem(329, 7, 1, "hide");
    this.addItem(330, 7, 1, "hide");
    this.addItem(331, 7, 0, "ore");
    this.addItem(332, 7, 0, "ore");
    this.addItem(333, 4, 0, "fiber");
    this.addItem(334, 5, 0, "fiber");
    this.addItem(335, 6, 0, "fiber");
    this.addItem(336, 7, 0, "fiber");
    this.addItem(337, 8, 0, "fiber");
    this.addItem(338, 3, 0, "fiber");
    this.addItem(339, 1, 1, "hide");
    this.addItem(340, 1, 1, "hide");
    this.addItem(341, 4, 1, "hide");
    this.addItem(342, 5, 1, "hide");
    this.addItem(343, 6, 1, "hide");
    this.addItem(352, 4, 1, "hide");
    this.addItem(353, 5, 1, "hide");
    this.addItem(354, 6, 1, "hide");
    this.addItem(355, 7, 1, "hide");
    this.addItem(356, 5, 0, "wood");
    this.addItem(359, 3, 0, "rock");
    this.addItem(360, 3, 0, "rock");
    this.addItem(361, 4, 0, "rock");
    this.addItem(362, 5, 0, "rock");
    this.addItem(363, 6, 0, "rock");
    this.addItem(365, 3, 0, "ore");
    this.addItem(366, 3, 0, "ore");
    this.addItem(367, 4, 0, "ore");
    this.addItem(368, 5, 0, "ore");
    this.addItem(369, 6, 0, "ore");
    this.addItem(372, 3, 0, "fiber");
    this.addItem(373, 4, 0, "fiber");
    this.addItem(374, 5, 0, "fiber");
    this.addItem(379, 5, 0, "wood");
    this.addItem(380, 5, 0, "wood");
    this.addItem(381, 6, 0, "wood");
    this.addItem(382, 7, 0, "wood");
    this.addItem(383, 8, 0, "wood");
    this.addItem(385, 5, 0, "rock");
    this.addItem(386, 5, 0, "rock");
    this.addItem(387, 6, 0, "rock");
    this.addItem(388, 7, 0, "rock");
    this.addItem(389, 8, 0, "rock");
    this.addItem(391, 4, 0, "ore");
    this.addItem(392, 5, 0, "ore");
    this.addItem(393, 6, 0, "ore");
    this.addItem(394, 7, 0, "ore");
    this.addItem(395, 8, 0, "ore");
    this.addItem(397, 5, 0, "fiber");
    this.addItem(398, 5, 0, "fiber");
    this.addItem(399, 6, 0, "fiber");
    this.addItem(400, 7, 0, "fiber");
    this.addItem(401, 3, 0, "rock");
    this.addItem(402, 5, 0, "rock");
    this.addItem(403, 4, 0, "wood");
    this.addItem(404, 5, 0, "wood");
    this.addItem(405, 6, 0, "wood");
    this.addItem(406, 7, 0, "wood");
    this.addItem(407, 8, 0, "wood");
    this.addItem(408, 3, 0, "rock");
    this.addItem(409, 4, 0, "rock");
    this.addItem(410, 3, 0, "fiber");
    this.addItem(411, 5, 0, "fiber");
    this.addItem(412, 7, 0, "fiber");
    this.addItem(413, 3, 1, "hide");
    this.addItem(414, 5, 1, "hide");
    this.addItem(415, 4, 0, "ore");
    this.addItem(416, 5, 0, "ore");
    this.addItem(417, 3, 0, "ore");
    this.addItem(418, 5, 0, "ore");
    this.addItem(419, 5, 0, "ore");
    this.addItem(421, 6, 1, "hide");
    this.addItem(422, 3, 0, "wood");
    this.addItem(423, 5, 0, "wood");
    this.addItem(424, 5, 0, "wood");
    this.addItem(425, 7, 0, "wood");
    this.addItem(429, 5, 0, "rock");
    this.addItem(430, 7, 0, "rock");
    this.addItem(431, 4, 1, "hide");
    this.addItem(432, 5, 1, "hide");
    this.addItem(433, 6, 1, "hide");
    this.addItem(434, 7, 1, "hide");
    this.addItem(435, 3, 0, "fiber");
    this.addItem(437, 5, 1, "hide");
    this.addItem(439, 5, 1, "hide");
    this.addItem(447, 3, 0, "wood");
    this.addItem(448, 5, 0, "wood");
    this.addItem(449, 5, 0, "wood");
    this.addItem(452, 3, 0, "rock");
    this.addItem(453, 5, 0, "rock");
    this.addItem(454, 5, 0, "rock");
    this.addItem(455, 7, 0, "rock");
    this.addItem(456, 4, 1, "hide");
    this.addItem(457, 5, 1, "hide");
    this.addItem(458, 6, 1, "hide");
    this.addItem(459, 7, 1, "hide");
    this.addItem(460, 8, 1, "hide");
    this.addItem(462, 5, 0, "rock");
    this.addItem(463, 6, 1, "hide");
    this.addItem(467, 5, 0, "rock");
    this.addItem(468, 6, 0, "rock");
    this.addItem(469, 7, 0, "rock");
    this.addItem(470, 8, 0, "rock");
    this.addItem(473, 6, 0, "wood");
    this.addItem(477, 5, 0, "ore");
    this.addItem(478, 6, 0, "wood");
    this.addItem(482, 5, 0, "WOOD");
    this.addItem(483, 6, 0, "ore");
    this.addItem(484, 7, 0, "ore");
    this.addItem(488, 6, 0, "rock");
    this.addItem(489, 4, 1, "hide");
    this.addItem(492, 5, 0, "fiber");
    this.addItem(493, 6, 0, "rock");
    this.addItem(497, 5, 0, "fiber");
    this.addItem(498, 6, 0, "fiber");
    this.addItem(499, 7, 0, "fiber");
    this.addItem(500, 5, 0, "fiber");
    this.addItem(503, 6, 0, "ore");
    this.addItem(508, 5, 0, "wood");
    this.addItem(509, 6, 0, "wood");
    this.addItem(514, 5, 0, "rock");
    this.addItem(515, 6, 0, "rock");
    this.addItem(518, 6, 0, "fiber");
    this.addItem(519, 4, 0, "ore");
    this.addItem(520, 5, 0, "ore");
    this.addItem(521, 4, 0, "fiber");
    this.addItem(526, 5, 0, "fiber");
    this.addItem(527, 6, 0, "fiber");
    this.addItem(532, 4, 0, "wood");
    this.addItem(533, 5, 0, "wood");
    this.addItem(534, 6, 0, "wood");
    this.addItem(538, 4, 0, "rock");
    this.addItem(539, 5, 0, "rock");
    this.addItem(540, 6, 0, "rock");
    this.addItem(544, 4, 0, "ore");
    this.addItem(545, 5, 0, "ore");
    this.addItem(546, 6, 0, "ore");
    this.addItem(550, 4, 0, "fiber");
    this.addItem(551, 5, 0, "fiber");
    this.addItem(552, 6, 0, "fiber");
    this.addItem(557, 5, 0, "wood");
    this.addItem(558, 6, 0, "wood");
    this.addItem(559, 7, 0, "wood");
    this.addItem(563, 5, 0, "rock");
    this.addItem(564, 7, 0, "rock");
    this.addItem(565, 7, 0, "rock");
    this.addItem(569, 5, 0, "ore");
    this.addItem(570, 6, 0, "ore");
    this.addItem(571, 7, 0, "ore");
    this.addItem(575, 5, 0, "fiber");
    this.addItem(576, 6, 0, "fiber");
    this.addItem(577, 7, 0, "fiber");
    this.addItem(582, 6, 0, "wood");
    this.addItem(583, 7, 0, "wood");
    this.addItem(584, 8, 0, "wood");
    this.addItem(587, 7, 0, "wood");
    this.addItem(588, 6, 0, "rock");
    this.addItem(589, 7, 0, "rock");
    this.addItem(590, 8, 0, "rock");
    this.addItem(594, 6, 0, "ore");
    this.addItem(595, 7, 0, "ore");
    this.addItem(596, 8, 0, "ore");
    this.addItem(600, 6, 0, "fiber");
    this.addItem(601, 7, 0, "fiber");
    this.addItem(602, 8, 0, "fiber");
    this.addItem(616, 5, 4, "droneicon");
    this.addItem(617, 6, 4, "droneicon");
    this.addItem(618, 7, 4, "droneicon");
    this.addItem(619, 3, 4, "droneicon");
    this.addItem(654, 1, 0, "fiber");
    this.addItem(655, 1, 0, "fiber");
    this.addItem(656, 1, 0, "fiber");
    this.addItem(657, 1, 0, "fiber");
    this.addItem(680, 6, 3, "droneicon");
    this.addItem(681, 5, 3, "droneicon");
    // this.addItem(738, 3, 3, 'rabble');
    // this.addItem(740, 6, 3, 'rabble');
    // this.addItem(765, 3, 3, 'keen');
    // this.addItem(767, 6, 3, 'keen');
    // this.addItem(792, 3, 3, 'pyromaniac');
    // this.addItem(794, 6, 3, 'pyromaniac');
    this.addItem(806, 1, 1, "hide");
    this.addItem(807, 1, 1, "hide");
    this.addItem(808, 1, 1, "hide");
    this.addItem(809, 1, 1, "hide");
    this.addItem(810, 1, 1, "hide");
    this.addItem(811, 1, 1, "hide");
    this.addItem(812, 1, 1, "hide");
    this.addItem(813, 1, 1, "hide");
    this.addItem(814, 1, 1, "hide");
    this.addItem(817, 1, 1, "hide");
    this.addItem(819, 1, 1, "hide");
    // this.addItem(822, 6, 3, 'enforcer');
    this.addItem(824, 1, 1, "hide");
    this.addItem(825, 1, 1, "hide");
    this.addItem(826, 1, 1, "hide");
    this.addItem(828, 1, 1, "hide");
    this.addItem(829, 1, 1, "hide");
    this.addItem(832, 6, 3, "dungeon_0");
    this.addItem(835, 5, 3, "droneicon");
    this.addItem(836, 1, 1, "hide");
    this.addItem(837, 1, 1, "hide");
    this.addItem(838, 6, 3, "droneicon");
    this.addItem(839, 1, 1, "hide");
    this.addItem(840, 1, 1, "hide");
    this.addItem(843, 1, 1, "hide");
    this.addItem(844, 1, 1, "hide");
    this.addItem(846, 1, 1, "hide");
    this.addItem(847, 1, 1, "hide");
    this.addItem(848, 1, 1, "hide");
    // this.addItem(850, 6, 3, 'dungeon_0');
    // this.addItem(856, 6, 3, 'droneicon');
    // this.addItem(862, 3, 3, 'droneicon');
    // this.addItem(868, 6, 3, 'droneicon');
    // this.addItem(871, 5, 3, 'droneicon');
    // this.addItem(969, 3, 3, 'lieutenant');
    // this.addItem(971, 3, 3, 'lieutenant');
    // this.addItem(974, 3, 3, 'lieutenant');
    // this.addItem(975, 3, 3, 'lieutenant');
    // this.addItem(977, 6, 3, 'commander');
    // this.addItem(979, 3, 3, 'commander');
    // this.addItem(1009, 3, 3, 'suppression');
    // this.addItem(1010, 3, 3, 'suppression');
    // this.addItem(1011, 3, 3, 'suppression');
    // this.addItem(1017, 3, 3, 'masterof');
    // this.addItem(1018, 3, 3, 'masterof');
    // this.addItem(1019, 3, 3, 'masterof');
    // this.addItem(1049, 3, 3, 'ritual');
    // this.addItem(1050, 3, 3, 'ritual');
    // this.addItem(1051, 3, 3, 'ritual');
    // this.addItem(1057, 3, 3, 'mistress');
    // this.addItem(1058, 3, 3, 'mistress');
    // this.addItem(1059, 3, 3, 'mistress');
    // this.addItem(1073, 3, 3, 'chosenofmorgana');
    // this.addItem(1074, 3, 3, 'chosenofmorgana');
    // this.addItem(1075, 3, 3, 'chosenofmorgana');
    // this.addItem(1129, 6, 3, 'commander');
    // this.addItem(1146, 6, 3, 'lieutenant');
    // this.addItem(1147, 5, 3, 'commander');
    // this.addItem(1148, 8, 3, 'lieutenant');
    // this.addItem(1161, 6, 3, 'suppression');
    // this.addItem(1169, 6, 3, 'masterof');
    // this.addItem(1186, 6, 3, 'commander');
    // this.addItem(1188, 8, 3, 'commander');
    // this.addItem(1196, 8, 3, 'masterof');
    // this.addItem(1209, 6, 3, 'ritual');
    // this.addItem(1225, 6, 3, 'masterof');
    // this.addItem(1226, 7, 3, 'chosenofmorgana');
    // this.addItem(1227, 7, 3, 'ritual');
    // this.addItem(1230, 7, 3, 'chosenofmorgana');
    // this.addItem(1308, 7, 3, 'swordmaster');
    // this.addItem(1335, 7, 3, 'marksman ');
    // this.addItem(1336, 7, 3, 'nameless');
    // this.addItem(1371, 7, 3, 'cryomancer');
    // this.addItem(1389, 7, 3, 'lord');
    // this.addItem(1390, 8, 3, 'lord');
    this.addItem(1406, 6, 0, "ore");
    this.addItem(1414, 1, 1, "hide");
    // this.addItem(1460, 7, 3, 'swordmaster');
    // this.addItem(1484, 6, 3, 'swordmaster');
    // this.addItem(1485, 7, 3, 'lord');
    // this.addItem(1486, 6, 3, 'marksman');
    // this.addItem(1487, 7, 3, 'marksman');
    // this.addItem(1496, 7, 3, 'marksman');
    // this.addItem(1511, 6, 3, 'marksman');
    // this.addItem(1512, 7, 3, 'lord');
    // this.addItem(1521, 7, 3, 'marksman');
    // this.addItem(1522, 6, 3, 'mastercryomancer');
    // this.addItem(1523, 7, 3, 'cryomancer');
    // this.addItem(1524, 8, 3, 'cryomancer');
    // this.addItem(1526, 6, 3, 'lord');
    // this.addItem(1541, 7, 3, 'lord');
    // this.addItem(1545, 7, 3, 'lord');
    // this.addItem(1547, 6, 3, 'mastercryomancer');
    // this.addItem(1548, 7, 3, 'lord');
    // this.addItem(1549, 6, 3, 'nameless');
    // this.addItem(1550, 7, 3, 'nameless');
    // this.addItem(1555, 8, 3, 'nameless');
    // this.addItem(1559, 7, 3, 'lord');
    // this.addItem(1566, 7, 3, 'lord');
    // this.addItem(1574, 6, 3, 'nameless');
    // this.addItem(1575, 8, 3, 'lord');
    // this.addItem(1576, 8, 3, 'nameless');
    // this.addItem(1584, 7, 3, 'mastercryomancer');
    // this.addItem(1708, 5, 3, 'warrior');
    // this.addItem(1713, 5, 3, 'leader');
    // this.addItem(1714, 5, 3, 'maiden');
    // this.addItem(1716, 5, 3, 'graybeard');
    // this.addItem(1717, 5, 3, 'grandfather');
    // this.addItem(1720, 5, 3, 'elder');
    // this.addItem(1721, 5, 3, 'druid');
    // this.addItem(1860, 5, 3, 'chief');
    // this.addItem(1861, 5, 3, 'warrior');
    // this.addItem(1865, 5, 3, 'leader');
    // this.addItem(1866, 5, 3, 'leader');
    // this.addItem(1869, 5, 3, 'druid');
    // this.addItem(1872, 5, 3, 'druid');
    // this.addItem(1885, 5, 3, 'chief');
    // this.addItem(1890, 5, 3, 'maiden');
    // this.addItem(1891, 5, 3, 'leader');
    // this.addItem(1893, 5, 3, 'chief');
    // this.addItem(2646, 7, 3, 'nameless');
    // this.addItem(2653, 6, 3, 'lord');
  }
}
