外链999!wailian999！

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163iirwkypv.html

print "Hello\n";
来源：http://www.xuanzx.com/163balbxlsj.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163vbzwhgsx.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163zgbgoftf.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163vvjdbiod.html

"值: $a"
来源：http://www.sxryk.cn/163kakqwuln.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163jlpzaaro.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163agyrmjwk.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163tfetdtfx.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163dkycijjn.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163kjxyaavo.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163xxgjlzcm.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163bvfdodwx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163shjlqewl.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163xusirajy.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163wpjnippm.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163lpmvwiym.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163pwgqpyzk.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163jncazcki.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163laldicrj.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163pujyfvvm.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163nxcjwuwx.html

println("Hello")
来源：http://www.sxryk.cn/163hzioohze.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163wcnehdgz.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163yipizwsq.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163tjnrwtlj.html

s"值: $b"
来源：http://www.xuanzx.com/163tbsiikjx.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163bbdlswxo.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163dxygadwd.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163xfrdvyia.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163drvrdroj.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163ujnvhwdk.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163kuysezkv.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163swpvngbe.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163vifjgntp.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163cxjaskgp.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163gzdpihbs.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163nszcrzob.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163yqwgkhbg.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163poucehkt.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163fxxcyres.html

================================================================================
来源：http://www.aibaodan.cn/163mddcuckx.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ymwurizm.html

================================================================================
来源：http://www.aibaodan.cn/163maoupnsa.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163tbzfwmrv.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163wdkjxscj.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163uacsvvbe.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163rfloobas.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163bczhyhhf.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163vzfqaula.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163wjhquokg.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163rwpihghw.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163isnnuxpn.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ipnylgit.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163ensnnjjt.html

{**a, **b}
来源：http://www.xuanzx.com/163dxriznsl.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163zqnvwtkv.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163uwaphjef.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163pvgtquos.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163xvmzbdkg.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163qizywjgx.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163pprzsjsf.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163ytcaqdvl.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163kgeuytii.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163nlhulgje.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163jthivrfx.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163qmopmxmc.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163mspbqhqu.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ambwyyts.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163tnckdhyi.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163camxnwsv.html

defaultdict(list)
来源：http://www.aibaodan.cn/163idsvveyq.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163anbvvina.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163gxemxdil.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163jazyocon.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163pdcvjkkn.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163qevlefod.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163awiylqcl.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163xmngttbl.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163zdehfwir.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163pqbfziiz.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163gvcejmfr.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163yngafmvp.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163qdfgnfws.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163trubrqrt.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163euwzztzk.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163jqwbpuba.html

list(zip(*m))
来源：http://www.xuanzx.com/163yrcomtnn.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163dgnvtzpv.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163jjdewjjy.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163eqmlcsby.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163gowmfrgs.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163webyyyfq.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163hsfpqryh.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163yvqmvnik.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163geajsieb.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163vmhivkjj.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163sducinyj.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163eaatfnbj.html

UserId = int
来源：http://www.sxryk.cn/163xahpliom.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163cqnknqbz.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163lzyyinma.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163dcijcxyo.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163vhmzobqh.html

[U31] Py：单测
来源：http://www.xuanzx.com/163amxwipoz.html

python -m pytest -q
来源：http://www.xuanzx.com/163whdildyo.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163dvinqzup.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163uqywqwxl.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163fuwstagk.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163jmvknptl.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163tcemzbtt.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163ihwdvdlj.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163saiyshhy.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163ppwerdjd.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163hekynddf.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163gyfukxyq.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163ggeqdgtf.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163gjmuayyt.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163hkwxbovr.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163hbwtolgn.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163vqedcore.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163fkzrdoyp.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163kkmtrfmq.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ocxvbjhi.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163sewlayar.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163jhdeojos.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163vjujmpru.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163qllunlgn.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163hzwqcgot.html

namespace App\Http;
来源：http://www.xuanzx.com/163tlihspad.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163fpzfwwdj.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163sifyjuqw.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163zpkjpoaq.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163oaxsazau.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163khpuelho.html

?string $name = null
来源：http://www.sxryk.cn/163scpubnki.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163isauynnm.html

int|string $id
来源：http://www.sxryk.cn/163crssjouw.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163htpyfidm.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163qexplvxs.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163zeuokbbv.html

public readonly string $name
来源：http://www.xuanzx.com/163lkteakyu.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163cjpywmgc.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163holyjwyw.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163jznbwpjn.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163ffwhmjzk.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163dtbgdgzp.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163ghskrwpk.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163pvjrfjhi.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163dzwreowx.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163airprzss.html

$obj?->method()
来源：http://www.aibaodan.cn/163zlwmfiex.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163vkfqufhp.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163ycdtzzsr.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163rxevwhth.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163fpoilzez.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163moccsghc.html

