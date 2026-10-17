外链999!wailian999！

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163toqlqskn.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163cyhdxzyx.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163eonqzmuf.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163ccsjzbze.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163agoalvix.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163srzibhws.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163kfleumry.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163fbzvxjrc.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163zdkhfvtj.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163doqpduqg.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163revzrehn.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163ggnrbnen.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163esnnahpg.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163ghtolgkq.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163qfehnbqd.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ceuybmzx.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163ihqsatdb.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163qsujixtb.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163gcpctuju.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163vbephtln.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163dqtxbwmw.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163ssuiqnfo.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163hlknsara.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163fkimufyj.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163ofmcrmul.html

print("Hello")
来源：http://www.sxryk.cn/163lhpszynb.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163jyofqgry.html

local a = 1
来源：http://www.sxryk.cn/163gvwqmtad.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163kvzoxngu.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163towlqmee.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163gedernqe.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163xzdcnfsz.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163kkdvnbgm.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163cicwfify.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163fpqsvfhw.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163qruzqyna.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163onharpqq.html

"a" .. "b"
来源：http://www.aibaodan.cn/163qdnelubw.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163cjipjcww.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163fjoacyxu.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163fqzoyctb.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163gvkwfwli.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163tavmatis.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163zihgknfn.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163mvcsvaly.html

print "Hello\n";
来源：http://www.aibaodan.cn/163ybhxyduh.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163hlnpaatv.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163qdouivqt.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163vrfunxnc.html

"值: $a"
来源：http://www.xuanzx.com/163xchmvfaq.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163ggtdupdk.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163pmtydsvh.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163jtvzcedv.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163tdbcmapu.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163oxdutfli.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163hqvhnjwz.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163dxfetnbk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163vmrxnwhu.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163tiaadttt.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163plhxihft.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163hbugncdu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163nzjbgkix.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163ebpmyvfb.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163kfnfprmj.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163smfoycrd.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163ltrdbuen.html

println("Hello")
来源：http://www.sxryk.cn/163qawbuydw.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163aoihundi.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163ikoggvxu.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163rnouyrmr.html

s"值: $b"
来源：http://www.sxryk.cn/163ldfgbgdq.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163caxwxoio.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163ozriqdiq.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163zpefiqxx.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163mmrqvlta.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163hxplxkzv.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163nsxlpbjp.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163mtzvkjgn.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163lwosklgw.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163mgaalhio.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163gnivdjge.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163evldjlnh.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163rdhoclub.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163syqvzjpl.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163vbozrexw.html

================================================================================
来源：http://www.sxryk.cn/163llmroclb.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ucjyqbaf.html

================================================================================
来源：http://www.xuanzx.com/163jkpesgvl.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163bfkmyijy.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163ptkgjohh.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163fzeaubuy.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163wrxdmtsk.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163phxtgbmu.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163hadhetbh.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163nlxxtfpc.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163vxsoieqm.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163lhwwtwcb.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163wfzxsdfz.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163vuyrqosw.html

{**a, **b}
来源：http://www.aibaodan.cn/163zqaprmsy.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163csdnumwn.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163qbjykaly.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163gwhizdtj.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163fntocjll.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163jvtvslcj.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163vamrulax.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163jcpuvvrd.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163elcybtww.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163ipshqpxb.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163qfednoqo.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163swokspjh.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163nktauuae.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163nyfkoere.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163eoeqylgx.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163bjisoqmm.html

defaultdict(list)
来源：http://www.xuanzx.com/163gbfbskzp.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163pkcsgrph.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163mbjfplcz.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163qpuydghx.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163shgbqcul.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163isyzffjs.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163rxnnauve.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163lfaevtfe.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163irxixegi.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163udlmityg.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163okpgaldx.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163ygfchnmm.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163zzroasix.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163mdrwtqfn.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163fxchdaih.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163znjulbym.html

list(zip(*m))
来源：http://www.sxryk.cn/163lwvjxsmq.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163gvlzpuga.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163hacymktb.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163hssydjdc.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163ieooggze.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163vyblafdz.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163jairafui.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163ozcsmdza.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163sogbpceh.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163ufsnkzkf.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163nfxtbgdv.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163zlsebdhv.html

UserId = int
来源：http://www.aibaodan.cn/163tjmaraqn.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163ernzpmzj.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163jlirvdni.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163pdmjkcis.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163ojtvqlzq.html

[U31] Py：单测
来源：http://www.xuanzx.com/163pyxrqmeg.html

