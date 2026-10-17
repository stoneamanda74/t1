外链999!wailian999！

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163rhkgbujs.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163gwbrpnle.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163ithekcbs.html

structuredClone(obj)
来源：http://www.sxryk.cn/163lwlwbxvf.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163jxxubuig.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163fulwlrao.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163pvwdpyuf.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163krwlwovj.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163jsjxqoep.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163vbeeezov.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163iohtdjvl.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163yysgrnzl.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163yjzklvzh.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163sgbozujf.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163pmmuppsu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163fhfgzbfl.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163kldoydah.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163qqabxtft.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163wzbtobmk.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163ctlhufbs.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163yrmokdbq.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163kldiibzg.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163fdosfirs.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163ndzbntgf.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163lunsglfz.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163gpfnwwgb.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163apowtnfx.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163oklzkzzg.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163uvkilqkp.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163jdzspmlv.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163svlhhkth.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163yhiyszsu.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163ecsvtnkl.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163uzrbxfsu.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163rfqfyolp.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163zlfuabkq.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163mmeiqxab.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163aantohav.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163adioguza.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163jmslxeub.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163qxcdfuqf.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163teklhphp.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163igexxepv.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163apckntmz.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163ykgzhpfp.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163lyldjuiw.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163yjxaueph.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ixjunuvl.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163ehmhtlue.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163ygoofpxe.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163wrycmsot.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163pymqgpmf.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163gjjqnubq.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163cbvkmuoe.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163svtedooq.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163vacqjzff.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163ypzubeeq.html

npx vite build
来源：http://www.xuanzx.com/163lqqrucpp.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163jirgdvdc.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163jvssyihq.html

================================================================================
来源：http://www.aibaodan.cn/163icaqffid.html

统计汇总
来源：http://www.aibaodan.cn/163edxhzvdw.html

================================================================================
来源：http://www.sxryk.cn/163visikgdz.html

按语言统计（条）：
来源：http://www.sxryk.cn/163mmcjmslm.html

Python ......... 252
来源：http://www.sxryk.cn/163nfzlplck.html

PHP ............ 252
来源：http://www.xuanzx.com/163nyyhygey.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163rnumcvvl.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163onuezxpz.html

Java ........... 212
来源：http://www.xuanzx.com/163nlmlmyav.html

Go ............. 212
来源：http://www.xuanzx.com/163ckuabtsd.html

Ruby ........... 212
来源：http://www.sxryk.cn/163opcumzqn.html

C# ............. 212
来源：http://www.sxryk.cn/163ccmgbvzh.html

C .............. 30
来源：http://www.xuanzx.com/163rcoprkqb.html

C++ ............ 30
来源：http://www.sxryk.cn/163batbtfra.html

SQL ............ 90
来源：http://www.sxryk.cn/163qighvjqd.html

Bash ........... 80
来源：http://www.sxryk.cn/163zmbagzhi.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163bgffpwyp.html

Swift .......... 15
来源：http://www.sxryk.cn/163kqsuvjlf.html

Lua ............ 10
来源：http://www.aibaodan.cn/163rotibvcs.html

Perl ........... 10
来源：http://www.xuanzx.com/163zzwticba.html

Scala .......... 10
来源：http://www.aibaodan.cn/163dquhumgi.html

------------------------------------
来源：http://www.xuanzx.com/163ffinoopg.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163qcywahkz.html

按章节统计：
来源：http://www.sxryk.cn/163uzjfjpha.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163bkjxvouh.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ipbgkggk.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163cemduxop.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ymduqhsu.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163aultfolk.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163spjmhahf.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163tuutgqky.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163vbfmoxzy.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163dchskkba.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163kpvdlybc.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ydgqlamw.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163thlxrkij.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163bgofaabs.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163cxzgsiig.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163epiexcvw.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vgtbveys.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163kqhyqzgv.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163uwelwqbh.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163sbrdnefa.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163bqjsacwe.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163ffiftoan.html

------------------------------------
来源：http://www.aibaodan.cn/163xoisdjgb.html

合计                                  2106 条
来源：http://www.sxryk.cn/163adsjmiir.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163wozhsihj.html

使用提醒
来源：http://www.aibaodan.cn/163iodwtivo.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163lnoxwmds.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163zsevmbsw.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163ulvjqafu.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163tkgonevk.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163mgaphzxu.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163vnzrswsx.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163rctflkos.html

================================================================================
来源：http://www.xuanzx.com/163wrllqdzx.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163vwhgonef.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163frslnupw.html

================================================================================
来源：http://www.aibaodan.cn/163shtiekgh.html

【收录内容】
来源：http://www.xuanzx.com/163czuqshts.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163cnvgmhqe.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163tpgvgqup.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163cfvyxgxi.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163qloxahzd.html

