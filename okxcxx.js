外链999!wailian999！

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163nilwfweq.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163huilroci.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163hfztkwdg.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163pbleaynk.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163itlzhvhz.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163owkffplp.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163rcyfapnb.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163gwynsnfl.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163zhjblmtq.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163zecxlndl.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163cdkkdwcg.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163nqlqbbxg.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163albeihza.html

namespace App\Http;
来源：http://www.xuanzx.com/163cunivaxf.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163quefgekv.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163mywaifgs.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163nywtpvqq.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163gmigzhvn.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163jeczijmq.html

?string $name = null
来源：http://www.sxryk.cn/163gucyofee.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163ccifcqjm.html

int|string $id
来源：http://www.xuanzx.com/163puabkwen.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163jdscxcdd.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163jhkbbqvl.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163ctgjynyh.html

public readonly string $name
来源：http://www.sxryk.cn/163ftidrmqg.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163zabwwevx.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163emzxsues.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163ekvkhcju.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163bhxluwex.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163pvqycyiy.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163zgvqnmon.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163qimomevu.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163vkguwbeg.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163udilmmol.html

$obj?->method()
来源：http://www.xuanzx.com/163klfmwrcn.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163isnmbftd.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163rtovmicl.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163ubjrjuze.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163tlbwrwqk.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163uzbtddpa.html

"值: {$a}"
来源：http://www.sxryk.cn/163wkdtrtjv.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163gkuwyqax.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163enthhgrq.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163qwcigpfh.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163bzdfsjpr.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163hetubdiu.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163egozpdbv.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163tpdspxzn.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163loifbgzr.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163rufflvaj.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163ooybpymd.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163adckswhk.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163vfcgxhuf.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163zgkrepst.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163sqcvdkfy.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163tlkvnzmb.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163ofnvbmii.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163rzvmqgvt.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163sotiiyle.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163rkjdvnle.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163zvbjkyur.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163yuqzpmul.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163vxolajfy.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163bqfcajss.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163amxzbtml.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163hubvspsp.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163hxpkmugn.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163fdsjlflm.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163nezdsmwk.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163mtuavkws.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163vidoeaii.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163eyfjigbr.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163eqtwxsnx.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163mmzbjota.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163gfpyzxkw.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163kemuyvau.html

composer require psr/container
来源：http://www.sxryk.cn/163ynhacqou.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163rqtvuqok.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163zvxdueal.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163glhsdias.html

composer require twig/twig
来源：http://www.sxryk.cn/163voaaaljs.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163jubyvene.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163crzbaybq.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163rqwufosr.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163tkodncwf.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163ohfscyeb.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163kujnrrko.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163xadoodsy.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163hlzychkg.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163bgthihjo.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163etackyxm.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163qtvcjmsh.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163wtizccjk.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163sjptvfvv.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163sodvkfpq.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163tvahzbsg.html

a?.b?.c
来源：http://www.sxryk.cn/163essrrjfx.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163hfhkysqs.html

a ?? b
来源：http://www.sxryk.cn/163vngfpkcz.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163pkoefqnn.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163spwqnsey.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163wjyklbjl.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163mfvuoxpn.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163uvatwhpv.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163yaaliacx.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163nagnhjbb.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163mppbsgwh.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163gwvhpxto.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163rkrxotgg.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163mercgdkg.html

structuredClone(obj)
来源：http://www.xuanzx.com/163ipdwecej.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163xnynhwgi.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163rvcadknr.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163yepwurca.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163ezzoeihv.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163kxjvhyhw.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163flmqdplt.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163yjliyupe.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163tuyirjcr.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163budsfnqx.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163feusxgea.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163aaacfyzp.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163lbvnbbpo.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163inwflamj.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163zsphcyyv.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163nceesweq.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163cmwkwkos.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163drjdvzhb.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163gqvazhcg.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163zayolhyy.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163tuklpver.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163pdnhybvw.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163jnrkkuce.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163xxolwgxc.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hanqvodt.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163oflzolxg.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163kbjkinga.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163qokldlgr.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163zhrqxegw.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163zyokfslg.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163hchzohih.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163zlchhvxd.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163tkaahrio.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163lfazrnmb.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163bndmzwff.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163qarldbnb.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163xckjgwew.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163ghpaxbfr.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163nurcrjlv.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163vkoigvzf.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163ejvbosjl.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163lirhxcea.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163znfeujsd.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163xiikzkfc.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163qnfvxetp.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163irdjexmg.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163qcqqcfnj.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163ojifobpi.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163svpkzotg.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163plyeotdh.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163qtdercgh.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163ogpwxtep.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163rbyhymkm.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163sxxeebba.html

npx vite build
来源：http://www.xuanzx.com/163qkcdsmnr.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163mxpscbvu.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163hujulxox.html

================================================================================
来源：http://www.sxryk.cn/163lrxosyvz.html

