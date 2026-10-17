外链999!wailian999！

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163jadcvqmw.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163vlynnmqm.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163scxatjlv.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163jqopqhnh.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163umabbuln.html

namespace App\Http;
来源：http://www.xuanzx.com/163xhpoqzcc.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163uwqjfbaf.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163jzbfgyfu.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163dgvvluar.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163bhzamrqb.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163erymgvnw.html

?string $name = null
来源：http://www.sxryk.cn/163jvghdscj.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163zvwnztxl.html

int|string $id
来源：http://www.sxryk.cn/163kzpatmwn.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163iiygdyms.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163xbdsjozv.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163fbaddbpj.html

public readonly string $name
来源：http://www.sxryk.cn/163lexggqjd.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163zdpavmkf.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163jmodohke.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163kkzobzfo.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163aapzokai.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163hblqrkvg.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163astwetgr.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163rcawdypm.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163cnegrxxo.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163hbgbtbux.html

$obj?->method()
来源：http://www.aibaodan.cn/163hznjtgqk.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163xspxcjnz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163dduznvct.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163siqjuisc.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163hkvrixne.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163onjwkzvq.html

"值: {$a}"
来源：http://www.xuanzx.com/163dgowbxrt.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163gnesqwhr.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163bqkunhop.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163nuxovckf.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mrlgizbj.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163dknhuasl.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163anhzwlfa.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163hnndqsyd.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ninhdsqj.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163xvaecemn.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163pyulbhhw.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163eoamxlpi.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163tihdthwi.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163whngifio.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163rovuczbj.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163yahytsdz.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163khxajdpl.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163ftwtvrda.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163ycbdcoef.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163szcwitqq.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163ibndoloc.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163ixctxydm.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163grozyqub.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163hpulgygb.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163ucmtwaag.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163lfpsflqp.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163vpkdqkhb.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163gfufwann.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163zpzmsqra.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163ypydgnpb.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163luymhorm.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163qnapdnfy.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163bkmjsvyi.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163hdcnrgcz.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163xvqtzhrq.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163wuefxcjw.html

composer require psr/container
来源：http://www.aibaodan.cn/163ryvnecda.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163owmypxpb.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163qmuzkgmq.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163xonxpgmu.html

composer require twig/twig
来源：http://www.sxryk.cn/163khcaqess.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163iqgoktgg.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163pmndrrzs.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163ugvaikev.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163izdnerat.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163iwifqwgr.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163bjrkxuaa.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163lcgnbksi.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163scgrrgjb.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163iuqepglz.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163sdjbxodx.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163bsfsdpvf.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163rvadovrl.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163xetgquqd.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163rryrgqdu.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163sntoyugn.html

a?.b?.c
来源：http://www.sxryk.cn/163ddnzfjmw.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163vbhrueaz.html

a ?? b
来源：http://www.xuanzx.com/163dbkaerrr.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163zfzboyzl.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163rnoddhwa.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163rddwwddi.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163bldivjhb.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163aykyvbor.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163tgezmhyw.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163etxubcpr.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hqcmxoew.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163nqpzqqrb.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163bkmfephm.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163ubuhwgij.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163wsclaxve.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163iljqcwum.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163vmqgyunb.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163hivxeopp.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163jszccwrb.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163peydrcab.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163jdlkrhfu.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ancbxfyp.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163jxqhgobm.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163ihbbfvmj.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163jgenkugd.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163lwtcbxpp.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163hamjcqpg.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163vsyqbuti.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163edeqatts.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163esmktelf.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163teydcxqb.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163wnpjcaqg.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163swvtyanx.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163zwkzuveu.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163qpsetlgx.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163obhlfxux.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163jdqoeqwt.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163iazitgce.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163brstsskn.html

[U105] JS：节流
来源：http://www.sxryk.cn/163vqyiqgow.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163msyfkwly.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163adorqvay.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163xdgzmtuy.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163cixpxbbo.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163iqajaqih.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163ssbccmdb.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163eeumvbpc.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163mkirpgoa.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163fivhgnew.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163irsrqnjc.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163ddyszbbm.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163uksfggld.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163advxsvyj.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163evabvkxj.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163typggqjv.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163zixrcamd.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xycaeodm.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163oedfdyzo.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163vjbzvhgc.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163ttabgtxt.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163croqatng.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163tqymnpkx.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163rupxvqpe.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163fmioqgqg.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163bhcsotxu.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163ssafqtjv.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163zkbzkatd.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163clgxqqwk.html

npx vite build
来源：http://www.xuanzx.com/163ultlookx.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163rhgsbjvk.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163vwugrhym.html

================================================================================
来源：http://www.sxryk.cn/163efrpgtqs.html

统计汇总
来源：http://www.sxryk.cn/163mzfxegxm.html

================================================================================
来源：http://www.xuanzx.com/163axrfyoak.html

按语言统计（条）：
来源：http://www.xuanzx.com/163iosckueu.html

