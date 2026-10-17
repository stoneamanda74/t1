外链999!wailian999！

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163uuebozvy.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163ylostspx.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163nyjthqjs.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163lmaadqck.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163yzezovlx.html

namespace App\Http;
来源：http://www.xuanzx.com/163gawmnyvk.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163kvqeseuy.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163sjledrhh.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163britzrnr.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163acatdppk.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163vqguetqn.html

?string $name = null
来源：http://www.sxryk.cn/163uaviuxbx.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163iurckogw.html

int|string $id
来源：http://www.aibaodan.cn/163mjumhknq.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163lswwxmud.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163cjeriqvq.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163cieqntzj.html

public readonly string $name
来源：http://www.aibaodan.cn/163kipbrdox.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163nocrooht.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163kesdytzd.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163lscijugc.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163ufjhtzqw.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163mvcwyhsm.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163kdoghkvs.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163nutrztfo.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163gwvmdrvv.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163ulymsxbh.html

$obj?->method()
来源：http://www.sxryk.cn/163fdyvhbgj.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163sxxvwuuc.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163ydatuaoz.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163cojjpnre.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163jukmagfx.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163gwdtkhod.html

"值: {$a}"
来源：http://www.aibaodan.cn/163xpfejipg.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163ukyflemj.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163tuqyefbc.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163oerzptdg.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163bgutpzgk.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163zamnmocm.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163udxtfjuz.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163ldivjlxh.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163gyvbknuh.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163qldnguca.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163yapylodk.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ioxidnsl.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163cvrzseou.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163kehvjglw.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163gwksqyos.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163ozhfhioe.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163deobggpy.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163dkvyvpga.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163ebelvehh.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163bfddjgnn.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163boklptea.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163qqplevwv.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163xqgjpbfa.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163ockjsjlp.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163atubskpi.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163tjbmxppf.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163enoputyo.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163qvevelfv.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163tnipnnyc.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163lrhcjurl.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163lgvojqgm.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163nnzfljxy.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163xwbevhwh.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163hekglfct.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163cmspuyha.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163cnzthrpf.html

composer require psr/container
来源：http://www.sxryk.cn/163lqbdfojv.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163hpubrwzm.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163wldbmayd.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163tfmtivcp.html

composer require twig/twig
来源：http://www.sxryk.cn/163wbqtguup.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163tcnzbahe.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163vycaqucx.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163qxblputl.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163uewiqkig.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163yyfirvae.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163jezfavyv.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163qfmbdkkx.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163fddjvghh.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163sqtjnoad.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163egcdjnlw.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163srbdyvvy.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163rlohbita.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163lsgbgcjp.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163qwidyajb.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163nhxlslsq.html

a?.b?.c
来源：http://www.xuanzx.com/163twaanhst.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163wjuszueo.html

a ?? b
来源：http://www.xuanzx.com/163lvbuyfeu.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163pjbtvldp.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163edqsqmic.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163cqwfgqnc.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163xihsflmp.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163joukxufh.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163slduepqu.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163rlbmukde.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163zlbetcid.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163xuelokoi.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163jrwcoytz.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163wvcmysed.html

structuredClone(obj)
来源：http://www.xuanzx.com/163vhjiixqr.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163rfpaliir.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163qkwxgwmn.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163cihnnddm.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163plxtokjv.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163pjxllvqk.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163qkxcmbug.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163prjbfsiq.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163pxvnqdqs.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163yywsnpix.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xgocksje.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163fehlipzf.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163eiudxopi.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163fnvnpaxm.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163bnlrcorm.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163vsgpcmem.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163wgegqchx.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163vdinhmoq.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163wodzpynw.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163yqyoayal.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163bqpasysd.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163akltpozi.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163ghpylkug.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163dawqecmv.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163xoemykgl.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163iptksbiu.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163yuruqeqw.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163xycsealq.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163pcktzuus.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163qwxisoah.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163xfwvwapl.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163mlithyxr.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163qvgvkjrs.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163qktraogc.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163dmuhcqst.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163sextqlfu.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163cfkxknbp.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163rjlfqtri.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163lgjwqrki.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163eqoeewsz.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163fqjjfdpv.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163cadjbksu.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tjirlqba.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163rkvjljib.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163vglwvnvg.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163dxxjrzgh.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163qtyljwui.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163tsiyqelg.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163tmxpjzmu.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163jwedkufy.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163cydrlrxb.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163ekyanabs.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163tpegcztm.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163zxrhtvqs.html

npx vite build
来源：http://www.aibaodan.cn/163cymhxbnv.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163hlnzjnev.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163uansiiyh.html

================================================================================
来源：http://www.xuanzx.com/163jfljiehx.html

统计汇总
来源：http://www.sxryk.cn/163ozryzzqo.html

================================================================================
来源：http://www.xuanzx.com/163oammcciu.html

按语言统计（条）：
来源：http://www.xuanzx.com/163setmmxqr.html

