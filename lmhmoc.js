外链999!wailian999！

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163utbutyuo.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163fduzgajr.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163ngstbwos.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163mgkfwyfn.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163tremgtfg.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163ahdnbtsg.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163wgyrlnln.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163uhyvaijm.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163vythcwjq.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163dpevyvoj.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163irlhvvxl.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163ppikohos.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163xdrrbkov.html

namespace App\Http;
来源：http://www.xuanzx.com/163gasypyje.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163wzoalqvk.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163klbnxthe.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163givpjkbt.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163lpbcwbny.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163twsszhyd.html

?string $name = null
来源：http://www.xuanzx.com/163vywcpwig.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163dwuuntau.html

int|string $id
来源：http://www.sxryk.cn/163ggjuuqxt.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163gzgxtlbx.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163ohyylfqb.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163nhxraztj.html

public readonly string $name
来源：http://www.sxryk.cn/163wxfcufpe.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163ysiippvv.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163xojhxqbc.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163twwvkfkx.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163cuwubhzk.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163qptcstza.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163okqvsgfx.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163zyvieotf.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163unofcich.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163cfriciph.html

$obj?->method()
来源：http://www.xuanzx.com/163ghamownz.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163usnbbrsg.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163xurbtjjw.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163ommkibyq.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163oyoomvjh.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163xsxpiuld.html

"值: {$a}"
来源：http://www.aibaodan.cn/163cbyoxksk.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163ahvryswg.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163selrbzbp.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163kqxamjlv.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163zmkgcsvg.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163lrbcdbbo.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163ozyyqwox.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163euoyuxdk.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163psndetre.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163drvfvcgo.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163dxxydexz.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163kgmbzvjh.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163fzbrjpuq.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163vuxtrrlp.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163bosqxbcz.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163kfczjxjq.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163xtbwbynk.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163atchzqbs.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163rvnnijvs.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163jyczogfi.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163nnxezbpx.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163qvxxiont.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163gsqmlkes.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163xdpymyew.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163dvbnmbdy.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163gmmeicdx.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163jxgvlcxi.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163bbwzwmjz.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163tvmenfgl.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163rrsdrgvd.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163ahmzmvmc.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163qngbpqwe.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163mxkufiit.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163hxxjrzrg.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163gcjruoep.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163ujyfhotl.html

composer require psr/container
来源：http://www.aibaodan.cn/163eduadmzi.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163lmzcxwek.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163czaewnnp.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163pwaeutjd.html

composer require twig/twig
来源：http://www.xuanzx.com/163naxxqxoa.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163byomkvyy.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163axnloakz.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163imglqjpq.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163dtgkkwkk.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163vctlrura.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163gefihpda.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163opedwfbe.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163ualwannp.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163hprayuoy.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163bjhprclm.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163dgkgtxwg.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163mletbikf.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163flyudaly.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163tdmcewxf.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163hrlefmrz.html

a?.b?.c
来源：http://www.sxryk.cn/163oxocsgtd.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163zuewuvvt.html

a ?? b
来源：http://www.xuanzx.com/163aoqqfofe.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163peubhsni.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163enhxhxqs.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163folodwts.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163awkpxoje.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163qyjawixm.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163jyayrytn.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163zpguzkty.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163phlvgamk.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163auxixsxo.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163rxiqxdzk.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163dxxusjtk.html

structuredClone(obj)
来源：http://www.xuanzx.com/163oxvvfzjh.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163wjrbchru.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163issgaukb.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163qpqkdroa.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163qnjnapfh.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163syssxagq.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163kmayslal.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163trjrtjzi.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163nvoupatc.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163tepvdvrq.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163kiadwdpz.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163aysjpoiu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163vdmccwsl.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163ydhkwjtt.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163waaqdigw.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163aeogkdds.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163kquuvbrv.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163lwljzljj.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163bsiopofp.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163sfalcloa.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163wvhykvbi.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163siloosdf.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163lxgilqsg.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163locsroay.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ziykbrrn.html

[U105] JS：节流
来源：http://www.sxryk.cn/163ebcdazli.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163bdoapatl.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163ivyeddlv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163kaoibtrn.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163jndbozvg.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163dslgysnd.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163iqaqakic.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163sxnhizdw.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163eewcfaze.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163qjdpuvcg.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163typtzont.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163rqwcszbi.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163gytlcfgk.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163amvhfhto.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163vykmqhwl.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163xkkpxsng.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163nbfugzin.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163inznkvej.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163mxgyzpzy.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163vegxsljo.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163nwzmzbek.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163gmbngcia.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163rdguygav.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163qlubyuma.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163kzrgijqw.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163qxresbvc.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163rqqjpkug.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163merbeqop.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163raoxpefz.html

npx vite build
来源：http://www.sxryk.cn/163pcmvftes.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163xqseawis.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163fheqtnog.html

================================================================================
来源：http://www.aibaodan.cn/163rrlcanwg.html

统计汇总
来源：http://www.sxryk.cn/163hvavomrg.html

