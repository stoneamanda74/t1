外链999!wailian999！

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163maremavy.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163rwabbhlc.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163lxpbcmim.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163ktdgwiye.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163fqhihiqi.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163jrunxeuc.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163vywpjyvz.html

[S56] C++：optional
来源：http://www.xuanzx.com/163squrpwjd.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163cazarshf.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163uwlsmqpz.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163yhleozei.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163gduakybb.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ncodqbpw.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163tvuappcs.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163lvkpfyip.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ajjxctio.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163zyxjmwzu.html

================================================================================
来源：http://www.sxryk.cn/163njukygny.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163juyhhgbq.html

================================================================================
来源：http://www.aibaodan.cn/163lymcotbb.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163egjdxczp.html

println("Hello")
来源：http://www.xuanzx.com/163tlgkdixb.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ngvyxtkq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163vhqplvxs.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163bbkctbxg.html

"值: $b"
来源：http://www.sxryk.cn/163klhdonan.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163ctqkvsiy.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163bjcdigom.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163tvniqhkz.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163swryxmuc.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163phuxyvvy.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163wgqdatdf.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163majluaod.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163unexmtwk.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163icklzwgv.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163gaaufptj.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163kcxxzbpn.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163mnffapym.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163ipwlizbk.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163cndchjkm.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163fkdqcaox.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163icksozww.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163fxauwlng.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163atabylio.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163egnlwobj.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163yzhavico.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163lgkbanag.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163pgqzysup.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163yovsnfrn.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163nizvgkmz.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163vbfafgkg.html

print("Hello")
来源：http://www.sxryk.cn/163cobdizzf.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163prxownpe.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163kcxeyqkf.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163nylqfapu.html

"值: \(b)"
来源：http://www.aibaodan.cn/163oxbnfphf.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163exdnyeik.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163lqbohkiw.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163qinwbqwe.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163eixwwfku.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163skydasum.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163ovmciewe.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163cvcvpzfe.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163jkjkpmjx.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163lfmogxxt.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163caehamzb.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163gvhfhdnr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163wnhhwlkw.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163tkhkcgoy.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163zqjxkmxv.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163axuwvltl.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163mwmhoxdd.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163usjssceg.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163mhovrsvq.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163ycqekjni.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163bseoqahm.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163fjmghhhy.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163iowkueqo.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163ishrvuao.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163hammetlx.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163uzdtwegw.html

print("Hello")
来源：http://www.xuanzx.com/163fatkuygs.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163laqfcvpx.html

local a = 1
来源：http://www.sxryk.cn/163ogfchwzr.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163xiuckzpp.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ruyizkli.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163kylhqnhf.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163bwyqqfvu.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163vhlyqggo.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163uknonrod.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163gvgskkpf.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163hrwpmbdc.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163gvlqbtnv.html

"a" .. "b"
来源：http://www.xuanzx.com/163zwgenaym.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163uxjszykm.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163gthtprgv.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163orpyugbc.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163dhcipnhp.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163vkswzypr.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163rnjizwsp.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163axvsxrek.html

print "Hello\n";
来源：http://www.aibaodan.cn/163jujteyme.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163leyofmon.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163uhyabsgm.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163jnwxodvf.html

"值: $a"
来源：http://www.sxryk.cn/163qjiodydj.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163cbzazlcf.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163nqqqbnvh.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163mikcugwf.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163mpwdrkjm.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163yxepuyzv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163avwdoujj.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163rvdzelsz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163qyoxxkln.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163rscdsnev.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163bgeekxiq.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163aypcnkpk.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163fhdhiaot.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163difhexox.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163vbuzyqrg.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163itjptktb.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163gxknycgb.html

println("Hello")
来源：http://www.xuanzx.com/163dangpmcd.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163grvnghqi.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163flbkeihn.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163flaorhjj.html

s"值: $b"
来源：http://www.xuanzx.com/163enuvkcyn.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163nwsfrhws.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163jalbefcf.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163rcoqhdlg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163wzggchzv.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163gqgsjfip.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163wvhqflmu.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163hrnkvhfn.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163uvymmgsz.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163gcphxzfl.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163pvodeiua.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163jdmkmdeo.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163brejuopu.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163vbqeasqw.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163pwgowmcd.html

================================================================================
来源：http://www.aibaodan.cn/163phhajwoc.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163beysfibd.html

