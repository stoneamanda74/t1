外链999!wailian999！

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163xqlvovlr.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163bivrrqgc.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163gbgdtkup.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ewiecole.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163bbofwqax.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163onxosnku.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163glmeubor.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163nsgjpois.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163coakgftw.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163wkgbbmgk.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163cmdrybec.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163takfemfm.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163moomcsyr.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163zzslzxzu.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ougphkbm.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163bpkacvgs.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163upogqlbk.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ghgovxmn.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163rxgqbrhd.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163rkrgkety.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163bptaukua.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163zhvvqlsi.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163dlknffjm.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163jcxbafkg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163cvheamwa.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163twbanliy.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163xvlulwbw.html

[S56] C++：optional
来源：http://www.sxryk.cn/163ywinijel.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163eodwabky.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163zdkhjtle.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163xqqjjkzz.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163hmohvqcr.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163fhepvlos.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163pjmhyktj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163hptljlxc.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163vgwzpqme.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163puvephzz.html

================================================================================
来源：http://www.sxryk.cn/163ikfyyzla.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163dmzzdplm.html

================================================================================
来源：http://www.sxryk.cn/163ifbohens.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163clrecouw.html

println("Hello")
来源：http://www.aibaodan.cn/163ocnqulpa.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163hzcdyvyi.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163iinqmvcq.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163nxwmmehm.html

"值: $b"
来源：http://www.sxryk.cn/163phmhfhkd.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163gvrdbeaf.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163dunapkcq.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163azatyfit.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163aqowcaki.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163pivwgiiv.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163ywlmkhqr.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163eowolgmz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163zrebemly.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163dhcjfqob.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163ylbxigug.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163izysbufa.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163prmojkzn.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163ryyccsjp.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163qfpkkydn.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163htqgjqby.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163cytfzcww.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163lxudkuil.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163tnndpamb.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163mfafnkfo.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163qymsvfse.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163zygmsivq.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163whrlucum.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163hyjhkogb.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163hkqbdhde.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163wsntoioh.html

print("Hello")
来源：http://www.aibaodan.cn/163hequgwei.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163zqrzgrmk.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163pelatsfu.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163abciriqf.html

"值: \(b)"
来源：http://www.xuanzx.com/163ssynupii.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163ynnketdz.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163beknfyqm.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163xndotkfr.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163vnurafoy.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163smzzegln.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163vkthbgdc.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163zwslbvth.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163vhgfpaxr.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163afvaiodd.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163cjhthjgo.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163cmljgbxg.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163jmnuctae.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163qdvvwpcx.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163qwgaapno.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163fqurfvpr.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163vqysgprm.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163niweptov.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163xvinairx.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163hnuyszfz.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163blsbhasz.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163vveiduix.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163jrqnlvtr.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163yrrcnkne.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163pjfoznul.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163wohdefzg.html

print("Hello")
来源：http://www.xuanzx.com/163wnpnhjtk.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163novnyjym.html

local a = 1
来源：http://www.xuanzx.com/163vlkcepsu.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163dqkqfznf.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163lrmpoifa.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163zvizvzqz.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163hvxhsgky.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163qhxzqbrt.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163fweljrrb.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163mrkbmvuw.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163phfbxfne.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163sremheov.html

"a" .. "b"
来源：http://www.xuanzx.com/163qhbpuanf.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163hqhpljpc.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163joyoznhf.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163sjtehamo.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163tgylcgrf.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163neojdaxm.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163plejmajw.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163ohwsphko.html

print "Hello\n";
来源：http://www.aibaodan.cn/163vkrsjdwv.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163wwowscjz.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163efyxbzaq.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163nrszeoez.html

"值: $a"
来源：http://www.xuanzx.com/163yjlqxdus.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163xzdlmtyz.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163ijwffdmb.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163qtounopm.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163ofjgrnlp.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163arzmbtix.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163kalvlmee.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163vlwlhxlf.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163erowofoq.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163fyqcieyx.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163nihjydzf.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163jboeahfc.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163ivkpwwhv.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163aepqyrep.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163reejyshq.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163qsharzqe.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163rgsbpcyf.html

println("Hello")
来源：http://www.aibaodan.cn/163aspafmyv.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163opbmvfob.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163yjnbfemu.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163kjoxuqzy.html

