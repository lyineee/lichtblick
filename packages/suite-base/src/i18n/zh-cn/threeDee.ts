// SPDX-FileCopyrightText: Copyright (C) 2023-2024 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

export const threeDee = {
  // 通用
  color: "颜色",
  colorMode: "颜色模式",
  frame: "框架",
  lineWidth: "线宽",
  position: "位置",
  reset: "重置",
  rotation: "旋转",
  scale: "缩放",
  gradient: "渐变",
  type: "类型",
  topic: "话题",

  // 框架
  age: "年龄",
  axisScale: "轴缩放",
  displayFrame: "显示框架",
  displayFrameHelp:
    "放置相机的坐标框架。相机的位置和方向将相对于此框架的原点。",
  editable: "可编辑",
  enablePreloading: "启用预加载",
  fixed: "固定",
  followMode: "跟随模式",
  followModeHelp: "在播放期间更改相机行为以跟随显示框架或不跟随。",
  frameNotFound: "框架 {{frameId}} 未找到",
  hideAll: "全部隐藏",
  historySize: "历史大小",
  labels: "标签",
  labelSize: "标签大小",
  lineColor: "线条颜色",
  noCoordinateFramesFound: "未找到坐标框架",
  parent: "父级",
  pose: "姿态",
  rotationOffset: "旋转偏移",
  settings: "设置",
  showAll: "显示全部",
  transforms: "变换",
  translation: "平移",
  translationOffset: "平移偏移",

  // 场景
  background: "背景",
  debugPicking: "调试选择",
  ignoreColladaUpAxis: "忽略 COLLADA <up_axis>",
  ignoreColladaUpAxisHelp:
    "通过忽略 COLLADA 文件中的 <up_axis> 标签来匹配 rviz 的行为",
  labelScale: "标签缩放",
  labelScaleHelp: "应用于所有标签的缩放因子",
  meshUpAxis: "网格上轴",
  meshUpAxisHelp: "加载没有方向信息的网格（STL 和 OBJ）时使用的“上”方向",
  renderStats: "渲染统计",
  scene: "场景",
  takeEffectAfterReboot: "此设置需要重启才能生效",
  YUp: "Y轴向上",
  ZUp: "Z轴向上",

  // 相机
  distance: "距离",
  far: "远",
  fovy: "Y轴视场",
  near: "近",
  perspective: "透视",
  phi: "Phi",
  planarProjectionFactor: "平面投影因子",
  syncCamera: "同步相机",
  syncCameraHelp: "与其他也启用此设置的面板同步相机。",
  target: "目标",
  theta: "Theta",
  view: "视图",

  // 话题
  topics: "话题",

  // 自定义图层
  addGrid: "添加网格",
  addURDF: "添加 URDF",
  customLayers: "自定义图层",
  delete: "删除",
  divisions: "分割",
  grid: "网格",
  size: "大小",

  // 图像注释
  imageAnnotations: "图像注释",
  resetView: "重置视图",

  // 图像
  cameraInfo: "相机信息",

  // 占用网格
  colorModeCustom: "自定义",
  colorModeRaw: "原始",
  colorModeRvizCostmap: "成本地图",
  colorModeRvizMap: "地图",
  frameLock: "框架锁定",
  invalidColor: "无效颜色",
  maxColor: "最大颜色",
  minColor: "最小颜色",
  unknownColor: "未知颜色",

  // 点扩展工具
  decayTime: "衰减时间",
  decayTimeDefaultZeroSeconds: "0 秒",
  pointShape: "点形状",
  pointShapeCircle: "圆形",
  pointShapeSquare: "方形",
  pointSize: "点大小",

  // 颜色模式
  colorBy: "按颜色",
  colorModeBgraPacked: "BGRA（打包）",
  colorModeBgrPacked: "BGR（打包）",
  colorModeColorMap: "颜色映射",
  colorModeFlat: "平面",
  colorModeRgbaSeparateFields: "RGBA（分开字段）",
  ColorFieldComputedDistance: "距离（自动）",
  flatColor: "平面颜色",
  opacity: "不透明度",
  valueMax: "最大值",
  valueMin: "最小值",

  // 标记
  selectionVariable: "选择变量",
  selectionVariableHelp: "选择标记时，此全局变量将设置为标记 ID",
  showOutline: "显示轮廓",

  // 姿态
  covariance: "协方差",
  covarianceColor: "协方差颜色",
  poseDisplayTypeArrow: "箭头",
  poseDisplayTypeAxis: "轴",
  poseDisplayTypeLine: "线",

  // 发布
  publish: "发布话题",
  publishTopicHelp: "发布的话题",
  publishTypeHelp: "在场景中点击时发布的消息类型",
  publishTypePoint: "点（geometry_msgs/Point）",
  publishTypePose: "姿态（geometry_msgs/PoseStamped）",
  publishTypePoseEstimate:
    "姿态估计（geometry_msgs/PoseWithCovarianceStamped）",
  thetaDeviation: "Theta 偏差",
  thetaDeviationHelp: "与姿态估计一起发布的 Theta 标准偏差",
  xDeviation: "X 偏差",
  xDeviationHelp: "与姿态估计一起发布的 X 标准偏差",
  yDeviation: "Y 偏差",
  yDeviationHelp: "与姿态估计一起发布的 Y 标准偏差",

  // HUD 项目和空状态
  noImageTopicsAvailable: "没有可用的图像话题。",
  imageTopicDNE: "图像话题不存在。",
  calibrationTopicDNE: "校准话题不存在。",
  imageAndCalibrationDNE: "图像和校准话题不存在。",
  waitingForCalibrationAndImages: "等待消息…",
  waitingForCalibration: "等待校准消息…",
  waitingForImages: "等待图像消息…",
  waitingForSyncAnnotations: "等待同步注释…",
};
