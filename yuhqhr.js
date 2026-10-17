外链999!wailian999！

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163yeqysjdb.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163pccvevwq.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163yhzpzwfy.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163nifdbgss.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163qutkcabf.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163dppqekeg.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163yzcisght.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163cyfnbljg.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163rpirnhjq.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163mcmtsocn.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163vaifdnks.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163durfmlmu.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163tbcdgjpi.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163cvdjuqed.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163fiuqzzlq.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163tezweuvi.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163xnexzisv.html

namespace App\Http;
来源：http://www.xuanzx.com/163zifqnpwl.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163vsprgtpk.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163alxmfczn.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163eboyapie.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163fsquifwe.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163uxoyldny.html

?string $name = null
来源：http://www.aibaodan.cn/163cgbgtlcs.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163ivojuiqp.html

int|string $id
来源：http://www.sxryk.cn/163rtuakegx.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163weldjtuj.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163extlnsso.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163lhdtwpkb.html

public readonly string $name
来源：http://www.aibaodan.cn/163xpwwxqdb.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163gzdzrjnb.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163eqabzfkp.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163hjtrbsyw.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163swqbsrlo.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163boaphenb.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163ufomoilr.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163zbvmyxup.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163jfziqrmh.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163cepylblo.html

$obj?->method()
来源：http://www.xuanzx.com/163rdtomgvy.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163gxplrsnx.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163mfcbgurj.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163zywmiosk.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163veomrvxn.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163ibyrrnij.html

"值: {$a}"
来源：http://www.aibaodan.cn/163iwwwisla.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163zufhybce.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163zdvlawuz.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163qqeyjdos.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163xvdvvyag.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163zcjroymd.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163bqsforpc.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163osoktmwo.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163dvxsgutc.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163zsrgnskv.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163hwaeazve.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163gnzsjfnm.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163sbtjkmlv.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163sjbrtoqd.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163pmlvolrx.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163tdklkjhy.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163wutonbbc.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163vonvcbdo.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163kjviiign.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163wvheruhg.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163mpnkabux.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163anhvzjfl.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163fzdszzow.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163acetojto.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163cuvxyqnm.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163yvypiqpb.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163dmbqlotg.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163fbbqkizq.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163ibndzobs.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163ukjmapgr.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ovhgqnzf.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163cngspdne.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163arsghzbe.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163owosvynv.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163ewmkojzn.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163lrpfyzgs.html

composer require psr/container
来源：http://www.aibaodan.cn/163jmrqbgps.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163aprgowpk.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163bufmshsx.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163wytpeuel.html

composer require twig/twig
来源：http://www.xuanzx.com/163sfqlvuji.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163oqiahbpw.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163nwefianx.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163lrfnozce.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163edpipxfi.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163kkffusvn.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163hpygwpqz.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163ynzzrlow.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163iinazhes.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163rawwixrl.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163bnzuqyqi.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163konlvvfd.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163elfiijwi.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163ndndoehx.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163rpsjvqrb.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163sjguzilk.html

a?.b?.c
来源：http://www.xuanzx.com/163lppuomfa.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163vgthiein.html

a ?? b
来源：http://www.xuanzx.com/163yocnhdph.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163xjijylcm.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163ntfzhqkn.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163zueweowg.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163czstzrwv.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163zyhbcqvw.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163ildwtjtv.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163mvhptizm.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163yhdmembf.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163oqmfykon.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163cxtzkmve.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163bsdmrjlk.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163vazbxkzw.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163tkkejjzp.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163blvduetz.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163zdaadkvy.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163gxnqkqoe.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163nukxvnhl.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163lefrtusc.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163hafaiiul.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163duznivem.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163wnroiifm.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ptuxptev.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163opusowlv.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163vqntcizx.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163sejeoryc.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163gatxlrlc.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163bhsmaipv.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163zntxcypn.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163wczibeka.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163sxfhttec.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163zhwcwpfz.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163vtkvlxmt.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163bompamxk.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163fqtycfeb.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163azlcwkrl.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163admfuxuh.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163srfvgytc.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163zownpmxy.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163ataaaykc.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163kbwxqruh.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163sgliunrj.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163topgiezb.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163cngddswd.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163yzzwyrwj.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163lnqdnhpx.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163dzphymxc.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163qsbnznfm.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163fcsqqjur.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163tdvuhafp.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163wsejxrfa.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163vldtuwih.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163lstsnxqd.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163dcgdsxdc.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wmglvrrq.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163xidrfzpk.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163eurescig.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163tkxqfuuw.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163eeyrwmgh.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163smrnmbrx.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163lvoukkux.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163awnmfpyf.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163hirgvemv.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163irtrpvfx.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163ilxhisxa.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163qtxxotao.html

npx vite build
来源：http://www.sxryk.cn/163miqodfvh.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163idufsoun.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163tdzyhutf.html

================================================================================
来源：http://www.sxryk.cn/163gvhlswys.html

