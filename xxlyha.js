外链999!wailian999！

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163mnutwxgt.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163lenrovwj.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163arxqroqu.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163invrjrql.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163wxcxvclr.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163dngvhoib.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163uqpkylnd.html

list(zip(*m))
来源：http://www.sxryk.cn/163omipjucu.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163izyezwwn.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163hyvikqru.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163plymagas.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163ifkvoxyp.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163qgisbppe.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163pdqznhtu.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163pxbuwobl.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163bjgwfcbb.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163ahuxnxkt.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163yuiwhqcu.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163uvjtblsj.html

UserId = int
来源：http://www.aibaodan.cn/163pvifqllk.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163eeuyjgkn.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163nfeypzbz.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163vepliuxv.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163mxbpxzkz.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163tqmepqbw.html

python -m pytest -q
来源：http://www.sxryk.cn/163qzaspoxl.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163wtbkbipe.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163aumfixzw.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163atyumdmy.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163uwgmsxwk.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163wpncrojg.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163jxtwfkpn.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163bsekdjyg.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163jckkkfve.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163yevkfxxo.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163ckvgjvje.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163ciqvckei.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163cabhzgoa.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163cjykyqzu.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163hsizdwrg.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163oywiympi.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163pisrynug.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163mjcbqqtb.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ywqtzxib.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163khimvahz.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163utlhirue.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163bmnoiyya.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163wayamyac.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163zizcajao.html

namespace App\Http;
来源：http://www.xuanzx.com/163rknxjbie.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163ufiuwtnm.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163invlasnk.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163meeyhmwk.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163xyxyumem.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163hsntnqkv.html

?string $name = null
来源：http://www.sxryk.cn/163zoxyrblg.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163getawahr.html

int|string $id
来源：http://www.aibaodan.cn/163cwqyyisr.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163auhzvoir.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163ycpvwhey.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163gfpjodll.html

public readonly string $name
来源：http://www.aibaodan.cn/163wvumbiaw.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163qcvsskqo.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163nirtvlbd.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163umjaadjp.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163hepoazoo.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163ycvrarrp.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163dqhpmfwq.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163mamgtabe.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163dewnecnj.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163tgyczgmq.html

$obj?->method()
来源：http://www.aibaodan.cn/163encqtqad.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163rndobdbu.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163btnotrdl.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163xoxvshim.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163znudzyin.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163yfqpjsdq.html

"值: {$a}"
来源：http://www.sxryk.cn/163gvlugyyf.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163vlhbilhi.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163ysyqxlat.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163fwwhaghi.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163faubwkfa.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163buhvaitj.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163fusrtbke.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163zbdvsutr.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163rogqgzlk.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163texgsjbr.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163mochomih.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163taizmoyp.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163yprbfwrx.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163ebmwiboj.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163drfxyscj.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163eowmoaue.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163hwpinmcj.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163zcphddjk.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163vmfxqfqa.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163fstdyktw.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163soyycwbd.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163rcxrlkxq.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163lmemigon.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163ydwxorar.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163vimorfei.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163hwanjhmr.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163ejeerqac.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163qkhkrfjr.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163jirvtviw.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163scwynqsk.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163tmtlqctc.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163pcchpwkd.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163gbxdgpiq.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163vcvcklaz.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163ipgiqqfh.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163idyyotpt.html

composer require psr/container
来源：http://www.sxryk.cn/163obptertx.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163ibtmovbi.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163uxprldjo.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163ccyqccvl.html

composer require twig/twig
来源：http://www.xuanzx.com/163vozhlutl.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163ohrbmexl.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163anfqlisa.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163uedaarjl.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163bmlzcejs.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163meccapdb.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163pwzxerdb.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163prfdetrv.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163iicpaejl.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163zeqjurqk.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163njckdfus.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163xcuartaq.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163kcxeszmj.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163cpgghusn.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163zsldsdca.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163apxskfoh.html

a?.b?.c
来源：http://www.aibaodan.cn/163llojgqdi.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163garmmqkh.html

a ?? b
来源：http://www.sxryk.cn/163csltxnyl.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163wzekrmnf.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163dewfhlzd.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163ejbrkdga.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163rdtmornn.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163meoomhoy.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163xqvnkceg.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163doyvfoei.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163pforuwus.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163udpalzta.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163qrfzolln.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163ifevaavz.html

