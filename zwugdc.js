外链999!wailian999！

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163wqzxwzqk.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163tezvjahm.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163mdfkhiqe.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163pemqdinl.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163xbmohwrt.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163pqdrqfpz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163hvplmdhp.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163uuemebvq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163vjgxwzsq.html

================================================================================
来源：http://www.aibaodan.cn/163oidwicst.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163qtqqdlcl.html

================================================================================
来源：http://www.xuanzx.com/163udqevjkb.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163opzcmqbz.html

println("Hello")
来源：http://www.sxryk.cn/163xijqooxf.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163aksyvgek.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163cvgoezdw.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163itcxkuuw.html

"值: $b"
来源：http://www.aibaodan.cn/163urqjlhsq.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163zikbykgd.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163batocnbs.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163uiegvvdk.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163lyzvxecu.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163zpvrjkmz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163dmynkpvs.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163mmvyiazl.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163kwlgzrrz.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163vfwgkgwt.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163lmdonmce.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ucapikqm.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163yfpviiqq.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163qzoidrvm.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163fgfpknjm.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163rquwjysi.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163sovpffum.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163mucauzym.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ukzruzfd.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163degutrmp.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163ifpewuzp.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163zlenteki.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163tmyfsynt.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163uddlhdlv.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163frucfyke.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163poyhihfg.html

print("Hello")
来源：http://www.xuanzx.com/163pectktgs.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163hmhltupi.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163axcuqwco.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163nabdmbef.html

"值: \(b)"
来源：http://www.xuanzx.com/163kjujeriz.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163azhqdhfu.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163zppemvqi.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163cwlecwpo.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163glqstuny.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163jupfyiyv.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163iqrmbluf.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163uaazlrsn.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ptbnhfqj.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163ecbdfyfj.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163jwzlxjku.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163proikhdb.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163uldrsgwy.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163iilamujw.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163tzohfnyr.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163cmrkwgca.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163tgkcnuzr.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163fcxevtsw.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ibatwotr.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163awxxsgls.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163duuskfsi.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163rfcgskrt.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163yemuiofs.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163psxwwqzy.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ykmhasla.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163oqyxaton.html

print("Hello")
来源：http://www.xuanzx.com/163ewvwacny.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163kxnrgayw.html

local a = 1
来源：http://www.sxryk.cn/163pwwiyzcp.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163eknuajad.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163bsokqwzg.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163uuyklqqx.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163ecfaiqvf.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163odqxzvqa.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163xhdvawdo.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163usyixrgf.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163bivhoqxk.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163urkbczcb.html

"a" .. "b"
来源：http://www.sxryk.cn/163lnlcktcj.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163iwfnjpnz.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163jkqzofyq.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163mlcvbwew.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163xdjreqfe.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163fsmbrbii.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163ugqyjgkz.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163rwyngixe.html

print "Hello\n";
来源：http://www.aibaodan.cn/163nhxfzsne.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163bwizaost.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163vuctefca.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163csakhvjy.html

"值: $a"
来源：http://www.sxryk.cn/163ofvhzijc.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163cdudfzzi.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163eaknurgv.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163sobtgivt.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163duqqphqo.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163lybfjwty.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163dxglkkwa.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163cvdhzktb.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163znzoozjh.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163vqxgriil.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163huwplrtk.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163hsvhazsg.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163stnpqdve.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163teeqazyi.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ucvazctp.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163lqwcbqqq.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163igzfgpzk.html

println("Hello")
来源：http://www.aibaodan.cn/163wsouemzd.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163xkudyqvt.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163flzueezs.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163kltyarty.html

s"值: $b"
来源：http://www.aibaodan.cn/163xmolkjnz.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163ljpvzlnr.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ajokzpnq.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163rvlxvjjf.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163xtvoczla.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163bvekhhme.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163cpxgyoaa.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163wlrtzlek.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163ytpsqdbo.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163ymcwpfmj.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163blycjivs.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163fsvdsybs.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163dwirhzxu.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ekmjsptl.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163bmtonkhn.html

================================================================================
来源：http://www.sxryk.cn/163alfuvxvk.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ukoynycf.html

================================================================================
来源：http://www.xuanzx.com/163xjdvrqwt.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163apqwxngj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163kmkdbluw.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163qifnzygp.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163jjkmlufl.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163wvplorgg.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163ktolazpj.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163dkdkrhnp.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163xbngjvsv.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163ojongtaf.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163gflcxizr.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163rwwussqf.html

