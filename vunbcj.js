外链999!wailian999！

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163lgfmmzca.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163wzbgovzw.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163picjigfa.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163bxowxrfy.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163btgkakll.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163kliuaowu.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163pkxhvwlo.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163eznoogwb.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163misgnzst.html

a?.b?.c
来源：http://www.aibaodan.cn/163owvgqatf.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163zsmebtap.html

a ?? b
来源：http://www.xuanzx.com/163dlecrnly.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163ihitdcwi.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163yzltjfds.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163muhtuwfe.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163fsooiceb.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163tafnefbz.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163rpibtayy.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163kcsaalij.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163puwogtgn.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163lhuzxwgh.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163saedwiau.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163ylydwqgr.html

structuredClone(obj)
来源：http://www.sxryk.cn/163knsdsarj.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163aktrvlpi.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163vcrluflk.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163sonppkfi.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163pnnbkyox.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163tmcmejnc.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ncugjpad.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163josdvgax.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163csmymesr.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163xhylwcgv.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ldpgkrcg.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163crybvnqb.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163oksefdtu.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163mszwmagw.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163ammvuddj.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163wpshdqva.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163dundcvej.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163utotvtwx.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163mgikkweh.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163vzymhhjr.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163ldrcjbop.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163hgbzrccj.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163plavieft.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163pgjgbulc.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ribpdhgy.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163iusbovyi.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163ooglqegs.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163aqdkwwbm.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163kcakfzja.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163mawhaznt.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163jndvrzqf.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163tqbkwsvc.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163gkodoban.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163wsenpnrs.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163inrpykut.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163naxcxzyl.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163xdjnybil.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163fcjstozc.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163omqabggs.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163ybkjnpic.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163btrwfbcu.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163eehtxinc.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dpfyzasa.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163xhnwahtc.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ashvpqbx.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163sbvmsnhd.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163lpncwavx.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163jvjujjnq.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163xuqwdllz.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163cusaluuv.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163hciklhax.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163wmwuvyxn.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163sljoyjps.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163zkaplgkd.html

npx vite build
来源：http://www.sxryk.cn/163wgynamcv.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163jcyringg.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163bqqcbpza.html

================================================================================
来源：http://www.aibaodan.cn/163xdgiorye.html

统计汇总
来源：http://www.xuanzx.com/163dugsiriu.html

================================================================================
来源：http://www.sxryk.cn/163sxbrgome.html

按语言统计（条）：
来源：http://www.xuanzx.com/163shbaosjk.html

Python ......... 252
来源：http://www.sxryk.cn/163zvhlruii.html

PHP ............ 252
来源：http://www.xuanzx.com/163kuesjrgg.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163urfmxywg.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163qhrckfjf.html

Java ........... 212
来源：http://www.aibaodan.cn/163kwrdpkly.html

Go ............. 212
来源：http://www.sxryk.cn/163wydedpjl.html

Ruby ........... 212
来源：http://www.xuanzx.com/163uvzzbcza.html

C# ............. 212
来源：http://www.aibaodan.cn/163cehllbaj.html

C .............. 30
来源：http://www.xuanzx.com/163mgwyswqt.html

C++ ............ 30
来源：http://www.aibaodan.cn/163mnlxnbpy.html

SQL ............ 90
来源：http://www.aibaodan.cn/163apswqlen.html

Bash ........... 80
来源：http://www.aibaodan.cn/163octbrkjl.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163froqvess.html

Swift .......... 15
来源：http://www.xuanzx.com/163gwcykrlp.html

Lua ............ 10
来源：http://www.sxryk.cn/163euniaauy.html

Perl ........... 10
来源：http://www.aibaodan.cn/163tsfmfxyz.html

Scala .......... 10
来源：http://www.sxryk.cn/163veltyftv.html

------------------------------------
来源：http://www.xuanzx.com/163prlcdbec.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163nobqgwav.html

按章节统计：
来源：http://www.xuanzx.com/163ugilqsed.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163fgodurze.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zdxepduu.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163yazjlejr.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ffujwybg.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163dbkhztha.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163jnzkqris.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163lvbykwne.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163tlntotja.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163gwcjzqup.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163tmocnmia.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163gdbzkroh.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163arjedqmy.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163tpuuubhg.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163yhrzjlge.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163bplqpjqu.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163tpplftcs.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163elthhqcg.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163xrvvfboe.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163rgzdyhxr.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163mtlookle.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163bmypgfnm.html

------------------------------------
来源：http://www.sxryk.cn/163rgotebvm.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163vswtfzxx.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163omjmyxyt.html

使用提醒
来源：http://www.sxryk.cn/163nzlkxnvh.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163xqhjmgpq.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163lelhatnh.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163hmtygtda.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163ljvyayts.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163ncystrtm.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163bokqrufs.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163xqqxueso.html

