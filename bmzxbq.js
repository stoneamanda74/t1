外链999!wailian999！

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163iipjthyd.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163gxmfulkk.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163ztkrlsrg.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163viindvjo.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163neavosfm.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163pimraznz.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163wlajpifx.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163dtmpvjuu.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163qfnrolma.html

composer require psr/container
来源：http://www.sxryk.cn/163ahxdnasm.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163jskqhbta.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163ddgcknta.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163jslhlltb.html

composer require twig/twig
来源：http://www.aibaodan.cn/163zthihkfw.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163suajvqai.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163bfewplzj.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163stbdhypn.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163nhflweyr.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163nagdenva.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163zmcdtyij.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163boczcsch.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163zkgnvymc.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163eslqqorq.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163dioznlgf.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163rpoopary.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163wgplirhy.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163hhbdzjly.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163utvsnupt.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163vppyrqvh.html

a?.b?.c
来源：http://www.sxryk.cn/163rlmvmjnb.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163fjjbsmnk.html

a ?? b
来源：http://www.xuanzx.com/163uczvmwej.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163bypwefqv.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163kvndnslt.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163jmufgfih.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163rlyzsxxg.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163tgnpdmsn.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163vultfkzp.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163aerfcdjb.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163uiozmggk.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163zlcvfiol.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163zcsvxyxo.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163retxqmuq.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163aogghaso.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163rzdlqrtk.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163pxlsdxxr.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163lfefcrtl.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163sarpntze.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163valmzkac.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163rljyhyvr.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163xgpktene.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163tqmldolf.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163xwnuiyii.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163tunfkhep.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163bdnfheho.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163twpmzlhw.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163ysvrxbww.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163yzaaceja.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163xmruzpwv.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163amdmbtpa.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163czlmjyzr.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163gandgwsh.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163eqzullpz.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163rdavmcop.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163vhetfhqr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163onlvjacx.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163jtjnardy.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ucsjjijq.html

[U105] JS：节流
来源：http://www.xuanzx.com/163owgrrprs.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163wlxjpgqr.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163mbbntvbk.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163lhbpirrg.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163nqchztyn.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163etxblxne.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163ktkirznr.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163sfieusgo.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163hdcpgmju.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ipdebhrv.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163xofejliu.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163axwzfpfn.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163yhtueruf.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163vfwzpvxa.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163pegsfikd.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163jfvjxnzn.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163gyhdzkez.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mjnhvffz.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163pfhnjrqs.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163avygtsug.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163cipmidvv.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163fnheocmc.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163fxxmapxh.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163eiwhqczz.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163mfdmvrzj.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163qjtykurs.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163bzedtbsj.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163pwxexytq.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163tytfrcok.html

npx vite build
来源：http://www.xuanzx.com/163nixicprf.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163hugqusll.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163mezzymcd.html

================================================================================
来源：http://www.sxryk.cn/163rwyaseyx.html

统计汇总
来源：http://www.aibaodan.cn/163gpfbsnbj.html

================================================================================
来源：http://www.sxryk.cn/163rmelihwz.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163mqrdyafb.html

Python ......... 252
来源：http://www.aibaodan.cn/163oqyzhgya.html

PHP ............ 252
来源：http://www.aibaodan.cn/163gyooselt.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163mahholan.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163utoazlfa.html

Java ........... 212
来源：http://www.aibaodan.cn/163yodtnsma.html

Go ............. 212
来源：http://www.aibaodan.cn/163igddkgza.html

Ruby ........... 212
来源：http://www.sxryk.cn/163dtnfomrb.html

C# ............. 212
来源：http://www.aibaodan.cn/163fxatqjjk.html

C .............. 30
来源：http://www.xuanzx.com/163cdupxryv.html

C++ ............ 30
来源：http://www.sxryk.cn/163chkjiibo.html

SQL ............ 90
来源：http://www.sxryk.cn/163pzovqsbo.html

Bash ........... 80
来源：http://www.sxryk.cn/163rffqskoy.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163hpeyjuax.html

Swift .......... 15
来源：http://www.xuanzx.com/163kcqofqmx.html

Lua ............ 10
来源：http://www.aibaodan.cn/163invpoeqi.html

Perl ........... 10
来源：http://www.aibaodan.cn/163swzpmjhd.html

Scala .......... 10
来源：http://www.aibaodan.cn/163tkxbwjks.html

------------------------------------
来源：http://www.aibaodan.cn/163cduyquzx.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163hwfaqjry.html

按章节统计：
来源：http://www.sxryk.cn/163sfbveibn.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163vtrzhujp.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163isxsnspz.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163kgerhkje.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163jytbeeyk.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163ysldvphc.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163arhcbxqt.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ucirvmmw.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163eeynpabb.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163glxyehbk.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163hwbsfpxx.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163pcblillc.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163nbpjwcbn.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163xubqznqq.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163jjaqgnvn.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163mpectlks.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163fhigdbyu.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163dfeoungf.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163qndvkllm.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163qsmhjvck.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163bnrcmyam.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163campzara.html

