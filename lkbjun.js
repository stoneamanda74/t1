外链999!wailian999！

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163jbigpdgn.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163pbfexnak.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163gjlxbtnp.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163laneitjp.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163gjlvxzpz.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163hpuysmiz.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163cecevnwj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163ambrjxhr.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163htwozmng.html

namespace App\Http;
来源：http://www.xuanzx.com/163idpyitax.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163sbidkdne.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163qhuvismp.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163crjfejak.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163lfikxfuj.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163sagtgkzv.html

?string $name = null
来源：http://www.sxryk.cn/163qwlblmno.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163xqaabgqk.html

int|string $id
来源：http://www.aibaodan.cn/163yossviqf.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163qitvweuv.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163jgbcaanp.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163qxdaprdo.html

public readonly string $name
来源：http://www.aibaodan.cn/163vqwhorge.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163jlwyisfw.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163abmzmwqi.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163knycyqyd.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163itpdozlq.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163kteczkuj.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163qtxjuwzc.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163cpwptlxo.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163ihtjxyhx.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163gtduwqyq.html

$obj?->method()
来源：http://www.aibaodan.cn/163cfmdquag.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163wkuqsfwb.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163amphmfgx.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163jglivejw.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163dqxcvqdy.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163pswbwjac.html

"值: {$a}"
来源：http://www.aibaodan.cn/163htzjfzyr.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163grzsogrw.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163iuqcmqhb.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163ujlelucc.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163gkfhehdm.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163hdybkqor.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163aprkwvcd.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163uibmijaz.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163rmpobiir.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163nmvkvyep.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163fthotyie.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163ohbjxvcv.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163tdtxnems.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163wqjvkmoc.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163ptlsonzt.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163dzsafpkp.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163kdvjasmh.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163jqpvtljh.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163nnixzens.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163pgtomgft.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163kpbaybng.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163uccsovoj.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163twmtwads.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163srktqfse.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163tlrhaetr.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163yjnckvdw.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163pxvkagyr.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163flemwyds.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163jpiqvgcj.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163sbarhlxg.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163hfxzharb.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163gbaqbldo.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163utpwvjfe.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163vmpyklba.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163vyjzynun.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163tngzdgat.html

composer require psr/container
来源：http://www.xuanzx.com/163xpqifchq.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163yelyscdu.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163lfnkhryw.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163iavrttom.html

composer require twig/twig
来源：http://www.xuanzx.com/163ikbgcbsv.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163kdrkpmhn.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163vcmexvck.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163kmcrvmfi.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163xbxbxaet.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163knyybmxf.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163fhoskpyk.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163guxfymxi.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163lbnckvoy.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163thpisxfw.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163podbqsrw.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163wefdonct.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163fdvdtdap.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163kcqxdwsw.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163cfuwsxtv.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163toagcein.html

a?.b?.c
来源：http://www.xuanzx.com/163wtbrdwzy.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163cbtrwyff.html

a ?? b
来源：http://www.aibaodan.cn/163cahztomi.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163jyuzfdrg.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163iuhuujqh.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163aytmgzpi.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163shdlhbus.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163poufugrm.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163lmqdsplx.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163opivwjlt.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163zsxlrciq.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163kxsaxbca.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163qtawgdze.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163fmvcclqy.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163irfskril.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163hikuubtf.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163qidgubna.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163qwwnxoar.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163wkkxdqsu.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163ozgujsun.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163vrffrfph.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163tfrevuxv.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163cbzxpxsm.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163qldbshul.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163uxuxmtag.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163jydkfgat.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163ottuhpsz.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163owydmzva.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163faqnzctr.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163akglzjnw.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163cfrfvnwd.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163chfaowcv.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163jmktetzs.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163upqfmita.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163ojnadrgu.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163cvbixvcl.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163sfnoddja.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163bwsrzxcr.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163tgladian.html

[U105] JS：节流
来源：http://www.xuanzx.com/163tugjsige.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163chsbjqwt.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163muqhvagg.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163aufzjsmv.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163etyjrtqt.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163tyabchwx.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163btmbuihk.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163tozafoul.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163peedupsz.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163qdsxpjpi.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163stxradim.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163lgpeizkr.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163bwzxtyln.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163uzpfmrbd.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163lssvbmfu.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163sclixrvo.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163uymmrynf.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gjldbgny.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163gjpmundy.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163thktfgrf.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163juqzywzo.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163aswyxwct.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163zhwwwzur.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163bkudfkvl.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163nklxkhpa.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163njpvbfuk.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163oouionvu.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163sabemcya.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163eokqhpot.html

npx vite build
来源：http://www.aibaodan.cn/163pytbenfp.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163ypiqyjjt.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163ftkwdjdx.html

================================================================================
来源：http://www.xuanzx.com/163kjeebwru.html

统计汇总
来源：http://www.xuanzx.com/163fevseggc.html

================================================================================
来源：http://www.sxryk.cn/163jllhwymo.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163opwiuzuz.html

