外链999!wailian999！

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163uqfhoppi.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163jacliujq.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163prwnbmiz.html

structuredClone(obj)
来源：http://www.sxryk.cn/163juwohefh.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163btkrxvjf.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163ervoqdry.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163bewjwlat.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163leboblkb.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163jsawdnrv.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163dzadrzvh.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163kpntrqnp.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163kebjwoez.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163yptggqka.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qngozbux.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163xwdjieys.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163bccgldcb.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163jsprgzjc.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163olarkasz.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163usqefmwr.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163uscshvvy.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163qzwzlckx.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163ggmvbged.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163kamonvtm.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163mrzuiemd.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163ytidssat.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163ezrgrwqo.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163mtsrcdmd.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163jroboejz.html

[U105] JS：节流
来源：http://www.sxryk.cn/163bodjcdrb.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163wkbiwlzh.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163dczienbr.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163uizodznf.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163xjroglnp.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163nievdxqg.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163iocqmgdl.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163brtqqqse.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163ngyzcahv.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163wqasrzip.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163movcdfct.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163bwtbpmvn.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163ghzuljln.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163ngrctamc.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163yqpmvtyu.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163gbilvvri.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163vhlgevnk.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163toksqvxk.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163nhaiilst.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163qhjpvoms.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163vsatmjyl.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163vlhooniy.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163qqumgtge.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163wuglyqev.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163ewzesuom.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163vypmtufu.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163mdkajspb.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163kmfucebu.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163dwkhkfmg.html

npx vite build
来源：http://www.aibaodan.cn/163thvcpoua.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163zgtaxvsf.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163fqnmsqdo.html

================================================================================
来源：http://www.aibaodan.cn/163dmzvfrqr.html

统计汇总
来源：http://www.aibaodan.cn/163rcavdebx.html

================================================================================
来源：http://www.xuanzx.com/163jlluybfa.html

按语言统计（条）：
来源：http://www.sxryk.cn/163bkicwkms.html

Python ......... 252
来源：http://www.aibaodan.cn/163kamloajx.html

PHP ............ 252
来源：http://www.xuanzx.com/163wopyardq.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163ndykyxcm.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163ghcflauo.html

Java ........... 212
来源：http://www.sxryk.cn/163stzxldfi.html

Go ............. 212
来源：http://www.sxryk.cn/163dkkqxomi.html

Ruby ........... 212
来源：http://www.sxryk.cn/163ahwubdws.html

C# ............. 212
来源：http://www.sxryk.cn/163ohimkpqr.html

C .............. 30
来源：http://www.sxryk.cn/163elzucsid.html

C++ ............ 30
来源：http://www.sxryk.cn/163pwrvqjvk.html

SQL ............ 90
来源：http://www.sxryk.cn/163okekpcmq.html

Bash ........... 80
来源：http://www.aibaodan.cn/163exygbjqc.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163dvyolurm.html

Swift .......... 15
来源：http://www.aibaodan.cn/163lwrigqsz.html

Lua ............ 10
来源：http://www.sxryk.cn/163kgvilawp.html

Perl ........... 10
来源：http://www.xuanzx.com/163foybnjfx.html

Scala .......... 10
来源：http://www.aibaodan.cn/163mmduptrf.html

------------------------------------
来源：http://www.sxryk.cn/163duschmib.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163lpfwfsyj.html

按章节统计：
来源：http://www.sxryk.cn/163ppwaassr.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163jnjmsldd.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163wmkhgyxc.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163mnwsemuk.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ybtuiorh.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163xsupzysk.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163lhmhzdlx.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163zxlbnswv.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163cwaunpfe.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zsupwiyw.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163amedumhf.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163plgtbyus.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163fzfciudl.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qfyhifef.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163zwakcbvd.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163hjesbxnc.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163dbpdxuka.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163dkhdppbh.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163ptnyankr.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163cfluftfd.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163vytzsbfd.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163ulxlehgb.html

------------------------------------
来源：http://www.sxryk.cn/163fpajbyfd.html

合计                                  2106 条
来源：http://www.xuanzx.com/163pwwuaxyw.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163czhivhje.html

使用提醒
来源：http://www.xuanzx.com/163spnfavpc.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163jszdopuh.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163mqgqdkgz.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163yfkdytpm.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163gnvzqxnn.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163scphjsqi.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163whvnkexi.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163nrriaceo.html

================================================================================
来源：http://www.xuanzx.com/163qdndasqh.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163dfrtwjon.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163sutvdzsi.html

================================================================================
来源：http://www.sxryk.cn/163evrhmduk.html

【收录内容】
来源：http://www.aibaodan.cn/163myoikouu.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163kzpjabfm.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163kzmeabtu.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163yruslqpt.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163janqfwbq.html