Python ......... 252
来源：http://www.aibaodan.cn/163swatrywn.html

PHP ............ 252
来源：http://www.xuanzx.com/163qwwmefmk.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163zsynnuae.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163qpnsbiwn.html

Java ........... 212
来源：http://www.aibaodan.cn/163zlpmicru.html

Go ............. 212
来源：http://www.aibaodan.cn/163kzuknfpm.html

Ruby ........... 212
来源：http://www.xuanzx.com/163cepcpuiq.html

C# ............. 212
来源：http://www.aibaodan.cn/163xbczksqy.html

C .............. 30
来源：http://www.aibaodan.cn/163isorqwfc.html

C++ ............ 30
来源：http://www.xuanzx.com/163nrlnkirk.html

SQL ............ 90
来源：http://www.xuanzx.com/163memvrgny.html

Bash ........... 80
来源：http://www.aibaodan.cn/163rlyikxek.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163rvwmnqob.html

Swift .......... 15
来源：http://www.xuanzx.com/163efcajgob.html

Lua ............ 10
来源：http://www.aibaodan.cn/163befgqzsm.html

Perl ........... 10
来源：http://www.sxryk.cn/163vfjctpdv.html

Scala .......... 10
来源：http://www.aibaodan.cn/163cfuasyye.html

------------------------------------
来源：http://www.aibaodan.cn/163dbenfbke.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163okejwqyc.html

按章节统计：
来源：http://www.xuanzx.com/163hyhvazuc.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163qitnenna.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163euwpammr.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163fgnbhlmz.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ckyiisbk.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163tnypqndr.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163xnlqnirq.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163hnpfmjqv.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ecqdokkj.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163xlzluunk.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163mckybisb.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jbgerzxn.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163kflerpor.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163hnxbrslc.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163nlsyqzvx.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163vuqijhhx.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ieajsvxd.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163iwdixsvs.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163ffzwdguk.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163justgnvc.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163bdykhezd.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163dxgtyvld.html

------------------------------------
来源：http://www.aibaodan.cn/163msriagol.html

合计                                  2106 条
来源：http://www.xuanzx.com/163alrbdjko.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163suqgkslf.html

使用提醒
来源：http://www.aibaodan.cn/163krefssgx.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163wnrvxkrq.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163wykfozhb.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163qbsfbbcq.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163bbdshfma.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163kumgpcbk.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163rllvkojn.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163ljyhegym.html

================================================================================
来源：http://www.sxryk.cn/163vntqlhjg.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163hselkeah.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163lnjhqeuq.html

================================================================================
来源：http://www.xuanzx.com/163hltmsfkw.html

【收录内容】
来源：http://www.aibaodan.cn/163ywiavmmx.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163aqtvappb.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163uqweawul.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163afvrzmzo.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163vzpuweuy.html

【使用说明】
来源：http://www.sxryk.cn/163xqqarnaq.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163ekxtsevs.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163uahbhhou.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163lmzidhzd.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163znsylrfp.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163yvjdafuh.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163rxntypkr.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163zllqockp.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163aecckxuu.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163djpgdxcr.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163ctuagucu.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163hxzvfapf.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163ryiooowr.html

【文件统计】
来源：http://www.xuanzx.com/163edvtslat.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163fqdhdfzg.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163mlmgvzjo.html

目  录
来源：http://www.sxryk.cn/163cksbvzxi.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163qgohiowq.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163dbemoixa.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163lclnnsro.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163nieakxod.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163wzfwgufc.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163tmotlaji.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163rqdfobzk.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163pttaihid.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163bxgzrqmx.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163vlzuxutg.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163phmeqkbz.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163tllrpfgo.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ibttzflr.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163decmpily.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163prhnkpsv.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163spufnlhw.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163bdpnhgol.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163yzhfzhoh.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163yaibpobp.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163mcgsigao.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163wcwldcrh.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163gwviphpi.html

================================================================================
来源：http://www.aibaodan.cn/163ppsqnzda.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163grlgwlzk.html

================================================================================
来源：http://www.xuanzx.com/163vdplqtoa.html

[A01] Hello World
来源：http://www.sxryk.cn/163zxhfeavt.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163fickjdek.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163taehgbxz.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163ecrsxtbt.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163rhxncwtc.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163koyzzsqi.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163torwdktd.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163vyjnabmc.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163uynzpldk.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163dtjggaww.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163rxxzsayf.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163vlkuxkxq.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163agmfncvp.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163fiveyqcx.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163szwyvnsj.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163urxehdjg.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163agfcimbx.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163wtmihsko.html

[A03] 常量定义
来源：http://www.xuanzx.com/163syetjiki.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163knmigbcd.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163zdqjwqxe.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163sahnngya.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163okuqcoob.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163rvknjznc.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163ndqwonqn.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163wayjwivz.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163gybondhf.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163loessozk.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163uvhjeypu.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163bdujfkys.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163fpktxrth.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163elypvzke.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163kwvtvhkk.html


<!-- 参考信息 -->