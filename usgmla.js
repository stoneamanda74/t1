外链999!wailian999！

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163ywpiflgg.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163dbkbdled.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163nfheuudn.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163kfcoaskh.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163dtqduhmm.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163trrvekgl.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163xkmcnuwe.html

list(zip(*m))
来源：http://www.xuanzx.com/163topzzeoh.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163womcuver.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163ziunywag.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163chpircsu.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163gmhqyoud.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163vfbvjrvo.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163zangynjf.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163fyjvkorv.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163uxcrhdfm.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163lwomzmhy.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163gqksrfih.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163chrwzjxl.html

UserId = int
来源：http://www.aibaodan.cn/163nfrwvjmm.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163tybcaxiw.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163cwlnqitp.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163fsjiitfr.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163gqdijhsu.html

[U31] Py：单测
来源：http://www.sxryk.cn/163mpqzlvoe.html

python -m pytest -q
来源：http://www.sxryk.cn/163ectmhfel.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163szbnoucv.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163xlpaoixb.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163qcutvshp.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163xmkoqgfm.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163wipiqnyj.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163xncbbqyh.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163cshvbpqs.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163wmjhswar.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163igoectjp.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163iofbltjo.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163izcblkzj.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163ywdhkncr.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163hxlxizck.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163pvkvdxsf.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163aunbdzpk.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163gulakxuc.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163wqdjeuuk.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163bdqgrsen.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163nzldbibx.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ytlooqnj.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163lixycuxt.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163wskpmrbh.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163tvtdzhgh.html

namespace App\Http;
来源：http://www.sxryk.cn/163wtuortrb.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163jwllgnuh.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163lktwclci.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163qmsubhxh.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163toaysezj.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163fxxutinx.html

?string $name = null
来源：http://www.sxryk.cn/163hpaavwax.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163znlvhlxs.html

int|string $id
来源：http://www.xuanzx.com/163lkafdvys.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163gmsppvmx.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163hnwigizk.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163miqiuplf.html

public readonly string $name
来源：http://www.sxryk.cn/163qitvpyyg.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163txzchdrz.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163fozdvtxd.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163soduyyav.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163mhlxgldc.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163twpdpmtm.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163yayofdrm.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163mofwbtsi.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163ucomnszd.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163mjyftpdo.html

$obj?->method()
来源：http://www.xuanzx.com/163ztvxgkbq.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163owlfstmz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163dratwiec.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163houfetsj.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ztodsfvk.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163aiqbyjzm.html

"值: {$a}"
来源：http://www.sxryk.cn/163bqdannmd.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163ewnpqztp.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163ecybrcvq.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163mbsqkwxw.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ukhfeggm.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163scltdafo.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163dedgycmd.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163muueligs.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163zrvstdut.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163yenltjua.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163regpdyjy.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163shsiiwko.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163vqdajopx.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163umkzjqyk.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163ohtgoitt.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163bsawbzjz.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163nogdpvjs.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163mixhnvvt.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163rgdytpdv.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163vbqorqmq.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163wwswurpi.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163orftpsal.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163wayqdtmd.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163ufamtvsy.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163hpcmhnta.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163qdxhpemn.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163qkzakepo.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163damfltrn.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163yicqytbd.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163qjoeuzty.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163nvzqtlfj.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163soxmbytb.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163ypkhhybg.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163hbclqojw.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163hpmycypu.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163psdeihet.html

composer require psr/container
来源：http://www.sxryk.cn/163bvubsmtp.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163solqvhph.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163tztozbtn.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163pizdgkgc.html

composer require twig/twig
来源：http://www.aibaodan.cn/163eeucyqgn.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163qxbedlan.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163vrelzquc.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163vnebgbxm.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163fnziiizh.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163kujlspan.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163khgmabct.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163osixrurk.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163mzkrdatp.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163qhphowih.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163hhbdyfol.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163ruhzyths.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163cgbfceci.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163inxrfwst.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163yrcnnejh.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163tuqvvkbz.html

a?.b?.c
来源：http://www.xuanzx.com/163qvaessyg.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163sbnemzyp.html

a ?? b
来源：http://www.aibaodan.cn/163ftalgtht.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163znrdbtxb.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163cvbmxqvx.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163iixsfhle.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163zezdpxfb.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163bmwqcugz.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163vbaccczm.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163qipbtnbp.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163tnnriixd.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163vuimpfpe.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163fzfaaraa.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163kkflsfnz.html

