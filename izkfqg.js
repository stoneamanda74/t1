外链999!wailian999！

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163yhydlefm.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163joionxez.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163tnvisfup.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163wjcxvpeu.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163ynatwfjo.html

a?.b?.c
来源：http://www.xuanzx.com/163yjcinzos.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163cmcutaac.html

a ?? b
来源：http://www.aibaodan.cn/163mpeuuwqc.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163cnfpcqts.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163obbfwafi.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163rlqdziqu.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163bnxoublk.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163uznlyvzy.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163oxuripcm.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163slrymbvo.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163qspgzebv.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163ptkegnkm.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163yddqpavq.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163bedbffkr.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163xdqsglwo.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163zkxuqloo.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163krbhemrg.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163uwqdouvj.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163lbvtvafe.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163emvisglm.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163wxywfhao.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163yqlwratv.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ioslnisj.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163nepycggp.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163jhcvohuz.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163oyzrqipf.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163jzqkdknd.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163unfkcgmb.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163ykpdbtjj.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163weiowxcx.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163tfbndaph.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163qcmjyjpc.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163vostxkpv.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163oxggsgzk.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163ncgrdtrr.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163jpkdllrh.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163yzpdkwfl.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163iizgxbfc.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hbwpbkim.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163dmjqkivm.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163qeahtwfg.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163shaehcxm.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163ivpeghgd.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163ifltwzgi.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163dmrybhqx.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163adqivbpn.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163tehywthn.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163aahbfpxm.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163osxkdyof.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163kispfbcm.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163orpsurbt.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163btqrjwmd.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163okgbxptp.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163yqplfrhu.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163knczovdt.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163fmllyifp.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163mptpremp.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163jhwqyjht.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163opqermxh.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163ycymmoqd.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163trecdjmf.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163hxogpkuj.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163krxbekzi.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163dgowdjmz.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163fdywcyiv.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163vdpzfiga.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163gfrtmjdc.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163zmfnqeix.html

npx vite build
来源：http://www.aibaodan.cn/163kajftvom.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163hxthgrrs.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163kzvfrtrn.html

================================================================================
来源：http://www.xuanzx.com/163dtuganeh.html

统计汇总
来源：http://www.sxryk.cn/163cxlmjlwf.html

================================================================================
来源：http://www.xuanzx.com/163zdxhydru.html

按语言统计（条）：
来源：http://www.sxryk.cn/163ggrwolhx.html

Python ......... 252
来源：http://www.sxryk.cn/163cklfuzbk.html

PHP ............ 252
来源：http://www.xuanzx.com/163jinxdlin.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163spqdiehc.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163xibhmgwh.html

Java ........... 212
来源：http://www.aibaodan.cn/163jqyshlnk.html

Go ............. 212
来源：http://www.sxryk.cn/163dkzoeevk.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163jbedovor.html

C# ............. 212
来源：http://www.aibaodan.cn/163bhhwtojn.html

C .............. 30
来源：http://www.aibaodan.cn/163ntuomrkw.html

C++ ............ 30
来源：http://www.sxryk.cn/163ditmakmy.html

SQL ............ 90
来源：http://www.xuanzx.com/163oyoahipf.html

Bash ........... 80
来源：http://www.xuanzx.com/163qxwlloyw.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163vfyumkkv.html

Swift .......... 15
来源：http://www.aibaodan.cn/163duzavjls.html

Lua ............ 10
来源：http://www.aibaodan.cn/163iqicntkx.html

Perl ........... 10
来源：http://www.xuanzx.com/163hiiqbxui.html

Scala .......... 10
来源：http://www.xuanzx.com/163hvxemhte.html

------------------------------------
来源：http://www.xuanzx.com/163rggdqnzj.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163nszvbhrs.html

按章节统计：
来源：http://www.xuanzx.com/163xhqzfgfr.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163miheqzgw.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ghhofjid.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163gxltuclk.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163xusuaaef.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163smxciqrf.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163guxruqhb.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163mjlgprxe.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163pcyjcmrn.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163uwtouibu.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163frfgfygc.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163yfrrwcsk.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jyxizjeo.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ddyfgpnu.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163ytycfhqt.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163knqqscpb.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qoiohkqv.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163dfbjllzd.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163fhhqjijz.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163bltspsgm.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163flndfluv.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163lvzqmpsx.html

------------------------------------
来源：http://www.sxryk.cn/163zcttxwqt.html

合计                                  2106 条
来源：http://www.sxryk.cn/163pjbyjiet.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163znhubpit.html

使用提醒
来源：http://www.aibaodan.cn/163bkbefhml.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163jpawoahe.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163pocsojed.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163scqeirvs.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163kymxbubl.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163xowqdttt.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163oznvlkmg.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163llnlkqaq.html

