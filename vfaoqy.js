外链999!wailian999！

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163ulnxhhis.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163yfbsjeye.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163vjfdugmj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163tptomjvs.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163veckdutr.html

namespace App\Http;
来源：http://www.aibaodan.cn/163sgqbjetd.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163ldwugleu.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163baupsrit.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163ebtddvdi.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163aqahmuxa.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163mgaeadun.html

?string $name = null
来源：http://www.xuanzx.com/163wytuntxq.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163edjzeyyj.html

int|string $id
来源：http://www.xuanzx.com/163mdjfistv.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163cfqynbra.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163cqjtxbda.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163ymltrjyl.html

public readonly string $name
来源：http://www.xuanzx.com/163dbhovjys.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163axrdyfps.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163oaayuqlo.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163bllhqdkv.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163xoawpzzj.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163gopdrcpj.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163atrzwfzz.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163vaarnwlg.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163bfwokckj.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163rmxscggb.html

$obj?->method()
来源：http://www.sxryk.cn/163sivfwiuo.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163tgvgtneu.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163symfbezn.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163tpnbkfzh.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163crtagtme.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163gsqgfakd.html

"值: {$a}"
来源：http://www.aibaodan.cn/163oagpwtkw.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163ttmzdaxg.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163qfynyugk.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163ekfjyfek.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163nyfyskmn.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163dfxboakw.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163nhvymwiw.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163eukleybv.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163wrcbdinc.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163xbvbxnnj.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163qytqdnlk.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163cifnmmjl.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163vlfoovxb.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163mzdbtuys.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163fnenvmsx.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163zcidocej.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163xgipfdvw.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163jeyeqoku.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163ruorllsr.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163jvckbxcf.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163ddkknyev.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163ajejbnhs.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163vzgxicli.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163sauwqngh.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163hpfvwysy.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163gvzovcoo.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163unkvsifa.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163cmkrqteg.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163xjcpijuz.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163xdoonexm.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ioshwbqd.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163quzrxzgf.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163epwyosuo.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163qkezytoi.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163goggshog.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163obkvtgij.html

composer require psr/container
来源：http://www.sxryk.cn/163rkhsqsqw.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163ofzhlryz.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163crqqvzzs.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163gklsifbn.html

composer require twig/twig
来源：http://www.aibaodan.cn/163xkuwpohe.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163eufnuuuo.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163kwxwfvey.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163nrtufwrp.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163xzrllpze.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163ptttljjb.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163mrqrqmew.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163evhnjxwg.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163wmxxmiix.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163govabgym.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163tkhpuysx.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163nblipbzy.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163pfqxatrz.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163mnhsaxxh.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163bzkizrya.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163ednttpgw.html

a?.b?.c
来源：http://www.aibaodan.cn/163rokfydio.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163eoiqsxau.html

a ?? b
来源：http://www.aibaodan.cn/163hxzoskjn.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163mhuvuvbg.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163fnmtquml.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163znajsouq.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163ujymonfo.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163hkaxpgeu.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163isdxrowx.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163tflsmlth.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163bxaomiyg.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163ufwoizle.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163jjnfkajb.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163avgpbjyj.html

structuredClone(obj)
来源：http://www.xuanzx.com/163tcvzpoim.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163fbdawgya.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163fxagawiu.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163waydvohn.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163szcwgfwk.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163eptevpsr.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163lniswcnv.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163btihaixr.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163jpjozmlk.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163qknyangm.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163wnwcttgk.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163jquxcsrm.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163lnugcphe.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163djdjzwhx.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163voztxrdd.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163hcuvolcr.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163xwwwvtfy.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163rfdjexft.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163thwyafga.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163aunjklhs.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163vlhwcrjz.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163dtlgylpw.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163qhkpjqir.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163vhxzlqbu.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163bjfzpeof.html

[U105] JS：节流
来源：http://www.sxryk.cn/163zxoslmdm.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163ivazkqwm.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163ijabuczg.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163foqpswwl.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163dstlwpsq.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163snpvbmlz.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163wetfhqae.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163yhezbgxq.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163xacfdjqc.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163imgiieiv.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163fxxrixrg.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163umrcdglo.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163imhrfquj.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163masgcfkp.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163kgkedoxc.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163hynsbvua.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163fjhcuhuw.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163cxamwnrk.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163wnjgogws.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163unnoyqpr.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163vyhpatvh.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163eqdymzhk.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163ruvnpeeu.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163gqqxgzah.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163gcryenxf.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163kodlvwcn.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163qipnlfas.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163kqwykxox.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163popxvbdq.html

npx vite build
来源：http://www.xuanzx.com/163gpccndwd.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163hhgudhvl.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163gcrodmuw.html

================================================================================
来源：http://www.aibaodan.cn/163vlxxpfsn.html

统计汇总
来源：http://www.xuanzx.com/163iznvgiqd.html

================================================================================
来源：http://www.xuanzx.com/163hweprgdi.html

按语言统计（条）：
来源：http://www.sxryk.cn/163lnkzfugx.html