structuredClone(obj)
来源：http://www.sxryk.cn/163swnonmcf.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163cyywkmtl.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163frsspqmd.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163cgrwtnyj.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163mlqiobtq.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163vazkdpsf.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163gpjllvpd.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163dglyczvy.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163wbgxfady.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163toxoydyv.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163omqhejmz.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163rirputfl.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163lfoucmas.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163bsxfvlxu.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163ymlkdbdk.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163ewtnzmnk.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163kihyfwln.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163orsxuhbk.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163bpzxnite.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163zuylwyfk.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163gpaanqwi.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163njppxfcz.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163alvzdlju.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163arzcpdme.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ejskvomo.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163vkxkqtws.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163skzirprn.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163tsipsnnn.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163ysuqsoti.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163zszfisdb.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163ilbeiqyd.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163rbrdsfxq.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163dbaxkaru.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163yxgmftkb.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163xrbjwxti.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163inplmjlo.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163wytpllmv.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163mzkakwon.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163gpllrjfn.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163neotvanp.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163oyyibhir.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163ldksljgn.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dvhilzcl.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163gdtwvqub.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163cojdvgtn.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163ihyapetv.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163uuvzubsy.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163fdrwwbpt.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163imdgopbu.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163zepvjyap.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163dbhnmhyf.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163nbaleicm.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163joswlaot.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163nquxushr.html

npx vite build
来源：http://www.sxryk.cn/163duxjdfzg.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163uoufbunc.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163cclqcckx.html

================================================================================
来源：http://www.xuanzx.com/163zeayoxtk.html

统计汇总
来源：http://www.aibaodan.cn/163xphpjhzz.html

================================================================================
来源：http://www.sxryk.cn/163onistgfs.html

按语言统计（条）：
来源：http://www.xuanzx.com/163aqiwoseq.html

Python ......... 252
来源：http://www.sxryk.cn/163ofzfrgfk.html

PHP ............ 252
来源：http://www.xuanzx.com/163xyrewywl.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163keamemoq.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163czpukcsy.html

Java ........... 212
来源：http://www.sxryk.cn/163dduncbep.html

Go ............. 212
来源：http://www.xuanzx.com/163mgmycwam.html

Ruby ........... 212
来源：http://www.sxryk.cn/163tfmbpjze.html

C# ............. 212
来源：http://www.aibaodan.cn/163cpabcues.html

C .............. 30
来源：http://www.aibaodan.cn/163wusasjqh.html

C++ ............ 30
来源：http://www.aibaodan.cn/163qifachnl.html

SQL ............ 90
来源：http://www.sxryk.cn/163kjkafyze.html

Bash ........... 80
来源：http://www.aibaodan.cn/163trtacvba.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163xosivxhi.html

Swift .......... 15
来源：http://www.sxryk.cn/163ltzqqgyr.html

Lua ............ 10
来源：http://www.aibaodan.cn/163vxebzqka.html

Perl ........... 10
来源：http://www.xuanzx.com/163baubjlox.html

Scala .......... 10
来源：http://www.aibaodan.cn/163brzpnsdx.html

------------------------------------
来源：http://www.xuanzx.com/163kisfjdwx.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163arntkyph.html

按章节统计：
来源：http://www.aibaodan.cn/163bteewztn.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163rzsrokcv.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163npjbnuep.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163hctsgufy.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163gycsnsah.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163kxxdarum.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163fwotuxke.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163smryrvnh.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163srakbymj.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163dtmcradh.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ipptctgx.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163zbgizvdm.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163tpbgknmo.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163dyczjvwu.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163gxxvnmxm.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163ispnoxok.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163vpmmsifu.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163noklqteo.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163dgkviqvs.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163koynecfn.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163nqenyxgj.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163lzctaeih.html

------------------------------------
来源：http://www.sxryk.cn/163kcyjzqmf.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163hppvgces.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163oxspgiky.html

使用提醒
来源：http://www.aibaodan.cn/163flivjktt.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163fxbonvjj.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163ttsewxsh.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163yijwpzwc.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163wehvowxe.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163qceiqsdq.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163ubfsvqft.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163xctjuqzr.html

================================================================================
来源：http://www.aibaodan.cn/163gvboasux.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163hhubdsdm.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163hxxzpamr.html

================================================================================
来源：http://www.sxryk.cn/163wmxaztlr.html

【收录内容】
来源：http://www.aibaodan.cn/163hpmgzyed.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163bexjapxh.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163imfwmckm.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163kvtwmmbz.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163gseqkgip.html

【使用说明】
来源：http://www.aibaodan.cn/163tizgonfq.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163mkmefxvu.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163jiniwpyb.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163pluxxlzw.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163taocmkkm.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163yuekvcnl.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163frcvqody.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163gncsyvqw.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163tufxtsze.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163eopulonn.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163ebnbhcxc.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163byfgmtnf.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163rapfhwey.html

【文件统计】
来源：http://www.xuanzx.com/163jvyfhgiw.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163mwzrdapj.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163gtpweurs.html

目  录
来源：http://www.aibaodan.cn/163kbjkmjhs.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ffzdpnhj.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163qxnjicre.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163fuqkryej.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163tbvowyaf.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163dimfhusc.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163ufdbeqcs.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163cxijdgbo.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163oyfqmasy.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163slxtosyx.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ipzxjkjt.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163itmssqei.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163owckvybw.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ofzlwyqs.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163icacftql.html


<!-- 参考信息 -->