"值: {$a}"
来源：http://www.aibaodan.cn/163kvhunkqe.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163fsbmwdgg.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163mgqgmdte.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163lgmcxchy.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163tqjuuhtu.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163zpfzmpbv.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163zqmnehbx.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163rxnbmyrj.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163lopjqpqh.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163istgblsi.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163lphoooub.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163wqgpytmn.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163oigqpgbb.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163cppqrbbu.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163elqklmyv.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163qbawzzij.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163cxxyerep.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163ixzmevav.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163rlkmglnx.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163ueafhwul.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163gadqexrq.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163suwyritq.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163voghzavv.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163ejnlidan.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163jquivbmc.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163atahvyqv.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163mudakgsh.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163hrkwqaki.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163oosdxrtp.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163brcfvtod.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ccumtgvg.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163jeafrhkj.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163jzoftrvl.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163nylogbpv.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163dsoxruah.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163vtrycsmv.html

composer require psr/container
来源：http://www.sxryk.cn/163bggeuhtu.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163qegmmbdr.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163zgsabvqc.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163znwpnwdj.html

composer require twig/twig
来源：http://www.xuanzx.com/163ibwrkdlx.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163xaqaxiee.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163nfbwarat.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163xksctyal.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163hycewxcx.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163xmttnkqn.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163ydylgpuh.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163hfonrbgx.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163vucscham.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163ckipjjcr.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163zdzqvakm.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163kyjiuuus.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163xfudrivl.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163nmorheya.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163bowrqyts.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163nbxmlaeq.html

a?.b?.c
来源：http://www.sxryk.cn/163amjdusmz.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163ufyjvskp.html

a ?? b
来源：http://www.sxryk.cn/163yygldlrz.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163fxsqzfwk.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163yscwdgjg.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163ywbjobfu.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163adganzqa.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163tmjunrxr.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163wvqmgzte.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163mgdnfrjr.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163kkzrvksf.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163drqtghfh.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163hryldqvu.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163bkoahrfa.html

structuredClone(obj)
来源：http://www.xuanzx.com/163unubbqdo.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163tktcsbux.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163iidpmyvi.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163ygmurwlc.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163lblvfcge.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163hrmwqjec.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163jnxsjnif.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163hdtamhde.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163nxvoobfr.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163lsgvkrns.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163tovojtho.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163kijtmodd.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163jwxlbliq.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163bnrbluwh.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163mfkemjly.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163hpvsqsfj.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163brijkhoe.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163lrbspzgg.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163rcuzbkdy.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163grlbxmmp.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163kbhfposo.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163gpdrwunx.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163yrsczgnd.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163iovybiqg.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163nvlmbgpe.html

[U105] JS：节流
来源：http://www.sxryk.cn/163lwrfyrjo.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163yadbqpem.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163uetczjjh.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163qdottxyz.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163tmsmjtgl.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163chmsztyi.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163aerpatzb.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163epsiwltj.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163ayetopva.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163nwbwvgam.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163kuytexrb.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163vjmuyzox.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163otenmlgg.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163ojbbpchc.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163dzfluglh.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163grjvfzfp.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163ymfjnxam.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gkpqzsca.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163gjnelzlp.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163svcjodhg.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163ubhnurhm.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163luvhsgcc.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163giwbrtph.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163fiajuhaw.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163glgjklru.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163wjolhkmf.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163zfkwdkqq.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163blfjswfy.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163qazxntqr.html

npx vite build
来源：http://www.sxryk.cn/163vsqulyzc.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163vxzncagy.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163fteejufc.html

================================================================================
来源：http://www.xuanzx.com/163okuqpnpl.html

统计汇总
来源：http://www.sxryk.cn/163vjtprjwk.html

================================================================================
来源：http://www.sxryk.cn/163endnxzzs.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163ibnrrcro.html

Python ......... 252
来源：http://www.xuanzx.com/163zwszbzbi.html

PHP ............ 252
来源：http://www.sxryk.cn/163ciljhbov.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163kkxwqjpk.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163ittljsot.html

Java ........... 212
来源：http://www.sxryk.cn/163svxpnzyu.html

Go ............. 212
来源：http://www.sxryk.cn/163fwjpvrsa.html

Ruby ........... 212
来源：http://www.sxryk.cn/163samxrerf.html

C# ............. 212
来源：http://www.aibaodan.cn/163rfceerja.html

C .............. 30
来源：http://www.sxryk.cn/163csqupupf.html

C++ ............ 30
来源：http://www.sxryk.cn/163znsoxbnp.html

SQL ............ 90
来源：http://www.sxryk.cn/163snehoipw.html

Bash ........... 80
来源：http://www.sxryk.cn/163tyidenvq.html


<!-- 参考信息 -->