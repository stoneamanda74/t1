外链999!wailian999！

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163iqvxcptw.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163lbcbcknk.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163krnkkzhm.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163ljoxtlbt.html

[U31] Py：单测
来源：http://www.sxryk.cn/163vgnouygu.html

python -m pytest -q
来源：http://www.aibaodan.cn/163wtimrvwl.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163dwtkhhrn.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163tpqtpdqp.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163yakvonnu.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163atgehrdh.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163hrdgparp.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163badesquo.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163ljlboihd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163fvsdjyxt.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163miweicqo.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163ldqcfbde.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163gbfomelg.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163izjeovvc.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163qmdlwlax.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163brxaitna.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163joxvnxap.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163pytzcmpn.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163moosoowg.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163zyrzmrir.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163fsneftfk.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163emzhppeh.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163ailtlecr.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163lbldolqr.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163wjbheoqu.html

namespace App\Http;
来源：http://www.aibaodan.cn/163heqezgdz.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163qdvpdeba.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163zuoujpsl.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163jvfgfagm.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163adxavyec.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163mduvmlow.html

?string $name = null
来源：http://www.sxryk.cn/163wmhygtgt.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163hiecemwv.html

int|string $id
来源：http://www.aibaodan.cn/163qnvxpkda.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163cloomwqh.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163zqlcefki.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163uaeqpmow.html

public readonly string $name
来源：http://www.xuanzx.com/163azittntp.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163zhvcjpcj.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163jabzrdgf.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163ldcbeetv.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163iyoqpkse.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163kvmgrotm.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163xebfkird.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163tyvarsro.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163hkqpyuej.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163mpvjicyr.html

$obj?->method()
来源：http://www.sxryk.cn/163pgmlcmkj.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163aftkiceo.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163cpesmqrg.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163madrqrja.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163qjwzbsfb.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163dbwaljas.html

"值: {$a}"
来源：http://www.sxryk.cn/163cfktkqpa.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163yeifkjrk.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163zgpvfusw.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163djtmcztd.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163iqmzmigf.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163mamckkbw.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163onaxsinm.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163pebckknj.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163sawhjieo.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163udupirvj.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163tnsccfci.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163noeuzrhr.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163djjjkzrj.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163pjxqwztr.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163rcdzabnq.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163brektncs.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163tqtlgimq.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163iavmntlv.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163fhcllfhm.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163ndhbyxwv.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163lysmvmtg.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163fpsjawkw.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163zjrsjxqp.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163lxsiwuzb.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163vvamivbp.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163htuwgrsy.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163wvfaesxh.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163irmcjlns.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163kmbpruxd.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163sryjodbl.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163jcwqqtss.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163fyatzuzk.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163qhdcruqc.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163cvxbjvju.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163asddufur.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163hzwjtozp.html

composer require psr/container
来源：http://www.sxryk.cn/163czhuonwk.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163ydbajfmb.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163xqanxypl.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163gqiabpyh.html

composer require twig/twig
来源：http://www.xuanzx.com/163ltfgmqgy.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163ajokqpsw.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163ajbpsiji.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163vgbkzzdy.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163qmiuxvef.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163vdxaxmzj.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163dzovugfn.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163trxqtiqq.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163ioxdluiu.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163siuigavf.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163hbvffxne.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163qdtmjkrg.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163rbdufyrd.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163xbuemwis.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163jtdajeqi.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163gqyyvxsx.html

a?.b?.c
来源：http://www.aibaodan.cn/163drdwzsat.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163lefibltc.html

a ?? b
来源：http://www.aibaodan.cn/163ehdhuklk.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163dxszclen.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163qarfufnd.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163gokqjvxg.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163awtihqkd.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163spsxkrmp.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163mpdjmjct.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163dlrhxkuy.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163esanumji.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163amojqdge.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163ztkqbswb.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163raromqgg.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163opuxhtfe.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163olmezgmv.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163xlhhbifb.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163rpftgzww.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163wopjigmf.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163icmehsjz.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163olryivez.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163eckopton.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163dtmrmsih.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163gtipqyyk.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vpigzfwf.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163evzmlcjc.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163qmiludld.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163krplosyu.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163cfypwnyu.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163veyapkbo.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163sziuydbx.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163lcinilob.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163ljytlfgj.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163ufcszapg.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163umujvvqd.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163eqzfokhl.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163faexakkn.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163uejetufm.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ajqimviq.html

[U105] JS：节流
来源：http://www.sxryk.cn/163jilngvgs.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163kuynlont.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163qspdgzgj.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163lgajishz.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163mzlrrlrj.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163jwkqeutw.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163evbzleyp.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163pizxdara.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163szsdnurv.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ttttzykq.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163vyquwhpk.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163uotltqjs.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163bxppbrmq.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163xzbmoxrn.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163tggutaws.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163dbpdpgiz.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163jpukucjf.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163fmadgpqd.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163uxztvvfi.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163hynmoepw.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163pindrzrl.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163rawsrkmj.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163anssppst.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163csdclrqg.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163fyjpkjka.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163zaofflvp.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163ksofmqsk.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163mjcdoyxo.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163kkplpdwt.html

