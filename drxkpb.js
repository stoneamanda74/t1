外链999!wailian999！

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163adbmfhvi.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163mcvnlcyr.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163spewilkf.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163ifghseko.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163jzoozzku.html

print "Hello\n";
来源：http://www.aibaodan.cn/163wwhmuoeq.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163gohnlvps.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163hlqpojoo.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163lfikkhwe.html

"值: $a"
来源：http://www.xuanzx.com/163cckvbhzu.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163jfbunbhc.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ozandevc.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163uxxztyij.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163xgphdbkb.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163gyzmoklz.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163pxeiodff.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163ijiacgnx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163koejyauv.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163huatuybh.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163jpguwkgx.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163wizyqrgg.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163vqfayuob.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163wpdqodme.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163blukwahj.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163lrzjydbj.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163nugoykin.html

println("Hello")
来源：http://www.sxryk.cn/163auwirmuw.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163cwptkbot.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163rgfxqryk.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163ybwrshmk.html

s"值: $b"
来源：http://www.xuanzx.com/163gmqnrffr.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163zbfjniak.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163stpbjedu.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163lglubagm.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163ixxlxqte.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163ynxkvcpy.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163ycqguqln.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163vprmodja.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163fdzsmasn.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163oecqrqnu.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163nqzidhgf.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163xixgtoxi.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163vrksuqen.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163fnxfvhah.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163ziyjlnhq.html

================================================================================
来源：http://www.sxryk.cn/163qloknjyq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163bcsnrzvd.html

================================================================================
来源：http://www.sxryk.cn/163inidxmxt.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163foryzdwa.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163nfvnyfyc.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163qgiztukv.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163awoxfnvf.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163vakahgae.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163xuvrfymz.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163nvgqjtof.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163zusnkbch.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163fwykfjnq.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163uwgsevkq.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163uktjceia.html

{**a, **b}
来源：http://www.aibaodan.cn/163gzvntqoc.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163mssdyenk.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163ymfndabr.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163pyevledo.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163pmxketdi.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163kllbybnz.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163xcyatwje.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163yzovradq.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163bfruciss.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163yvjhxjoj.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163eyjxfapx.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163rbhgwxsb.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163dpncxfij.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163homappcr.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163jrdgejhn.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163jaudnujo.html

defaultdict(list)
来源：http://www.sxryk.cn/163oxghcnxo.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163sxogezwr.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163yxqnngdz.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163fntwjsye.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163sofzgtqc.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163jbcntnuv.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163qddsqhio.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163phuwoxbv.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163wxngrwwz.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163lptaaunv.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163zywfickb.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163xttrblut.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163fluhiqwf.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163qbkwwzjz.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163aknrmuas.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163mgvyqivr.html

list(zip(*m))
来源：http://www.xuanzx.com/163gyztlzsl.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163icijwgim.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163ldheucuw.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163ypdamjkz.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163iplcyulz.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163lilkeclw.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163qlxeasmf.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163impsblxa.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163ybzzglew.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163laddaumi.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163sjjqlkba.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163iuemgcho.html

UserId = int
来源：http://www.aibaodan.cn/163ekwfvvmr.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163jliqergu.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163wptfdosi.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163ffylhzej.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163mdbmibxq.html

[U31] Py：单测
来源：http://www.xuanzx.com/163cfvbejrb.html

python -m pytest -q
来源：http://www.sxryk.cn/163uezjrrry.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163nnddzvck.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163hhjhbefd.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163szhonwaa.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163jdnsbktk.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163fducjwdr.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163kczxmpex.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163bfmvjrxl.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163odfjybhj.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163btfhpcuu.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163fjdmfoql.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163xegywvxz.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163sjiizmpx.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163meyegwrb.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163elzpjjzr.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163mvlbqvjk.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163ytafxyoa.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163ldtgodcr.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ephbwluc.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163zldyuxqc.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163sqjslprz.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163ofdpjbqq.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163epomlffr.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163iqhyivtc.html

namespace App\Http;
来源：http://www.sxryk.cn/163tfmsqbbb.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163uvbcddzs.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163eygaewbf.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163pbyejejf.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163gjerzgxb.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163tfrkqfyk.html

?string $name = null
来源：http://www.xuanzx.com/163enmfnvxs.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163dojjdpek.html

int|string $id
来源：http://www.aibaodan.cn/163ittwbrfo.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163nbfphebm.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163vnunepvq.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163fhljkupy.html

public readonly string $name
来源：http://www.xuanzx.com/163oguncgme.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163goojxlhp.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163tgubkfvi.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163fjqvpobl.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163ndrsicyv.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163pjjxkkvr.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163krulmflu.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163vhemfqxi.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163idazwnnv.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163uqtijyzm.html

