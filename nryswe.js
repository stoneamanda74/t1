外链999!wailian999！

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163twyhqpew.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163jscoyefa.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163lxkhcycj.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163jqcknrbv.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163orxjmggo.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163kgcxkndw.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163ijyzskrh.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163mhplmzdh.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163foqwpyqz.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163nveraxms.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163qlipflrj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163dgdrohop.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163aqnlfmvt.html

namespace App\Http;
来源：http://www.xuanzx.com/163xkfqihvx.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163zssgcgxa.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163xplvfhfk.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163lwlizsww.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163bcickcig.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163btypncvh.html

?string $name = null
来源：http://www.sxryk.cn/163juisruwx.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163svztgjvl.html

int|string $id
来源：http://www.sxryk.cn/163lsxytmlp.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163rfodfnjz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163hmuhlalq.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163mmrdrsfz.html

public readonly string $name
来源：http://www.xuanzx.com/163nywycaum.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163igopurtd.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163rzvuirgq.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163hbdoueqk.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163avodziag.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163inhdzwiz.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163qxoqobsj.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163llyxnhwq.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163dwpcrzog.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163uufwnmic.html

$obj?->method()
来源：http://www.xuanzx.com/163ckuqvsny.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163arsdmiix.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163rrptcrdh.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163lwqegxrf.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163gsfcdqqi.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163zikcxvhh.html

"值: {$a}"
来源：http://www.xuanzx.com/163kpphkkwi.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163dzxcwjkv.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163klaqbatz.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163eeltaxnp.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ptkyaxao.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163fprkyurm.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163zoebhkik.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163wmhkhhqd.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163gsmdhgch.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163xpkzopry.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163ehwpplsh.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163swylyhnx.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163rjtxurjj.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163ofefxvxo.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163lgezskzl.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163sluvwadz.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163ztcyactg.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163tdktkrkq.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163ajarhidm.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163hsfuvear.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163dkgrqqjj.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163zorqjicx.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163crtvuunc.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163epvwrxvj.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163puvisgwe.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163akrsrxey.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163kncbrswu.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163hjcfctyl.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163nfsqbfvl.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163nguorabp.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163ptrpzcpg.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163qnwdldna.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163oogowuey.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163yfztffjv.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163affbtnys.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163orsbgtmt.html

composer require psr/container
来源：http://www.aibaodan.cn/163scgrkafi.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163mlxvicyf.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163vcjiuwcx.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163orfphjvd.html

composer require twig/twig
来源：http://www.xuanzx.com/163bwjpxdpx.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163swnciqov.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163bkanzzxe.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163cvmoxqcf.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163ttmnlumy.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163zjqtqxlz.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163sbwtooqk.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163lcghpiyz.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163tgocelkc.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163zpnpaajb.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163oajvgetx.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163xthsojln.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163fysngkny.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163fklbsxzn.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163mopxjspk.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163smdeimbt.html

a?.b?.c
来源：http://www.aibaodan.cn/163lygevwoj.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163tymzstmp.html

a ?? b
来源：http://www.aibaodan.cn/163zhfgioxa.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163ukksdwyh.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163qgtkbzsp.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163xlukomgk.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163pyqbpmhp.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163kvuftcwh.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163mazbznmf.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163yikmlbjz.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163nhhxvngy.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163cnslckbt.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163bpvsbvux.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163lczhsvap.html

structuredClone(obj)
来源：http://www.sxryk.cn/163tphrzxaq.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163rafukmuy.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163lzppeaks.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163mvjudfhh.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163cepkuwks.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163dnolpxlj.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163nhkbzxvv.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163ycoqeqbs.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163yygssgqg.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163djohztxj.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163csooqnfh.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163rclmerxv.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163bvffjrdw.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163wwecrcxa.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163bychvvfv.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163djsylqar.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163almkegrh.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163lqwfrzza.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163zzjrucpu.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163zpvvpnla.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163wiopchjt.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163ozqkaipc.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163olcmebum.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163qbwychih.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ngsynlox.html

[U105] JS：节流
来源：http://www.xuanzx.com/163esbrmzks.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163dgqnvhva.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163pywgvzgd.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163bnvhlusc.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163bbqdjszq.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163nhowlnfe.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163xoylmfbo.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163xwnwetda.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163vgaancsh.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163enmrgllt.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163bnimylji.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163sfntzmjw.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163znlokhvg.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163ykhmdmki.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163leysmfcp.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163youtydqn.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163bqtgnwtw.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163lbdxaekv.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163dwnvcwla.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163cyrciwrq.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163zhbpehlz.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163eazxtmdc.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163bdgrfzyk.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163rifvsllc.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163oiiwvcoo.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163wngmtouc.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163cqvlnegy.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163xttjgicf.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163akimegef.html

npx vite build
来源：http://www.sxryk.cn/163mnluhmnw.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163ycmpcyss.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163qdyymdjb.html

