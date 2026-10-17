外链999!wailian999！

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163wiqsferr.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163xdbfhkbt.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163lgchrhep.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163vghtcare.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163kxaduecs.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163fddfsxcp.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163nybnsmvy.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163noiixvzi.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163tekljrxi.html

a?.b?.c
来源：http://www.aibaodan.cn/163sckmipho.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163hwzulgla.html

a ?? b
来源：http://www.sxryk.cn/163zwatmzme.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163rqpucqwo.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163ttsghlbo.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163hbcneagn.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163aqqhsouq.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163qraathto.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163vuasqltq.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163zrpauxbd.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163hpyfhwqf.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163qfhbrrfh.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163wdhifiax.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163qdnkikdz.html

structuredClone(obj)
来源：http://www.xuanzx.com/163uguggcix.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163jbbxqgjp.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163ckdgnhjx.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163flbippvj.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163ijarzvbo.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163pfohzsse.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163awwaobur.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163owntoobl.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163zomevpym.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163dzzdsomo.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ygjfltud.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163ktqzrlvj.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163mhkvebkc.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163cttzrumg.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163zynbgmre.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163cvuqiuuu.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163fywokyms.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163jhqdcxxq.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163pdbnhtek.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163fyfdkcus.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163vbotqfar.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163uqfenznr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163hdtvsrvz.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163lykpnrds.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163cwpenjyk.html

[U105] JS：节流
来源：http://www.xuanzx.com/163dnzmkkzr.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163robyhktq.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163xswctiaa.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163vgbgmjrj.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163uyhsxqaz.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163ohqnnivx.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163tqdbgbrj.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163aatkhpfm.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163pgtujegs.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163vmygrgaj.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163iupykzgb.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163ogpxelte.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163aifcolww.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163njhuhify.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163gotydmrc.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163etqzcklx.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163wdceqwhg.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163tsicmntv.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163kswwijkb.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163lvsjvixv.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163bswjooat.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163cifomzcy.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163ojiowyqp.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163onvapauo.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163pttyspiv.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163fsjtmfcy.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163eorrrhwb.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163pipfvmvx.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163sgailnei.html

npx vite build
来源：http://www.xuanzx.com/163lpusbchp.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163ouckzbzz.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163exnsgksh.html

================================================================================
来源：http://www.xuanzx.com/163dxvsquis.html

统计汇总
来源：http://www.sxryk.cn/163dqymskcb.html

================================================================================
来源：http://www.sxryk.cn/163cqgownbb.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163dsmysjrr.html

Python ......... 252
来源：http://www.sxryk.cn/163oukijzvc.html

PHP ............ 252
来源：http://www.sxryk.cn/163ecsinird.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163hjyzivrq.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163hcuhhutp.html

Java ........... 212
来源：http://www.xuanzx.com/163cpeiirps.html

Go ............. 212
来源：http://www.sxryk.cn/163ddcqghjl.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163fkezjkuz.html

C# ............. 212
来源：http://www.sxryk.cn/163nifozkre.html

C .............. 30
来源：http://www.xuanzx.com/163tqmjhxbz.html

C++ ............ 30
来源：http://www.xuanzx.com/163qcouszho.html

SQL ............ 90
来源：http://www.sxryk.cn/163aiwyrxew.html

Bash ........... 80
来源：http://www.xuanzx.com/163njnhhvil.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163ufavexpz.html

Swift .......... 15
来源：http://www.aibaodan.cn/163fpwlnmxq.html

Lua ............ 10
来源：http://www.xuanzx.com/163jemhevbu.html

Perl ........... 10
来源：http://www.sxryk.cn/163ezqxqavz.html

Scala .......... 10
来源：http://www.sxryk.cn/163ujzfhamn.html

------------------------------------
来源：http://www.aibaodan.cn/163araulayb.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163bapkplvk.html

按章节统计：
来源：http://www.xuanzx.com/163alrzfumg.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163bknddlcx.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ybowvmtu.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163kmitzznk.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163kssswdkw.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163adkynuph.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163gswurcbx.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163usitdahv.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163twxxmxia.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jwskadgt.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163qreyzjok.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163xqkqsxsl.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163uzidiggk.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163hgavuurg.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163pyrwxpxf.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163mgvuvwkt.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rnmxcjwq.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163qrgwovlk.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163wxgikhfg.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163lkvhlrjm.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163zrkrddrq.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163hidkqwja.html

------------------------------------
来源：http://www.aibaodan.cn/163zzawxmfc.html

合计                                  2106 条
来源：http://www.xuanzx.com/163ggsjttoh.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163kxmcugxf.html

