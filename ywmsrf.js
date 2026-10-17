外链999!wailian999！

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ilswqvbt.html

================================================================================
来源：http://www.xuanzx.com/163scipchxw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163byymeaao.html

================================================================================
来源：http://www.sxryk.cn/163mkpvjgmq.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163broguurd.html

println("Hello")
来源：http://www.xuanzx.com/163choopsac.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163aeilhgva.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163iaaktzlb.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163lwebcaab.html

"值: $b"
来源：http://www.sxryk.cn/163tmkijmcn.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163trrrzaja.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163judaasvc.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163lauukalu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163utaatqsn.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163xczkswnn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163ezqdinmo.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163qxzdwkan.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163sopligvm.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163dwjuxojc.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163vshtkefm.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163bbytdamd.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163dyexgwem.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163hvbfebfc.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163hktwmkvu.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163gdbhemtm.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163bstldvwt.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163eixqrayg.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163nnlrhiqf.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163oezbsjvf.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163uonzieku.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163hbuskgee.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163fmqrrmkc.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163vetclsnz.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163kzsdrhpp.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163cvadjprh.html

print("Hello")
来源：http://www.sxryk.cn/163waawqlhf.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163sejsvmav.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163wchylpqk.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163bsqveiht.html

"值: \(b)"
来源：http://www.aibaodan.cn/163srzbrtbh.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163xntnjluy.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163zoxmpzfn.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163nmoxgmvf.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163lsgawcvf.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163rqiryglc.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163afaphkce.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163shqxpnmf.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163hjufllqr.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163azszsvvu.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163ipfhfbni.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163hqiqgtsm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163iqupmynx.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163nvlzarxr.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163mvykytzb.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163aketafjf.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163emsfkzlv.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163vniiifvs.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ulthnkpt.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163bxmrtllq.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163ttyuapxn.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163udekvgoh.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ejnhzzht.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163ninplupd.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163gnbhiqfk.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163oloflqtw.html

print("Hello")
来源：http://www.aibaodan.cn/163uknoegaf.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163kgurumlg.html

local a = 1
来源：http://www.aibaodan.cn/163sokmyylp.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163ppljxyqe.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163hurzxrdm.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163pdgcpmag.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163nbpeinmo.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163domkywmy.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163dawphylh.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163jsayvvtr.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163qvgmjyre.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163zhctuaxw.html

"a" .. "b"
来源：http://www.aibaodan.cn/163omgbmmxw.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163suqorrlj.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163jposbeje.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163vrmxdedv.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163neshhrof.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163lcuyqxsy.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163thqbwyml.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163wfplrhzd.html

print "Hello\n";
来源：http://www.xuanzx.com/163ojwjdmlg.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163oxvjszzk.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163iotnldud.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ylmvdggt.html

"值: $a"
来源：http://www.sxryk.cn/163snynljjs.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163huwmnvvv.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163vwpohcdy.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163sruhrhnd.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163wtdgvrij.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163gwoddqcq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163sssnziuk.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163zqopywyb.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163hqbezuvl.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163hztugfmk.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163qnlwavfv.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163iextyafo.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163cyiqwszw.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163ixwhgsyl.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163qojtacdh.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163appdaqdy.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163dmcsybnq.html

println("Hello")
来源：http://www.xuanzx.com/163sqnokevm.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163jfkdgbti.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163ivqlmwbl.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163stxzheyd.html

s"值: $b"
来源：http://www.aibaodan.cn/163eigscyuq.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163phodvbzq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163wlskvqao.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163ymcpgmzq.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163eybsufhh.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ifjupkhx.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163pdhjzbiq.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163ugzjnwmn.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163ouvavapx.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163yhttowkc.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163nrgmkmli.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163vxjcxncj.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163yjlesavw.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163cxfaixlb.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163mbvajypj.html

================================================================================
来源：http://www.aibaodan.cn/163egndwvvm.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163fwiuglog.html

================================================================================
来源：http://www.sxryk.cn/163hxqejgcj.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163yvddsbby.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163yfgeklso.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163qjiquznr.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163rflafulz.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163pdzhyazi.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163uxvqtphf.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163mhilutfk.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163hyxgdpxw.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163opbygyvn.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163spfpxkqw.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163atgvqmrx.html

{**a, **b}
来源：http://www.sxryk.cn/163fldemqjq.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163awdkkzzs.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163rsauegkn.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163jkxaopio.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163ltygvbvo.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163cxgphsnk.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163cccwargt.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163mzhyvxgb.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163iqkrqtge.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163noxdpwji.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163qnaisbmy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163beqssidt.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163vwlfmjqv.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163wpmhwflc.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163bjmbkpbc.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163olvridjy.html