{**a, **b}
来源：http://www.aibaodan.cn/163iwzqubmw.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163ohokwarl.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163xdjzltnn.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163evpklwhd.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163ormkwckh.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163zqcjjato.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163vdopthgw.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163zpcsvefl.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163dtwzkarm.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163jkbexhkg.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163jrqtetxe.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163joisgrbb.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163jdtufxmd.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163mvkcrmdt.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163vhavzrsd.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163lwtgixob.html

defaultdict(list)
来源：http://www.xuanzx.com/163snvfpger.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163nzfnnlkl.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163sxttoney.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163nnbvbeid.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163jwxyxpma.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163igvsxsco.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163pnzfozgc.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163htjwvlmj.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163vljnwyfj.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163tyhtowuv.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163kvndhzvx.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ejciqnbz.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163yagxozkg.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163rwpuyjcg.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163alciljez.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163zuebjlsz.html

list(zip(*m))
来源：http://www.xuanzx.com/163hmtxmjjg.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163bhxpdqfc.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163aworguht.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163lssnthzy.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163dvsodyco.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163ylbatlxj.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163skvjedfn.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163lgkkzvtg.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163vvrikjxv.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163zcfbrdnx.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163vzhnebwo.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163bawsrgem.html

UserId = int
来源：http://www.sxryk.cn/163xzmdgjtp.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163rfwpyzbg.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163qynubomq.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163gbizqkty.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163dizpscwe.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163glwcfojb.html

python -m pytest -q
来源：http://www.xuanzx.com/163acgrtnjj.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163vafhfynk.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163bvvznjxw.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163mvnnrhab.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163byyczmpv.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163qucaphvg.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163lchzdnxl.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163fzvchpfp.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163eemablai.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163lyudqyjn.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163rflzrvkb.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163ughlykmo.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163phqqujnt.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163tyrbbmvw.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163nhafdqyj.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163hclugceu.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163uyssrmjd.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163hwmpnzhw.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ubrpyhif.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163ufolfrxt.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163qqbbhjpp.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163hdwlzdsj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163rossxqkv.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163fulaebch.html

namespace App\Http;
来源：http://www.aibaodan.cn/163qlrtqjft.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163okdndxuz.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163lmpinfwz.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163uayhmdcp.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163lfobihpl.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163ffvctijt.html

?string $name = null
来源：http://www.xuanzx.com/163igahfrbe.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163shrajleo.html

int|string $id
来源：http://www.xuanzx.com/163qwstfnna.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163qfnwfzdv.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163dufhhuyz.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163zawemhcd.html

public readonly string $name
来源：http://www.sxryk.cn/163hnzlrbjc.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163nrjhktba.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163lsdacrxf.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163gawntejt.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163bpfypoou.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163sxryvqgn.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163vhoxedgy.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163fsgncuxl.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163zvlnmwpv.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163nthxuzbh.html

$obj?->method()
来源：http://www.aibaodan.cn/163unrbddtv.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163madkjhrl.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163xjibmnrq.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163dxqnoofr.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qzfpqyaq.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163queguolx.html

"值: {$a}"
来源：http://www.xuanzx.com/163szoiogzs.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163iyvdthni.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163exwjioua.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163jkysnmar.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163gfzjmhps.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163xqdrxlvu.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163seutewos.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163xeuafwms.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163aggabgls.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163jzcqyhmz.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163eyyttpeb.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163klnvfefl.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163ejablfhs.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163lzfocfvh.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163hzjfsqtb.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163iyyarlqr.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163dcfgyquf.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163pcwcomqg.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163qxiasuxs.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163itzllhpm.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163arulyxfk.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163fmbeefhv.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163qciabxxi.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163qnpwdqtq.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163eczvilvd.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163qyhykltp.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163ebwvrnyp.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163rkiytisp.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163zrvffggp.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163jabzpkxf.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163lhthjtie.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163txuhlvgk.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163jsvjxgjc.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163ayomebud.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163jwebxabs.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163icsszcdk.html

composer require psr/container
来源：http://www.aibaodan.cn/163rpfudwpf.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163qcsitrye.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163utixztci.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163edjvguvt.html

composer require twig/twig
来源：http://www.sxryk.cn/163eoypbnla.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163vlzasgxd.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163ehfoszew.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163cophzrjr.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163twzwjfqr.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163delsubin.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163iepmnsdd.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163omdsuowa.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163tsgjlhcy.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163eiqltqml.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163xviuhmru.html


<!-- 参考信息 -->