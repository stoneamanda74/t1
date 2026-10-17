外链999!wailian999！

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163fhsjhkra.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163phjrrpqk.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163uoevuxwl.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163ipoeftmg.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163lfuvadfa.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163qzdbriri.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163ndocdwzn.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kqemgtpk.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163idhofqat.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163rgrhpckb.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163tdehtyth.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163egiyihcr.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163mrkqwdes.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163xhiomrfo.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163ysbvzwes.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163mqglkqxx.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163bnkjrihj.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163cqjmhdil.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163xihgsgtp.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163cigzhbmi.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163lqoxduvx.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163scsblmpn.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163iuohzkoo.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163sqygmqho.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163vodcshyt.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163ggfunxew.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163zlmdrmap.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163gqrpdefm.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163plkpxtqn.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163xbkpxeme.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163axmlwnzv.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163rnnuznjo.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163dkmfdals.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163xamkcdhu.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163oikvfkta.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dtbjghiu.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163gwljhcnd.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163fppgvdse.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163omrrfcbb.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163fzvzjldn.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163zgsxdchp.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163nuypqqkw.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163uwbvggcy.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163hntqsfqj.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163aycjdvub.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163xkuayfpr.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163srnpzagq.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163nefiarid.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163qepnuour.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163vvkbvlth.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163katpljbh.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163snpvjlyc.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163hudyyuih.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163yhyfkexi.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163zaqtlpyi.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163sayigueo.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163zdphidvl.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163ygmeksxi.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163lstibxja.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163pqyxqtmq.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163sgvgdsuf.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163asfcyoch.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163qzncsnvn.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163tyvusdbn.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163jophyxfr.html

npx vite build
来源：http://www.sxryk.cn/163dzorworv.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163bpizkdhe.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163gllgzuho.html

================================================================================
来源：http://www.sxryk.cn/163pxznbgej.html

统计汇总
来源：http://www.sxryk.cn/163llqyppac.html

================================================================================
来源：http://www.aibaodan.cn/163zulwawuo.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163xfbxyccr.html

Python ......... 252
来源：http://www.sxryk.cn/163cixlrnag.html

PHP ............ 252
来源：http://www.aibaodan.cn/163hzmzojgh.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163wczgfobn.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163lstrwvpi.html

Java ........... 212
来源：http://www.aibaodan.cn/163wnjunkcb.html

Go ............. 212
来源：http://www.aibaodan.cn/163jduhonwf.html

Ruby ........... 212
来源：http://www.xuanzx.com/163qfaudntz.html

C# ............. 212
来源：http://www.sxryk.cn/163vqtnyvrz.html

C .............. 30
来源：http://www.aibaodan.cn/163wpaopzcx.html

C++ ............ 30
来源：http://www.sxryk.cn/163ufyeqnsw.html

SQL ............ 90
来源：http://www.xuanzx.com/163mhlgxweo.html

Bash ........... 80
来源：http://www.aibaodan.cn/163khygnzpw.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163cidvuafx.html

Swift .......... 15
来源：http://www.aibaodan.cn/163mvfcjimr.html

Lua ............ 10
来源：http://www.xuanzx.com/163nnkjkwkf.html

Perl ........... 10
来源：http://www.sxryk.cn/163cyenvpdv.html

Scala .......... 10
来源：http://www.sxryk.cn/163bydyohyx.html

------------------------------------
来源：http://www.aibaodan.cn/163mflejsbe.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163omtfwude.html

按章节统计：
来源：http://www.xuanzx.com/163buxgdcrd.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ycygvbxb.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163sjwuauzy.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163soibrxen.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163pekmvjin.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163jrbvpcuq.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163jmvcpwab.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163gaeojsnc.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163drsgbijt.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jvjckolk.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163sntofhrj.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163btwcmcga.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ccatmqtc.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163srphplez.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163apqihgfp.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163ynllzaiu.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163auadmkpi.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163amheleuv.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163ahnrzand.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163bqzzmgrm.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163vlzquzfb.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163zubtorfw.html

------------------------------------
来源：http://www.aibaodan.cn/163qnlaogqg.html

合计                                  2106 条
来源：http://www.xuanzx.com/163iudhmjei.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163givexcjz.html

使用提醒
来源：http://www.xuanzx.com/163ehsroauy.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163cdswleac.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163humjzpeh.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163kfuvjiwf.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163qwofzajt.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163jzkostsc.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163agttozqn.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163mizmlqbm.html

================================================================================
来源：http://www.aibaodan.cn/163bxnqvaai.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163ibkugnbr.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163mkpobqrw.html

================================================================================
来源：http://www.sxryk.cn/163sfexueke.html

