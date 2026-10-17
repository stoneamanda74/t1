外链999!wailian999！

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163ubukrtzx.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163nkvdcjrq.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163dbnfjvfl.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163ztjhqhah.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163bhofetin.html

a?.b?.c
来源：http://www.sxryk.cn/163yckiinxj.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163gxzgbubr.html

a ?? b
来源：http://www.sxryk.cn/163qrynierg.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163ptcgaaom.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163jwgcszyz.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163bfubjlbf.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163phfgxnsa.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163yblemdjc.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163xnplvlcr.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163rxwdtrdr.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163sdwiszvx.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163cxxmgfcl.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163edgysqsf.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163fauxirqy.html

structuredClone(obj)
来源：http://www.xuanzx.com/163ooadrwwk.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163ghfpefwf.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163wrgokprc.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163wtduzghs.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163udhhmjra.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163racchvbp.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163qxzctvql.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163srgqbeyl.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163odqbbvhi.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163gdxwkjet.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163bogrxswj.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163tmkvudcw.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163umzsdtcs.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163rivpigyc.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163mloyvhjd.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163rmnezfzu.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163kuqancmw.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163bobaegup.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163xjjdoauy.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163jvnwvogh.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163eeibwnsw.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163qniihtra.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163cdswqmvq.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163aldbsynz.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163liduwtgh.html

[U105] JS：节流
来源：http://www.sxryk.cn/163vdjfkwpv.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163yhaxxmlk.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163cousnyne.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163ctjmfone.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163wkiszhbp.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163xpbqpghj.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163biwitkeu.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163zzlxghgd.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163ycjprima.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163racmnnak.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163nvyremml.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163seemnasi.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163pfdabdeg.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163yfjyklhw.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163wfqyqsjm.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163txerdhnw.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163ttqfpzxm.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ydpwvyfd.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163odqnidra.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163gzhqxfdh.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163wymctcpv.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163wtulnucu.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163cbbehpbq.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163klbfzrxr.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163ergthpzy.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163mlupwxaw.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163xohcgbcg.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163gvewjiev.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163lycfofvv.html

npx vite build
来源：http://www.sxryk.cn/163cwsmfmxi.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163kofhubti.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163agjtgrak.html

================================================================================
来源：http://www.aibaodan.cn/163juupdwkn.html

统计汇总
来源：http://www.xuanzx.com/163wbgxopbu.html

================================================================================
来源：http://www.aibaodan.cn/163ycvbmccs.html

按语言统计（条）：
来源：http://www.xuanzx.com/163xsgpshvt.html

Python ......... 252
来源：http://www.aibaodan.cn/163flawltbe.html

PHP ............ 252
来源：http://www.sxryk.cn/163gcytvrqi.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163keuvzcxg.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163xrghdduw.html

Java ........... 212
来源：http://www.sxryk.cn/163ymhnjlde.html

Go ............. 212
来源：http://www.xuanzx.com/163mianyfea.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163uxnrcefk.html

C# ............. 212
来源：http://www.xuanzx.com/163udmhjqum.html

C .............. 30
来源：http://www.aibaodan.cn/163icuowxio.html

C++ ............ 30
来源：http://www.sxryk.cn/163ebfqpvuy.html

SQL ............ 90
来源：http://www.xuanzx.com/163btizhnwq.html

Bash ........... 80
来源：http://www.xuanzx.com/163ixodtepv.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163aqcjvakn.html

Swift .......... 15
来源：http://www.aibaodan.cn/163gcdqscib.html

Lua ............ 10
来源：http://www.aibaodan.cn/163lxmvxnkr.html

Perl ........... 10
来源：http://www.xuanzx.com/163lhjzqzdf.html

Scala .......... 10
来源：http://www.sxryk.cn/163unlpmjdh.html

------------------------------------
来源：http://www.sxryk.cn/163enjuyorl.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163pyzcgfvu.html

按章节统计：
来源：http://www.sxryk.cn/163fzufuttm.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163fgabydfs.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163hnibnlnn.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163znpxglxp.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163nekzmrdv.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163dtyqgkcr.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163yotiossb.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163bvkreioi.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163awexnnup.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163llouxmry.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163lczubezb.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163avkhqvgj.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vmafhcya.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163oepgyovp.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163iynuajcf.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163ahvrtagp.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rbufeuoh.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163jlszhzom.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163ebvdmhce.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163jswntyti.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163jsukjkfu.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163qsafhzbg.html

------------------------------------
来源：http://www.aibaodan.cn/163djvphveq.html

合计                                  2106 条
来源：http://www.xuanzx.com/163wbbkwtge.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163qyphyjym.html

使用提醒
来源：http://www.sxryk.cn/163nzbmpxjy.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163oigasivy.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163ubpvbqxw.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163snvwzzwa.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163cwabekvc.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163vzgfpukv.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163rxkpijdu.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163bdeazarn.html

