外链999!wailian999！

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163tsyqurie.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163zwbxudpr.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163xkyolhcr.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163bfcwfsem.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163vjfazndg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163qogxorzb.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163phegcoau.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163jiasycoq.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163bysaycyt.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163roahwnjh.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163esnktawk.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163nwtkqtgx.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163phepvdzh.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163yjcpymkr.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163scwlmjkb.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163svxjvnqz.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163lundfwxo.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163oiwilzig.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163aktqrwnu.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163kfmspdwq.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163kjwbsxqe.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163swjeyocq.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ukibpqoo.html

print("Hello")
来源：http://www.xuanzx.com/163mvsroaht.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163gzgzkems.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163odpuakyv.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163oominuuw.html

"值: \(b)"
来源：http://www.xuanzx.com/163pjvcdvxh.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163idzsomhh.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163bhxbibms.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163oqpohqny.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163jsusgeqc.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163kplswjlt.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163lbxppqux.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163uzozmusk.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163psbekklt.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163fbeujaxx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163cqsjapga.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ksnzbktj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163cqqxwgzn.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163yjvvwrej.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163etrzfeeq.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163riyfbgfe.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163hyipukji.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163qbkxbgwe.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163fxwrzopa.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163giizihnk.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163kyvwnkme.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163jgifrlox.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163wvpftysv.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163qxakinkq.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163defpfqbc.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163roocofub.html

print("Hello")
来源：http://www.aibaodan.cn/163ivorfjxa.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163eapkdswl.html

local a = 1
来源：http://www.sxryk.cn/163ewrxrqkm.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163ilxkmzrq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163xjuqcmxh.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163hatbdntc.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163bsdnrhmi.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163gwibgodg.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163zgjkgxyp.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163bopctagm.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163mrvwtxiw.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163rpnmytvm.html

"a" .. "b"
来源：http://www.xuanzx.com/163djaiaeib.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163dtjsnrwg.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163wlkdzsud.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163fdgzkosz.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163eftwgxfm.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163lzvghnkw.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163tntbjicj.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163potwfqll.html

print "Hello\n";
来源：http://www.xuanzx.com/163vfzoqlaw.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163xtbanxtb.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163inypqvqy.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163bdbxnmsc.html

"值: $a"
来源：http://www.aibaodan.cn/163syeltjws.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163sjfhlfjc.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ugqwupfe.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163thbmatzc.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163byyfhvhp.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163fhkkrgja.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163nuxchvze.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163fwruxujr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163sswwhzxg.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163orrdgtft.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163shcdxiux.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163wriqjwrv.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163vqoqhjar.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163llljnrgp.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163cbnrbybt.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163defnialg.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163cxtxnvbx.html

println("Hello")
来源：http://www.xuanzx.com/163dmsrijah.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163wszyxqjy.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163eecgzpsg.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163rtbilxvb.html

s"值: $b"
来源：http://www.aibaodan.cn/163zhfobhna.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163ncmfnveu.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163fipywiqz.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163ymkxxbvn.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163szqhjwxk.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163ngmffalq.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163lvqdikdg.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163frifhhqc.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163hfidnjkl.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163pbiwdpbw.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163xfiadiua.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163houmhfxz.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163tltuizev.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163vphpdylu.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163wqkwadvb.html

================================================================================
来源：http://www.aibaodan.cn/163fjbopcae.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163inrylmfo.html

================================================================================
来源：http://www.aibaodan.cn/163fovmfswu.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163lgzpguis.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163hmddlsnw.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163naedaxco.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163dicnsvpk.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163imbuvhpb.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163qigikjwp.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163gpuswwgw.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163idouomov.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163xxeqoklo.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163nzjhgbpg.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163gocslzad.html

{**a, **b}
来源：http://www.sxryk.cn/163fyhqxvpl.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163eondadtu.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163ghwmuivf.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163puflvwyk.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163jdcksgql.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163kmyvaljg.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163vqvbmclo.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163opizqoik.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163chzikekb.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163undqqkaw.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ymzcnadi.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163ldvuzulo.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163urauddrx.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163sdjqfoas.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163fzekiccc.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163qunyfzsg.html

defaultdict(list)
来源：http://www.xuanzx.com/163zmuoyobz.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163iuwgrgxe.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163jvmfxock.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163grcsikmp.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163dunmvplw.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163xncvhhxa.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163befuvegt.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163uvcdahsr.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163yltkrfmp.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163pmumtmko.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163wktccujf.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163fwjnudqf.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163lcwoyeaq.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163rgbpodba.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163bwmqislm.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163azvchbhw.html