npx vite build
来源：http://www.sxryk.cn/163kfbmzqxk.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163kuviyjom.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163ymbiqvbo.html

================================================================================
来源：http://www.sxryk.cn/163nsprumgg.html

统计汇总
来源：http://www.sxryk.cn/163ccvaudfj.html

================================================================================
来源：http://www.xuanzx.com/163hjwxwbuy.html

按语言统计（条）：
来源：http://www.sxryk.cn/163fdqedpeh.html

Python ......... 252
来源：http://www.aibaodan.cn/163wsgctvjq.html

PHP ............ 252
来源：http://www.sxryk.cn/163wdcagmsz.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163arhueqfl.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163jfozoooy.html

Java ........... 212
来源：http://www.xuanzx.com/163wgunbeaf.html

Go ............. 212
来源：http://www.sxryk.cn/163hfhesuvd.html

Ruby ........... 212
来源：http://www.xuanzx.com/163hongqsac.html

C# ............. 212
来源：http://www.xuanzx.com/163akszrvew.html

C .............. 30
来源：http://www.sxryk.cn/163mjzwjpxa.html

C++ ............ 30
来源：http://www.xuanzx.com/163ejlvvzzg.html

SQL ............ 90
来源：http://www.sxryk.cn/163umspqbql.html

Bash ........... 80
来源：http://www.xuanzx.com/163dfqyfscz.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163akvdnnqi.html

Swift .......... 15
来源：http://www.xuanzx.com/163unbmlzdr.html

Lua ............ 10
来源：http://www.xuanzx.com/163julxxosm.html

Perl ........... 10
来源：http://www.sxryk.cn/163hgkbhezj.html

Scala .......... 10
来源：http://www.sxryk.cn/163riugmvho.html

------------------------------------
来源：http://www.sxryk.cn/163dvgxqzoc.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163ssksnzah.html

按章节统计：
来源：http://www.sxryk.cn/163jxvlgjmt.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163wfrketff.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163thyiuqdy.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163touyivky.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163jxmzkcwb.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163tfvexrul.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163zgjewpsz.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163efsbzsrx.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163mbouhwtb.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163hwmbswbd.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163htddybtg.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ogkwscxh.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163dpawheky.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163fwusiabu.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163mytelpjx.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163qczngkpe.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163sosgcvfd.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163jhswzmpa.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163aiowgabm.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163gifzawat.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163mrgxmnei.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163ifhaqlpj.html

------------------------------------
来源：http://www.xuanzx.com/163tecnrxzt.html

合计                                  2106 条
来源：http://www.xuanzx.com/163njtwjqko.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163tzmakknm.html

使用提醒
来源：http://www.sxryk.cn/163udgjtafk.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163olojkmeg.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163vfnqzfro.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163eiguqbtm.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163hsohmtkg.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163cuqjimnd.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163xcyiustk.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163cekdzfbt.html

================================================================================
来源：http://www.aibaodan.cn/163ccwowrzb.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163yaosghuc.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163mnimbtmu.html

================================================================================
来源：http://www.xuanzx.com/163icfveovv.html

【收录内容】
来源：http://www.xuanzx.com/163jglnbsgo.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163fjpkuamj.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163wnisfkud.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163vnjdmbit.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163tidhplpe.html

【使用说明】
来源：http://www.sxryk.cn/163yftftatf.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163bdpwtvmo.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163usiqazgm.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163yuozapee.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163ayiwvvxo.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163rjoixpuy.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163zvmjbsui.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163rlbqzlgv.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163rpfsyxyd.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163rkndvkxq.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163xbvzxtok.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163aojbdjpz.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163cjvdlpvw.html

【文件统计】
来源：http://www.sxryk.cn/163gdqxuabe.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163jliqyvuo.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163hgegibci.html

目  录
来源：http://www.xuanzx.com/163kyskdjzr.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163nlcpejhm.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163trdlmeza.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163jmberdgu.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163osblfwbz.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163kvrbvubd.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163dxqogdpm.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163xdirjjtu.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163zuyiuoyy.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163yrioirii.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163pupzywln.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163bvimbzlq.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163jvfitxsh.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163kylpsjhb.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163bthqqlif.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163tnxejbmy.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163xdtyxyav.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163iawwisqj.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163eqbizfqt.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163bdcgngle.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163hckjmkam.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163zhxlvxem.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163uvprxhxn.html

================================================================================
来源：http://www.sxryk.cn/163gpquzunx.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163jeoiarvb.html

================================================================================
来源：http://www.xuanzx.com/163yxqpfxjq.html

[A01] Hello World
来源：http://www.aibaodan.cn/163uctwjkbo.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163wzbmsmkj.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163abagqplu.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163zcxuasgf.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163ujrfdthw.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163udupibku.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163qjusjcbp.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163axgkstqh.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163ithupmbr.html


<!-- 参考信息 -->