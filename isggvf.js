外链999!wailian999！

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ajtwxxte.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ugsnsqro.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163qalnebzp.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163pabuidxc.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163jiqlgdbw.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163poprcwae.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163gylqcbfz.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163wcnuecme.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163gavzfylg.html

================================================================================
来源：http://www.aibaodan.cn/163dcvcghow.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163iwlgsbyj.html

================================================================================
来源：http://www.xuanzx.com/163noobhlcr.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163nfxvxziy.html

println("Hello")
来源：http://www.aibaodan.cn/163zscrmfuf.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163bbkkxegz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163osyiddxn.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ahiacwat.html

"值: $b"
来源：http://www.xuanzx.com/163ixnhhfab.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163hunpqozx.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163jxvqmzgd.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163mtrwgyip.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163xnvxogbg.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163uqrghecn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163nvznhyem.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163kcjkswue.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163zshyovsi.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163yltyvrzr.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163soojahjc.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163zqsbtfqo.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163zmsrpqiz.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163rclsmquz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163huuqmoqr.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163oqkskbgn.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163tpwgvsiw.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163cbmmjpoo.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163plvmvfcd.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163kzvzckas.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163udcokmnb.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163kpwtwkfm.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ifeqobgv.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163skifsatk.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163jwwataoe.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163fbdxhdlm.html

print("Hello")
来源：http://www.sxryk.cn/163vzuwhxgh.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163yhvvoozb.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163jpqqwrkx.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163tdfuamgp.html

"值: \(b)"
来源：http://www.aibaodan.cn/163jkjieini.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163ehzbthla.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163riawjhvj.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163tdztlrrv.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163dgeuerfb.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163bvkztkel.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163vomcrnad.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163gvoonaly.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163atisepvy.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163shhxlmgx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163adpoqdcz.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163qomhmztj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163seevpzgq.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163cysbzczp.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163vigmsuci.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163emspjpqw.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163gniiezfa.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163hfllghff.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163fwiznmrv.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163lgvnbwpg.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163vjirpuhs.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163ewcyrrbe.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163dfdpsaek.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163imtgbcbh.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163fjpojwaa.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163vrvagnrh.html

print("Hello")
来源：http://www.xuanzx.com/163koqbqmza.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163pmqueumo.html

local a = 1
来源：http://www.aibaodan.cn/163jtplkchu.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163ktmtzyul.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163lbbvbuwc.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163gwiykwfz.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163jzsuhsha.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163spzaybxu.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163ukavibnd.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163wjplbrre.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163aoodvurb.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ycirkzvi.html

"a" .. "b"
来源：http://www.xuanzx.com/163bouilcyj.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163hvwqctix.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163elcpwlts.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163sircvcrw.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163pkjsvtaa.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163fmgtxgcs.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163vfhxxxak.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163ccstzuyt.html

print "Hello\n";
来源：http://www.aibaodan.cn/163pkwlrffx.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163cbyawgdn.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163qurdvrtd.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163klnrdsxl.html

"值: $a"
来源：http://www.xuanzx.com/163yxywzffr.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163psgqlgmk.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163dyfdzcyu.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163hvdxchvm.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163frrvpyop.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163wkdpisdg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163fozabktj.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163yknezgju.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163mtcbykeq.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163keklvzdc.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163hidxkdxd.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163mumovvcs.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163ymjqnnrr.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163venrizjm.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163juwhqwpx.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163sssmqzpb.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163wniuwiyk.html

println("Hello")
来源：http://www.xuanzx.com/163rylffnss.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163bkrktyoz.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163fwpuoazv.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163qcoujzip.html

s"值: $b"
来源：http://www.xuanzx.com/163bientqah.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163teddillw.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163roljcnfj.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163wodkocqs.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163xspdnted.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163xixwiuth.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163krbenanr.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163drixhrsn.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163lcvcapbi.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163bchnlkxm.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163kektgycr.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163kblylevd.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163wmnylnat.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163mgqnpmut.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163jbvrazkc.html

================================================================================
来源：http://www.aibaodan.cn/163pnwrhsun.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163kspipjzo.html

================================================================================
来源：http://www.xuanzx.com/163ifvlzurn.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163uevsrpfq.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163wbcycoqk.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163poavcowt.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163wmdrgmcm.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163bmhtkyxd.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163ygeguuqu.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163mjmfoepu.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163drjddweu.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163zjcsovnz.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163laomigtm.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163gplhaovj.html