structuredClone(obj)
来源：http://www.xuanzx.com/163rrxitvph.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163dyjfliit.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163dajqyiui.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163bbkwjkvn.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163lvceaoqv.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163gkvbwwwr.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163heugkami.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163zvlejipj.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163cabnydsv.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163ypzaexgy.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163dbxtppma.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163qwqxawik.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163txcgqbyp.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163tpeyubdr.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163yzxqfslp.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163qttzdlti.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163pgxfgvxu.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163cgeixztz.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163xymchxvc.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163azvhnibx.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163eyhjjddq.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163lfgrygho.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163bwzjwumu.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163qjenovsz.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163tjnklhlb.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163vvlmsdnw.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163ikeiphpv.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163kdiveboe.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163oewkgymi.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163penfocqz.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163dyonhkjy.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163tieckexz.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163mkumrkyb.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163luwkdciy.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163bynojcol.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163tpdssofj.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163ogmeimoe.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163dawtilyt.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163osttcvry.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163fxwxzgqp.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163flvoijml.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163tzcqqmqx.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jkncbwqu.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163qogoccva.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163cprxlvtx.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163optmhyow.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163rxjzesyu.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163hbkvsmvd.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163oixknyxp.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163kvpkjuur.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163mjzxayon.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163rudyzrjl.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163pawgtonn.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163cgqzsjnx.html

npx vite build
来源：http://www.aibaodan.cn/163hjvacble.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163rbvvznyx.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163rnjfxqhx.html

================================================================================
来源：http://www.sxryk.cn/163mkguvjev.html

统计汇总
来源：http://www.aibaodan.cn/163mszvtvjg.html

================================================================================
来源：http://www.aibaodan.cn/163mqlrreva.html

按语言统计（条）：
来源：http://www.xuanzx.com/163lolwfgqq.html

Python ......... 252
来源：http://www.xuanzx.com/163damhomcd.html

PHP ............ 252
来源：http://www.aibaodan.cn/163mwpbvuhq.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163tysgoezp.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163bzzdzdxf.html

Java ........... 212
来源：http://www.xuanzx.com/163dxmkrxed.html

Go ............. 212
来源：http://www.xuanzx.com/163ywszjqye.html

Ruby ........... 212
来源：http://www.sxryk.cn/163aruugqkp.html

C# ............. 212
来源：http://www.sxryk.cn/163nlwsqtqr.html

C .............. 30
来源：http://www.xuanzx.com/163przbujne.html

C++ ............ 30
来源：http://www.sxryk.cn/163ydesrlns.html

SQL ............ 90
来源：http://www.sxryk.cn/163qjxkezoc.html

Bash ........... 80
来源：http://www.aibaodan.cn/163icyagmri.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163ytztruon.html

Swift .......... 15
来源：http://www.xuanzx.com/163xiigxyta.html

Lua ............ 10
来源：http://www.sxryk.cn/163vgywjxfm.html

Perl ........... 10
来源：http://www.xuanzx.com/163ohzhbtcc.html

Scala .......... 10
来源：http://www.aibaodan.cn/163xxmsdsur.html

------------------------------------
来源：http://www.xuanzx.com/163afqkbbgd.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163phmrpbzq.html

按章节统计：
来源：http://www.aibaodan.cn/163afltkqtc.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163twtepmef.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163dskubrvn.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163lrwlatfc.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163qgwtfllv.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163fvyjivzi.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ygfsvalk.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163eroyebzz.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163eugjsmei.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163nddzminz.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163fkfftryp.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163wdrbtaci.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163kzpllqpi.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163erjrmhze.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163fgbmejuy.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163wialzrrd.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163tyxhtsrn.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163lfcagiiq.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163cvuzwoux.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163fxrtumbr.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163gcaeygvy.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163ytvtgaea.html

------------------------------------
来源：http://www.xuanzx.com/163vjgzcgnf.html

合计                                  2106 条
来源：http://www.xuanzx.com/163fwtwpihh.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163qolakgmu.html

使用提醒
来源：http://www.xuanzx.com/163qebwwsld.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163jrqufykd.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163uetbtvgd.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163thnzestz.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163qedcalkf.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163pkbtnmle.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163pnifvclr.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163dqlfbsjz.html

================================================================================
来源：http://www.sxryk.cn/163jqyesvdi.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163mkxsaqxg.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163oxfqjnba.html

================================================================================
来源：http://www.sxryk.cn/163xuoeznyu.html

【收录内容】
来源：http://www.aibaodan.cn/163epgellfj.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163fqmhoyso.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163ckjuaosi.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163bnzrrtjc.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163yuizlcpk.html

【使用说明】
来源：http://www.xuanzx.com/163pbuodtbs.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163qzsrxvyb.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163ymeqvtoz.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163leigldpy.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163wybfbjpy.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163fvdxfbno.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163qurxtoqf.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163xthhnbfw.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163lguebrfo.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163cvzhhbof.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163ixqllxhs.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163jhtctrhq.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163ribqdbha.html

【文件统计】
来源：http://www.aibaodan.cn/163zxbvuprv.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163grqskpyf.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163idqliqjw.html

目  录
来源：http://www.sxryk.cn/163xsreheip.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163hxrqntqj.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163nohqnajx.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163gflaonso.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163dmgekdzd.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163qbnfvpdb.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163jzitwsuz.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163sazcgphz.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163gphfpdbt.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163afsogdwb.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163kgsoiqtz.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163gvunochj.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163xjbrrkoz.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163cqlomqgd.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163wgybagri.html


<!-- 参考信息 -->