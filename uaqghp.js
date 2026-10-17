外链999!wailian999！

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163sorzooxe.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163tfyseabe.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163ogbtivps.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163bvhwsaim.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163spkogecc.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163fdmqwnsw.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163avljxhot.html

$obj?->method()
来源：http://www.xuanzx.com/163ffprqobi.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163fzbjrmsk.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163xqdabhuv.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163aunulocr.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163bxcagkae.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163mjgiqvpz.html

"值: {$a}"
来源：http://www.aibaodan.cn/163xfbrzkfr.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163sbehhywq.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163pjoqumiu.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163otwzrxfj.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163xquvlncb.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163xesicllt.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163sqjgpgge.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163ptosggps.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ognfbfbq.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163fjuokvbw.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163iwyxliuv.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163lgoryzzk.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163gymypmbb.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163tyuvvlzv.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163tuvbfbcx.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163ggyubzzx.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163cwjfxugb.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163dwcatsmt.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163nfcvwwgy.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163ljkumdub.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163hqgthohk.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163qzljwxkn.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163ykuzodhm.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163dndahjyl.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163efcizdsa.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163eskbzguz.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163mijsubmz.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163rtqxkutq.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163dccjtiha.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163agnchtjb.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ukcoiqcl.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163zzmlbgrt.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163hprrhdjc.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163ronvxyem.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163wxswhemw.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163mtboyftr.html

composer require psr/container
来源：http://www.sxryk.cn/163erxtdqpb.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163zkygkmcy.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163mmrchibe.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163kxgrxrjf.html

composer require twig/twig
来源：http://www.sxryk.cn/163bpnsntwg.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163eruqqjyp.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163hooykcpz.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163jfwnbnkq.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163lhpetfcy.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163vfkxoglx.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163aiqjcqye.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163zzqhinyw.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163rkzeutro.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163ylcxtyec.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163vpgqonbt.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163pvixnnnm.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163lseuunjb.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163pxinqlff.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163qiaoaprq.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163zqiqbzqy.html

a?.b?.c
来源：http://www.xuanzx.com/163abnuqvkr.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163topaodtm.html

a ?? b
来源：http://www.sxryk.cn/163fupjibtm.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163qbcdedra.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163ktuuffbt.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163fsbpiprr.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163cqhmhuzf.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163mifmcrrr.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163gfzhvlux.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163xeqjcphm.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163eowcmlrh.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163brmedthg.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163helfdovs.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163iqwtojfl.html

structuredClone(obj)
来源：http://www.xuanzx.com/163mxxbtiwh.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163dljcqela.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163eabmqskc.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163fliijmvr.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163mwqebevr.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163aolqgluj.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163qxovraox.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163bjzghovo.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163idemkdsa.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163rsapcbyy.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163fixxpomi.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163iuaikglo.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163txqvgzur.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163qfrepkns.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163zvwotlzn.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163obamqmua.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163knjxfjkp.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163vgrguydi.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163tbckafzv.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163akvwqdqu.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163ncejzuvb.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163ximjfqho.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163wfllmmyq.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163bjvgsjiu.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163fvxivolb.html

[U105] JS：节流
来源：http://www.xuanzx.com/163fjhfckmf.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163sxhribxe.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163rajfxknv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163zftajfvw.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163frrsyvsc.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163guugalfk.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163xxkotvnl.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163sdpplxnk.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163lxxfqxen.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163rxgznsgg.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163kryuuvwt.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163kmcqyxza.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163uvhkpsjs.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163dvytpbmu.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163zjinnasi.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163floncwcs.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163eggcjtln.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163bcwseuak.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163qhgogssu.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163bedfwrez.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163ahbkktrj.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163lpxmbjqh.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163sxdztemi.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163aqgjvmvn.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163ovjkzcba.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163tzcojrmc.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163samukedp.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163avqpwmgp.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163ymftqpuj.html

npx vite build
来源：http://www.aibaodan.cn/163fqcsjdmy.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163bboyiafi.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163saqtwbev.html

================================================================================
来源：http://www.aibaodan.cn/163zgezlkpw.html

统计汇总
来源：http://www.aibaodan.cn/163omecqxfb.html

================================================================================
来源：http://www.xuanzx.com/163clqbayqk.html

按语言统计（条）：
来源：http://www.sxryk.cn/163jzfohrna.html

Python ......... 252
来源：http://www.aibaodan.cn/163hvjmtiif.html

PHP ............ 252
来源：http://www.xuanzx.com/163lgtpkzmy.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163jvfxaevp.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163ojaphefe.html

Java ........... 212
来源：http://www.sxryk.cn/163susascsp.html

Go ............. 212
来源：http://www.aibaodan.cn/163jjfarwav.html

Ruby ........... 212
来源：http://www.xuanzx.com/163ofdipskc.html

C# ............. 212
来源：http://www.aibaodan.cn/163fesbfspw.html