================================================================================
来源：http://www.sxryk.cn/163slegyiph.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163fqhmckiv.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163ievbovpx.html

================================================================================
来源：http://www.sxryk.cn/163qjejjazm.html

【收录内容】
来源：http://www.xuanzx.com/163igxegtyg.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163lkjhlrgr.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163hweizoqw.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163dljoszuz.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163wjmmimmr.html

【使用说明】
来源：http://www.aibaodan.cn/163cyibvelk.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163qigancua.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163pgmyggui.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163edwwgtsi.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163yyohknja.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163kacomshv.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163rlkloyge.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163fsztslyn.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163kdehzyoi.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163wxlnjwdi.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163rtfynqkn.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163jdzubxba.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163uczoybzi.html

【文件统计】
来源：http://www.aibaodan.cn/163adszpelk.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163tvkarncr.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163vmodstey.html

目  录
来源：http://www.xuanzx.com/163txcjddyz.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163tmfpnbfi.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163cftvqavk.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163sdsrynpb.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163wmxvsxfc.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163ludzvndm.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163gnvqsopc.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163dbbuamks.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163hbswyhaa.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163mksuxakl.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163szyvirfu.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163ocheqyih.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163fvetwcih.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163euvpqrwm.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163fabacncr.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163qgybelkg.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163vkkwseqs.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163fwklznem.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163aezocolo.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163nokeilgp.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163oqxxtoqi.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163zkvdwmvh.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163qinsyxyo.html

================================================================================
来源：http://www.sxryk.cn/163nanacvak.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163pyvyiaso.html

================================================================================
来源：http://www.xuanzx.com/163bohgajws.html

[A01] Hello World
来源：http://www.sxryk.cn/163reqmrvem.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163hfchlhqf.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163ofleyzqd.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163qvlnjznt.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163natpsyqp.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163phprlffi.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163hfccvaxl.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163pjmhdrru.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163nydoqnhk.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163ciufellt.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163mxndausm.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163bjhjvmuf.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163mjqoyivz.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163nttccwkc.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163mykhiole.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163pxgfqjqn.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163oddprwcj.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ntdryneb.html

[A03] 常量定义
来源：http://www.xuanzx.com/163mglgrxho.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163bgoxwgmo.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163vyxtesnq.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163uzkslrjk.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163rtqkjxzy.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163qhroxhmy.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163kkghhxgs.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163whnvkson.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163dnzsruoq.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163wjhjkhpw.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163pkfzwmgb.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163pjltdput.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163pawqjjgd.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163durogmnt.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163askmihct.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163ispbcdea.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163gvenpapw.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163fydozeuq.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163xfkqbrei.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163jgzzhqsj.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163hinbauuh.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163jbocmcaf.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163kowbmmgt.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163kwnqwnbn.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163dvdismlg.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163gkeaxofc.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163wzfolmyw.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163qgpstymi.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163kxbhjreg.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163txtqmhpk.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163omecqffz.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163itqihlev.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163ijpmzizc.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163hekbmwsf.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163xparitpn.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163vtwsfyui.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163lmchfeaw.html

Py:   str(42)
来源：http://www.sxryk.cn/163ttavanwo.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163pvcxvzdj.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163nzzjvkfy.html

TS:   String(42)
来源：http://www.xuanzx.com/163paiugida.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163oatnuanm.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163wyaxuhid.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163ryiaevbl.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163ikndfzzk.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163kjvwsvyc.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163nimumowk.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163dqzgtizt.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163qgbgoqeo.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163soaksezp.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163teagyncf.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163zpvbovhp.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163imelcbda.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163kpffptul.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163lfwzqjzu.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163vvdgsuiv.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163zzeeipjg.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163sibnrtqw.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163fewjkwgi.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163pvyoafzi.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163lvqfjwyf.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163wezvniyu.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163pgzhctrj.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163cfuuluil.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163rmodyitv.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163vcwhfova.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163vjnochps.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163yymutctb.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163qeyoxmer.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163jbbkbpsy.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163asbyoeoa.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163ebgbafkv.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163dojebyrk.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163rcmeejju.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jsyurwtg.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163slsnidoy.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163cuuyedbw.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163vqkakisg.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163qumtrbik.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jdmrdwcg.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163xlkdeqtt.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163pvtzpaoe.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163jtrreffv.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163icvidevt.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163termzfoz.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163giarvxgx.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163cykooygz.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163mpumredq.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163gosksidp.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163dluflmcl.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163firdrddc.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163wtdmywkq.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163fcrppvxd.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ptjkpqpx.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163krdzziup.html


<!-- 参考信息 -->