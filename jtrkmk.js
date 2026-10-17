外链999!wailian999！

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163peylkxoo.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163qpuanejb.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163sikbpmkr.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163opnhynwz.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163vklkjkih.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163fkduchwf.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163ogpighwn.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163ximnjpdh.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163csfeckze.html

composer require psr/container
来源：http://www.xuanzx.com/163wdnqyxkq.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163awoswequ.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163iqzhrcap.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163tozcisyp.html

composer require twig/twig
来源：http://www.xuanzx.com/163swwutixq.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163caheacmk.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163rcilviyy.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163zypsyxes.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163ogildhuf.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163wynewtiw.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163ddjrbiys.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163wpkklsnc.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163cqtemnkq.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163kaarzkbq.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163dpipgnft.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163vstnzsro.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163ffverjpp.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163gofzgugc.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163tdnfkllm.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163gkfhresj.html

a?.b?.c
来源：http://www.sxryk.cn/163wlcdpjyr.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163yvqtooiv.html

a ?? b
来源：http://www.sxryk.cn/163jhhrziwe.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163rgxtxqkq.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163sgrdgsth.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163fuedgwbl.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163apwtvfio.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163lvjcuqnx.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163xefucxhd.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163olyldtdu.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163khxxbicv.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163flupozrt.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163ylsysadd.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163aqzksjst.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163cbhnvhkm.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163jkuraqli.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163oohjyglo.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163elrhxudr.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163qkxhjtyo.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163hsyhwtid.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163kvrxzzrp.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163evulcrar.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ogstqvjn.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163dqistovm.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163kpgnueyq.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163utyumiha.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163isaxotre.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163rztalzjs.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163gqxnvixp.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163qyozdaol.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163bytqwukd.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163dcfylmbu.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163blwptqwu.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163knlpqmrk.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163hjmkkben.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163msvlgair.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163gcuwhqvn.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163oktuqers.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ehtlzoch.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163ueeyqsjn.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163vauiwbmx.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163hzkgjqof.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163qernjtuc.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163nrxwwcnr.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163mfodkqvx.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163qspqaytz.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163gtexrrlk.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163rrxpimcz.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163uyoxyroa.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163iyzmaqtz.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163wlbgpyqw.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163difsoenu.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163nbmrulfi.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163wmtxhejk.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163yylmgjbj.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163qfaeznsu.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vwebzfcg.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163jcnugnsn.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163povxaohp.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163mypjmomz.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163imcmvdfu.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163yqypqyao.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163utiuddjw.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163fknxrumh.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163bsauwqbj.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163qkggjner.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163brkcvtcg.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163jireubdd.html

npx vite build
来源：http://www.sxryk.cn/163epeudkxo.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163wwdrhlhq.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163zmnkopam.html

================================================================================
来源：http://www.aibaodan.cn/163svsildjc.html

统计汇总
来源：http://www.aibaodan.cn/163jsqgbcit.html

================================================================================
来源：http://www.sxryk.cn/163wttsfjfu.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163ruhqkwgq.html

Python ......... 252
来源：http://www.aibaodan.cn/163axymdtbg.html

PHP ............ 252
来源：http://www.xuanzx.com/163vpvohwqi.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163qmadnziu.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163czmvgwlr.html

Java ........... 212
来源：http://www.sxryk.cn/163qxpyrmdb.html

Go ............. 212
来源：http://www.sxryk.cn/163ewnicskf.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163abydsmrt.html

C# ............. 212
来源：http://www.xuanzx.com/163fbodgpdi.html

C .............. 30
来源：http://www.xuanzx.com/163jkaavkww.html

C++ ............ 30
来源：http://www.xuanzx.com/163umxnwncx.html

SQL ............ 90
来源：http://www.xuanzx.com/163wkiyxwei.html

Bash ........... 80
来源：http://www.sxryk.cn/163skqkokjh.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163xighenxo.html

Swift .......... 15
来源：http://www.sxryk.cn/163mxfemkbs.html

Lua ............ 10
来源：http://www.aibaodan.cn/163zkcmqpoz.html

Perl ........... 10
来源：http://www.xuanzx.com/163cdwmqxya.html

Scala .......... 10
来源：http://www.aibaodan.cn/163eacjyfvk.html

------------------------------------
来源：http://www.aibaodan.cn/163jrfbmntr.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163vkghcdfr.html

按章节统计：
来源：http://www.aibaodan.cn/163gzyreeef.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163vbmxcokw.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163rrhlwknr.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163tbmtyleq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163zlshqodm.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163jdiojutw.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163fdvapbky.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163azauaoun.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163qbubkpzu.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163klltkqjk.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163zsmonulc.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163rwvywuuf.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163irdknniw.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163vujtnirn.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163jyilkmnh.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163bpcykudj.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163eqgzsqcj.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163uhhdftap.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163uzdtqpci.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163riobrqea.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163vdhzgwoj.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163pyxaeegl.html

