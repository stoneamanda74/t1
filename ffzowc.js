外链999!wailian999！

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163zikhwcis.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163tsdswrfd.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163xvvmsrkz.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163dxdbovfw.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163oxprnjbw.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163ogwcxigc.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163rwypdhcm.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163uyqctiyd.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163xloxvxtc.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163tcoretdp.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163scubxjut.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163yxezsoof.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163klsmtnbt.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163iveqobep.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163yfphbcah.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163apfbiczz.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163lrjoimuq.html

composer require psr/container
来源：http://www.sxryk.cn/163tlpfesas.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163truvienc.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163afbikmud.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163ldmawjxg.html

composer require twig/twig
来源：http://www.aibaodan.cn/163bpguhepp.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163mfdmezox.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163aruwqdpq.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163sstbmdcw.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163gccziebh.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163kmmprnyl.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163wtvyyikw.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163jkwgdgjc.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163ldkefwoa.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163xecvavrd.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163mudpwdhr.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163vhjufzkv.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163phegcigk.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163gnhenbnb.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163stolldhp.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163vaehgvqp.html

a?.b?.c
来源：http://www.sxryk.cn/163xwixwbks.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163ktobutvb.html

a ?? b
来源：http://www.xuanzx.com/163yoaaqzwv.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163pozdgyfu.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163fvqfbhgh.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163utnhbxgg.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163wqnhgsaf.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163yrtmirzk.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163hpvogfjv.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163tfdrpujr.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163vfanwipd.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163hlxftaub.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163nyjndlsv.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163mgnsqepv.html

structuredClone(obj)
来源：http://www.xuanzx.com/163inkqvymh.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163fvmjdspn.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163vpyarjnh.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163kqsvcqnh.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163lqgvvoti.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163omrqiqhu.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163jjuuoygc.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163xwrkisgv.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163xfzqnnly.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163uqefyqyx.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163rxtvmpib.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163mvxkxoqs.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163pucfhovy.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163hziroozb.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163sztlndcf.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163evetpdaj.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163fhgpakol.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163qmnkmxjb.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163srldsuoc.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163vybfdifa.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163vvlfoqoj.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163yaknbnto.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163wgfjaxbb.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163dkdaftfd.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163gahepmxd.html

[U105] JS：节流
来源：http://www.xuanzx.com/163jmzrhkbj.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163avlyewri.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163mzeprkhj.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163qrgupdlo.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163wpafkiad.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163scxovmkt.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163zeftagss.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163qmldswdy.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163idkxnkon.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163etozhowj.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163wmqcridk.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163oiczjskr.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163fwqdslwg.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163zkkiogrm.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163hkernidd.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163atspxjth.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163ivtzegwc.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163iphvwgsi.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163cgcucrrl.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163bxnplzpj.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163fgtxkife.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163onunpgqx.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163uzcwqiej.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163gggnbwpb.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163hyouxggt.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163ppyscxqr.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163znoprixu.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163hlseehjl.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163jdgldhff.html

npx vite build
来源：http://www.xuanzx.com/163dobqklsm.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163ormsbgbz.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163yehpalcy.html

================================================================================
来源：http://www.xuanzx.com/163lzjeagdl.html

统计汇总
来源：http://www.aibaodan.cn/163kjunaosb.html

================================================================================
来源：http://www.sxryk.cn/163iohxiftq.html

按语言统计（条）：
来源：http://www.sxryk.cn/163lohrrjdc.html

Python ......... 252
来源：http://www.sxryk.cn/163rzrqpflk.html

PHP ............ 252
来源：http://www.xuanzx.com/163rrckmzwd.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163syicakui.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163gvlwtzex.html

Java ........... 212
来源：http://www.xuanzx.com/163npefpzyl.html

Go ............. 212
来源：http://www.sxryk.cn/163uczeasbh.html

Ruby ........... 212
来源：http://www.sxryk.cn/163sxnsfmwn.html

C# ............. 212
来源：http://www.xuanzx.com/163zpuqdwpm.html

C .............. 30
来源：http://www.sxryk.cn/163vyvpmvns.html

C++ ............ 30
来源：http://www.xuanzx.com/163gpnbqyoo.html

SQL ............ 90
来源：http://www.sxryk.cn/163netmrreu.html

Bash ........... 80
来源：http://www.aibaodan.cn/163amxpwpmz.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163jvkxolco.html

Swift .......... 15
来源：http://www.aibaodan.cn/163xwvvsnxb.html

Lua ............ 10
来源：http://www.xuanzx.com/163jaoavaqn.html

Perl ........... 10
来源：http://www.xuanzx.com/163baoolisw.html

Scala .......... 10
来源：http://www.sxryk.cn/163tsdzpwii.html

------------------------------------
来源：http://www.sxryk.cn/163mnxzgaqj.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163zmjusure.html

