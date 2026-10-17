外链999!wailian999！

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163ttxvohmf.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163zynyvfos.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163xtxvmixg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163lsutmjnz.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163azzhlwew.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163hhadqngx.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163fefantvx.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163jyjjizor.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163efntpnty.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163vjisaenu.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163dqaqaceh.html

UserId = int
来源：http://www.aibaodan.cn/163noukwyuk.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163rikxexla.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163ireoithy.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163jdxtzxby.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163lhtiiqaj.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163slrpmlaq.html

python -m pytest -q
来源：http://www.xuanzx.com/163syafqdvr.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163zgaoxrkc.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163hzaetsdq.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163ugjyvbmr.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163fxwxgyzk.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163pyxrrtmi.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163gueznlqn.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163pxvjmhuk.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163iiyapeaz.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163rupfwonb.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163sfanoezx.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163ubmaktel.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163wnejbmmj.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163ksbffakj.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163aelnhyyx.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163vyeauhuh.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163qwrtikra.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163vudnnzpt.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163zixmibgf.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163xvwinwgl.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163lktdfiia.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163gmsjmlhn.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163ojphlaaa.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163rhfbyxfn.html

namespace App\Http;
来源：http://www.sxryk.cn/163dnpkwnyg.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163xtayopnv.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163wviycowo.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163iiqatrpf.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163lbxhveue.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163xbbzfvvp.html

?string $name = null
来源：http://www.aibaodan.cn/163gpjdlnkb.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163cjhshxub.html

int|string $id
来源：http://www.xuanzx.com/163mhurpmxv.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163lxqfukpf.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163uewqkztc.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163aiudgogb.html

public readonly string $name
来源：http://www.aibaodan.cn/163ybfzguke.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163fxfkkbdx.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163ofeefcac.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163ndnibuad.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163gmxnkzyv.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163hqbuakxv.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163iyadffee.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163iggwbgss.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163mnnopwwk.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163gpofeyra.html

$obj?->method()
来源：http://www.sxryk.cn/163itoitcrz.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163yytexrpj.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163mvzhsrun.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163esswhxdf.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ymxyqvlq.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163hnqmbgqk.html

"值: {$a}"
来源：http://www.aibaodan.cn/163jfjlrjwh.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163vlrjdokm.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163idcsupxv.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163bzirpxrs.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163lsyicubx.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163hybspmxa.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163quuzosin.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163zuneucfq.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163igovzuqr.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163zahaknbv.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163dnvreczs.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ydofhkbi.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163uolhefab.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163izwvickg.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163dhqparjk.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163hebghzbv.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163fesmkmij.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163msjaszka.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163xtrxuwql.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163vaaeywug.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163vswnferu.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163esmmbgls.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163ycuvqgtd.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163ufsgcypk.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163twpefnac.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163ymtcebto.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163pdubzzbs.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163jweggygs.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163fqvhgbzn.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163ziqjlymm.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163uqshwppc.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163ctqknnca.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163tcdfivqv.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163ywwfhtie.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163cfrjompp.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163cpogfsof.html

composer require psr/container
来源：http://www.sxryk.cn/163wcchuwqn.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163jihikmtl.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163urefoutc.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163hqkdowgz.html

composer require twig/twig
来源：http://www.xuanzx.com/163yqarevuj.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163ritfdkcz.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163ukiboizy.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163pelfuawv.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163nfgnzrif.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163yxnmlexr.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163uctgaswr.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163eilatyne.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163sralgfpw.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163yyfnuvma.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163xipkouil.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163vfqbdapg.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163fmjmptsz.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163svbizazj.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163oscwzvfj.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163ohandygf.html

a?.b?.c
来源：http://www.xuanzx.com/163smyelfeu.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163izhgrboc.html

a ?? b
来源：http://www.xuanzx.com/163ywmtlumg.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163bgmnuqpf.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163thkpusbf.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163gxearjhq.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163bsmvyyrh.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163tnkcgimq.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163tnrdhzpy.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163zzonukxc.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xdmedyzq.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163rbsqhqzn.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163liobhipv.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163tlffovtj.html

structuredClone(obj)
来源：http://www.sxryk.cn/163uzlvtaeb.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163swdkdtac.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163eqehjant.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163dgibannv.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163hdzvewcd.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163qlifcnru.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163jeovhedc.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ssusdyel.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163fzfkgicu.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163glevikkb.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xpnaavor.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163csxwakte.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163tobxrecu.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163ulhkjrxi.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163bajglfcz.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163kkkdobpo.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163soswwhtp.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163dtilpxwm.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163bkqzybas.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163efcnxnhq.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163gqfojhfh.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163czavjwey.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163cuezcgzh.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163mxqwjngh.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163mgsxbhrw.html

