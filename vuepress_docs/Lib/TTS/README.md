---
title: TTS文本转语音

language:
    - python
    - tts

categories:
    - python
    - lib

category:
    - python
    - tts

tags:
    - tts
    - lib
description: TTS 文本转语音
---

## cosyvoice2

> [cosyvoice2 官网](https://funaudiollm.github.io/cosyvoice2/)

CosyVoice 2.0正式发布！相比1.0版本，新版本语音生成更准确、更稳定、更快速、功能更强大。

#### 多种语言
支持语言：中文、英文、日语、韩语、中国方言（粤语、四川话、上海话、天津话、武汉话等）
跨语言和混合语言：支持跨语言和代码切换场景的零样本语音克隆。
#### 超低延迟
双向流支持：CosyVoice 2.0 集成了离线和流建模技术。
快速首包合成：实现低至 150 毫秒的延迟，同时保持高质量的音频输出。
#### 高精度
改进发音：与 CosyVoice 1.0 相比，发音错误减少了 30% 到 50%。
基准测试成果：在Seed-TTS评估集的硬测试集上取得最低的字符错误率。
#### 稳定性强
音色一致性：确保零样本和跨语言语音合成的可靠语音一致性。
跨语言合成：与 1.0 版本相比有显著的改进。
#### 自然体验
增强韵律和音质：改进了合成音频的对齐，将 MOS 评估分数从 5.4 提高到 5.53。
情感和方言灵活性：现在支持更细致的情感控制和口音调整。


## chattts
> [ChatTTS 官网](https://github.com/2noise/ChatTTS/blob/main/docs/cn/README.md)

> 对话式 TTS: ChatTTS 针对对话式任务进行了优化，能够实现自然且富有表现力的合成语音。它支持多个说话者，便于生成互动式对话。

> 精细的控制: 该模型可以预测和控制精细的韵律特征，包括笑声、停顿和插入语。

> 更好的韵律: ChatTTS 在韵律方面超越了大多数开源 TTS 模型。我们提供预训练模型以支持进一步的研究和开发。


## GPT-SoVITS-WebUI 
[MAC一键安装包](https://www.yuque.com/baicaigongchang1145haoyuangong/ib3g1e/dkxgpiy9zb96hob4#DsYEN)
[作者官网](https://www.yuque.com/baicaigongchang1145haoyuangong)
### 文字转语音,可以mac运行的,已经实验成功了

零样本文本到语音（TTS）： 输入 5 秒的声音样本，即刻体验文本到语音转换。

少样本 TTS： 仅需 1 分钟的训练数据即可微调模型，提升声音相似度和真实感。

跨语言支持： 支持与训练数据集不同语言的推理，目前支持英语、日语、韩语、粤语和中文。

WebUI 工具： 集成工具包括声音伴奏分离、自动训练集分割、中文自动语音识别(ASR)和文本标注，协助初学者创建训练数据集和 GPT/SoVITS 模型。


## RealtimeSTT

> [官网](https://github.com/KoljaB/RealtimeSTT)


RealtimeSTT 语音转文字
是开源的实时语音转文本库，专为低延迟应用设计。

有强大的语音活动检测功能，可自动识别说话的开始与结束，通过WebRTCVAD和SileroVAD进行精准检测。

同时支持唤醒词激活，借助PorcupineOpenWakeWord检测特定唤醒词来启动。核心转录功能由Faster Whisper实现，可将语音实时转换为文本，适用于语音助手、实时字幕等场景，为开发者提供了一种高效、易用的语音转文本解决方案，助力打造流畅的语音交互体验。


## FunASR

> [官网](https://github.com/modelscope/FunASR)

FunASR 语音转文字

语音识别（ASR）：支持多种预训练模型的推理和微调，提供高精度和高效能。

语音端点检测（VAD）：自动检测语音片段的开始和结束，提高识别效率。

标点恢复：为识别结果添加标点符号，提升可读性。

语言模型：优化识别结果，适应不同语境。

说话人验证与分离：确认说话人身份，分离多说话人语音。

多人对话语音识别：在复杂语音环境中精准识别。