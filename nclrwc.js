外链999!wailian999！

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163qutbdthn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163bgunlwhx.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163kqmmsyfw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163dqwbcswf.html

[S35] C++：map
来源：http://www.xuanzx.com/163baljyobm.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163dkedwrzk.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163gdabpyat.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163lcvupvfq.html

[S37] C++：set
来源：http://www.sxryk.cn/163ffwhtjbq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163xkknypkw.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163yxqangxd.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163tunhkplj.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163oxvuuyns.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163sifoiydn.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163kgzzofxk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163lhsqvyud.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163mcbtxhaa.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163jaolqbzx.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163drqfmszh.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163xhirctns.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163likywqli.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163prufveyc.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163hnbdnlkk.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163xtdcqivu.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163rlehlida.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163qilvrdef.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163flgnurmz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163jgltdpmx.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163zdjnspwo.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163nsworwub.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163eebfxzac.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163dzwaqkmx.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163abssnfuj.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163nraxylif.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163npxlfjmk.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163xqsyxsne.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163aiarjkdu.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163offvhcam.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163rghvbjkm.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163hyfysela.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163djlkolkr.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163toojnrlh.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163dkotmyms.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163gnsvhdwg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163bvrgehba.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163pdbsoukd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163oezpnadh.html

[S56] C++：optional
来源：http://www.sxryk.cn/163khxtpwkq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163smkhxifq.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163trglweji.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163gthjjnos.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163aeapoyog.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163konljyxu.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163jolgpgfc.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163obyvguwc.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163nhprkwut.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163irzvzfwi.html

================================================================================
来源：http://www.xuanzx.com/163lhwjssbm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ohnlxahs.html

================================================================================
来源：http://www.sxryk.cn/163zgkvgjqc.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163tihumduj.html

println("Hello")
来源：http://www.xuanzx.com/163cnvcnlhj.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163idkfygrg.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163bnsioxkf.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163kcurxatq.html

"值: $b"
来源：http://www.aibaodan.cn/163ppjfkkif.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163bidvnjkw.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163zjgfnueu.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163nmyhjkkh.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ocjhtlhz.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163liizcnvn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163ixhyracm.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163thehynkp.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163cslpmmuu.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163bbnjhuia.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163lnfwntip.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163kfnwxoeo.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163wwyymtug.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163byssgvfq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163gaqrtxms.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163qabxbqfw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163fcykcysi.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163mkdysskn.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163kldnpydm.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163bnxltwff.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163lnjwcdpd.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163cvpwnzfi.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163appycrpz.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163hqjqsxth.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163cspsczcz.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163fjcumjic.html

print("Hello")
来源：http://www.xuanzx.com/163nbwozvwu.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163piijfcxg.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163wgxpsdvu.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163lewrbvgf.html

"值: \(b)"
来源：http://www.aibaodan.cn/163afutpqpy.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163nnwmjpsh.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163pzvyqvfk.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163fzfjnibz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163fvdabkbr.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163bdjacepx.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163xjishxzy.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163vqtapdxp.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163lwdpxgfg.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163iutdxbud.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163azymeelt.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163kmvbdjed.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163iobwfyhq.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163uilzavpy.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163vpjnezof.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163rihsjzjt.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163gnuagylw.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163gwwddtrn.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163cxkjnrhj.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163azruqkzh.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163mdstlcac.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163fcglwtdf.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163jzlyecek.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163kosbrezs.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163jaspltoi.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163jeugubfe.html

print("Hello")
来源：http://www.aibaodan.cn/163qfldkvfz.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163pdvyeasn.html

local a = 1
来源：http://www.sxryk.cn/163hizwryqj.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163qddneavn.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163fxplbbtw.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163xtybxmsb.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163atyzzhpo.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163ozhqgnwe.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163puhisesl.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163mbczgvag.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163mnzdqldq.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163zukjvxxp.html

"a" .. "b"
来源：http://www.aibaodan.cn/163hevakyyd.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163blhgtvyz.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163fsjtxjed.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163wgtigrec.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163mmlqkcyn.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163ckflbtrc.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163fbtgyqmd.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163dwvegtor.html

print "Hello\n";
来源：http://www.xuanzx.com/163arjlbxgj.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163sbvxqifj.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163vteydfol.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163awmhikzu.html

"值: $a"
来源：http://www.aibaodan.cn/163qrycnkyh.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163ppncjyei.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163jgaqjpaz.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163aitxiquf.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ejfaynsx.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163zyyfdgwl.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163gdmwcdca.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163bajaggkw.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163pludeivd.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ritkerjj.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163lrbvoezu.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163ydycktwm.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163elppvvjk.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163twwzxtii.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163mptwetkt.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163wwofhuei.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163cvzbhaju.html

