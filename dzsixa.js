外链999!wailian999！

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163zpqelsqr.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163djhwjbat.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163fgswvzph.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163yxtmbxkz.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163qrrvguei.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163lmrftyhq.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163gjznurcd.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163uxidrbic.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163cjarxvhm.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163jjmxqyte.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163unonbhsj.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163ezriszih.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163drvomxli.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163fakkxuhc.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163yigeqsjd.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163ksusphat.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163eohneqdh.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163sbgmdqmn.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163ixnpggre.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163bjzculea.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163kmhqlyzw.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163snkqvzto.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163hcvouvns.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163qglcctuz.html

[U105] JS：节流
来源：http://www.sxryk.cn/163hmqyuxod.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163surkmjaf.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163oyedubww.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163wikclitv.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163pocukejd.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163jbyywedb.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163bwkdrolu.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163elknbmsv.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163kgkodtmf.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163fstaxhlf.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163eeblcvbh.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163lbwrmsvy.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163qtxfutog.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163uiojynhv.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163pqpvakbk.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163mkqvvtws.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163edotyydw.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zhzqaowx.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163fhxqpjuh.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163qjsrpfxc.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163ntaisnjw.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163wxjadvil.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163vkqarpoq.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163ggdmvnfx.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163gquhyvvc.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163ilaqcqub.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163gzynhsbm.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163lekiexis.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163kkhjypfa.html

npx vite build
来源：http://www.xuanzx.com/163fqbhlulq.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163ncvovmlc.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163trrkqvif.html

================================================================================
来源：http://www.xuanzx.com/163ejwqcwug.html

统计汇总
来源：http://www.xuanzx.com/163ydljbrnh.html

================================================================================
来源：http://www.aibaodan.cn/163fhcqjjxa.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163spockown.html

Python ......... 252
来源：http://www.aibaodan.cn/163xqftpfeu.html

PHP ............ 252
来源：http://www.xuanzx.com/163zxbuoyth.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163eizkxknq.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163vcanxhre.html

Java ........... 212
来源：http://www.xuanzx.com/163xtdhnevd.html

Go ............. 212
来源：http://www.sxryk.cn/163ubruzojb.html

Ruby ........... 212
来源：http://www.xuanzx.com/163dymmgpwc.html

C# ............. 212
来源：http://www.sxryk.cn/163sangfhjr.html

C .............. 30
来源：http://www.xuanzx.com/163vlcmzifr.html

C++ ............ 30
来源：http://www.xuanzx.com/163xgjmoflc.html

SQL ............ 90
来源：http://www.xuanzx.com/163yhomizdf.html

Bash ........... 80
来源：http://www.xuanzx.com/163csyywraz.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163xkxpbeta.html

Swift .......... 15
来源：http://www.xuanzx.com/163ssmtizvn.html

Lua ............ 10
来源：http://www.aibaodan.cn/163dwpogtpi.html

Perl ........... 10
来源：http://www.xuanzx.com/163xcayjmck.html

Scala .......... 10
来源：http://www.xuanzx.com/163jjbinjzq.html

------------------------------------
来源：http://www.sxryk.cn/163ybwxzcqz.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163onkhlkmv.html

按章节统计：
来源：http://www.xuanzx.com/163qvbzrqrd.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163lnuhljjh.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163prtbxbln.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163axxyswhy.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163jnfvqyvt.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163lwugmkef.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163grbeejtf.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163rtxeyeik.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163bbptjnzg.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163admjqqua.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163qzwcptmr.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ohnwxbgm.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163dgxuewco.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163kpncmfly.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163zxfotxoh.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163riqdzikf.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163bzgjamfh.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163qrmfbkci.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163ngefrwqa.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163uetrztmf.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163ehdwgivp.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163rjmzkpgd.html

------------------------------------
来源：http://www.xuanzx.com/163imqibsev.html

合计                                  2106 条
来源：http://www.xuanzx.com/163dahdtfvj.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163hozaqttv.html

使用提醒
来源：http://www.sxryk.cn/163aegbcfoa.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163lnnvhhuh.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163hdwelkei.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163sozjvsse.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163skeowcwu.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163yzoscedc.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163xnseqotg.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163lxdddibx.html

================================================================================
来源：http://www.sxryk.cn/163cwuyymbr.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163zaovgvsv.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163hcuqcvla.html

================================================================================
来源：http://www.sxryk.cn/163pkmkolep.html

【收录内容】
来源：http://www.sxryk.cn/163elitgnsi.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163awaapqru.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163uzvxqnrf.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163fpklaspb.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163vbvxgsyr.html

