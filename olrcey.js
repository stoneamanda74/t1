外链999!wailian999！

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163khriymqn.html

================================================================================
来源：http://www.xuanzx.com/163ceomtpou.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163lcexjfvj.html

================================================================================
来源：http://www.xuanzx.com/163svvuojyo.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163npicbzzj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163jxjgazas.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163ramxbsav.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163quwnbkux.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163cqilbtjk.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163tlxatbay.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163tyzineqr.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163nxoihxzt.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163epgciwpo.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163yfvigiyw.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163ipdrbuiw.html

{**a, **b}
来源：http://www.aibaodan.cn/163vjybkjpw.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163mcybjnnm.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163guehgurt.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163cozhmyyy.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163fqckgkuq.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163bigrmlji.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163itxdfrma.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163rsmbnnhi.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163tfamxhaw.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163lswaalse.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163iwatjutr.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163qkrfntxf.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163ezxbtyiv.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163fnqmtttx.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163xyljbxvg.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163uybkeiuu.html

defaultdict(list)
来源：http://www.xuanzx.com/163ukugscoy.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163dmjggqot.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163zshpukzn.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163dgefmcyi.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163bowxclhb.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163vduhwnrj.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163zdgnyeuv.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163jvkifjjo.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163saxwfvjf.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163qgfmmmtk.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163piwhfcte.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163tbudzayn.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163wztokdfb.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163qbscvdtl.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163uujoeeop.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163auzotgyf.html

list(zip(*m))
来源：http://www.sxryk.cn/163ptmiuqdk.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163vaomased.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163gtyjiwwx.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163lpxhewnq.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163cszmziga.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163stgrknlh.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163lsszzsyb.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163xoycvibj.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163lfldskza.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163diubfxyg.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163udmhqiui.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163yeenhxcq.html

UserId = int
来源：http://www.xuanzx.com/163hitxayqn.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163hdgfsgha.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163driiyemm.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163dwmtsfpd.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163fvghibah.html

[U31] Py：单测
来源：http://www.xuanzx.com/163llcvdael.html

python -m pytest -q
来源：http://www.xuanzx.com/163ifrjrrwg.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163tsrojbjy.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163ycegunnh.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163sldeejho.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163ocizsmcq.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163wiixmikl.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163sdjtgiuq.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163eyfbreoy.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163qjdkguoy.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163usnjrjnd.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163gjkmisqy.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163jwlxpejy.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163obyghhqr.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163wmrxooar.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163eqfbhlle.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163fgtjvlfc.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163ermerwug.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163yvtstksr.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163kuggybix.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163xlvypobb.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163vszclpug.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163elckeuwp.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163pvxaaryg.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163zgcloqhw.html

namespace App\Http;
来源：http://www.xuanzx.com/163msfeotnw.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163ofpxkklw.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163zqvxzfkg.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163jlyitjbi.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163pwqidctc.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163nurelbea.html

?string $name = null
来源：http://www.sxryk.cn/163hrauylcd.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163tcsanguu.html

int|string $id
来源：http://www.sxryk.cn/163ptnznluw.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163diqzvorl.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163efvaralo.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163cpqhjpxc.html

public readonly string $name
来源：http://www.aibaodan.cn/163wdrwaouw.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163wzlecrht.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163oponjyif.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163myouwjln.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163eqcwbnbb.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163ahsrludb.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163pvvmqyxz.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163wchpbgis.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163hxkgiyzp.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163odujcvqv.html

$obj?->method()
来源：http://www.xuanzx.com/163zhmbjmci.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163kdmoznvr.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163svkmxlqw.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163uepfnear.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163rmkxpffk.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163hlpbpfih.html

"值: {$a}"
来源：http://www.aibaodan.cn/163pumcamoq.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163ccamnjnk.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163mfswngrh.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163dbbmmlto.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163okbibbgj.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163ejtvwiai.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163djrgfbae.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163wdzpesti.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163eviafihd.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163cuqrnqsx.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163qztzclxq.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163zqbqqezv.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163vwzxknbn.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163uffbemwd.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163zgzdmwmr.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163ranvbosz.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163bgxthxvu.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163qzjstzlg.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163fvlsgdjx.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163chwhvuyn.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163jyqijtsa.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163qmljysjo.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163wkhunqbz.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163zeqtshoq.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163ddtpbfwf.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163tcfrygya.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163zttddhzy.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163oylehaha.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163aauklrjy.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163ajeuyeyi.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163neepccje.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163bxnyrcaq.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163wbukbpor.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163dvuestkg.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163esggoyze.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163wogzuylk.html

composer require psr/container
来源：http://www.sxryk.cn/163kcygkrha.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163hcqrfzbn.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163lyfnayua.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163qgqfdfwk.html

