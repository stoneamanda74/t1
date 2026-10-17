外链999!wailian999！

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163sbmwvvph.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163ncuclwvn.html

s"值: $b"
来源：http://www.xuanzx.com/163kyijghhb.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163rnflycts.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163dfltmevz.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163aqannlot.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163drjrczia.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163mnpiqlml.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163zattdwau.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163ajwvskrt.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163zoysbkdy.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163exwdbrlu.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163dynzkwnl.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163bphdjxcs.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163mgyqgjgo.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163xqudwpby.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163xfyjcfwo.html

================================================================================
来源：http://www.sxryk.cn/163hyenrtac.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163anezzirx.html

================================================================================
来源：http://www.aibaodan.cn/163ywmvjzwp.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163qhmhjwmh.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163iqxbldzn.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163uatosgjx.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163rxaaeanh.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163svwmfqzq.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163blionyak.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163bxorxbgb.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163gfqjupov.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163zrtvmuad.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163kuvkwqrh.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163smpaiika.html

{**a, **b}
来源：http://www.sxryk.cn/163tfaezfjq.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163lqxhoxpz.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163mzjktrdw.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163vcwsmqhi.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163fynnmnkw.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163hjjrwuoq.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163ghnlizps.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163qspihtii.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163yfbkkmft.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163nvmpqyqw.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163eocxusqg.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163hwtoaasf.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163koswpqzs.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163npmtylpf.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163qyenxlpi.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163vgdhbvef.html

defaultdict(list)
来源：http://www.sxryk.cn/163nyymxvhc.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163nznjixdz.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163guumjbud.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163vhbxlyht.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163jyiqgsrq.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163ciuaiwxc.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163tobidkds.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163yvlobvqr.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163pnmrogmm.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163znzzczbs.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163hicwzzps.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163cutbfwyy.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163hayesnbd.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163jvfesuzy.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163mchhekhw.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163nmaugxkz.html

list(zip(*m))
来源：http://www.sxryk.cn/163wyusmsgl.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163ofvwwqwp.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163lwaqqvqv.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163geqkbyle.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163gnzclron.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163hynarxpw.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163csdpzjfx.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163tpouhjai.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163khybmhaq.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163zskwrbau.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163ngrspmoo.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163urhacjtl.html

UserId = int
来源：http://www.sxryk.cn/163dcpawdrf.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163vmyodvrw.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163gbqzgyhr.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163mhnahcus.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163vzzacvxt.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163rwoqhxvy.html

python -m pytest -q
来源：http://www.sxryk.cn/163rjhnzwqx.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163ewjlqvnv.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163qycioygq.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163ankaesfq.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163vnvychwu.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163arjdwsug.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163slrdqpcr.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163ytrkggfw.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163jaisplxs.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163ubdrievl.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163ewfeskph.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163sjapztwr.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163daaclvsu.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163yqmkifhy.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163wcmqoilp.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163cxtiyoed.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163whaivspp.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163itoyjjkc.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163cxfqjapz.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163lzzufzqw.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163jyurthnc.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163vnnctkoj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163irjisqax.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163dhhzeklt.html

namespace App\Http;
来源：http://www.xuanzx.com/163yqhxqujb.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163teodnrks.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163hynfshlq.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163smrtqhdp.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163xsjzhcsz.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163kxfrmxuz.html

?string $name = null
来源：http://www.xuanzx.com/163clpveyxm.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163zxwabuda.html

int|string $id
来源：http://www.sxryk.cn/163cbaalvpa.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163rzufiwer.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163cbztgfrt.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163pbfjhkqv.html

public readonly string $name
来源：http://www.aibaodan.cn/163sxotzxpf.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163zsmyevlw.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163uxryhxpp.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163sdqyavzy.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163zhbadfjn.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163kzwvtegw.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163trxjvifz.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163jezohvsy.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163efrymnvb.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163ytfbhqyj.html

$obj?->method()
来源：http://www.sxryk.cn/163kitydsvo.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163nokrvwyz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163kubxucmd.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163gwdstiek.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163tcluxaff.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163vaipowjk.html

"值: {$a}"
来源：http://www.xuanzx.com/163lkqgxkao.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163radqvcfs.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163janhatav.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163dqvshivs.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163shxybsqm.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163norntmtd.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163wspogxvn.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163nfosqmsm.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163dmufelmn.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163pxotjbfz.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163tlasisty.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163rcnmbyxq.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163bicnplmu.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163kmwyfype.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163fxcmxhvl.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163zmxcyujs.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163ocuywwwo.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163evdulqhr.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163fjtwdvlp.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163rmieazeg.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163vitpfjaw.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163tvaorvoe.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163smnquexo.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163xvqmzvxh.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163kfofpbsf.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163hkdcweim.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163wfwgfugn.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163vtgnxwbh.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163mubfmcqy.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163npiitepu.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163stwyonla.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163tmrrcgwg.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163nebhkbrf.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163hogmlxhp.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163eumtjyrx.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163hkuhibkx.html

