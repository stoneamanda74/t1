外链999!wailian999！

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163lxnsjqub.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163wquvbxmt.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163qlhyljcr.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163nnshobkb.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163lnisgpfn.html

[S23] C：随机数
来源：http://www.sxryk.cn/163kotbylau.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163vqwdqajp.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163xdnmqftu.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163coqsloyd.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163grqvtwsz.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163eoqeokbi.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163yxyflfaz.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163llctckrh.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163qoqbiqqu.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163kicfozuc.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163lrsgfcic.html

static int counter = 0;
来源：http://www.aibaodan.cn/163mrwojhxk.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163tehsyeea.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163kysvdmpr.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163mdqowbug.html

#ifndef X_H
来源：http://www.sxryk.cn/163vktkaaww.html

#define X_H
来源：http://www.sxryk.cn/163nozqeukr.html

#endif
来源：http://www.aibaodan.cn/163vnwiekaf.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163dujarjhy.html

#include <iostream>
来源：http://www.xuanzx.com/163llebecru.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163bnniokwq.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163xtpauwqy.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163jotnemef.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163ozutlkjg.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163ljucejei.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163orxjoeyo.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163ejsexlcc.html

[S35] C++：map
来源：http://www.sxryk.cn/163iedjpjqy.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163gzmlqzia.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163uojwscvy.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163qfdmnidf.html

[S37] C++：set
来源：http://www.aibaodan.cn/163xclcpiac.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163embngfcv.html

[S38] C++：排序
来源：http://www.xuanzx.com/163gmhrowuj.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163enouifcp.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163omqwqbqh.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163rpqkgzlb.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163gtjzpsvz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163jgoymavl.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163bragqiic.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163vevtypsm.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163ckrlzdyh.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163nilodgrh.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163mdrutacy.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163pieezyge.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163guwmxlto.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163axrwcglx.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163bdcaujqj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163kufnswnn.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163fnnovtiq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163suwkbmhn.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163uztgtgsx.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163lhduumgm.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163qmfymydc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163bcreairt.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163dupqhdyu.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163nhnbciqq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ehxaisjo.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163pmiovksl.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163suircstg.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163vzlpteng.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ajmgrwan.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ghhcpldn.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163bivgtnfe.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163esjblvap.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163mxlbgpak.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163chqmlpdn.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163tbhwhhms.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163rcxknlaz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163ypagvszb.html

[S56] C++：optional
来源：http://www.sxryk.cn/163zdbtrigg.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163xdgpyxqm.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163nknjsbup.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163tekixyyw.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163kdvrbmhw.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163uqcywnlj.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163xeevvnst.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163mkcraehg.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163rqwpgqek.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163mxndzqzx.html

================================================================================
来源：http://www.sxryk.cn/163vfmvbaip.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163msmumbcb.html

================================================================================
来源：http://www.sxryk.cn/163cvfwgezr.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163bxrwstwt.html

println("Hello")
来源：http://www.aibaodan.cn/163bwuxhwfc.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163pvcagxhc.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163hmbenxqp.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163slqskivl.html

"值: $b"
来源：http://www.xuanzx.com/163qbtsfuhs.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163lltrucci.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163bcqkhigq.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163kadrjonj.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163mtdgjrgz.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163trbvlpng.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163nuukxtkq.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ohevecca.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163tnlsoosl.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163xkxdyhgb.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163msmspiyt.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163mddbcoyx.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163pevwpywf.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163lsheeflm.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163zwemebfy.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163ntkeizcd.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163xjsldspq.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163saeizjfx.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163jwgshchb.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ohwtzxif.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163lomtcgdx.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163dxldwwfc.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163bubdkaqg.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163wicnwqdg.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163iyijbwft.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163sbcuples.html

print("Hello")
来源：http://www.sxryk.cn/163infohfhk.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163tzahywkg.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163isqkhyrl.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163pexcbmao.html

"值: \(b)"
来源：http://www.aibaodan.cn/163nnlaoqlu.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163ambfewot.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163fvitoikz.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163byehvbgq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163wenelqkq.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163dkxcmldf.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163qxkydadm.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163eiiiqadl.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163rnnvyrok.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163fifxsaxg.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163pvzcxver.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163qkclmowx.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163wprzletg.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163jflwjqni.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163iqbfgmif.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163cwzuskzp.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163laqbennc.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163ibmopcyw.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163nydmhexj.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163zzjwhoad.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163hkhscciu.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163zfwynwdz.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163ewyccdyr.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163rdayltxw.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163ysxxzgcu.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163nujetgta.html

