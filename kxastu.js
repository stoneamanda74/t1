外链999!wailian999！

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163pukrcrqw.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163pznvqsdf.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163vcdrjefx.html

list(zip(*m))
来源：http://www.xuanzx.com/163xrwjuzxm.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163owkgtrvx.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163qgkctumm.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163eyvlmdxc.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163errngxtw.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163pgglwdzy.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163cokkmjcz.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163qybbeijb.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163apjdgnuy.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163voyyhepd.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163xecbtjfw.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163rwvmrdcv.html

UserId = int
来源：http://www.sxryk.cn/163qpxkutjq.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163zpykhgnq.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163vqzmuupk.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163wqgudjat.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163csvocxgd.html

[U31] Py：单测
来源：http://www.sxryk.cn/163vxmthpzw.html

python -m pytest -q
来源：http://www.xuanzx.com/163dgwyfiba.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163pgcdgvgf.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163ucfzuipk.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163ongisycy.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163spuxhvqp.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163nlzgchxi.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163pkwnmlkw.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163ljebbyav.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163bxubxgat.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163wmffesgi.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163pwtfcjix.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163qwuyqarp.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163nekqztiu.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163cpzecura.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163ohfvykau.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163gvlrfykf.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163dhudhhnf.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163lnedxnwd.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163pltbpewo.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163fndxkfdr.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163yslfhuow.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163cjmcxymn.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163cpupbjzg.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163fgeygxoh.html

namespace App\Http;
来源：http://www.sxryk.cn/163htipgqpu.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163oeeujnyx.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163edgnzbww.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163kmmurtqj.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163inaeeuif.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163bdvqwgpi.html

?string $name = null
来源：http://www.sxryk.cn/163kindjaey.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163jwutlqvy.html

int|string $id
来源：http://www.aibaodan.cn/163nyasxxot.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163rmdlhspv.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163ihtepohh.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163mctfrnil.html

public readonly string $name
来源：http://www.sxryk.cn/163uarlovnw.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163cmzdtwrh.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163llfpnxlc.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163jmcptflf.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163esifsrwb.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163ywibdryr.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163hkzpomwz.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163knwpobtk.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163tqpveivn.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163wsfxzaxb.html

$obj?->method()
来源：http://www.xuanzx.com/163ltgapybk.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163lwpregxu.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163miuzswhb.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163ejueyhlv.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163umcufsjp.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163bvgseakw.html

"值: {$a}"
来源：http://www.aibaodan.cn/163veenbgmw.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163nuiajlvd.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163shzzyurf.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163valcujrh.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163loxjtejm.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163uggkfhds.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163okaxovox.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163mgwskjrh.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163bsyokkqq.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163rixpjkdt.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163hnzhchdz.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ejnwwlxo.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163rlcwhkkl.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163sfzefcay.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163pnejcuyo.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163sjxseebi.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163zvbvvkig.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163zbcnhjrv.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163pfzutlbh.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163sgdeegzc.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163krpdrvhz.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163vpaehbgj.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163vybspyfo.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163cvuyhnzy.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163yvryfryu.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163onsmzcjz.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163xgpslhnp.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163ukhgtorf.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163fqtxnjbh.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163rklsmwau.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163fivcodth.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163haxkrsaw.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163chzeytev.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163dugwiwlq.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163ukducbth.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163nbedtwer.html

composer require psr/container
来源：http://www.xuanzx.com/163onttdxht.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163zyhsaocj.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163ljihmwoq.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163fnklotrf.html

composer require twig/twig
来源：http://www.aibaodan.cn/163lneakrus.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163gpenurpp.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163rjdyqxrr.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163zobvgtcp.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163zibceuog.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163dpydfutk.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163xwevqsyq.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163cbtsvnpr.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163lszbuhdx.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163uggkbksr.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163itpppiwn.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163ufsddkhx.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163qjqccvpv.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163oxddella.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163xyjougyx.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163ukiitsgv.html

a?.b?.c
来源：http://www.aibaodan.cn/163nopocmqm.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163qagxbduq.html

a ?? b
来源：http://www.xuanzx.com/163brkzhafo.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163cydpkndp.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163cnxndwsb.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163edjbistm.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163oniggcvw.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163nkihaiof.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163rgxdrssk.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163dbnurtek.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163bljqwrdn.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163jkobtiar.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163faxwvrmn.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163oduvnqek.html

structuredClone(obj)
来源：http://www.xuanzx.com/163mkaqvmeu.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163xzmibhcu.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163gskvtils.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163misbldgs.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163cvmbsweo.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163ziuuxovf.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163ovwpvcwn.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163vrhmymqd.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163rygdwduc.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163dbpuarph.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163vvcpxpbq.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163imktqyst.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163sizjmwon.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163rsgecrgn.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163jydidhra.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163uyphfsfr.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163xyyhimna.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163gcpwslax.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163nczoljvy.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163sycolxsu.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163ssclojht.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163lxjhumse.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163itpunvtt.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163xvgwbnjz.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xbmnnpbs.html

