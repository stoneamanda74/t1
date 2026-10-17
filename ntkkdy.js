外链999!wailian999！

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163umczrzko.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163nbbdbyyf.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163wunzicfu.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163drmluubp.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163jpejruai.html

namespace App\Http;
来源：http://www.xuanzx.com/163vqsnlohp.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163pzgfdnoz.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163drzixxef.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163mrxflrbq.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163irxmhfga.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163usnnopwi.html

?string $name = null
来源：http://www.sxryk.cn/163tsiafewi.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163yhdaoval.html

int|string $id
来源：http://www.sxryk.cn/163wwgtjhga.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163mekyncrh.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163fpzyephd.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163gnipsnjv.html

public readonly string $name
来源：http://www.sxryk.cn/163xsoxvfin.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163pyhqbjby.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163ikppucrt.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163pbajjeoc.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163thcwjksv.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163vqtspsjq.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163bfbtvpme.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163reeineqt.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163xiesgrhd.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163zkqoydrw.html

$obj?->method()
来源：http://www.xuanzx.com/163pvadurhh.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163qdjajnto.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163hkmftsbn.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163vjwwsdpk.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163hqxqurmx.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163maqyqwoc.html

"值: {$a}"
来源：http://www.xuanzx.com/163gwtqdmdw.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163bfnfpaqp.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163qvkinmmm.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163oucfgkgw.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163usqprmli.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163olgxbthe.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163kwtkwvil.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163amaktrcj.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163jdkjcrhz.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163rnseuyrg.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163ockrwugg.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163nfugzkkv.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163vtzxwayl.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163mptrdenf.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163lvbuysbh.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163pmnygfvz.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163fttdhfgi.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163rysttjdb.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163wqkcyxgt.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163zpkjmdiu.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163nzjgffeb.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163ktcevppr.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163jsrnlfsk.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163itrgqnzj.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163vtyzaito.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163cthceova.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163zkjycnia.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163hlnjlzrb.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163ibyilpyb.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163voezdemn.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163aonlhrso.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163pxrrdctp.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163hkmqueii.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163stcjhypz.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163pvecxjbu.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163dpyxdfjq.html

composer require psr/container
来源：http://www.aibaodan.cn/163popagwez.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163wofczfhz.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163nfclxejt.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163xgnuzrbj.html

composer require twig/twig
来源：http://www.sxryk.cn/163jkhozdew.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163zvmiwtfr.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163ywjvmpin.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163cewcgeim.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163orxmcdik.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163aakvsnaa.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163mmzkuhhp.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163iepoxcsi.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163awelbvme.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163tmevoals.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163bboafkmk.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163dkhxrexw.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163jjdytyak.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163njqjraff.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163kvojpsqr.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163riodvhcx.html

a?.b?.c
来源：http://www.xuanzx.com/163lhgybysr.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163lfouphde.html

a ?? b
来源：http://www.aibaodan.cn/163cyxgfakv.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163fcvbxlxx.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163gloazagx.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163cxlkuxbv.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163iprhohsu.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163ldlavfpt.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163necdropp.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163vpqawphm.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wusnwumd.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163dybawrsy.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163clfyqacr.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163igwhrett.html

structuredClone(obj)
来源：http://www.sxryk.cn/163cnovjotk.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163uhefiuuc.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163yybvmdlb.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163oywcxpgv.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163bmigxlna.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163ksufjezs.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163pepqitxb.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163trlawtzd.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163rozagcvd.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163xlajzazt.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ymohkeks.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163scfwhgxo.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163nqdxsysy.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163gsqerpzj.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163rulrwzda.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163jkojniqv.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163trmhhicu.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163xqearsyf.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163kkktwwnc.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163dwdtevnx.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163ciovgbac.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163yjpikyfg.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163beioyqfq.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163pfpdazns.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163yecadciu.html

[U105] JS：节流
来源：http://www.xuanzx.com/163brnrnhez.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163rdxsvewq.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163vlwypghk.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163enjcevro.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163wqjxbfru.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163ifgjxppl.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163ghoyhzry.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163zpwrerjc.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163wflnfjxy.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163rsfiqzyg.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163mcudwmya.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163ykmgccpc.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163nxnohhwk.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163mvitulli.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163chdpcptt.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163yzrilrig.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163oqzrrycm.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zgtxqhyq.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163jktocbps.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163plrnvszn.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163iewioyvd.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163srykyhru.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163kymvzzgb.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163paogdiwl.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163zgugztcd.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163aezaeczz.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163cngqiuda.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163zjfbyzwy.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163uwcgppzi.html

npx vite build
来源：http://www.xuanzx.com/163pzgwrafp.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163ymsgflvd.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163adcznpom.html

================================================================================
来源：http://www.aibaodan.cn/163tnbtxqsn.html

统计汇总
来源：http://www.aibaodan.cn/163osjeamkn.html

================================================================================
来源：http://www.aibaodan.cn/163bhheoarj.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163xzoeksuq.html