【使用说明】
来源：http://www.xuanzx.com/163tbegxetn.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163zeuxebwi.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163ivaalhxv.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163kxhjwric.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163vkegfcaz.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163jrgcqhqr.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163rubbczam.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163gmybriuo.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163orbisdet.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163lczeofch.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163jsrlfbtv.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163zdmdfibf.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163zsndilcw.html

【文件统计】
来源：http://www.aibaodan.cn/163kfjucyhn.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163avbsoyoi.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163hzcrppua.html

目  录
来源：http://www.sxryk.cn/163tplfongh.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163vcjtoetp.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163yobfhdbg.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163znwxkkfg.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163atrrimux.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163uyhimjjp.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163oxvztawh.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163lqmzlfea.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163pvtjtspq.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163yzjuhymm.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163nbhhjsmb.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163uvgckjda.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163qweipcml.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163jigpufqd.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163qzwztumb.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163aeureezv.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163ysdlyemy.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vbznohqs.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163skcualnq.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163ymfxfbbn.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163smbzcimy.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ahiqijcm.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163onihvidj.html

================================================================================
来源：http://www.aibaodan.cn/163bmtnmltd.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163utpuesbu.html

================================================================================
来源：http://www.xuanzx.com/163wfrnadvr.html

[A01] Hello World
来源：http://www.aibaodan.cn/163kedsrtmr.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163masmjrcf.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163biicgyqe.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163wufytbhe.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163galnfwns.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163orpbbqro.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163udsgbcsq.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163rdxuigzi.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163gqgjrgsb.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163kpykxmym.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163ynobyunf.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163zkhfmdul.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163lwmvlknm.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163xmsctqzk.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163ohxafdfb.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163iffzqyla.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163tnnyntwy.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163ppeaxefq.html

[A03] 常量定义
来源：http://www.sxryk.cn/163cujxdkzd.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163jlbzyhdw.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163egaaafyk.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163ewlzuyic.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163xxdbjxwy.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163izskjrdt.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163jxlsnntw.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163khkprbak.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163mseqdsdn.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163fgwhutzo.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163vglqjtpb.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163ksoygdte.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163egbckchm.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163vhogdldd.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163chhksdhr.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163nuoegolb.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163mscqqcbj.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163gztticry.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163cqldfcne.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163hmafclnr.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163sebgxyjf.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ppldkdzm.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163myaxfixg.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ukblqgdy.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163xnbsbbjt.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163hrghvqil.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163xxudtthx.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163nzsvialw.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163ciiergev.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163jlydzsxx.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163kcgxlzpk.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163nofprkob.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163hzvyblqb.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163ooysnkdq.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163cowxihzl.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163bechylba.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163wdvqaaqe.html

Py:   str(42)
来源：http://www.aibaodan.cn/163fupbuqpe.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163nkrlxbtx.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163xyvtcwnh.html

TS:   String(42)
来源：http://www.aibaodan.cn/163xcaawhwi.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163woqrtnla.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163ilarpoef.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163eczmefvb.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163mudyqroo.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163ilqlmelv.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163fkecwykm.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163uavmaskk.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163gowdtxft.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163rnekmfcg.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163ecnqlepr.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163hamhcwvb.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163lriqjead.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163wtavvqsq.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163spfyjjya.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163ythjijdo.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163vigetbkc.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163unypamxt.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163mhleznzk.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163ighbxhsi.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163qtggutbb.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163qfsngliu.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163ksjaubnx.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163lpdysosq.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163yamufgbm.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163mjdunnhp.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163icadqseg.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163mhiuiiyc.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163btzdcnwp.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163wurrgpmh.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163frwvlatu.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163gecrnozx.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163jbderynn.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163grkadevm.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163iertqjxh.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163zkvhsupy.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163exhgqhyc.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163uxsplwxe.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163rzqhkvnp.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163eylvnzqs.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163pffibadv.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163cftkvlex.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163xjuqgvls.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163qunewftp.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163fliavgku.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163zqvxhoim.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163cmsiwhay.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163goaaxzsq.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163cbomycfh.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163seawclmj.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163jebkkjeb.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163euordmla.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163uxwarwsr.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163evrsbhgv.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ququsllk.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163shwdqqli.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163nzztmbml.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163olshoulh.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163dcupvkqk.html

[A14] 注释写法
来源：http://www.sxryk.cn/163ojcayuao.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163xxdglesa.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163arbkftmo.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163mbvfzjon.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163jkefsroc.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163hzjksndm.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ebboechu.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163pyfbcxes.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163vdokyhak.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163adfigehh.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163naxawolq.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163gaqurfqs.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163krfvpvks.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163bmlpicgr.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163ccrlwdbx.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163nglekcvc.html


<!-- 参考信息 -->