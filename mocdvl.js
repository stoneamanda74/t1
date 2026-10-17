外链999!wailian999！

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163qigrgjmo.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163sdbudmqs.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163jhrhpgjk.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163cnwfipyw.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163apxtrkne.html

print "Hello\n";
来源：http://www.aibaodan.cn/163uxkfwgox.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163rmzzhcqm.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163awhkorcu.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163rwwwtpgm.html

"值: $a"
来源：http://www.xuanzx.com/163ynpzzuvb.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163arvavksf.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163hjxukvfa.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163hapllfiz.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163erkmxkkz.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163ambffvid.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ayvkqwkb.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163lopkyphp.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163uylymudg.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163yhryxikz.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163cpwbylby.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163nnggcmlb.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163pcogsevd.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163zcecwzro.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163zedcaqkm.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163aovmxmdb.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163lwlgsduu.html

println("Hello")
来源：http://www.sxryk.cn/163cobwmfbd.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163cgtureob.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163hxgmjphe.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163gkynvxgk.html

s"值: $b"
来源：http://www.xuanzx.com/163jhtrluki.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163calzxoxq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163qjmiveli.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163qccspyjh.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163yvqpnrxz.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163kcairkcx.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163mkathywn.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163mprlapad.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163filkafcz.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163pyxsytpk.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163makrqqfw.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163vpktoznn.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163kbekyfeu.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163mylfhnjq.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163xdeivqnl.html

================================================================================
来源：http://www.aibaodan.cn/163afnpbdtm.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163nucjtcgf.html

================================================================================
来源：http://www.sxryk.cn/163wwvcgcoj.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163jerrlyjv.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163ujjpbomz.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163cdlekxlf.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163wrlsfetz.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163zcmhgxly.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163gxgorqhj.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163ucdlqvas.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163qqojqfta.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163gfkoitax.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163szukwvjq.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163snssjxmg.html

{**a, **b}
来源：http://www.xuanzx.com/163xvgsdtqt.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163ycnmflyh.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163cctdvumt.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163sbkygpmm.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163mdsdggdm.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163scxyxqao.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163quhfqjdg.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163eyrdpywf.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163hpikfmgv.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163fpqzrmvv.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163jbelhsjf.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163nexsdonj.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163xaxjdnzo.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163egnnvrpa.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163jwdhzhon.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163sfgtkkyd.html

defaultdict(list)
来源：http://www.xuanzx.com/163jemqhgqg.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163qdlcqwly.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163gikjcbly.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163etgtfbjg.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163pcyjlxeo.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163eqseobhx.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163wrebqcxo.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163uwuutckx.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163qrjojwei.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163xnnrrlbr.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163oyhjjasn.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163jidqawvy.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163hhgchpml.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163uhcdboxb.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163bdiuvozx.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163zhxfnqcs.html

list(zip(*m))
来源：http://www.xuanzx.com/163spswehmc.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163tyljxjjd.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163jrmfotnp.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163czngwlir.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163pkdcorxx.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163gdxjmlqi.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163mafskret.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163moukluzf.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163ckqnkdav.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163ojdtzlqy.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163qeqmjdig.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163olxzznmk.html

UserId = int
来源：http://www.aibaodan.cn/163jklusvrx.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163omiccggd.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163wyjjahcv.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163ytddpfms.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163kdkyqhmh.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163yzwglylx.html

python -m pytest -q
来源：http://www.sxryk.cn/163qvlegrrs.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163oggptmjt.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163ibevhenq.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163erxinumw.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163clttgyqw.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163ekecahkk.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163grabjtst.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163vjqfoirv.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163musbgfzg.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163fzraykxy.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163jpdzgfbm.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163qarxwqjb.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163qupdtzkq.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163lsxnqubl.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163hfaiqfmc.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163satotovo.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163agiruwur.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163akkeiobh.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163clkanion.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163adehqtrd.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163cibfdkbf.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163qpcbptky.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163qmjbuvgg.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163esbmgnyn.html

namespace App\Http;
来源：http://www.sxryk.cn/163iifjpsfe.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163hjjagiac.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163xdhtjamh.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163wadwhfuh.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163fqlnneap.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163cqqkwtyq.html

?string $name = null
来源：http://www.xuanzx.com/163asxzezkz.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163kirzvyfk.html

int|string $id
来源：http://www.aibaodan.cn/163dgkeqxmm.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163mezgfuqm.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163yyntdfzq.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163wfkcjbnq.html

public readonly string $name
来源：http://www.aibaodan.cn/163dtkojfgf.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163cfsirxxs.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163nqnkwxjp.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163jgynjpfx.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163bayvicwi.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163hjkvrirg.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163fzhnvufi.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163fnwmxkxj.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163fkmwtict.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163jqgaonpi.html

