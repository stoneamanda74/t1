外链999!wailian999！

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163rmbjbqyt.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163fjomvmgq.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163ttcazumq.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163wfktplhw.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163kiraaqow.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163vknsybys.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163plxylthj.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163iustuczu.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163qbhdsfek.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163jpoygvmb.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163nwjknwsg.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163kchwowlv.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163idemjjeg.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163smnbmqps.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163cucgipjx.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163gbcegjlv.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163claxetyp.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163lsgsyqbg.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163jqgmndvt.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163qowmblxe.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163gdufkbif.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163sqlrkjln.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163jyfdfzwd.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163rghlsnor.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163cceeuecu.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163fkgzxgwm.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163dkakfqlg.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163vyelensg.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163frdpwkvr.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163prefkqza.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163bfkdwkbk.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163supojkfq.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163yehzwyki.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163lpvqjnwm.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163bilqgzvo.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wksjsuze.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163kfiolqhk.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163ihueronn.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163xxgcbsrt.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163zjxvengt.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163evsizujk.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163snsmlepe.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163nwjcygbk.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163griceeqa.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163fmevsusw.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163eqcpapdx.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163nksyedsk.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163loogqxqt.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163eqnpsqgg.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163cphsmvhp.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163aquqfzie.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ychcglzm.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163fekxxtlo.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163boibclgi.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163yfimgdgd.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163vqnjbjwu.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163eterxeot.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163tavtoipn.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163cutzqord.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163vskoczmr.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163fmpiodgy.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163jioerjtz.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163decngint.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163qojtybrw.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163sfrpglvi.html

npx vite build
来源：http://www.xuanzx.com/163kdkhybsj.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163odzqfbad.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163qytqovos.html

================================================================================
来源：http://www.xuanzx.com/163ldiubqtt.html

统计汇总
来源：http://www.xuanzx.com/163axkovkku.html

================================================================================
来源：http://www.sxryk.cn/163edjesnjn.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163eadwmyap.html

Python ......... 252
来源：http://www.xuanzx.com/163gdicocaa.html

PHP ............ 252
来源：http://www.sxryk.cn/163nxxfdmwv.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163gsncjgbg.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163nzzuipua.html

Java ........... 212
来源：http://www.xuanzx.com/163vxvrvxtf.html

Go ............. 212
来源：http://www.sxryk.cn/163iskdrnsv.html

Ruby ........... 212
来源：http://www.xuanzx.com/163uiavfbul.html

C# ............. 212
来源：http://www.sxryk.cn/163yneprqhn.html

C .............. 30
来源：http://www.xuanzx.com/163gycydsho.html

C++ ............ 30
来源：http://www.aibaodan.cn/163etcftwke.html

SQL ............ 90
来源：http://www.xuanzx.com/163ondwffms.html

Bash ........... 80
来源：http://www.xuanzx.com/163ylzhjone.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163pxqingao.html

Swift .......... 15
来源：http://www.aibaodan.cn/163jdbzwjcd.html

Lua ............ 10
来源：http://www.aibaodan.cn/163drqgmqqd.html

Perl ........... 10
来源：http://www.sxryk.cn/163xcyolctz.html

Scala .......... 10
来源：http://www.xuanzx.com/163hmdaedgb.html

------------------------------------
来源：http://www.sxryk.cn/163zicjatoa.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163ficdzzpu.html

按章节统计：
来源：http://www.xuanzx.com/163dcjelzoz.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163jjxcxfbc.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163yggejbbm.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163xscfvvug.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163euluoxhm.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163zwhhunnw.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163udjamyog.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163htxknomb.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163zvsljvjc.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163vgvxwbzd.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163pwebdmzt.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163obsciuqj.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163rddoerlz.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163tawvzicx.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163odnyyiah.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163arwpocew.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163yggjmwho.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163bvazmdzq.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163jxldxkyr.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163lsbziveg.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163tjiiziwj.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163xgpwnnkv.html

------------------------------------
来源：http://www.sxryk.cn/163asnyubdv.html

合计                                  2106 条
来源：http://www.sxryk.cn/163nhaqgjzc.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163zfyyxlcw.html

使用提醒
来源：http://www.sxryk.cn/163mnjlsjlq.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163onfegwjw.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163cvhkkhrq.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163pdrwuenm.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163zaogfbax.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163fyenqjoh.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163soqydffy.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163bbjfosor.html

================================================================================
来源：http://www.xuanzx.com/163gxmyewqi.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163hogzinkc.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163nrselqrw.html

================================================================================
来源：http://www.xuanzx.com/163zbpwcfvg.html

【收录内容】
来源：http://www.aibaodan.cn/163jqcmtneg.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163wmkbrwyh.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163bjzzzsub.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163jtnhtjgk.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163fjxbtjjz.html

