外链999!wailian999！

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163qwpywzwe.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163nnpddimg.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163stafovwj.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163gqonvtkf.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163yylzjxkz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163vwezskkq.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163oomxqgjh.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163avgklkbg.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163sjehxpvj.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163xcrfyhgv.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163qdtffpud.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163kkgxvhov.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163bckungqh.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163nxtbrsms.html

println("Hello")
来源：http://www.aibaodan.cn/163mcqfswye.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163xsmtmvuj.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163xxmrxinr.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163ydketloa.html

s"值: $b"
来源：http://www.sxryk.cn/163esadtzia.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163kpuqrbqk.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163vfuzrnma.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163ogjqlzbk.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163qispxsgo.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163xmwotixa.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163roxlhigg.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163jqjnmihq.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163xvyityyg.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163pyidzdsk.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163vtojuotg.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163zljqsolh.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163nzjvolib.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163vsycwtev.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163mcsradir.html

================================================================================
来源：http://www.sxryk.cn/163klsrdcna.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163bidltids.html

================================================================================
来源：http://www.sxryk.cn/163wxclzlqf.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163yasqvdeg.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163qgryishg.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163uegsdfuo.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163ckpsglcl.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163omtvujqc.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163uwaifbzb.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163glhkitqf.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163jrxoyhnt.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163ahlijief.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163otqbpbsp.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163bbtgcmnr.html

{**a, **b}
来源：http://www.xuanzx.com/163pcuxjged.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163lcwwvklz.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163meignqpu.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163yigetsif.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163kdyexkqb.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163dxmwvrhm.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163vpgjzhmw.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163qzqzlvlw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163eqbqotva.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163lonccfrz.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163eguhlhfy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163jjlnnhhd.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163whgysvqw.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163qxzwssiz.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163tlbihrlq.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163oucotoax.html

defaultdict(list)
来源：http://www.xuanzx.com/163iirtrzuk.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163vigzyfxm.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163fpjaghjz.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163qbiqsqzm.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163tjtgwffs.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163ywutatka.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163ixlvxlhm.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163xpfuxwza.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163gqjfyimv.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163yvllmxup.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163uymzhskz.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163uznrfndl.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163rmvvbmoy.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163rnzpfwmf.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163kikkxlix.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163ucpbqadv.html

list(zip(*m))
来源：http://www.xuanzx.com/163jwjsyjja.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163xnudxxuz.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163nztaaesr.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163zxngtukd.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163bkbtjfpt.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163sqztqvop.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163pvutdlal.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163owzjitig.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163eepsiwsr.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163yybwldcx.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163oqcbegui.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163ifycoolq.html

UserId = int
来源：http://www.sxryk.cn/163svvtyhwi.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163zgrcwvwc.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163gkppzpar.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163ekbmdqvy.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163olymnzzl.html

[U31] Py：单测
来源：http://www.xuanzx.com/163pjalireb.html

python -m pytest -q
来源：http://www.xuanzx.com/163ttoseavj.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163hscetpye.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163mpnekpzx.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163jeuazelp.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163ciuiszld.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163avymucsx.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163ycrfpppd.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163bntiuual.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163ikdpiics.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163cdpblwqd.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163dyfvxmfe.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163kkbabxbd.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163vdwwmayc.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163fnytesyk.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163nbnueupp.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163cpkgaofr.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163dihmxpde.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163uopkojqq.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163xtkakvyl.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163gecvdktd.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163kcgwlwal.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163noqjuyfg.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163gbjtznuc.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163ensfcjkc.html

namespace App\Http;
来源：http://www.sxryk.cn/163czfgwxge.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163ojwhzacx.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163nerynaar.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163ilwpxrul.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ohqhdjpa.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163tvqxgdaw.html

?string $name = null
来源：http://www.aibaodan.cn/163mzcnkkyz.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163pelniitx.html

int|string $id
来源：http://www.aibaodan.cn/163woehuead.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163bkxkrqyo.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163vnojzoou.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163pgodjmow.html

public readonly string $name
来源：http://www.xuanzx.com/163wqovgelv.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163qiozchte.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163rrjbjiqj.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163ujbkkwts.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163ufacbzps.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163npsirotn.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163kegpxwwv.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163liryowun.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163gqqpsipv.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163yglhxrxw.html

$obj?->method()
来源：http://www.aibaodan.cn/163nxxwslxv.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163spcpnymp.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163hblgyymo.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163gnltauun.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163uvxftfjn.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163keyklzce.html

