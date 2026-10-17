外链999!wailian999！

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163awxtnpkb.html

composer require psr/container
来源：http://www.aibaodan.cn/163feymztjl.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163nalhirwy.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163suemrgvm.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163lxeoowwc.html

composer require twig/twig
来源：http://www.aibaodan.cn/163hugpcfwb.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163fhhjlpbk.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163pyoqbvvn.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163zuwqnbtl.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163ddcdxpmh.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163rkkxzrrx.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163rdilssjk.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163detsxybl.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163bchbkjlh.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163zintneji.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163dyuexcus.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163snoilccf.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163qgycxeqb.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163swnswlhv.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163ohtbynzb.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163tfjutdzl.html

a?.b?.c
来源：http://www.aibaodan.cn/163hvboiwdc.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163qbvhpbgv.html

a ?? b
来源：http://www.aibaodan.cn/163ceugglyz.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163nngjwnqf.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163qsmypqci.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163xyeozovf.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163ipaudvrt.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163vaawbfrm.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163xjjpdmrb.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163roemuubv.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163mvzifeyc.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163cggfefmk.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163qpzklrkm.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163guvwigia.html

structuredClone(obj)
来源：http://www.xuanzx.com/163wgpebduh.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163rreejihx.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163uohbdlvj.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163cxzvfzhe.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163kyvayaye.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163xpwjbiyq.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163capbplvn.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163eyposamj.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163uabxqqrt.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163cxvznloo.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163agcnjujv.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163cistjifv.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163auprsrzo.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163aakntytt.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163cnyxvxqn.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163riiqqquv.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163tzlvejys.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163jiepellf.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163yxczjhdi.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163pjelqtgj.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163xyuilzxx.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163fbmrqtyd.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163zilkmvox.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163odmuybju.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163pgxejytn.html

[U105] JS：节流
来源：http://www.xuanzx.com/163wmslyfke.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163twqjkoia.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163twiohhxj.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163darowive.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163lahknlvz.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163kddyeasm.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163yimrsxis.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163mywavwxn.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163nreaorlu.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163umtahics.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163uakvhrwg.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163ttupvchw.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163hyvufuuq.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163vqbiokbc.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163rznqkaps.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163locfbbjn.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163hhrhrmsj.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163kyuyzmoi.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163quyjrhif.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163gahxyisy.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163pxtzqugd.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163pibmllfh.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163lthdyhtw.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163gncdlqji.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163icsdryfu.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163iiufxxpf.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163csjtuikv.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163ibsehkam.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163tolyqbeu.html

npx vite build
来源：http://www.aibaodan.cn/163vuooyxqd.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163icnssefc.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163biussxqk.html

================================================================================
来源：http://www.sxryk.cn/163husfywoq.html

统计汇总
来源：http://www.aibaodan.cn/163jznlokvz.html

================================================================================
来源：http://www.sxryk.cn/163yohvkeux.html

按语言统计（条）：
来源：http://www.xuanzx.com/163flqwmntp.html

Python ......... 252
来源：http://www.xuanzx.com/163gxhlbubz.html

PHP ............ 252
来源：http://www.aibaodan.cn/163vhdmyzfx.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163wshxycnn.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163pfnmgomq.html

Java ........... 212
来源：http://www.xuanzx.com/163cgipuvfv.html

Go ............. 212
来源：http://www.sxryk.cn/163rniwzsdw.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163kjjsnlgr.html

C# ............. 212
来源：http://www.xuanzx.com/163palfzgzm.html

C .............. 30
来源：http://www.aibaodan.cn/163pcxwbskr.html

C++ ............ 30
来源：http://www.sxryk.cn/163cfleqgnu.html

SQL ............ 90
来源：http://www.xuanzx.com/163ozttmjnt.html

Bash ........... 80
来源：http://www.aibaodan.cn/163eldhdlcb.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163banqhqgi.html

Swift .......... 15
来源：http://www.xuanzx.com/163hzvjtbgp.html

Lua ............ 10
来源：http://www.aibaodan.cn/163ndimqxqh.html

Perl ........... 10
来源：http://www.xuanzx.com/163tusjgivp.html

Scala .......... 10
来源：http://www.aibaodan.cn/163bgkplxdb.html

------------------------------------
来源：http://www.xuanzx.com/163raoaurbi.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163yefezwlw.html

按章节统计：
来源：http://www.xuanzx.com/163zrzccxcl.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ecadqrwz.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163crqhunxr.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163rhroftjq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163sweydbcn.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163erdzotaj.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163omdejdyu.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163jladgmsc.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163pbbdkbxf.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qfgdtsji.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ihhtqaxk.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163laqlhvkk.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163znqpuxra.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163fbrsjxsy.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163ssjkilcz.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163zuvcsllj.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ijnriuxq.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163nyouavkx.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163sehumxlg.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163ppbiykks.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163uawcpnzu.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163jdtmtxyg.html