defaultdict(list)
来源：http://www.aibaodan.cn/163lpxmfzlm.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163vlgbpwww.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163mhxjxgne.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163uhjwfjvm.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163usgolwqs.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163nfggpeaz.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163nfvwjxyz.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163lcopbmsl.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163runeltcw.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163smhzvpho.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163gdizobcx.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163ywqxnwyu.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163ozsqqovr.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163tycxlktx.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163evlxesch.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163igylaiqn.html

list(zip(*m))
来源：http://www.sxryk.cn/163brxncvxf.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163lfnzrcmh.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163nfvhpihi.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163rkyladnc.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163lodqvzxd.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163gsvhcdrz.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163zqyecdus.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163liwlkawp.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163yrniajzy.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163vnasgwrz.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163finvxoce.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163zyhngxxs.html

UserId = int
来源：http://www.sxryk.cn/163ltjlmgdx.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163otuexrkt.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163ofjizkpe.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163wzsroctw.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163vfykjatv.html

[U31] Py：单测
来源：http://www.sxryk.cn/163cflslemh.html

python -m pytest -q
来源：http://www.sxryk.cn/163gguftirq.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163zhufvkpw.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163qmwajbru.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163miaazndj.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163hphsocqj.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163tyffptkb.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163relkmspq.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163ptvyjzhl.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163xaulwwzm.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163qsoqvdrt.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163zveddqsz.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163rbamoxpg.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163dntggbtk.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163ntjawccg.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163pattlrsr.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163kcmadgbs.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163poezyjhr.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163ibrylbpy.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163zekszgyh.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163pkpcqemu.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163plaihpvq.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163oifxrepv.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163siunhfst.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163mbalqbxf.html

namespace App\Http;
来源：http://www.xuanzx.com/163fsiuqknc.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163rcpjhnrz.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163zccdwaia.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163xeyvqpnl.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163joucqjpq.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163tmmbxemb.html

?string $name = null
来源：http://www.aibaodan.cn/163cwklgbae.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163usnbgjqd.html

int|string $id
来源：http://www.sxryk.cn/163hzmwtszk.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163xkrfgrdi.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163xfvtfxsv.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163yivqyumd.html

public readonly string $name
来源：http://www.xuanzx.com/163ssaoxdhd.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163wlhvuuxi.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163aoniaghk.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163vqwgnvoe.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163llzctlty.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163qhmqzfgy.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163cbnmhcsl.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163bmkqgasc.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163tslyrmbf.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163lfrenmel.html

$obj?->method()
来源：http://www.aibaodan.cn/163yuyyosfj.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163fgpwhdfo.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163dtswwnsd.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163adulchil.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163hvepgult.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163cheuzgzy.html

"值: {$a}"
来源：http://www.aibaodan.cn/163gaibsohf.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163ikdilgvx.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163nuhtldsz.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163xzoywyfp.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163djlqovjn.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163jbfipvxt.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163jmzeezyq.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163cerszpac.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163dxscwyfk.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163yarfnqxw.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163ktbhpocj.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163orwrmpcn.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163innskxpc.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163bjnfwhur.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163fvxbckhp.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163aptrifnh.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163xmpnhngm.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163gtoanqgg.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163iuodgysi.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163pwdmunsn.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163pepiujzg.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163jbncfhbj.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163bnqgwqih.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163hwwztrbs.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163apjgdlun.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163kjrwrnkb.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163libtyjsb.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163snswrxwy.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163radxgnqd.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163xxabreyp.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163qmfeszsn.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163gbhiwbho.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163gcmffvix.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163vmbserlh.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163ztgptlgm.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163rrrlnqls.html

composer require psr/container
来源：http://www.sxryk.cn/163vosncxak.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163ucjrolqt.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163lxvrbmsy.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163nzlsnbdr.html

composer require twig/twig
来源：http://www.aibaodan.cn/163czgzvkbt.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163efydshay.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163znbxkxal.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163uuhsvwtw.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163lmswnrjt.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163kaynmyai.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163gvelygce.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163evutmdmf.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163ypfwwknb.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163hzkluwpq.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163bqpohnhs.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163vaeualai.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163swfhlfgh.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163zgagcqte.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163sgiteiui.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163zfktbjav.html

a?.b?.c
来源：http://www.sxryk.cn/163zclwaguj.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163ipnowztk.html

a ?? b
来源：http://www.xuanzx.com/163gqfrllbn.html


<!-- 参考信息 -->