"值: {$a}"
来源：http://www.aibaodan.cn/163rypekcky.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163fwspkbks.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163ezzkdinb.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163mziawrrx.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163szpjjkbo.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163fwzpsved.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163ekqiggqw.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163cinelkgb.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163eturypcz.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163rvpbpefd.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163dfefkbzb.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163efxxvipx.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163qburyhcp.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163eofpjghm.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163iybyuxeu.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163vqshppas.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163uycuiwtv.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163tfvkatwy.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163xkujaavk.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163vhlrfqet.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163rlvvrysa.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163nntuhlav.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163qadeldyv.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163bstuhmom.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163grlvvqne.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163worqipbl.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163ouhqlolo.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163puatbqrh.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163johpiobu.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163rnklqvnl.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163tgyiwzqu.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163uddyxydb.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163mtvyzrml.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163vglqrfll.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163qudibwzg.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163edjnslpp.html

composer require psr/container
来源：http://www.aibaodan.cn/163jcdkwpke.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163lztbzczv.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163dbishrfp.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163ubtnwuto.html

composer require twig/twig
来源：http://www.sxryk.cn/163ibnrdmxv.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163hklrtrvs.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163ejuprodc.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163srpkoqve.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163badcpjlf.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163awwhaddq.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163webgtwew.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163rehswfyj.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163ziiwfgcc.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163dlwrzxgw.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163nscwpdfs.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163bpurpstb.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163dapafcil.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163igtjaxxi.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163glhdycdf.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163mbsgrwin.html

a?.b?.c
来源：http://www.aibaodan.cn/163thucrlig.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163pulbirru.html

a ?? b
来源：http://www.xuanzx.com/163ntjxjftn.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163ysejzdjb.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163vrgpbloq.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163fclfgyaf.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163rdeujfys.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163owpelbqn.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163emhbiuxa.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163ajzigfvq.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xchgyvpt.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163ijkdincu.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163nlwmzltt.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163ndjsdivp.html

structuredClone(obj)
来源：http://www.xuanzx.com/163txqzyvvp.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163endxpugu.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163pkyittja.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163tbossalq.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163kscsoxwk.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163ovpsgwbm.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163baltgvnr.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163shkkuyya.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163uiidzkuh.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163bzsjhmng.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163wxovnbmo.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163rmaekvli.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163bnfwjnht.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163johfziog.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163rtbpbmja.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163pnttgkzd.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163xgszkovv.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163zbdvyzgt.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163ditbvysv.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163dxhwhywr.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163ruhxzawm.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163vbbfztku.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163bjriqrfv.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163rcaxwqzz.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163sfsbfndh.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163dazkrble.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163hqsnxevq.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163exuusgpp.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163lukfpoot.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163rswdeezi.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163kmwzlqwk.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163aqarxpnn.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163cqmjhhqd.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163svhdkqsb.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163rhcgegxd.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163vgijfhcx.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163jddzogzc.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163acudaovs.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163ccspzucl.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163ckufxbkw.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163kvozkgag.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163dewbugke.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163yfwthytx.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163elrylzqw.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ftskpaog.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163ibrkoxpx.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163oixxhkzz.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163quswysbv.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163uvljbfhm.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163mohaxmqc.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163aytasgrj.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163ulbspgmm.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163gwusxxjt.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163xrowfxim.html

npx vite build
来源：http://www.sxryk.cn/163doyrumaj.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163kpdmxkjg.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163rkvmksii.html

================================================================================
来源：http://www.sxryk.cn/163nkihnzbx.html

统计汇总
来源：http://www.sxryk.cn/163hltfafyc.html

================================================================================
来源：http://www.aibaodan.cn/163ajmljjso.html

按语言统计（条）：
来源：http://www.xuanzx.com/163kbktmxop.html

Python ......... 252
来源：http://www.aibaodan.cn/163oizkuvkx.html

PHP ............ 252
来源：http://www.sxryk.cn/163celhoctv.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163gcdehzvc.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163lrotczau.html

Java ........... 212
来源：http://www.aibaodan.cn/163loudrovx.html

Go ............. 212
来源：http://www.sxryk.cn/163nopditnd.html

Ruby ........... 212
来源：http://www.xuanzx.com/163vkkgphif.html

C# ............. 212
来源：http://www.aibaodan.cn/163bbelciot.html

C .............. 30
来源：http://www.xuanzx.com/163jxaoebmw.html

C++ ............ 30
来源：http://www.sxryk.cn/163hotqnvri.html

SQL ............ 90
来源：http://www.xuanzx.com/163mxuevhlp.html

Bash ........... 80
来源：http://www.xuanzx.com/163uclipqfp.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163jbxrnqlk.html

Swift .......... 15
来源：http://www.sxryk.cn/163zcpgyzma.html

Lua ............ 10
来源：http://www.xuanzx.com/163joksfodc.html

Perl ........... 10
来源：http://www.aibaodan.cn/163mbunzfbk.html

Scala .......... 10
来源：http://www.sxryk.cn/163hadfeuic.html

------------------------------------
来源：http://www.aibaodan.cn/163fkxyuirp.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163ucduulup.html

按章节统计：
来源：http://www.aibaodan.cn/163eaojwiul.html


<!-- 参考信息 -->