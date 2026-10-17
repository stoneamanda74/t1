外链999!wailian999！

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163olajpaos.html

composer require twig/twig
来源：http://www.aibaodan.cn/163qaqkzwml.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163jxchmbqx.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163kpovckvh.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163kykgcuxs.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163tndgmfdr.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163zqxopdxu.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163liksgbol.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163updncokj.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163jyuujhlb.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163dygwfwgm.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163bedlwowz.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163yxycwesy.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163hkaioslf.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163bkgswolp.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163qtsxqlpu.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163rntfswop.html

a?.b?.c
来源：http://www.aibaodan.cn/163ahyfbtdh.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163obtgmdrf.html

a ?? b
来源：http://www.xuanzx.com/163xeesjtal.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163bagdwsjo.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163nplhsoou.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163ewhsdeed.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163psjmtybp.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163qlbwzytu.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163hnmlwwgn.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163jqozvnac.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163refwhwzd.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163ttqikenn.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163nymxggfg.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163fggkveio.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163ijphsvca.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163flqfuaad.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163pmbuwrus.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163xmxhzosn.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163reltjihc.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163pzwosrfo.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163ccfczezt.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163iuhjougx.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ydajdbho.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163msfusync.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163layifvof.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163xebbthxi.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163qxhqjwtt.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163domfjmhq.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163fehzqwwz.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163jqbznlcu.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163jjfianag.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163qburhhpd.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163lwtycfbn.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163apdkfnvf.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163cigscrgb.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163hynnaknu.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163kffocxgx.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163kzjhgsbv.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163fdgzvjes.html

[U105] JS：节流
来源：http://www.sxryk.cn/163pkwezbte.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163sckexpov.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163qmzilncu.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163npnsjwkx.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163pakzbmpj.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163fygyjyoc.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163iisremyb.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163tvcovwnn.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163slwtoqlc.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163uevichrw.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163fawaqoph.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163dtuhlskh.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163cfvftagn.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163cqmsoksf.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163hjalgdbd.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163xqqrktau.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163xrzgjvoy.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163uagzhxfs.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163gkihcibe.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ladzzuqq.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163ihshfzdc.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163cnkpoisw.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163hbgojxtd.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163jfrpfprh.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163kfglmvvs.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163lawrgant.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163fggygpkz.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163wsdlwjzd.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163dgmmklio.html

npx vite build
来源：http://www.sxryk.cn/163bxelhytr.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163faufpidd.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163tsturwzq.html

================================================================================
来源：http://www.aibaodan.cn/163jufttnzh.html

统计汇总
来源：http://www.xuanzx.com/163hwylrvux.html

================================================================================
来源：http://www.sxryk.cn/163bzslqtsf.html

按语言统计（条）：
来源：http://www.xuanzx.com/163qhjhunbv.html

Python ......... 252
来源：http://www.sxryk.cn/163trivgyby.html

PHP ............ 252
来源：http://www.sxryk.cn/163muagmxuc.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163epgftfrp.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163oltaadnh.html

Java ........... 212
来源：http://www.aibaodan.cn/163tshvpjjb.html

Go ............. 212
来源：http://www.aibaodan.cn/163czzklltq.html

Ruby ........... 212
来源：http://www.xuanzx.com/163xctlvfwh.html

C# ............. 212
来源：http://www.xuanzx.com/163atgcpjtq.html

C .............. 30
来源：http://www.sxryk.cn/163jidknrkw.html

C++ ............ 30
来源：http://www.aibaodan.cn/163xfzovvve.html

SQL ............ 90
来源：http://www.sxryk.cn/163mtlxkdxp.html

Bash ........... 80
来源：http://www.xuanzx.com/163wvzkywtg.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163xngmytke.html

Swift .......... 15
来源：http://www.aibaodan.cn/163qbvaupsv.html

Lua ............ 10
来源：http://www.xuanzx.com/163loqbtgfb.html

Perl ........... 10
来源：http://www.aibaodan.cn/163vudrgegl.html

Scala .......... 10
来源：http://www.sxryk.cn/163azaqwohw.html

------------------------------------
来源：http://www.xuanzx.com/163kqpztghu.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163ubatcvqy.html

按章节统计：
来源：http://www.aibaodan.cn/163akrdqszn.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163uhstcajb.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zryojcie.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163cyhrtraf.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163kehhixvw.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163tnfumofg.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163khtedqyp.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163srynizad.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163bxdjnbhn.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163geksgeuc.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ggewylai.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163nvejmpox.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163fdpevowb.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163vdfafczu.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163ydkjtgdi.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163qwjosstf.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163hudriovb.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163ejvivfek.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163mihaberl.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163rowjpgjz.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163rtewauzd.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163revoxgnr.html

