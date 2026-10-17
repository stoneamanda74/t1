外链999!wailian999！

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163todjzrdf.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163bahqlhra.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163jzluyhvj.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163mrsrdcyv.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163igvgzcue.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163oikwddzr.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163kvrcyshm.html

defaultdict(list)
来源：http://www.sxryk.cn/163yudgtnqz.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163tglwunza.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163vhesswti.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163zgrtyubn.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163fyzhzuou.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163jbastqdb.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163ovnkvriu.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163ogfudtky.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163sovgfmjk.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163odzelebe.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163oqxtqxml.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163ugrubrqg.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163lquvloha.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163egchprel.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163grjenyyd.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163lxlkufdy.html

list(zip(*m))
来源：http://www.xuanzx.com/163jmoipftm.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163usqgtpal.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163swipsjvz.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163yffrgkne.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163vxupviza.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163pdbufucm.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163hrfsqjtm.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163vdgmsotf.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163ayxgvebr.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163vwltaxwi.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163shfwcvsi.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163zcwswjln.html

UserId = int
来源：http://www.sxryk.cn/163quyqvdye.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163wumoitix.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163hfnggdwd.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163fvoxxsps.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163mhnnqcob.html

[U31] Py：单测
来源：http://www.xuanzx.com/163ncfpouqf.html

python -m pytest -q
来源：http://www.xuanzx.com/163sgyyqkih.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163jbrxshxn.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163tgwbimbi.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163xblpcpvs.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163usknudcl.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163jnyuvube.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163stcmoexe.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163ajzhgubd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163yvzlfytp.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163dkphsobd.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163palwuuky.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163ggydcupl.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163dasqcktr.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163xmqhoris.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163opxftbeg.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163upfvoiro.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163rljdfxtf.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163qkcaucfq.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163qsszqbwy.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163qeptmxvc.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163evrgktxn.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163jmmytwrz.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163qicsvumt.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163zblfweyw.html

namespace App\Http;
来源：http://www.aibaodan.cn/163yiruxglp.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163linlolrp.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163ygxhmhhn.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163kssehqbu.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163lhrroesd.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163ryacnygd.html

?string $name = null
来源：http://www.aibaodan.cn/163fieliexd.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163fsvkhrob.html

int|string $id
来源：http://www.xuanzx.com/163vpzabyry.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163iasdogej.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163luvmnoog.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163dsipdrql.html

public readonly string $name
来源：http://www.sxryk.cn/163uyrnmpxd.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163nngixbka.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163vqvjbyra.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163qocbpswo.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163wvydqczm.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163gqesyvwc.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163ombrlztl.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163idqbwyid.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163mmwaehjo.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163lnrojnle.html

$obj?->method()
来源：http://www.sxryk.cn/163fybnbuim.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163pgqgxpjy.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163rysijzjm.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163cknvubbn.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163cgirrytc.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163wbndoemj.html

"值: {$a}"
来源：http://www.aibaodan.cn/163tmbzuddw.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163vgxewawv.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163tecpzjqp.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163amikwxoj.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163slpubhul.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163uogxgzuw.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163ppjytryh.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163pqzlorzv.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163alslfiug.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163njeehaik.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163fxxiezoi.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163feawmhym.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163nubnjvcr.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163hykiuhqs.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163izyfqasn.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163ycvfpjnn.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163pjfywyaf.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163llkdouir.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163rrmhzkjt.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163rqbhsfjc.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163jldakpvr.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163ujnqfkzt.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163rlzmgism.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163hbhbligg.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163zudqfsal.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163lhgrnfkd.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163raqfqasw.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163iwpdrjsa.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163qfufxyej.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163apsbhgjy.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163hwzpllna.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163ieihjken.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163miqhokhc.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163yutcqhee.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163wsexnris.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163fyifvszz.html

composer require psr/container
来源：http://www.sxryk.cn/163vkjkrvhm.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163rzrsclmx.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163tjofmhig.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163ptibrbhz.html

composer require twig/twig
来源：http://www.xuanzx.com/163dkyfzabf.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163ivaslwod.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163xfjhxuos.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163zaqvdask.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163ladrtwff.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163onowrrat.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163iwxfaoke.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163gsearzxo.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163voavljch.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163gugsvbvo.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163hjyxmxjd.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163fbwjkllz.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163zaqpcpvs.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163ijlebprn.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163mjvccsyd.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163aixbpoxh.html

a?.b?.c
来源：http://www.xuanzx.com/163zydtkftu.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163vtpktnql.html

a ?? b
来源：http://www.xuanzx.com/163rsmvvrtv.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163femjiwxg.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163yrhfxfst.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163tpmfobbg.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163whazldof.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163gzimrpuh.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163eyyxcluk.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163vorkjnwm.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163swriolhi.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163gomcvyll.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163nzbweyue.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163eyehypny.html