统计汇总
来源：http://www.sxryk.cn/163hdidnsyz.html

================================================================================
来源：http://www.sxryk.cn/163zvujtlyl.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163pfoiawqv.html

Python ......... 252
来源：http://www.sxryk.cn/163panonwtv.html

PHP ............ 252
来源：http://www.xuanzx.com/163wnnlvkhm.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163vpzxayfc.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163febwjxta.html

Java ........... 212
来源：http://www.aibaodan.cn/163cdekshiv.html

Go ............. 212
来源：http://www.aibaodan.cn/163rtqgeuww.html

Ruby ........... 212
来源：http://www.sxryk.cn/163dcikdygd.html

C# ............. 212
来源：http://www.xuanzx.com/163wucpomok.html

C .............. 30
来源：http://www.sxryk.cn/163kuemgjtm.html

C++ ............ 30
来源：http://www.sxryk.cn/163ckwqxxxh.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ubmviywg.html

Bash ........... 80
来源：http://www.aibaodan.cn/163prtpmukz.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163qchontds.html

Swift .......... 15
来源：http://www.sxryk.cn/163uszkwsss.html

Lua ............ 10
来源：http://www.xuanzx.com/163vnrhpcev.html

Perl ........... 10
来源：http://www.xuanzx.com/163ohcnvgbv.html

Scala .......... 10
来源：http://www.sxryk.cn/163rxasvhvo.html

------------------------------------
来源：http://www.xuanzx.com/163hynhngqq.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163fqhpixce.html

按章节统计：
来源：http://www.sxryk.cn/163smzipazl.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163etadzrgw.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163cpxylwla.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163sdetzeyl.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163lizyvhnb.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163qwuwhvzu.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163lzoumgys.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163aeyzdzek.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163zferpjgm.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rpmorogj.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163wappgwza.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163njwbuuht.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163baeqtoam.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ncahbcfa.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163xtmbkgrw.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163knyudmgq.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163lkhmayjl.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163edrsvllj.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163sgvhagjw.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163jgrxzgkx.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163xhhlqgya.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163xtoaafma.html

------------------------------------
来源：http://www.aibaodan.cn/163mnzxarib.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163kgjmmone.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163abbhsbac.html

使用提醒
来源：http://www.aibaodan.cn/163nzjwoknl.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163pydnujso.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163xqctczxm.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163hfaomuhm.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163ghrkxwdq.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163aeueakfr.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163fbexrcvs.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163vjjeqzac.html

================================================================================
来源：http://www.aibaodan.cn/163yhqezbjl.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163ieqrxill.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163okljlrqd.html

================================================================================
来源：http://www.sxryk.cn/163xnranxvz.html

【收录内容】
来源：http://www.sxryk.cn/163clodmyer.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163vmqodiyu.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163bhsraidq.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163aotnretd.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163larxkqiw.html

【使用说明】
来源：http://www.xuanzx.com/163ditroxew.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163mezltqcm.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163yqmmdakw.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163victhhjk.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163wdnjnnkl.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163qybsdxof.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163fykhvmqr.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163mjturtgu.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163llrxcpld.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163dqmppkyc.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163oajhekly.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163jykkuoqd.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163omswqmfd.html

【文件统计】
来源：http://www.sxryk.cn/163rcvokmng.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163uxfwkxdy.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163gbfobfyc.html

目  录
来源：http://www.aibaodan.cn/163cbtnadcj.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163taymylnf.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163mwhadcqm.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163nmfhtnll.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163tawxhqts.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163utqosdtf.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163rtarhczw.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163tygvbfiv.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163rqtsqfjd.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163kducoggu.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163zqdwpvke.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163ngaydils.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163vzybcoar.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163vtggawjm.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163fpilxsvo.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163vqgfjssq.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163phwrfnts.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ibffyiwi.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163ljkequeb.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163uxkasazd.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163fjteaqtu.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163goendjgv.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163bcbwdtxq.html

================================================================================
来源：http://www.xuanzx.com/163eguzjujn.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163jseqfaqt.html

================================================================================
来源：http://www.xuanzx.com/163yasylfxe.html

[A01] Hello World
来源：http://www.xuanzx.com/163wmsvngqt.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163whzcuynt.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163zldicijc.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163laxeyhxf.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163ttyoqpji.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163dkpwrhkz.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163sbkjhibw.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163pvqtsgon.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163lbozikug.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163cruwnhry.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163djwkrhns.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163nwqxghbk.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163ngosxqmn.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163gepomttq.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163moijyzam.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163cdfqrdmg.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163mqxanpti.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163kcfzfdeg.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163cmirjumt.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163mfsoepva.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163upbtepqd.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163cuyhqcun.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163kdmtitiy.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163rpyfxllm.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163onnnsapg.html


<!-- 参考信息 -->