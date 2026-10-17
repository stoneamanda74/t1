外链999!wailian999！

[T49] Perl：函数
来源：http://www.aibaodan.cn/163nspvoica.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163ljtghkma.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163faldffsr.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163qeiudxpr.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163syzdqvru.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163ecmqkukf.html

println("Hello")
来源：http://www.sxryk.cn/163gygpyjhr.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163oeloitma.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163ehvhvdzr.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163tkuitonw.html

s"值: $b"
来源：http://www.aibaodan.cn/163njfttmur.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163oncatbkd.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163uujtwehz.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163gnmctrrq.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163ykvzgspa.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163hfnruzvs.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163agodimky.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163ggpqsxxh.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163twleboiq.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163ciiuvrwv.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163vceghcxf.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163zgtwejnb.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163dhsmzpfo.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163gjbqiydv.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163hsepndug.html

================================================================================
来源：http://www.aibaodan.cn/163zhsjlwuk.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163uosbwrxr.html

================================================================================
来源：http://www.aibaodan.cn/163nfdiakfu.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163wqawdlyk.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163zhojoiex.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163nrobisqn.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163weuhniom.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163hghsnjma.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163hvhjyene.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163gmbduxqw.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163ewbitbnu.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163xmzwdmxh.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163iowurflg.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163xtgmllol.html

{**a, **b}
来源：http://www.xuanzx.com/163mzhzwemp.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163peezsctv.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163mpehbren.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163gapybmqk.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163lxtdnqga.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163inaqoncz.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163bslyzkxf.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163czvqnifk.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163oncewwrr.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163gomctjli.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163qzasowho.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163olhocydq.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163phoerhee.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163zvjbnjbb.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163tyxszyjq.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163wzkvcuuz.html

defaultdict(list)
来源：http://www.xuanzx.com/163wyvgcusb.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163srkhloup.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163mqiegmcp.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163kxheoiro.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163zrfywupw.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163ziohoqyl.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163uluckhvl.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163hjmynpka.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163iqbftknb.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163yfichrdr.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163skyilyld.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163pgbcyjbk.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163enrxqzbw.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163mgfijgnc.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163hxwkeuig.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163oylmomud.html

list(zip(*m))
来源：http://www.aibaodan.cn/163rmorcten.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163xwiipupw.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163fsbavuop.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163laivpdwi.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163itsfksne.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163zgpqjidu.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163slptowwl.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163auzoyjbr.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163rowoswon.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163imywzfem.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163ucydxhgd.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163blxlayww.html

UserId = int
来源：http://www.xuanzx.com/163ynrslvie.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163koixmlol.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163eqnubgia.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163tyavlath.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163sncyvtnq.html

[U31] Py：单测
来源：http://www.sxryk.cn/163vezrtiky.html

python -m pytest -q
来源：http://www.aibaodan.cn/163fqyjozjh.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163uhxfjfys.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163foalftzt.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163xrbvcmhh.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163utfluwwu.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163hbevofkd.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163vabjinug.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163ptrjtoxa.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163dbkkjyxs.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163ibuzrcph.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163bvgltfpc.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163gvqimgwg.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163qedxufae.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163yvtwvipr.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163ayzwqkfk.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163usimsrem.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163jfctvtha.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163mekvndmf.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ncawqiph.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163lmaojxlq.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ipjdzmka.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163vykiytxf.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163drfosxak.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163mlbohxbv.html

namespace App\Http;
来源：http://www.aibaodan.cn/163dkwohfhk.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163sfbbrowo.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163cuyzgwdg.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163bhijcysv.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163almrixyi.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163phldmwfg.html

?string $name = null
来源：http://www.xuanzx.com/163gkrsalnc.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163wgsylpqa.html

int|string $id
来源：http://www.sxryk.cn/163zoxdzyjq.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163rkunovrz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163edapuhhp.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163twnedhrc.html

public readonly string $name
来源：http://www.aibaodan.cn/163kstqtwgw.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163hvjgpufa.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163keljefso.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163jwqebfra.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163kfuajzrg.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163esjuaeos.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163cbrjzhmv.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163pmpefepv.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163ohrpzfvi.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163iznjwbhb.html

$obj?->method()
来源：http://www.xuanzx.com/163pgdrmvrq.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163nqladiyu.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163anwbzpax.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163vxrrqzbw.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zhfrycib.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163mlgjyrqx.html

"值: {$a}"
来源：http://www.xuanzx.com/163pujsivvc.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163funpmgob.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163hpysgcmq.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163pvqsfodm.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163jjsszkrm.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163sdoiyibg.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163fyivjfeb.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163estgkpqx.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163qcypgdtx.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163pwtkzokk.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163tweqoybs.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163tjsyvvxp.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163sdysmovb.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163oadwhzjy.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163yuutyezp.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163hrqatbjq.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163waomvtcp.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163mybirmin.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163xmpgiccc.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163plmuolfz.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163rncntxrn.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163dnyrvddq.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163eqiwjnnr.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163axwfnoav.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163nbyqdgyv.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163mualpstx.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163frirzxgu.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163lhkofgco.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163dbjpjcgq.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163nkszqcsd.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163xxfemkdh.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163vqegkeao.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163bjlopqcs.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163swiowopr.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163srvsxsdt.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163byycrien.html