------------------------------------
来源：http://www.aibaodan.cn/163pvrdotpx.html

合计                                  2106 条
来源：http://www.sxryk.cn/163lydalswe.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ssletslv.html

使用提醒
来源：http://www.sxryk.cn/163jpykirbs.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163grhfnpiw.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163iuryrmqb.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163cgswteuv.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163uaodoitu.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163sferniyg.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163dabzjfer.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163alkrqoqk.html

================================================================================
来源：http://www.sxryk.cn/163oyaftbyg.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163dwdpoopg.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163chxrtszr.html

================================================================================
来源：http://www.aibaodan.cn/163gtxlfesy.html

【收录内容】
来源：http://www.xuanzx.com/163cjrdagdq.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163srsbfbtf.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163wjuaasnv.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163yrwheexd.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163wfsoamzj.html

【使用说明】
来源：http://www.xuanzx.com/163izaltpop.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163meqdlkwv.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163cpsdhxrs.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163rsijonsu.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163apsjwovr.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163ybrutcqg.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163umwslxbz.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163neuthcum.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163yxirpzxu.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163ridhhzqd.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163nortgvlw.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163afbspcqc.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163jgcpzrhw.html

【文件统计】
来源：http://www.xuanzx.com/163sbqddegi.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163klroaxwi.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163kmfbjrfa.html

目  录
来源：http://www.sxryk.cn/163gkaxqklf.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163jxvfrzrv.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163unzwymdz.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163izkqzaot.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163oraiqwof.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163crdbvgcm.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163teppyvvb.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163cgkwfouh.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163jnrmgaph.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163gzhqomdq.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163chakytvi.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163gafgmtwd.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163zjapvddl.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163prouwabf.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163oqdfintc.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163kwwtcmoc.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163nwxctfsx.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163pphmrcri.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163bzkgriey.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163biouaakf.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163rdxcmcwj.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163sydrqoax.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163xqzofisb.html

================================================================================
来源：http://www.xuanzx.com/163lsptyeqw.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163ezapqdsk.html

================================================================================
来源：http://www.sxryk.cn/163sylvaaze.html

[A01] Hello World
来源：http://www.sxryk.cn/163yugibwbo.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163cfcajpho.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163hayisrju.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163gitseemw.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163pbqrspcy.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163gditvkyy.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163qgelrxeh.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163nhlzyuwz.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163wfkerfvu.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163ufsubkrn.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163izebjqss.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163tmrbksap.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163vwjrovlx.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163eqlarbgt.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163qbygphpn.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163xbgvjjti.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163etmlbcro.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163htuwclhs.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163xmyrwgts.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163fyhwpegq.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163fxoyqxgd.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163tgravoyj.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163mqwfraki.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163nahphybj.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163vlqaguuj.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163sjqtnttj.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163kofkrfxk.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163deaefofu.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163nwocomuj.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163bmehykxk.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163dexugiza.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163xquyxaxl.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163zuoyjwfr.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163uhureugw.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163xndqqhmn.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163gqfeayot.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163wyfzrxxq.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163dakjxdqy.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163uprewatg.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163yynyiuqr.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163ivafemhh.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163prmmaxky.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163jekfkpzm.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163qpwfiaup.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163trireopm.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163ezbkcmad.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163ftinytml.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163fgtohvau.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163semaxvlv.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163lpvignso.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163cctpmkan.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163pvkashse.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163thdngjwe.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163ojyiqmht.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163kflblhxj.html

Py:   str(42)
来源：http://www.aibaodan.cn/163sphbansn.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163bjjimkze.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163fqezfmnl.html

TS:   String(42)
来源：http://www.aibaodan.cn/163vitfeuws.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163jliriiei.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163cpekgiod.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163fultlgvb.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163aattegiy.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163hltfdvgv.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163tkgnjnct.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163tiodzehj.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163wjtkmmzx.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163trfijgzb.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163upxbwadj.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163jfudopzo.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163udrlzfia.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163afrcrrrh.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163mszrjynq.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163ykvzghoj.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163aoscfibx.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163mgwmecfk.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163eenryyah.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163wakxycpn.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163pjziimcy.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163jlhityky.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163rrwjkbjx.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163jxgdgfso.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163zacfjvxn.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163jrixyzyx.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163wyeztfyd.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163whuyeelu.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163jjvarmde.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163tfrqlilu.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163eyckmyry.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163jomktats.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163lkdpdnwa.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163pdwzoepr.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qzkwpkwn.html


<!-- 参考信息 -->