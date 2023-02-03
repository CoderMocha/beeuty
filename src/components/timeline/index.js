import BeeTimeline from './timeline.vue';
import BeeTimelineItem from './timeline-item.vue';
BeeTimeline.Item = BeeTimelineItem;

BeeTimeline.install = (Vue) => {
	Vue.component(BeeTimeline.name, BeeTimeline);
};

export default BeeTimeline;
