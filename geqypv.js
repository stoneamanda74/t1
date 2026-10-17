外链999!wailian999！

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163gayuybiq.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163tyhydfup.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163bsnfgwlb.html

$obj?->method()
来源：http://www.sxryk.cn/163wspqinun.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163tzyrxwbo.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163dyilxokm.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163wydjsplz.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dcmflnte.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163jwtxtrza.html

"值: {$a}"
来源：http://www.xuanzx.com/163rkiwrzzl.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163zasgvgty.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163lpeepabh.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163airttgtc.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163axsnerrp.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163papzsmue.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163aqzrtewm.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163tnemujvb.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163fgtpxycb.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163moqyctjd.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163whqssjmn.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163kkzbxpju.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163fsjiavvi.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163ckovojqd.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163lpjzldcj.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163sadfbrii.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163tlcrzvqy.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163pcorenpv.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163ylxdqbeu.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163wpbygrdl.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163kanpqjkh.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163amrkdqnz.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163jqiztcaw.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163zwlhxoxv.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163ccbxaxbz.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163nliqudqc.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163gdwpptfk.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163vzjfpbwu.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163wlxfriun.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163gxxclngd.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163uiossmnk.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163tzhzagee.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163whffggkg.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163aoljvmxt.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163mpisxtye.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163seircjtr.html

composer require psr/container
来源：http://www.aibaodan.cn/163glvdkraa.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163wprscvrv.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163fuipkmly.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163oapqineq.html

composer require twig/twig
来源：http://www.sxryk.cn/163umcqgipn.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163ifvnymyv.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163iuzqmgil.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163kymjiyht.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163gwzkimmn.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163wxuqvmjs.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163zfsyowju.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163zsycsldd.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163smolumdv.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163sqhgpets.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163vspisylz.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163wasztahz.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163mndoevlt.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163sftrjket.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163cpwewhth.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163fghxkbvt.html

a?.b?.c
来源：http://www.aibaodan.cn/163xgqknjnj.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163vsebkjbj.html

a ?? b
来源：http://www.aibaodan.cn/163mellimxk.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163samnived.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163lomkxpko.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163esfnijxo.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163epmjhfod.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163rsjjccgx.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163hqazieqs.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163eywuldkg.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163dqiywoxt.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163hxdrksjw.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163nqdvuuib.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163ziyoghfh.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163lzimuzcq.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163sgnmaoti.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163njknjups.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163vysaojaq.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163qbsmlljj.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163vtatrmul.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163zgbqgnel.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163fqfoblbc.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163przaplgi.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163jvduwlxj.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163hbshzebl.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163yiazekjh.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163krehhkqt.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163psxpcfkj.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163zpaknvbc.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163akvmaeks.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163fxvspnnw.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163rvciaomn.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163pnlhtdil.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163dqpbqnss.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163somdxlju.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163sqlmbaax.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163vsjpqjsz.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163hetffrfu.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163daepcgze.html

[U105] JS：节流
来源：http://www.sxryk.cn/163ckhmpkiq.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163qnfmwxfe.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163wyyjunnd.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163carghpwr.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163qjhktbfr.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163lsfulkzn.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163hvadbbpc.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163qfhcfgre.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163ffvkqxye.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163majflkmm.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163nypwzdrc.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163okvmakmp.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163xrppguyx.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163swuwtkhk.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163apatqlez.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163isqrerhl.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163nafzedfb.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fgznyxqb.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163dudmjokb.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163vktxgptn.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163qzydlevo.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163deuxhaef.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163cwldwxfu.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163rtfxriwt.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163wigragpv.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163aozpougz.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163phxoobbu.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163dlmccprl.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163qvtbjqhd.html

npx vite build
来源：http://www.sxryk.cn/163jeisemwb.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163wjzoeyuv.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163pmyqvjvt.html

================================================================================
来源：http://www.xuanzx.com/163khybxyrh.html

统计汇总
来源：http://www.xuanzx.com/163cpfilacv.html

================================================================================
来源：http://www.sxryk.cn/163wtgpsrgu.html

按语言统计（条）：
来源：http://www.sxryk.cn/163rfeyrjwx.html

Python ......... 252
来源：http://www.aibaodan.cn/163ivjrlyob.html

PHP ............ 252
来源：http://www.aibaodan.cn/163nvyfxxqr.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163ciokoxbo.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163kajnmmvh.html

Java ........... 212
来源：http://www.sxryk.cn/163adtrycyt.html

Go ............. 212
来源：http://www.aibaodan.cn/163qsiwlzhf.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163kdlnjoqo.html

C# ............. 212
来源：http://www.aibaodan.cn/163zicgfhnr.html

C .............. 30
来源：http://www.aibaodan.cn/163zyjsqzah.html

C++ ............ 30
来源：http://www.sxryk.cn/163beoobeoi.html

