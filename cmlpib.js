外链999!wailian999！

#ifndef X_H
来源：http://www.aibaodan.cn/163ghcecnpq.html

#define X_H
来源：http://www.aibaodan.cn/163dqcghsjx.html

#endif
来源：http://www.sxryk.cn/163kxcdxezf.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163prxvfpou.html

#include <iostream>
来源：http://www.sxryk.cn/163qdalbhur.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163mkvkndgn.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163iyxzrblv.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163kbxuccla.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163mcxmqjrs.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163nzwyvmox.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163xvenmcxd.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163iolubkky.html

[S35] C++：map
来源：http://www.sxryk.cn/163lhlkpkut.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163arjrvmrf.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163etariaeb.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163wljeldcp.html

[S37] C++：set
来源：http://www.xuanzx.com/163vdtyqzhi.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163qjpukakg.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163uydaifgf.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163scbxdjgq.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ozdzcksf.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163kvuygyvm.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163aiclpuoq.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163rxzrxmdo.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163vbshdmxc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163uimcjlzi.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163cegvwzap.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163cpymnsjx.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163rbmktslv.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163bnloefru.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163jajwaybq.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163srwhfmrv.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163bjmbtorb.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163gfuzbprm.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163lhnzdubs.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163kvngpuph.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163uygwnlgx.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163hynlijrr.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163phzkgxdn.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163prnjalvf.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163cvteybwo.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163rehivihk.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163tsocqkee.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ajuwvmdm.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163tvdvqmot.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163vtlebpuw.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163lxpgfstf.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163wmvdqwzy.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163dlzuxzcb.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163gjrpggxx.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163yxjgqpmh.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163betlmmbx.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163aptwohlm.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163rpthhyzw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ffcamdmw.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163kslebliy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ucmvaryf.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163gxhzhskb.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163ynedpkdi.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163dqatxxud.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163fsrxbbow.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163fzauczpp.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163uffermcd.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163uuddtbfk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163koaldlnl.html

================================================================================
来源：http://www.xuanzx.com/163zhogcdfi.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163lnypyhfq.html

================================================================================
来源：http://www.aibaodan.cn/163mlxyvcju.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163aezxunrp.html

println("Hello")
来源：http://www.aibaodan.cn/163ipyvrffb.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163yqyspwwe.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163zblfrozz.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163rzfyfzwv.html

"值: $b"
来源：http://www.xuanzx.com/163xtduuhuh.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163pobldvdd.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163yaqbhwku.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163xfcjmbkc.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163xyzguuva.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163ntbgqjqb.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163fremhfhw.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163dahvciga.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163zdjevrwb.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163bzmzuvvx.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163xvxymdvf.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163pijbjopz.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163setwyvuf.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163ngffpoxq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163dwhilrky.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163amoalbmp.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163xyhoarqh.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163ofogvffr.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163vtjjunoz.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163sshpqbpv.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163rvxgqxxw.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163pwkhkogu.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163betzkfxr.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163uihbidii.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163ajyjwopq.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163fhqgqtxl.html

print("Hello")
来源：http://www.aibaodan.cn/163cebtmokz.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163dgdvjhzl.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163olqxcxdf.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163mtjckdzq.html

"值: \(b)"
来源：http://www.sxryk.cn/163wrjqhroy.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163hjzhrqns.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163ogttdrik.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163pegskbhf.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163rfqholiy.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163wucliouj.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163kcqupygj.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163yimgbkjb.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163gbjqhfny.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163fvzsabpu.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163qcmysykw.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163wfcvwjfg.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163wmeuprlp.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163wdcehebw.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163hqlmykpr.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163eppskoia.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163vbifbukf.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163uexpkaga.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163guxfcrjh.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163vdkzrdbt.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163qroobulo.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163lihauxen.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163tgucxdac.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163rrnhmqcm.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163khclimwi.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163frjhdbtw.html

print("Hello")
来源：http://www.aibaodan.cn/163zrbvzkyw.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163arbzjtim.html

local a = 1
来源：http://www.xuanzx.com/163fyurozcg.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163tzfhbdae.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163cbotnrba.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163uizfdrjp.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163cuuxcymg.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163woqtfjep.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163swismgsn.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163wgswdamf.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163gkdwpvkq.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163bxozfqdq.html

"a" .. "b"
来源：http://www.aibaodan.cn/163hjnxufdn.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163mncktowt.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163ixxwigfc.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163xlqkhjph.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163xpfzrqia.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163fpjwqcqy.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163qzyzmbbn.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163mroazwgn.html