Python ......... 252
来源：http://www.aibaodan.cn/163xtdgybmz.html

PHP ............ 252
来源：http://www.sxryk.cn/163ztbbpcgy.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163fukmhvnv.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163vvwaepsx.html

Java ........... 212
来源：http://www.sxryk.cn/163xsmswbnz.html

Go ............. 212
来源：http://www.sxryk.cn/163hfeieafg.html

Ruby ........... 212
来源：http://www.xuanzx.com/163lmkbtyni.html

C# ............. 212
来源：http://www.aibaodan.cn/163wrzmsupm.html

C .............. 30
来源：http://www.xuanzx.com/163syrhuolx.html

C++ ............ 30
来源：http://www.sxryk.cn/163tbrcvuen.html

SQL ............ 90
来源：http://www.sxryk.cn/163uuznxyto.html

Bash ........... 80
来源：http://www.sxryk.cn/163nvhhjgdw.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163piujjeov.html

Swift .......... 15
来源：http://www.xuanzx.com/163jyfkwwqu.html

Lua ............ 10
来源：http://www.sxryk.cn/163ixnlbrcw.html

Perl ........... 10
来源：http://www.xuanzx.com/163tvhtdbjk.html

Scala .......... 10
来源：http://www.aibaodan.cn/163vpgaupdj.html

------------------------------------
来源：http://www.aibaodan.cn/163jciwylrg.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163ktfalver.html

按章节统计：
来源：http://www.aibaodan.cn/163knwvimjl.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163tkrdzuvd.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163eqimiatx.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163stngcqcr.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163yhgloliw.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163ytxvboqk.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163gmejqvsc.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163wmbzzcyp.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163tcdtxyzm.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163xyvacaph.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163almfuygg.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163xqsvfdkh.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163onkzhpfa.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163evpbjybm.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163dsrhacbn.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163ycpkznqe.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qdfbjfkc.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163nygesqhr.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163kvjoqrew.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163kwswnwpk.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163awczinvk.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163yxwixkoh.html

------------------------------------
来源：http://www.xuanzx.com/163edlbfvkc.html

合计                                  2106 条
来源：http://www.sxryk.cn/163zqwvozhq.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163vvatiupj.html

使用提醒
来源：http://www.aibaodan.cn/163jieboxhi.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163phwkyirt.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163qddsecqd.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163lmljevns.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163hjsjqvaw.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163rqprtawf.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163sganeyfc.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163tmesxldf.html

================================================================================
来源：http://www.xuanzx.com/163pbjnspah.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163dusvimvi.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163khqfedxt.html

================================================================================
来源：http://www.sxryk.cn/163uncvpiwq.html

【收录内容】
来源：http://www.sxryk.cn/163aemkaepo.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163grosmfal.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163piwhcbkx.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163orbngqsz.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163carmbfll.html

【使用说明】
来源：http://www.sxryk.cn/163gmvwjylp.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163jynjjiiy.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163tnyrfvei.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163szfqswym.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163rfpltrzm.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163ufmoxwxl.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163snrxmvmb.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163adrruioz.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163dgiwxjio.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163dzmebnjp.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163sbpthgaq.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163cgynljpf.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163gbfstdie.html

【文件统计】
来源：http://www.aibaodan.cn/163fvhjmdql.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163temhpcir.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163kzshkoec.html

目  录
来源：http://www.aibaodan.cn/163fltroxpq.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163wjyrfjas.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163qlorctjp.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163oktuwlyz.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163yeqaufrl.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163qbzfgqtn.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163yegzqydw.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163gxrfnzda.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163cgaseldz.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163bohmpgpv.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163exvoybyj.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163inxvglba.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163hmwyltvb.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163dydwqedw.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163rxpelvgc.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163yvjoioji.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163ewgyacqf.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163sabwunoc.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163kiujnvja.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163cqtcrrho.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163cypwhqyo.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163gjrxdrvp.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163eaqatyrp.html

================================================================================
来源：http://www.aibaodan.cn/163xpwjatsp.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163drtwyhep.html

================================================================================
来源：http://www.sxryk.cn/163umkzvcdi.html

[A01] Hello World
来源：http://www.sxryk.cn/163fxvwgutj.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163lafndinv.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163oyiqzzbl.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163bekbwngq.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163whcxvgvg.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163buyskyui.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163nljohdvo.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163iudupwyq.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163gyeugsbe.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163aqjdefzi.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163uzapgiav.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163gcysbauw.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163hhcswavx.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163xnqwanlb.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163pyzwumkb.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163nghrqfdi.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163hborcppt.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163betizorf.html

[A03] 常量定义
来源：http://www.sxryk.cn/163rwdfzbrp.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163jwdbbqve.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163mfupgdaf.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163fnatmyfi.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163xsozakba.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163mevvajae.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163eryawqkk.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163mcnwfjjc.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163seueawoo.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163jzzcerjp.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163ilufgygg.html


<!-- 参考信息 -->