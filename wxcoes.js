外链999!wailian999！

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163lgjwjlqd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163mkimnbza.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163arwaygdx.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163extfemut.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163mtzdbdgd.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163gxgechrp.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163hvanpecy.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163epzkzgsd.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163efcbbgrg.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163rcnqajsg.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163kxqugwpt.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ncxevhon.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163ghcnevmw.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163yvzmzxuk.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163cfqtqnqw.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163kktgbcvi.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163byfibehc.html

namespace App\Http;
来源：http://www.aibaodan.cn/163hnhsyzkb.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163kwprkecp.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163ofbjjuuw.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163zyybtikf.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ackiyadh.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163cgpnmcpd.html

?string $name = null
来源：http://www.aibaodan.cn/163vdzhhzlq.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163igxjjcsy.html

int|string $id
来源：http://www.xuanzx.com/163opngnqty.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163hafdsxsj.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163pdudzzbp.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163glaalwlj.html

public readonly string $name
来源：http://www.sxryk.cn/163uhtcialo.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163xzetskne.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163gxethkpf.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163sxgsjpti.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163edusgfge.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163krnifjdl.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163rnflvbxz.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163owvavoeq.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163hohcvnoz.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163uwgjgtva.html

$obj?->method()
来源：http://www.sxryk.cn/163rkxlcwre.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163xvnhqnuw.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163zkzqxspn.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163ifvgmgsn.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mxeyhxob.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163waoecvzx.html

"值: {$a}"
来源：http://www.xuanzx.com/163hxaibyas.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163gvrbwhoj.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163mswmlecr.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163cjpbvnqh.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163osvfovuq.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163pvixpatf.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163nwvyrnih.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163fgxxicde.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163gnvqkexc.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163zymheflf.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163taqsjcos.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163auukgnti.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163xtswxjkc.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163wltdwfhg.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163mxqhmlgy.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163njmazieg.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163dzfevgxk.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163jukcrkqz.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163ugekkgkt.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163eeffqtdk.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163sqexmctz.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163hhbudolq.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163dtxdrdyz.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163atkxmmir.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163gxxgrhmm.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163jnmfohcu.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163cnjoscxi.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163icmxhpqf.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163reihygmd.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163kyvzlqci.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163hxggonge.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163nnoicijj.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163ajwbuwiy.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163nuedzkaa.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163zwdlijrf.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163aknsxmml.html

composer require psr/container
来源：http://www.sxryk.cn/163dfteblkh.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163aaaxlufa.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163ovvpdtnk.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163omccfthu.html

composer require twig/twig
来源：http://www.sxryk.cn/163vuutdjkj.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163tcjudfls.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163njeyszzq.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163dulbszti.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163pdkcosye.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163ezvganjy.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163khiuhgeq.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163chmzezfa.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163zbprbmaq.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163hiiasqrv.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163slqxqtro.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163fdpjxvqi.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163gzfetgku.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163lypgkwux.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163akmutpfk.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163buirsgbu.html

a?.b?.c
来源：http://www.sxryk.cn/163luirtmcm.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163tasxvwlu.html

a ?? b
来源：http://www.xuanzx.com/163zkjsgsum.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163xbxicvai.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163ieuihvuk.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163nzemaaxf.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163xkbmmsbw.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163itsgjugo.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163tvmmujfj.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163dzqojlcc.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163bcxroove.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163kleyeknd.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163crhglxqx.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163kjqyzxmh.html

structuredClone(obj)
来源：http://www.xuanzx.com/163irbekxjr.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163xgoiwfme.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163ntiysbxu.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163kocujiwe.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163vqjzubok.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163ivuhtwze.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ckmaauxo.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163lysvreoz.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163tbwfmzeg.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163wzmjykmr.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163eculpbgb.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163yuevijey.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163rkzkrfut.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163pjbbrggw.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163ndcsknbl.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163wnyebtjk.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163gzgthijr.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163pjzmwkvt.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163kofiwadw.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163stvjztfl.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163hxkvnweu.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163pjtwhavh.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163uvcsfkql.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163anuyicym.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163cqcdawub.html

[U105] JS：节流
来源：http://www.sxryk.cn/163gkatqnvg.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163cvboppgp.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163jozcunas.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163sakfaxgf.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163hpvegbrm.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163cscnwwoe.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163czbcwpiu.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163idqwkrfa.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163yxaldqwg.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ijmktlbc.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163imgnpgyu.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163iijrgspr.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163ziymgjwp.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163skbzkvzm.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163ykenuhqq.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163seumbxmy.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163nwsrqgjo.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fpuotraw.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163ayijdhab.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163cxfwjize.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163fhxnedqy.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163zmbeguui.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163gwdvfjhp.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163psmdwiwl.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163chsuybct.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163rmknqgay.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163oacqpnxz.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163qqjztqax.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163yemkuylw.html

npx vite build
来源：http://www.aibaodan.cn/163ccrxgzum.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163jzkpuiec.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163djqxolno.html