【使用说明】
来源：http://www.xuanzx.com/163ewjkwlnh.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163zeacownt.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163vizjtbnk.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163ijabnyzq.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163mocqtlgi.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163jsqukowo.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163ezrrbain.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163axxoctrm.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163diulvtcu.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163aykkycpg.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163nprvhzli.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163guafhvmp.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163igsvzmza.html

【文件统计】
来源：http://www.aibaodan.cn/163mclvpxol.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163nrdkxqhg.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163tmsygiho.html

目  录
来源：http://www.xuanzx.com/163hpkwakzm.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163lkrpitym.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163ediixxwb.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163aqoztgxy.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163kgfceged.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163aymwxgfc.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163zsskzfjd.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163tnzugyug.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163gysgvpoo.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163yxwbewvj.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163pakactzv.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163ijxjipcm.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163vkzhfvsp.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163emkkiuum.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163pfbqdqhy.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163jejhoqwy.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163dmkqtwkl.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ymztzejf.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163skxpacxo.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163olkqojyq.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163zlmmxkfl.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163fbobeqyq.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163pdnfcdzy.html

================================================================================
来源：http://www.aibaodan.cn/163deaezqjd.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163njsjhzmo.html

================================================================================
来源：http://www.xuanzx.com/163pjfyymom.html

[A01] Hello World
来源：http://www.sxryk.cn/163ryszkdpo.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163mdsuqeqw.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163dvinucqw.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163mtvtdvof.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163tsftbfyp.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163zcngdhdj.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163bjkyfyko.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163ievqyogv.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163kljozdho.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163bfgticaq.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163mfhfokts.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163yeeoalhn.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163btsijiii.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163kujcpmyf.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163lcgkezky.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163drttfqnj.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163cucqyyup.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163nkvcwlwg.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163lwjxxpvs.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163sujywkgn.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163mxxzszzo.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163ntkxqmqk.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163cvyymqov.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163vmdtgvip.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163jxiabmyn.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163aotnqprx.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163vpjupipd.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163omlygmsv.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163rwkkiikr.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163btvrnyfa.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163jgirgwcq.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163ahniauhp.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163amjtdjow.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163xvcnmhon.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163uffxcizc.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163xzaucqgc.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163fwfqhlfp.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163luwnulqo.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163vipksdeo.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163lojtbjrl.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163ouustfdn.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163sxlhller.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163pvketkut.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163yaspewuv.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163nargzena.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163qdphcbic.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163hpievfvh.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163esnuusvt.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163oydcacqi.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163hasykhqn.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163punzhoey.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163tlvwtmtg.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163ulktplnf.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163depxxhss.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163ecfcjevj.html

Py:   str(42)
来源：http://www.xuanzx.com/163pqfykoaf.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163owmnpkiv.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163bmbztczk.html

TS:   String(42)
来源：http://www.sxryk.cn/163dwqerlky.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163wiralqzx.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163sivhornw.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163obbzvohb.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163sshssaxk.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163tbhkuaxc.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163oubajmah.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163unpthlum.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163uyyvbalp.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163kkocmlkn.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163vbdrsxdt.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163kdvagaqd.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163dlljiaab.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163xdeueslk.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163wqktavbv.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163kqurygom.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163fcxwrnxi.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163nogherow.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163ekiuhzup.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163rvthhqdm.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163fyxdlcao.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163sgmzotgk.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163eykesepu.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163swnclhpc.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163xgthkwex.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163iumhqtra.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163fkffoqvf.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163oexfiysb.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163svdbipsj.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163xhhpzjxv.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163xkgoxhmf.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163bsuyrzyp.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163sawetygc.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163etkcdzio.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163avrolkgu.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163usppanlm.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xqkixvts.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163fkiahoxx.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163bdwjusgk.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ypjubmpm.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163eaubxhir.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163khlegifd.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163hzpajcam.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163jxguzpgj.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163zpafqkhv.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163ofehgjft.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163uygfjmzu.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163qpdetxbm.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163oqaamqvi.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163gjhtrfvm.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163xrmdbaka.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163vhgdnpha.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163gdvfxbvr.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163gsylenqy.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163hjkusosp.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163ffiqxczt.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163uycjztmt.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163zobftcny.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163abjnqqnx.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163ddrzscoi.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163wbzceoso.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163bdxexnyc.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163hvfgezbq.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ewrhwklw.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163vzaiwdou.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ckvmghfo.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163esoqrnfg.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ptiudllj.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163sfkbdpvf.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163nlihabcr.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163jggpdxqd.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ptnufiex.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163pwxbkakx.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163gklquxzt.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163ehcejnlm.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163txfckmhb.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163pgjjjezp.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163zfxgmeez.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163juidyimz.html


<!-- 参考信息 -->