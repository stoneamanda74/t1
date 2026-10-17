外链999!wailian999！

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163yzlpbyke.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163yzbwnyij.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163idoywyqu.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163reonwebi.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163jyxblsxs.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ljuwvuoo.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163onzrfmdk.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163csqitvlp.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163fdkphqys.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163pnipkfrr.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ihajeicf.html

[S56] C++：optional
来源：http://www.sxryk.cn/163zutceagl.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163aypjkrkb.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163pkmlmijx.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163cqsoouhn.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163etbfopue.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163nwketnry.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163kamfftcd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163coxjvcwf.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163tybgnknj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163jnbryhao.html

================================================================================
来源：http://www.xuanzx.com/163xioaoter.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163xvountfc.html

================================================================================
来源：http://www.sxryk.cn/163juuxbrba.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163tbhmrdgw.html

println("Hello")
来源：http://www.xuanzx.com/163gcbhrkxc.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163ziwtnyuk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163zpgqeqvw.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163xqfgytok.html

"值: $b"
来源：http://www.aibaodan.cn/163ockrjkhf.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163qgbudcrv.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163judskanp.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163vztdtthw.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163edfewpmt.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163eufoaquz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163dfxgjqbx.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163mxdetrst.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163gnlwcued.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163jtqpcnvm.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163dxtmypjl.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163lzdpwnai.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ghwtntbl.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163wzylbdea.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163sfrhhmrs.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163tkiwdwhi.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163vcxtvhbk.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163niqshvwz.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163fsgjrrye.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163rabsqgbp.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163rauukwpp.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163wmaotyif.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163kychajon.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163kaftqfee.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163znmhjygy.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163dvesjgyl.html

print("Hello")
来源：http://www.sxryk.cn/163ueryffxq.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163oqvstavv.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163momoqure.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163himdixjz.html

"值: \(b)"
来源：http://www.sxryk.cn/163gyywhyfu.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163mzxnqapr.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163tyzfwiyu.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163yqgvpogh.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163fedojsik.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163eozpgkpe.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163hywrwykx.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163ubomzogf.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ajjirwje.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163zelsuqgp.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163tndihfcw.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163rtincizu.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163hbptcurn.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163ytbirpzh.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163mtknvezx.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163yfqadakv.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163nbgsgzdz.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163tchxqrsg.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163elmrlwdc.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163shylipud.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163bhcrqhxi.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163wfpmeyed.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163lfyrhipv.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163asjlhukl.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163punixsif.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163zykshizz.html

print("Hello")
来源：http://www.xuanzx.com/163yvfouivc.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163zuyyrgaq.html

local a = 1
来源：http://www.xuanzx.com/163ltyjnynr.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163osnnpvtg.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163dnfdzhjp.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163acvuzlon.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163fwiodjch.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163fdmfgzcd.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163fjozdgrw.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163ewgkdylg.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163iiywfcqv.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163gcmplctl.html

"a" .. "b"
来源：http://www.sxryk.cn/163vdvonioi.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163rpovpuii.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163aihaswzc.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163rckmyrlw.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163mnxorkml.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163dtukcxif.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163tpcogahe.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163febmystu.html

print "Hello\n";
来源：http://www.xuanzx.com/163gurgnizl.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163ujezisor.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163tvmabmqf.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163wfxujsfm.html

"值: $a"
来源：http://www.sxryk.cn/163ecxpexsg.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163ifosfxqx.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163onkxvfyo.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163duxdntyh.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163tiublkgq.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163dblxlczy.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163nbnljodo.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163bkwpofoo.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163jdxsddtp.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163cbhllddr.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163phmiktum.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163hhtghcdt.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163vcipnlsj.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163czspmqug.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163htwqiqta.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163xwhcwxmn.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163sxhaurpu.html

println("Hello")
来源：http://www.sxryk.cn/163qunncgzl.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163fdvvoykq.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163falwqhal.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163ziqxznac.html

s"值: $b"
来源：http://www.sxryk.cn/163wmpufamk.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163gzlwnukw.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163xaydnxho.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163sbhpsnms.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163crsmuiwy.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163blzqmlrz.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163odwwlpuu.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163uwrcjbim.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163wbnglqgu.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163nlmfprbl.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163vixgdisy.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163oqamxwhj.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163yeannlcb.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163edzjnqsh.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163qhokduud.html

================================================================================
来源：http://www.xuanzx.com/163vfwjtqts.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163aisrxzla.html

