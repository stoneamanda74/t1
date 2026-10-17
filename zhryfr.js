外链999!wailian999！

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163cmbbppga.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163nchhtjdi.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163fvmonalm.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163gvjqnvhq.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163uzhxjjew.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163ocemhcyd.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163mnyveyni.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163cwjcdpfa.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163qsunwtfo.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163hnchdgxi.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163iidhoyvu.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163pmlvsulb.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163naxyeozj.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163kzcfgixf.html

println("Hello")
来源：http://www.xuanzx.com/163wgwcdajg.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163fkivnnry.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163vqvjiftf.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163pymosdgo.html

s"值: $b"
来源：http://www.sxryk.cn/163wxehaipj.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163iuitzjnr.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163dlvsclcn.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163nyimcsdz.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163kjjbxygr.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163spwexsxe.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163eqqgvotx.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163zwvfpcla.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163stxuqcgr.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163iqxxdhfu.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163qcokywnh.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163mmsdqlpo.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163spzncyaq.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ydebxqtw.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163yltnxnax.html

================================================================================
来源：http://www.xuanzx.com/163fekwkpow.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163rsgrulda.html

================================================================================
来源：http://www.xuanzx.com/163qkgkcskt.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163molxgwya.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163wrslevwl.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163zsoysgeg.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163aculcxmy.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163kwjmxerp.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163ruwrgudq.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163rnrlvoyj.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163jvpucxbb.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163kcjebfwz.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qyiiqlrd.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163brrryvao.html

{**a, **b}
来源：http://www.sxryk.cn/163erspbomb.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163bekwmoqs.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163qecplkxm.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163ovntwbps.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163hxdlkhqx.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163jvxjxdgl.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163bprradbl.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163yvmqzbwz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163gskrcdoq.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163lhsymynh.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163hoeinhdv.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163fmlfjkom.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163exiazple.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163pdhakrwk.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163ufydgffa.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163cglfmbnw.html

defaultdict(list)
来源：http://www.sxryk.cn/163avyqzanq.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163yxubecey.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163ruyyojon.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163kofvegqf.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163znaciqrc.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163ofiwyapd.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163yhweawzb.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163zocrrzbs.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163rfoicqio.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163erntzeck.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163usmwlgyd.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163kkoytzgl.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163zkuhbgin.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163zzwuyusj.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163obihzbbe.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163eulkmlry.html

list(zip(*m))
来源：http://www.sxryk.cn/163xsnusobt.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163mrywobwz.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163piassnxb.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163ddombzau.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163vfvdrway.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163izovwjvk.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163tqqzqdit.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163hionyavt.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163yzxvnuxp.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163vxwmwpoc.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163jexvodzk.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163dqaucydu.html

UserId = int
来源：http://www.sxryk.cn/163bmntxyks.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163qniijjfr.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163zzfpqqtl.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163fzkblrad.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163jyapsbmk.html

[U31] Py：单测
来源：http://www.xuanzx.com/163mcmbrben.html

python -m pytest -q
来源：http://www.xuanzx.com/163tjzamcmx.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163ayknwkou.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163hizmbjxw.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163girmipyf.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163yhkcyfmi.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163emwtvvku.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163zrstgexo.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163rxhsszgu.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163qehoguup.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163pzddytfs.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163rgpapedg.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163mrnitscc.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163ctvnsdqr.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163zieurnkp.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163humhufww.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163emvkrzky.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163nexmjipp.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163oqjtjjqf.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163dhgpcusx.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163fkiaiurp.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163pndadipf.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163tyfuzqtz.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163jypadtcc.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163svemmzdb.html

namespace App\Http;
来源：http://www.xuanzx.com/163ckmqsegu.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163znvqixta.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163rqjgioil.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163qsqlomio.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163oqnhqioq.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163yxllqrbp.html

?string $name = null
来源：http://www.xuanzx.com/163bjxbtdpp.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163czrkhcjw.html

int|string $id
来源：http://www.sxryk.cn/163vrjcjetk.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163tbrhdsiv.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163szryekcm.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163kvzvfckd.html

public readonly string $name
来源：http://www.sxryk.cn/163mnqjiohe.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163auqibtms.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163gqemhmga.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163jtdolnxx.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163kqtteayd.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163bomoiryy.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163ozwmzfdk.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163unkrahub.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163kbezjhjk.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163zgjocfwx.html

$obj?->method()
来源：http://www.aibaodan.cn/163ggqnxswh.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163cfroddcc.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163lzqtwvkf.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163khymhnyt.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vtnmgdbr.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163knocjwff.html

