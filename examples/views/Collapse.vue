<template>
	<div>
		<bee-h2>Collapse</bee-h2>
		<bee-row :gutter="16">
			<bee-col :span="12">
				<bee-card title="Basic">
					<bee-collapse>
						<bee-collapse-pane name="1" title="史蒂夫·乔布斯">
							斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
							Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
							Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
						</bee-collapse-pane>
						<bee-collapse-pane name="2" title="乔纳森·伊夫">
							乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
						</bee-collapse-pane>
					</bee-collapse>
				</bee-card>
			</bee-col>
			<bee-col :span="12">
				<bee-card title="Accordion">
					<bee-collapse accordion>
						<bee-collapse-pane name="1" title="史蒂夫·乔布斯">
							斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
							Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
							Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
						</bee-collapse-pane>
						<bee-collapse-pane name="2" title="乔纳森·伊夫">
							乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
						</bee-collapse-pane>
					</bee-collapse>
				</bee-card>
			</bee-col>
		</bee-row>
	</div>
</template>

<script>
export default {
	name: 'Collapse',
};
</script>

<style lang="scss" scoped></style>