println("Hello")
来源：http://www.sxryk.cn/163obmtsynk.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163hhbzjcub.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163fkcxifez.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163qrpcanra.html

s"值: $b"
来源：http://www.aibaodan.cn/163hixnzdpp.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163cgmncypk.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163yofqgkhs.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163asgmfbgn.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163bytcardw.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163umwcwvby.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163jyjgsogw.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163tzuitufk.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163kmaiqdsg.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163nvuktnpt.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163uqrktaky.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163hjetdcqd.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163wqwnelbt.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163nogfutil.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163voemgodo.html

================================================================================
来源：http://www.xuanzx.com/163mgfhrwld.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163gketynix.html

================================================================================
来源：http://www.aibaodan.cn/163pbmrmksa.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ajgygtcb.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163ekjtlggk.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163cbmlfkaz.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163spbxgdbi.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163kizaecxh.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163vikhlxdu.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163gljxpeel.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163yeyefkum.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163qayjoycr.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163kyatytup.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163rqyzbgpj.html

{**a, **b}
来源：http://www.aibaodan.cn/163spviapih.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163lwhpmnbf.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163mggvrbnn.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163vhtkvbqw.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163dpciponk.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163hdmgrhde.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163swpywqkh.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163dclzfrmz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163kpzhsydz.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163ubuogjdg.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163jjfsnjri.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163zamojrfy.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163sjehxxpx.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ucprurdr.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163aueoipai.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163ctmworwo.html

defaultdict(list)
来源：http://www.sxryk.cn/163fomiiwrj.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163exzhpyby.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163dyxkdkkn.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163hiofdskm.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ltexpxvs.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163ntjqonyz.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163slkzlmbg.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163wibfkwcs.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163sqnfbuen.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163nyrrpatc.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163zdnnwjep.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163uoclhtqd.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163dzvracvm.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163lslshqrk.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163brvjgmmr.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163orhvjdid.html

list(zip(*m))
来源：http://www.sxryk.cn/163wzdmlgve.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163bvgfwxqa.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163ciklvtqq.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163arhpbsdm.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163remxqqjf.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163cnobwveo.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163vydedost.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163wbmjawrj.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163jndkwzoo.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163bxctuahw.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163utcvgork.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163qhcydlem.html

UserId = int
来源：http://www.sxryk.cn/163ufgbafyl.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163tgqrswhj.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163iqhijqrr.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163brkrbrpr.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163fxyldnpm.html

[U31] Py：单测
来源：http://www.xuanzx.com/163boyozqwy.html

python -m pytest -q
来源：http://www.xuanzx.com/163uskarvhs.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163qtedoqhj.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163taakqltx.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163ctepdixz.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163rsaqvemm.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163prcxreql.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163epcbesmn.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163lqrmykao.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163ddpdxddo.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163erbpcrfk.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163qcdnvwgs.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163mwftubpk.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163bxzwssrb.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163tsoehrqt.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163ltkdukzw.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163rnlpovtz.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163ggogvdri.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163nbpvllws.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163vqxpftdb.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163gdvwlurb.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163mpdfgvpv.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163udoiblnx.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163kqgbpsjb.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163qblscgim.html

namespace App\Http;
来源：http://www.sxryk.cn/163ewfkksyj.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163axxnlhno.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163ppzsflbu.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163hozcdqro.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163bktdgjxx.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163ixqavtyc.html

?string $name = null
来源：http://www.aibaodan.cn/163gzeyglth.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163prfqowmu.html

int|string $id
来源：http://www.aibaodan.cn/163rlelyquq.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163jiqzycnw.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163fmokdexh.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163onatlpdc.html

public readonly string $name
来源：http://www.sxryk.cn/163wxbhpisq.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163awllenuv.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163gzhlnota.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163mfxjupzb.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163lkarmokp.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163iiakepfd.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163nvtrgdpo.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163raklysnx.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163phrdhclo.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163cduzqtgu.html

$obj?->method()
来源：http://www.sxryk.cn/163ojxlpkrz.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163tzrzimnk.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163klubxtqg.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163rgeosxtw.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163hlizuwqv.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163mdtwezsw.html

"值: {$a}"
来源：http://www.xuanzx.com/163yejybmcp.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163oixxfqqa.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163yxsrwerc.html


<!-- 参考信息 -->