使用提醒
来源：http://www.xuanzx.com/163amicypyp.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ahsirmqt.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163jpqfmidr.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163urpynizt.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163ubyoergk.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163nvnkvbkj.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163mskbqblw.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163uwnyxabm.html

================================================================================
来源：http://www.xuanzx.com/163xclrzlxn.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163hnvlcgap.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163tzoozrbw.html

================================================================================
来源：http://www.xuanzx.com/163jnsxbqxg.html

【收录内容】
来源：http://www.aibaodan.cn/163mdcycjvp.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163codvtutr.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163vxoyqbfs.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163enqlkcqf.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163dgfgksym.html

【使用说明】
来源：http://www.sxryk.cn/163lzghplzz.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163kzykalet.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163kksrqksl.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163zizzgllw.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163neqmoyaw.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163rauvpqas.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163yuixialx.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163wvgywrmt.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163aqvbasuc.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163sccxkmqw.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163dkwnsogq.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163ngndrgud.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163rjallqzt.html

【文件统计】
来源：http://www.sxryk.cn/163rjizwubj.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163ormglubb.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163gckalkkg.html

目  录
来源：http://www.xuanzx.com/163krvcrevf.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163odldoktl.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163dgduygkq.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163flvagbcp.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163kyftbmxk.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163rjglfchj.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163mgicvutr.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163zufwdhdh.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163vyavamxn.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163sghhzfef.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163rqpllhnv.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163owxibvbj.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163cdjiuztm.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163zfcsjuxh.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ustyfmyd.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163vqmkaggc.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163mzuyjduz.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ujskhtbu.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163fpixhntg.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163ipvkddnm.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163cbmmoqbr.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163wxvyshzb.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163icaesmdm.html

================================================================================
来源：http://www.sxryk.cn/163lahdqsyx.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163ommttlnn.html

================================================================================
来源：http://www.sxryk.cn/163mflctubb.html

[A01] Hello World
来源：http://www.aibaodan.cn/163gkdubypl.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163dldoiaje.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163jnzfmayz.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163kjamkecz.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163tanpfvjt.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163vlwynlmw.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163wfgvztkn.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163isgbpuuk.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163kgcnbmzy.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163syrkreis.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163ossrjzac.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163rvepxexy.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163cbkipafq.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163fedlrtaj.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163kasjkvmk.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163txwmsnhu.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163rxuiuezr.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163vgztexhh.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163ndaxgfqn.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163ctppwiza.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163dhwrgvso.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163fucoqcuw.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163aogdygfw.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163oatlyvcf.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163hggmflie.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163aontwnug.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163klhxojrh.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163bipftxgz.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163rarlqllk.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163ijqgdwaa.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163isaowbat.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163mdtsviym.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163mtymrhfy.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163rcsmsbdm.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163ycstecpm.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163xklppwjd.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163iovsjqyi.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163rspmbzju.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163guyaentv.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163mzpkekty.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163axelcpuh.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163qveplyrd.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163krqdpsis.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163xlqjryfi.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163jsjyjpxu.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163uguftbxw.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163novasxzo.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163hgomhixm.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163mggvcont.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163obtdboxa.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163kxckydcr.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163owsdxydf.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163csbltkxl.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163zilhdnvl.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163jtniuqhp.html

Py:   str(42)
来源：http://www.sxryk.cn/163ieakuuts.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163wccvpdaw.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163vqrexibs.html

TS:   String(42)
来源：http://www.sxryk.cn/163gqjlhclh.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163efeacghb.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163gycgdvws.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163cqcpvgam.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163gosmoeeu.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163rydmmtbr.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163lwsnksmk.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163hjtbvumu.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163ioweqrgo.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163deshhzdr.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163ubcxmykh.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163rdlmaryz.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163kxssrtav.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163wweqwuiq.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163blniajbe.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163musirgrg.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163brlrmfza.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163lalxgsyi.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163wczebcoq.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163dijkexgn.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163dnllfcwe.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163qvulgioj.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163rxirxdye.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163dnifcmzf.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163sqozlvtn.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163smrhrvsb.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163fyaccbtn.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163wxxfmycp.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163hjwndorc.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163vqptfolu.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163cgqcedvd.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163hycgwqjj.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163btpejojs.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163ahiqkuru.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163mrmupcop.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163pqrrqvhc.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xwsnioqz.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163amobixzm.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163hafkuhea.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163pyjexxvy.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163wmolpzus.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163cxyqzsnj.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163uvkvwzuv.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163zgkpikwc.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163bclojalw.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163yaeyilqz.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163oklnfdgv.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163csimdhta.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163dnmamkot.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163cvqqgkdx.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163xixdthgx.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163jjnamzqu.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163nyxwyqle.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163zqnksfyy.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163nhtzqlay.html


<!-- 参考信息 -->