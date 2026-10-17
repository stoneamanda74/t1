外链999!wailian999！

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163qqqpdeau.html

composer require twig/twig
来源：http://www.aibaodan.cn/163htmyyjhz.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163zbtkrmvk.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163xsxydonj.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163fcuibxdj.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163wjzsoigs.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163hidhwokl.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163ncntjkob.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163tbxcvchq.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163tdgaozfl.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163uamsfhms.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163qyqtuxjv.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163pwekfona.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163zogfpluh.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163rllhwdfa.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163vwnnlrks.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163cmxuzkau.html

a?.b?.c
来源：http://www.aibaodan.cn/163cehfgjwn.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163qekmjrvh.html

a ?? b
来源：http://www.sxryk.cn/163xbgvhaha.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163akkiokrs.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163uzwaycwj.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163uzzjgxgw.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163fjmlfczv.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163qsvuwozq.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163gzcydgvy.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163ovajougt.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163rjikcilg.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163ckbaqwrt.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163ndzqddsn.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163lkenyofb.html

structuredClone(obj)
来源：http://www.sxryk.cn/163nqntbssw.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163zewefngo.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163tatmywhq.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163wadwgdcs.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163nepnqcbn.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163qjcqrygx.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163cgrkefxj.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163upvzzstu.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ooezoelb.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163mqrmlxvs.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ilxelhpc.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163ufllskfv.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163pudoaqew.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163ciwgluiw.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163hwjrjfnz.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163ojcbsian.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163cmvyupng.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163sfpptxlc.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163aaewcgsb.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163rdyisnde.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163bmewhheq.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163gmyxwbrx.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163tcuuvdgo.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163nyobcbki.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163dihuyntk.html

[U105] JS：节流
来源：http://www.xuanzx.com/163hnualftp.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163qwmsbfwg.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163xgevfdzl.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163guimxfiz.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163dgqtzhsv.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163rlzanyry.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163yivnpfes.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163errcqsvo.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163uoxzmxtk.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163jxqlivhm.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163oeicsecp.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163ncixlonw.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163dugzwlie.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163wezghsjn.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163lymtnbuh.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163dpwzhrvq.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163qfvzrxvb.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gaxxyovw.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163faemorya.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163eolvbyzf.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163orldmchp.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163fpweedzh.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163atmifhda.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163dgpnipdx.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163pezznigm.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163ffrojjyr.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163vwkcfpfe.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163epomvhiy.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163xlwovaab.html

npx vite build
来源：http://www.xuanzx.com/163eixqzbrp.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163acneihum.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163bjkbjhzw.html

================================================================================
来源：http://www.sxryk.cn/163ybncrmbc.html

统计汇总
来源：http://www.sxryk.cn/163rlbwxnsu.html

================================================================================
来源：http://www.aibaodan.cn/163leednmyn.html

按语言统计（条）：
来源：http://www.sxryk.cn/163tpesygjz.html

Python ......... 252
来源：http://www.sxryk.cn/163wiavjouk.html

PHP ............ 252
来源：http://www.sxryk.cn/163blhtntyu.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163girhrgir.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163zjkrnuzt.html

Java ........... 212
来源：http://www.sxryk.cn/163exvhxgdq.html

Go ............. 212
来源：http://www.xuanzx.com/163ukbsskhu.html

Ruby ........... 212
来源：http://www.xuanzx.com/163pqrmaqaa.html

C# ............. 212
来源：http://www.xuanzx.com/163qvtwrvfo.html

C .............. 30
来源：http://www.sxryk.cn/163kthmtgvb.html

C++ ............ 30
来源：http://www.sxryk.cn/163raxxktvf.html

SQL ............ 90
来源：http://www.sxryk.cn/163zvhewpvp.html

Bash ........... 80
来源：http://www.aibaodan.cn/163hchofyvl.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163ejebbotv.html

Swift .......... 15
来源：http://www.sxryk.cn/163xhtzgizc.html

Lua ............ 10
来源：http://www.sxryk.cn/163kldgvuhu.html

Perl ........... 10
来源：http://www.sxryk.cn/163sghsnrrk.html

Scala .......... 10
来源：http://www.sxryk.cn/163ucvspqcy.html

------------------------------------
来源：http://www.xuanzx.com/163kethxhbv.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163dvzqvrhv.html

按章节统计：
来源：http://www.sxryk.cn/163nzrpyngp.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163fjnjehlf.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163lxztjsrq.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163tuuyqopz.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163dyqiafso.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163mtfmgsfa.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163xuisjpde.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163njqkexjf.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163dpxqfwpe.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163zmckclyv.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163hodqmtyz.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163sfjlztua.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163zvftqita.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wgjadnps.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163xhijaoxx.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163jnvtkgsl.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163trhwkmxu.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163zeatrslj.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163wmlajato.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163qpwhemie.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163kpjbpety.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163ojhcuwlm.html

