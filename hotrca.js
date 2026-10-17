外链999!wailian999！

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163mxyfawpr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ohgwfgey.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163nqalzwen.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163ndyfjocd.html

[S35] C++：map
来源：http://www.xuanzx.com/163jewmswsb.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163wliqyyia.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163dsqouxvp.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163tlncwapj.html

[S37] C++：set
来源：http://www.sxryk.cn/163zgdhqzez.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163nzewbnyc.html

[S38] C++：排序
来源：http://www.sxryk.cn/163cucikvrt.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163niifzixv.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163brtijibn.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163nkoqvcsa.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163zkcdirnc.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163fnjsglze.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163uolbdkui.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163obijmnpn.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163clrbqrav.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163maydsrem.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163jsfxxldy.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163yzkkqbfh.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163xjstwqay.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163kjzqjdql.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163lmpyisey.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163hnkiarfs.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163vdimwezn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163aokyvkbl.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163ybrytyai.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163gwrpewcq.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163kztvwhje.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163pazfzkay.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163rsfbmupw.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163pnarevyt.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163pgemnlkq.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163rbhxrgvq.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163gofvlema.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163qzejucks.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163qgybewiz.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163lccsvblt.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163cjbnpiqq.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163fdognpdt.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163jfhakpiw.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163bgwufsuw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163vhfvxnhe.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163mlsocenz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163sqzlrafm.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163uecyanxx.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163qggqslgf.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163lymstzog.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163syjzukgq.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ljymyeoh.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163spukxnla.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163gprunldl.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163jrwnpxqe.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163crcinojn.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163qblyfohc.html

================================================================================
来源：http://www.sxryk.cn/163romxyxyb.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163drihrypx.html

================================================================================
来源：http://www.sxryk.cn/163ivtxnqhb.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163tjrpssre.html

println("Hello")
来源：http://www.sxryk.cn/163vzvykyaa.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163tjgyajug.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163nrzwdobm.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163ycfiobaj.html

"值: $b"
来源：http://www.aibaodan.cn/163sisrnymy.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163rdnljisx.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163rcstgkak.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163ggegpvue.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ryhymygr.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163zgdhpogq.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163nhezoquq.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163rtmmerql.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163whckfupv.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163ngablsaz.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163qnwdempr.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ryppdhnz.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163wdihiqte.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163osrczwxh.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163kojiikvq.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163xhprvwwu.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163rfpykujb.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163hmsyxhvi.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163prtjhpdp.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163lsceiduy.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163nrsoknae.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163mpqegkdd.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163smokpbax.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163apccislq.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163cziwhray.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163rtltnuil.html

print("Hello")
来源：http://www.xuanzx.com/163onrpklig.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163lofbrson.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163gqxxrtbk.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163yeandxne.html

"值: \(b)"
来源：http://www.aibaodan.cn/163kfswsuhi.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163iakdvsea.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163rxddefks.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163fdeltkgn.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163pihhxxfp.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163npgzzeft.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163lmfyixdh.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163dxxwhyxs.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163pfnplkwp.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163wddaturs.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163gylklhcv.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163svllawoc.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163xzpdkvhw.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163nohsopqa.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163skgxtwge.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163hidiwywt.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163oefwzvbr.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163giwrfowr.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ntyoxxup.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163jjooigos.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163jpgmvqzj.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163dabkurbn.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163inmfpdan.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163ujiwkowk.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163whlpnsjc.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163cjpvbxux.html

print("Hello")
来源：http://www.xuanzx.com/163dmelwafs.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163yyavcwmd.html

local a = 1
来源：http://www.sxryk.cn/163nvkovgkp.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163slwcpgue.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163getdbntn.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163soflcwxe.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163ixtwlwqa.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163culmrwix.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163vgxlinvy.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163uqnsurck.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163vmafmimm.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163rrdgeaeo.html

"a" .. "b"
来源：http://www.sxryk.cn/163semsnhqx.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163njirbqkh.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163ftijziut.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163xcxjedbj.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163ciokkyhq.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163cdtdoqlw.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163gkmesbvl.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163owskffzo.html

print "Hello\n";
来源：http://www.sxryk.cn/163vkrgpuqx.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163nksansmz.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163htgtwpxx.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163baoxwfpe.html

"值: $a"
来源：http://www.aibaodan.cn/163cfynoftj.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163jwvabksi.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163qusmqwph.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163frfjocwv.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163glhhpetr.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163cndeluwt.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163bhcfovdw.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163bdwqnugz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163zlanymfj.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163xwbxlymu.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163oxizhhvd.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163kfepbers.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163kzebbryx.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163vfqdzmio.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163pydkfdqv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163dlcnlsfb.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163edkydkku.html

