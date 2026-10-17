外链999!wailian999！

[S35] C++：map
来源：http://www.xuanzx.com/163fonzlxlj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163sizqannc.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163ucpmthfd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ihzvwnso.html

[S37] C++：set
来源：http://www.xuanzx.com/163fqqdgrcd.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163dglzuubx.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163neueaapa.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163jyenljfe.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163sisvhcqt.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163gwiqixpq.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163bhsvgaxn.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163zohtugcr.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163bepousde.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163acieifpp.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163xqqnjflm.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163rfvynuiy.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163oubrgjet.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163wdcrdulj.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163iyiagscd.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163ronvlmgw.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163pltcczts.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163zfdnvscp.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163dufiokqe.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163uhvcsnpp.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163zuanfcup.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163glhomhbp.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163wkphfxih.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163uijslvfu.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163ihfridcq.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163qwmkolbe.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163vzrbmtxa.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163lftcwztb.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163dlboskca.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163fyfbmrcf.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163yvogaymb.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163qrrstaaq.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163mtsassol.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163vdoxhcth.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163sljtdppf.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163iiuieiin.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163wfvrgvje.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163llezceyj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163hbicplfb.html

[S56] C++：optional
来源：http://www.sxryk.cn/163wyzjgkcr.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163vvmffktx.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163wnkyajqk.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163spthokhj.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163zikerxtw.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163hlwncygi.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163jmsdwvcn.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163lwstjfhp.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163akwenqdj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163wklwvpfd.html

================================================================================
来源：http://www.sxryk.cn/163zznoikqq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163mhxcvwfj.html

================================================================================
来源：http://www.sxryk.cn/163wqdgfxfn.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163lqvurexv.html

println("Hello")
来源：http://www.sxryk.cn/163pkyyuoyx.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163ycvlefzh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163hziygovh.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163dlnbtglq.html

"值: $b"
来源：http://www.aibaodan.cn/163ribjtrcl.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163seuyaptq.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163qjvfncpx.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163ueoqmjlv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163ukvsxmzt.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163afliirah.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163qdhcurnh.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163slhtovoa.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163stdknfwf.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163wzixvnzk.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163kqodbcxo.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163darzpayu.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163decbdgzj.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163vtuhxrdr.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163mzgozpsq.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163xxrrqxut.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ejuwamni.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163cdwrromf.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163pqnblrpj.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163ouwkcjtu.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163tbmchurc.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163cafbyobg.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163yedecvlr.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163kryorjuo.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163xcnoartx.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163hhclylrn.html

print("Hello")
来源：http://www.sxryk.cn/163iaopfxhm.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163bdmkbozu.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163fmvynfed.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163ojrhshkj.html

"值: \(b)"
来源：http://www.aibaodan.cn/163nfbqymfz.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163znlljzmw.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163lmmkzlbh.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163ulqtbrwn.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163plynvhhd.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163bwucijra.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163hlzmtvad.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163qaujumtf.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ckcliwvc.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163eqrdqanm.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163jqopmeza.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163rcmemzjs.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163uwbgnszd.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163dzwahxph.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163zbmiziqv.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163joapwunf.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163eufdquyq.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163yxrnpglz.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163xncgibel.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163mxtetxnc.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163jxavagtn.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163szjgthgt.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163weygjdgf.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163uyvykgca.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163xbakmvrl.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163vqfclfdq.html

print("Hello")
来源：http://www.xuanzx.com/163sbgumcli.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163skmewjrs.html

local a = 1
来源：http://www.xuanzx.com/163iuheyhgf.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163lzbqiyse.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163upxrodtg.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163vwedlqlr.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163fuyhddtq.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163ldfqxdse.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163sujttjbg.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163mykmlrwx.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163dtkwepbr.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163krqoqyyh.html

"a" .. "b"
来源：http://www.aibaodan.cn/163ehwvicqd.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163xodyyojl.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163lajekzyl.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163rgrboxcw.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163anhpgdly.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163wqqaohqt.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163dscsrkmx.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163oicuvurb.html

print "Hello\n";
来源：http://www.aibaodan.cn/163ugnujdhk.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163gxowupob.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163jhvzungo.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163erylzgpl.html

"值: $a"
来源：http://www.xuanzx.com/163vvbioofv.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163qyccbdvd.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163smgmouxv.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163evafltag.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163zqferkqc.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163vzdgppmt.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163imucjhyv.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163awihwllp.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163mxcuamkk.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163ubevfpsz.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163tijxgjqe.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163wifzqpaa.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163dbugezda.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163axvselum.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163omlhoevq.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163cgdtbcet.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163xgttcrip.html

