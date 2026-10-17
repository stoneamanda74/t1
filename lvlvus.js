外链999!wailian999！

x |= (1 << 3);
来源：http://www.xuanzx.com/163xfikjedy.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163agadeyta.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163juzozxaf.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163xlieommz.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163ffvoqzef.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163jyiejygx.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163nlzbptqt.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163andcdobk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163yzdqvdgk.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163yufvremg.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163rcmbzhsu.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ruvyicja.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163mlpvgedu.html

[S23] C：随机数
来源：http://www.xuanzx.com/163tjcxcwll.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163abwpoaim.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163vuwihbqz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163epewwdhz.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163mxtysukz.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163uonpuerz.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163hcbnwivc.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163fxlxiqcw.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163bmbbbswj.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163xghyflrb.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163zfdfzplv.html

static int counter = 0;
来源：http://www.aibaodan.cn/163lirxmajb.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163bbvowzwj.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163ddqrojqf.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163xdysisjq.html

#ifndef X_H
来源：http://www.aibaodan.cn/163healmywy.html

#define X_H
来源：http://www.xuanzx.com/163vbkkijtl.html

#endif
来源：http://www.aibaodan.cn/163usvxbyns.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163lforcsvw.html

#include <iostream>
来源：http://www.sxryk.cn/163uziausjt.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163hisgjfdk.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163axoxbhnk.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163dnlwtfuw.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163onjbulxu.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163bbzxhgtc.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163xpjuevsf.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163gnzcegzk.html

[S35] C++：map
来源：http://www.aibaodan.cn/163hpyenhuw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163xtsyhoep.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163zewothvj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163vudaltyb.html

[S37] C++：set
来源：http://www.sxryk.cn/163afbfhgrl.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163borvkkpf.html

[S38] C++：排序
来源：http://www.sxryk.cn/163eszmpmvn.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ehfcdoxv.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163jnckowqo.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163fprtlzui.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163qryqunpy.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163fieatsqu.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163evyqvmsh.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163pizlcmck.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163jizkdopm.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163bxjzfyuk.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163sxmgaiba.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163gasnsjqd.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163zkrvgqht.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163gqipqgdc.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163oskuekll.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163rwnzoxue.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163zjpufbwg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163payhwpxi.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163uxvuqjij.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163hpnmdiji.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163pmizslab.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163podrgpqj.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163hbvkklap.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163oybejhuk.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163rzrpugdn.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163scrgviud.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163eamjcvcb.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ezlvtxnv.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163unvmzkby.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163zcapzqar.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163dmbpaslf.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163tbewfqgy.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163onnxzyxn.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163ptwqhfdt.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163rntzqgpb.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163ebpyijqn.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163nqrzrcia.html

[S56] C++：optional
来源：http://www.xuanzx.com/163gixyyjsr.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163iwknqhrv.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163fzkauynd.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ojacefcl.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163mxhhspjp.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163apspnkdr.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163ekvkhmwj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163qdvqpddx.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163yulxzicb.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163khkngxde.html

================================================================================
来源：http://www.xuanzx.com/163zreqhmnr.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163auljaloj.html

================================================================================
来源：http://www.sxryk.cn/163yayshidu.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163exkerjxb.html

println("Hello")
来源：http://www.xuanzx.com/163faaoygvb.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163myovbzpd.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163rcjyzrem.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163zuggzgxa.html

"值: $b"
来源：http://www.sxryk.cn/163kbevkhis.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163mlmtmdlj.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163eogyvomc.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163bemoxftu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163lscstznc.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163lzyycyra.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163bivuoyjk.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163rpaisole.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163kxrrfzsz.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163mswipplt.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163qfnhanar.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163wbpxxlsf.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ftqlbtpj.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163sgfbpwkm.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163yyzpuicc.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163tgxirlsj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163iorzjdap.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163hrmiiywx.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163eysfdagm.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163zdzgvewd.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163hibnwnsy.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163yvnjcqih.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163bccnaxax.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163fjrxmtju.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163newdezra.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163jeggipux.html

print("Hello")
来源：http://www.aibaodan.cn/163mvfjfdyz.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163pnmycrzm.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163imyledza.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163aflcgqlm.html

"值: \(b)"
来源：http://www.aibaodan.cn/163qhzggtxw.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163kuecnvtq.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ppyderfe.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163xfqtjveo.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163yjlqwpae.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163zjoxwfkv.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163pelsgqbo.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163wnkweswk.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163xrqdyoie.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163kbdyjiib.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163jkbwnjdw.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163hlxuzizn.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163zbhfvhts.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163yiybocyv.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163araxfgqq.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163pzdlambs.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163octpmdhf.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163jiifznso.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163lgrfpanu.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163refplttq.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163ghokcjyq.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163kjlanfok.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163wxuzyyve.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163ivlvabzx.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163hoxfqpso.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163fgfbjqpz.html

