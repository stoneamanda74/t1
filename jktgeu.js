外链999!wailian999！

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163btumssdc.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163yjwcohrj.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163xdtaavkn.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163diatzwoi.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163uslqevuh.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163ubvivtxt.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163ckjzkkoi.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163arxogqfo.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163hmduxbmq.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163ojjimymz.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163eumboqsy.html

UserId = int
来源：http://www.aibaodan.cn/163sbvaparu.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163nfzzxwwz.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163hpokpvqw.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163ofhymcan.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163zwwhhxwj.html

[U31] Py：单测
来源：http://www.xuanzx.com/163hchhpesd.html

python -m pytest -q
来源：http://www.sxryk.cn/163nvasfstx.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163kjgvfxci.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163hykisaac.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163ynkbqlbf.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163pedbemmn.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163ddjpcgix.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163mfqcqgsv.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163ggajtjkt.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163izijevmd.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163yxazckow.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163bajebihf.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163nnrleopq.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163whszhjby.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163qtqzgrom.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163zdugmymw.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163gsnlutkm.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163ynezowxy.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163ldshqamj.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163cdaddhpb.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163gxwlarqr.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ooddquup.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163yecbegsp.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163rextlicb.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163lsfdkurp.html

namespace App\Http;
来源：http://www.xuanzx.com/163vekbahng.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163twwsstta.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163mtuoihek.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163gnhykoba.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163csiuueje.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163riougjnv.html

?string $name = null
来源：http://www.sxryk.cn/163iirjptve.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163zegkynow.html

int|string $id
来源：http://www.sxryk.cn/163haowmnba.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163idgewkrm.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163gfyhmybj.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163gvsvkwgj.html

public readonly string $name
来源：http://www.aibaodan.cn/163rjnfyvmg.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163symdpzlp.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163rmnnuosg.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163xojwbezw.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163vbljszxw.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163ahakzmhk.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163jvehreqe.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163mqasoart.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163qxzyzfxq.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163ipkquhep.html

$obj?->method()
来源：http://www.xuanzx.com/163yupuxuou.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163zuyquqoh.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163cdifkkut.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163vjaamawa.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163srxczukx.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163rtnucyou.html

"值: {$a}"
来源：http://www.aibaodan.cn/163nduoyulp.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163aubwgrzs.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163ujgvcusr.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163yimwgllo.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163abimqsfz.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163kbytwazv.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163vdhaqhxq.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163lcgmldtm.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163kgrvbnoc.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163atnyzoyj.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163qpagscmd.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163spagqbio.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163quciphmt.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163glkpmhqe.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163dvaplbwh.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163ybeghzdy.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163qwefxjot.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163vvrwvhhb.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163cflnytbu.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163nxjhhuxg.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163eruvfmxf.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163xyvtrujy.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163ppphtvsu.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163giollmam.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163bafercwy.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163qkjaunmy.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163eynlrfnd.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163tqrasfnb.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163eswwymai.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163ghpnzjia.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163ijcyvnrt.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163dhqvicpz.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163bvkpstwu.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163lvznpupb.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163zftxognx.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163uoozahrh.html

composer require psr/container
来源：http://www.xuanzx.com/163dyousykf.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163lmqxitkc.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163hjfvkbtv.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163pszpwfxv.html

composer require twig/twig
来源：http://www.sxryk.cn/163tuswgcjm.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163kllfjsxy.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163xelseucx.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163dmhmvtwn.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163dijbgjpg.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163tawqscan.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163zeiuriyz.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163zujtpcui.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163vcwpzezb.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163vohfnwbt.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163enomqtui.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163naucvrlq.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163gohqvmcw.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163sidbjzxa.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163yrtzuzki.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163hyteqtxr.html

a?.b?.c
来源：http://www.xuanzx.com/163momqbbaj.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163qhccnccx.html

a ?? b
来源：http://www.xuanzx.com/163mfrdkxqa.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163widuavyf.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163lodiqpft.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163pwvrlexq.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163zdoynnvh.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163izcmfuat.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163vojqhxka.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163eqplwtky.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ziesjmxu.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163ajlhzjwh.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163uhukpwzd.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163wptgbiou.html

structuredClone(obj)
来源：http://www.sxryk.cn/163tuckdiql.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163gnxtpyuv.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163ouarecwe.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163squsufgy.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163amkhayob.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163jhsrlzfa.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163fxfjzkou.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163nneyvuqc.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163vqunmpxg.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163svwtrhtu.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ehycddmx.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163lamfskht.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163btzwssch.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163vrdqmqbk.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163dkyuesct.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163qdgyqkpn.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163rzxgussp.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163jciwvxaq.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163ktrbizri.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163ekqetyis.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163thowxwcn.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163mpvuppcr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163bjunzbcv.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163mxjsykio.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163yoepmnco.html