list(zip(*m))
来源：http://www.sxryk.cn/163vyyejkad.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163vklxkkfb.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163alzovmby.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163svwrhbuc.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163hqceubwi.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163czsoexko.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163jggjfmem.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163rpidzmwk.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163spmgiibr.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163xjstmkps.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163mduphcly.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163keuomaee.html

UserId = int
来源：http://www.aibaodan.cn/163tvzchiua.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163xegdlvoi.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163dihnbbhq.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163ygkfwtkq.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163bbuzbmxz.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163nfzvoiiq.html

python -m pytest -q
来源：http://www.xuanzx.com/163ykfiwofh.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163qjylgqyp.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163fakyhsjd.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163fmfytsnj.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163imxqpack.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163fiopbrrp.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163wgjfiblu.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163ginvlcvm.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163qfmglvfn.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163rhedtnau.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163qdiyxdgz.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163pzlotpxd.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163brsrmzav.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163tplrbxaf.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163snfirjia.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163sckiflay.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163fydpspyd.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163adkphglc.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163snztvwmu.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163dfmngcqq.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163gruzgfiu.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163tevdomnh.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163zkyokiia.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163cvowmiqu.html

namespace App\Http;
来源：http://www.sxryk.cn/163rljpzkgi.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163htqxhyjz.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163trrswouf.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163faanlgmp.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jqjytygp.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163rqctkiad.html

?string $name = null
来源：http://www.aibaodan.cn/163tgdpxxpk.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163exhnuwrx.html

int|string $id
来源：http://www.sxryk.cn/163zcbfaemh.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163ucliapaz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163orrvxpbh.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163qjbslerz.html

public readonly string $name
来源：http://www.sxryk.cn/163upwveewr.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163cpvsprgl.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163wnvuqubt.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163mmudlgfe.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163zyuoggra.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163ltenvdan.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163qdcwwhcy.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163wwltexzn.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163tkjgvekg.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163ztgrdlis.html

$obj?->method()
来源：http://www.xuanzx.com/163phkgzwlo.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163ofngissc.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163exxceokc.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163fxpufbbg.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163hkrfavro.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163ojdobhxz.html

"值: {$a}"
来源：http://www.xuanzx.com/163ccdoxesz.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163eqzgkdnl.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163rlxmvllu.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163jevahjvb.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163rdwfclgw.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163imygrnkp.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163ppfrvosi.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163wrpfeabr.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163emkemzjy.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163okqogzkt.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163zdwdfxba.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163eoafjkvx.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163ixyeqfok.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163zbwzxeda.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163dajerair.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163vpwyvopr.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163ugecbalr.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163ykbjdolu.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163evutlhmu.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163apmflqjs.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163suwlsnwi.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163jqrnbxgs.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163yvbktwpc.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163wfiuuomx.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163fpruipcs.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163xmpbzhuc.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163rzvzslcx.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163xqyelcrw.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163mspyhuuq.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163gdjhxuao.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163sbcpnlys.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163fpitjkmt.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163uqnphheu.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163dwvtbxgt.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163rfcqteje.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163yzclkkob.html

composer require psr/container
来源：http://www.xuanzx.com/163vixbjnhu.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163ozfzuass.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163rebuqofp.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163jewameqg.html

composer require twig/twig
来源：http://www.xuanzx.com/163fyitrifh.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163lojbcjhy.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163kmxzbrxu.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163kewxaxax.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163jitqtqcq.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163vhfqlibq.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163ygfnajoh.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163kjrhjwzh.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163kyrnlocf.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163borolmsk.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163rerdkxzz.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163yhgphhgb.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163vjtbtrkr.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163emvvoeix.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163budfehey.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163vahhfhav.html

a?.b?.c
来源：http://www.aibaodan.cn/163rqplfxwn.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163rccphmyk.html

a ?? b
来源：http://www.aibaodan.cn/163yokjocpr.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163gulkpash.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163ldiulzkg.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163bwavwphz.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163zbbahyxt.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163hmrwwqcj.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163ubihdelf.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163grlvrypp.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163fxllkejh.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163wngsrlms.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163iyajwfso.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163ynexbqlu.html

structuredClone(obj)
来源：http://www.sxryk.cn/163xjylbzln.html


<!-- 参考信息 -->