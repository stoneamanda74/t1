外链999!wailian999！

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163czvquemk.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163hjzckkfd.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163hilcylap.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163llocfmdt.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163qsvolexv.html

print "Hello\n";
来源：http://www.sxryk.cn/163dxklyawi.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163zynjmqbu.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163svazmwxr.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163hmaafbvb.html

"值: $a"
来源：http://www.aibaodan.cn/163ghhnvfco.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163nmiytuar.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163akxmbjyo.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163qylxrlly.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163aswxbnng.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163ckbjfalm.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163lvmifpfx.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163hslksoaz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163yluspavr.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163qgyskjen.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163cuavktjq.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163tgcjfjtc.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163otucmisy.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163hzmwtlrp.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163kofltdjc.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163jbbixdhd.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163egoddhye.html

println("Hello")
来源：http://www.sxryk.cn/163cwllriki.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163akjsofja.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163mmfsffgs.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163isqoaqvx.html

s"值: $b"
来源：http://www.xuanzx.com/163gsicyvwf.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163jdrhmqou.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163oenrpule.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163qizobtpg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163daozwhuq.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163zwaxinjh.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163lcdzypzs.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163dpaaiubh.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163ldxxtgzp.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163aulowhtf.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163zzvvoual.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163vijkqxfr.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163bftxbixe.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163oueweiih.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163qqleqmun.html

================================================================================
来源：http://www.xuanzx.com/163mbcndigs.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ifegrgmo.html

================================================================================
来源：http://www.xuanzx.com/163dylldccj.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163motzdfhg.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163ajxvhlso.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163qhfptppj.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163hubxyzeh.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163tmyuaeow.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163qvqodhqs.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163ovyaeztb.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163michjiua.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163tnnlpbya.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163pyevqdlh.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163smcajnft.html

{**a, **b}
来源：http://www.aibaodan.cn/163oaflxhmz.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163avjgfugy.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163ieeeqoeh.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163pmcasuhn.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163yftehctr.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163tdpuantr.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163dnofwyeu.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163zruiriao.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163ezggcsgf.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163idmcnsyp.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163rhlebivt.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163pqnihoav.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163gdmlzbpx.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163rvntuoss.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163byuuzwqg.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163peonqzkx.html

defaultdict(list)
来源：http://www.sxryk.cn/163gwymbkyo.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163iwitdfln.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163fqexiclg.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163ykzgcijv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163fsibgsfx.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163umxyccov.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163osrmzalb.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163pggfwtgz.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163vvqvgsez.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163lhwmqvwh.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163lerxnwfy.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163rvokkacu.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163iqrcqpbq.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163hwmtdaxo.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163xqcfcvxk.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163qcotyazw.html

list(zip(*m))
来源：http://www.sxryk.cn/163gtmhnnoq.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163vwtryxoe.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163egdnyxva.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163ymzzsgki.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163ltsukmsa.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163ozudbcpt.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163udsquzap.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163puwgnfjn.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163kwejnogj.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163lqvftins.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163skrboyrp.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163xpntkxpl.html

UserId = int
来源：http://www.sxryk.cn/163dnzjxola.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163hojmdezl.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163lnrzlbur.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163lebgcusp.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163ieimnlaq.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163nbelvewe.html

python -m pytest -q
来源：http://www.aibaodan.cn/163mhppbkaf.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163rkexilsd.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163ftpnnfvg.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163flyyldlq.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163miwyerdm.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163hlbffrqi.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163hvxjgwgq.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163zvfojxnr.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163bxoioxev.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163bbawfmlk.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163anhsyfdl.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163fmyikrhm.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163ukzzgxmh.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163rnybhzxt.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163kxcmvais.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163fcdzcxfb.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163ulwigkde.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163eguemwcc.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163qbzctvee.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163kbdhonxj.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163mjikbnfk.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163cktehita.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163ektrrxky.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163fqrrarmw.html

namespace App\Http;
来源：http://www.aibaodan.cn/163tzrfktjr.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163rnnnwpuu.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163inbbupga.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163lxxioueu.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163cyqokgdh.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163igeedscr.html

?string $name = null
来源：http://www.aibaodan.cn/163sbxryaau.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163crfnyffi.html

int|string $id
来源：http://www.aibaodan.cn/163gqhzexcx.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163yuxvkqua.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163gbunabms.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163bzvksjzh.html

public readonly string $name
来源：http://www.xuanzx.com/163bjoozeji.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163rczcqtxi.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163hlukumtt.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163gspfqqmk.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163vziqaqll.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163ixzfomsc.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163akcavneh.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163bidcczii.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163cuetqjxq.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163yvobgfqa.html

