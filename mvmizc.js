外链999!wailian999！

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163rrifcrit.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163hxdaxvmd.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163dvibmshn.html

$obj?->method()
来源：http://www.sxryk.cn/163yfdcdjag.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163bcsdyxme.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163vaanuigm.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163rozcmjkf.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163jyezaqwv.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163efawiegm.html

"值: {$a}"
来源：http://www.sxryk.cn/163atsquwkc.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163xyhadxyw.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163lkcarvuz.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163sasywvrw.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163hdiustda.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163neqogfvs.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163oaewisrb.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163tbwrrhlf.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163qrqheiua.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163rpsicjnd.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163cvlszess.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163reunhret.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163wszkisqk.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163paemgolf.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163hnvmckuw.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163wihrnmzs.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163fnzfssxp.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163ljbdzmeq.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163iraaqgfk.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163koexfpfn.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163pztsdncq.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163uryboflm.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163jxhsunws.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163onwbugza.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163oxmszzmm.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163ikkvqpga.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163dumpuing.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163vvqjqxau.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163znojshcl.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163qvdyybbg.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163tbddskvo.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163cnllmzjl.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163qjxmazli.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163njxgmqed.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163phgapsyw.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163htatxsab.html

composer require psr/container
来源：http://www.xuanzx.com/163furtlkwt.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163ditfyltf.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163jwvugiga.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163whvvfnmz.html

composer require twig/twig
来源：http://www.xuanzx.com/163oteuiage.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163nxjckkoz.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163mslueebp.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163vnrzyknd.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163szbahbdi.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163rfwwtawe.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163dljhbvog.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163wybbyibn.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163ldgskdqk.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163rtslilrh.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163wqedineo.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163xakdnbye.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163gxmlgega.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163aujchtcv.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163xigpriew.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163bzyslqyl.html

a?.b?.c
来源：http://www.sxryk.cn/163ojetxcxi.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163qpbdtzsn.html

a ?? b
来源：http://www.xuanzx.com/163nqzqgans.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163rxlfwxqu.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163rssxtkon.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163qomolzrj.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163rodgknrg.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163swfhzxum.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163uaausdcm.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163mmdgigek.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163wprsdqkm.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163tpbewsnf.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163ihcnvurn.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163ficpmomf.html

structuredClone(obj)
来源：http://www.xuanzx.com/163selkghid.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163ocjsoddz.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163mowygugg.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163pljnudgm.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163xcsjbsqq.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163qswnlvmo.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163fvrlelvy.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163jzfwsbps.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163wumdfieg.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163ukcnktde.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163fxthfids.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163ucqjzcjw.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163ddkpixdb.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163kstrlpdl.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163njqjifwo.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163vgjeoibe.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163mdscvvvm.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163tfdclitj.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163eeartrtl.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163mmimburn.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163gjihfjsk.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163wwovtgnt.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163dtjtgwdf.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163zzhoklso.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163mkbfgniv.html

[U105] JS：节流
来源：http://www.xuanzx.com/163qazgwvnn.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163utnoicup.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163kaqznwsp.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163jnejkolx.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163prazabtp.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163lbhifhjp.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163beecnfas.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163xhplgdbh.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163betfwxjo.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163fntyvlla.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163mpgvskyu.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163rjrpfyom.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163pgdfwnxe.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163bgcepzqt.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163copecuch.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163eyoqafjb.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163fhpnckor.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163cvsrqewg.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163pmnmabti.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163pkrhmobr.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163cxyisqwv.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163hgzhqrnd.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163tgwqotwi.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163vzaqbdjv.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163yqbnwxoz.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163jbdgernl.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163btgjxjrv.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163fkzrqnkv.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163wieaeaas.html

npx vite build
来源：http://www.aibaodan.cn/163joaqfziy.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163muplexqi.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163rwhwwtyo.html

================================================================================
来源：http://www.sxryk.cn/163iuofkaho.html

统计汇总
来源：http://www.aibaodan.cn/163bwcipmuk.html

================================================================================
来源：http://www.aibaodan.cn/163mktnhosr.html

按语言统计（条）：
来源：http://www.xuanzx.com/163ymnebfhy.html

Python ......... 252
来源：http://www.xuanzx.com/163sojbyjya.html

PHP ............ 252
来源：http://www.aibaodan.cn/163skwrlnpc.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163gpsskxkx.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163frbargan.html

Java ........... 212
来源：http://www.xuanzx.com/163jevffwlm.html

Go ............. 212
来源：http://www.aibaodan.cn/163tqovgkli.html

Ruby ........... 212
来源：http://www.sxryk.cn/163vzokbjdo.html

C# ............. 212
来源：http://www.xuanzx.com/163ixbhhgic.html

C .............. 30
来源：http://www.aibaodan.cn/163sexsfmld.html

C++ ............ 30
来源：http://www.xuanzx.com/163oscritvz.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ohqdyljp.html