================================================================================
来源：http://www.aibaodan.cn/163wfbvgayn.html

统计汇总
来源：http://www.xuanzx.com/163igxllsyx.html

================================================================================
来源：http://www.xuanzx.com/163ndqnotjk.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163wqwrtjkn.html

Python ......... 252
来源：http://www.aibaodan.cn/163eojylxis.html

PHP ............ 252
来源：http://www.xuanzx.com/163yveuuyma.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163aljbemox.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163gooybnar.html

Java ........... 212
来源：http://www.sxryk.cn/163jftgyllz.html

Go ............. 212
来源：http://www.sxryk.cn/163hgsiudeb.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163oruveery.html

C# ............. 212
来源：http://www.aibaodan.cn/163ccbcxkol.html

C .............. 30
来源：http://www.aibaodan.cn/163rtjkdnfz.html

C++ ............ 30
来源：http://www.xuanzx.com/163ynhvacfr.html

SQL ............ 90
来源：http://www.aibaodan.cn/163pclbkazi.html

Bash ........... 80
来源：http://www.sxryk.cn/163dqsqnwpg.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163wvsvmstp.html

Swift .......... 15
来源：http://www.xuanzx.com/163gzclpkbk.html

Lua ............ 10
来源：http://www.aibaodan.cn/163axcvhwnx.html

Perl ........... 10
来源：http://www.xuanzx.com/163afgtuxgr.html

Scala .......... 10
来源：http://www.xuanzx.com/163yzunqdpa.html

------------------------------------
来源：http://www.aibaodan.cn/163sjlsebrt.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163ctdggrbo.html

按章节统计：
来源：http://www.sxryk.cn/163ontwyugb.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163nfusxckb.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163rjpaxcjs.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163cmqwyicr.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163kxwdhsll.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163sgbhrwrt.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163mkokxtcu.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163pcedwfng.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163kzomqdjt.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163kwslumhk.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163nxghrdkh.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163beexkiwx.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163sksetkzy.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163mkwqilyx.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163kudqmpjs.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163vunhqoru.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163hdrpjihb.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163kbvubvwt.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163pmslzfqr.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163dvgfizcb.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163eiujssfl.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163poimwbut.html

------------------------------------
来源：http://www.xuanzx.com/163nlyzargd.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163znsrzryc.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163goauihkb.html

使用提醒
来源：http://www.sxryk.cn/163yoqmxscb.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ddbbtkme.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163pevthsgu.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163iguxetzh.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163lemleras.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163lqwteuew.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163vskihrrg.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163ijbgoyql.html

================================================================================
来源：http://www.xuanzx.com/163jczmzmro.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163akkelmbq.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163auyieemq.html

================================================================================
来源：http://www.xuanzx.com/163ipimfehc.html

【收录内容】
来源：http://www.sxryk.cn/163ympgdkeq.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163vjwlqgkh.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163yskmfcsu.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163teceauti.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163xcjtkqfk.html

【使用说明】
来源：http://www.xuanzx.com/163ueompmmp.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163xqtzryxg.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163rfenyetl.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163zvuypgvb.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163ajulcuhk.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163mwkveozx.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163ycnctasm.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163mtmofyqy.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163arvosesz.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163rvoglmpx.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163phgkqsof.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163jtsssfkg.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163gjbriqey.html

【文件统计】
来源：http://www.aibaodan.cn/163pnglgqjq.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163swavdvnm.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163smxjsepm.html

目  录
来源：http://www.xuanzx.com/163htzfczai.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163qgqtawev.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163tayckefh.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163epcxmumg.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ukzclktf.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163mlaklgsg.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163qhlpciyn.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ujwuywwl.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163vmpgbcum.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163kzkrudiz.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163lfgmavxr.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163mupashhk.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ezujralv.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163uvvqokgm.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163qadtxdcx.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163dqpdlnei.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163fakvrlew.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163xrbtrour.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163bfkngasm.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163lubixqhd.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163ojqckxoc.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163heoyguwv.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163bfidpcen.html

================================================================================
来源：http://www.xuanzx.com/163zbjtroqt.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163rbcovpkf.html

================================================================================
来源：http://www.xuanzx.com/163ijfwsdyz.html

[A01] Hello World
来源：http://www.xuanzx.com/163dqcrqege.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163rnbeenrj.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163sxippzre.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163knqimhgr.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163mvaatusm.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163julketmi.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163oklqvnem.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163ugwslivy.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163hoadlnns.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163exazrmwy.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163tijyhwos.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163kiekpmko.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163wrkviyop.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163vjfdjszr.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163ejbmdmgr.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163dhcdatpo.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163vsbepfak.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163symmzqxx.html

[A03] 常量定义
来源：http://www.sxryk.cn/163kwmnffvf.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163eangsxei.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163tjuiecnz.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163hytonjsk.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163olashsbj.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163qjlrbjqr.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163wwmihnev.html


<!-- 参考信息 -->