Python ......... 252
来源：http://www.aibaodan.cn/163sxqqscai.html

PHP ............ 252
来源：http://www.xuanzx.com/163qecnetox.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163qxjlxmbd.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163ebjsogyw.html

Java ........... 212
来源：http://www.aibaodan.cn/163dynvqwzq.html

Go ............. 212
来源：http://www.xuanzx.com/163nbyhqnli.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163mtyhprxm.html

C# ............. 212
来源：http://www.aibaodan.cn/163peccevuh.html

C .............. 30
来源：http://www.sxryk.cn/163gdsohsyd.html

C++ ............ 30
来源：http://www.sxryk.cn/163ixomrvyb.html

SQL ............ 90
来源：http://www.sxryk.cn/163udosvhjr.html

Bash ........... 80
来源：http://www.xuanzx.com/163jutuvbsq.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163vtypxocb.html

Swift .......... 15
来源：http://www.xuanzx.com/163ksnvbnlp.html

Lua ............ 10
来源：http://www.sxryk.cn/163dblrahqp.html

Perl ........... 10
来源：http://www.sxryk.cn/163cvcsbccs.html

Scala .......... 10
来源：http://www.aibaodan.cn/163upftwkzl.html

------------------------------------
来源：http://www.sxryk.cn/163iergcesr.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163zkitkeog.html

按章节统计：
来源：http://www.sxryk.cn/163snhfbvze.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163xoiztkdg.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163jgqrantd.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163padwfcth.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163tkmhkklc.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163vowzdgul.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163higfohba.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163fcknzasj.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163goqfainz.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163hbrskdeu.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163cwhcgxtm.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cqelkaes.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ywkhbkzp.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163dezmvnof.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163kcbzstau.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163bwmunkvp.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163oaipobea.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163kiazpelt.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163wkahrypg.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163satkdvjr.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163ienkypuu.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163gbtldomk.html

------------------------------------
来源：http://www.aibaodan.cn/163jpkdrqkb.html

合计                                  2106 条
来源：http://www.xuanzx.com/163exvljwlk.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163eefgcnad.html

使用提醒
来源：http://www.aibaodan.cn/163lxzefuyh.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163kgpopezr.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163aixitdlg.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163bukcoyze.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163plreemex.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163pwvlgmbn.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163ifhyhidv.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163xxqvkqfb.html

================================================================================
来源：http://www.xuanzx.com/163cfjkmulz.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163xklbufab.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163argpbsyn.html

================================================================================
来源：http://www.sxryk.cn/163qlvllduh.html

【收录内容】
来源：http://www.aibaodan.cn/163fwzjzawn.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163yblslvix.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163zbtmzups.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163bysjamvt.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163vqyimoyc.html

【使用说明】
来源：http://www.xuanzx.com/163ofoeohbb.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163nllyelpj.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163xpxwobvh.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163suebgsxe.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163euhyfkrp.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163gjxpsmct.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163tjwkqvqe.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163ezyvfzon.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163nsdwkjzt.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163jbhwrbph.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163sbfjgaxu.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163rwqnzsfs.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163jgjptkks.html

【文件统计】
来源：http://www.aibaodan.cn/163gbjjxfuf.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163vejpcnaq.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163yjojpynm.html

目  录
来源：http://www.aibaodan.cn/163guubkhhe.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ehaeywkz.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163wejzcmwj.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163vcnphrcc.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163nbqyccef.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163smsxueit.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163fzucidxb.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163yeetdovs.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163wwyqnthn.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163lxvzcbxw.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163qhorhpvu.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163uspnmtgc.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163xlhswnvy.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163wkriofzu.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ntuguyvl.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163mlpharkq.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163xepuhbdh.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163uhuanzhw.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163yfmmhbrw.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163qzaiigit.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163uafafcsm.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163jxthwrmk.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ddesuzuy.html

================================================================================
来源：http://www.sxryk.cn/163mnawqano.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163vguvjuie.html

================================================================================
来源：http://www.sxryk.cn/163yqmnlxsb.html

[A01] Hello World
来源：http://www.xuanzx.com/163qsyydrel.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163ghcxriqv.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163vwztvdnt.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163cuikctaq.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163mxjuyncg.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163rzatofxw.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163kgnsrzpb.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163sefmspot.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163ynzhszfp.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163ykgnorlj.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163dksogmmi.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163hzbowhij.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163ctoavupc.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163ckmwcmxg.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ummzcggb.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163ewpvbaea.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163hmffixah.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163bgumigpl.html

[A03] 常量定义
来源：http://www.xuanzx.com/163gdzhdtip.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163abnmjyku.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163vdntmtkp.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163angynpza.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163nnfjabqt.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163fwgrvhhp.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163mvkvbewk.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163dnsphizl.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163yixxujsi.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163pbwdhulc.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163ssgkfgts.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163vcxbqkcn.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163xzhmvcds.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163boczslpx.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163dqlxgldh.html


<!-- 参考信息 -->