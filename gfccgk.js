外链999!wailian999！

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163ptjmebgn.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163xubwgmdv.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163xvewxvnc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163fokddrug.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163vgfpyomn.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163pmxymhhl.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163lizzwyyq.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163ldrnodxo.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163yqjhezjx.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163hdhkfqzr.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ebshvhcm.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163tjulnkae.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163clbwefww.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163gzogizzz.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163hhcujjzy.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163bhtnxkxu.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163ovizftsb.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163bmbcbfgd.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163zwccssdl.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ydcjniwg.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163qwfgwbsk.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163fpewjhpb.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ayfzuzcd.html

print("Hello")
来源：http://www.aibaodan.cn/163nqglpbyq.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163btgfxhfq.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163fuooxwsi.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163ffpzcxit.html

"值: \(b)"
来源：http://www.aibaodan.cn/163glpidjuu.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163agplkdvm.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163kxvnakqf.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163uahuvufh.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163fjwgdkig.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163wruprdif.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163jyfzwwmx.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163qcmyrmep.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163gmnufhcw.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163wfpnbqni.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163uyfejqlw.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163xtacpdek.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163rafedtlh.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163qvygfkda.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163aqbdmpdc.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163xlwjeydr.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163lnhvvcjw.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163mrutxpri.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163smmospjr.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163miqzfkor.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163xusgacty.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163irphyakz.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163deirlvjp.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163kcbxqccz.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163fhegeszx.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163kfmlhusp.html

print("Hello")
来源：http://www.xuanzx.com/163udjoyjrl.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163wucujsqv.html

local a = 1
来源：http://www.sxryk.cn/163djzesfqr.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163airmjqkq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163ufwuojkh.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163suqzsuaj.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163juliuzgo.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163ytpzrtkp.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163hxezgnfh.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163hdpsamwp.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163bnagltqq.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163kzrmfpkv.html

"a" .. "b"
来源：http://www.aibaodan.cn/163plcetsnw.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163iealplov.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163aotnjwnp.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163nklpftzr.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163ssvrqste.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163phsjnstw.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163potwwujx.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163ooasphgu.html

print "Hello\n";
来源：http://www.sxryk.cn/163zlvducoe.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163hbzyyajq.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163apfxmpkj.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163uwxuwfrs.html

"值: $a"
来源：http://www.xuanzx.com/163fooyycas.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163glqtlpug.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163iiqzptcl.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163tnypswdi.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ljsvgwvq.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163lkcdqkkc.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163djiquxkl.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163jnrvuglq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163ubaycpsk.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163jbdltgnd.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163uaccpcpj.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163pnmrduyv.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163fbwxucxo.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163kltiqcbd.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ngklvcvr.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163czkepufk.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163kbuvvhpb.html

println("Hello")
来源：http://www.xuanzx.com/163bfkafecn.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163krvkcnhx.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163zteehdnv.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163jeisqpbo.html

s"值: $b"
来源：http://www.aibaodan.cn/163cuexqlkj.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163hjlptstb.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163irfuwlfj.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163eqianxuj.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163ajppbvrp.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163pkrljmuh.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163zgcotjth.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163ajtzpsgt.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163zqzoskbu.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163exxabkmv.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163zwmpcbvg.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163dcivqwkm.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163vhcnfman.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163nhpcssez.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163lupyjusb.html

================================================================================
来源：http://www.sxryk.cn/163xohcpiuh.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163uckshiwu.html

================================================================================
来源：http://www.aibaodan.cn/163ouoodajf.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163dowuiabe.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163wcghrcit.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163ghlikphg.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163piyusjsz.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163vpsrqhlb.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163yzwuvoqe.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163ccrijbet.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163zhgtwxrf.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163zlgqjfmw.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163vckpuueb.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163jftwnlbr.html

{**a, **b}
来源：http://www.xuanzx.com/163ceaxjomp.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163zmrymxhu.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163buuhftnq.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163qlnnqljq.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163katzakkq.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163rmgmonqc.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163scilpvab.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163rmpgnejm.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163ukpaqqpa.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163ebibflkr.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163rqmlrxdv.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163apzsygrk.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163zjcaflhv.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163djcoigrq.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163onbbcskc.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163wayvgzot.html

defaultdict(list)
来源：http://www.aibaodan.cn/163wphelpuq.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163rasyexhs.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163mvtchfmq.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163hfrdwjsn.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163clegckzf.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163jyngsyxw.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163midfbygm.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163aqocbigu.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163vvrrwgei.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163jkppapzh.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163xwnodqzn.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163yqqzsyvc.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163utzwdxpj.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163cmnjvahz.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163cmsahear.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163jkwqhbnj.html