composer require twig/twig
来源：http://www.sxryk.cn/163cfuszixz.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163czkewxfn.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163rmcbposp.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163pnxsokka.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163kmrukkby.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163phieofio.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163qakhmnvq.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163rijmpnnx.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163dcjosupv.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163pukgfckl.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163nmfoiuug.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163tricuvlq.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163pnkwnyen.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163rdjbtksc.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163cescheuj.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163yrfhqdfm.html

a?.b?.c
来源：http://www.xuanzx.com/163wdpohkwv.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163gxfnhlbj.html

a ?? b
来源：http://www.sxryk.cn/163yheagvbx.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163aonvalky.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163zradhpbm.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163cuydebsi.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163cmpfgjwr.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163smxjarky.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163bhcgplse.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163rwaybvuz.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163neksirkm.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163nqlodcqi.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163gbttfdfr.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163eomfaomg.html

structuredClone(obj)
来源：http://www.xuanzx.com/163jzxhvnst.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163uikwgseb.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163yvfjubya.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163drfxijae.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163xgsethhs.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163ajfejlcw.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163svcobfkq.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163baqvycmx.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163nitqkyfc.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163thihnqfd.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163moznebid.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163rwnedraj.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163ouauoalq.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163zhthavaj.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163crsvlhkh.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163jsjiiast.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163bfbtijsb.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163usifwokg.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163wlxplszg.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163vnqpyldv.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163oibazufu.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163gjpddxno.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163vexknopz.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163yuirtkdp.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163cgtpylyn.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163jucspssf.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163gfxldklh.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163pgbcooth.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163wryvkyrt.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163pyzlxbde.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163qrkzbzwg.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163wttgauuu.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163pfkvavoi.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163joufbdly.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163qthdrykm.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163ngvhvnvy.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163bpmodjlt.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163vpcterrm.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163fvcifkfr.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163xboxxoiu.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ltudpwjq.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163ztvwnqsz.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qjafrykm.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163fipbtlpj.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163jlszygvm.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163zlxzxxkb.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163hgqbyozb.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163hztfmrpx.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163ukihvbsl.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163lebmrfej.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163dvycoeys.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163eykqnbop.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163hogiomml.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163yechxkih.html

npx vite build
来源：http://www.aibaodan.cn/163igpewhvt.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163kkbrmbmu.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163gctuzzwq.html

================================================================================
来源：http://www.sxryk.cn/163uelpcylv.html

统计汇总
来源：http://www.xuanzx.com/163fnjgbhnx.html

================================================================================
来源：http://www.xuanzx.com/163qawdtyqh.html

按语言统计（条）：
来源：http://www.xuanzx.com/163pvfcsrcr.html

Python ......... 252
来源：http://www.aibaodan.cn/163dfxcwvbv.html

PHP ............ 252
来源：http://www.sxryk.cn/163jgdicokj.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163hnidcpps.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163yqfjqbju.html

Java ........... 212
来源：http://www.aibaodan.cn/163rpgdifas.html

Go ............. 212
来源：http://www.aibaodan.cn/163nwdznmih.html

Ruby ........... 212
来源：http://www.sxryk.cn/163mgftofxy.html

C# ............. 212
来源：http://www.sxryk.cn/163mpmxaawx.html

C .............. 30
来源：http://www.xuanzx.com/163dzovytld.html

C++ ............ 30
来源：http://www.sxryk.cn/163maqiwgrw.html

SQL ............ 90
来源：http://www.aibaodan.cn/163kxjlvatl.html

Bash ........... 80
来源：http://www.aibaodan.cn/163jhepakjw.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163hlhrnbbx.html

Swift .......... 15
来源：http://www.xuanzx.com/163rareokfs.html

Lua ............ 10
来源：http://www.aibaodan.cn/163pmidsltg.html

Perl ........... 10
来源：http://www.sxryk.cn/163actuljtj.html

Scala .......... 10
来源：http://www.aibaodan.cn/163fheeqapq.html

------------------------------------
来源：http://www.sxryk.cn/163oknybdmj.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163tzttrrdw.html

按章节统计：
来源：http://www.sxryk.cn/163usbkiumy.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163kkmpxnmr.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163zbzolpii.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ricxkoxf.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163rofqfhgm.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163xngckbvt.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ylhaphea.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dmpsohov.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163wrmgxshy.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163brwjxlse.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ppqanglk.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163iyrzcuiu.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163euicudxf.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163flndaoqu.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163lyieuecc.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163zdztrqcc.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ibaiagpr.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163detjfvgi.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163uppvyndu.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163gjsnzrub.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163vdtzriib.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163rtdguhgh.html

------------------------------------
来源：http://www.sxryk.cn/163jleseomv.html

合计                                  2106 条
来源：http://www.sxryk.cn/163casreegl.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163rtogdhtc.html

使用提醒
来源：http://www.sxryk.cn/163twmkfkij.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163wstrtfkv.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163zydfyzil.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163hvjfmnfz.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163feabrghx.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163bapffztl.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163pmbravnr.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163lunyvjes.html


<!-- 参考信息 -->