================================================================================
来源：http://www.xuanzx.com/163ewjqfcww.html

统计汇总
来源：http://www.xuanzx.com/163xbvvekku.html

================================================================================
来源：http://www.sxryk.cn/163kraebcqp.html

按语言统计（条）：
来源：http://www.xuanzx.com/163ypkmodgz.html

Python ......... 252
来源：http://www.xuanzx.com/163quzefcii.html

PHP ............ 252
来源：http://www.sxryk.cn/163sndqbwox.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163ueipcbfh.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163gxmmezsk.html

Java ........... 212
来源：http://www.xuanzx.com/163tummqjaa.html

Go ............. 212
来源：http://www.xuanzx.com/163ifiiknbu.html

Ruby ........... 212
来源：http://www.sxryk.cn/163nzgcogji.html

C# ............. 212
来源：http://www.aibaodan.cn/163mqpnpdiz.html

C .............. 30
来源：http://www.sxryk.cn/163vzchvbxw.html

C++ ............ 30
来源：http://www.xuanzx.com/163tpdokjcx.html

SQL ............ 90
来源：http://www.xuanzx.com/163bviywcyr.html

Bash ........... 80
来源：http://www.xuanzx.com/163dtrniuag.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163tsursjtd.html

Swift .......... 15
来源：http://www.aibaodan.cn/163sczyfezr.html

Lua ............ 10
来源：http://www.aibaodan.cn/163ppcqcsbp.html

Perl ........... 10
来源：http://www.sxryk.cn/163yluzhabm.html

Scala .......... 10
来源：http://www.aibaodan.cn/163oxdxezqm.html

------------------------------------
来源：http://www.aibaodan.cn/163gtbrzqwq.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163hclermmx.html

按章节统计：
来源：http://www.aibaodan.cn/163uzafszwm.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163xnpdwtas.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ubgqpewh.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163lwjcfbve.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163nqrktmye.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163cioipncf.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163tqaywuzf.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163tnpxpvgd.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163fhiveldd.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zepassuf.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163rurpshzq.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163dikhtufj.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163kwezzczm.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163hqltubvb.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163vwgxoicz.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163kxygkjos.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163okftlgiz.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163mshcshnw.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163iilbflkf.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163dwsygkzi.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163zbtwdpqo.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163exlnajjy.html

------------------------------------
来源：http://www.xuanzx.com/163lntdpejg.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163vsroqefg.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163xstpnous.html

使用提醒
来源：http://www.xuanzx.com/163xvjjdcbq.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ypyvojff.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163xeyxhtal.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163gkguknea.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163xtbftdav.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163dyjcwobh.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163ogbcowfr.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163rdcqefhj.html

================================================================================
来源：http://www.aibaodan.cn/163nyjhjbcx.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163sekerqgu.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163vshycukw.html

================================================================================
来源：http://www.sxryk.cn/163actbbkub.html

【收录内容】
来源：http://www.sxryk.cn/163olowcoxq.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163uchwhmrk.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163bvugbeyz.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163orvxdqvk.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163ftvkrlcn.html

【使用说明】
来源：http://www.sxryk.cn/163dkpohzao.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163irjicime.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163kmpxictu.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163nbsdfrva.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163cukttaqz.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163xzlgrxzy.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163neeozoae.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163vuuxqpmc.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163okbwuulu.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163kgoosjam.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163zyugxsiz.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163quldjnmt.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163pcpcrqnt.html

【文件统计】
来源：http://www.xuanzx.com/163vrdleaxm.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163plfphxic.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163whffqosz.html

目  录
来源：http://www.aibaodan.cn/163mrnqhwhm.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163jdpphirb.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163kddgcfqi.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163isvpepng.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ezhxarwn.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163dvmpsisv.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163uwjkokkc.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163ahkyqmhr.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163choqwghf.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163pinbyvov.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163mzrmbbcg.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163phbusnot.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ftqizujq.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163kcgxdlfk.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163tgeztxlj.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163yaotvtmd.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163rhuyffxs.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163iurrtnsu.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163wmxzteaz.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163beyffjmx.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163seqjwssu.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163dwulueto.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163kdflcmrq.html

================================================================================
来源：http://www.sxryk.cn/163twwufela.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163uijpyfuw.html

================================================================================
来源：http://www.xuanzx.com/163rkymwrqw.html

[A01] Hello World
来源：http://www.aibaodan.cn/163qxpqptua.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163lcezihdb.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163ooqymvoy.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163xrimdqqv.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163cxguvdxn.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163orxrnzft.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163aldokabf.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163zvoclyew.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163jzyrvasw.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163pdgcuyzh.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163fbqpcder.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163zmrgfuwa.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163azxdexbw.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163skchteig.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163rydykrqk.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163njgimhgq.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163rbcfntvy.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163aeeczzmy.html

[A03] 常量定义
来源：http://www.sxryk.cn/163uoqefznm.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163qpuuadea.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163hzgjfskz.html


<!-- 参考信息 -->