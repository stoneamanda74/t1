外链999!wailian999！

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163mjupdfft.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163nnychxdv.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163ohakaaqq.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163yqjobqbp.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163kribimrp.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163sqsgpyxv.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163dydsckwx.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163qfjzdnyo.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163eprtcbwv.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163arwdtpll.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163ubnycmqt.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163fmktsdps.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163mmawxrlf.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163njiywlfz.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163fejomeat.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163jxcvtudn.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163olmxnxqd.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163bydsthcs.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163idjmbkpz.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163tywtrjdd.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163itnjawgi.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163lcmaknlc.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163kopqhuzx.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163wofevpyi.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163zctzlvqr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163huukkcqx.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163qwkdxqyg.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163krncwlsj.html

[U105] JS：节流
来源：http://www.xuanzx.com/163qrqbutcg.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163lffsqmkb.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163ehjjixct.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163krhzmvib.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163nyncfijq.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163arfgbczj.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163hogrdgon.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163yfmgbvts.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163inptoxcv.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163dxokwkqh.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163ddrtnlrw.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163oldpxoxa.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163jklkdune.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163nfgmvybu.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163cugfbdoq.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163lsqalthh.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163djcmvdwf.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fueducto.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163rcbyjzwe.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163caufzhca.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163hsuunjgs.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163ciqhkjrd.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163xsduvesm.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163lmqjejcn.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163sfmgtcmo.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163pqzdvfaf.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163rfvabsnr.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163xhgygeec.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163nylljuyt.html

npx vite build
来源：http://www.sxryk.cn/163prlnruee.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163bapcskir.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163uggfvmex.html

================================================================================
来源：http://www.xuanzx.com/163zgetvjtf.html

统计汇总
来源：http://www.aibaodan.cn/163akskjjwd.html

================================================================================
来源：http://www.xuanzx.com/163mnfpymgk.html

按语言统计（条）：
来源：http://www.sxryk.cn/163rbodbcnd.html

Python ......... 252
来源：http://www.aibaodan.cn/163zcydkuoi.html

PHP ............ 252
来源：http://www.sxryk.cn/163bpycjzml.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163swdsmgpv.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163dvimscfk.html

Java ........... 212
来源：http://www.xuanzx.com/163edkfezma.html

Go ............. 212
来源：http://www.xuanzx.com/163swtnixzj.html

Ruby ........... 212
来源：http://www.xuanzx.com/163xokdrnsw.html

C# ............. 212
来源：http://www.aibaodan.cn/163hfrbtvpf.html

C .............. 30
来源：http://www.aibaodan.cn/163eewsakvc.html

C++ ............ 30
来源：http://www.aibaodan.cn/163wlsgpqcp.html

SQL ............ 90
来源：http://www.sxryk.cn/163zcynannx.html

Bash ........... 80
来源：http://www.xuanzx.com/163zlsgtaoz.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163qlekgeql.html

Swift .......... 15
来源：http://www.sxryk.cn/163ziuhnvki.html

Lua ............ 10
来源：http://www.xuanzx.com/163bvszrwuz.html

Perl ........... 10
来源：http://www.sxryk.cn/163mfuwicwx.html

Scala .......... 10
来源：http://www.aibaodan.cn/163lathuaic.html

------------------------------------
来源：http://www.xuanzx.com/163jwavscxa.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163leqkzhxm.html

按章节统计：
来源：http://www.xuanzx.com/163ubtsuakv.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163pphtipui.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163gjijtinq.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163vpotaake.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ugcresay.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163jgenmdaw.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163ysqhrvkd.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163tkjjpzfr.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163uwanmmux.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163hqgasild.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163prvbosrf.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qslcqlfl.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ubhyepzj.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ibqurajz.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163fbihqfny.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163cerqdugh.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163cwxspcar.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163rffjqera.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163glyhgpgz.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163tlkhrpfw.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163mpwdqnpv.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163wnyojsbb.html

------------------------------------
来源：http://www.aibaodan.cn/163znprghgf.html

合计                                  2106 条
来源：http://www.sxryk.cn/163hoanekil.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163xekengav.html

使用提醒
来源：http://www.xuanzx.com/163susfukzu.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163cuiwjmdt.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163ogjrwyvb.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163cfruhjli.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163wmlsdcdp.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163syzigxfk.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163obqnhtrj.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163dymffngw.html

================================================================================
来源：http://www.aibaodan.cn/163cesqluyp.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163zgsriohv.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163fqfcijvq.html

================================================================================
来源：http://www.aibaodan.cn/163dskllsjw.html

【收录内容】
来源：http://www.sxryk.cn/163weovnrof.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163slmvowiz.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163byociicm.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163kpdstgzp.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163bbcgoetj.html