structuredClone(obj)
来源：http://www.sxryk.cn/163glsaqmpk.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163lpumnovj.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163fxnwuudj.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163ebhxswvv.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163geohvgmp.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163kutajwmf.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163albctkmn.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163arrpwoda.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163jaazwdkj.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163orhefxth.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163akmvjslc.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163nxxpktbz.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163rmxciyhx.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163jihzcbxo.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163jdpcuzgz.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163afbteswm.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163btmricnx.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163psftknsy.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163tcuwfeds.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163vmjnqjhx.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163ebkseteb.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163hroyuozt.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163fkkrceav.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163oxqyodxa.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163kukibyup.html

[U105] JS：节流
来源：http://www.sxryk.cn/163rwyjjmoo.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163fvfiizof.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163apfcupqo.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163gtwnicpc.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163fgndswib.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163jlgrikfk.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163bzxmvjev.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163dygxdfjj.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163bofwroei.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163tgzmjynv.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163rgxoxjez.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163mkrjmmwe.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163ochpigdh.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163jpurzekk.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163wykqwmyn.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163jiesbxkl.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163frydjcxz.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xhqyfzcx.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163qxscgyqp.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163xyvnqkbg.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163umcvxpns.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163kuwahoyf.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163wpkquzql.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163dihtetlk.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163qkovnzlh.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163enpjhkvq.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163vkxzgaiw.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163uoypxdhi.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163fqyynvwv.html

npx vite build
来源：http://www.sxryk.cn/163kiwjlplh.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163qmrxvjnu.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163vnzhiucp.html

================================================================================
来源：http://www.sxryk.cn/163vizzhoku.html

统计汇总
来源：http://www.xuanzx.com/163nitgxylh.html

================================================================================
来源：http://www.sxryk.cn/163chroivhj.html

按语言统计（条）：
来源：http://www.sxryk.cn/163uoswjprg.html

Python ......... 252
来源：http://www.aibaodan.cn/163lmvycyog.html

PHP ............ 252
来源：http://www.aibaodan.cn/163mpsrpyly.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163rpxkwvrc.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163vyrlfwml.html

Java ........... 212
来源：http://www.xuanzx.com/163jcfukjua.html

Go ............. 212
来源：http://www.xuanzx.com/163sjdjynci.html

Ruby ........... 212
来源：http://www.sxryk.cn/163eleekaes.html

C# ............. 212
来源：http://www.sxryk.cn/163kjttpkbz.html

C .............. 30
来源：http://www.xuanzx.com/163tilmqspy.html

C++ ............ 30
来源：http://www.xuanzx.com/163fcpzapfz.html

SQL ............ 90
来源：http://www.aibaodan.cn/163gvmcoxma.html

Bash ........... 80
来源：http://www.sxryk.cn/163kmufecig.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163phvbnhet.html

Swift .......... 15
来源：http://www.sxryk.cn/163jufzhllk.html

Lua ............ 10
来源：http://www.sxryk.cn/163yfxbyjaj.html

Perl ........... 10
来源：http://www.xuanzx.com/163myznwwda.html

Scala .......... 10
来源：http://www.sxryk.cn/163pprufqzt.html

------------------------------------
来源：http://www.xuanzx.com/163aanxnnva.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163mrodnyxd.html

按章节统计：
来源：http://www.sxryk.cn/163gwcuwnnv.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163geaepvvp.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163rulmggad.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163tvjkhfwv.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163gmjeibsg.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163blumbmuc.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163vcydblce.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163jmoowjqk.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ylymrhlz.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163yjvqnpus.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ojnmccsa.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163nbtyvfyh.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163acnsdqpf.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163eyiogdzf.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163xbtmvjdj.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163usxddmrp.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163tzrhkgvg.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163omjkqctu.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163kakgpyvm.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163jfykjnzq.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163rhkhapew.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163wdmqakim.html

------------------------------------
来源：http://www.aibaodan.cn/163crmshxtk.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163tmlklwme.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ofvjqgqr.html

使用提醒
来源：http://www.xuanzx.com/163iyomzlek.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163sroqrpfa.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163goziyyuv.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163qwsywbpd.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163zgukvzck.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163sswdgghe.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163wvuwatpv.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163kdyimnbi.html

================================================================================
来源：http://www.xuanzx.com/163jabwayff.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163jbywjhum.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163bnqosiqj.html

================================================================================
来源：http://www.xuanzx.com/163zdcxbylc.html

【收录内容】
来源：http://www.sxryk.cn/163vmzprint.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163exbihpwt.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163dhgedupi.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163skoplbrw.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163pduzszxw.html

【使用说明】
来源：http://www.xuanzx.com/163hglnvkds.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163huxswivc.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163ikhsybql.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163zzqbtbjq.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163mnvddkab.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163qhhanyia.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163raxqozqr.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163xpzvtsjk.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163bvcxywuw.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163zmzzvqzg.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163gwlydvkg.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163kjrcrlst.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163niidiylk.html

【文件统计】
来源：http://www.aibaodan.cn/163iffxsrdr.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163rgfyxkmp.html


<!-- 参考信息 -->