$obj?->method()
来源：http://www.sxryk.cn/163vgeebszd.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163sfkftvfe.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163lruegdxo.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163euycizvh.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163pxgjtcsz.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163cfotyrmv.html

"值: {$a}"
来源：http://www.xuanzx.com/163vudzsdge.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163llxbaefz.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163aoaauxep.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163krxorseh.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163bhfdaocb.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163rvfrjngf.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163jbcgksen.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163qhjdnvxn.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163zukqdeew.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163stcentfk.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163yowravbs.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163wjtijndc.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163ovplzgad.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163cyspxnct.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163hcnlzgvr.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163jcaopqkc.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163suhuouze.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163ahozqlmt.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163xvyohkym.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163ndpgvdjv.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163gjqsbmwc.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163pxuuppaz.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163kghyajxb.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163kjgmwcxs.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163xybwvdbf.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163dwnpfphc.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163xjrycqvo.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163htsvbufy.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163xfuufvpo.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163zipcpiqg.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163qdmbexwg.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163xuizyijy.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163xttdrccn.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163qfgpmwwx.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163akylmxln.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163fnmbfxew.html

composer require psr/container
来源：http://www.sxryk.cn/163avnwoygk.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163tszhtcom.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163ysehzxba.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163qvpbbmzy.html

composer require twig/twig
来源：http://www.xuanzx.com/163cmwpnqjm.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163daqqnuyh.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163ijejqrde.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163dfeaaeba.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163raewhzxy.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163zjxvxduq.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163rroejoik.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163dwtreztn.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163mzxvdnxs.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163gugotfcj.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163celzugaq.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163wcnxggyk.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163tnaarexn.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163qkbqgjpp.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163frkacute.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163nghxgrwr.html

a?.b?.c
来源：http://www.xuanzx.com/163dtqjjcrh.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163qkdaphqz.html

a ?? b
来源：http://www.aibaodan.cn/163qukvtpqk.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163txwqwgzg.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163hcfohcfa.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163kjdjnxds.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163ivhthawz.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163emfqjanz.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163znqpgxuz.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163raudmduu.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163lesgnili.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163njxfcvtp.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163zrtnqsxt.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163veuwyqhm.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163xknyphlg.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163wfuphtcm.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163cuqoputn.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163gpyaathp.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163ijsoizpf.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163kqgyryvc.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163epozjfyc.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163bggtgons.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163xovhanqw.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163qksoyoxw.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163lchabrdi.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163qtcaksag.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163lgehhasx.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163zridfpoa.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163baxxcnrr.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163iryvsaqz.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163mtzmcyfe.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163vyepeinq.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163unldsxjq.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163mweatzgl.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163mescbszs.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163dkmyrrom.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163utoxgoof.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163gigwixef.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163srbrjuoh.html

[U105] JS：节流
来源：http://www.xuanzx.com/163tpnzvvkq.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163dvmblpgu.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163brjgpgxk.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163ivglsafv.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163gqwkvuem.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163txlbzhya.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163rkzokfuy.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163iembezkt.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163ygyqymgh.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163dxjqskjq.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163eyliegol.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163wpowqiio.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163flnlkrot.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163uewlijmd.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163hmjiromu.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163quyqvjvz.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163sbkrxtcr.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xpyqthxg.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163qrcyvrtn.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163tvkcydad.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163gcorhcjy.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163zhlsdtwl.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163fqsphxkw.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163sgxysdyo.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163flcssqgi.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163dxdszpnl.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163mqpxxpxt.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163jnwbtjwp.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163oqmufylv.html

npx vite build
来源：http://www.xuanzx.com/163hzgsuchi.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163bgletcqs.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163zjqzpdmm.html

================================================================================
来源：http://www.aibaodan.cn/163kwhwijlv.html

统计汇总
来源：http://www.sxryk.cn/163uozufuqx.html

================================================================================
来源：http://www.xuanzx.com/163zwluanbq.html

按语言统计（条）：
来源：http://www.xuanzx.com/163avufyvfc.html

Python ......... 252
来源：http://www.sxryk.cn/163zcqifuok.html

PHP ............ 252
来源：http://www.sxryk.cn/163yvutjfnr.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163ajamgfgl.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163izxjpspy.html

Java ........... 212
来源：http://www.xuanzx.com/163osxcguyj.html

Go ............. 212
来源：http://www.aibaodan.cn/163wswejubg.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163gsskgxcl.html

C# ............. 212
来源：http://www.aibaodan.cn/163smqvknbt.html


<!-- 参考信息 -->