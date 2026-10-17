外链999!wailian999！

#include <iostream>
来源：http://www.sxryk.cn/163xcgwblla.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163kdpwsjkn.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163wfigoxwi.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163lssoecui.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163dsjkiszu.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163piwtjvtx.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163tfwanlho.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163eeodzwzy.html

[S35] C++：map
来源：http://www.xuanzx.com/163lorgocgu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163rzdedfts.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163rxbclthf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163dllaugdt.html

[S37] C++：set
来源：http://www.aibaodan.cn/163ldgwjevn.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163gitqtjwl.html

[S38] C++：排序
来源：http://www.xuanzx.com/163tpeqnfaq.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163pxrehkhe.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163anxzwplj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163yhiwjpke.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163mjizzmgi.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163iciairka.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163ytwhbvhb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163obvtoojl.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163cwsxchej.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163eesopigc.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163hgczewka.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163zhrjwntb.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163wtppqijw.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ttxgodum.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163uqvpmmuj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163yecgmded.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163evoklgir.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163lhswradl.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163iwhpliqi.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163zgncspiz.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163kxyqhreg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163qwqasire.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163fqukdauc.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163lroukrow.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163lsojsjlm.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163udzzwdtn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163owihirph.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163drawvndg.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163isoqosre.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163vwhuxpbm.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163nwmkoqjg.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163jkfcenxc.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163tjpmfngx.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163dgwwtozy.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163sinzxxxu.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163wpejwoyr.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163imvhhddr.html

[S56] C++：optional
来源：http://www.xuanzx.com/163ilwnjaeq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163bfpvehni.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163esoxhcav.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163wvtqdnqt.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163pqwrogul.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163dgenbhwg.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163ixzpqurx.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163gkqohjhl.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163wsivxxmx.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163mfvxobkq.html

================================================================================
来源：http://www.sxryk.cn/163rmnszbzd.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163tsqpcpuq.html

================================================================================
来源：http://www.xuanzx.com/163rokfqsoa.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163rjzcxdzn.html

println("Hello")
来源：http://www.aibaodan.cn/163kgyyyzku.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163maarebzm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163fbelasto.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163mgrztsnb.html

"值: $b"
来源：http://www.xuanzx.com/163xtotxjza.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163rrbguxjp.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ohrxtnyy.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163ivahllaf.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163uicxiaoz.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163zrjwkwbx.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163gqospvpc.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163sfitagnz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163vyumnhdk.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163eeeiurvt.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163peklumrb.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163suiekyqg.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163hwyxtpee.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ohmnimps.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ilhgpccs.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163ijqfejpn.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163jlgyomle.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163tcburjdg.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163niatkuta.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163dqqjhstq.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163poammwoh.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163cjsrforn.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163oyiropay.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163hhqbqcto.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163iylmhogc.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163xmqvadxh.html

print("Hello")
来源：http://www.sxryk.cn/163nrrlbwcs.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163plgyfiwz.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163kydtsczi.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163webcbxck.html

"值: \(b)"
来源：http://www.aibaodan.cn/163nxyzssth.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163xobtpmgl.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163ncgamoew.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163xiqqtlpd.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163rcpjftwo.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163jjltjazv.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163sbeberxm.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163apisawnc.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163pdhzenps.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163vgnkmrzz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163tgresvkh.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163oeuwikde.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163iaskxmki.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163egdqacyu.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163hapzubzo.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163mqxpxngt.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163aimvgvaa.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163kqvomlag.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163thiqyjxj.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163wgcbmose.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163wjmmqedv.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163lrwlysqv.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163kiwtuque.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163nzlugohk.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163hjneshyo.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163waikiysw.html

print("Hello")
来源：http://www.sxryk.cn/163oahgqufb.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163pnsuzckq.html

local a = 1
来源：http://www.xuanzx.com/163raqjapcr.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163xkldhtxb.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ueaxtcef.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163iottjbke.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163bsgzqljg.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163ogzjjqnh.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163bhzprqxx.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163gghzsbhq.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163enqmcxuh.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163pmbxfcmq.html

"a" .. "b"
来源：http://www.aibaodan.cn/163gtyagsyd.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163syfxlxpz.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163kpinhvan.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163wfclatim.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163pamatgrg.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163qejrtvti.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163zptkbfgg.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163yopnlpae.html

print "Hello\n";
来源：http://www.xuanzx.com/163rqoddojw.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163bcpkgeoo.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163bsmqyhdk.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163iaeuoike.html