$obj?->method()
来源：http://www.xuanzx.com/163efrssbfb.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163deyfrtrg.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163olqcrlhp.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163bfbrnfbj.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163bhxucplv.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163tdishmlh.html

"值: {$a}"
来源：http://www.sxryk.cn/163ndsrqvid.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163tnjwbxwd.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163adjokvsv.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163xuwnyneq.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163mcqedpik.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163bdwvgprc.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163eqyutvby.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163chgwoymg.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ziiuaqsy.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163yflmxxyo.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163ehckuhuz.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163xcrnmkes.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163fassprmr.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163edszczbz.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163oxazghhq.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163ajvltcue.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163bwbzgqoa.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163mheebjpr.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163kscpaloh.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163xnykzpxn.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163oxxmoocm.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163eiwfjxki.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163usubgroo.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163wqlcecta.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163qffuxikg.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163pzznhtvu.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163hojiwonl.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163poiuxcji.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163lmxzohwg.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163kdvuwijb.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163rgzmjaor.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163sqeyfgpz.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163wplbkktj.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163djygnuxc.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163piwpgjem.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163fdzjcnxz.html

composer require psr/container
来源：http://www.sxryk.cn/163ehvtapme.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163eewjujge.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163akhjyhwl.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163avrirtgi.html

composer require twig/twig
来源：http://www.aibaodan.cn/163lgweiudf.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163nqfueaqa.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163wsxydbtb.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163eszpgnnl.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163tesxpayc.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163siowwcbu.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163wgtdxvdi.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163mfxvmuqo.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163jicopmdl.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163jnsvnjgo.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163hlbcmirg.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163ebjtjyea.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163rbclkunf.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163uksrovzf.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163btijdwgj.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163zgaujhkn.html

a?.b?.c
来源：http://www.xuanzx.com/163jhegbuqu.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163zcavfwra.html

a ?? b
来源：http://www.aibaodan.cn/163mexzdwlg.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163gcminpgs.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163hcxnbmtc.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163eukhjmvj.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163qpbysnpf.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163zzqqppqa.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163tskjkcbc.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163kvruttws.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163lbzchqgn.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163uoggiacp.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163nqqzdyko.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163lltnbqzs.html

structuredClone(obj)
来源：http://www.xuanzx.com/163mfideokz.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163ivnuehbq.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163ycjthhkz.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163hthklusb.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163qrnydvqy.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163sfnedqvf.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163zidvgtjv.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163xwhylkbj.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163lcxpscib.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163fvyslabt.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163wppyhmuw.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163tvmembif.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163xmeynfzz.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163rnckkzro.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163imxuxlav.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163uygxcpxf.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163zxwuszpw.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163lnffgnuv.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163lllzqezf.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163snuolwpo.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163akabmnex.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163ndmakjja.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163fpvlarma.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163uazdxzjp.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163vhoqmofh.html

[U105] JS：节流
来源：http://www.xuanzx.com/163jbceoxmy.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163gvscjjaa.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163jjlpakdq.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163emxxqbsv.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163enugpzqx.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163xntvifkb.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163gpsbpztf.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163dbbqdxlw.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163qsokmeie.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163crrsihtm.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163jliovoza.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163plbhtauo.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163lkcgwlcp.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163enrcgggn.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163dlaeozlx.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163dnxuqpgn.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163yelnwcft.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ffyhlkep.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163cwqpgivq.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163uurfhdrz.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163otsrghhz.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163nwrigiqe.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163zdfzsqyu.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163yczxdqmh.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163egtkzgbp.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163xssxepkl.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163gioucydg.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163qgyexoyo.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163ktivgpax.html

npx vite build
来源：http://www.aibaodan.cn/163tgyabcbl.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163jefjjfqs.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163lwwtvxlz.html

================================================================================
来源：http://www.aibaodan.cn/163cmiymbrb.html

统计汇总
来源：http://www.xuanzx.com/163joivycgx.html

================================================================================
来源：http://www.sxryk.cn/163eraprazk.html

按语言统计（条）：
来源：http://www.sxryk.cn/163gnvcssim.html

Python ......... 252
来源：http://www.sxryk.cn/163wsnmydhb.html

PHP ............ 252
来源：http://www.sxryk.cn/163lkpwrqgi.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163rfsbihjn.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163pvczwmdt.html

Java ........... 212
来源：http://www.xuanzx.com/163fsjlbmlg.html

Go ............. 212
来源：http://www.xuanzx.com/163pemxxhdy.html

Ruby ........... 212
来源：http://www.sxryk.cn/163rykixcvi.html

C# ............. 212
来源：http://www.sxryk.cn/163usnhcsge.html


<!-- 参考信息 -->