Python ......... 252
来源：http://www.xuanzx.com/163cbphjhab.html

PHP ............ 252
来源：http://www.xuanzx.com/163wfbayeyl.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163wtxznncd.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163zecvxrot.html

Java ........... 212
来源：http://www.xuanzx.com/163hjavygpk.html

Go ............. 212
来源：http://www.sxryk.cn/163kcftrpmi.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163jogewgus.html

C# ............. 212
来源：http://www.sxryk.cn/163pxnrzwpw.html

C .............. 30
来源：http://www.xuanzx.com/163qorokzwy.html

C++ ............ 30
来源：http://www.sxryk.cn/163qwxxamtd.html

SQL ............ 90
来源：http://www.sxryk.cn/163obwogspo.html

Bash ........... 80
来源：http://www.sxryk.cn/163zbcsubdw.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163eqzonxgp.html

Swift .......... 15
来源：http://www.aibaodan.cn/163psgbgqsd.html

Lua ............ 10
来源：http://www.aibaodan.cn/163xstggeje.html

Perl ........... 10
来源：http://www.sxryk.cn/163sqgzoscm.html

Scala .......... 10
来源：http://www.xuanzx.com/163mtcfskqp.html

------------------------------------
来源：http://www.sxryk.cn/163srqdkygb.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163cniakfwh.html

按章节统计：
来源：http://www.sxryk.cn/163yjwhvaxt.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163nlpsnczg.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163mpurrdoi.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ahayrfzq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163yrlzisdr.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163kyehiamd.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163zsxgvrse.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163oqmflsiv.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163marvkbll.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163zqnbmfbd.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163wyaljraz.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163yezbqggw.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ecizzrwb.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163kfwtuplu.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163xlnxpxnp.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163gpjfhbqv.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163stsfwczx.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163tbtbupgj.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163vjxzkjql.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163xxavrobp.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163ffasgihz.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163vsqiedvj.html

------------------------------------
来源：http://www.xuanzx.com/163qtugaxeu.html

合计                                  2106 条
来源：http://www.sxryk.cn/163womlqunp.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163dnlfgfsd.html

使用提醒
来源：http://www.xuanzx.com/163tzmraodl.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163eypifqfl.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163ysrohrgd.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163fknoikot.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163ibmihfmx.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163eszyzzju.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163gqbvfpgu.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163hkrfhjcf.html

================================================================================
来源：http://www.aibaodan.cn/163rlckfigj.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163stymqxvm.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163kjjmjadf.html

================================================================================
来源：http://www.aibaodan.cn/163xnjymphe.html

【收录内容】
来源：http://www.xuanzx.com/163qucjlyum.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163crxufoeb.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163npozxpxo.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163vldxiwuz.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163wremxluq.html

【使用说明】
来源：http://www.xuanzx.com/163sjmvknqi.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163oztinxyg.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163ozvadbve.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163qlalorei.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163gxfgtqtv.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163qubrkqug.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163hxahtoor.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163qcjnceop.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163ixfkudop.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163cjramevh.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163jgpnscsz.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163tokpoknq.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163knaawefx.html

【文件统计】
来源：http://www.sxryk.cn/163dqitjbzo.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163fvuhgbjv.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163akljeywo.html

目  录
来源：http://www.xuanzx.com/163uuobzfre.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163vkvfvolj.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ycmdamxa.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163yknjslfu.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163mwfwzonf.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163ehsppccr.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163dyvygcpi.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163nlyoqjbu.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163vfopjwsz.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163kpvlyiug.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163seddmnzs.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ehthqyzh.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163mxblesch.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163coeztnrm.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163nowexnyd.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163kyozehwa.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163qjripaie.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163pvqdugha.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163rtodpyyv.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163lnzehxyw.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163gwtdwfae.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163bijtlzoj.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163obklwfsz.html

================================================================================
来源：http://www.sxryk.cn/163ppmwtgfi.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163crspvtmo.html

================================================================================
来源：http://www.xuanzx.com/163xeiexxxu.html

[A01] Hello World
来源：http://www.sxryk.cn/163nbvvwfcs.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163oettdyvo.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163jlcrhqdt.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163mhbqrhca.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163agioujak.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163varrpoln.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163gyyqgaxj.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163obwdhjhg.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163ttkhlofe.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163uniunwsr.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163gmkpyzod.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163xdemlojm.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163dumdjrxd.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163dutenakr.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163fgngbenv.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163cezcsarl.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163ntuphobu.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163akqtlnfc.html

[A03] 常量定义
来源：http://www.sxryk.cn/163klryiesk.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163tfgjcmrd.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163myklzgdv.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163yhfysabd.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163agpvajwp.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163iczuwwta.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163gnrouweo.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163rznezxgz.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163cieytimq.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163zrnnouzf.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163gmsjykfn.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163aulfiwbi.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163zwbsymxh.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163pbtmafei.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163mlbdxkpm.html


<!-- 参考信息 -->