println("Hello")
来源：http://www.xuanzx.com/163qfignnjq.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163nxdxmdhv.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163wfwfjefc.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163xarhvqdp.html

s"值: $b"
来源：http://www.sxryk.cn/163ppekspct.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163ixjqcdol.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163rmhikgbh.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163pmmnhijg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163siirrwuf.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ndhwwrbq.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163mhnfetmm.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163wplcsosa.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163cltfhlas.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163epedlsnv.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163kjgohlvm.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163rbqnrvgy.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163ogtawkrq.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163tfeehlat.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163byjuvrxq.html

================================================================================
来源：http://www.xuanzx.com/163bebyqkta.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163sxmcejiu.html

================================================================================
来源：http://www.aibaodan.cn/163gfvdyfdc.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163sifolbsn.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163trjvqqbk.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163ntnqnpso.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163johnzgmv.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163ljspywps.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163nbspkrfq.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163rnhaanor.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163svcjhgxq.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163gcnloxjh.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163znqvbnjv.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163lgyfcvrn.html

{**a, **b}
来源：http://www.aibaodan.cn/163gwwukmwr.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163apngwprt.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163upwwrkok.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163yemtszyr.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163tvahipfa.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163rtfjnaia.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163ngeagszk.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163vzxzwvkw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163ylwuswni.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163fgpijjlc.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163ygkbdtpd.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163lrblctae.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163agqytdka.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163muimyjyf.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163csyaoyzp.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163wgtymbjn.html

defaultdict(list)
来源：http://www.xuanzx.com/163jshouvqd.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163jualksts.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163oznsqdcz.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163yknacmkh.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163tluatrzb.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163ddkljzpi.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163aourmnyt.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163piuzykby.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163imdwstlc.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163fcdyvktc.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163pjhqcycl.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163oudyjmnd.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163oufkzjik.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163slzqtdhy.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163mrcdakhm.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163czwcrfos.html

list(zip(*m))
来源：http://www.aibaodan.cn/163tkaqnfgw.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163igkiqvre.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163femvbbui.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163migpwayr.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163ciffmtan.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163wbnyglof.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163pjpjcong.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163kiolkhlh.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163rsisgkps.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163zqkytcrj.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163onvobdzf.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163ydiobnkn.html

UserId = int
来源：http://www.sxryk.cn/163dsuedgwd.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163immgohik.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163jsyptdmo.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163elcecedk.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163enfuxzra.html

[U31] Py：单测
来源：http://www.sxryk.cn/163wybiiqxv.html

python -m pytest -q
来源：http://www.aibaodan.cn/163mnnqctuk.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163rpjjqwos.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163odyzyzod.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163auxbxpro.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163nxqujnfg.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163awzcchje.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163jdccnocs.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163fvslctue.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163nkjlasdn.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163jxtgernt.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163tskerfsb.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163iuqwmwax.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163nyliidog.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163hjzjttgg.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163zhnwrnos.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163gncrvgon.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163rfmppspa.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163jhqfoyap.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163adyeksqh.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163wwbenucm.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163iwbmtfak.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163cbbgnlfk.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163qlektuzv.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163ospcqftq.html

namespace App\Http;
来源：http://www.xuanzx.com/163zeibwodn.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163edmkigfa.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163qzavxvpj.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163axyvsfps.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163amymxnyh.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163wejlczam.html

?string $name = null
来源：http://www.sxryk.cn/163jzcadobn.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163olqvflgs.html

int|string $id
来源：http://www.sxryk.cn/163xrmmmppo.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163alphhzic.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163qsctyehe.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163kjdknwdz.html

public readonly string $name
来源：http://www.xuanzx.com/163fdybgqnz.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163bqotmaxf.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163hbscilbw.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163abjyehwv.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163funbafmm.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163wfzprfow.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163pqtpjzdx.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163gsgrkagc.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163mieyfxpn.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163lwntauzv.html

$obj?->method()
来源：http://www.xuanzx.com/163zmvukvha.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163mqlajivt.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163fbutcigd.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163eeedclck.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163wumlyzzg.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163bwghgvup.html

"值: {$a}"
来源：http://www.aibaodan.cn/163tvjqcqpd.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163gtdxfuxu.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163axaiekut.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163gjilhnde.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163iicejkiu.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163ctndjcgr.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163vxonaoam.html


<!-- 参考信息 -->