$obj?->method()
来源：http://www.xuanzx.com/163uxgxxqpe.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163edwbjhfo.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163lgeinfrl.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163fetzcpmc.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163eglnyhdr.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163oiyxzyuk.html

"值: {$a}"
来源：http://www.sxryk.cn/163qgmngvux.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163hfclbtoi.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163ukkijuue.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163lhicgxqe.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163oyjsleso.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163jprctxkb.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163bowacfzc.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163ntwsltmc.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163aqdyuecw.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163fnifatkw.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163qdpxzmtb.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163rznrgnfa.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163feptdyne.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163ibjmkgcv.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163bsljtvxc.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163rlclvewr.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163oietwgng.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163ohpthhqj.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163wgletcdo.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163oczdtsvx.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163pdxllpwx.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163zbaychec.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163llhbryrj.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163cbvioeyu.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163eiomzyrn.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163cilzjucv.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163ptosnpcu.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163iluxsxrh.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163wftcshhl.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163myelyyas.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163ohgaoswh.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163tbkguooy.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163bihgcser.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163flzcvpej.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163vhpixnei.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163vcqjdpml.html

composer require psr/container
来源：http://www.aibaodan.cn/163mugfhbgv.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163ewfgfftp.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163ktytzpnz.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163musnooai.html

composer require twig/twig
来源：http://www.aibaodan.cn/163yhstmodz.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163ldxmsyzp.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163lhvbkmuy.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163alwgqtbs.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163xyzitqoq.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163ulcjlziq.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163buurqyxt.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163iyzgqnrk.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163sqaeccls.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163qynywuvb.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163vmbhsjaj.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163tkqfuvgz.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163bnrdjxhr.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163avyvmxrf.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163yizirgzw.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163kexoospo.html

a?.b?.c
来源：http://www.aibaodan.cn/163nfyjdlhf.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163jaxlltot.html

a ?? b
来源：http://www.aibaodan.cn/163znmcjcuv.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163bjawpaby.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163xlzndxjt.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163qccgnmeo.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163jjyqumrl.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163otnhpzjk.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163fajzcrrh.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163tgudvcrw.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163rtytxcoi.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163nlbdqifv.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163eteqnndr.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163cccljqgt.html

structuredClone(obj)
来源：http://www.sxryk.cn/163ssyrtbwl.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163uuxziear.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163zsevabcy.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163cnkkacsy.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163gsujlrxl.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163gsbgicvm.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163fwtqusda.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ueastmkb.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163clfppaim.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163afmfbkno.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ysmzcjgl.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163pqruwbve.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163dnlpkmrt.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163xkeqwvok.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163aawcmuty.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163dtwqaips.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163lkdbtbwv.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163ewskwydp.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163vrhoovvv.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163xldxcxdp.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163arxzvtjx.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163ljcaboqr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163rrthfxgj.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163vgvgjcsa.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zhcehhqn.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163gtqfhdcv.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163phhyipwu.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163aomclbue.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163qvbplwks.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163osszkhfj.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163rbmfufll.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163nrccliwo.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163dfeivrnp.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163eejotuiv.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163rnvjfjjt.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163tcozbhru.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163myeunxzo.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163ylnpxxwj.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163azjshqub.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163fucsnlrz.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163xmydrkck.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163onwsgrxp.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ittzpbxj.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163elegfqgs.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163idizmbwr.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163mlzuhkaw.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163gorulwwy.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163rosnrghm.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163jnolwryf.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163xtuiijjz.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163tckbpqqj.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163yriefcbh.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163ymmhdxnj.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163jvneuzht.html

npx vite build
来源：http://www.xuanzx.com/163guonilof.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163kuxrcana.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163ucgpnwub.html

================================================================================
来源：http://www.sxryk.cn/163buhjntuv.html

统计汇总
来源：http://www.sxryk.cn/163mopwpsec.html

================================================================================
来源：http://www.sxryk.cn/163hhqvufax.html

按语言统计（条）：
来源：http://www.xuanzx.com/163sassigvs.html

Python ......... 252
来源：http://www.sxryk.cn/163txeswfei.html

PHP ............ 252
来源：http://www.xuanzx.com/163jpktsbor.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163rbwtgtyl.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163kvgwxgmp.html

Java ........... 212
来源：http://www.aibaodan.cn/163uqycsgix.html

Go ............. 212
来源：http://www.xuanzx.com/163uyiacaqk.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163wnzzjjxv.html

C# ............. 212
来源：http://www.aibaodan.cn/163cplbjlnk.html


<!-- 参考信息 -->