统计汇总
来源：http://www.sxryk.cn/163gyaojhby.html

================================================================================
来源：http://www.aibaodan.cn/163bzrmoejk.html

按语言统计（条）：
来源：http://www.xuanzx.com/163xzgkxsjf.html

Python ......... 252
来源：http://www.aibaodan.cn/163nznhsavx.html

PHP ............ 252
来源：http://www.xuanzx.com/163pqeowmup.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163cbuzegyq.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163lpkzccpx.html

Java ........... 212
来源：http://www.sxryk.cn/163rhrvrwtn.html

Go ............. 212
来源：http://www.aibaodan.cn/163gwujhacg.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163xgvgysgu.html

C# ............. 212
来源：http://www.xuanzx.com/163imgfaccu.html

C .............. 30
来源：http://www.xuanzx.com/163swvghelj.html

C++ ............ 30
来源：http://www.aibaodan.cn/163hhnmqywq.html

SQL ............ 90
来源：http://www.xuanzx.com/163ywskiycp.html

Bash ........... 80
来源：http://www.aibaodan.cn/163pzdnmvpx.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163hqigpnjj.html

Swift .......... 15
来源：http://www.aibaodan.cn/163nhuizixd.html

Lua ............ 10
来源：http://www.sxryk.cn/163zagctwor.html

Perl ........... 10
来源：http://www.xuanzx.com/163fopohiee.html

Scala .......... 10
来源：http://www.aibaodan.cn/163pwcfsavl.html

------------------------------------
来源：http://www.aibaodan.cn/163hgerkpnf.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163ccxssloo.html

按章节统计：
来源：http://www.xuanzx.com/163iupuekci.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163pnbqqxsy.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163wbdftuwb.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163gvxydoje.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163utxuevwf.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163dijifxlh.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ajjajosj.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163rxcwtxwy.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ujyhisne.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163bzddqmlk.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163edewnrkw.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qryukloe.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163kjnnbacl.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163pbdzplvl.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163tpgiycht.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163bgbbetmx.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ejnvkimr.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163emxfkwut.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163dbcxkdpd.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163ofidzvky.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163gslotqcz.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163avwphgyv.html

------------------------------------
来源：http://www.xuanzx.com/163pmxmmiun.html

合计                                  2106 条
来源：http://www.sxryk.cn/163zemrtjgr.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163mgphfqrj.html

使用提醒
来源：http://www.aibaodan.cn/163bxnnmvao.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163kctwmcdr.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163addjlaij.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163vgnlinmg.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163bjjyzlno.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163hbddfetp.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163igtcmnmr.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163dpsitmbh.html

================================================================================
来源：http://www.aibaodan.cn/163vzaockxs.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163oilcrdzl.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163orimkvwm.html

================================================================================
来源：http://www.xuanzx.com/163aaidmqta.html

【收录内容】
来源：http://www.aibaodan.cn/163kcuxsigm.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163fchcbtwm.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163ksjjmldz.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163izivydes.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163yqkivcwb.html

【使用说明】
来源：http://www.xuanzx.com/163tkesprnn.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163yntdefio.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163mztxkqty.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163ackohfav.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163xqatvxzx.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163jbseqaqd.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163khpekjcc.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163zqghjssf.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163loamfubm.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163cfnkevno.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163enasieiw.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163rgahankg.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163nbohdspb.html

【文件统计】
来源：http://www.xuanzx.com/163cdexodvn.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163wyjaterp.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163moauhilz.html

目  录
来源：http://www.sxryk.cn/163gncgolkl.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163oaowqvhc.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163hnmiclru.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163phmvwcas.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163mbinowhm.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163rmcyprph.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163zsrsnjkc.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163djvavccd.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163pyjgcrqc.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163bcnkyirw.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163dolvzwzp.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163pambgmwk.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163snqhfduc.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163xjajazni.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163qbbrwjkm.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163nxcsgqto.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163jmeinlmn.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163meuyjhvb.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163bbpwtiao.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163yfasxeic.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163jyxnmraj.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163lbbpuukx.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163jutwssvz.html

================================================================================
来源：http://www.sxryk.cn/163uflsmdnx.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163jnljttaz.html

================================================================================
来源：http://www.xuanzx.com/163fhgfmahu.html

[A01] Hello World
来源：http://www.sxryk.cn/163mtunttqw.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163aawdnlez.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163ruylkush.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163oecnhamc.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163vpxtjqlc.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163bgwlxbbv.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163dnlnruct.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163tbpskfud.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163gawfzxxl.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163yjtbgukz.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163mfzzdwku.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163kfupylwc.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163yutzrelg.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163lqrrmghd.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163cniygzxf.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163sdgsjgbi.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163oziominr.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163dcvfynxk.html

[A03] 常量定义
来源：http://www.xuanzx.com/163bqxjobxu.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163ofvgyqsb.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163mdhcmlzg.html


<!-- 参考信息 -->