# Tooltip

```
marker.bindTooltip("my tooltip text").openTooltip();

```
Note about tooltip offset. Leaflet takes two options in consideration for computing tooltip offsetting:

the offset Tooltip option: it defaults to [0, 0], and it's specific to one tooltip. Add a positive x offset to move the tooltip to the right, and a positive y offset to move it to the bottom. Negatives will move to the left and top.
the tooltipAnchor Icon option: this will only be considered for Marker. You should adapt this value if you use a custom icon.

>关于工具提示偏移的注意事项。 Leaflet在计算工具提示偏移时考虑了两个选项：
 offset工具提示选项：默认为[0，0]，且特定于一个工具提示。 添加一个正x偏移量以将工具提示向右移动，并添加一个正y偏移量以将其移动到底部。 负数将移至左侧和顶部。
 tooltipAnchor图标选项：仅适用于标记。 如果使用自定义图标，则应调整此值。

## Options

- offset
- direction
- permanent:Whether to open the tooltip permanently or only on mouseover.
  > 不消失
- sticky: If true, the tooltip will follow the mouse instead of being fixed at the feature center.
  > 按照鼠标计算位置