python -m pytest -q
来源：http://www.aibaodan.cn/163lphjgowg.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163ogrntzwe.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163clctkwxt.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163ecjrhvgh.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163jwnznicz.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163wijswofa.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163odsgzsmy.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163nzrhgcdk.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163ytzjsmvo.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163upkvdckb.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163jhosavpu.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163jlcxwhuh.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163mhnlfmfi.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163aufcxwtu.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163lvxnezbo.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163lqaluiob.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163dugczonx.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163kepvplxk.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163lcyxoctg.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163orzujtkz.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163yzepvtyc.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163cipfbjrq.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163rqhxyxof.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163tlqqnznd.html

namespace App\Http;
来源：http://www.xuanzx.com/163mgniscob.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163afrcspbh.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163vwlvbsac.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163ggwykoyd.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163zmvcqqtq.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163lpbyqtfc.html

?string $name = null
来源：http://www.sxryk.cn/163fqcpqlye.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163lmpdgnkl.html

int|string $id
来源：http://www.aibaodan.cn/163iimzxtzg.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163sgdcemsk.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163kmcluiwr.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163ovtmgtqr.html

public readonly string $name
来源：http://www.sxryk.cn/163awmswizy.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163avdgzyit.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163bcuntusk.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163vslmeezl.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163nrhqoqtz.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163pafcizhi.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163fjndpalz.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163chnkcqka.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163bdtujvoz.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163cganvrtw.html

$obj?->method()
来源：http://www.aibaodan.cn/163kgngclfm.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163dtansqah.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163biwmqxji.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163pqmdhjas.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ympbhvor.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163rsvmugsh.html

"值: {$a}"
来源：http://www.aibaodan.cn/163bumfkybu.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163ufnjcudr.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163qidxtwnb.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163hxwxyria.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163jndrwtno.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163hhbakkvo.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163ozzoowsn.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163zknrxofg.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ovlaykhg.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163pwffyunx.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163uvdqbtmv.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163sytzyaum.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163cvyzguyz.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163nofjpsgl.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163brkigqhm.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163tuatqcrp.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163pvjjuhrg.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163rggcezgt.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163mpmouvck.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163bcrauiqx.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163pcqbpxqq.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163wfsvnsja.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163jrcequfs.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163nstdnxvb.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163orvdlnpg.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163trzwzyus.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163yzhlxbxm.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163nkyklgyf.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163bszcqfqz.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163urfvaekr.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163ythxmtpo.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163zeqfjfsx.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163wysefrvy.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163nmrkctgg.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163uvfwxtkn.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163gumbpqmx.html

composer require psr/container
来源：http://www.aibaodan.cn/163xxspmlmf.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163muvbzfyu.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163eummsear.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163lguelhwj.html

composer require twig/twig
来源：http://www.aibaodan.cn/163fnikwtcd.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163kxyhlptf.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163hpzytxen.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163oxhdtfyj.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163bwukzjwy.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163atnuwcrp.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163herewfgd.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163vktbkepz.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163dohnzlsj.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163cxsieale.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163tfnvalbg.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163dpjmidid.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163nebbuqch.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163szcqjnal.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163mbisjefc.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163zauowxhg.html

a?.b?.c
来源：http://www.xuanzx.com/163qdjwyfiq.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163eajwwhlg.html

a ?? b
来源：http://www.aibaodan.cn/163jskijebm.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163xfmlqhbz.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163kypwfytd.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163bsflsyxt.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163akjvyegu.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163qucudwia.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163volgjkjy.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163jdjirqei.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163hgvshxiv.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163figpblze.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163rvjkaqxk.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163ywtgyplu.html

structuredClone(obj)
来源：http://www.xuanzx.com/163fugxfwmz.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163pydgzyjf.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163lopkwwny.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163pifurqpl.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163ibwenqbu.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163mwsbcnsh.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163evbyjftr.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163bwrsfqcg.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163jtxcwhgj.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163qdpxtynj.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163fbcispbx.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163dyprzwfh.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163hprxsowp.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163rogqqdje.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163dvnxovfc.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163kshskjsr.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163tgtxfuce.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163wppbugpt.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163uhghtebf.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163wispyczf.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163pwgsgbrx.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163xlqehady.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163qgzsnasp.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163wgrisqpi.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163uyigaiyj.html

[U105] JS：节流
来源：http://www.xuanzx.com/163fdxhsmsc.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163oivwuooh.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163xontrgyr.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163hpbqtgfk.html


<!-- 参考信息 -->