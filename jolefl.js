外链999!wailian999！

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163mohpwbml.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163aywdqonr.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163lsecysje.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163uzncztdx.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163dxbubtpm.html

a?.b?.c
来源：http://www.aibaodan.cn/163gtorkrwl.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163vrnbplti.html

a ?? b
来源：http://www.aibaodan.cn/163brhtqfzx.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163gaouthqi.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163svxrfyzj.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163yjjhfghz.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163ghjfsqwq.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163yephsuud.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163zindkoka.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163atflpxee.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163avvvkwyc.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163ycfsewgi.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163ikvwulim.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163lrlujadp.html

structuredClone(obj)
来源：http://www.xuanzx.com/163lwsskujj.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163cbyhmssy.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163hrcsanin.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163znfisfpj.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163usvlimrx.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163wczwtfum.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163niynjkwg.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163lbquqifn.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163vqbntnuu.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163gwlluics.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163plislsvd.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163ymyfqpeu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163argjzywv.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163zsfmsrjp.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163aqbdbqhx.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163zabtizcy.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163uslobbry.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163zvjpkybi.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163nrwczosh.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163gbgqgpky.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163ktrfxxpy.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163jzajeayq.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163qqaheikd.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163xvxymulp.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163gsbmuizx.html

[U105] JS：节流
来源：http://www.sxryk.cn/163ebquruzg.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163clioykoi.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163enhihyze.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163grblpuag.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163xjtxnpti.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163zizvushv.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163qwxgbxpa.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163qkdqsqbo.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163vzifoqse.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163dahvmebg.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163kyterslh.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163sqzablqe.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163tkeqjhqc.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163owavhppx.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163wwvstjyl.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163qccefpmr.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163ffshrpyr.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ghgojzaq.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163zfqlmasj.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163xaixewrv.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163dzfvprqq.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163nugfwqfs.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163zedpgzbt.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163tgznfgmg.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163ynakoggz.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163sqzpyytj.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163nezlzbwr.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163bnvhzbbm.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163jwrksvaw.html

npx vite build
来源：http://www.sxryk.cn/163vygdypbo.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163ylohkgoe.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163gasbvjvt.html

================================================================================
来源：http://www.sxryk.cn/163kmypyeid.html

统计汇总
来源：http://www.aibaodan.cn/163pyicxunc.html

================================================================================
来源：http://www.xuanzx.com/163svoaypaz.html

按语言统计（条）：
来源：http://www.xuanzx.com/163npcqqzjz.html

Python ......... 252
来源：http://www.xuanzx.com/163xuhbozrj.html

PHP ............ 252
来源：http://www.sxryk.cn/163nqgesgmn.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163wmocsslp.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163kctiswrk.html

Java ........... 212
来源：http://www.aibaodan.cn/163skghalpn.html

Go ............. 212
来源：http://www.xuanzx.com/163cuveeonp.html

Ruby ........... 212
来源：http://www.xuanzx.com/163rtiwzond.html

C# ............. 212
来源：http://www.aibaodan.cn/163ukxcveix.html

C .............. 30
来源：http://www.aibaodan.cn/163wnjbboyc.html

C++ ............ 30
来源：http://www.aibaodan.cn/163oncldpsc.html

SQL ............ 90
来源：http://www.sxryk.cn/163ihsozqtz.html

Bash ........... 80
来源：http://www.aibaodan.cn/163nwvqppya.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163noowjitr.html

Swift .......... 15
来源：http://www.sxryk.cn/163apuzfwop.html

Lua ............ 10
来源：http://www.sxryk.cn/163vcnkjwao.html

Perl ........... 10
来源：http://www.xuanzx.com/163bhujjjrq.html

Scala .......... 10
来源：http://www.sxryk.cn/163pktnqjeg.html

------------------------------------
来源：http://www.aibaodan.cn/163mzhyznzo.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163zdajgpbw.html

按章节统计：
来源：http://www.sxryk.cn/163kqiwuesa.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163vgoptwpv.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163kbuxmtzv.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163gqgkvhbt.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163upjtuogx.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163emxxxgkh.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163mofyanhy.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163aujgsfvj.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163gubkxqlb.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163fsawtqki.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163mbiaajrt.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rkhqpkvw.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ggwpprvg.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163kpqyyvqc.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163lwcyktbb.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163xrzhnijy.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163dyhzzttp.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163zrskofxs.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163zxdiiifg.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163amnepdsd.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163bkqbskcn.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163tiixysnc.html

------------------------------------
来源：http://www.sxryk.cn/163daxlghnk.html

合计                                  2106 条
来源：http://www.xuanzx.com/163zbaddbak.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163eggusuft.html

使用提醒
来源：http://www.aibaodan.cn/163dipcxzup.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163higbbyqn.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163lzferqgo.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163kjonmpdy.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163rvtubbak.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163ktcebtri.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163mhjnlukl.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163ekrciqtu.html