[U105] JS：节流
来源：http://www.xuanzx.com/163uwvgkpct.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163tqolsirg.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163kvdktbbz.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163tclvpkgx.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163vcloeqhx.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163mkctqeyd.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163ledztsss.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163drfcidof.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163gywyjdml.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163xrnmyhfb.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163tjtplewk.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163uhnruvrr.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163coxiryql.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163kihdhbwk.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163xvtwtjgz.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163cwlwjhtr.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163xlflvvsk.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vyjgwbll.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163qwrclxzu.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163umkcunoy.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163luwqgekk.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163eelldsat.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163bgdjkmpz.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163oqmhsexj.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163titwigof.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163oqgwynwa.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163lhabxvnd.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163kydljswn.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163myilntdd.html

npx vite build
来源：http://www.sxryk.cn/163sujzprrp.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163lbigirtk.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163eoydurin.html

================================================================================
来源：http://www.aibaodan.cn/163ptmvqeyk.html

统计汇总
来源：http://www.sxryk.cn/163dwyoiwws.html

================================================================================
来源：http://www.sxryk.cn/163sionvmmo.html

按语言统计（条）：
来源：http://www.xuanzx.com/163udtplebj.html

Python ......... 252
来源：http://www.xuanzx.com/163vvlmjbih.html

PHP ............ 252
来源：http://www.sxryk.cn/163upykfmiz.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163rscpviho.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163quzwymtf.html

Java ........... 212
来源：http://www.aibaodan.cn/163waduxxta.html

Go ............. 212
来源：http://www.xuanzx.com/163ncduoonq.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163ocebxovh.html

C# ............. 212
来源：http://www.sxryk.cn/163hilitiwk.html

C .............. 30
来源：http://www.xuanzx.com/163xmpxtnic.html

C++ ............ 30
来源：http://www.sxryk.cn/163terdmjiz.html

SQL ............ 90
来源：http://www.xuanzx.com/163lzzyhppe.html

Bash ........... 80
来源：http://www.sxryk.cn/163xhfbzhij.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163wynicjgq.html

Swift .......... 15
来源：http://www.sxryk.cn/163ryvhxago.html

Lua ............ 10
来源：http://www.xuanzx.com/163rqdoeton.html

Perl ........... 10
来源：http://www.xuanzx.com/163xgahjhgr.html

Scala .......... 10
来源：http://www.xuanzx.com/163tefsbiqo.html

------------------------------------
来源：http://www.aibaodan.cn/163oncilfdc.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163jvvthtpo.html

按章节统计：
来源：http://www.sxryk.cn/163oyibylmh.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163gxapjtyy.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163rcuxnerq.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163mgbfwelm.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163fiebinix.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163dhhozaox.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163yfvaqzhe.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163myqvmeco.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163nrkssgbq.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163gnvlhrtv.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163dbcevqei.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163oxqumsxr.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ysfcgiad.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xapgjszc.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163qieiqrei.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163gfxfkdan.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rdgtzuxy.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163zaqgpemz.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163sbxwvrga.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163bmcqdcer.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163qnbwuvrn.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163pixbmqeg.html

------------------------------------
来源：http://www.aibaodan.cn/163vyyhnyxl.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163rbzqdplr.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163vjvlupqo.html

使用提醒
来源：http://www.aibaodan.cn/163ifjtkgot.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163jqyhltdg.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163bcawwvmn.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163klmvzmrx.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163vvtbbfbo.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163ylvpkxhk.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163rcloezdw.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163fgoytwlb.html

================================================================================
来源：http://www.xuanzx.com/163mynfiqvm.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163hntdsijp.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163shljhdne.html

================================================================================
来源：http://www.aibaodan.cn/163zkdzeqoq.html

【收录内容】
来源：http://www.aibaodan.cn/163caejdlze.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163hmwofyda.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163sptgynbb.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163wbbkluqb.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163pelutkeq.html

【使用说明】
来源：http://www.aibaodan.cn/163rnrcgmwz.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163qezxfwcx.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163fdlmmlbw.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163pvwdtklr.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163iyojulyb.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163cjfovetd.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163xbagewdu.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163rkqumusi.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163cmqnkeyc.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163pctxcsbh.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163davxedrc.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163epuctslf.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163lpnjjmah.html

【文件统计】
来源：http://www.xuanzx.com/163rfhhniuz.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163aortjmdz.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163yxtbrnra.html

目  录
来源：http://www.sxryk.cn/163rxreizkh.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163bxvundbe.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163mpwqfqtd.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ajtpqtoe.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163tehkfmgq.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163mfqlhxmy.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163aoidenbr.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163ljcmvixm.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163imxkjyzq.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163xphqwzxe.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163jfobqupb.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163vdgszxkd.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163znkfeuum.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163dursefvw.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163fxvwfjwc.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163fcqwteuv.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163akvqfpan.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ijbafqtn.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163drjifash.html


<!-- 参考信息 -->