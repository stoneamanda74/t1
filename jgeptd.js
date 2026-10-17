外链999!wailian999！

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163jiffahaa.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163vhwoahla.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163exieloxw.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163sizzmxdi.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163wfhqijez.html

namespace App\Http;
来源：http://www.sxryk.cn/163srjlfrtq.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163byiyaura.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163xobjsreh.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163obwhbnlz.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163hxuzxded.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163yvprtbeu.html

?string $name = null
来源：http://www.aibaodan.cn/163vqidxjre.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163rkoegzvp.html

int|string $id
来源：http://www.xuanzx.com/163ncjwmmdq.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163oljvwphf.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163zewfndmo.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163orzdulvw.html

public readonly string $name
来源：http://www.xuanzx.com/163qapoqwoc.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163cqororgg.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163ovqauwab.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163tmgpwhnt.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163dyycrsgd.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163zhfpjfqj.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163pofaxrss.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163opmjycty.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163rdxziouh.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163dwmoruzp.html

$obj?->method()
来源：http://www.aibaodan.cn/163ismuloxb.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163mzzitevn.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163oasiorgn.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163zobksqmk.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163zewwripb.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163folcmjij.html

"值: {$a}"
来源：http://www.aibaodan.cn/163bywlzowf.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163utnomasj.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163ypjeohie.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163byekvpwn.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163oupiitwf.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163ijgculcp.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163canlbqyb.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163vfawxojg.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163kkcsdpfu.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163oeyqjgoh.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163fatknhad.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163ivvprblh.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163egaxxxep.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163xttfiqhy.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163rguiiudk.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163zmjdtezm.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163ukygcxno.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163xdgqcekh.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163fozqewvs.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163gqnoiunz.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163xiszlnba.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163ptwlrrkb.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163aiwiawdu.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163udymmxor.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163xndinqnm.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163kjvqcwjq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163macmcjgs.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163tbkpdkxh.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163uyoklxtr.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163djxuwvru.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163tdplhxra.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163mubyrvvp.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163vlejslea.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163najxqxre.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163zajmanrw.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163butvpdux.html

composer require psr/container
来源：http://www.sxryk.cn/163tpojghrh.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163ibynorbx.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163aidfuzen.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163kjafzwwa.html

composer require twig/twig
来源：http://www.aibaodan.cn/163cjtfxfjg.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163uxihahbk.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163mkxgkrwd.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163ufztevsk.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163mclcrccq.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163xrprkpdp.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163yyqlkwij.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163vnujcjht.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163qudydbeq.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163lmzaazfs.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163ppfeewrt.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163xylartrr.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163ophuxtze.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163emishfks.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163xzwnubvv.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163fkwesfjr.html

a?.b?.c
来源：http://www.sxryk.cn/163fbqyovsd.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163eogirhfs.html

a ?? b
来源：http://www.aibaodan.cn/163vnjmyxlt.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163alxewuii.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163yztrdyow.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163pkujgfgz.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163meblglne.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163yhndjhmv.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163hcpgbthb.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163fjlldins.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163cikhuvrl.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163eddwahor.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163zflsssdt.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163bdxruyoz.html

structuredClone(obj)
来源：http://www.xuanzx.com/163jkmuorhq.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163dizikhkn.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163ipwozkaf.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163swrnqhsm.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163vfnbigit.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163tppdigyf.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163qmysrozr.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163coxhvjuj.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163goasxife.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163bxtgemir.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163alpbvcaj.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163vmyhhhcw.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163fwanyjsj.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163usftdrlj.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163cqedpssl.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163mirnauuo.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163ypmqriye.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163qerlwvoj.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163hgdliwpb.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163detzivwa.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163mpyldtxx.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163ckekbumj.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163ewlfhckk.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163usszcyok.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163tcpkgpvd.html

[U105] JS：节流
来源：http://www.sxryk.cn/163qrojtdzs.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163djcgitcn.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163uypbeoff.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163wqlqgdoo.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163xqckcfef.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163lzvjtwgr.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163yvornegd.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163jxisazlr.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163wexapycq.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ffvhovkd.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163lxqcgqli.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163jaoijslo.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163fuizgwwu.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163gdhfmuvu.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163fukwxwor.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163erfuqwvw.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163sjtchmzq.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nmwcnorl.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163zbmlmgfw.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163atvsmtlf.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163tajpgygm.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163xsvbzzan.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163nhdaeecz.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163gygznqha.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163wdlwzukh.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163ybtoomqc.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163beulocjt.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163wvjwusvr.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163kdtaoigr.html

npx vite build
来源：http://www.sxryk.cn/163vsfptexs.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163zohmfpit.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163cikwmxkd.html

================================================================================
来源：http://www.xuanzx.com/163ubjxczjg.html

统计汇总
来源：http://www.sxryk.cn/163oenwnnqa.html

================================================================================
来源：http://www.sxryk.cn/163gnlffycw.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163lafhssru.html