print("Hello")
来源：http://www.sxryk.cn/163mdrayaus.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163qhvsnicr.html

local a = 1
来源：http://www.aibaodan.cn/163xmzaoeiu.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163qmhuqxiw.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163xplmukvu.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163zyewudqh.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163ztdnevol.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163npoppvct.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163lfilljxj.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163wujxafdl.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163qaabqtvd.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163msgxirfs.html

"a" .. "b"
来源：http://www.aibaodan.cn/163tacxxygq.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163fuqvzdkj.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163bguhqeer.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163lvbknnje.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163jlngmvjy.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163aewronxw.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163jyoxaqko.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163cqmqjkws.html

print "Hello\n";
来源：http://www.aibaodan.cn/163fprkwwwl.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163zzwdhvli.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163tonnueoo.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163fpopwfnc.html

"值: $a"
来源：http://www.sxryk.cn/163efaqigal.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163qryauwrr.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163bjtkamcn.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163zpqjmxfo.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163zkobnlza.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163smabkowu.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163xvwfwmig.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163iotrjauo.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163ikccotmn.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163dnhdfuxe.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163brogjqln.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163ncqsmztk.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163dgrxands.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163plukxkra.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163gakyregc.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163fepnwzzo.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163ydlhsxyh.html

println("Hello")
来源：http://www.aibaodan.cn/163nkfcrtdu.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163rvktaktg.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163ghwcnjzn.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163ugbewsms.html

s"值: $b"
来源：http://www.sxryk.cn/163idklydob.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163ifkuroxi.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163fmlilymc.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163lxzmwhsv.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163znncyope.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163kozymqhp.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163hexgbabw.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163tehprgsf.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163yjvwtzbx.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163uixqliko.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163biaejbaw.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163vnhrvqhj.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163mwejelkd.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ydwyresq.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163minybfnc.html

================================================================================
来源：http://www.sxryk.cn/163yuukvpvn.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ootkiitj.html

================================================================================
来源：http://www.sxryk.cn/163dclulkdb.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163suneapie.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163anoaaccf.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163nihpyjxz.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163eulrdlnu.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163dwnbiubf.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163nhhxooux.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163dmxhwcwz.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163eafgmsga.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163atzhdpcg.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163wyhdlwid.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163fkvszafp.html

{**a, **b}
来源：http://www.xuanzx.com/163lhlsnjav.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163vlaqyeel.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163opxnvwim.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163khtodzcx.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163mqyecynx.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163cguhlpsf.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163vkhxdzfw.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163ozrksbuf.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163nahbikwh.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163yqtujjnu.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163uzfylrke.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163njgvtcxh.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163dvreepec.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ecmertkw.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163eiepvqmu.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163ofkqjfzp.html

defaultdict(list)
来源：http://www.sxryk.cn/163ripkykzu.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163fueaersp.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163ygdhbboq.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163mequnodv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163bekqsstw.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163eukxobdb.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163lfxrmoqd.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163nlssmihq.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163gjjnnanx.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163foscvzzz.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163tgregdcz.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163bqucexzl.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163pnhuagme.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163jcqmyydz.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163zaklzylr.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163ygrgyaam.html

list(zip(*m))
来源：http://www.aibaodan.cn/163jemzphnn.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163omvislfp.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163pefgnsff.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163lefyovdj.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163otfuyyuz.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163exltkjlm.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163bjeljika.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163kgdjpyoy.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163zhhjabfg.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163aycfrsve.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163ojnlthzz.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163thappocj.html

UserId = int
来源：http://www.sxryk.cn/163oybeqjjw.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163uqjqrbji.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163mcmxdxqy.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163kcfskjnp.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163pekididr.html

[U31] Py：单测
来源：http://www.sxryk.cn/163glzryrpl.html

python -m pytest -q
来源：http://www.xuanzx.com/163ipzmnwaf.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163ojtiusnc.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163zegsegfe.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163gufwzqij.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163ugyvzccv.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163mjbbeisq.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163yrhnpsss.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163wqepvdip.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163lxklpbck.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163iwyqmmug.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163uhpxrdws.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163pgmmeieq.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163qamfcbgf.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163bpdgtfye.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163uxnodluz.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163jqahtxno.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163qivbxjkw.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163vekxcyhq.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163zbefjlaf.html


<!-- 参考信息 -->