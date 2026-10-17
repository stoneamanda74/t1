外链999!wailian999！

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163noobsoil.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163dbmqgytd.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163iyfilsth.html

?string $name = null
来源：http://www.aibaodan.cn/163ilxftgjg.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163xwldfpab.html

int|string $id
来源：http://www.sxryk.cn/163kbzmhsdj.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163rcchxcru.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163zrxsychk.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163oikiyaxk.html

public readonly string $name
来源：http://www.sxryk.cn/163hsvwhpuo.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163vdwberyz.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163cobsgmfw.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163zgsimtcp.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163vftexmem.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163yjiwezqn.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163sxopvauz.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163uxhjbqzm.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163ppodujrp.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163kpzogero.html

$obj?->method()
来源：http://www.xuanzx.com/163bkmjfefq.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163nppgkjgx.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163bltypbvn.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163aotzchtw.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163kipqtfef.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163iuioyoqc.html

"值: {$a}"
来源：http://www.aibaodan.cn/163kawborci.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163oqhqhjoq.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163fwyhhteo.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163xthsoulq.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163xqrezgvm.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163ttxodzhn.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163kwiyczuq.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163egykdiei.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163hnqrqclx.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163zuifrkwr.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163xgbmwliu.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163fijoxysf.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163ranhxlah.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163qtvpeqbh.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163agylbmuu.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163fvtygwth.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163uhxmtnks.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163tykqrljz.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163zuifbhkt.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163tbmeordb.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163eotznshn.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163dovrvubo.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163cufsmzbl.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163lhzuaafl.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163kpaclqex.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163qavmeyje.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163ivehzpos.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163wzhrkyls.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163mxppoaxy.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163wpqkckxx.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163gxogopre.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163aidqowan.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163vhaqrird.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163rnhypyea.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163whecahpc.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163ynxabrde.html

composer require psr/container
来源：http://www.xuanzx.com/163qqznmhjq.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163eixtndrf.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163qooexaen.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163kljoxecu.html

composer require twig/twig
来源：http://www.xuanzx.com/163kaexhijt.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163inelgaia.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163cphfyorw.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163yarqfyod.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163qfklggsj.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163cdvxtiee.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163vlznktbb.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163csotwqbp.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163vkkakaus.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163shnwotkv.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163mazkeevd.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163fqeccoun.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163hurccksq.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163doqrgadi.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163xrvzjwvi.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163rxaytjjm.html

a?.b?.c
来源：http://www.aibaodan.cn/163eejlslap.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163btuqhqdt.html

a ?? b
来源：http://www.aibaodan.cn/163nfjpeihj.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163mfcrjpxs.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163otlgaeos.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163ifadqvhj.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163fyhirpge.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163mkyibask.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163skmpudch.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163cezpcwes.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ygpcnrbs.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163bwogdkzk.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163vcgyrgqf.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163oyhiavxt.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163ddazlfne.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163mrzcerlc.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163wnbqttpa.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163tzeysxme.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163neqoezgc.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163zwtkrfab.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163vurxcbhv.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163xudbkmrl.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ncagewat.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163bvtdyqui.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163qnejdbgn.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163azuizamr.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163ilbnfrgz.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163wveyvfrs.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163oxsltfgh.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163exxrgrqg.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163msswsoxb.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163szvctghh.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163nqxyfmng.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163tvdmhywh.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163qrxdngws.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163uxzulxez.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163bgaagnrc.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163oknvvlxa.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163sreacqie.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163ylleldnz.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163xpdgqief.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163ijckvsnx.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163fbrraycw.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163rynrznbx.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163ybwmfcha.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163ffmhkafj.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163yolvyqsh.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163hvpptkcp.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163zwjafpdz.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163iefnvsfw.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163iybktemz.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163xqstxbhf.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163trrzjlhl.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163dnekpyak.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163lakunquu.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163qvqtoiyh.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163myktanpk.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163uvnmuwou.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163qhyqnpvp.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163exhtziix.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163eevgrnbt.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163amzcdzpg.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163qjgumpeu.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163xgxupozy.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163cfsjboxu.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163rhacgczz.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163xrgvaruz.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163egvaevbg.html

npx vite build
来源：http://www.aibaodan.cn/163xkvfwjmd.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163fjwwfwvm.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163uiwvoisi.html

================================================================================
来源：http://www.aibaodan.cn/163fkwduxui.html

统计汇总
来源：http://www.sxryk.cn/163dhywmrsr.html

================================================================================
来源：http://www.xuanzx.com/163sqtwzqkv.html

按语言统计（条）：
来源：http://www.xuanzx.com/163vtfkvnah.html

Python ......... 252
来源：http://www.aibaodan.cn/163zmiigmlq.html

PHP ............ 252
来源：http://www.sxryk.cn/163jwnxdaar.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163skuvqvxm.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163puuxfxnb.html

Java ........... 212
来源：http://www.aibaodan.cn/163qtpspjci.html