【收录内容】
来源：http://www.aibaodan.cn/163eyllfeue.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163wusgfkbb.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163wiwhdpbp.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163kthosdrp.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163nvgagbzv.html

【使用说明】
来源：http://www.aibaodan.cn/163llcdajes.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163lazwxned.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163ruyjtrrh.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163vhgxuxok.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163qrpwputb.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163kfnhlouq.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163ktpgcmsd.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163dwbnugrw.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163vldmjddm.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163amsgijbo.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163fbkhmhrc.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163txlpawws.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163ohpiqwuh.html

【文件统计】
来源：http://www.aibaodan.cn/163uchahjxh.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163uzdgtisv.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163jhzxkyhb.html

目  录
来源：http://www.aibaodan.cn/163zitaerle.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163nwsksrrg.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163yqrbtlak.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163fwsletzd.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163jtzmjkvk.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163dnsiipgu.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163dmrgaeki.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163xbkfmtte.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163mxbmdcze.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163jajwihbn.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163curwxzpo.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163zlkxbxbu.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xnihzcsn.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163naawkwhh.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163vdiruqgd.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163wgjydsie.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163zapaeojg.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163khqewziw.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163qxyobucr.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163cpygtvzz.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163fboevgtz.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ibofdlui.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163lxapwuoa.html

================================================================================
来源：http://www.sxryk.cn/163falrlcmw.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163cpwowmvt.html

================================================================================
来源：http://www.aibaodan.cn/163zxarsplg.html

[A01] Hello World
来源：http://www.aibaodan.cn/163gdevenrx.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163jxhyqlkq.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163bpxpmdsx.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163mpusvqui.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163wyaqfwyh.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163skwpvxyo.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163mxgineyo.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163hsjvwwwp.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163frfwgqtu.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163rpkvwtvv.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163fhrbkgjl.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163qzxtscbv.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163ignyupzl.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163dzbylfco.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163dpwfqnhd.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163ixglcjnq.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163jcupwfkm.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163prmyqmlw.html

[A03] 常量定义
来源：http://www.xuanzx.com/163iewnrydl.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163yykfshqb.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163xgpigxby.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163lvlcrbff.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163uylvxrks.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163ilvqitgo.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163yipoydpi.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163tabqpzsn.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163golnjuuz.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163pqevivjm.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163zmklkcky.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163ttnkgszz.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163rkxndzir.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163afqnmugq.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163vgtrmaom.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163wnajinsf.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163htdlwsxq.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163ofzqfkja.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163cyqntyqx.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163vghtnsjj.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163afvpjatk.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163wfzvuorq.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163cwxksncc.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163rnboyvhn.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163jpihnsmu.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163qtpxwnuh.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163uaizgnin.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163subjdnda.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163pevsxpeh.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163qmkqzbqm.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163wczotaki.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163coihqkda.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163adoopbzj.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163karxwxfb.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163byypbtbb.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163lpbrohzv.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163vsprbynx.html

Py:   str(42)
来源：http://www.aibaodan.cn/163zxtyjebv.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163ulqsxokz.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163kerzeykn.html

TS:   String(42)
来源：http://www.xuanzx.com/163upnfvpzh.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163iqpbueaq.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163wxzuwwyq.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163sikhgsgb.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163leefuoco.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163avthrjch.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163hbpdegml.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163moonmpio.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163wbiqucyl.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163eqzdunft.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163fzzgqgoi.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163hpelwkwo.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163mjugyobf.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163plfmfyan.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163lgpmqwih.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163blvzmsdl.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163gepujhln.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163kallgbsc.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163irbmfevg.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163upgqwqws.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163aqrekndt.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163yzekkeme.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163zltsjrry.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163jfrikqns.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163eqwyxtte.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163eduwapuz.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163mqqvtjwl.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163haavtmhw.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163cupjsfix.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163gpoclyhn.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163ubeiuovh.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163bzbywtta.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163ccjsttil.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163crryrmxl.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163vhptstku.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163xsyioryf.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163usbtnhne.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163jsahrcwi.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163vqxbtpib.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163reasxytl.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163iimxzlpy.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163bairjlgz.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163hcvqwoiy.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163dtozqvhc.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163hwefkzxb.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163jiruozwy.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163xtexekfd.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163yfyhbgcd.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163bimapmmx.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163wkidvdwj.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163bsxunlfj.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163hgkujqmq.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163lmtwuehk.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163bnrrzedk.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163zpjwtoko.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163lvvtxmyi.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163dskmevyv.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163thujeuft.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163qilgtkse.html

[A14] 注释写法
来源：http://www.sxryk.cn/163xjtltorv.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163fjljiibx.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163frfdtupl.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ksgsycjm.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163xwxgvkyk.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163enitrbck.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163tyklvpjf.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163fjvzoknl.html


<!-- 参考信息 -->