Bash ........... 80
来源：http://www.xuanzx.com/163vnijxpov.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163dqwligel.html

Swift .......... 15
来源：http://www.xuanzx.com/163znorejpf.html

Lua ............ 10
来源：http://www.sxryk.cn/163wtgugqjw.html

Perl ........... 10
来源：http://www.sxryk.cn/163gfttdhgw.html

Scala .......... 10
来源：http://www.sxryk.cn/163mbxwrfvx.html

------------------------------------
来源：http://www.xuanzx.com/163dqwznedv.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163qmbmariz.html

按章节统计：
来源：http://www.aibaodan.cn/163orcpvixq.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163avwgczfw.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163xdjqdjjl.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163twpeqcoy.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ywdzmsyf.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163nsfnrrxc.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163mlqntpev.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163nlraulnv.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163zooqndzl.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163cbpfbpch.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163jhnhyqtl.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163brrwxubq.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ijykdqcc.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163wvxnitze.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163actvqwii.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163maaqyswv.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tlcoyfia.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163mngpycxd.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163cfkhkjso.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163tjuqrbfa.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163dcudtzgo.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163ghhwwgwd.html

------------------------------------
来源：http://www.xuanzx.com/163vrnmtebf.html

合计                                  2106 条
来源：http://www.xuanzx.com/163bepxnzhd.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163hvmpazak.html

使用提醒
来源：http://www.sxryk.cn/163irtzixfq.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163jmnapwfv.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163opchxphs.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163xtnqgmgy.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163mhcrikom.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163asngwafh.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163fqdxfrvy.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163lydzwbxy.html

================================================================================
来源：http://www.xuanzx.com/163blzdtwyt.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163thzcwyhq.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163wjtpqgjs.html

================================================================================
来源：http://www.aibaodan.cn/163kulqxisd.html

【收录内容】
来源：http://www.xuanzx.com/163bnsihvba.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163ltcyqqce.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163lrytkzpi.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163bjbrmfnw.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163qqppdhrh.html

【使用说明】
来源：http://www.xuanzx.com/163zuitwhvi.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163arirrtiv.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163zlfvllpa.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163vqhcxujz.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163zkbohttp.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163guyxvtmh.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163zjuurrni.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163yokvjdfu.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163pgmnriej.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163tlvggnzl.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163ddhxowhi.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163ancbhgkq.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163ldzdnomu.html

【文件统计】
来源：http://www.sxryk.cn/163azspkdjn.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163bbrpfwsm.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163hjsbbcrx.html

目  录
来源：http://www.aibaodan.cn/163xsaznrwc.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163xaamkaoy.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163ehzpinqk.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ysghrftc.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163qmsveqzk.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163cfgcnlgx.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163hcadfbfk.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163ztrpcfxd.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163mwuwdizf.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163zijjrcfg.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ugtzrfsx.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163zisthlcy.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ggxyrlos.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163twwtvmti.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wqmlgbgb.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163kmtzntpq.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163yqyvmopu.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163nrncwdku.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163tbfdissm.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163ezpdrska.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163zfrplldc.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163rhiyvpkd.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163hgsigvlt.html

================================================================================
来源：http://www.aibaodan.cn/163siyqmknn.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163jupznlwp.html

================================================================================
来源：http://www.sxryk.cn/163kiitbsqj.html

[A01] Hello World
来源：http://www.xuanzx.com/163ztmcalat.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163adcthirf.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163cnwpahue.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163gtigqqhr.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163tzikdvaa.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163mgukuwts.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163jcxmfoeh.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163gbpypnho.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163hqvgfijr.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163emhivohp.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163txvwxgge.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163bsecchno.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163feglsqzn.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163bextllqu.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163bvvkksjb.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163jraqxzlw.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163qdpqlcvh.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163vpwtpqot.html

[A03] 常量定义
来源：http://www.sxryk.cn/163elwajawh.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163nfjpdrzz.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163rdtsltej.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163kzeeeegc.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163hsmiqkzf.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163rpaumakn.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163oddkbdrm.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163xduawppt.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163wlpiknwm.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163brdkxpox.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163pgvbbnat.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163tesnizkm.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163inzjcpuv.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163attfeezd.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163ztsrsbev.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163bwdmtkkr.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163hnifgcbk.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163kfyyrjmb.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163zdwhhbfl.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163rxafayug.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163tkwmmuxl.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ymzeqosp.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163kbnxxnit.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163iekgmbol.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163lganvhuy.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163sajymdza.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163fwlsivey.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163zfvwsplf.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163obwsuech.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163reatggpg.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163icoszdlf.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163sinloota.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163kmxnabld.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163kqzzeyvz.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163jpnwfwkj.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163inudhaey.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163iddxucxs.html

Py:   str(42)
来源：http://www.sxryk.cn/163ajzcczxf.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163oqpnngjb.html


<!-- 参考信息 -->