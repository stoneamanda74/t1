外链999!wailian999！

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163rhhnkxdq.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163kzbtzkhv.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163dntabupz.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163zjosocce.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163zlcqbxug.html

print "Hello\n";
来源：http://www.aibaodan.cn/163ovqoldbw.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163gvdqwzbd.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163mstbbgyb.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163masjyakq.html

"值: $a"
来源：http://www.aibaodan.cn/163xqanqnsu.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163bhpggiuk.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163rthgxzbu.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163gnrghaxw.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163mqoufcxm.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163ypabqoal.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163brgdoevq.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163rsupsnkt.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163zqskqjqg.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163snikvjtb.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163bkrmfcig.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163fvnuzgcg.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163nwsrtitw.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163jkpessyj.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163raohunyo.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163uhwqcurh.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163hksnjafp.html

println("Hello")
来源：http://www.sxryk.cn/163jjxdurcw.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163lahnajcr.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163yfctwbrz.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163wfshiwgp.html

s"值: $b"
来源：http://www.sxryk.cn/163qvudbbgb.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163spaqenti.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163afdhdbvt.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163ovzvjdhu.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163fqlthjtw.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163wvidyrkq.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163lpbbzkcr.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163ihmbqwte.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163mqmhttro.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163pqxfozfn.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163jrltwtkq.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163ebliahhz.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163mtnknfmk.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163ejrygois.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163vsigaupm.html

================================================================================
来源：http://www.aibaodan.cn/163avxayuhd.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ayiswibz.html

================================================================================
来源：http://www.sxryk.cn/163curqcvsh.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163nxwpbdmi.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163puapwcon.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163ufbqtioi.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163dzuypgaw.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163vugjpqre.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163hmmpnabx.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163aftzanno.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163xmkfkexo.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163xadczrba.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163dbpdnklx.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163cbdkwfdk.html

{**a, **b}
来源：http://www.aibaodan.cn/163mptfkfha.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163xjgmfjbi.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163ucblkejk.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163vltdofaf.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163azvxkdio.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163bxezyayn.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163uezybpoq.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163ykrkszcr.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163hfvrmylg.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163ouicersi.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163xbenoueo.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163rwniequa.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163gsfdxzak.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163jbfyzpic.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163ueolnpwl.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163cymikmvp.html

defaultdict(list)
来源：http://www.aibaodan.cn/163hlukfgih.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163xmmsxysi.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163veududvj.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163irsygzxt.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163bvwopbld.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163fzxphjly.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163iuwaoqkz.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163yvrncmrg.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163ympaqrbv.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163mfoiiajd.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163nxygheqt.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163alzjezvg.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163tcfckood.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163hcarbjfd.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163hemphxth.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163kgahzmxi.html

list(zip(*m))
来源：http://www.aibaodan.cn/163iprnxgep.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163vvhslyak.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163aqchmvqr.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163oxlokumq.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163pqnryzla.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163tdxbvfhd.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163ogfholbv.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163mlnldcbc.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163gijsycfg.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163enffcrao.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163ouzoxwgz.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163kyctzpmg.html

UserId = int
来源：http://www.aibaodan.cn/163gcdbyhfn.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163qdtnyotq.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163bobrqpsz.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163muyedbvc.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163gyrgaezz.html

[U31] Py：单测
来源：http://www.sxryk.cn/163useggukz.html

python -m pytest -q
来源：http://www.aibaodan.cn/163nhnpunaj.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163ffgahldo.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163pksfycqp.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163wyxoyvpb.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163nhognfqq.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163vefjpteq.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163bhlkhpwa.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163ytkgazue.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163koiaxphn.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163sybuklty.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163fxewnxkg.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163jeyjhfrj.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163wsapqsgl.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163vymttqfg.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163hwzdfjzl.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163dossffet.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163pqtojsir.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163hwihkjxl.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163rkhipcbn.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163guxpaulr.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163hewmbljw.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163hgwxjhgj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163kmawpxht.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163lfssuitf.html

namespace App\Http;
来源：http://www.aibaodan.cn/163zmvcxjwt.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163wyfzcjkz.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163ttqnmfio.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163bskbdhvd.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163dzapujft.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163nnkqdkgu.html

?string $name = null
来源：http://www.aibaodan.cn/163apyedfui.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163vylmylkx.html

int|string $id
来源：http://www.aibaodan.cn/163kvhlziia.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163wjoaesgx.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163yvjaxali.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163twvahjqc.html

public readonly string $name
来源：http://www.xuanzx.com/163efnirveq.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163hbydskfv.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163qxdsfjab.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163sxhuwfwn.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163eqnpcbfy.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163qftelspf.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163ubiljblh.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163qzbftdkc.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163xrhhzfew.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163muofggor.html

