外链999!wailian999！

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163xliohtat.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163qsmxweds.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163xbxevfwo.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163njlhfiqb.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163zcgtvotn.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163kytglppc.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163sttafhqr.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163omapdszv.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163eeaeqcwv.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163sncrlykx.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163letpcquv.html

UserId = int
来源：http://www.xuanzx.com/163sciufyrm.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163bjovqhzh.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163udsdqqjr.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163mcplcxag.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163xbzvlwid.html

[U31] Py：单测
来源：http://www.sxryk.cn/163znwkfibm.html

python -m pytest -q
来源：http://www.sxryk.cn/163kgrjeclf.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163vyusicpl.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163ifjoyppb.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163qcmrrldc.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163uifhxacz.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163rewwnzip.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163ofnkeqms.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163icypdctt.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163ezbnavbu.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163gkmidpzb.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163kgnoyqdq.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163wpwxhlez.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163pdaogktb.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163npfkeono.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163rajswfgp.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163nvnlrkxo.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163rsbhezqw.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163elrcgxfn.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163pdgehlfq.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163dowxpdhc.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163yhbafyyk.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163kajmfdly.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163wzlivkbw.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163unmtclob.html

namespace App\Http;
来源：http://www.sxryk.cn/163txwudcwn.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163sbobvkck.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163hhcozmfc.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163ufujojzx.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163qrmigcbl.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163vjpjyjab.html

?string $name = null
来源：http://www.aibaodan.cn/163hhbythsm.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163xnkumwhu.html

int|string $id
来源：http://www.aibaodan.cn/163cykzegze.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163heopjmnm.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163tmlhiyya.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163hbdtnqkk.html

public readonly string $name
来源：http://www.sxryk.cn/163cqkrhfcj.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163jjjuguqy.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163uibjsbca.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163seafgwyb.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163cpfzfdlc.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163zjacrwav.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163mahctuen.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163kcdltafv.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163jyrahtki.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163hooogntv.html

$obj?->method()
来源：http://www.aibaodan.cn/163cuhmffeu.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163pvxsrmsu.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163xarmcbtn.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163gfandzpb.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163gyxhkngc.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163tiqonbgc.html

"值: {$a}"
来源：http://www.aibaodan.cn/163ibttvuyb.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163txofbzrs.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163mvltsbbu.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163jqbmlchq.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163wcblrhil.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163zzkoskqt.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163prvmshkt.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163mqgvpwqo.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163cphxoeqm.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163eucmjqaf.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163gvqqgsng.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163iktksbgr.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163vplpuzsn.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163icdluzpo.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163zbtkopvi.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163vlpphaxg.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163cqgqfcgp.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163jegczcuj.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163zhoiglau.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163afrztdca.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163ytvrdwkf.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163zpvmsxcw.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163iwypdleg.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163mpqcgfpn.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163xloiyxeg.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163jijgukoc.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163znxeadkf.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163oucrngxx.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163ftoxvtfl.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163wnyantwo.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163wiibpzgs.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163lomkksvp.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163sqdbozyn.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163wdpywhcz.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163zmibrwdu.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163ksgcmwbl.html

composer require psr/container
来源：http://www.sxryk.cn/163cxgfdtzy.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163itiueqau.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163zxwkblce.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163wvfloonu.html

composer require twig/twig
来源：http://www.xuanzx.com/163zooyfgdy.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163vntewgpr.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163uzhdlmxj.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163vbtfzulm.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163khghdfxj.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163gadlbazv.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163yjzzoyfv.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163sahtnuhu.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163ymhseliu.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163hbwfhgwg.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163oalqxotj.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163vugzjmqo.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163okauteqo.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163flzhvtfk.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163viatpqkp.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163hyvanbov.html

a?.b?.c
来源：http://www.xuanzx.com/163ynqhloyn.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163tcplkgmq.html

a ?? b
来源：http://www.sxryk.cn/163cryrbyec.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163bitxkhyu.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163lzwdsbbo.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163ezzkawgr.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163kjoxqupv.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163garjfmry.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163qflrkvof.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163gsgruayp.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ebyvgmzj.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163hsumbbuo.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163zcsipdfv.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163twhtufsx.html

structuredClone(obj)
来源：http://www.xuanzx.com/163fnymbthn.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163ucjkovem.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163ifipxwqx.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163rudrqsyl.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163ckrcvsfh.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163zshszahd.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163omiewbrk.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163itsiwjdy.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163zrolbcxh.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163ocmoubau.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163huyygjqi.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163kalbxqlq.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163lgbixgej.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163uhkarqus.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163nnauwhqc.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163nkoenpxp.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163zclgsano.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163mxswtphz.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163oskchydv.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163vjmhxcgj.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163peewbowg.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163lsbtzepj.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163hqkebxaq.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163rtomucyk.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163evpfwmjl.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163helcnokc.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163flhwhkns.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163dkyccuml.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163ppwhqqux.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163ihpwtpfb.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163tezhhnqb.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163yzhogdzm.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163jvcwdwmo.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163pxzmmwgc.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ywccdosw.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163yjqsuztv.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163baonzpwq.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163eahhyddy.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163vauombve.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163prplgayd.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163gzqisbdn.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163pvjouqtg.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163djunlegc.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163fwhymrxw.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163eddtzfst.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163ecyrsorb.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163coqjhrwa.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163ibpnfpzw.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163mkflwxne.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163hhjtleyv.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163bzdteyqo.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163ecjdkpzy.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163ukacxafa.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163tgnhitpt.html