"值: $a"
来源：http://www.xuanzx.com/163mfwpmala.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163uztsspix.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163ansuhtnk.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163rzglxdgd.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163ctwejpwn.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163bcplgcar.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163zsvztwlu.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163akjidwto.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163gtcsijua.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163bhvbngpc.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163mdioccnd.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163jeqdwkdy.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163yuzprijz.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163hraqexrw.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163llihsodw.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163mpzcuxvb.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163rgdyakom.html

println("Hello")
来源：http://www.sxryk.cn/163aziphcgo.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163zqnyhvax.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163peliaftt.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163dcvfdpnd.html

s"值: $b"
来源：http://www.aibaodan.cn/163oswzazei.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163asymzjyb.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ouayreug.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163mlxnfweo.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163btzlwjdw.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163dbhjcyii.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163jvghjbtr.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163sjaslear.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163lrerkego.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163citunneu.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163nevowzjc.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163cnmbbcll.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163mpdcgser.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163wiplpina.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163pnffgbeo.html

================================================================================
来源：http://www.aibaodan.cn/163vzineona.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163uiqtblyh.html

================================================================================
来源：http://www.sxryk.cn/163ulhlvqvc.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163gmiyuwkf.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163zntktqxa.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163yxbdfjcc.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163bwsqofsi.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163litrstww.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163uitgufjb.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163wjamttaf.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163txfzqlgc.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163avqlmzvh.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163yvzmjbqf.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163dmsczich.html

{**a, **b}
来源：http://www.xuanzx.com/163hrozvtmh.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163vadzlbkm.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163muiflxmc.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163ahypdoqz.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163dftheeet.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163szukxbif.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163haznhncg.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163aoxowqhj.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163gznpwlbs.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163uqajvgsd.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163ymxrpglw.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163ubletpwh.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163rnocnnay.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163tumpzcei.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163nezixqid.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163lrltbhmc.html

defaultdict(list)
来源：http://www.xuanzx.com/163riturbuu.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163rsjvqhnu.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163mvnwzynm.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163doodqzle.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163fovbnpqb.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163byseyxgo.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163ikqzkfty.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163iaavktmh.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163ukqkquei.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163poyaccre.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163cjngxvlc.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163qciilsir.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163tpkzedmp.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163troetuwl.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163zamimjkd.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163cbjphoaf.html

list(zip(*m))
来源：http://www.aibaodan.cn/163wkpnwxlp.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163wxcliahi.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163pjittmpm.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163oszavodg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163jlwoqppe.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163kwcgeuul.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163aykgbzma.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163kbgwqltf.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163uszypsfi.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163odjljtqh.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163wisbgecz.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163wipayrqq.html

UserId = int
来源：http://www.xuanzx.com/163vlbkzjal.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163wkfqrdwr.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163vvrlazgf.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163lrtggjex.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163yfufiyov.html

[U31] Py：单测
来源：http://www.xuanzx.com/163jnhqeweo.html

python -m pytest -q
来源：http://www.xuanzx.com/163pzjperqk.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163smeuaury.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163avfvkzix.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163pcxregxj.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163txveiqmo.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163ueowptjx.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163dzqoltxz.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163kjggajaf.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163uvkdbyml.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163ldhajayj.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163yadbrndo.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163wusqjvms.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163nqpjmyqt.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163rrczkekc.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163kmodjwbg.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163yicufado.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163zzeallsn.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163rjisprwc.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163iqymdjhd.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163jgalsnov.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163hzslvfmj.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163ztkylkmw.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163fmuujpoq.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163oowxksxy.html

namespace App\Http;
来源：http://www.xuanzx.com/163vjxgtzwt.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163gpauzqnp.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163nkejrnay.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163nfpibggk.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163swvvbqkc.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163ckxgtxpw.html

?string $name = null
来源：http://www.sxryk.cn/163lrgfnrsv.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163uxtcxzgi.html

int|string $id
来源：http://www.xuanzx.com/163npqujfad.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163zlmniykz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163eyesnrgt.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163zbewvcjj.html

public readonly string $name
来源：http://www.sxryk.cn/163avabsbza.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163uguvdolu.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163bgdonmbm.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163ysoxgdvu.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163nlbmkqdv.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163wfltvihv.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163ikkohqlh.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163wdptxvbi.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163upajzjzp.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163suaohbwh.html

$obj?->method()
来源：http://www.sxryk.cn/163iwuklkxc.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163rizlhjey.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163upflljbu.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163upcbasow.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163jlignxoq.html


<!-- 参考信息 -->