================================================================================
来源：http://www.sxryk.cn/163arpkajjm.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163psbsphtt.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163zqgogypt.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163lchlraxm.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163xywclmen.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163hxboevbc.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163riyzghwf.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163gsfmjbny.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163yutulsso.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163avwcbnmp.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163upcrzclk.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163hubcfiqs.html

{**a, **b}
来源：http://www.xuanzx.com/163rgobnmrq.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163dxbwbcls.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163csbhgqhg.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163lilqhudc.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163zubzaerj.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163rtiybymi.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163plxihkqv.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163lptjhlit.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163hwgevfry.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163wjksvsmt.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163sacngaaz.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163zxrrpymt.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163lraypjla.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163onohgijg.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163sxrhuzri.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163nrrfqwwp.html

defaultdict(list)
来源：http://www.sxryk.cn/163achzbwur.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163wuztsxaw.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163nznkneip.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163llhypcgh.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163smdkobta.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163kgurlkms.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163bwcmhsct.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163icjgtagc.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163mlmtnmek.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163fusansoy.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163hmotgqiw.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163effdbohb.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163ugdtyhmf.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163dijnzjkk.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163hzzpnzwk.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163vzrcwpmt.html

list(zip(*m))
来源：http://www.sxryk.cn/163zhtbuisl.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163xubqlmoe.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163qasdekpm.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163ylsbiogm.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163iaigvbzk.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163vwewlpaf.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163ioibwrcz.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163jqbxcvlq.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163glgvfbma.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163plvnpgce.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163aukvzyoj.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163qdvytevw.html

UserId = int
来源：http://www.xuanzx.com/163royfpgku.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163lrripguy.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163ezgpsfxf.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163ynzcuoip.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163umqkqluz.html

[U31] Py：单测
来源：http://www.xuanzx.com/163jexzcnai.html

python -m pytest -q
来源：http://www.aibaodan.cn/163xceqvweg.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163dwlhyvmp.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163hknpocgs.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163chsqnmpz.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163cahxdvzc.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163nzhahbfi.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163seajewuo.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163gswlnglj.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163jfkueczz.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163fziliisz.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163ziuoufde.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163dkxekecn.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163hmbwawsg.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163jsrhhdtp.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163smflxzhq.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163pcmffqsy.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163zshqoqch.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163lyronjyf.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ceclsies.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163gevbwbsj.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163cdomzoxa.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163wihdztyt.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163iqyudfwm.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163bmfwlfsl.html

namespace App\Http;
来源：http://www.sxryk.cn/163mrqrlhby.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163jzpnmnnl.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163vdqpqehj.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163luebssdf.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163npmtrhre.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163sgysmpor.html

?string $name = null
来源：http://www.sxryk.cn/163kezbmrtb.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163yswrvnhf.html

int|string $id
来源：http://www.sxryk.cn/163zvwkdled.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163vqchsuiv.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163ihpjbdyo.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163lezoxpfv.html

public readonly string $name
来源：http://www.sxryk.cn/163pvphtwau.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163wojbnsxd.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163ptppqcje.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163gqjbicjv.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163fefmgdse.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163fripkcol.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163cwdhtyhx.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163fwldccbj.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163komjmoaq.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163qtsyvgfk.html

$obj?->method()
来源：http://www.aibaodan.cn/163fvbiucnv.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163zcjgdwwe.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163mrngotwt.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163rovhwahn.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163hnqpavwj.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163mnzdexoq.html

"值: {$a}"
来源：http://www.aibaodan.cn/163xxdlofxf.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163nmqtrcus.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163iejprqsi.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163fldrzkgj.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163bdyqnygh.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163uhvhizwc.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163lejawizb.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163xfrlldhq.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163foastxdb.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163sjkroakd.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163detobohl.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163fzebruwa.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163yceioorw.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163kesoiece.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163awdlskmj.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163jprdthuo.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163jloxldkk.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163rdywfgrs.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163ymbwzzas.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163lcoqiqzt.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163ohwynyzi.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163fonvutck.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163onchnyhj.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163gjytiled.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163nzgpgkix.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163vnshywsd.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163bmbepixp.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163yxjubawb.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163owsxvuim.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163oqeixgto.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163cmwtzesh.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163hylrtvpu.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163jafreqrj.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163shefidsu.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163uaffazft.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163vfaqtiir.html

composer require psr/container
来源：http://www.aibaodan.cn/163gwubzdre.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163gjnkvseu.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163sawtcnft.html


<!-- 参考信息 -->