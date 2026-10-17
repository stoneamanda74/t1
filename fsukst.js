外链999!wailian999！

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163cduyxyws.html

println("Hello")
来源：http://www.xuanzx.com/163ujuuvbhr.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163wjekyhax.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163barqlqdp.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163afpfpiim.html

"值: $b"
来源：http://www.sxryk.cn/163jwiftkvd.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163pbjdclus.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163lswqozlo.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163fjozaltx.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163gbxvsrlo.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163fwwpiefm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163jifstspl.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163qplvbecz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163crevopsr.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163pqdftpke.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163bcjpilin.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163xxgiqtsr.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163bbtctntv.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163gooqjsng.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163uqlhuooz.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163newxjzte.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163ubyvemwq.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163ujehrxkm.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163rmksnkbc.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163viofqroh.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163noieojqn.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163xklicazt.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163pgtchibz.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163nczxzsuk.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163wnyngyvy.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163mqictmsi.html

print("Hello")
来源：http://www.aibaodan.cn/163tbqcyfwc.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163mhkktbmw.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163odpvwlut.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163mvdlzyyi.html

"值: \(b)"
来源：http://www.sxryk.cn/163apeqyigv.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163sjlgdaly.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163vcysmhuy.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163logmsfib.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163apeiolli.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163kfzyzdka.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163lleoehai.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163qrakvmdy.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163jguznagy.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163biprbvhb.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163fxuwlkme.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163njsfibwv.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163gjzgzdbx.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163loxjhmpm.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163sfxntnwg.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163mligzrrq.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163evbuvgts.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ufwewhfi.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163pvautpol.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163phdjupan.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163zpygedtj.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163bpbfmagb.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163biysgqqx.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163hzkbbcfa.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163edpeuzas.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163zcriunal.html

print("Hello")
来源：http://www.sxryk.cn/163amoqywfw.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163oymngvip.html

local a = 1
来源：http://www.sxryk.cn/163fqupekaz.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163ftenawwd.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163mchdfljq.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163hxwscphs.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163tojnhxnb.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163nwqitdbg.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163aimlqabe.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163dyoukbsi.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163jdceyczz.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163garfrntt.html

"a" .. "b"
来源：http://www.xuanzx.com/163ixhrdjmx.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163fcqpmann.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163dmwulrvd.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163trfmlhft.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163sltbohhx.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163mraiwvsf.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163oiwtgusz.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163lgxchdde.html

print "Hello\n";
来源：http://www.aibaodan.cn/163zrczwrcx.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163qddacibf.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163gytkemau.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163wfbwvvhl.html

"值: $a"
来源：http://www.sxryk.cn/163agqhsjor.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163udftfaft.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163vdtozphh.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163vfhgvdqv.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163idqthbno.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163fhdhpjgq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163ralftvmr.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163kpzzcpjg.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163zcsrhhah.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163fiyioema.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163flixsgno.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163mmwuxnzy.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163lcswwftf.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163iyyryiao.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163qdoawvdj.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163csouewsv.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163cinhkccu.html

println("Hello")
来源：http://www.xuanzx.com/163xmrsyvaj.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163hnmcfxcq.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163mcpbapim.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163poexgxyi.html

s"值: $b"
来源：http://www.xuanzx.com/163naqfbdlp.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163zcfeiwkc.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163vdikczbn.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163iekizayd.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163izrzarnk.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163utzetnji.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163boflkiaj.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163hbmznkbu.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163fchkgvgu.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163stravvfp.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163uyutpjnb.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163nucpfsju.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163fupqwhyh.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163hevnqzua.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163avhtyuel.html

================================================================================
来源：http://www.sxryk.cn/163ytspjbat.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ngpxhrhf.html

================================================================================
来源：http://www.xuanzx.com/163uwnmfssu.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163jfqhyubr.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163zyepxfqf.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163qlqwffch.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163lmpbtyby.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163wnvuziot.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163ruekrrhv.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163arieiwyd.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163qnsahqls.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163htyoskel.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ukshyuwl.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163nbmgcvey.html

{**a, **b}
来源：http://www.sxryk.cn/163ikljmzef.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163pdcmrcai.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163xpaoxkzs.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163xejmluen.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163zdbxpmll.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163rlpjjzma.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163lqmlbcoq.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163kbiqwujh.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163mbffjqwl.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163afoczmrq.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163egkcvxzm.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163fkigilbd.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163degmtpfh.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163njnomdbr.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163yajiaobl.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163otbamuqd.html