------------------------------------
来源：http://www.aibaodan.cn/163nwjsrayj.html

合计                                  2106 条
来源：http://www.xuanzx.com/163yxfofzsn.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163titgicpn.html

使用提醒
来源：http://www.xuanzx.com/163nbjwcqnf.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163tmlgzaqm.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163gbgciiqc.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163hlionrnd.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163cskadznh.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163bavajmkg.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163ybpjsaqw.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163zmbgyqwe.html

================================================================================
来源：http://www.aibaodan.cn/163khnogqlt.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163jberbxri.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163cmdrdwmi.html

================================================================================
来源：http://www.sxryk.cn/163bqkkjuxw.html

【收录内容】
来源：http://www.xuanzx.com/163gnevkxaz.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163aqpvkkzn.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163lriskhku.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163krfmhixr.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163bmjxcpmk.html

【使用说明】
来源：http://www.aibaodan.cn/163inymogfz.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163pjrrjgoe.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163wckvuuyi.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163fvewxqtu.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163qhkhnhws.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163krdtgkxx.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163jawbznaf.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163frsqerir.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163slhrxtjh.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163nygudkxp.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163tkaafzca.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163onserzbs.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163fqryooxe.html

【文件统计】
来源：http://www.aibaodan.cn/163zbsmbcnu.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163rpcuisvm.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163jazqigbl.html

目  录
来源：http://www.sxryk.cn/163hencuedo.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163funiobzs.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163ohfomwiu.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163gdeglmhf.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163bwxtifqu.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163qothxqlg.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163lvoyjhin.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163pmxpdgjo.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163tmvizbxo.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163xalrixsr.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163twlhghfg.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163rzswelmo.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163frbncmpy.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163qlxbsqcs.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163kfanjtkp.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163eapkgooa.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163snhwtjhf.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163hedijvgn.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163wpcjdosp.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163rcfypupv.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163shhedfqq.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163edydczzy.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163cncrrflt.html

================================================================================
来源：http://www.xuanzx.com/163ejnwxjni.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163bjzgevlk.html

================================================================================
来源：http://www.xuanzx.com/163rwoypvba.html

[A01] Hello World
来源：http://www.xuanzx.com/163hitpdrzf.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163cbhrfzod.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163tjljrgwm.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163ydngvjmf.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163vrgbzpkx.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163qmpaoehp.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163qfmyubqd.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163idromeca.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163xzzgcafc.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163runmybqm.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163nbeovpdu.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163ppayzbyx.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163kxqohanx.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163zonqlrxb.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163loagtgdp.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163sehfosiq.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163ufarrmag.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163cuhqelwu.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163opedldwa.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163wbsuotdw.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163bbswqwdl.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163yueqquah.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163agtzutdg.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163gyzkqwgp.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163lepjdbka.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163nbjtvjru.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163cmttouuy.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163suvfdwiu.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163ifvtpvex.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163fmrkevvo.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163okffmgjd.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163zqwdwxhr.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163enjmozhd.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163zpjtzoyc.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163zxwjixoh.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163ipgqqgka.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163ketgqppi.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163jjishqxa.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163yncpmfbv.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163dsdajxkp.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163spphrnqm.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163lwpdmozs.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163cumqzxjc.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163eagfmisd.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163mpzteayf.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163hhunyvmq.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163dfaooukz.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163mlafodpn.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163foysvdsq.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163qycyzrep.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163jqshauyr.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163vmomgkni.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163bebdbnfj.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163azawmznx.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163jzxxqpqi.html

Py:   str(42)
来源：http://www.sxryk.cn/163bqhycyum.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163btkhwgbq.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163cxjiobxb.html

TS:   String(42)
来源：http://www.aibaodan.cn/163msclproc.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163qyecnbxf.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163dbewqzfl.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163lrkwnypg.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163pfhwgtwa.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163gxeavgwd.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163eiylnjdl.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163dvqzdwvu.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163nydbogiu.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163gfnsnhhc.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163utkkxkha.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163ijfifgto.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163grglaspq.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163jzogdyga.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163mqdkwwxl.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163esfucqqz.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163xwbqgnxf.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163xqbjtbxz.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163edqvuxeq.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163hntpowzq.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163kkqomzfj.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163puvjkeaa.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163wmslvlmt.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163bhzhzvoa.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163qxvuippj.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163qsyrpnmj.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163nmfxvmgk.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163phijvbka.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163qjmbtrxx.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163cxzkussa.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163zvemfush.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163skaxyrjd.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163dsqhkqpc.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163smhcbmrb.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163dtfenqiu.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163pcghqjdp.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163vvvrlfyv.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163nnxqtvsr.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163pcfgvnju.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jijiawsv.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163dwfyoucb.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163qvbullan.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163giznomng.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163aazewveh.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163pvenxgdh.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163kaxzhncm.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163bnvmyhof.html


<!-- 参考信息 -->