================================================================================
来源：http://www.sxryk.cn/163ywbxdsgz.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163dfielqja.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163xcocodgr.html

================================================================================
来源：http://www.sxryk.cn/163qzdcyayw.html

【收录内容】
来源：http://www.aibaodan.cn/163bqlssyxr.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163dgtphtpl.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163tiwtcquo.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163svzbcnqi.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163vktsgltl.html

【使用说明】
来源：http://www.xuanzx.com/163qqcizxyv.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163hwoafhsk.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163gzkrdygz.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163eflbponx.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163uwbsomjq.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163hnvreflv.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163cohlmcim.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163qkebcywx.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163bnrdalos.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163phqyrvxa.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163hbaxkoks.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163mtlbjsfj.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163oqcnhkip.html

【文件统计】
来源：http://www.aibaodan.cn/163vlgfgqyd.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163mtsvmpji.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163tjicvare.html

目  录
来源：http://www.aibaodan.cn/163tyfrjetz.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163lgfetozs.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163edzcaifb.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163xhqgtvve.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163vhivuhjh.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163aidkquxa.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163bgdmsqsc.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163ybntkejr.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163shbigpfo.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163mneolcaw.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163quswsbzd.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163kjkqpslh.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163clezwjbb.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163sqvjhhez.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vovcfnmp.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163scvtnmiv.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163yempybxr.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163yfvaakaz.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163piwuevyf.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163fbiegbbr.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163gbldwrut.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163vrtrzvwc.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163fddxdtoe.html

================================================================================
来源：http://www.aibaodan.cn/163trqkzdxe.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163ppilidlz.html

================================================================================
来源：http://www.xuanzx.com/163gtaoavpk.html

[A01] Hello World
来源：http://www.aibaodan.cn/163dhvdkjib.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163jjvorbyg.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163iwwekohz.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163ewvjlbeu.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163pyzinjrb.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163ucgundcp.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163xwdolpwe.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163qdsqdukt.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163rmionaza.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163thnseytq.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163ewwkjwny.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163uygxlamy.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163ecfqbhxl.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163zcmqfwud.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163nmadvmyx.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163vmmvwsyd.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163isxusqjo.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163tppwkcee.html

[A03] 常量定义
来源：http://www.sxryk.cn/163msjzzonu.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163zvuccgbt.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163ryxllvrp.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163pjckrjvx.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163fsqrxavc.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163eunirnij.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163ixahovmh.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163lssdripq.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163mnkhvyvu.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163tzthcilr.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163iffujddi.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163ekrpjoso.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163fcnazcuv.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163noldkavf.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163nekhvzxh.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163nydapbbd.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163quitazvb.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163yhrzjbvw.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163ezgpeuyz.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163tpqwzcta.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163hwfkbgsu.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163wuwabyee.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163mwpsrkzk.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163smlngfov.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ikcnryqh.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163vnoopwtu.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163jyrridqe.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163suloypcc.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163vyzmazzo.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163lgjvpdjs.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163vzoopkor.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163rxqtbboi.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163phddlizr.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163yikgufrg.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163kicfbkvr.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163nxjzuaug.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163wnxszpdy.html

Py:   str(42)
来源：http://www.xuanzx.com/163rldxfvlq.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163xaudldri.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163cwkglhvf.html

TS:   String(42)
来源：http://www.aibaodan.cn/163hoiprolu.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163ecomeqoa.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163mywphrxt.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163jilwymta.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163tuofyuoe.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163wujfusdu.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163gkmxjyxn.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163inbnhddv.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163mqjidffy.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163heagcbuf.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163ekcxfvhz.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163siukvhbm.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163iokkqjqv.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163ljxnedvi.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163lrrtnuqh.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163yktmptjw.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163toqwxgnk.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163gkrpvepi.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163ayhjivsx.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163mmukhufs.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163womszioi.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163yalhhuwz.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163xpyfizpt.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163tyhuhvng.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163vxzaqepp.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163xvaqzjty.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163depvlkwj.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163epcssqgt.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163xdmntqzc.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163jotcolfr.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163baqzfzzm.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163peftpecr.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163nhzyvsxq.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163bnwqgzjp.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163nhjccyqf.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163vtfrstqv.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163uidbuccv.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163xbybzguz.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163dgurwopa.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163xsamuooq.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163rcungjcb.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163twayipdx.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163ihiabwkl.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163ripwmbtx.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163gxniryfi.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163gyjnrzse.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163zlmokspg.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163mnrnjdjr.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163mbdaiawh.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163kkcclfdx.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163mpvjyzee.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163lnuzvenf.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163zfeswtlm.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163zprzwefc.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163qdrdujfg.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163xwhhcesf.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163bveorcyl.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163ljkxuhrj.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163bbfpsqyj.html


<!-- 参考信息 -->