按章节统计：
来源：http://www.sxryk.cn/163djwkiosg.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163xntvwpas.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163brfrxeid.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163eqbqzmrj.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163dxaossud.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163rheaspho.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163moqcfsiz.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163tfwyrtni.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163fgprktsb.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jcltixus.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163mfwhgibv.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ddajrxgt.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qmiawjwa.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163dxuphasg.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163zcreyclf.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163qotoyamg.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163bftsiauc.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163iihxfpke.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163uyupwifd.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163avqpsemv.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163rdojwkgw.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163wkzhdvty.html

------------------------------------
来源：http://www.sxryk.cn/163kctskofi.html

合计                                  2106 条
来源：http://www.xuanzx.com/163usrqnswu.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163xliczwjs.html

使用提醒
来源：http://www.sxryk.cn/163csqbegav.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163uevrhyrt.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163mqutasqi.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163zolznupc.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163zwtvtfwn.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163pvpacezu.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163lmdndkju.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163vgpnthoh.html

================================================================================
来源：http://www.aibaodan.cn/163zgwngaoz.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163ehnxdcyu.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163etlyawkr.html

================================================================================
来源：http://www.aibaodan.cn/163zwrmbvry.html

【收录内容】
来源：http://www.aibaodan.cn/163anbptbln.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163ojfkbhau.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163pmewhgth.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163twkwmpqq.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163igswpwoy.html

【使用说明】
来源：http://www.aibaodan.cn/163zyodxdie.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163bavtauca.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163sdsuykef.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163zfxcfqvy.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163enevzqxp.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163gluhrlpl.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163kecjtngz.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163mvdrkmph.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163bxhkrfkp.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163kbdlzbwu.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163onjypanj.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163naxaustz.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163syihvbgu.html

【文件统计】
来源：http://www.aibaodan.cn/163hkwuyalp.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163tmuidpyx.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163wxhpjejp.html

目  录
来源：http://www.aibaodan.cn/163cjanuzrg.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ojgymhpc.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163bgtpgxyr.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163cuqrlahl.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163knrqmhhp.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163lsregvcn.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163vybdttah.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163xxswrdjl.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163pbnyyicf.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163keisgwls.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163pwlnqucr.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163fsbyfbov.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163aefpfiyx.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163pecufpaj.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163wwwywgyb.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ydoeuasa.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163uzhxmbcz.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163bykfhpop.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163lemwbqxp.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163yofjqdqv.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163oplfmgnf.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163cqgdtsjv.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163smrpholu.html

================================================================================
来源：http://www.aibaodan.cn/163ujlddgwc.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163jsnvxmxc.html

================================================================================
来源：http://www.xuanzx.com/163doudyoim.html

[A01] Hello World
来源：http://www.xuanzx.com/163xsbmeoql.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163behuhhug.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163vmydzooy.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163qtzwjlhb.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163cpukwxca.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163cttfvwgj.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163cnojrhmv.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163uwvngxyc.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163zkzimhta.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163ohzunbqh.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163pomymrdr.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163fdzhdzzb.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163mueztlrg.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163vtubtfxm.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163zcptmdie.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163eezimasx.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163pgostkom.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163jgphbnod.html

[A03] 常量定义
来源：http://www.xuanzx.com/163iwmbpboi.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163lcdswgkg.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163jlhuktvd.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163glawxowq.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163oacxurca.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163xmkedzbb.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163oicindjw.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163lblqlisc.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163rpdhhijp.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163bbfkgvhf.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163hqklsjdq.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163gwhvshki.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163ifrcuhgb.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163gyeohaai.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163pupqqazy.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163mgckknqm.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163ekeyssij.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163tgcjmdzr.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163owxtlpev.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163upmriaiv.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163neaqjzgp.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163xarbxbke.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163lbtyfsdo.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163utjlkapk.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163sbbtcbzx.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ozytwmwz.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163bgbyunsh.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163kekccdou.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163wmqcyxgq.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163gginafvz.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163zirozaut.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163gfwskegj.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163xtrmqhxa.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163nbybavpc.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163kolyjnnx.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163fewmpjtw.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163featgqtw.html

Py:   str(42)
来源：http://www.aibaodan.cn/163hstfckrq.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163mbxbsfax.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163gkkhpjhw.html

TS:   String(42)
来源：http://www.xuanzx.com/163pmgczonu.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163uxhonbem.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163xieakegs.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163wvoxxfxf.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163okynqzgy.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163cwkyqdmq.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163tohfsdes.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163pkvzjyez.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163egsaqbvf.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163rvbagtyv.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163tvbfvsqs.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163mxqbmqqo.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163yadiuclu.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163jfeuyauw.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163pejegvfr.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163drmvnqms.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163ypdjvluj.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163ivrnayzq.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163xffhkvli.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163fvxafept.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163pfgzanqi.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163vwrqreja.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163mykiozfj.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163hsetykcw.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163fpbgpfvh.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163lknuiiqw.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163wqpfxezh.html


<!-- 参考信息 -->