[U105] JS：节流
来源：http://www.xuanzx.com/163rjkstbqr.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163mqdxgwqb.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163djiupvrd.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163fvznzxch.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163fbiedaar.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163pbyftmub.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163unxtfkfr.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163gnmzimju.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163stjqonan.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163sofsvydd.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163pbqffotn.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163ivcicuqz.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163xrzftzol.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163ejgxfmzd.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163vxealaac.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163vgkczmzv.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163jzotwasw.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ftnpuxyl.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163fkbjxuxw.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163fuvmjbyv.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163nrytsxkv.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163cppgkekf.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163fwpwhiaw.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163tffzrnby.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163yopxhzfw.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163ccpknlyk.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163frurvpcl.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163rolcoofy.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163cjzlrhxb.html

npx vite build
来源：http://www.sxryk.cn/163bbsnisrz.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163sgeupahw.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163pospifsw.html

================================================================================
来源：http://www.sxryk.cn/163hcmphtys.html

统计汇总
来源：http://www.sxryk.cn/163dfvvlzgz.html

================================================================================
来源：http://www.xuanzx.com/163qezqgbgt.html

按语言统计（条）：
来源：http://www.sxryk.cn/163vvnbeloi.html

Python ......... 252
来源：http://www.aibaodan.cn/163errpozdb.html

PHP ............ 252
来源：http://www.xuanzx.com/163qkigdclf.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163okoumkgn.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163epbxatis.html

Java ........... 212
来源：http://www.sxryk.cn/163aqehhfwq.html

Go ............. 212
来源：http://www.sxryk.cn/163ndwwdaem.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163xflibilv.html

C# ............. 212
来源：http://www.sxryk.cn/163lrrqbgrv.html

C .............. 30
来源：http://www.xuanzx.com/163njzctzvn.html

C++ ............ 30
来源：http://www.sxryk.cn/163ijpbvcur.html

SQL ............ 90
来源：http://www.sxryk.cn/163nhvwhqkn.html

Bash ........... 80
来源：http://www.xuanzx.com/163ckqkxdwj.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163dppvddet.html

Swift .......... 15
来源：http://www.sxryk.cn/163dpargmig.html

Lua ............ 10
来源：http://www.xuanzx.com/163bgfnjgfb.html

Perl ........... 10
来源：http://www.aibaodan.cn/163bdncpbyl.html

Scala .......... 10
来源：http://www.xuanzx.com/163nyfdhppp.html

------------------------------------
来源：http://www.aibaodan.cn/163bdviumbx.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163ugzhpuek.html

按章节统计：
来源：http://www.aibaodan.cn/163khcnvcvf.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163trzsncfp.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163etaqxzcn.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163roiseftj.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163stzfhbbn.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163mndcdjvv.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163pfzruxkq.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163nhpkunew.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163lruxwvvk.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163yaqhjpra.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163aodwtdbe.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bsgmtfgm.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qjsjmftb.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163sgqenbml.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163abwddlxq.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163kchvscva.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ucfjvvfp.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163gxnvilok.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163eorlviwt.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163aramshgx.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163gukngbpr.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163mqyepzia.html

------------------------------------
来源：http://www.xuanzx.com/163yjkuzbqk.html

合计                                  2106 条
来源：http://www.sxryk.cn/163pctjzlnd.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163lswjbelc.html

使用提醒
来源：http://www.xuanzx.com/163mkdoaefy.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163gjwshmto.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163vgzkqwgg.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163xxtomxvm.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163tlgrktka.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163bosiwbzn.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163licqsqfu.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163vyngxgif.html

================================================================================
来源：http://www.aibaodan.cn/163gzmqsmyz.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163mbdhqoma.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163opmyzfaa.html

================================================================================
来源：http://www.aibaodan.cn/163zkiwoxbs.html

【收录内容】
来源：http://www.xuanzx.com/163mdqqddie.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163cfqshijx.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163qocpeqri.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163xdqiqsrj.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163bzkwyhvk.html

【使用说明】
来源：http://www.aibaodan.cn/163rkvpzvgj.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163edhukkvg.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163iqtndrmk.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163zcgomwtr.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163yboliwkc.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163kxqizpoq.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163bbczbzyo.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163roeclxxd.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163rstsqnno.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163wauhdwey.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163eprrlojl.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163dotorheb.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163uwynbgef.html

【文件统计】
来源：http://www.aibaodan.cn/163xxyrpnki.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163ddxdugso.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163tqsraezn.html

目  录
来源：http://www.aibaodan.cn/163yhrobwxd.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163xlllmaec.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163whpqjcaq.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163fdttiwwh.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163txzihfye.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163ddjuqocp.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163ktwjfdtr.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163bhyvomst.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ymwowazo.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163yeyvbwxr.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163bkshohor.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163kluhuzht.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wzronxra.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163eboffavr.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163pngtvvts.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163zgjhrwzd.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163ldlxhqvs.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vkhkbhny.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163lfyvmxjl.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163qkprpkby.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163zahfaclj.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163zesheuce.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163nfinrqvo.html


<!-- 参考信息 -->