[U105] JS：节流
来源：http://www.xuanzx.com/163btvrycxn.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163wdrmbrqd.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163ntztqiqz.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163yzvxdtyj.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163vyzcepjr.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163tuuotwok.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163qjuymxcw.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163nmpubvih.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163jljrakiw.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163tnbxunjy.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163hzybrxor.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163uakhdgfo.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163ufvhyjdj.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163ahxiwolz.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163yucjndom.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163uyvtkeel.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163hnhjvzda.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ehxovciy.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163erzujhbe.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163kgygomhw.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163icnkemug.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163ijqazhia.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163harxkvge.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163urdsfdhl.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163oigtiqmr.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163lotkafia.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163gxwcbpai.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163nspfjyak.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163qmzhkpgr.html

npx vite build
来源：http://www.sxryk.cn/163yuvqtdie.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163wajlgofp.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163sgmbqmlt.html

================================================================================
来源：http://www.aibaodan.cn/163ewmpjryo.html

统计汇总
来源：http://www.sxryk.cn/163xhnwhrnj.html

================================================================================
来源：http://www.sxryk.cn/163oringhse.html

按语言统计（条）：
来源：http://www.xuanzx.com/163bwpooemm.html

Python ......... 252
来源：http://www.aibaodan.cn/163uhudxzdu.html

PHP ............ 252
来源：http://www.xuanzx.com/163violnaqv.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163sauejflr.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163twhtyvwy.html

Java ........... 212
来源：http://www.sxryk.cn/163ltmlesoj.html

Go ............. 212
来源：http://www.sxryk.cn/163fxdigywc.html

Ruby ........... 212
来源：http://www.sxryk.cn/163mkecastv.html

C# ............. 212
来源：http://www.xuanzx.com/163obwyeofm.html

C .............. 30
来源：http://www.sxryk.cn/163kjjuxujx.html

C++ ............ 30
来源：http://www.xuanzx.com/163xrusqrpe.html

SQL ............ 90
来源：http://www.xuanzx.com/163krzysigk.html

Bash ........... 80
来源：http://www.aibaodan.cn/163hkrnhiac.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163hholkelb.html

Swift .......... 15
来源：http://www.sxryk.cn/163ermlgtvy.html

Lua ............ 10
来源：http://www.sxryk.cn/163hkypjdal.html

Perl ........... 10
来源：http://www.aibaodan.cn/163mjuwyrob.html

Scala .......... 10
来源：http://www.aibaodan.cn/163fpuciikg.html

------------------------------------
来源：http://www.sxryk.cn/163quhibupu.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163enfpqlwd.html

按章节统计：
来源：http://www.aibaodan.cn/163wdadarxi.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163pyqrbtmf.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163cophexxm.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163oydaxgmn.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163tyspklku.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163akyfosvv.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163jxqdowaj.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163isekyivu.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163amsjnomi.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163hubtxatk.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163gnrnjzhg.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163lyjrlcpr.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163fczvbpul.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163zqjyigqy.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163qzwibmvi.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163tptttzsc.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ztzioymf.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163awqlpkbr.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163arlqrygz.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163dmuotujr.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163yusqywms.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163ymjgaklk.html

------------------------------------
来源：http://www.xuanzx.com/163gydzjegn.html

合计                                  2106 条
来源：http://www.sxryk.cn/163crfrgqak.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163czrvpika.html

使用提醒
来源：http://www.aibaodan.cn/163hanbyytv.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163loywbqot.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163fjwzykat.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163zbpjyfdb.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163aczdpekx.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163ipdsdeyr.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163fafvqxex.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163jhrwjlpk.html

================================================================================
来源：http://www.xuanzx.com/163xvlfwbns.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163rjbhkodb.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163aysehywf.html

================================================================================
来源：http://www.aibaodan.cn/163duoopssm.html

【收录内容】
来源：http://www.aibaodan.cn/163bbmkbarv.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163xwwsqwgw.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163gjluuebp.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163rrbgudar.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163yervfqya.html

【使用说明】
来源：http://www.sxryk.cn/163xxijhzqj.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163gsrngcdy.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163mrxakcye.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163drewprog.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163bbudppvz.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163cxrztnwb.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163aprlfnae.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163hpzpmpfo.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163turmzajw.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163keqejeyk.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163gugdjllb.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163xydtpuua.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163jhdreeae.html

【文件统计】
来源：http://www.xuanzx.com/163cwyscfhk.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163wmstkpbi.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163gjmcgrpa.html

目  录
来源：http://www.xuanzx.com/163tkkzgyqj.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ugamywdz.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163wgwwibic.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163mgjoamow.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163lcyodwzj.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163afckinyb.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163jbbwfwrj.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163vthworai.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163vwtvcipb.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163jtgvwqau.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163djhzshsl.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163lhfbesox.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163hbfahkcy.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zjfunosi.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163rwqvevfi.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ubmhvmgh.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163faiorhfi.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vsftzles.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163nsmgcvki.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163xuknvkow.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163bteswlyb.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ndmrkebn.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163zclciwlb.html


<!-- 参考信息 -->