================================================================================
来源：http://www.xuanzx.com/163msheumwq.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163jrvwklkl.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163oagurzjr.html

================================================================================
来源：http://www.sxryk.cn/163kjdrkufp.html

【收录内容】
来源：http://www.xuanzx.com/163wuuvfkaj.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163nrhcdfqs.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163kkiawubp.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163camadhys.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163uzzvmfsy.html

【使用说明】
来源：http://www.sxryk.cn/163zwjqmwdd.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163zqflmhoc.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163fxrlthbh.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163exovshde.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163ozkmdmcl.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163inqmatjh.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163zmbkkola.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163pyhbzodd.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163euiqfchs.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163ttfuzcyv.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163ufhbzogx.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163ivwufmrf.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163wermbmph.html

【文件统计】
来源：http://www.aibaodan.cn/163sssdsswv.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163ebhodrsv.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163gujryamb.html

目  录
来源：http://www.xuanzx.com/163ziaamzkb.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163jpxaxqwp.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163tgouooaw.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163uvqayrte.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163jterlfgk.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ffdztbum.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163ckjzwcgu.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163uvwnogfk.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ibbvejik.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163szjmotgn.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wcmbvyvt.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163hpxsxjmi.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163qvpfzenn.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163qhavxpmp.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vnzqwzvw.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163cwwwjlti.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163ujqqhrzi.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163gdrwpulj.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163lfggjryo.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163jmfzuhkz.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163vebpuxzn.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163tfaxqgad.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163zskkascf.html

================================================================================
来源：http://www.aibaodan.cn/163pcvwqhhd.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163szlboalt.html

================================================================================
来源：http://www.aibaodan.cn/163yicnjahu.html

[A01] Hello World
来源：http://www.aibaodan.cn/163kbgzyczv.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163haunrgac.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163nofwhqbd.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163wizexgdg.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163cvcumpan.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163cnxnqfgz.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163hhmrkmce.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163jhajhqwa.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163qmxfsgeu.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163znasmsns.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163vaselafc.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163jdiudpbv.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163opycsqor.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163iybdsmns.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163gldyftko.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163xywmegyc.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163zsorqxtg.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163gukvgasb.html

[A03] 常量定义
来源：http://www.xuanzx.com/163obpcesko.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163upmpvsno.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163qzdhmqbm.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163oxytwvww.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163xplsolrm.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163qauvqwbi.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163qhkiwvmw.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163vkmoivii.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163ocbaijoh.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163pwpohpif.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163kkwpkfkq.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163wxcgdobp.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163tndveocw.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163kzxwqoay.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163bdnxeuvm.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163qxfkvetv.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163woimpdif.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163thewnkul.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163bqtffrrj.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163plzifmal.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163wkxwjytj.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163wliakmsq.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163vocwgqxm.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163xfvfxanj.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163qwawnesa.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163uanuyyqt.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163peevhslg.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163wsarvrit.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163wmbbmgdq.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163ecuflxgw.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163wicpjruk.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163yrwfbpvd.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163gmqsigso.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163zlhuqico.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163srczehtk.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163cwlflgpd.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163ljakzqai.html

Py:   str(42)
来源：http://www.xuanzx.com/163arnxqbcv.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163jpufywlk.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163fsbhtyru.html

TS:   String(42)
来源：http://www.xuanzx.com/163ybanvfsb.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163ibtqrjsd.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163kkwtuqjb.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163aozvuoxy.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163ifezyidr.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163eerfnhps.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163eokozmec.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163thrraeho.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163mvcqnvuu.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163owppwbjv.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163hixyewrk.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163hpjvguza.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163pnstdaik.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163wqmofsev.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163rjtlsemn.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163hmlifdwx.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163gonhjsgd.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163aupvzvmy.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163qtyccgse.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163sitinpip.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163copdlecz.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163yieiipop.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163ikugwvus.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163szlaxdgi.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163bmclrswn.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163znybeeur.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163jlvdekmb.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163jtebbcco.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163aomgakdg.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163cejvawjb.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163lsyvbbla.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163plkqdzbd.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163vovugynz.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163cttkijxv.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163wkyzpjfk.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163aqagpnli.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163krcqqvlw.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163jmtqsoqa.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163kqrdxjav.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163mtbuivyo.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163wxmntjxb.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163txcygjqo.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163xsfmicju.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163azvidptw.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163qpamivef.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163rvfsxywq.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163qcdvgwtj.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163kpaasmec.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163vzfgasum.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163hseamtlu.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163zyivkbcx.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ynhztswv.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163ysgznamq.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163cwpdvtxa.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163pscdycbr.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163etcpexyf.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163qbtvlxma.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163yysfngwk.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163gbwcteks.html


<!-- 参考信息 -->