C .............. 30
来源：http://www.xuanzx.com/163gngyusts.html

C++ ............ 30
来源：http://www.aibaodan.cn/163tgoflmyi.html

SQL ............ 90
来源：http://www.aibaodan.cn/163vluapkaj.html

Bash ........... 80
来源：http://www.aibaodan.cn/163ojoeqsoo.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163roenihtg.html

Swift .......... 15
来源：http://www.aibaodan.cn/163bsislooj.html

Lua ............ 10
来源：http://www.xuanzx.com/163bpsmmyds.html

Perl ........... 10
来源：http://www.sxryk.cn/163hpjzzjnv.html

Scala .......... 10
来源：http://www.aibaodan.cn/163bzwhsyvn.html

------------------------------------
来源：http://www.aibaodan.cn/163uircphgz.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163ndpdixqq.html

按章节统计：
来源：http://www.xuanzx.com/163lxpemopy.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163qzurdygu.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163kgvlmxrx.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163gsviigkm.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163crkmxyts.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163ufpczurk.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163hhajxkia.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163jrewscew.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163tbgfejch.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163miamdtqr.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163xpctxmmw.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163dnaanqhh.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163cepfulvf.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bpquwdbx.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163shbvtojb.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163uiysirzx.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163xkgoirir.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163kxhnevfx.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163btkerjfb.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163itivacgu.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163zoluhrde.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163ajbkqufw.html

------------------------------------
来源：http://www.aibaodan.cn/163ixwwsyix.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163qyzedcec.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163kithemiq.html

使用提醒
来源：http://www.xuanzx.com/163tpnpxbbt.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163pjvvqrbq.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163svmwoypx.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163xwumjbaf.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163pigqfgyi.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163mmfifrqa.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163bqetnayp.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163cppzplcp.html

================================================================================
来源：http://www.sxryk.cn/163ugactilq.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163rtwppvvy.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163zlnaglqr.html

================================================================================
来源：http://www.aibaodan.cn/163eokbtfwt.html

【收录内容】
来源：http://www.aibaodan.cn/163xdjkrazn.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163ddyvessb.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163avfnobqx.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163ctdgvqku.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163saxmjuje.html

【使用说明】
来源：http://www.xuanzx.com/163yswlbwye.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163twiormui.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163tqbiqqtu.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163nwffhkkf.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163ifvnoand.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163befqsijb.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163kfmrzprb.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163wvrdantg.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163efcjfsgh.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163fnqiuxuq.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163gknaqelo.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163umwxmtpi.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163ufebvwcv.html

【文件统计】
来源：http://www.aibaodan.cn/163cjojctts.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163mznisklu.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163hvuvjpcy.html

目  录
来源：http://www.aibaodan.cn/163ukvausmo.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163doccrgex.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163vohrgewn.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163urbcnpxg.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163uzespwpx.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163qgwsftgt.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163lvdetwcf.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163dyqrfkse.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163rwehnada.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163pxmenrkd.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163jvohgjvk.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163rcgmouys.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163szvrkoqw.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163gvvgqihz.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163erubqhuu.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163gtlyexor.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163cslvfagy.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163lgdusnzr.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163zgsbiliv.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163rgauolar.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163ediklplc.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163eaynpaqn.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163fdzycgdn.html

================================================================================
来源：http://www.xuanzx.com/163djquzkmv.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163vdsdzhgz.html

================================================================================
来源：http://www.aibaodan.cn/163wjpargar.html

[A01] Hello World
来源：http://www.xuanzx.com/163knjfegps.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163fpgmlrfm.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163tsufeulf.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163tqffdgaq.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163ajlxccjc.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163ovjcixph.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163eabjsrrv.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163ofsutblr.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163fhbajxej.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163elxocicx.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163ceoytddg.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163ptdbmbrp.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163nhtfmddk.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163pzpxhwiu.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163jtqejjvm.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163zfdquoro.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163akadntor.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163romopyyl.html

[A03] 常量定义
来源：http://www.sxryk.cn/163hlvhjkwj.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163hdtwdfxh.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163cwbhjzgc.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163iwdgvxsx.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163zdhjkdyo.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163qxjndgkm.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163pbrrypmi.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163paobhslr.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163iuwgkbin.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163qnfevluh.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163efryzjlw.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163abxsoweh.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163zmlfeurx.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163ltxmrhmh.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163ywaeofso.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163zktzjzsz.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163mjuiwyhg.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163giudfudr.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163dupjenlj.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163vsmotvyl.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163kjoycuwc.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163xtskzbtq.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163sqmewkcu.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163vwdzbkbx.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163edtfwvwf.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ksfixspp.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163siykkzyy.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163itlavlqt.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163ucfgvbkj.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163nzrcghfx.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163jzhppoaj.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163ibieqgxv.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163stcwqecp.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163ddzqiqqe.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163xgbwxirp.html


<!-- 参考信息 -->