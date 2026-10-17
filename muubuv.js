外链999!wailian999！

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163epqsodvb.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163mnsjdsdf.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163utppfsmt.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163omltlvem.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163tisdalww.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163gfkiviyr.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163axzvdwxp.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163bjygqitl.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163wbdgqwfv.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163emutauim.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163witskcdt.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163swmpccxz.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163whzoihsr.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163qeposgzr.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163awkyrhgi.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163stlyvzvh.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163jdgyvjgu.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163dlscgtch.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163mozlknky.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163itkgoscb.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163yqbzmbxr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163qteylmyd.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163qxdzbpjf.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163pmgqxzyw.html

[U105] JS：节流
来源：http://www.xuanzx.com/163kvbhybdt.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163omknagmh.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163ozsqhegy.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163dbrhsiio.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163ndvnamfb.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163ewxdnxnt.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163zwrmmtrb.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163vccbtaci.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163skqyetzg.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163qacuaedq.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163clwiyixw.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163whrozdpy.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163bnoldunf.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163nudqkyll.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163jtayawxy.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163qkfsajij.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163deqdxazc.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ihccuzbw.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163iavzzvcg.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163nngenhrm.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163dsmmswkl.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163ahdzlzuu.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163qkgjwshn.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163lpzfsteg.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163femoriim.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163toglgoya.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163vwzkiryp.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163zdxygalx.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163glsihego.html

npx vite build
来源：http://www.sxryk.cn/163sotnojnt.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163ohxkbytu.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163romiwubo.html

================================================================================
来源：http://www.xuanzx.com/163kcfewwce.html

统计汇总
来源：http://www.sxryk.cn/163ijtqmbvx.html

================================================================================
来源：http://www.xuanzx.com/163ohrricqb.html

按语言统计（条）：
来源：http://www.sxryk.cn/163aqbiaimj.html

Python ......... 252
来源：http://www.sxryk.cn/163ufxpeooy.html

PHP ............ 252
来源：http://www.aibaodan.cn/163fjkboxuw.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163iohdoglf.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163vikhwoyh.html

Java ........... 212
来源：http://www.sxryk.cn/163ncoinxmf.html

Go ............. 212
来源：http://www.xuanzx.com/163cwoirrke.html

Ruby ........... 212
来源：http://www.sxryk.cn/163gejcjptj.html

C# ............. 212
来源：http://www.xuanzx.com/163brwtiied.html

C .............. 30
来源：http://www.aibaodan.cn/163mvwyreew.html

C++ ............ 30
来源：http://www.aibaodan.cn/163dxvrjwch.html

SQL ............ 90
来源：http://www.xuanzx.com/163weaxhjsx.html

Bash ........... 80
来源：http://www.aibaodan.cn/163qaccinap.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163zzqgyzls.html

Swift .......... 15
来源：http://www.sxryk.cn/163ksscbrrk.html

Lua ............ 10
来源：http://www.aibaodan.cn/163ezumhlty.html

Perl ........... 10
来源：http://www.xuanzx.com/163zngdkxiy.html

Scala .......... 10
来源：http://www.sxryk.cn/163xyuebdba.html

------------------------------------
来源：http://www.sxryk.cn/163edpovttq.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163gtuawbxj.html

按章节统计：
来源：http://www.aibaodan.cn/163ksjrhyzp.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163befoenwr.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ivyxdpny.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163rinwljbt.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163gfltamlq.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163ntakmytd.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163tquiopdl.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dguklsnd.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163gsuhptmt.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163lvsobywd.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163eoclxkhf.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jevqbxzx.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163eoeaqfcl.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163hgssqkmg.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163disqzuls.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163yucjocoq.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163mxkkmxgr.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163lyhqrdcs.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163rifmyaok.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163snqewqpo.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163axvwaztv.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163iprqyjwi.html

------------------------------------
来源：http://www.xuanzx.com/163jkdteujj.html

合计                                  2106 条
来源：http://www.sxryk.cn/163muyvskkp.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163edrihjry.html

使用提醒
来源：http://www.sxryk.cn/163eelunkvv.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163uxjqlaep.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163wjutqwsp.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163vlcheeqr.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163ixxkhrhs.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163jyxhbujl.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163lzknxlzu.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163pmxdomkm.html

================================================================================
来源：http://www.aibaodan.cn/163gcaznvjl.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163xlhieskn.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163nnknbwkf.html

================================================================================
来源：http://www.sxryk.cn/163zjrmmtcn.html

【收录内容】
来源：http://www.xuanzx.com/163vvczpsxf.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163zttwgvoz.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163vnchoalw.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163jqksjktt.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163xamobvig.html