------------------------------------
来源：http://www.sxryk.cn/163hashirxr.html

合计                                  2106 条
来源：http://www.xuanzx.com/163wbdbrosd.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163htmjjlss.html

使用提醒
来源：http://www.aibaodan.cn/163hwyppfhc.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163hzrsmbmb.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163zwcpzkip.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163meihsfsv.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163iuiqnlib.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163pnuyjqdb.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163pjqzchjx.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163bocmjezx.html

================================================================================
来源：http://www.aibaodan.cn/163xfcatstv.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163ewefzzkj.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163upyettvz.html

================================================================================
来源：http://www.aibaodan.cn/163bwfmtetp.html

【收录内容】
来源：http://www.sxryk.cn/163depzijgz.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163whrauhms.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163qldkhsap.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163iaqarhgx.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163pwmvsqqi.html

【使用说明】
来源：http://www.aibaodan.cn/163qebgliwj.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163ckzznbyo.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163vshpbdxd.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163jiwsrnmc.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163dlebqmik.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163rnkpozgb.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163ewivkiqw.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163hdgfdjnb.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163huyabksq.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163jbrpfqly.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163dsvhbejh.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163dxhmcgjx.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163mchjrxub.html

【文件统计】
来源：http://www.xuanzx.com/163lmaxgsfl.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163zfkdidod.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163fszfgudr.html

目  录
来源：http://www.sxryk.cn/163tiuidboe.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163tyxqjvfs.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163vkcuoylr.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163riijdspt.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163xdgzgprb.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163bjniudbw.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163tlsulxsg.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163zgtathbx.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163qvrjrxqx.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163wpklwlwq.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163fonpuuwf.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163jmffdmcq.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163kzcgnfer.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163fpmoblqq.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163iufwymeo.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163xqwvtvjc.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163ohpwwgdn.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163qkldfdna.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163nverlnos.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163lnuzjvqk.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163lucxlpce.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ltgdumpo.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163hqefxkvl.html

================================================================================
来源：http://www.sxryk.cn/163sxxzrolp.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163bwchcwoc.html

================================================================================
来源：http://www.aibaodan.cn/163pfaylrio.html

[A01] Hello World
来源：http://www.aibaodan.cn/163kueetmkl.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163rxbujpah.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163xprfygic.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163zrqajhsv.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163fcjjitfp.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163wrwhntax.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163csrdwwgs.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163glizxlgk.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163mlgcenpg.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163ufzwmemn.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163pctpceax.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163xpnoyvqi.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163ogkkhoaz.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163smcuaxsh.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163dzzrpxob.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163dyixpsll.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163jsqmjagd.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163xejblaje.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163ddslgqrl.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163vrqmzyaf.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163stpodxch.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163ugyaefti.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163udzpdmjh.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163kpqetgjn.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163rbofupnf.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163quqawdbx.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163arnopntq.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163fbuvobaa.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163whlehzes.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163dsswvzxj.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163kqhiqrua.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163qmzvcqpg.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163fskoontj.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163uihtdjug.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163kydvbzwm.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163lpejvmcc.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163gbgfoeek.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163tqaevgot.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163hthbgkdp.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163fwinsftb.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163tjpvikud.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163sevtutci.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163obtfspvs.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163kkuorzau.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163trqjenye.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163frqqtyna.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163xbvmyana.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163fnypjnmh.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163qymtswtn.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163yubygexu.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163mnjxmnhk.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163xokdvmii.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163cjadbtgh.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163ekmwtqbw.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163szuwfaad.html

Py:   str(42)
来源：http://www.aibaodan.cn/163orstmblo.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163mbxefpcd.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163vzoewfiy.html

TS:   String(42)
来源：http://www.sxryk.cn/163wzhpeobs.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163geimwbqr.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163rixvwjoj.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163mdfwzsyp.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163ujttqbbc.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163afwewczu.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163clfipcjz.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163icyyrtcj.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163iutlbihv.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163mlkyetlg.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163mylnwhip.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163tzkdghnd.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163logghjjl.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163imhovjyg.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163lhybiauc.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163akgmfoqc.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163hrbbupov.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163ohxiiswy.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163dhmraltm.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163tnvsekws.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163pgfawopp.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163nqwmkvxm.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163jptjpukp.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163hshvduor.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163zmradxab.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163dbmabgai.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163fotiisqv.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163fckuqhlt.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163dgktnfnz.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163uxehuhcr.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163gyejkxhe.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163vnztxdqs.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163zfsldzxq.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163vqxkmest.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163sjdkfcui.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163bjxjfkjt.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163xzizavzr.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ziegdsvh.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163dacqrmlv.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163jqxtohdb.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163caggyofi.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163ijxnqmit.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163fmfzmzcr.html


<!-- 参考信息 -->