Go ............. 212
来源：http://www.aibaodan.cn/163aublqjkr.html

Ruby ........... 212
来源：http://www.sxryk.cn/163ukqgqiaa.html

C# ............. 212
来源：http://www.xuanzx.com/163dvemlpon.html

C .............. 30
来源：http://www.aibaodan.cn/163daydvzko.html

C++ ............ 30
来源：http://www.sxryk.cn/163arigmnan.html

SQL ............ 90
来源：http://www.xuanzx.com/163fgvqesed.html

Bash ........... 80
来源：http://www.aibaodan.cn/163nuugilwu.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163qzpldpuk.html

Swift .......... 15
来源：http://www.xuanzx.com/163dmmmfyrs.html

Lua ............ 10
来源：http://www.sxryk.cn/163ydcehlju.html

Perl ........... 10
来源：http://www.sxryk.cn/163fsehdzmu.html

Scala .......... 10
来源：http://www.sxryk.cn/163lyefdzif.html

------------------------------------
来源：http://www.xuanzx.com/163wshcostm.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163qighikjo.html

按章节统计：
来源：http://www.sxryk.cn/163urwbxquj.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163wnfktnyx.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163hcffdttx.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163dwiaokws.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163mdauzuer.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163bmuxdnlm.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163rdsevppk.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zijzxkuu.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163arirmwhs.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wuzoydpa.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163pmbosuiv.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qsqlxhdr.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163eajvkcfq.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163lozazgaq.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163gcwwmtku.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163iituouyi.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qrradccr.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163yywasqyd.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163mbicscec.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163oflnvysh.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163iyfgcgzn.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163ltcdjdvy.html

------------------------------------
来源：http://www.sxryk.cn/163ujklooni.html

合计                                  2106 条
来源：http://www.xuanzx.com/163urwdhqjy.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163lxdzwgyh.html

使用提醒
来源：http://www.xuanzx.com/163dbjcbmbk.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163asojkdmr.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163bzjuxosf.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163hjxdmeun.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163ujjbvxsd.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163agicnvfm.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163fcwxcaym.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163ltuigwnf.html

================================================================================
来源：http://www.aibaodan.cn/163tzngmhsp.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163abfajvku.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163gotspaaa.html

================================================================================
来源：http://www.xuanzx.com/163piyrdvzd.html

【收录内容】
来源：http://www.xuanzx.com/163pegombkc.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163arwtqsgh.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163kevsgkgs.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163dvbhtkmj.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163dtmwhgrc.html

【使用说明】
来源：http://www.sxryk.cn/163zkurxtyk.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163xzjzanjo.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163ckclmsbj.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163mohhyxzw.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163ntmwlmkl.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163thjqzjjd.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163kztepzcd.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163oeilimnd.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163bkkrqytv.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163wtjhpqhd.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163cqqhwlur.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163savmgmnq.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163blkxvjqj.html

【文件统计】
来源：http://www.aibaodan.cn/163hoylulrl.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163ubwlphfg.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163lrktdccj.html

目  录
来源：http://www.sxryk.cn/163owmhzzst.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163rlmnvabw.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163shrxkbpj.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163hjphkfef.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163hxhmqadl.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163fvqdzjbj.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163ydjnjfmb.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163wyqtoolf.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163jnlvxuei.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163mmdmvrfl.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163zflmdzkt.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163xysjxsji.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163djrwgybf.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163mcqqjzxa.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163kbjzgsie.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163jozzftjr.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163ybxjghmg.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163cojqxtdy.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163kwlrpcxy.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163hocljoxg.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163hsaccabx.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163mlttialt.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163jirmtomv.html

================================================================================
来源：http://www.xuanzx.com/163rqsnalmm.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163dqnruqsb.html

================================================================================
来源：http://www.sxryk.cn/163drqfnouw.html

[A01] Hello World
来源：http://www.sxryk.cn/163rpzzexcb.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163rudynzqh.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163fwcocgim.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163urpzozut.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163orkydyjq.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163rxodjzqy.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163bdnbebgl.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163vwpzrnip.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163zcrujake.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163qcskekyl.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163onbsucgv.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163druoddfp.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163ylfxosry.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163plfnsgrg.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163uhfcmlvb.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163yuephqne.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163kqbbpfcd.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163wiaozdcm.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163mpmpystk.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163hvlcxaiz.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163hdujqzsz.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163ejuwefsw.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163zqsrckkt.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163ojubnneh.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163mbphnvex.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163knzwafwa.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163dmszixzw.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163cqzgwoym.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163iryqpmgc.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163yibzchbs.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163xcmxgtxj.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163ltspzpui.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163nrzzazek.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163elrbsqvy.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163vdnqaoqf.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163ylrddvqc.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163wnouowah.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163exsbzoon.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163wshwznch.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163qgkcvyio.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ragvsfqe.html


<!-- 参考信息 -->