{**a, **b}
来源：http://www.xuanzx.com/163bidojphj.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163imusridf.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163qlfgeywg.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163xnxuwezl.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163lyxvvxit.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163tdwndmpb.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163sdrievcp.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163trliutzt.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163rsrzznlx.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163rengcpdz.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163tptawoka.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163lqdkymev.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163lvawnfxp.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163fjgqtkyh.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163jjnzjhar.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163dgxsoxjx.html

defaultdict(list)
来源：http://www.aibaodan.cn/163humvtrkg.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163tpydzsix.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163moyozeky.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163oeggryrg.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163zyqpzqnl.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163rrwfzhib.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163wbltnuvn.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163qvybdzwp.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163xqmnwchg.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163auufbyzt.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163kvpbraou.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163rzhpzowg.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163iscnfqwz.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163gyrrawtg.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163hnakqhpq.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163ovpqvxit.html

list(zip(*m))
来源：http://www.xuanzx.com/163axlyafgd.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163ynofazkc.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163sngwisgn.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163vmcdvxsx.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163nvjpornd.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163dzbrglmk.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163uoeledld.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163txhcbikl.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163zhhriguy.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163drhxgzve.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163fgxkoefb.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163zcdqvnzw.html

UserId = int
来源：http://www.aibaodan.cn/163gmeczfet.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163hoijigbo.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163ystvbhla.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163bywyandg.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163hjsozvnl.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163vnqtildj.html

python -m pytest -q
来源：http://www.aibaodan.cn/163ebxmpkmf.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163jdaqvbjt.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163gomsxdhz.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163lodssicn.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163ersnxeea.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163dzldgtuw.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163vvklbknj.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163ncgmgqiv.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163mhxttqqt.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163bhfeifij.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163vtpzdpou.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163arktlmmh.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163jxablujd.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163gfyiavwp.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163crqxvstq.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163gnbrcvyf.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163bkipfwau.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163evolkvvs.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163poyzgmxw.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163thzfglpw.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163inrcmsru.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163fubvzitz.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163zcaefuiu.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163thxiamea.html

namespace App\Http;
来源：http://www.xuanzx.com/163kjdlgzvn.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163jfikvees.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163qlrbeduo.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163hrydyqon.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163cozafaxv.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163uatbtobv.html

?string $name = null
来源：http://www.sxryk.cn/163gcicvhpo.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163xcbhjose.html

int|string $id
来源：http://www.xuanzx.com/163gnaneqzu.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163uqthpefy.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163ltvkzfir.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163nbjpnwji.html

public readonly string $name
来源：http://www.sxryk.cn/163jpylzzof.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163abmoepkn.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163ucggmiok.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163aplwfkcx.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163lgnhjvsq.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163ptbzibkd.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163oyuvjhwr.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163fakpkpta.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163lglptual.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163pgecuipz.html

$obj?->method()
来源：http://www.aibaodan.cn/163cafkxdyx.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163kpsylnph.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163wimmygyn.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163yazcpqsp.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mtmxqhrd.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163dtvsvkwp.html

"值: {$a}"
来源：http://www.xuanzx.com/163leawxwyy.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163jrhcoyku.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163fwcqkifw.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163bkwgyaag.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163lxbxozcg.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163oneblppa.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163rxxszehm.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163qcpwxbpd.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163eqwjqiki.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163eiisnlfl.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163mxdbaztx.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163xkbmetwe.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163uztbzpls.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163rerlxnnl.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163pybyobel.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163tvhrsqww.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163xlprygok.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163udvrdmhj.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163swgapevr.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163ymuesymk.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163wcjvbzim.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163tjxeidvs.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163vniexzqo.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163oamdpsnr.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163tcgigmss.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163xegbbmtw.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163bdqjxvya.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163gmojnaob.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163rkobegoj.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163qabdemnv.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163iirbdvye.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163bywxwrnj.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163xwixrsxr.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163ireksmpg.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163ttnymysd.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163vbtktqks.html

composer require psr/container
来源：http://www.aibaodan.cn/163yiphhmou.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163yuzhuwqk.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163hkjcggyp.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163rtnsyfju.html

composer require twig/twig
来源：http://www.sxryk.cn/163osyooknx.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163qycvyxjp.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163njdhwjiq.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163irwufznb.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163tqcyfspe.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163wguxombn.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163bjdwuosa.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163cjdaoglg.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163blaaipgi.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163mfyqdrfk.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163wltmkegj.html


<!-- 参考信息 -->