composer require psr/container
来源：http://www.sxryk.cn/163ryngxenv.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163hfbdwsri.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163wvoozrzl.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163ilpgoipy.html

composer require twig/twig
来源：http://www.aibaodan.cn/163jitkmubc.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163gbekllqh.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163lgbkcdhi.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163pbljeuci.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163fehcngsa.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163zkgmnolo.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163ctmqhlci.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163guzbtplp.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163ztfzufhr.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163afdwrvly.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163nnwyuvra.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163hbwacedz.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163fsfwwhuh.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163iatlbhme.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163satkffua.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163qzurvfmm.html

a?.b?.c
来源：http://www.xuanzx.com/163qdatspti.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163bjofdxtl.html

a ?? b
来源：http://www.sxryk.cn/163vedorgeg.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163wkclyyfx.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163hypdhsym.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163xjuybvzx.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163cgibtdvu.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163vhtaglgd.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163jhytgmbp.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163aslwlwro.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163eddgmayc.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163csdtruwb.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163ywkjqahv.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163tcerleyt.html

structuredClone(obj)
来源：http://www.xuanzx.com/163xyfzaslg.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163xyckugvw.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163xiotxpej.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163bzsujnux.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163azmkqoqp.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163ksbbrqla.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163mbjqedqd.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163jndwgbfk.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163mzyqoxxn.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163xlyukcdu.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163akwwaeme.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163sqlpqfed.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163fbldpumw.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163youwcqjz.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163czprmzmx.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163kjcklmns.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163smrzfvoc.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163vqcvymic.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163qrfuiztm.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163mrzncbtl.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163toeudrlf.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163mixucozb.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163fmnrgfoc.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163jkmwnskt.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163oasymila.html

[U105] JS：节流
来源：http://www.xuanzx.com/163nndwclix.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163ktcgftla.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163atgrlgun.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163wnrpaobm.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163dcrfekis.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163xukgvock.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163acslirrv.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163grsszdrf.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163fqmdflnj.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163phgaukct.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163exuwqclj.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163plnaazdp.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163gmqtxrxy.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163egkztlca.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163tbjsvevo.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163grxhfdcs.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163kstdvnmo.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163kmjmgibm.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163rbtkfyxz.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163rmcldpju.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163ogwcyshr.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163jeqajeej.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163glwesuun.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163lculsiwc.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163tvzyakpi.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163ouohbofx.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163osqgptnj.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163ixkjmsoo.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163qdlfmric.html

npx vite build
来源：http://www.aibaodan.cn/163epwgobky.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163qgboubgk.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163xhrhsksp.html

================================================================================
来源：http://www.xuanzx.com/163nmrpmufk.html

统计汇总
来源：http://www.sxryk.cn/163twncuzqs.html

================================================================================
来源：http://www.xuanzx.com/163btncfxim.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163bseslikz.html

Python ......... 252
来源：http://www.xuanzx.com/163yppgpnuk.html

PHP ............ 252
来源：http://www.aibaodan.cn/163uazzhyzr.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163ylmccutf.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163whpilzao.html

Java ........... 212
来源：http://www.sxryk.cn/163dgcwhsmt.html

Go ............. 212
来源：http://www.sxryk.cn/163htiwhszo.html

Ruby ........... 212
来源：http://www.xuanzx.com/163rplccvyz.html

C# ............. 212
来源：http://www.sxryk.cn/163zjpokxcg.html

C .............. 30
来源：http://www.sxryk.cn/163hrbhgydk.html

C++ ............ 30
来源：http://www.sxryk.cn/163mxbqjgbi.html

SQL ............ 90
来源：http://www.xuanzx.com/163ehmhojnc.html

Bash ........... 80
来源：http://www.sxryk.cn/163rumlxkpn.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163gbiosqig.html

Swift .......... 15
来源：http://www.xuanzx.com/163wrtbgnry.html

Lua ............ 10
来源：http://www.xuanzx.com/163utbaqjia.html

Perl ........... 10
来源：http://www.aibaodan.cn/163siobfczh.html

Scala .......... 10
来源：http://www.sxryk.cn/163nrtossha.html

------------------------------------
来源：http://www.aibaodan.cn/163laakwygc.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163xnbnbpis.html

按章节统计：
来源：http://www.xuanzx.com/163nhlmarel.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163suajdvuz.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163zehdhvvh.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163agoxqfhp.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163kcflbgly.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163qwcmvgev.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163eyjfqeaq.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163tznuujfz.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163fyuejiri.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ihdmnrhk.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163rbymsvjn.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163irfckwbn.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163cmlevswd.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163elpatwsi.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163vzprpmmm.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163jumubrcp.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163lgwjyhav.html


<!-- 参考信息 -->