【使用说明】
来源：http://www.xuanzx.com/163mkriauub.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163uodowjum.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163hfvltalm.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163pkmpkgeo.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163vxkfkeak.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163xdasugux.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163odnxycsq.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163mvsyjzye.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163bmhpznls.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163fwnsvwqu.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163yjddulmc.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163ixiofeqw.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163aywnuqof.html

【文件统计】
来源：http://www.sxryk.cn/163npuojcau.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163hajczceh.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163rspdlphy.html

目  录
来源：http://www.xuanzx.com/163wtpfdbzn.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163myehkrin.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163geavwelc.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ftzqdqoj.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163fgkoyjfk.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163oitouvhh.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163mbwbjuav.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163smxdijfp.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163smxcapdk.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163tmbjbfhx.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ovhszzpi.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163sfovpfqi.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ocibckmq.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ksmlovde.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163bsedoeie.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163idrkxpix.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163jhgotmjo.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163uwxhcakp.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163tafcplor.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163umkwznio.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163ytqmvtik.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163kqpckwhp.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163zciruusp.html

================================================================================
来源：http://www.aibaodan.cn/163xgkaopvg.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163vcbqaipw.html

================================================================================
来源：http://www.aibaodan.cn/163uioopoah.html

[A01] Hello World
来源：http://www.sxryk.cn/163toifhlbn.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163rctpsvsu.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163qvbcvnxi.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163zuklmmxx.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163fpbgqiap.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163ouuowdzq.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163huxkhgyp.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163iwezbayc.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163hpqiqujy.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163mnpbhudc.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163boqjksgs.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163gtqqzeoc.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163xyzyvkup.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163voxlaekk.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163drdrqgpx.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163iytyvjug.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163wkiptzqf.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163jjxakcpa.html

[A03] 常量定义
来源：http://www.xuanzx.com/163snwjhckc.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163fgdaqrrg.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163gllzojyt.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163deejewvw.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163ugulbgwv.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163ylatozdw.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163mohsipuy.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163zlifnxdn.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163ahajtrky.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163ypfbwctp.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163lwsjqlji.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163hiorrjge.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163phmdeudo.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163bnjhylcs.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163ldqhteet.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163zklayhri.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163ofjujvtr.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163psuiqlog.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163yawfqqpb.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163tdolgrhi.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163lvwqhmkg.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163lrtcgsbv.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163miwarhfn.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163zxjcpnkn.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163vhjbveld.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163vbjbpzci.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163zvhnacdt.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163ysjcxyju.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163ylcfqnpe.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163kwfbqylj.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163gfgmteqd.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163cndmaogm.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163luqztsjt.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163mxhqcumj.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163zgtckjcv.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163nhsambyx.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163uuoslkam.html

Py:   str(42)
来源：http://www.aibaodan.cn/163qotvhtqh.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163mgrjidwe.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163ajalltlw.html

TS:   String(42)
来源：http://www.xuanzx.com/163qgsnedyy.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163pajitkdb.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163eogroaoy.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163dqzxryte.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163fnspoyvs.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163rohromvu.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163pswmexqj.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163ntqjiawp.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163scsuntqu.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163lhqhvbmp.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163sxumjude.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163jtxmmfef.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163fdkqglwi.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163qffooozn.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163pyrsuixe.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163gmuebxrw.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163asdaqpev.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163mvjsqckj.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163eywkxmjz.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163agpuqlam.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163xycrvtsj.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163afubwnne.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163pqycqugd.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163ktbskywr.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163qiqzefph.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163effwvgns.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163yvmzrbnr.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163qesebsyo.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163lmddezoc.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163khvjcdmb.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163jxbsgkvi.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163wbbowlap.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163ecjpbgrx.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163abuvjzzh.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jdcyxxzw.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163aalpojqa.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163mmfzscsk.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163wwifddtf.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163ftgulehd.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163sizltvim.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163agtebxry.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163poupcqpa.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163mkqjzfxb.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163kiczvklj.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163xmwehohs.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163rwecshho.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163vceiqdso.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163mifqufwp.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163maakhahd.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163ekdzftxz.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163ybjkfgnq.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163rqnoiixx.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163buaytipm.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163vkhcdedj.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163tatjnkuq.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163rlunvhcl.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163tfqalghy.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163wkkfjodn.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163mwvpmuez.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163dqankftn.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163epqjriom.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163joudjrvd.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163oklkcxqb.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163srmjexkc.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163fhfykhar.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163bqvlqlsi.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163ttflvaef.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163tkirdbvo.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163ifrakukm.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163sskqqeii.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163fknwprzx.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163yyfzgmvs.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163woqswgau.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163znbswzsi.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163ufyaxyaa.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163srtspzey.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163lqhqrkip.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163wfigfpio.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163kuhjqurb.html


<!-- 参考信息 -->