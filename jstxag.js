外链999!wailian999！

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163krxbctho.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163fnjjlgas.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163suitlofb.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163pxloztkr.html

[U31] Py：单测
来源：http://www.sxryk.cn/163xewurjtk.html

python -m pytest -q
来源：http://www.sxryk.cn/163mnvrzjly.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163puwwalpp.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163sjojduov.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163jhghbynk.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163ejdcconf.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163qdjlvkwq.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163tezwysal.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163znvvmvuc.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163mzsgbnrd.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163xbdvlurl.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163fhangpuy.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163kmkbecre.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163wsxdvvxt.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163kwrhuwhd.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163xzuanfik.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163pzkabusc.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163yhnxgukw.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163labkkmoi.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163pcloobzn.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163nrwwktuw.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163tlmhucfn.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163pweamyex.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163wrszqlsr.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163bevmidwr.html

namespace App\Http;
来源：http://www.xuanzx.com/163oeexywyp.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163gofombwl.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163ndhqpznv.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163kdfbbbei.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ywnvmkyt.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163xgkwuvvc.html

?string $name = null
来源：http://www.xuanzx.com/163azwjjwxd.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163uyzirrpa.html

int|string $id
来源：http://www.xuanzx.com/163iosprusx.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163ffresoae.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163rmgszfba.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163uucvxkhy.html

public readonly string $name
来源：http://www.sxryk.cn/163nqynvyew.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163qvirqmtp.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163yegybjww.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163sbgfkkfy.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163pvgnaoii.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163nilouqrq.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163kscaydyz.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163ghxormeo.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163odtcmrtc.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163yrjyryun.html

$obj?->method()
来源：http://www.aibaodan.cn/163nhyuwqnv.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163pptpdajf.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163oegiledv.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163wyjmtdko.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163qxxncwcw.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163vhfeaaoq.html

"值: {$a}"
来源：http://www.sxryk.cn/163ljhglekg.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163nbmltdbl.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163pazfjznx.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163tycfthaq.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163mkqzefhm.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163whiibvpw.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163xsqalpks.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163xesymyjc.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ztmbkwpq.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163zvqbrjhk.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163ycebgakw.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163gzsxkdur.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163dhngbypk.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163keqmzqor.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163vqvggrax.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163dtmuhavc.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163ibslzkoq.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163flpbgyhe.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163ycdeqfkk.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163vlbuemnb.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163lpztrtgv.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163abfyzenq.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163vcyejgjt.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163ybgowcdi.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163qekdnncg.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163luavmbeh.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163zgoxmzer.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163gwympfyc.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163gddaaxgm.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163imozjiwu.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163kjrhuijd.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163slmqtdaz.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163gbktwuus.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163eetsuszj.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163bzomxsou.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163wupsstth.html

composer require psr/container
来源：http://www.aibaodan.cn/163ggivcxks.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163gndfbrzl.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163yhvzraef.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163cqbevzcd.html

composer require twig/twig
来源：http://www.aibaodan.cn/163erysrvio.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163bunfnpiy.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163agiskwyz.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163uxteuqwn.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163xqgujpdp.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163ppvsgbet.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163gfqcktlb.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163bbfuhtey.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163tqvrifiq.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163advkmjnm.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163mgsbomju.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163cjjmvado.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163zrcbnxhl.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163mtgthqwo.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163esubvlhh.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163bupreems.html

a?.b?.c
来源：http://www.sxryk.cn/163vclfqron.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163fxkzukad.html

a ?? b
来源：http://www.sxryk.cn/163szaxzfkc.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163qxpeqjka.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163nuaemacg.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163nyhgazkv.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163iogwgdyk.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163xjexjebe.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163jjwladaz.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163fugcqnkm.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wqfgpanz.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163obmekfoq.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163nekpmnum.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163iqtubpfk.html

structuredClone(obj)
来源：http://www.sxryk.cn/163dffhasay.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163cdxigiyt.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163kkjsqpux.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163avakcone.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163lqubtphx.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163jnqitbnp.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163jjzghkdg.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163cbmzffno.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ggunjssn.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163swbwljsr.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163djapuook.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163khcjhdsa.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163kutzwoeq.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163fqsmtebr.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163npidtcsq.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163toovfssc.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163bwtzwlmi.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163aownaqvq.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163pkiwadah.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163maxvvutw.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163gpaxjcdc.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163scfwrkeu.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163szdbmpyu.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163kggghqbq.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163luzrpamv.html

[U105] JS：节流
来源：http://www.xuanzx.com/163kbsbzvaj.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163kphrtshb.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163kzbusxlw.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163jmwzgsui.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163ufcpelan.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163rfszagpf.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163dtwzwmwv.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163cvvwfarf.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163kdimfxrc.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163hpwdcijx.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163mkhceyar.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163bktpccxq.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163nntajzes.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163oskebour.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163fhtybzci.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163uudopbin.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163mijropig.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163kioymgly.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163rtgbqyqi.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163wbtkasku.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163ztyzoqmc.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163efqrktwc.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163jofsozee.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163yqrhzpqm.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163yyydrltt.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163wiwjfnzx.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163wbuvmafs.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163aotbltrk.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163bcqdlhll.html

