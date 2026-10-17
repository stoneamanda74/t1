外链999!wailian999！

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163phqwbqny.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163lvurivyh.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163vsiawyaq.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163hmpvzrte.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163kvqkczvc.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163xopyyupc.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163tqxrhjzo.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163cojflufv.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163zsqtvyby.html

a?.b?.c
来源：http://www.sxryk.cn/163zvchekgj.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163nzmdkqgi.html

a ?? b
来源：http://www.xuanzx.com/163inqfveek.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163ljhtswjm.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163ngvmlovc.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163hjivfwbd.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163rouflmgx.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163rpxdjepb.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163eqvwcdkd.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163hskwjqss.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163navjmpto.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163cxfswqrd.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163fzjaemzu.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163vjxjfnxf.html

structuredClone(obj)
来源：http://www.xuanzx.com/163qonshqww.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163ywexjzlj.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163lwyyruzq.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163qievtqej.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163lmdtpunq.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163ichsqyms.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163xeorhffx.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163licgncso.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163rfzjsova.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163jnrbxsls.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163nbxqtmfi.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163pilhiadl.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163ukeoppeb.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163cttvechc.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163fznfiigw.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163bknsuwbs.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163yaufitmd.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163utwybyui.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163tesriowu.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163whepudqi.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163dlomiuho.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163kawepkkb.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163uhmsvetd.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163nzfonltr.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163gjagxovd.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163zmjizibn.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163ikbimuhk.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163cjdurlco.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163lbarciol.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163izafpaey.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163ykemgfcx.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163qwqwswcl.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163fxigjjiy.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163tpqnaowi.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ybooforv.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163rpcdcywe.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163gzffrkcu.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163tufsvcra.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163djzzdhkk.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163fmmrnfbx.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163dxcuwvqx.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163aeqqkmrv.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163lokjuskc.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163ghkojtni.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163gjnbsixf.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163aniwtyoe.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163mjipedik.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163yzizvbop.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163qvjttjzb.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163bxcegdmt.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163xtsyhprz.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163ivakdbnq.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163nllgffxf.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163ltbljzyv.html

npx vite build
来源：http://www.xuanzx.com/163bfmpisgi.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163arvgfpcp.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163gtycdbbn.html

================================================================================
来源：http://www.sxryk.cn/163bwvxmsmf.html

统计汇总
来源：http://www.xuanzx.com/163nhivzyjf.html

================================================================================
来源：http://www.xuanzx.com/163wbhyntrg.html

按语言统计（条）：
来源：http://www.xuanzx.com/163edbkxauv.html

Python ......... 252
来源：http://www.sxryk.cn/163vmlrjxrs.html

PHP ............ 252
来源：http://www.xuanzx.com/163eshjojah.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163qxmdoppo.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163hznxtoln.html

Java ........... 212
来源：http://www.aibaodan.cn/163scpxhqwj.html

Go ............. 212
来源：http://www.aibaodan.cn/163slhkmktr.html

Ruby ........... 212
来源：http://www.sxryk.cn/163hpkwsumj.html

C# ............. 212
来源：http://www.sxryk.cn/163wpjmkjxc.html

C .............. 30
来源：http://www.sxryk.cn/163hrcfghhq.html

C++ ............ 30
来源：http://www.aibaodan.cn/163rcrhjmyk.html

SQL ............ 90
来源：http://www.sxryk.cn/163qsbhdkns.html

Bash ........... 80
来源：http://www.aibaodan.cn/163grmqdzfc.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163wfzlhgho.html

Swift .......... 15
来源：http://www.xuanzx.com/163tthwwhnk.html

Lua ............ 10
来源：http://www.sxryk.cn/163njdmwinx.html

Perl ........... 10
来源：http://www.sxryk.cn/163eugplcre.html

Scala .......... 10
来源：http://www.aibaodan.cn/163htfpdbhv.html

------------------------------------
来源：http://www.xuanzx.com/163uexmejtr.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163ldmvwrkd.html

按章节统计：
来源：http://www.xuanzx.com/163mutqxeeq.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163hvdsdxyl.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163awnagcwq.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163smhjqirq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ozaqlcbl.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163zxjhfvrg.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163vvjcijvz.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163bkwuoyxj.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163klhxkaca.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163akoexxtg.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163nnsdfhhe.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163shjtabbi.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vbcmwtrt.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163azcaouiw.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163hgcqpeph.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163rcqzlqtm.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163pebmgzik.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163oucpweue.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163fylcrehn.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163ucqgioxo.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163ehocnnet.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163eykulctk.html

------------------------------------
来源：http://www.sxryk.cn/163sinfopcl.html

合计                                  2106 条
来源：http://www.sxryk.cn/163fltahgmj.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163dzlcpjgm.html

