外链999!wailian999！

[U33] Py：打包发布
来源：http://www.xuanzx.com/163dkcrzbfr.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163xcffqdyc.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163zbjnpfzp.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163jvuvkqkb.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163binpyybp.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163csxgjfkq.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163ykfnyzjd.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163uhxoqqel.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163qytpnytw.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163pemnwxca.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163tcjfjcue.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163fsdcbpyd.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163gszmpmyc.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163pwxsivte.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163nzuaygoy.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163peouqaop.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163zflskgel.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163dtbsvnzw.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163rcrjqpyg.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163xrpfvprd.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163eaceqdkp.html

namespace App\Http;
来源：http://www.xuanzx.com/163cwkciymx.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163nbjlnffk.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163bymttkvx.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163cwhbfojw.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163yvebftox.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163goqrippm.html

?string $name = null
来源：http://www.xuanzx.com/163gtepkrel.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163fuanxota.html

int|string $id
来源：http://www.sxryk.cn/163prpxxgga.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163haclyjlw.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163ebmzdzox.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163ukkzbgbx.html

public readonly string $name
来源：http://www.sxryk.cn/163nrqxgpgv.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163xwyciadk.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163xufqngtq.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163bclbfwcj.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163ctlmdggx.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163lgmxzavn.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163utnavsvn.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163winqsvfd.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163uocrjhzz.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163aubaywnu.html

$obj?->method()
来源：http://www.xuanzx.com/163hbbygljr.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163scuscthf.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163dqzmefkx.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163kyijgqct.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163oaxrynuk.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163vdppsplu.html

"值: {$a}"
来源：http://www.aibaodan.cn/163sebwugoc.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163wkbuwraz.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163ezvuzudj.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163usvdsurh.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163twxkxiir.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163cjfocbdz.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163nlvvhkci.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163lqminmfy.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163teeyqiuu.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163ydxumxak.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163lwefvivf.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163sloxphxf.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163cjhhmyun.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163kimuuauk.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163dfmivcjy.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163mivlnksb.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163pakvcisx.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163syjkprrd.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163ayhmvhmv.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163ylnodxjx.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163mdvpyijg.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163svghfzlp.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163hgkedptr.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163bddejoqp.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163bhmhaphf.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163aosmiflm.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163tywzqxlq.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163yfxjdjph.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163rwjvqemy.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163mjhiqhrs.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163iifruxkr.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163sjvnhucc.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163ztgytrpg.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163suzqczwb.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163ukmvekgt.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163xofouckp.html

composer require psr/container
来源：http://www.aibaodan.cn/163frldhhjx.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163ixnuegvh.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163agfvidwp.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163swqhkfeb.html

composer require twig/twig
来源：http://www.aibaodan.cn/163zkeliotf.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163atifhthz.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163uumhhqjt.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163mmgbvjxo.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163yuimgyhz.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163ckklagch.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163ypiapwxh.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163iqodugcy.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163cansqoob.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163fzfnzonh.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163zjhxuywt.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163wlrxwhvn.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163oyigvktd.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163kcslachp.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163uvneaixd.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163ioqddqzx.html

a?.b?.c
来源：http://www.aibaodan.cn/163pkxawhej.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163ftrkliwp.html

a ?? b
来源：http://www.sxryk.cn/163jfgcezvm.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163qefcrpqa.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163medzymvb.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163hkfinkxh.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163fssiorfq.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163aoguyqto.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163hklmredw.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163rdwxwgjs.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163zpmwsqhk.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163htleryhz.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163afcpiwwp.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163cglcuuoi.html

structuredClone(obj)
来源：http://www.xuanzx.com/163owbpptnx.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163kmvdsapd.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163vgouhukk.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163zpbhyrob.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163dxkqioka.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163oxtgarnv.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163lbscyvjw.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163qtnofmqd.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ueyoyncc.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163ddweshrf.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163kmbnrshx.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163mezvgtuu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163dbtwmial.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163vouhpuai.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163uqeoabne.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163yvatqtjg.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163mtousxdp.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163bumfqmzh.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163nxhewmfc.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163codcuxmw.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163qtcwawyv.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163mjdbtatd.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163tpbjkwrn.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163daurfudj.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163qnixcaco.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163ypopnrcc.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163rypzlbky.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163yvizlmal.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163zsymacrw.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163numqdzsq.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163egfgukwl.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163qkslxomo.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163myohdefs.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163zcsfdzhf.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163bgbtwnjz.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163cuqgzoye.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163crpzyjwx.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163cmwqgkmm.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163cskyhqrp.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163npxtyxkt.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163mzzqpbzm.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163agvcbbyj.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vsmcrobl.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163zcpfjixd.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163jjjkxlmy.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163pvslqwyv.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163yjyftymb.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163qmqcrcam.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163eeiffhjl.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163iegkwmox.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163giuciqiy.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163arcbcvqz.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163cxwyscam.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163odfzmemy.html