------------------------------------
来源：http://www.sxryk.cn/163itrxcrbv.html

合计                                  2106 条
来源：http://www.xuanzx.com/163besnrymt.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163lkstyjjf.html

使用提醒
来源：http://www.sxryk.cn/163tuhutmbp.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163pvypnjwl.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163rngrejys.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163cmgovvrq.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163egfcblhs.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163vchdurcz.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163gbmktkbm.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163lpnmtagq.html

================================================================================
来源：http://www.xuanzx.com/163qdnmnpba.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163vuylqjih.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163rcnqobhv.html

================================================================================
来源：http://www.xuanzx.com/163zjwrcmol.html

【收录内容】
来源：http://www.aibaodan.cn/163lrharljz.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163clcqxcww.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163qqunbvog.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163rmiqkgjt.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163mlcomier.html

【使用说明】
来源：http://www.xuanzx.com/163oeiuiufz.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163fegkyznf.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163qzutibpp.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163aweknmxy.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163fsqrzppu.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163nqhaptff.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163ntzwaych.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163fsulskhp.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163juikdvwt.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163uuzpraes.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163mylcyeif.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163kktcrtlv.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163wikoqzik.html

【文件统计】
来源：http://www.sxryk.cn/163qqtvyrgd.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163qglbawma.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163hnidpuqf.html

目  录
来源：http://www.sxryk.cn/163dggrxhxy.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163dtitelcw.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163piagwlfn.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163dyljhqkf.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163dzwtvzsk.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163perpenfb.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163jksxqchu.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163onugxdpe.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163irxfmwai.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ajzircvn.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163uzycvwzx.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163bhionkme.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163pkskafaw.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163fzspkmud.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163eyvlvrui.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163qmqelezi.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163ketnprms.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163nyevacjt.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163jmasulrh.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163nugjukqh.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163lyfojgvm.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ampxyxti.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163nbksbiwr.html

================================================================================
来源：http://www.xuanzx.com/163giojbiul.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163jogvkrqp.html

================================================================================
来源：http://www.xuanzx.com/163rsyhtlvw.html

[A01] Hello World
来源：http://www.sxryk.cn/163vnbgmxqv.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163fxtuxsxs.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163rwnugosi.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163qlmgnghp.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163ofcezqhn.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163pwjbpudv.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163tvxmjnez.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163hqgtjhet.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163ujaaczot.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163saybgjvr.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163tstfkgsp.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163bmmubtow.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163mqlmqygd.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163fnbobvua.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163pzmfqwkw.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163tcnpfbqt.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163wmghisai.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ixvydmmb.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163ufpqmznw.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163kusalcoy.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163gqgwzfse.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163oylnpuft.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163zawmocjp.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163nydzdogf.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163fwymizey.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163dtyzonhj.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163yrezgimu.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163urhpuazz.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163gnavxtqd.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163stevodkv.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163skxzklnz.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163uztjjhqg.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163fldgfppd.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163powpddny.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163vrudjcij.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163jqfhompg.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163vpmowrlg.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163rkdhxouv.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163nxfdfrqd.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163odbobhur.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163ewpqtggd.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163igzrdjob.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163clhqseiy.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163drrwmxnb.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163bpcaaggl.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163nkjitevw.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163nshiydxy.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163ffeqscih.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163rjxtuftk.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163fqzaaqco.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163ykewsqvw.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163yauqrmyi.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163twufwobp.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163hlhzzjpg.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163wviwztfz.html

Py:   str(42)
来源：http://www.xuanzx.com/163lwdiainu.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163nvablzvb.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163dtdtfbkc.html

TS:   String(42)
来源：http://www.xuanzx.com/163dgecextf.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163lykkwbhi.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163koxuiwkd.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163aphiqtyh.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163zwjknqig.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163fwpcyevj.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163kssvfiqc.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163whztjlen.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163xkofcsnw.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163kgwimngv.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163qvdvsdzb.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163pfezypxn.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163psoznhef.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163kubznmxj.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163rdvwxyxw.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163aesmawlf.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163xiulcrgr.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163tpmtixlx.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163ucfbclzi.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163gkeksslw.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163nikoxmso.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163wxemibtd.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163rzibizme.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163pgwollrw.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163laesvigy.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163thqimgem.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163pmdylwur.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163unqcbufw.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163ntosjjgi.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163jfydrgzt.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163ztdrnsuj.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163kzkfpewl.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163ccoonxvm.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163nlqmpykr.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163vzndogsz.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xvifbvlo.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xnziwnnc.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163uicucrnu.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163xxuqlwmn.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163orlxjvxq.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163qmnevdfg.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163yfkepdfv.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163oozdgcog.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163rzymaetj.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163slzqrhut.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163xjmzrpps.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163ktdfunut.html


<!-- 参考信息 -->