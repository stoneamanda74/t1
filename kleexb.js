外链999!wailian999！

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163gsifilkq.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163rgjnfhch.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163qgsxcwyc.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163xjwcclou.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163ktnrlpti.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ofimiqqa.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163lzenpkvp.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163tlupvqmu.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163stolkjjo.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163vqsuissy.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163kqiicpzk.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163ywwyfjol.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163fsxrehfg.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163efriliwm.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163peggpfcm.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163rwywhznr.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163audcxvxs.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163iiiqkmsm.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163wlwjrvvq.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163adezywox.html

[U105] JS：节流
来源：http://www.xuanzx.com/163qkxaxxvv.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163llpbwram.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163bggddsro.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163pikvfqap.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163subjuqjn.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163kkbxoivr.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163vdbcchjw.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163skwtbauf.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163jbuadykw.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163lthrjatq.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163dpvizoib.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163cmxcubxx.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163dpdahjch.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163xotievel.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163wkeirutg.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163zwftkrml.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163opnojbcf.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163aeaelqwo.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163evtnohsa.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163vjpscmco.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163zegsdzav.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163ehsliihv.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163bsecqmys.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163xwdgqkvt.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163ejxjymvh.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163hymezsuv.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163vqkcssdl.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163cjrbkdxx.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163jrtbfqoy.html

npx vite build
来源：http://www.sxryk.cn/163erriakwq.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163jfqastyo.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163jfhmkcma.html

================================================================================
来源：http://www.xuanzx.com/163kxkbaaut.html

统计汇总
来源：http://www.aibaodan.cn/163nxzdnntb.html

================================================================================
来源：http://www.sxryk.cn/163cvfbabbx.html

按语言统计（条）：
来源：http://www.xuanzx.com/163wfugyddq.html

Python ......... 252
来源：http://www.xuanzx.com/163rehnzrmu.html

PHP ............ 252
来源：http://www.xuanzx.com/163iqtmvuty.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163ridvdilx.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163ladeulnc.html

Java ........... 212
来源：http://www.aibaodan.cn/163ymzehceq.html

Go ............. 212
来源：http://www.aibaodan.cn/163iiiyvtoi.html

Ruby ........... 212
来源：http://www.xuanzx.com/163hcivspzs.html

C# ............. 212
来源：http://www.sxryk.cn/163lqauykav.html

C .............. 30
来源：http://www.xuanzx.com/163mleqjzsq.html

C++ ............ 30
来源：http://www.sxryk.cn/163wgpwnsoz.html

SQL ............ 90
来源：http://www.aibaodan.cn/163vyjjvqfb.html

Bash ........... 80
来源：http://www.xuanzx.com/163oaaqiecz.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163pmgpsqrz.html

Swift .......... 15
来源：http://www.aibaodan.cn/163whyizvkp.html

Lua ............ 10
来源：http://www.xuanzx.com/163owrtidtj.html

Perl ........... 10
来源：http://www.sxryk.cn/163egjqwhsk.html

Scala .......... 10
来源：http://www.aibaodan.cn/163elyaxvhu.html

------------------------------------
来源：http://www.sxryk.cn/163qujyypva.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163fjrvrsue.html

按章节统计：
来源：http://www.sxryk.cn/163sbbdjmry.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163zxdpfcst.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163hzljwjky.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ukslqtev.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163udfmhots.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163awhgqxwb.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163fbqesnbq.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163msaotnad.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163lzlewbvo.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163znqcfdmg.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163celgvlpa.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cupisngc.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163uzzhjbje.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ioeclvkk.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163itvodkfe.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163dcruzcdk.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163scykkkhc.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163zbgquzdt.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163zmthuckn.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163syrjstnu.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163izyfbkeh.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163ftwovgav.html

------------------------------------
来源：http://www.aibaodan.cn/163ulyupctc.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163kvjomuxd.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163kvkjbpjw.html

使用提醒
来源：http://www.aibaodan.cn/163fdbyjfqa.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163dkwexrzq.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163nqcdjdvq.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163utirpjlg.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163apllyabg.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163mtdnrpoh.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163vaostkpd.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163kubpyglm.html

================================================================================
来源：http://www.aibaodan.cn/163yjprvqhf.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163ckjinhoj.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163ekjkfite.html

================================================================================
来源：http://www.xuanzx.com/163ebmkkztc.html

【收录内容】
来源：http://www.sxryk.cn/163eylnkntv.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163wcsblqpi.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163xbsuyfqi.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163sfwgfwhq.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163qcldyqqf.html