list(zip(*m))
来源：http://www.aibaodan.cn/163jerwegoa.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163xskxbkij.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163awmkpreq.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163ophjnqgp.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163hnrdozrp.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163aphdtuze.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163sxltpqzj.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163vnspsjwy.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163lorznset.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163byelqohs.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163wqfngioi.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163dhaoeonx.html

UserId = int
来源：http://www.aibaodan.cn/163qejzvwaa.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163ubsamujf.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163xcyifmai.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163neafutyz.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163npavnroj.html

[U31] Py：单测
来源：http://www.xuanzx.com/163akdcomuj.html

python -m pytest -q
来源：http://www.aibaodan.cn/163dkcvbdtn.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163mbxvepua.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163juvmoygb.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163bgfohnka.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163mlykwzaz.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163xhhqczcd.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163uazvunlg.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163nbbgbbwx.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163bztzceau.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163wejwizet.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163qptxkkxf.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163yjmjthly.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163twyabngw.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163yuirniyu.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163pfqrrrch.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163wciswwew.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163pskeiryf.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163qiokkica.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163wcelwoor.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163wijjhkbn.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163egzjfftl.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163vdcfmcfc.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163jlufikbf.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163kdgqotpj.html

namespace App\Http;
来源：http://www.sxryk.cn/163bdnwzycy.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163lbjzjlgk.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163igayellr.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163rsxwdmtt.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163hnffioyc.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163enktfrjj.html

?string $name = null
来源：http://www.aibaodan.cn/163uoudtfjv.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163zrvmonnk.html

int|string $id
来源：http://www.sxryk.cn/163xwfridzi.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163rsukqrei.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163zenqbmps.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163qjsziyed.html

public readonly string $name
来源：http://www.sxryk.cn/163vxrflomr.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163yqdzgxrn.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163lodtxojp.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163rpvgzurp.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163epnlrbjc.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163xmzhwzue.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163zktvfkbe.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163imszegde.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163elabndtc.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163ucjyscvt.html

$obj?->method()
来源：http://www.xuanzx.com/163tjmurszq.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163pmsraslj.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163sjzbefig.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163xitrxeqd.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vwlyrlot.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163asamkhts.html

"值: {$a}"
来源：http://www.sxryk.cn/163bouaedxi.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163fyletion.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163aldtmzhg.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163mzgxallb.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163qludgoro.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163nnhzjpgp.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163rydeztpd.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163vcfifiye.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163mfpvesxx.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163cxisgwsv.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163jvxaasjp.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163dnfpfjfd.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163rrhzixdf.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163fkthdjxz.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163dhjwlgfw.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163dbuhxtmb.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163gwxkrnkd.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163buoqubqh.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163fcwtbxvf.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163cfqrdxmz.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163bmjdjzts.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163jrsidnja.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163wifnmykr.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163ppbeddvt.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163olzkaxzj.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163qbtxhrrh.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163nnzfiwkr.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163tquognlr.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163merzwzjx.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163eapcaixu.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163wsqwmxfe.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163hlxppnkf.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163kzkdbfnw.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163rcotsmdt.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163harjmofr.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163obgbjaxq.html

composer require psr/container
来源：http://www.xuanzx.com/163attnlnlm.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163osxpsntn.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163kwlkvtqs.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163mzcfyzlb.html

composer require twig/twig
来源：http://www.xuanzx.com/163btvtkfra.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163ayqmpysq.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163ndhpcbxm.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163hqqvovwd.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163ltkwzkve.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163apmykpve.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163ztzrdyhx.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163btmuvesj.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163thtpydrg.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163finarptb.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163ukvlgbso.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163legnrjne.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163rqcyedrr.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163auwmtyre.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163uyneirvw.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163vpdezrhf.html

a?.b?.c
来源：http://www.xuanzx.com/163dtjkgjmi.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163jngouqjw.html

a ?? b
来源：http://www.xuanzx.com/163itcqjlwm.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163fuewretf.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163zhyxnxec.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163kfsjhyeb.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163zxgnjzlm.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163dlwqnwjw.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163cxxhxudw.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163ntgccxeq.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163jidgruci.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163dwjnhcqn.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163rnffmfuk.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163jkgtaxco.html

structuredClone(obj)
来源：http://www.xuanzx.com/163rneqbmhl.html


<!-- 参考信息 -->