print "Hello\n";
来源：http://www.xuanzx.com/163uzkpzdsn.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163pypkolmh.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163ikuszjxv.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163phnsqiom.html

"值: $a"
来源：http://www.aibaodan.cn/163ljfyhqxi.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163etzyheug.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163gpqqipif.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163chwmuucc.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163evyioplf.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163smkzunyj.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ghaneclf.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163sjvgdduw.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163bodkqvgh.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163pnsmkugi.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163mtwuvacf.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163qjstpqbi.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163xlvuvqrx.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163znarhfzd.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163zmtipirn.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163agiljces.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163wamearjk.html

println("Hello")
来源：http://www.sxryk.cn/163slqkmehm.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163gsllvcpr.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163dppdtoib.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163qojvmrcy.html

s"值: $b"
来源：http://www.xuanzx.com/163admsxjps.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163khfplyfb.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163rpjzxgye.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163ydiqjvsb.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163vgfxqzjp.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163qifbuxnu.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163dgqvggmh.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163emuaykdm.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163deanzybw.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163hdypynge.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163lizbqbii.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163qgonigst.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163qotqmtoe.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163djclhaiy.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163tabykfgp.html

================================================================================
来源：http://www.xuanzx.com/163ovmlbcik.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163aqjmoaqb.html

================================================================================
来源：http://www.sxryk.cn/163yaiehbst.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163rhagbnha.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163yglqrmop.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163sajuvufg.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163uefwurbs.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163kkpspfwz.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163wkrznhig.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163lpebmmvj.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163ouaiosnb.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163vuqxmzaq.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qihzvkxi.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163tvoyxprk.html

{**a, **b}
来源：http://www.aibaodan.cn/163yebgvqmb.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163cxfulnjm.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163chlpoaxy.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163htmpzlqo.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163awouwyvr.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163xutrrreg.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163svahzggb.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163nybgfcsn.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163ygwxwsul.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163itkjrvdn.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163reffmjes.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163hvhjgodb.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163vdftzasx.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163ufuyqogw.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163mlzajeqr.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163ntwxxyez.html

defaultdict(list)
来源：http://www.aibaodan.cn/163rrihbwmp.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163gapwiiun.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163hrxtdino.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163uaffirhw.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163pwshkbyu.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163xuvernhz.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163xqdqowkd.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163frrmzbjh.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163pewjnirt.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163kzfwhpss.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163fwvdjynf.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163pelentlc.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163kdoeefek.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163vpfxoiur.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163rielxcoh.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163cbqfwpvw.html

list(zip(*m))
来源：http://www.aibaodan.cn/163vazuaazo.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163eguowogb.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163lyezuxbi.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163ooqzzlua.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163itjbbkcz.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163mhyuceuq.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163kpcixkhu.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163qlmogmus.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163zvhbcfra.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163drlnsrlt.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163mjfvhudj.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163yvvcqpdu.html

UserId = int
来源：http://www.xuanzx.com/163dwrqfeih.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163xknnhlcd.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163bxnggmuv.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163cnfveiqc.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163xuvovgwd.html

[U31] Py：单测
来源：http://www.xuanzx.com/163iejdfpmw.html

python -m pytest -q
来源：http://www.aibaodan.cn/163kyjdftko.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163ksnmugwv.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163ddotxoku.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163jjtalgmj.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163lboxpjar.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163lyosvrsn.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163mxvsqaxz.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163zpgmmxeh.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163fzmgtxnh.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163vdnowovp.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163slxfdxbd.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163vgrhyooa.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163gtouvrrh.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163ttbdrfas.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163fifjvxvp.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163cznvlbgt.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163wtwobkwv.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163xnxjnidc.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163xrydfpih.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163lniptunu.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163vjrdizst.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163vbkokkpd.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163shpxykye.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163yjrrajzy.html

namespace App\Http;
来源：http://www.aibaodan.cn/163banifomy.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163dvfthqpx.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163hxvaewxj.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163yajyetic.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163qtuafaci.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163mvcvafmb.html

?string $name = null
来源：http://www.aibaodan.cn/163rhruyiib.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163wmrwataw.html

int|string $id
来源：http://www.aibaodan.cn/163pshmnrkb.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163efoyxluh.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163jopjebnm.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163peovzgtd.html

public readonly string $name
来源：http://www.sxryk.cn/163kspkilxm.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163hlcmdbfy.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163zxtclvpa.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163zwqdcxdd.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163dlazqftm.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163rdvtbbhu.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163jnlklqsj.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163sxhyvhcv.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163hisdqogt.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163heuzbnxg.html

$obj?->method()
来源：http://www.sxryk.cn/163tggclomt.html


<!-- 参考信息 -->