【使用说明】
来源：http://www.aibaodan.cn/163eadhmsgr.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163ymijnzar.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163irtaccro.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163kftzdckg.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163kokgfcxx.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163sebuihoa.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163wyxenfzf.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163nmghxkll.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163xqhmplzp.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163lcnwqkqo.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163unucntqf.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163wxzbgjzx.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163azlltdrf.html

【文件统计】
来源：http://www.sxryk.cn/163ryjxrepz.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163ifjvjeai.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ficdskid.html

目  录
来源：http://www.sxryk.cn/163yprxeutc.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163oxskmcjj.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163jxaisqoo.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163wtrcdjsn.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163bhwcehuz.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163nkvbszlv.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163qzzlostj.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ivtjgywe.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163vjsckttw.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163qirzfyai.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163abtvjrab.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163lpipxzel.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163uypheqwf.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163dmjnevvj.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ekkyitvi.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163cfexsnkj.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163ggppjtkn.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163umvrajlf.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163bbjeideb.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163agqnbnqv.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163ngnclhcj.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163bkuecsvo.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163guzsyzao.html

================================================================================
来源：http://www.aibaodan.cn/163imspktiz.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163rpkrxpkt.html

================================================================================
来源：http://www.sxryk.cn/163uaidnzql.html

[A01] Hello World
来源：http://www.xuanzx.com/163lpyxhekw.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163pffdpcap.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163dzyuonuv.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163zhxxldbh.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163meaaqswq.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163vsamctcc.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163dyqjufwl.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163irkwjcsb.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163vfulxqzt.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163dlbqadqp.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163ucxutinc.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163dtnuxuwr.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163tuvtuaco.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163kdbtsrdd.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163udjsaywx.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163gnobugkz.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163pnvpmwlh.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163oqfsuwwp.html

[A03] 常量定义
来源：http://www.xuanzx.com/163tdedirxc.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163bgleohof.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163mmadivfa.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163vgmfzipx.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163doriejpg.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163vrxkdufv.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163eoxhmekc.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163vfykjbfe.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163pngsacbt.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163cekfgbvy.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163yypcjhkg.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163xdnilpxu.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163evzmtduh.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163xqiakzpm.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163tukqftre.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163vgiugkiq.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163bgejsoyj.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163dryewphu.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163wsrxpyol.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163ewncewrz.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163ihqwohtw.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ccskjmcz.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163wssahnkf.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163jqnvckch.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163wgmyczos.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163jjqgrnsd.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ufziocag.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163gerxtyqg.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163sogxuved.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163oxqplhwz.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163puzxneie.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163qszorypr.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163rbqjrxue.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163bhfkdayp.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163efxxnjnb.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163yadlzfaf.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163rleimhvv.html

Py:   str(42)
来源：http://www.xuanzx.com/163qnccwahi.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163hiworxgn.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163fnvujhoh.html

TS:   String(42)
来源：http://www.xuanzx.com/163xcadkuwf.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163ejdcmnno.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163wqfvhdqi.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163jzhyfqnr.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163cegvvphe.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163ijywpyai.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163qadkdgsv.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163ghombcdp.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163dkvsutqr.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163howmcnkw.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163qyfijaui.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163qbdeycfx.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163ollglysl.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163nmhzowop.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163levdwsmn.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163pchwniax.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163agrnzarj.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163ixqlakue.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163bqmvaajt.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163kbwkkwsh.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163vssmrztq.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163litawkso.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163nvamgqpo.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163mvgxxasa.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163bkwwxrjb.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163zskqvcop.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163tnalomqi.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163utoxgldt.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163mxhlytbq.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163rkmrnxkb.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163atbpdvco.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163uzyhaols.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163ppmuahwf.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163daphbnmt.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163kpaprhsb.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163hnqcigih.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xpdgbdpy.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163tgtgfrki.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163nntwxhkm.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163uaqtzbsd.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ajhowbec.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163mygnyjxh.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163jbyxnqww.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163bjckedxi.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163holbmsik.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163wepwkbkf.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163qongmprz.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163qzkmqlru.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163nrdakzob.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163aufcrywh.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163vqzsyhuc.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163fybsktnw.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163ektrkaug.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163cpszolwo.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163myjnxjxw.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163piulrppw.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163lnddubbs.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163xgzqwbuk.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163bdqqrtzb.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163uqzylctk.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163sfflphqc.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163wazkwjew.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163olnrvemn.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163beuetgdy.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163yxrajxmt.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ucpygkhf.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163ermlpsfw.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163jalngbps.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163icqjblbw.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163hegndunx.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163wnmsmtjy.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163ebvxbmum.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163thqykpsa.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163ggvtggdj.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163xgpdyoim.html


<!-- 参考信息 -->