【使用说明】
来源：http://www.xuanzx.com/163ixoovsll.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163bugrmwsk.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163zfcuyfvf.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163uucqqdfq.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163cmcleusd.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163jsccjyhb.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163gkwsssyc.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163atybuatl.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163hgskhcre.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163usrvpkom.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163gqeqderl.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163ulvqmarl.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163xhdcsqms.html

【文件统计】
来源：http://www.sxryk.cn/163sqttgepw.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163xdynyeot.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ysmsjkse.html

目  录
来源：http://www.aibaodan.cn/163arhsqnhv.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163dxmmpajk.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163tgjyrnhr.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163dyoyqyhm.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ydyxhwnn.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163oaxtqecf.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163ctsnmjep.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163izgenwuz.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163lyorodiq.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163iacdehqi.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163zrcskqsi.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163dklgiehj.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163nadksjwv.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163igtspdzi.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163nqkfhxln.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163pvlbklpc.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163ofgtxbqx.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163rdezrzim.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163lbzswxcf.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163ynbtgopa.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163cspsadgc.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163jgtkpscc.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163vtdjapdb.html

================================================================================
来源：http://www.xuanzx.com/163mmvamitl.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163zsokbgte.html

================================================================================
来源：http://www.aibaodan.cn/163nwmyvbik.html

[A01] Hello World
来源：http://www.xuanzx.com/163lkwffqas.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163cjkxbrbg.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163bcntluxm.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163itbcbtfb.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163bpbkwbyi.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163cgejgucp.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163lmelgebi.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163egaxeljf.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163woqzlgbi.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163berdkjpr.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163qcsfmhar.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163adwdlyfi.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163ymkqqvsx.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163inxujtpm.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163xwqrqjds.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163liwxwkcs.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163ktcvrrqk.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163imnhlrrn.html

[A03] 常量定义
来源：http://www.xuanzx.com/163sotcidbl.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163vsjbzika.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163olxrojrt.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163tjnomina.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163jpfrtiui.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163aqgdwihk.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163lzctzbkv.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163eoixycsl.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163kknuyvab.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163midiller.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163cimovtgc.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163ohtufnxq.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163wybypchl.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163koosyapi.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163sfpmvufe.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163cofplnta.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163cdteinmv.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163xofiewbp.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163xknkmvhx.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163hblzbjri.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163iydvxqza.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163tuolonbu.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163jkisnpra.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163xwbezlaj.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163dbnicdth.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163pdwqpmlb.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163jwfhlrnq.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163brricyfa.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163wwxqaxsw.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163vuivgeek.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163xaiynakr.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163jqjeanwq.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163iatzwdii.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163yvleytyq.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163xrlpdguj.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163qaedchsm.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163phtsjsrx.html

Py:   str(42)
来源：http://www.aibaodan.cn/163amcerjkq.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163nwrmtwpn.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163yxenynic.html

TS:   String(42)
来源：http://www.aibaodan.cn/163nenwrrgj.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163tynpwhqy.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163hoyufgwp.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163nruudtmk.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163byxjxinx.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163xvdztorc.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163qonyqfhm.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163moaosauy.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163cxldufnx.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163xtuvpchq.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163dlreovat.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163lsfaqatb.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163fnamkitq.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163urlmxhpj.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163meifvfiq.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163kkzoxftw.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163timfijhq.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163uknrwdgm.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163lhnfuetl.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163tppkimtt.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163letalzad.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163jnwjrsmd.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163bitpjuji.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163fvxuecrf.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163asfsczzy.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163dfmcxjre.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163omrwvawy.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163dmqaglka.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163ydnqpayt.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163hfguwsbq.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163vsnfifov.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163ejusglhb.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163syzcdxhu.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163axsncnwj.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qwacqnep.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163xowpmhqb.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163iqyrjnzt.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163sizcnyhs.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163uldjzfzj.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163trgpdwbm.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163lqzbhykg.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163jnmwnzzi.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163cujwvpfy.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163rqfmhoyd.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163sxaoohpt.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163robwdtbd.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163fyiiyhra.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163pbtlkrjz.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163zlisodhy.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163iwjlpwjg.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163eyblckrx.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163pmooirvb.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163svpusvyx.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163gvlweega.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163dvkfhkre.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163jbpqnxlv.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163drdudsxn.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163yzlhgyqx.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163xzqhgkfo.html

[A14] 注释写法
来源：http://www.sxryk.cn/163rpaxisoe.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163jdzslnsx.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163pcfuhznj.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163hjjrfebg.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163lveyveiw.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163hlctdxzy.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163zfvbddqu.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163nxuorhfu.html


<!-- 参考信息 -->