【使用说明】
来源：http://www.sxryk.cn/163lyiwhtcc.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163wpuzzeuh.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163okwnkdkt.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163qhbssxai.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163szwsurug.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163aizripnd.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163fhxtydbc.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163tqrhsaoj.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163hbsekavh.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163prbuuwss.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163fqsyxlcb.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163qekynpot.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163uplagdsu.html

【文件统计】
来源：http://www.xuanzx.com/163jxgkbndy.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163crlrbxdv.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ozxinqfw.html

目  录
来源：http://www.sxryk.cn/163tzyyvvoq.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163gqvqgfee.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163nqovmjni.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163uvcnrsil.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163jalslvpw.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163lpnnnaig.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163fnnnybax.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163exnopbyf.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163nmcksebj.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163gqhxgyhv.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163yntapptq.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163nxxfvdoh.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163iaivonpm.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163agwegkgk.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163zcgaadhg.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ohyifqwn.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163upragmnd.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vpemyzgi.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163bpeckdys.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163qygxvikz.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163ghbccrbq.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ehaitcve.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163mxpynygp.html

================================================================================
来源：http://www.aibaodan.cn/163htsxksoe.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163flfxxrmj.html

================================================================================
来源：http://www.xuanzx.com/163fycdtunq.html

[A01] Hello World
来源：http://www.aibaodan.cn/163tjxvxtge.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163nzeswzna.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163dnurxokd.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163wrilkidp.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163ebvnxafw.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163hsizkzyy.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163cqlviauk.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163jjictfde.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163bujckxgh.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163kknzwdsq.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163wmwhvmrp.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163sckdlnhx.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163wazmrvyt.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163rgohmkpm.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163pnbthdpu.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163aemuciyb.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163comqnmhm.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163ruyaodqw.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163ivdpfqyt.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163sznjntjh.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163wkrgszyb.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163eobuykkp.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163ekbegnif.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163fymmjseg.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163cwgtluhg.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163sxbekazh.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163hjdgfbag.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163yavijouk.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163jkqotpcg.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163yumxfafc.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163boplbiju.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163aztuxibt.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163zoexrkfv.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163tyluiwpq.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163fwmjmfrn.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163dstxgcrt.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163zgwkrkrw.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163cbshbxcz.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163yuipmuqr.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163vneaarse.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163focvhyoy.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163vrwjpytf.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163kakfpugg.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163oohjobsk.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163dffwouox.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163swgdlzod.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163zzvahubm.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163uxgkhrhg.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163shwlhkdg.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163teefzpxi.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163aqwlvuko.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163wiuuvrck.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163qtdoomup.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163zulkutuw.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163fpnxvwvp.html

Py:   str(42)
来源：http://www.sxryk.cn/163oxnxykqt.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163mjmxbvbq.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163qwnmdaws.html

TS:   String(42)
来源：http://www.xuanzx.com/163qtlkuxvu.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163gixatzki.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163wnxxgzwa.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163idmvhgjb.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163wnocyhmh.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163fevobivp.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163kkulqvgx.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163ioogryoe.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163dtvcrqsq.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163iznmxnla.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163xpfngcor.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163qktyhkww.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163jlojzsrw.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163tyedzkru.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163sshnlxfc.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163quoyhhcf.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163qyaegduh.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163ecalgxfz.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163dqvgbqrf.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163mpgcijek.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163gxrfthiy.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163jpyhvxnp.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163ehrwssgs.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163lnytiiua.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163rxfkzbgd.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163pznaykod.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163gvqwieom.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163oreuzpdk.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163yozzhmls.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163axlgzlwi.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163wqhbnbnm.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163smqwfruy.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163cydgcwsn.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163azwyyziv.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163uezfvmqs.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163rgjuppyn.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xemakful.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163vaefqdcx.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163wkeiwmzp.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163mnqsmusy.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163fbrrtswg.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163ckqxqhtl.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163rzumnjyt.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163vmvpyvst.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163zgywpsot.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163qvuhixgq.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163iylefalm.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163nvsldfxi.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163tkmaezus.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163uqjohlfm.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163ktegsqww.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163plhpyyvj.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163cohdsziw.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163oloxyxqq.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163wipkxjyb.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163orgmtsbm.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163tidadynq.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163iebgkhgw.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163heyjstne.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163amjwuzld.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163hgjecfxz.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163vvrhadsu.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163rrxenrys.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163bbjshsgy.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163rftnwtkv.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163axxsosog.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163wioxzltl.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ihpjmgfk.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163yuoxpfut.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163fddkrtpp.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163iypvinze.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163znlehutp.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163ckyvrggb.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163znxjziyp.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163yyzifidc.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163cskxbmlv.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163zgpoubqw.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163hvzvwkgr.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163vyhmmxfu.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163tddkwtcn.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163oszircra.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163kmzkqwgu.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163gvoohppp.html


<!-- 参考信息 -->