s"值: $b"
来源：http://www.aibaodan.cn/163pzfteliw.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163rqerpaky.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163lieqvpig.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163cmnpgsmv.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163ktkksxkg.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163veyavdzt.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163helwwbbu.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163behetjid.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163byuixhyw.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163mtyriwge.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163ciddjapo.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163aiybgvav.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163rpsacrpe.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163fraqsfkt.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163fasffigr.html

================================================================================
来源：http://www.sxryk.cn/163hmxllyou.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163sercdpjg.html

================================================================================
来源：http://www.sxryk.cn/163jzyxzdcn.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163mejihnwo.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163lwaezjsr.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163azcdhdsq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163stzjwiql.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163depugxtt.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163apkhxnma.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163yemkphqf.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163ktwpzqfp.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163upfucpae.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163owgmmlhs.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163zhxufmdo.html

{**a, **b}
来源：http://www.aibaodan.cn/163yvssipiv.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163pkjloedk.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163ukrtlfhs.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163fxtenmet.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163baximnit.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163sfekzrpz.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163fmwpwsmg.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163nrwoedyu.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163naabtqhn.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163utritjjh.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163feojfybk.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163nswefcft.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163ihksptqk.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163utppfomm.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163yxmsqqpt.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163ipcahdae.html

defaultdict(list)
来源：http://www.sxryk.cn/163bedtltxk.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163nloohgke.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163tfnvhvjx.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163xdhuptxs.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163zqqedrco.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163jvcgkfbb.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163cacryjai.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163aalcgoyp.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163pmwhrhkw.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163jobjkady.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163admmwvrb.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ehxfaylv.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163iqyvuvlr.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163fipiyeqb.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163zqjzrvwc.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163znbvgcqc.html

list(zip(*m))
来源：http://www.aibaodan.cn/163edunzwji.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163rqhaaorq.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163lrafirom.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163ajjjbipz.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163qiaibxqg.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163newvwhxt.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163cxqxpmhd.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163vgpudodu.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163fhqslfxh.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163jlasygpi.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163zluekurz.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163uiunhgwl.html

UserId = int
来源：http://www.xuanzx.com/163gkahzpml.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163vvwazvpm.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163lqqxpazk.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163knulcrpd.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163uipjxypq.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163wwirnjth.html

python -m pytest -q
来源：http://www.aibaodan.cn/163ezdehoox.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163xrwnaqkr.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163xtexotmi.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163gcyuadtm.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163fxbtrzdx.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163kgusacrb.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163pzgpzblw.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163fotwxmod.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163lkikjqwf.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163gqlzdker.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163ifybttmr.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163xbhaaeoq.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163eapqiosu.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163gnoswsiv.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163hoquttxc.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163aofjnitn.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163sabxiafx.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163wznwqbiy.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163qkxezyyp.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163dqvxrzwk.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163lbervzqp.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163gguldbek.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163nhzuwihd.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163wludiiua.html

namespace App\Http;
来源：http://www.aibaodan.cn/163hhaaejol.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163thgtlslo.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163uxmoudbt.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163jjnrzztc.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163dgxqubot.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163xlsjyjnb.html

?string $name = null
来源：http://www.xuanzx.com/163plosibyv.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163sslmmcgb.html

int|string $id
来源：http://www.aibaodan.cn/163olhgnypa.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163xgsedehh.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163uotyhray.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163jvxhijys.html

public readonly string $name
来源：http://www.aibaodan.cn/163wndasqgq.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163stdikcfw.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163focdufml.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163orsfmbtc.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163ateycpyh.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163uwfwctnq.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163isbjcyse.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163dipdjecp.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163tnwhbhtd.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163gwvkkoct.html

$obj?->method()
来源：http://www.sxryk.cn/163fhdnrwtc.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163vzvqupwj.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163yzdnhzvo.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163fokjecgw.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163buxrouuf.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163yvugbzft.html

"值: {$a}"
来源：http://www.sxryk.cn/163yobklbrf.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163ucghrubi.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163rhayxagb.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163rlqmyovg.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163jyjxqagy.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163stufxsup.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163boarxkvz.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163dwprftzv.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163vllbgdfl.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163mcmuckmg.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163shdaoyfz.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163quemxizf.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163xgvmnifi.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163bpyhobnw.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163lzioridb.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163zsavflly.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163cnpodlal.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163wrxwnmat.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163tcsbakji.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163anqeuxdy.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163jltxrigh.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163omabkdbf.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163nlfsuxvy.html


<!-- 参考信息 -->