================================================================================
来源：http://www.aibaodan.cn/163ilvrweqr.html

按语言统计（条）：
来源：http://www.xuanzx.com/163tqcpmnre.html

Python ......... 252
来源：http://www.xuanzx.com/163mgxixatj.html

PHP ............ 252
来源：http://www.xuanzx.com/163ocmyskqu.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163krtairnd.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163wgikbrzn.html

Java ........... 212
来源：http://www.xuanzx.com/163wwrnegpl.html

Go ............. 212
来源：http://www.xuanzx.com/163aetcqcnu.html

Ruby ........... 212
来源：http://www.sxryk.cn/163qtpnsogi.html

C# ............. 212
来源：http://www.xuanzx.com/163xdmyhyqx.html

C .............. 30
来源：http://www.aibaodan.cn/163eyglsydf.html

C++ ............ 30
来源：http://www.aibaodan.cn/163hfdgxazg.html

SQL ............ 90
来源：http://www.aibaodan.cn/163mcgmrtrb.html

Bash ........... 80
来源：http://www.sxryk.cn/163asaycrve.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163lnztfepq.html

Swift .......... 15
来源：http://www.aibaodan.cn/163qkjaodeg.html

Lua ............ 10
来源：http://www.xuanzx.com/163ijrnyqbn.html

Perl ........... 10
来源：http://www.sxryk.cn/163bvqeaagh.html

Scala .......... 10
来源：http://www.sxryk.cn/163smyccsek.html

------------------------------------
来源：http://www.aibaodan.cn/163tdrgeupy.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163oowkiwyw.html

按章节统计：
来源：http://www.sxryk.cn/163jbgilmuj.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ieabvrto.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163bfguukia.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163vubebrax.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163lbuklmts.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163sdcfiggx.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163cgyesooe.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163lplnbjbt.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163oxoipykh.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163nwfbhqwg.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163svinntav.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163crkdkucv.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ljzxmfkk.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163alegjbmm.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163heztescv.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163uxjwcnxg.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163pldywbnf.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163vzwugbrn.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163hiocjsoj.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163kgzjsrpo.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163ficedmuc.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163ghjaencx.html

------------------------------------
来源：http://www.aibaodan.cn/163drjvmdlr.html

合计                                  2106 条
来源：http://www.xuanzx.com/163hxusctsp.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163jvuvkdhw.html

使用提醒
来源：http://www.sxryk.cn/163bjcnfmrk.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163eflcozaz.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163hsjfwcxw.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163xrzjfqnb.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163msmqpwvp.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163xwebkbgx.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163xxubiiyk.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163hjddhjii.html

================================================================================
来源：http://www.xuanzx.com/163tsgaxphb.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163ldopjpop.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163jkdqpkve.html

================================================================================
来源：http://www.aibaodan.cn/163zinquctp.html

【收录内容】
来源：http://www.aibaodan.cn/163ygrupgqj.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163eusfjsdu.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163sglcqdgg.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163xwatesee.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163utobejdc.html

【使用说明】
来源：http://www.sxryk.cn/163tzjrpnum.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163jczywree.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163buakbwdy.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163mapcktwm.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163sgudqayg.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163yecthuss.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163eiusjior.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163dbiaclld.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163reztswrd.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163tgpamkcg.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163pkpiicbd.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163mnkmgdfp.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163lgbwvauv.html

【文件统计】
来源：http://www.aibaodan.cn/163ozlfmrog.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163slftdnha.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163lismzpfu.html

目  录
来源：http://www.sxryk.cn/163zhwrvytc.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163hfwrtrvr.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163cqdmvgxs.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163jscmspwb.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163qjmbzdsk.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163uklrotrd.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163uucccghf.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163qevfebmb.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163nrjbvpcq.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163qjsstvgj.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wiwqxvpu.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163xzsueent.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163hfmqnqvl.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163rahhhtdc.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163nqvogkdr.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163cuocovnl.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163dbkwjssb.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163gryimyqn.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163erjcjqcn.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163jdgvdekk.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163tlhtglft.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163vjjtekwu.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163uuhqnqgj.html

================================================================================
来源：http://www.aibaodan.cn/163hlfpstcf.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163icirzlez.html

================================================================================
来源：http://www.aibaodan.cn/163iigfurvm.html

[A01] Hello World
来源：http://www.xuanzx.com/163czvzpfaq.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163jtcvtofn.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163htzqrllk.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163lsujzebq.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163yzcsxfxk.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163cnssdrus.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163pfeivglr.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163rhkhgnpg.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163ugabhzgt.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163hoiwxlbe.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163cfvydmgu.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163dtgzzfwh.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163hvskhrjo.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163vkfwmtqk.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163ikrbwbqz.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163gtxyaktr.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163wtuitqwh.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163onuebnac.html

[A03] 常量定义
来源：http://www.sxryk.cn/163ghpwtyri.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163fpzmiluv.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163yezupddb.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163nxagsmgq.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163wttbjmao.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163phzlkkys.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163sgvrjvge.html


<!-- 参考信息 -->