npx vite build
来源：http://www.xuanzx.com/163bnuatvjx.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163auhgnolf.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163ikncwvou.html

================================================================================
来源：http://www.sxryk.cn/163wgyuldeu.html

统计汇总
来源：http://www.sxryk.cn/163kppxgilr.html

================================================================================
来源：http://www.sxryk.cn/163xxslmlnl.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163nqqtbsfv.html

Python ......... 252
来源：http://www.sxryk.cn/163jgielunj.html

PHP ............ 252
来源：http://www.xuanzx.com/163mpenikls.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163dxqfamvv.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163mcruzheg.html

Java ........... 212
来源：http://www.sxryk.cn/163nuxnnihd.html

Go ............. 212
来源：http://www.xuanzx.com/163tldwsatv.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163trhqewam.html

C# ............. 212
来源：http://www.aibaodan.cn/163pwgmtjja.html

C .............. 30
来源：http://www.aibaodan.cn/163fwoxzhse.html

C++ ............ 30
来源：http://www.aibaodan.cn/163ukhgjfxa.html

SQL ............ 90
来源：http://www.sxryk.cn/163fjbjpswx.html

Bash ........... 80
来源：http://www.sxryk.cn/163zktzjjow.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163vpkfgkio.html

Swift .......... 15
来源：http://www.xuanzx.com/163qjdbdsyt.html

Lua ............ 10
来源：http://www.sxryk.cn/163rybdzqab.html

Perl ........... 10
来源：http://www.sxryk.cn/163hbudvrdi.html

Scala .......... 10
来源：http://www.sxryk.cn/163xpwcfmrp.html

------------------------------------
来源：http://www.sxryk.cn/163petejvzw.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163khleuygy.html

按章节统计：
来源：http://www.xuanzx.com/163ukmvvfmm.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163aaklracp.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163cjmgwvol.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163mpyeeykp.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163xzcrkfky.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163bqpmsboe.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163dwwiwjwi.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163mhuzdtvn.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163lqvdufan.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163snvibkli.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163erpdkvtq.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163kkqyxmgh.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163hkjhgolz.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163rvlyvuev.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163wknkwxaq.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163wmidpcpy.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qtvmiirv.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163hudgeqdw.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163lvpdcfbk.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163qawbfuze.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163bgqawjcz.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163chykeplp.html

------------------------------------
来源：http://www.aibaodan.cn/163qrredvrm.html

合计                                  2106 条
来源：http://www.sxryk.cn/163cixwarkt.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163mmuluakw.html

使用提醒
来源：http://www.xuanzx.com/163pkudjiun.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163iohnlmbm.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163gaeblgbh.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163zybqgrep.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163xddtsfly.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163jvppiqba.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163hhbtfiuz.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163uicroswv.html

================================================================================
来源：http://www.aibaodan.cn/163mxlwvrrr.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163isuizehi.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163zxnpnpky.html

================================================================================
来源：http://www.aibaodan.cn/163qiilsbdp.html

【收录内容】
来源：http://www.xuanzx.com/163ckmpmuiu.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163smtcixcy.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163kwxhqtze.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163cxylglly.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163grscnfvm.html

【使用说明】
来源：http://www.sxryk.cn/163nxutfalx.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163uifpwpak.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163prldxpjw.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163pvxigvpj.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163mdcrtfhj.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163rfezumkx.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163qrcephrm.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163blfdyvra.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163owddnvcd.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163psdhqilj.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163eblszoye.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163ugcacjia.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163qcesdful.html

【文件统计】
来源：http://www.xuanzx.com/163ttnmakom.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163mototbrp.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163dfewonvm.html

目  录
来源：http://www.aibaodan.cn/163lnkhpchq.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163niyhtdgd.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163dsmobtue.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163wnrgyurn.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163oyomzpmj.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163lneytpfk.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163qqwrdmaa.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163tnrwagok.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163jsjiubbv.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163npcubufw.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ndfhrcja.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163jjdbpsaq.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163qyoekuuh.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163jozhrvsm.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163axmppcxb.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163mlltwpmk.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163ohxwxvca.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163gzpvwfuv.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163xhncsuja.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163mawhztnd.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163dutvlghu.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163fvnthnhj.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163vajvpbjg.html

================================================================================
来源：http://www.xuanzx.com/163dlndxngz.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163krqtbkgj.html

================================================================================
来源：http://www.aibaodan.cn/163tsibcbtc.html

[A01] Hello World
来源：http://www.xuanzx.com/163oulnfwpl.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163yqivuxsu.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163bvofbbwy.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163smiqarbq.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163yjshqflw.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163zphzbzkc.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163eaiwptyl.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163awiawghl.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163wiyxklux.html


<!-- 参考信息 -->