Python ......... 252
来源：http://www.sxryk.cn/163krhegtkq.html

PHP ............ 252
来源：http://www.xuanzx.com/163lgcfjbdd.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163tjohlsti.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163qlkzakym.html

Java ........... 212
来源：http://www.xuanzx.com/163jdaxclcc.html

Go ............. 212
来源：http://www.xuanzx.com/163lezrpxue.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163yljwjxkh.html

C# ............. 212
来源：http://www.sxryk.cn/163umohreqq.html

C .............. 30
来源：http://www.aibaodan.cn/163vsfjoarc.html

C++ ............ 30
来源：http://www.sxryk.cn/163hyajadgw.html

SQL ............ 90
来源：http://www.xuanzx.com/163dwrospzh.html

Bash ........... 80
来源：http://www.aibaodan.cn/163priiycns.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163zcwhbxjg.html

Swift .......... 15
来源：http://www.xuanzx.com/163ioxfqmti.html

Lua ............ 10
来源：http://www.aibaodan.cn/163zvkwjcho.html

Perl ........... 10
来源：http://www.xuanzx.com/163zjpnquws.html

Scala .......... 10
来源：http://www.sxryk.cn/163kftmumhf.html

------------------------------------
来源：http://www.aibaodan.cn/163iqlebazu.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163josolhww.html

按章节统计：
来源：http://www.sxryk.cn/163crjpbojo.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ogkagepk.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163qgsedowr.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163mjseairy.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163wamkhaxc.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163pywbxgmc.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163gdwdckmh.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163sauufskn.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163koitwxdw.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163uapqwxqs.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163lfdmfauj.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ewifpirh.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rxeafgio.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163utbyyzjz.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163vnlwqygd.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163wqnmjdon.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vkysqknz.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163wnhxqvhc.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163rhapqaif.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163jyqxzicj.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163ercabkuk.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163xxyqlzka.html

------------------------------------
来源：http://www.aibaodan.cn/163uskuurdd.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163eivewtyu.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163onvserub.html

使用提醒
来源：http://www.aibaodan.cn/163zntlsxba.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163gxsfhwno.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163vhhmlpbb.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163djrxoegj.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163kyjcossr.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163flrmwtcn.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163ehgetosa.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163mnnvnkvm.html

================================================================================
来源：http://www.xuanzx.com/163rdacjzpz.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163vwgwzkuf.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163qkcvwuyh.html

================================================================================
来源：http://www.xuanzx.com/163kbxozsjb.html

【收录内容】
来源：http://www.sxryk.cn/163ouyozauh.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163rmmyzoph.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163ynqdxobe.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163lpwwiwmy.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163uvfknasr.html

【使用说明】
来源：http://www.sxryk.cn/163cxzofcxi.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163mpcauaan.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163yayvnnhw.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163unqezxpn.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163xpjmwlgu.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163xnbctphp.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163rexzmxtt.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163kqcbpuyx.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163sphlmgwi.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163ivlzjgnq.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163babfcutv.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163vwzijgcr.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163spgcyiok.html

【文件统计】
来源：http://www.aibaodan.cn/163phbymbeo.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163jlpblokw.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163vircpwtj.html

目  录
来源：http://www.sxryk.cn/163mdsrawfx.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163kokpkxvs.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163lafaejgk.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163eqtnykuf.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163wdbaagkf.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163rjmsfczf.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163efqrgyjz.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163vrhsajji.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163jdqznprn.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163ttmqdjyv.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163jhtlcatq.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163kuxntekk.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zvspxdev.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ujxvnfte.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zyxdunvy.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163jpltolka.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163afxuriwi.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163kegpzuop.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163cdxsfldv.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163qhdbfmuf.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163ltsiifab.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163bfdujbio.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163luauooxo.html

================================================================================
来源：http://www.aibaodan.cn/163tjwywkzl.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163elutuseq.html

================================================================================
来源：http://www.xuanzx.com/163dfcgmtof.html

[A01] Hello World
来源：http://www.xuanzx.com/163akvwbcks.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163ltadgomm.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163grbtwfir.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163atceprqt.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163zoudowpk.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163vcloejxr.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163jxafkdsi.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163qsqceglw.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163askanfox.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163txqpylpz.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163khnzlhhu.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163wbmrqhkc.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163fabhmlke.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163nkyauguv.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163slzmnpft.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163xuxnfifo.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163qoeoxlst.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163innqnakq.html

[A03] 常量定义
来源：http://www.sxryk.cn/163erjwuqpc.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163ytztmcdt.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163ymmohfdj.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163pufoguhr.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163hosjbszs.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163tkujnsuv.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163woaqvoju.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163bnrepfir.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163fjyijrcb.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163nqvqaajh.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163niblabxj.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163qfjjxotw.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163nvmlpdge.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163ugvtglnk.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163whuxmzmk.html


<!-- 参考信息 -->