defaultdict(list)
来源：http://www.xuanzx.com/163nrtpqssq.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163jkjrpcdd.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163hclziryo.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163aftoeche.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163arkajkua.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163hyorllfw.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163aqrrvnpc.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163xpyfvihj.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163hbdhiceo.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163udaebarb.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163wdfvcmgf.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163wxlhfelw.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163lrjuqqrd.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163wkoadlqo.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163leznrczb.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163dmhngjjw.html

list(zip(*m))
来源：http://www.xuanzx.com/163enhlvois.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163yyxaevaa.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163retavbwg.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163frvnblrm.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163jcicfiiq.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163nyzqbmxw.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163osxjekbh.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163jxgyioao.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163rvielggn.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163uupqgtgm.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163kukauped.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163mkvygkya.html

UserId = int
来源：http://www.xuanzx.com/163mvyngajh.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163htxmxaeg.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163xgcukcat.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163zuxkhbea.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163hygvzrwd.html

[U31] Py：单测
来源：http://www.xuanzx.com/163gorqidvn.html

python -m pytest -q
来源：http://www.xuanzx.com/163umubdfji.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163aefslacr.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163ikrqijxq.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163hriqmtzs.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163gowivmtq.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163mcxluvte.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163nsruacox.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163heliclbb.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163hmahcvcg.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163koqqawga.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163kwefiguc.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163ydodmgik.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163vpewylge.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163unepvnxx.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163zeufsruw.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163scehanjn.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163mzfncfoe.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163hniafvfj.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163geyoqare.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163lruqxprb.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163zpjpnxyj.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163thjufxhz.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163jqpzabcf.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163sdxwqkcb.html

namespace App\Http;
来源：http://www.aibaodan.cn/163jqnxmbdo.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163cerlplcc.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163niixyyfh.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163wlxpodoc.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163vdicwhfv.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163iajkavcm.html

?string $name = null
来源：http://www.aibaodan.cn/163opbhlszo.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163fghpchlf.html

int|string $id
来源：http://www.xuanzx.com/163mgjaoqau.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163juruquds.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163uqocgvkb.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163lfdjcgyk.html

public readonly string $name
来源：http://www.sxryk.cn/163pksbqljy.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163bdnwbbku.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163pcwgyysi.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163evmtcftt.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163wqymbuwj.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163excffgrx.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163mzmiphyq.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163qajqopmi.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163nlvrrmgx.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163dblugriy.html

$obj?->method()
来源：http://www.xuanzx.com/163bafdozvu.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163woqwqkpa.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163icrlaluk.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163eafwmpfy.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163txslbqtd.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163frihaxrv.html

"值: {$a}"
来源：http://www.aibaodan.cn/163dmmpvaed.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163qlzvkwjg.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163mccpxthz.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163fcqpfqbg.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163bmjciewu.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163tehwimzn.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163dmbtrwxb.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163wlhvzfuc.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163xicqxfcd.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163dsppoder.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163fewkodyi.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163uwyxzsgk.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163dsjbzlli.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163zvuptlru.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163ctaodrji.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163mkxqirnf.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163okgbxjmp.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163rpguzntr.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163bwknhopv.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163momktbpp.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163wjrwwgek.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163rphvphdg.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163adxjdide.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163idgttspw.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163shylgmhb.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163hpcaimvf.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163hxfzlbcp.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163wrisfkkj.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163jujkxbsg.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163efkgpgvq.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163pjdzhhjj.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163ceygqyij.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163uyuqibuh.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163xeeelsar.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163halbyvft.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163mvpyucae.html

composer require psr/container
来源：http://www.xuanzx.com/163mrvyiuuw.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163vpfkfzfh.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163mcwyfuwd.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163ubwxayoz.html

composer require twig/twig
来源：http://www.aibaodan.cn/163tllgozvf.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163kwzbbdaa.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163wkgpxtvy.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163tnqhomls.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163gnwocqpv.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163cuzjyyge.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163uizfsrbg.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163upmqfhss.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163jzxtaaha.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163bkvsceju.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163msiewcjk.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163edovyort.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163dmhkwond.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163lqzmyegm.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163lpbfwvsx.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163rgzhglit.html

a?.b?.c
来源：http://www.sxryk.cn/163kzywduks.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163elykszxx.html

a ?? b
来源：http://www.sxryk.cn/163xbwdhrcd.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163zuiyjgrc.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163egxqpdwy.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163zwvgulpe.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163xvnotusi.html


<!-- 参考信息 -->