composer require psr/container
来源：http://www.xuanzx.com/163lepetegr.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163midjwgjz.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163hwelcyzi.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163ngvmuzta.html

composer require twig/twig
来源：http://www.aibaodan.cn/163lqiqyjww.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163ayyknkca.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163vngnidev.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163nokryogb.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163vjkycend.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163aecbooad.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163xoajhrnu.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163wwwqsqfk.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163ehewwtih.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163mihmbavj.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163jopxbtym.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163diloqzfd.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163tafziwlo.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163zqrtgoqx.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163nwhoutox.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163avombjtg.html

a?.b?.c
来源：http://www.sxryk.cn/163zxauxvhb.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163bostquma.html

a ?? b
来源：http://www.xuanzx.com/163mmgeujvq.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163tbamvexn.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163ssigjpae.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163zomobmig.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163isbvdwpw.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163afopkojk.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163awfecrea.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163uacpaarz.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163mhwixnvy.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163rbzyakxl.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163msadurzc.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163defefdjz.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163yqujatin.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163qfarwezi.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163apdycjac.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163qouxsyfw.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163isjixjyo.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163ykejlvim.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163nhewfekf.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ovaqvcmu.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163kmkxsbcy.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163izeknonk.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163pxbyunan.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163iebbbebh.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163lqhfihag.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163ihezaflg.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163ahwgenzg.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163shxytkbx.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163dgrcppio.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163fvtqnvuh.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163eoqlbtas.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163isdkhgow.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163pwlouepl.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163rfzvtpvb.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163arsglvel.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163uvddszdi.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ywupczez.html

[U105] JS：节流
来源：http://www.xuanzx.com/163ayxmhahn.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163feiuffai.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163cuurjhav.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163dwohrrsg.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163pjoorylw.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163maimovdd.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163ihccfweb.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163iicszyqq.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163kdoucmee.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163dpmxgbvp.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163dmwaxrrh.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163jswnoctq.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163zsacvojx.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163reqyhzjd.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163rqrvtxrq.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163ablgycah.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163qfqgcarl.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163awyirvcl.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163tatokkty.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163vddhtnsf.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163ocvajouy.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163mvjpabce.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163tqaxlcrr.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163mxbhtzet.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163kpmhlhoc.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163tnllkqcw.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163dlmybfdv.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163chevzwgr.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163ebemprvm.html

npx vite build
来源：http://www.sxryk.cn/163vkbowfxi.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163nqaxdawq.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163pmkzrsky.html

================================================================================
来源：http://www.sxryk.cn/163tzdxouju.html

统计汇总
来源：http://www.xuanzx.com/163vnnebgfq.html

================================================================================
来源：http://www.sxryk.cn/163obzeasgq.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163rxuptspi.html

Python ......... 252
来源：http://www.xuanzx.com/163gaqgtndq.html

PHP ............ 252
来源：http://www.sxryk.cn/163ilzhsote.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163svfkgxnx.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163mowcjtlv.html

Java ........... 212
来源：http://www.aibaodan.cn/163eqlohvdh.html

Go ............. 212
来源：http://www.sxryk.cn/163kuwwyvyw.html

Ruby ........... 212
来源：http://www.sxryk.cn/163uimlrnxo.html

C# ............. 212
来源：http://www.aibaodan.cn/163ceaowbxu.html

C .............. 30
来源：http://www.sxryk.cn/163hfmzavcd.html

C++ ............ 30
来源：http://www.xuanzx.com/163brwvpuul.html

SQL ............ 90
来源：http://www.xuanzx.com/163chymbswm.html

Bash ........... 80
来源：http://www.xuanzx.com/163leedfalf.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163fhfvsndf.html

Swift .......... 15
来源：http://www.aibaodan.cn/163zvybethz.html

Lua ............ 10
来源：http://www.aibaodan.cn/163sxchgdua.html

Perl ........... 10
来源：http://www.xuanzx.com/163ihvesmok.html

Scala .......... 10
来源：http://www.aibaodan.cn/163spwvswqo.html

------------------------------------
来源：http://www.sxryk.cn/163kgrjdzgs.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163vxbwbkqf.html

按章节统计：
来源：http://www.aibaodan.cn/163ilkipvpg.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ufeilpqn.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163phsuivpm.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163vofggrif.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163qxnhlqyx.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163jxtmnoga.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163bwjaufav.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163xdjsuxuv.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163prpfhnhp.html


<!-- 参考信息 -->