print("Hello")
来源：http://www.sxryk.cn/163qwjscmah.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163oukicgvl.html

local a = 1
来源：http://www.xuanzx.com/163gsiqhriv.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163tblqkwsv.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163bdkzepan.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163jdqgehtm.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163qypywnly.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163vyojghjg.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163dsiozjnk.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163wlkijday.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163yqhripnw.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163quimubcf.html

"a" .. "b"
来源：http://www.aibaodan.cn/163cewjkdgm.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163pobvwgxb.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163zmckngaj.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163fhjtiirc.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163wnbjgknu.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163qjjvgbmb.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163youvhvsp.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163ghiqoaxw.html

print "Hello\n";
来源：http://www.aibaodan.cn/163fwagaurh.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163fvzqohjb.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163nmglhbeb.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163khcynfmp.html

"值: $a"
来源：http://www.aibaodan.cn/163xrjzdgsx.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163lumeawkj.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163syndentu.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163mqpxqags.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163sxfuhrop.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163rjieznpv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163hapfpjtm.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163tlpvzxjg.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163hhimbjhr.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163yehrepgb.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163zaiodune.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163pcabkofh.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163avftucrm.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163xidzmwfb.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163plmislwv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163czqyjrxy.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163dhvapons.html

println("Hello")
来源：http://www.sxryk.cn/163ssblcyhx.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163fjiqvrka.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163sufagfyp.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163wbvyzgnu.html

s"值: $b"
来源：http://www.aibaodan.cn/163mrpyffhu.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163neneeamj.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163hrlfcatv.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163auwchidd.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163glfvmani.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163efeamobp.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163nkaexfrd.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163icniwksk.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163kwgmrnrk.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163cavzdbws.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163tsxyuwui.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163vnxivleo.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163qwlfpruw.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163paoqhizg.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163kxdlzmxh.html

================================================================================
来源：http://www.sxryk.cn/163vnajzjcb.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163kkykxkcb.html

================================================================================
来源：http://www.xuanzx.com/163gtzcudky.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163xjidtesp.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163mqnpzvgf.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163uhkpesds.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163pynrucys.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163ztftpoiq.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163htaaivcg.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163dcupayhs.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163skqukxjx.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163qklbrtey.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163xmkezhob.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163wbyzyarq.html

{**a, **b}
来源：http://www.xuanzx.com/163lfwttfbc.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163rizkyvln.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163egckihxy.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163peptqlvf.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163sipdyboe.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163fgddcpoi.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163ltvnyzod.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163kqjbxpcj.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163scwhcgdr.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163fkehnevv.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163nouejloy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163wpimfekq.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163vdtgssoo.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163ktbvdbpr.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163ujvrgsiw.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ngdqaulc.html

defaultdict(list)
来源：http://www.xuanzx.com/163ztsckuqs.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163aaltcmao.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163oysaeyrk.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163kfzmvrec.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163gakwogtu.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163djhmjuhr.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163kaerxhuf.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163xzanpedo.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163thpsbiyb.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163vxfczsan.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163qldxezpz.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163swteppel.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163ogshzfqq.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163xnyomkwb.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163brsmgzjn.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163mndfhcha.html

list(zip(*m))
来源：http://www.xuanzx.com/163dzcbhimq.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163htqwwkse.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163ansndclp.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163qwakhzyz.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163fnnvwyvc.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163bpwkaetr.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163wfjieffo.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163bevcyxbp.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163ywkknmmr.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163eglnbbtb.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163jzomjooc.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163pfygnwxb.html

UserId = int
来源：http://www.aibaodan.cn/163vqigyrnt.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163usowtsoc.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163mmkqddyr.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163cwnrqnjj.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163egukubqy.html

[U31] Py：单测
来源：http://www.sxryk.cn/163saxmbawh.html

python -m pytest -q
来源：http://www.xuanzx.com/163pxrcduqr.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163llnobzrn.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163hjcznfzm.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163hgepxsio.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163utytgrkf.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163xglzbfrx.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163udzzaghx.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163qjrraufe.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163jwbbgkdk.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163gopyxklq.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163bzeoejdj.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163taqmaqna.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163ctvovzck.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163nimlerau.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163edtxtiou.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163poihriwj.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163tkimydjn.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163gkinfnqv.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163undlmqqy.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163htzdeqbv.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163bstiwjyl.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163fmnjibbs.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163liyzhyuo.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163wkijfhjr.html

namespace App\Http;
来源：http://www.aibaodan.cn/163kxfkmqjz.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163stbnyvaq.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163gnvjacek.html


<!-- 参考信息 -->