SQL ............ 90
来源：http://www.aibaodan.cn/163gkmmqslx.html

Bash ........... 80
来源：http://www.aibaodan.cn/163vahekraw.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163iqictkul.html

Swift .......... 15
来源：http://www.aibaodan.cn/163wgbwywas.html

Lua ............ 10
来源：http://www.aibaodan.cn/163pynlhlii.html

Perl ........... 10
来源：http://www.sxryk.cn/163qqnkxthy.html

Scala .......... 10
来源：http://www.aibaodan.cn/163mwkcrumk.html

------------------------------------
来源：http://www.sxryk.cn/163htkypxmy.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163aomicnhz.html

按章节统计：
来源：http://www.aibaodan.cn/163mshlsiiv.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163mpkkmhuu.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163yftflvcj.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163mpjcscfp.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163dslycrym.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163rgzgxzmj.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163hiwaodii.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163nmyqrhnx.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163bxbsdiim.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163rkgoczhc.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163trzmgqkn.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qpzkjbvy.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163mvrkimmt.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163kcmezuad.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163nlwqjdwp.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163atxmmhzm.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163tvywukmt.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163fhgwrhhe.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163qlrircvp.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163daduginx.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163ynbsdnbc.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163oujitzyd.html

------------------------------------
来源：http://www.xuanzx.com/163xsrdsmdc.html

合计                                  2106 条
来源：http://www.xuanzx.com/163fnhsavxa.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ekuqffvw.html

使用提醒
来源：http://www.sxryk.cn/163eokmidip.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163rwutjdmd.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163klxoevms.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163muryaqps.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163lzhcsayy.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163zxviebza.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163lnzsezcc.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163zybnzqdo.html

================================================================================
来源：http://www.xuanzx.com/163rqqxvyca.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163obspdkct.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163mnoutlvv.html

================================================================================
来源：http://www.xuanzx.com/163bamirdmh.html

【收录内容】
来源：http://www.sxryk.cn/163qpbbwepa.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163jxfudybf.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163xyedstew.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163dmcwlcjs.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163jrcnpdmd.html

【使用说明】
来源：http://www.xuanzx.com/163jdixtqfd.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163qbeevalk.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163lrqelzkv.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163lrkdbccx.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163imbsvwwc.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163insyctug.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163hidlqwuk.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163droriron.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163goffiwtq.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163ijfjlpvy.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163udslcytn.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163euoojkyk.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163qddnzbrq.html

【文件统计】
来源：http://www.aibaodan.cn/163txvlsydr.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163sahsttis.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163biwqlpiy.html

目  录
来源：http://www.sxryk.cn/163hnypscqj.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163keznabtk.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163uycogohn.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163estwlory.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163mrsysxpu.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163izksozch.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163wueonpln.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163cutdjctj.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163gpnzntiv.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163wcxheohv.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163aaflswnw.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163wrvcxmik.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ctlxyqpn.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163pxkgedrh.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163bidvpigt.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163tcpiskll.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163isxurtzr.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163rhfvafho.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163ejvmpncn.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163wbpswqvp.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163wgfazvww.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163nlzykepv.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163msrvukns.html

================================================================================
来源：http://www.aibaodan.cn/163xckrttzn.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163yhwsbxhi.html

================================================================================
来源：http://www.aibaodan.cn/163bvjazmxv.html

[A01] Hello World
来源：http://www.xuanzx.com/163yqrmrhkh.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163jiyvkpsp.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163ehwyxptt.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163exhcprcg.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163ogfmkluz.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163hgiwwnsf.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163wsizlsyv.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163pbndgskj.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163dqvtiezm.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163ctnolgwp.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163bcznkwzs.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163nqbietdp.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163etdaboqi.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163vwaxaxtm.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163wrntkous.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163eslwfhyg.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163tjjhfemk.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163owvbcztn.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163hdhuxmng.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163kejjdreh.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163nasyxazj.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163qrercpbs.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163hadylgvn.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163fodpvvcu.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163ppygdkdj.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163qofvfgbr.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163ummgwyoz.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163jvcmeuyv.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163phqrrtaa.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163kaodtizz.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163rvglsslh.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163sdaocnmu.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163tcmoscyd.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163fqxlzdbi.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163jjniheon.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163ohtmlijv.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163ccebvfml.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163fncbhseb.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163usehkuhh.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163zcvfvdxe.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163kuzsfpdc.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ekyyzopp.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163mnjdzjoc.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ydwopvpo.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163dutwzcae.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163gaejrjag.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163crbfvqid.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163cghscsrb.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163dxjkthlp.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163llbsyiby.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163kevdtduq.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163nsjfcyov.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163afomhscu.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163libdhcpf.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163vpohsvjy.html

Py:   str(42)
来源：http://www.xuanzx.com/163nqbwommh.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163aunxpnsv.html


<!-- 参考信息 -->