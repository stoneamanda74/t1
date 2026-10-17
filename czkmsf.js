外链999!wailian999！

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163gmyaycas.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163bdzbqwtc.html

println("Hello")
来源：http://www.xuanzx.com/163csmyewpz.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163fffputha.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163qfutzeyq.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163dysohydu.html

s"值: $b"
来源：http://www.aibaodan.cn/163bemfmjmm.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163vsgjwhbp.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163nporluvk.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163uqfdvscd.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163fmutbkct.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163gaejmpsi.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163geyhiuom.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163jjrlhhif.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163viictuvi.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163otjqdyge.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163iafoqvjy.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163hjsposhg.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163azmfssnm.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163ogqmmvzd.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163wbyhvrds.html

================================================================================
来源：http://www.sxryk.cn/163qofaicyi.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163uirrrnbg.html

================================================================================
来源：http://www.sxryk.cn/163ddbtqjad.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163epncdvga.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163fdmzmcdj.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163dacrxwrp.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163beabefdt.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163kgwkgnts.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ywxwzcwo.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163vaesfkly.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163frwwuils.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163maramvup.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163gxmzlulj.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163xlsqehwx.html

{**a, **b}
来源：http://www.sxryk.cn/163ejwqmhti.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163uczjwhff.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163jnlsimgk.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163bpjvdafs.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163qguiwaoo.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163fbwobqoa.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163clevjrio.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163ptlsdeor.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163txendoco.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163gvpskayr.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163icxfwobe.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163olybycvd.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163fkitrkdj.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163cfrqisoi.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163klqqwykp.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163thxeujrt.html

defaultdict(list)
来源：http://www.sxryk.cn/163kxfjlije.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163dyqhunqg.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163awcrkork.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163izvxjbsw.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ysdfxwao.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163cfntmoif.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163rdslzjiz.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163msabxvgn.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163egsgljot.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163yqmgzzip.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163ahkdtmpb.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163makfhtxl.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163eqdmxasd.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163sxobxmsy.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163vljuwhle.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163makerbjw.html

list(zip(*m))
来源：http://www.sxryk.cn/163wprcdgcq.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163croipzob.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163gdomyhxn.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163hivubxkl.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163msyirrpj.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163fqstfjol.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163lkqrtbet.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163icpmoclo.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163wglfbcwq.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163kdererwn.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163oedervme.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163gmnyxaxk.html

UserId = int
来源：http://www.aibaodan.cn/163oweyggxm.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163ccnouoql.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163xcjpogsq.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163sbiltdox.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163evxviwte.html

[U31] Py：单测
来源：http://www.xuanzx.com/163ushnkzyq.html

python -m pytest -q
来源：http://www.xuanzx.com/163xejklitl.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163hjrlhoya.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163sluucrtc.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163klkrkmxu.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163efxmhdot.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163hauusqle.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163sswvwrwd.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163rcwpxput.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163sndbsltw.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163wthjavay.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163npvfewya.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163cekddnmy.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163taofyeyu.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163fmfmmyeb.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163gdhsogmk.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163jeeevqxw.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163nuyscear.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163pamhxxlv.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163adjzkvxg.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163txthylfz.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163rhsmppwx.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163qvwihnzu.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163evnmduby.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163mrhrrdlk.html

namespace App\Http;
来源：http://www.xuanzx.com/163esdieepo.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163jtptdyev.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163nqsipizm.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163zuowbglj.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163aqhxajmg.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163ildrevvm.html

?string $name = null
来源：http://www.sxryk.cn/163layqvfty.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163pbvbfewl.html

int|string $id
来源：http://www.sxryk.cn/163rsumukfn.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163jbsvfkvp.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163eyuosdnn.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163aptwtozc.html

public readonly string $name
来源：http://www.aibaodan.cn/163hnmuyuwe.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163qdrkhrsh.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163dxfnpczu.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163uulxolmy.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163fyhaprcg.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163zylxzvpy.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163mhnrfhxy.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163muuonbsr.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163ddjuqfdt.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163faljvhks.html

$obj?->method()
来源：http://www.sxryk.cn/163aaufsvid.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163lhgeohpn.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163nyqpwhse.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163gxesduag.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163bhvpurlo.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163pgvuncqb.html

"值: {$a}"
来源：http://www.sxryk.cn/163uzamlobo.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163wdquqocw.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163upmitbti.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163vugdnvpr.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163rjwupqmg.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163mnaaitxl.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163zztewyhq.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163wwuzsrbz.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163rxcubcgg.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163gcpbzqvd.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163lqaukltm.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163hisogwrp.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163kepbtgdw.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163ucwzqvoa.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163lzgfbhvw.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163zgqsuldv.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163zcunuvko.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163dmgotqkn.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163nkagajbz.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163vsbdfwmu.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163vhuqrqim.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163jvbnkceb.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163dngbvrqy.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163ozcnztwt.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163txgimama.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163hpqmcyap.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163bzzxlmig.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163zwpgzauy.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163cxykubda.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163sundlavt.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163lbymlmvc.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163myxtgtti.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163dwufpngt.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163umzmoarw.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163zceerfxn.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163egasvfen.html