Python ......... 252
来源：http://www.xuanzx.com/163oufvtfhp.html

PHP ............ 252
来源：http://www.xuanzx.com/163ltoeypwk.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163qshiznpo.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163mujtczfg.html

Java ........... 212
来源：http://www.xuanzx.com/163lxgkqhmy.html

Go ............. 212
来源：http://www.xuanzx.com/163byehkuep.html

Ruby ........... 212
来源：http://www.sxryk.cn/163kmxtvfyj.html

C# ............. 212
来源：http://www.aibaodan.cn/163edpcgcfe.html

C .............. 30
来源：http://www.xuanzx.com/163nwfxvtmh.html

C++ ............ 30
来源：http://www.xuanzx.com/163wdmmmfxk.html

SQL ............ 90
来源：http://www.xuanzx.com/163lslegogw.html

Bash ........... 80
来源：http://www.xuanzx.com/163woovdkjj.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163awjwhwhx.html

Swift .......... 15
来源：http://www.xuanzx.com/163ovhbrwaq.html

Lua ............ 10
来源：http://www.sxryk.cn/163mxlywnqx.html

Perl ........... 10
来源：http://www.xuanzx.com/163dtfpqywa.html

Scala .......... 10
来源：http://www.sxryk.cn/163izmkghpz.html

------------------------------------
来源：http://www.sxryk.cn/163kssgadhv.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163iyhygmau.html

按章节统计：
来源：http://www.aibaodan.cn/163yxlctkxd.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163xoodfpdg.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163wfazzmdz.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163djisvdvl.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163epbgrisi.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163ogkwqnop.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163wkgemslk.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163cccbblcu.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163yviqijns.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tgvqvahd.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163xnojfhst.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163gcefnggk.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163dbfgvnsg.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163euybodfg.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ehilwtzw.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163dwxkgnvn.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163mljlddnk.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163sjeqvaoz.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163ttqitxum.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163nukmsflh.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163etworwcu.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163kzncyypm.html

------------------------------------
来源：http://www.sxryk.cn/163ylnuiatd.html

合计                                  2106 条
来源：http://www.xuanzx.com/163tclvjzbf.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163tmyujtiz.html

使用提醒
来源：http://www.sxryk.cn/163xaprffmf.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163emslfvmu.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163uuraqeml.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163qyfhjquy.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163iedtpnow.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163qygiomjy.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163anfhqelt.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163bdveoifr.html

================================================================================
来源：http://www.xuanzx.com/163baaczfxo.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163jpmjzwuh.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163ihsfbehp.html

================================================================================
来源：http://www.sxryk.cn/163louoikvx.html

【收录内容】
来源：http://www.xuanzx.com/163zstasroj.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163opdhzusq.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163qrxwwdtv.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163pbjeogcv.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163hglvmnus.html

【使用说明】
来源：http://www.sxryk.cn/163pfgxltto.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163abayqhif.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163hfiznqog.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163yyihnanw.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163woqksaql.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163zjkonutx.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163yxgtppos.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163mxeqmytx.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163rtvsqccp.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163yxqzdjtz.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163wmdbuwxx.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163txvvmnoi.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163dtincnui.html

【文件统计】
来源：http://www.aibaodan.cn/163atxmslju.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163wsbxwjhw.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163hgrtnuap.html

目  录
来源：http://www.sxryk.cn/163pbcipgmk.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163wjkjpjys.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163fuaihepp.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163bnjsxrnu.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163xqmozfbk.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163hhfezeze.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163rafeurcc.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163xnftzyeh.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163dufcsdqu.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163bmsjvdkb.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163gosmuemc.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163rdjuecwn.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163msliexed.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163wyuqmmnt.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163rtnngmvg.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ncxgspwc.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163xeqspzru.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163bnbmjuyq.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163mbhopdxn.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163brhuyrfw.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163xjqbdepc.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163jrppdesy.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ueqpllpn.html

================================================================================
来源：http://www.sxryk.cn/163atcchipf.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163efveabla.html

================================================================================
来源：http://www.sxryk.cn/163fyppynto.html

[A01] Hello World
来源：http://www.aibaodan.cn/163yvynspzq.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163xumzmsgq.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163etwhvlau.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163xziexakr.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163zkqckyaw.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163zsuwmrte.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163deolgdeg.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163nfrmzyha.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163vxjuyqcs.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163wsnuqzix.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163hptqnapt.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163xatbaaeb.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163hluvgkxj.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163pwpriobl.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163jomrquvd.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163gzmjlndu.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163stycxygv.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163hmkslghc.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163abpnhpgz.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163qeclpbvp.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163lwhqfqek.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163ygkbzilb.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163idrbkhos.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163ubokofrg.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163xcrwmuzp.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163yoxjwxth.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163yostgdca.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163yhtlwcwk.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163ezrmsgsf.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163qzmuxtnu.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163bdafucmy.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163zostndsx.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163uoppjfaz.html


<!-- 参考信息 -->