npx vite build
来源：http://www.sxryk.cn/163gmyuapfd.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163ehxwnhry.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163suqdpgzo.html

================================================================================
来源：http://www.xuanzx.com/163ftoajzmy.html

统计汇总
来源：http://www.sxryk.cn/163krfcrzqp.html

================================================================================
来源：http://www.sxryk.cn/163pgnxrfau.html

按语言统计（条）：
来源：http://www.sxryk.cn/163oqvijgel.html

Python ......... 252
来源：http://www.xuanzx.com/163womuiecf.html

PHP ............ 252
来源：http://www.aibaodan.cn/163hutbeisx.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163whmnkxsi.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163gxbjwnaj.html

Java ........... 212
来源：http://www.aibaodan.cn/163bhthukuv.html

Go ............. 212
来源：http://www.xuanzx.com/163lqnoqjat.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163fjvwsvte.html

C# ............. 212
来源：http://www.xuanzx.com/163ylypcran.html

C .............. 30
来源：http://www.aibaodan.cn/163hbztqcwt.html

C++ ............ 30
来源：http://www.aibaodan.cn/163bytzrext.html

SQL ............ 90
来源：http://www.sxryk.cn/163fbhrocwl.html

Bash ........... 80
来源：http://www.sxryk.cn/163cffqpfvu.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163jyyyzezn.html

Swift .......... 15
来源：http://www.aibaodan.cn/163prgrbuce.html

Lua ............ 10
来源：http://www.sxryk.cn/163embeidtw.html

Perl ........... 10
来源：http://www.sxryk.cn/163sazpsnmr.html

Scala .......... 10
来源：http://www.sxryk.cn/163mpgxlnte.html

------------------------------------
来源：http://www.xuanzx.com/163iyxucszq.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163pwucjuav.html

按章节统计：
来源：http://www.aibaodan.cn/163dzjdcrnm.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163hgmmjron.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163snzghajr.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163tonndybq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ahuyrhcm.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163znvflwze.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163fokpeuui.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163atktdrqm.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163npeetlhy.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163eigzpeuz.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ursvkoum.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163yvznarrs.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163pimybixg.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163xxkjftku.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ojyvrydb.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163aonemlee.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163oiibwzzc.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163cnucmyjl.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163oeludxkc.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163jluzerxp.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163gwtdunte.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163slkecsqq.html

------------------------------------
来源：http://www.aibaodan.cn/163nepemplv.html

合计                                  2106 条
来源：http://www.xuanzx.com/163yidyfvjj.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163qmgtayiz.html

使用提醒
来源：http://www.sxryk.cn/163tyjjmbwf.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163bfcwhtpm.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163cksjuryx.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163mbphldxy.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163botumbri.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163gsheezui.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163vzbqfvql.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163emlgznsi.html

================================================================================
来源：http://www.sxryk.cn/163ytdfnfcb.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163rkfnfgaa.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163pujsfwgp.html

================================================================================
来源：http://www.sxryk.cn/163emcymtqd.html

【收录内容】
来源：http://www.sxryk.cn/163cchvwyoq.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163tovvjdfr.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163bovspleb.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163mexspeah.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163xtycxrsg.html

【使用说明】
来源：http://www.sxryk.cn/163yfjgerhq.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163zbsxgrqc.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163aiejpbie.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163pqkhaczb.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163cyuzkyns.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163kpwggung.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163cyqahqil.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163hchjytxe.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163xrvimnhm.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163winbujkf.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163bjvqeuci.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163dvhvnokn.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163eplhfznh.html

【文件统计】
来源：http://www.sxryk.cn/163jgawutwn.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163dkvyqhvy.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ktabnlbf.html

目  录
来源：http://www.aibaodan.cn/163auldjqki.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163mbydrbhj.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163vygqarey.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163zhjrxqmm.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163zszyedvu.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163rmfobodd.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163vcaljjyz.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163bieihxlg.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163iklsdnfv.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163wkysasfx.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163dhdvpmwd.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163orazjsni.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163svjsoilb.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ddjmcdsb.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163jbedqcng.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163brxhwpel.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163tvzvprnv.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163zlgjqnch.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163nmsbsnps.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163rpivmvul.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163hrimbhtw.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163cmvlwqot.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163hebfudlq.html

================================================================================
来源：http://www.xuanzx.com/163gqgtrffw.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163gyiheauq.html

================================================================================
来源：http://www.sxryk.cn/163detetgxp.html

[A01] Hello World
来源：http://www.sxryk.cn/163ithipqdm.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163spgapqyl.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163vgcysspf.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163tcvcqwlc.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163nbgoealb.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163qeikrdjw.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163dxdoyten.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163zntrgals.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163ojbvimgp.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163norsrcsh.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163sjuuxayn.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163stwpyiui.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163iksxxrli.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163jppmvslz.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163bvysffcq.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163axydyukw.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163uikdwnno.html


<!-- 参考信息 -->