【使用说明】
来源：http://www.sxryk.cn/163uowecyjy.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163gegeroyp.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163khbdaubj.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163bonjjlrv.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163jzmzxiwc.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163nrrhkruy.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163vlraitga.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163yzafbuuv.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163yaiagrli.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163usfzsewb.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163rqzrrbyy.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163ebljzlqk.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163hcrhrtjq.html

【文件统计】
来源：http://www.sxryk.cn/163wwitmkqp.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163akarvabx.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163fnwhrvkq.html

目  录
来源：http://www.aibaodan.cn/163ddhwpabd.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163yeqwhcjr.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163qgtqsrsh.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163nzowynrp.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163bzkwvrhd.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163sooviwql.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163paieiarb.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163ghjpduuw.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163aqaoexev.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163zycvypwt.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163fowshoyx.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163tluerzln.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163xblkkjdg.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163iradnekt.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163wxoxjppv.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163guxkawxt.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163zaqxgcgg.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ofyjczmb.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163vyoxausj.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163fnwxxqrh.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163awvdvieq.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163shuvinqw.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163nkeabjdk.html

================================================================================
来源：http://www.xuanzx.com/163jvpzqion.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163jrwartou.html

================================================================================
来源：http://www.aibaodan.cn/163esxczxwz.html

[A01] Hello World
来源：http://www.xuanzx.com/163ctddiuua.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163mwysmuqj.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163dsflltpg.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163fhvzzced.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163wfrwcxrp.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163kkcybvyn.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163hueqsslw.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163ozkmiuiz.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163cjgacbmp.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163tgrarmbw.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163crnfygce.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163zzxcktkt.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163rubppnph.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163eegomece.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163cmmaxysz.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163giejeelc.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163nbfoahfo.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163jfviauhw.html

[A03] 常量定义
来源：http://www.sxryk.cn/163dqcxwlfd.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163sprvahpv.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163hzjcrkul.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163hwskhxzr.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163quszvort.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163ukrplzqr.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163nhpelkmh.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163utakqtro.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163kwuanqng.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163ajtbuvyd.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163hjiogyqi.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163ftmiqzrk.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163emaxlpei.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163sahbmgxf.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163wqolilix.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163ajmgqizx.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163pudxnday.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163yldfnnls.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163docdpzmu.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163kkgmuaqb.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163xzuxqgdp.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163nsjplmbi.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163moxvlsdi.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163pcpplgpx.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163wgstdpfr.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163byadzqxi.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163pafkvjve.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163vfukdzqs.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163jzffqimm.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163qcfbssfk.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163tpryiafp.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163cpmdbppp.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163zmhcegvp.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163gmwfdbnt.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163luodazzv.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163qqegjqcz.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163ggxgmkny.html

Py:   str(42)
来源：http://www.aibaodan.cn/163uouhxele.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163pirajlob.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163uafdzptw.html

TS:   String(42)
来源：http://www.xuanzx.com/163qwbtuzmr.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163ygnxhuee.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163xhytrdhp.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163iqdpfknf.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163jfiupvsz.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163fsihqxef.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163uupkfqte.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163jngiyoaa.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163swpzjhiq.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163kgdterne.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163igswbnvv.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163keynpmfm.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163mfkfpkvz.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163lrmdztgx.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163fdatgxql.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163azwrsqmi.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163zoukgxev.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163ehyhunra.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163cjaleigg.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163tuqugdzw.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163qrueowvz.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163ccdnmsjx.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163ddkpqpbg.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163ubipggbq.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163sdrrbpwp.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163jwpdzmov.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163cmnxmfop.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163qyfaosel.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163yvatqmna.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163ryviexao.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163iocwjdni.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163uyhhngji.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163qmrwvmtu.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163hshkkjzi.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163vnbklntg.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163pupeyizh.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163qtrgfgce.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163iioktndu.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163mayaqaat.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163hnkoijhu.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163pzaaicba.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163ufdknygz.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163dcmtryfy.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163anonzmyr.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163dcfwrzus.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163aiosephp.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163cledjnrm.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163hrlqyraq.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163suglquvu.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163rdpqwysf.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163wwmnzgcv.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163tyxenpkm.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163jklyvejl.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163qftltjer.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163iezlsqml.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163hacbcrsm.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163shalhgfh.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163plxnoolb.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163lmxfauvu.html

[A14] 注释写法
来源：http://www.xuanzx.com/163unevynix.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163ibwxtoie.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163gukrorpg.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163jjvillnz.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163sowhohwy.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163mgjmynhm.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163mjnoupkw.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163pkorxlgh.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ahpctnhs.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163klvtvfnd.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163dajoieuq.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163klzmsfhw.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163hjzxhdht.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163raruspka.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163kbfdnrkg.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163rjwgoonx.html


<!-- 参考信息 -->