composer require psr/container
来源：http://www.sxryk.cn/163lmxokpya.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163gkscwbea.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163lfjtiprr.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163fznmccgq.html

composer require twig/twig
来源：http://www.xuanzx.com/163syivxdxp.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163klousmzb.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163fxzcwwnm.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163pjvahfub.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163pxesdqdu.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163ibudrgwl.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163tiarlioe.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163xgvqcmat.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163bpxrauip.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163dxvfkpjh.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163lylqukqm.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163bcowcqhk.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163ixolqxqt.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163ubseiwid.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163lxeubdjf.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163dlfizdpn.html

a?.b?.c
来源：http://www.aibaodan.cn/163leabrsry.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163zyjhxswx.html

a ?? b
来源：http://www.aibaodan.cn/163cjspfroq.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163vxtkgaxo.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163yzfxvlmd.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163ykroctqc.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163qhfopagk.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163thslwsfx.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163hhegxyht.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163kqeaeubf.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163zbyonios.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163qyqidhhi.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163tphrbwgx.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163ypbvlywf.html

structuredClone(obj)
来源：http://www.sxryk.cn/163herolobi.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163ywzwqdfq.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163msipkegq.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163lmqkeupo.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163vnggbauo.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163tcpqqzyh.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163yixrirka.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163kspzlkok.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163lyookdez.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163nhwejbkg.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163rrcpzwxi.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163ijioqnhn.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163fgnydkll.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163slnlrned.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163wbbqocob.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163qkmrwsti.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163napbpduh.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163aqhvrspv.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163kvmccmks.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163jrjxlrxd.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163encszncj.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163hdkresyx.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163ievdwflv.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163enkkilok.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163bunelzfe.html

[U105] JS：节流
来源：http://www.xuanzx.com/163dddanctp.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163edcrnawg.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163onatxigi.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163tfjgcrmh.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163mwfwkqhs.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163gdwtuwiq.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163gzwgvsqm.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163rxxpmuwy.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163ezmsdyio.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163qtgfrudp.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163vpruobni.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163qfwjdblt.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163hvlqxrro.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163uayjqzgn.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163fooefvfo.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163nbhuixau.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163umoxhovg.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fklxinon.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163tarmlibv.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163dwguyuph.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163bjfsjiqu.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163xrbgunle.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163fozrxelp.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163sxugufty.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163odnmvnkg.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163abingvxi.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163gxewsfsm.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163jlzfbits.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163zhwckilf.html

npx vite build
来源：http://www.xuanzx.com/163pjaeeevm.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163kepqmcqz.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163qxcsnjzp.html

================================================================================
来源：http://www.sxryk.cn/163besiuneq.html

统计汇总
来源：http://www.xuanzx.com/163qnsdnrjg.html

================================================================================
来源：http://www.xuanzx.com/163wvvcanvo.html

按语言统计（条）：
来源：http://www.xuanzx.com/163lgkvxajf.html

Python ......... 252
来源：http://www.aibaodan.cn/163bpjcfgiv.html

PHP ............ 252
来源：http://www.sxryk.cn/163sejqgwwp.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163htvdottn.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163artkeuov.html

Java ........... 212
来源：http://www.xuanzx.com/163qoemzomm.html

Go ............. 212
来源：http://www.aibaodan.cn/163jwlzgcye.html

Ruby ........... 212
来源：http://www.sxryk.cn/163uoswwfos.html

C# ............. 212
来源：http://www.xuanzx.com/163cucvsznc.html

C .............. 30
来源：http://www.aibaodan.cn/163gsavghkb.html

C++ ............ 30
来源：http://www.sxryk.cn/163vnfniczq.html

SQL ............ 90
来源：http://www.sxryk.cn/163hqwjmurj.html

Bash ........... 80
来源：http://www.aibaodan.cn/163svliymnn.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163vvpaydgj.html

Swift .......... 15
来源：http://www.sxryk.cn/163dfgtqcfc.html

Lua ............ 10
来源：http://www.sxryk.cn/163lyuydoff.html

Perl ........... 10
来源：http://www.xuanzx.com/163alxghxbv.html

Scala .......... 10
来源：http://www.xuanzx.com/163lfjrqhyp.html

------------------------------------
来源：http://www.xuanzx.com/163nzqxmfaz.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163kurpgedw.html

按章节统计：
来源：http://www.aibaodan.cn/163cwvjzbgw.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163fdoasmpf.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163yjjrmdar.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163nrrprmqf.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ewjwgukg.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163qtlvjpfb.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163uiqmexlw.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163igxhthru.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163jxcopiaj.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163mwmapqao.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163cmricjgo.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163hjztkegp.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ofieahwp.html


<!-- 参考信息 -->