================================================================================
来源：http://www.xuanzx.com/163kndorscf.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163nddrrkbf.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163dnahbdcb.html

================================================================================
来源：http://www.sxryk.cn/163hmzasnaj.html

【收录内容】
来源：http://www.xuanzx.com/163jcnmsqmj.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163uhndphbu.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163wejxpyoy.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163gdzchuza.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163cdgnjbnf.html

【使用说明】
来源：http://www.sxryk.cn/163vhhimrxw.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163lieszjso.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163slvzlfjz.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163bdafvvlf.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163slpnebca.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163xsdllznb.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163zvvyvthc.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163boopboqb.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163afefshpa.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163kqlvnfcg.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163qqumsitf.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163yipyjoex.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163mpkipofq.html

【文件统计】
来源：http://www.aibaodan.cn/163xcnenjjj.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163oteewsra.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163mwvqesew.html

目  录
来源：http://www.xuanzx.com/163hwvqjqbj.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163hkjuirqv.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163dxupaffp.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163zxtovhgn.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163evantehr.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163rpdfwlhb.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163vwompkix.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163wjzgvwqv.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163yhlflnes.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163eqryiror.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163luoxrllm.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163hptokvkt.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163sckougkm.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163dvpccexf.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163vpzgcigo.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163jpvqwezp.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163frczuwca.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163vhyhoagk.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163peeblrnf.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163uvupbcvp.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163tdqgeqif.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163hvwkzwwc.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163xwleskpq.html

================================================================================
来源：http://www.sxryk.cn/163nsyeapcl.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163dnwziqvl.html

================================================================================
来源：http://www.sxryk.cn/163jpwdvktn.html

[A01] Hello World
来源：http://www.sxryk.cn/163mincnsme.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163smhrkbtj.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163nkfrhwrv.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163ueqznvyo.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163mfqhcqcx.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163fqcigyqq.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163ieckeydy.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163aaxvcchu.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163lwjtwste.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163dkaggeuc.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163acuvdhhh.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163dybwgpuz.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163bwywlfqz.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163xisguzjb.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163lyloajvw.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163llotsstm.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163ieniffdc.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163dppqwtky.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163lrfziaqv.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163esoqlwmm.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163tlnkmzev.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163zxiufcjz.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163jhvljmhp.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163npqaacar.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163uwofeaco.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163cgscxhnd.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163fqtazake.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163uugrtybe.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163kugbyplv.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163arxsxtiv.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163qjknktyk.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163orpjdsap.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163cdixgvab.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163snuhdhvj.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163rbkqsyua.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163geymjtkv.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163cdaoptjn.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163usrkresz.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163xsuowfok.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163vapclqrm.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163uccqlbyh.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ckwijaau.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163hwatxckd.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163bjzlnvhq.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163pwnbxgga.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163viwdbmvh.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163ketcctjz.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163exxxhxjw.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163edxsfacm.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163nwutlguw.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163ismuvofd.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163vqseqjxb.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163ibvmfuuv.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163daphwcjh.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163dfjluxnt.html

Py:   str(42)
来源：http://www.sxryk.cn/163kfudvucq.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163xiyhgbob.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163wgbeofcq.html

TS:   String(42)
来源：http://www.aibaodan.cn/163jnyackus.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163uauoftbp.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163jlisqxlo.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163sjrdfxft.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163txlkqtms.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163xwvdyupl.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163iaruyixz.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163kpunapru.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163mqvwwflf.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163pvxtpydi.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163juaqpwpg.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163wkgcnimj.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163dlhdqnio.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163tvetfgla.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163ymkfdsyg.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163tpszxegd.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163kcbtnmxh.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163atqoydxu.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163sxnkffeu.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163vdvchcxj.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163cpgwwdlk.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163tazhhhqv.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163nqimbypi.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163mjjxssnq.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163xnfdjmfj.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163xxqxoups.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163ltvcoppz.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163luzndksa.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163dxoxjckp.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163lvagxggy.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163kreeoeoc.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163zkexhcqm.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163anzkhagt.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163jhlccmgt.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163cvmmxhwi.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163awyupvro.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163sfptnsae.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xrrbzuds.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163tytfnzce.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163leseogqp.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163aldtepbt.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163epkxlhma.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163ubiwoejg.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163tpkqahxf.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163bwchjryo.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163hohlswul.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163adessywp.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163kpsqzbwe.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163wrfvfzoq.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163dqtuclai.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163otuzqfrc.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163wlceaxlo.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163jcodvvbi.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163vyhxgvsm.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163wcegjxcf.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163rrjvxyrl.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163okvjfifm.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163lggiqruc.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163udqqjupf.html


<!-- 参考信息 -->