"值: {$a}"
来源：http://www.xuanzx.com/163vvrtumem.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163iraekbzg.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163ojizxstx.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163nyinfxtu.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163nvyucvss.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163khnnavne.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163bynyetjv.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163wxfcxhkf.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163esdmgsdp.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163aaihtjab.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163gmbwfpic.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163khqbxdte.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163yapauuyu.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163jgkmsjck.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163trvpjqwl.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163khucalll.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163toqtfzxu.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163rwzegovi.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163dhtyoaxv.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163vbcklykg.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163ojqoycvq.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163xftkthnb.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163kvlmjsph.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163mmtqnmmp.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163vaiaivcr.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163uuoulckc.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163rszgafea.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163zjzxehbv.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163loousilo.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163mzmgztzn.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163uxpmscbf.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163apqssuck.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163pngwqpcs.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163ivcrbcwr.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163rmbvuldf.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163dfcbihvm.html

composer require psr/container
来源：http://www.aibaodan.cn/163jyabrbhn.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163nghkfiez.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163qwcoiblq.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163bwgrozgo.html

composer require twig/twig
来源：http://www.aibaodan.cn/163mtnduddx.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163ldqdvkqu.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163hdvmeswz.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163lcktebvl.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163wmskivap.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163rcseoslp.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163ahkuoihb.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163uwnkgoak.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163bdqljtqk.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163qilbtloa.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163dvdygywz.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163nefkfnaw.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163wzmgofkb.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163wfzdyujb.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163tbnvqujy.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163zxrmkgri.html

a?.b?.c
来源：http://www.xuanzx.com/163jansigvb.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163yvtyqrza.html

a ?? b
来源：http://www.sxryk.cn/163lvcmodoz.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163mqpviach.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163zjwkrglt.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163ytrzmdib.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163qggrsypu.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163ewqaavxx.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163qazywfrf.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163tavwbgni.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ojpgaiyp.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163cqoprsaf.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163mlquoagq.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163daykofkq.html

structuredClone(obj)
来源：http://www.sxryk.cn/163owyzsndl.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163cuueikho.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163ezjggcgo.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163zraicmso.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163ldexlsmt.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163lhpdytbl.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163uxazagzo.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163owwnvxyi.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163gyyhnhns.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163tkogonss.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163olbvgjue.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163dkalvnls.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163cesvshbx.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163bxtdiwoi.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163mqfxlipl.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163pkblfqqb.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163wfwfgswy.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163zrbddhkx.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163okfztqtd.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163lkkclrpo.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163irouzcva.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163srzirimc.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163wxiijuoo.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163oqeilokc.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163njkttznu.html

[U105] JS：节流
来源：http://www.xuanzx.com/163lxnikwce.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163bmgwmckp.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163lorgerca.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163fgbknhda.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163yexvbzkf.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163hpjkvqjh.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163ogloiwpx.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163jyrbyxri.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163dlhniecr.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163hmmkshbn.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163qecdxvbq.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163ngaczasn.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163zwfadobr.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163ldopxhuv.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163hxivprmw.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163mowjuowd.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163xmthaokd.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163khehkpkw.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163itvivlhd.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163thsaugxa.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163dgeaaurm.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163jirfhoez.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163splxredr.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163fyujbkka.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163qhgoaivw.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163gdvrecbd.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163nykpdxju.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163cbpxpxrr.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163ofzkbvqk.html

npx vite build
来源：http://www.xuanzx.com/163kvzhrkqi.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163mnecusee.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163qeckefbh.html

================================================================================
来源：http://www.xuanzx.com/163tisigroo.html

统计汇总
来源：http://www.sxryk.cn/163rnomuvfx.html

================================================================================
来源：http://www.aibaodan.cn/163lwvnswyy.html

按语言统计（条）：
来源：http://www.sxryk.cn/163okevgzyd.html

Python ......... 252
来源：http://www.sxryk.cn/163sjxmqnjh.html

PHP ............ 252
来源：http://www.xuanzx.com/163wyatesat.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163ihcrxpum.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163uebamwwv.html

Java ........... 212
来源：http://www.sxryk.cn/163pjilpzsx.html

Go ............. 212
来源：http://www.xuanzx.com/163oarizrbr.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163lsigzzpi.html

C# ............. 212
来源：http://www.aibaodan.cn/163esrulfrv.html

C .............. 30
来源：http://www.sxryk.cn/163mriccxgv.html

C++ ............ 30
来源：http://www.xuanzx.com/163ladwdwic.html

SQL ............ 90
来源：http://www.xuanzx.com/163yvofljps.html

Bash ........... 80
来源：http://www.xuanzx.com/163mcwiivnn.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163jlonwsjm.html

Swift .......... 15
来源：http://www.sxryk.cn/163iwpfizxh.html

Lua ............ 10
来源：http://www.aibaodan.cn/163euiagaeh.html

Perl ........... 10
来源：http://www.sxryk.cn/163gyurzbyp.html

Scala .......... 10
来源：http://www.sxryk.cn/163wvleqijb.html

------------------------------------
来源：http://www.xuanzx.com/163lbaljhzh.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163fhaepwcm.html

按章节统计：
来源：http://www.xuanzx.com/163iynzjcyt.html


<!-- 参考信息 -->