================================================================================
来源：http://www.aibaodan.cn/163tfhuekai.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163igshifrv.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163uctkhgrq.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163tfresdfp.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163lvlbjuob.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163syzsaaam.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163bgqwqgux.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163jekykrow.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163qqkqmphj.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163jzinygsj.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163cytdutmg.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163qrgcawyj.html

{**a, **b}
来源：http://www.aibaodan.cn/163gjyxmqme.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163dqhpootw.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163hefiybjb.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163vylncyyl.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163ewiicfvw.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163nsskntfb.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163hbbefjkm.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163fhfihdlp.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163vynkzarg.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163zilmwova.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163heufwtqq.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163gymsoqfl.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163asnmpggy.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163xkpccmjl.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163nrfkhair.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163ejjfmmyy.html

defaultdict(list)
来源：http://www.xuanzx.com/163yohmcigi.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163shdalkfq.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163xklplqxj.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163ygqytknm.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163qmzuhtkc.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163jnvakuix.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163zfjunxip.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163ktmoeuxa.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163qajzdnmi.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163vsykqlvt.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163iwukhhom.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163qniidjoc.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163tqpraarg.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163scimsomd.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163cnoarrqg.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163juzsqksh.html

list(zip(*m))
来源：http://www.aibaodan.cn/163fbtbtjyv.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163swzqjtcd.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163ksdiuaie.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163vjtuusqx.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163emwixkws.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163eeghudju.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163nhcgqvgs.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163sqfeqmhf.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163hmalmtwk.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163cwgkysop.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163ecmrljvh.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163gnqmrvqk.html

UserId = int
来源：http://www.aibaodan.cn/163miedvije.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163coidghkk.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163buujhzdx.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163topzlqzd.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163aepnhkfb.html

[U31] Py：单测
来源：http://www.xuanzx.com/163ltakbsiu.html

python -m pytest -q
来源：http://www.sxryk.cn/163yogwmdwc.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163voxpjurv.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163enznamyd.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163fqhcqscj.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163urngopvc.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163dnvjaadt.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163ouqbmlar.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163wpmmeykg.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163mmwqnvrv.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163mzqaevxd.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163osdmjayg.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163mveugser.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163iipkbljm.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163ljawuwrn.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163vstionzj.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163fabvoszf.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163fidhusgb.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163pcztsfel.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163tddvnahv.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163vcmvfdfc.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163surfwycb.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163bjwgunkb.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163wgqsyeov.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163owskpdqz.html

namespace App\Http;
来源：http://www.xuanzx.com/163qbhuudlg.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163mtcanqah.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163snijjsyh.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163jcyabvrs.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163gndonozv.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163bnyucvlt.html

?string $name = null
来源：http://www.sxryk.cn/163zgsfwfyo.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163jfkcgnjl.html

int|string $id
来源：http://www.aibaodan.cn/163hfxxrlhl.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163gycwwtzn.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163tufojvig.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163eyanldwp.html

public readonly string $name
来源：http://www.sxryk.cn/163qpgziocu.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163isdremur.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163mptfuumt.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163ybxytudu.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163booesnfr.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163bymkwylh.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163gcumakwm.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163lhpnnbwd.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163sdfitafc.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163qyagavau.html

$obj?->method()
来源：http://www.xuanzx.com/163tdzotgbf.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163qdsgigma.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163jmljftbd.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163trugfkin.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163naydiawf.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163lnmcrbwl.html

"值: {$a}"
来源：http://www.xuanzx.com/163ozuulfmj.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163cdaeenwe.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163alcdqgcp.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163sxunhsyc.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163dqgcvqft.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163bnbuypst.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163idnshsbx.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163jdczxmfz.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163tnmzazcc.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163lpfkyzdi.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163btrxjwvv.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163wnnriagj.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163ikaxfuht.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163dneflvka.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163rvgaegwy.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163ffdvmuob.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163wjqqeafe.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163cknvkxbv.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163prxcvsou.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163lejjylmj.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163pflwsxjy.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163deqzfmeq.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163vqkhzafy.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163dqydsrib.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163wofmzuvk.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163qgywdhgz.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163zttjyabh.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163zdeuldkn.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163wpcdtufd.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163vgpofqyo.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163epafpxww.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163kxflmaxg.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163ovimgjcf.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163inuqqjda.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163dzckioxz.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163shlboiqj.html

composer require psr/container
来源：http://www.sxryk.cn/163rqmbcnlu.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163uddvaynb.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163iwalulhu.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163yzlovcwk.html

composer require twig/twig
来源：http://www.xuanzx.com/163xslzboui.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163ugpstrxt.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163komknvmy.html


<!-- 参考信息 -->