println("Hello")
来源：http://www.xuanzx.com/163qqzkvnqs.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163ucidcxoa.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163imaiaatr.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163irvfbdgd.html

s"值: $b"
来源：http://www.sxryk.cn/163kcldvvnr.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163rfocqccn.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163gxrmpqpl.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163eczpseoj.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163oyfdwohh.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163tfnwjktk.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163jbiypbku.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163kaoouhlg.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163gipigtqu.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163qgvsobts.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163ffbesgen.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163djybpecx.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163fkujgjis.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163ucdvlfmt.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163anxhgwwh.html

================================================================================
来源：http://www.sxryk.cn/163jjgxklzx.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163czzpmlue.html

================================================================================
来源：http://www.xuanzx.com/163whvypkul.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163fcoponod.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163yqranius.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163hdezwssh.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163atzxgwbh.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163mcbripwl.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163yggunnkm.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163fdtoneng.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163smxugoar.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163stljrdxv.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163qukrdzno.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163teskasav.html

{**a, **b}
来源：http://www.xuanzx.com/163mowlwwco.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163svycbdox.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163kjqvqknn.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163jtjsnqid.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163rfzqpipu.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163kqrckehy.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163brralmsy.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163smpjbpaw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163rtedrjrr.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163luotmois.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163foljkqfg.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163pwsinezh.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163rnmdjsoj.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163wstdccyl.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163wszulstw.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163qudsaovq.html

defaultdict(list)
来源：http://www.sxryk.cn/163qxjizbbz.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163vevsavdf.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163lqhrmfle.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163lqrwsfem.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163bsigrtzu.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163vxroncvj.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163skpvmrfq.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163gucozxdc.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163cbgabspv.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163wphsgrqh.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163nyscjrmd.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163ethjgxor.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163vzgcatuw.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163mxwvoudq.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163uiorrxxy.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163pzpqklza.html

list(zip(*m))
来源：http://www.xuanzx.com/163sxbxgcbo.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163qkyvszju.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163jjohgdch.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163jkocpncq.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163pieimhkz.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163vlheaemg.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163olpqayfi.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163xfpltsbr.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163zzzavyjn.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163dfcgxmct.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163zoswneyu.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163wjaxzlqg.html

UserId = int
来源：http://www.xuanzx.com/163dfvekgwf.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163cyjukwwk.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163pezyudfq.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163khfvsqlk.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163nesnebel.html

[U31] Py：单测
来源：http://www.xuanzx.com/163boqfewmn.html

python -m pytest -q
来源：http://www.aibaodan.cn/163dxkoevns.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163qcewjvfz.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163cpptwwga.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163eqrnzset.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163nmwnsfgm.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163imicxgfn.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163ytwqoppl.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163ervyyinx.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163nsxtzikl.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163ezxxrtqi.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163flmotegz.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163ddhyjzct.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163kcfjshhr.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163xvfqtwcp.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163oscnbrjt.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163fsvgmfil.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163hwxetnmw.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163gzjjpakh.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163nbgcsflo.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163huyctghk.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163whhmsiws.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163ztgrowpe.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163xfkuxawc.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163ugyfctam.html

namespace App\Http;
来源：http://www.aibaodan.cn/163ohvnapma.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163hegbecnu.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163ahrqscqo.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163ymugrzfd.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163gndiaruc.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163amynlzbp.html

?string $name = null
来源：http://www.xuanzx.com/163mxgobnvj.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163eretilmt.html

int|string $id
来源：http://www.sxryk.cn/163axvyjyij.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163nrhmivec.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163ucjuzhju.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163yuxnlono.html

public readonly string $name
来源：http://www.aibaodan.cn/163bazhjmhi.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163jvmpsjjo.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163rqxfaejn.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163nefvykox.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163hugjnjka.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163hciivqpr.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163mtsdjjsm.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163zrbzsitk.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163rhwjtcnf.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163kgyckaos.html

$obj?->method()
来源：http://www.xuanzx.com/163idmzknmy.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163samtlldx.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163mluydimi.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163kgxtawbd.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163rproemsy.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163dthgtgdp.html

"值: {$a}"
来源：http://www.xuanzx.com/163zgobpoot.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163lfmaqwug.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163xhvacpxi.html


<!-- 参考信息 -->