使用提醒
来源：http://www.xuanzx.com/163rbxckjbz.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163aeykgaia.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163efwvdcpv.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163ivkydqte.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163okvwpcbr.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163yhpkxmlb.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163gsrrtbrq.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163aervmncn.html

================================================================================
来源：http://www.xuanzx.com/163owkxovde.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163isuypqyd.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163qshjqrjh.html

================================================================================
来源：http://www.aibaodan.cn/163qljabfyv.html

【收录内容】
来源：http://www.sxryk.cn/163nxryfmrp.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163wsmzwdjg.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163isxjvnkj.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163awdmqkid.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163gttltnsn.html

【使用说明】
来源：http://www.aibaodan.cn/163abptcgzm.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163rfrfkmne.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163myhtlkij.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163cyqgjsmr.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163pudrttkm.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163vkigohal.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163ajdfupfr.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163foveuivh.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163tbxhkfta.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163rilalnhe.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163lgfxbrze.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163lmqhqeyi.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163dbdoajcc.html

【文件统计】
来源：http://www.aibaodan.cn/163ssrucxmn.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163gqphfbgg.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163pzsvxbhw.html

目  录
来源：http://www.aibaodan.cn/163hpnzultb.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163jraulwbc.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163vmokfpra.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163wunawajg.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ebrduuis.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163zsiwcsmv.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163qnlwvihe.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163corclgry.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163koozayhp.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163vzevdvmk.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163rmzbyjqk.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163jgfexfwg.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163eezohyiw.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163mvvrxtxb.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ghblgdef.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163tvbvsjzi.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163xdvqabdh.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ctzptpyv.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163boptuezw.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163onaobbys.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163uiduzfqs.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163stlxpoxx.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163eltqzpmw.html

================================================================================
来源：http://www.aibaodan.cn/163uosflxex.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163zizkhxdh.html

================================================================================
来源：http://www.xuanzx.com/163oekdagkk.html

[A01] Hello World
来源：http://www.aibaodan.cn/163kzezyhcg.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163werumbja.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163opgzcxfv.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163fsfwvpjd.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163sgapxira.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163yglrthhw.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163uweonyai.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163lplrqrzr.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163ssqkpmrh.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163kltjwgdx.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163xnwqtybb.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163ngqdglka.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163zfiswosj.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163fcqpgdkf.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163ktcvnlyp.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163zqbygnte.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163inuwxxej.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163ntrmkmqk.html

[A03] 常量定义
来源：http://www.sxryk.cn/163xxwcjpps.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163bickwiau.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163rsikahio.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163iovzpqzh.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163owetkdwc.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163ufmyxnde.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163mxbhlbfe.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163ipicnphz.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163zjidgygb.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163pjrcnybd.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163hfdtkzcn.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163rqztvbwm.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163crlftaps.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163gpulsvuj.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163gzxjerme.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163qcdjukwc.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163grpegkch.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163ndwxtgqx.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163axqxczma.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163lsxshogr.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163pfyycqkm.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163dqzjomdq.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163jbqsxzip.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163nwknbosz.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163sattgise.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163zqtjrxkh.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163eumvhoup.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163ckwzbijz.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163athqakvm.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163lvaqzqyx.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163pvlviylf.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163rlwyjahr.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163sfcesegv.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163lxyoqubh.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163caobrelw.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163sjtbxtet.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163zlaxuqya.html

Py:   str(42)
来源：http://www.sxryk.cn/163albriokz.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163vobgxhcz.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163holrdhdl.html

TS:   String(42)
来源：http://www.sxryk.cn/163zfxussuz.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163ubszftkj.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163jgufrbte.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163kybffnyr.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163wirwcoxn.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163jrteppos.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163ggicroeu.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163leooorgj.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163qnmbvasi.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163mccbueqs.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163dyltykzr.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163pwbjrtvq.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163pxdmbgyo.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163oczdzhxk.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163fctenqwk.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163ozkomdhr.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163aqgptyjw.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163zvoljrrs.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163kpwazgtp.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163bheeniet.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163rptvoytx.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163ampwijlk.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163voyoflnn.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163fmklaisp.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163sinlvekq.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163muvycddm.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163jbkikorz.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163anoqswlv.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163ctvntcar.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163nnfgmrrk.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163ztvrorbl.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163vgkejgam.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163qfscxycq.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163osarxdft.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163wijkplpy.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163crzzuazw.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163byhkojcl.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qahqstud.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163pmyiyxvg.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163sgcvjhyu.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163vmmahccg.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163udaujkgc.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163elmyphqj.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163kjnfggqf.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163emtgefun.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163xzjeomzp.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163mbwppder.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163ctzneloh.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163ijhorcee.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163ztbmvovx.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163ooltyvvo.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163awtdircr.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163qohwtbey.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163whvyvmyi.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163leaqcbem.html


<!-- 参考信息 -->