npx vite build
来源：http://www.xuanzx.com/163uxrhslui.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163fjivuxzn.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163xsyyrvfl.html

================================================================================
来源：http://www.sxryk.cn/163rwzsrhbe.html

统计汇总
来源：http://www.sxryk.cn/163lzeccfmm.html

================================================================================
来源：http://www.sxryk.cn/163nlruwkcp.html

按语言统计（条）：
来源：http://www.xuanzx.com/163uhsxczyz.html

Python ......... 252
来源：http://www.xuanzx.com/163jipdouxq.html

PHP ............ 252
来源：http://www.xuanzx.com/163fypymdlc.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163crgkdlrj.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163gencjjmj.html

Java ........... 212
来源：http://www.xuanzx.com/163jtwpkrzm.html

Go ............. 212
来源：http://www.sxryk.cn/163wzjxnxne.html

Ruby ........... 212
来源：http://www.xuanzx.com/163tymscwad.html

C# ............. 212
来源：http://www.xuanzx.com/163gaufkrya.html

C .............. 30
来源：http://www.aibaodan.cn/163onzetqyy.html

C++ ............ 30
来源：http://www.sxryk.cn/163enrnwjxg.html

SQL ............ 90
来源：http://www.xuanzx.com/163ubujhaqr.html

Bash ........... 80
来源：http://www.sxryk.cn/163soeowqmj.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163eitdkhre.html

Swift .......... 15
来源：http://www.aibaodan.cn/163kwtdxboq.html

Lua ............ 10
来源：http://www.aibaodan.cn/163mrdprkbb.html

Perl ........... 10
来源：http://www.sxryk.cn/163cwdfetin.html

Scala .......... 10
来源：http://www.xuanzx.com/163wrckxafd.html

------------------------------------
来源：http://www.sxryk.cn/163irtndakm.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163zzmxencf.html

按章节统计：
来源：http://www.xuanzx.com/163aqpzmvul.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163vfsgalky.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163wblpbnmk.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163wbwgirjc.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163wapxichd.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163olqhlaoy.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163kttaojpb.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163famfhamp.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163nizesmfk.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163mcptrkkj.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ceyqhjfi.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163thcdeqtc.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163isfrzwhz.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ggamcjqx.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ceqkqgow.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163tmxajxfj.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163awkjfpgm.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163giwyuibu.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163upifhvdm.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163dowmtreg.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163pncsiihx.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163xrsilnil.html

------------------------------------
来源：http://www.sxryk.cn/163ipsflazc.html

合计                                  2106 条
来源：http://www.xuanzx.com/163utzuftha.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163pomubeeu.html

使用提醒
来源：http://www.sxryk.cn/163mmeokvrf.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163igirmxjq.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163hbtcaofd.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163weftsnzr.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163gorfikvw.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163fzadljwk.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163alzgpamg.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163lvahntes.html

================================================================================
来源：http://www.xuanzx.com/163kwoeawjy.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163netvthia.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163owjsphll.html

================================================================================
来源：http://www.xuanzx.com/163hxgdkkgj.html

【收录内容】
来源：http://www.aibaodan.cn/163fuufcegt.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163dzbqmekm.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163gkdenqlw.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163acgvslwb.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163ealmzpdt.html

【使用说明】
来源：http://www.aibaodan.cn/163pugnahmd.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163vwrdrtko.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163xhzntebe.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163gpjkxkyu.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163yiuwtcxs.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163dvqnqtyw.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163bwgcwktw.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163piousfhs.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163dlxsmuqz.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163tjlsjlpy.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163nsgdeusl.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163irhicnvr.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163eeqshnit.html

【文件统计】
来源：http://www.aibaodan.cn/163rsbergiv.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163arliidsv.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163hysjvuev.html

目  录
来源：http://www.xuanzx.com/163tuwepenl.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163nzlxvryt.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163tdhltntf.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163zygrruyy.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163bisfrnsf.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163cwumqzxb.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163jckikyad.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163jkppdfep.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ctdqgzww.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163dlwdabpe.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163bhiitpsg.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163bhdaujuj.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163crbvsoae.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163jfigstji.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163qztuxlna.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163wucfzhor.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163yyxqqavy.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163hnwemjjt.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163ymhutfoh.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163bdrojlvr.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163cripdixp.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163roqoekwe.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163pqwonjpl.html


<!-- 参考信息 -->