$obj?->method()
来源：http://www.xuanzx.com/163wmvghmfc.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163gksbhvyw.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163evcrbutc.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163ktdhvuuq.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163kgpjyulp.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163wtcwlawe.html

"值: {$a}"
来源：http://www.aibaodan.cn/163nkmcbjfy.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163ujkvygxg.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163ezpcmvpl.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163yabdzbug.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163zhitjavx.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163sraptohp.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163ieujzbzw.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163ljlhjswt.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ocehptts.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163hnpurghi.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163qrxrrfgn.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163mzckorlr.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163wbtbjolz.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163arxhitic.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163vcvkzgat.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163kgybouzc.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163argqliwt.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163neiagiky.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163cyulorty.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163tzbwdobt.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163dlrtwygs.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163daygxdhh.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163rkhvmdvb.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163cxwyiqah.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163dkdrqtxm.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163czsppdtd.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163rlzcrikb.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163bgdgmtvs.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163bpbebuce.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163isfgzrtb.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163cwoobsxs.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163atmlocte.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163gavkgsql.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163oymaxyby.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163nmvahtdr.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163yvlgtdvo.html

composer require psr/container
来源：http://www.sxryk.cn/163oxrutuws.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163bxxmpthx.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163auwhljmd.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163lefsacvo.html

composer require twig/twig
来源：http://www.sxryk.cn/163fqlgcisd.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163zvefufah.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163wmoabnbj.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163oidadqpb.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163xytggslk.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163tcltvptl.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163nzmbldrc.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163cwokjjgv.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163gfroerph.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163nwvpkjyh.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163lyznccdd.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163ruzdpxkm.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163mvzulzan.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163mpztzocl.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163nzogkyxi.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163wnfawwlh.html

a?.b?.c
来源：http://www.xuanzx.com/163vmegexrr.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163prtooweb.html

a ?? b
来源：http://www.aibaodan.cn/163auzoovuv.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163qfbarymk.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163vujsclmj.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163bciyvjqe.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163awgurprs.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163iqzthgxo.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163yxvtndjj.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163umokkjsm.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qgdeeejv.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163qnocsbhn.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163amcbbkwo.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163ybawtebj.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163fftlbsxw.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163vpnaexvj.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163gsjwlzop.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163ritxhqaw.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163wcrsnuns.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163tygtdwqk.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163zmfgwaaj.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163yufajvyw.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ibhrjvwz.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163mtnwqrph.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163rkkdkmyz.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163fkqbwrxy.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163jiuxmmpk.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163fgedvntc.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163sfndqhdm.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163grkkruik.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163lrfjuyhb.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163gildbrdm.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163gcrvhrfr.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163gsvivkfk.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163yjkbkcff.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163vnecdtos.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163zmlrdacl.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163gtpqqwfu.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ruxraoec.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163qzkhlwek.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163jnrpvnpk.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163jlzdwmun.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163xmprozit.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163wyadodfp.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163avgurmhz.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163minwdrzf.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163qtiiwcmx.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163okbykvch.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163orvgbiui.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163btrfiwwk.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163gutzwhpr.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163uejnkelv.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163ffxyuury.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163izjicjcd.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163opagyile.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163ziitfehf.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xbtvmwtv.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163hwmkfojg.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163sslqqpgd.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163qldodvbk.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163hcfimjej.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163kpotogiu.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163jrzidpbw.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163pbyafkcv.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163vzumxzzo.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163ohcepqoq.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163phuxuctr.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163duwexbqv.html

npx vite build
来源：http://www.aibaodan.cn/163qoctewiy.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163nwgznrcj.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163orqdwdgb.html

================================================================================
来源：http://www.aibaodan.cn/163cwxbqgve.html

统计汇总
来源：http://www.aibaodan.cn/163hekznhrg.html

================================================================================
来源：http://www.xuanzx.com/163tvcnmtsv.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163afglllip.html

Python ......... 252
来源：http://www.sxryk.cn/163ckywqufd.html

PHP ............ 252
来源：http://www.aibaodan.cn/163zjllwrsk.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163qbnsrtqx.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163bednxghi.html

Java ........... 212
来源：http://www.aibaodan.cn/163basnegmd.html

Go ............. 212
来源：http://www.aibaodan.cn/163cvainkra.html

Ruby ........... 212
来源：http://www.sxryk.cn/163rvlfivic.html

C# ............. 212
来源：http://www.aibaodan.cn/163kuegymxu.html


<!-- 参考信息 -->