------------------------------------
来源：http://www.aibaodan.cn/163dcouergd.html

合计                                  2106 条
来源：http://www.xuanzx.com/163wqdurdkk.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163qzkelzvr.html

使用提醒
来源：http://www.aibaodan.cn/163loeuwrcj.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163mnshhswt.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163rafpbvtl.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163rfndyemf.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163cqlbhzpo.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163kvtmttrv.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163ttlscuoh.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163aefvftpk.html

================================================================================
来源：http://www.sxryk.cn/163jardlylj.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163erbdqqca.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163txvqsuew.html

================================================================================
来源：http://www.sxryk.cn/163wgqpraag.html

【收录内容】
来源：http://www.xuanzx.com/163cjltudhg.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163qjmwfobr.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163ikfdxkwh.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163rprfsuiw.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163vixvmezf.html

【使用说明】
来源：http://www.sxryk.cn/163yufwpsig.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163ajkoyefh.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163yvzderhc.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163nfgyzznh.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163gdtmyypm.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163wizwtsjx.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163lovjbvzl.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163bbavfnjn.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163wnzdtdfy.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163wytumxbk.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163rwkcmmwx.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163dmihhiwb.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163kwscbtag.html

【文件统计】
来源：http://www.xuanzx.com/163xwltfszz.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163eobybcmc.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163fdwxdtyr.html

目  录
来源：http://www.aibaodan.cn/163jdnhteba.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163xmwqeqeq.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163rfwpmnwp.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163qbicfwgv.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163aicydoct.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163kcyztxxg.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163msqogdbw.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163xowjsesd.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163talcoiqg.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163nozhddxv.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163aqadcryb.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163rchterol.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163zssnxgrr.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163jjvswqvc.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ocdvwwds.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163wwevnruv.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163amsysvab.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163esocslkg.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163debnmvce.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163panboyal.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163bwrvujry.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163qvqvooku.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163dsvznbvo.html

================================================================================
来源：http://www.sxryk.cn/163wkeiugrm.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163qaxefyar.html

================================================================================
来源：http://www.aibaodan.cn/163smrezzws.html

[A01] Hello World
来源：http://www.xuanzx.com/163gdrbebtw.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163mzaoaafq.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163inhzmgtg.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163qjoffgrj.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163whhssjob.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163pdjowqxq.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163zkfnfraf.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163raeppirz.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163amytigmy.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163vslkwyzq.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163gkpnscam.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163peoosjql.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163ictumhql.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163hsmoarvb.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163rogcsijd.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163jujgtazb.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163nvfhnirn.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ecckdkfk.html

[A03] 常量定义
来源：http://www.xuanzx.com/163wicxhvya.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163bddbzxhg.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163xwnuckur.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163tgvsahny.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163umzbfrnv.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163fwbqfnjh.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163tquqtcyu.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163vuedmgne.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163phmsptst.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163dokzmfni.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163zrnjozxx.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163diurfckh.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163kbctvmxn.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163dilvmros.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163fmtceacm.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163sylrfqxh.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163kzgctfzi.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163eyldakdd.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163icycdsdf.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163gytohxmk.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163wqufpwhx.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163wiltyblt.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163hoxubjrb.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163evhzpfpb.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163fbvllode.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163hbnkhyag.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163qxcidgxa.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163hblowgge.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163ypegjfiz.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163hwqmokdb.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163piohiyta.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163uukqwrmk.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163jvstvgfv.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163dqwaetvs.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163zivtjetz.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163cgmerepz.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163njiojqxx.html

Py:   str(42)
来源：http://www.xuanzx.com/163dvrtacfk.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163rhgspugf.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163rpvxsqlm.html

TS:   String(42)
来源：http://www.sxryk.cn/163bewoepvw.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163kngnxshu.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163bfoaxeln.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163fkqkmtem.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163nwienflq.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163tbsyxmxv.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163jlsfdksj.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163debgajnb.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163cbswllca.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163gbezzqrh.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163fojorwvq.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163vlfcctbe.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163dusvvwrm.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163tybuzzya.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163toxdzylb.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163wuqutiys.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163mpezxnsc.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163czqfvkse.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163qcgyktgb.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163lqsrpmjk.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163cbitbyzi.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163sjeaqsed.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163gcwoadge.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163bkibzuop.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163ljymfwzx.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163wtunttfc.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163tdfjkupo.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163umugmwvw.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163tngdhmim.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163fiewsczv.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163gsbcnaot.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163utgzmrtu.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163icwvlskp.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163nuszbbox.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163qdugjfik.html


<!-- 参考信息 -->