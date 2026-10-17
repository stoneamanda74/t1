外链999!wailian999！

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163sirikufo.html

[S23] C：随机数
来源：http://www.sxryk.cn/163pevetelp.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163axznhzjg.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163dlecezxa.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163mgojbecj.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163vhjstidk.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163mpxaarwi.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163qmwfemcg.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163szqpidrq.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163krrqblqk.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163bdibtiqq.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163pzxvmqdw.html

static int counter = 0;
来源：http://www.aibaodan.cn/163tumxlmmr.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163aftllzwq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163vapoqycv.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163jasoyrdi.html

#ifndef X_H
来源：http://www.sxryk.cn/163ezcqsnqs.html

#define X_H
来源：http://www.sxryk.cn/163ehalfhmj.html

#endif
来源：http://www.sxryk.cn/163nfgkjfon.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163lkmoijeq.html

#include <iostream>
来源：http://www.sxryk.cn/163rcwkoqny.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163uxdgtuxf.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163cbwtwlde.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163sngdnclm.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163zwtnretr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163lkpdhxcm.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163hngaxaae.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163sbcwntzm.html

[S35] C++：map
来源：http://www.sxryk.cn/163zqfocrfz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163fiayxfuj.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163ajgpfgpu.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ouwjsifl.html

[S37] C++：set
来源：http://www.xuanzx.com/163lrvwhilq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163mqgunpkn.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163dvgakgda.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163vxbymusi.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ihrfzicc.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163kgzwykko.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163qzhamwyx.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163oydolwtb.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163dkuzvino.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163fjupyjrq.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163rhhiftub.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163ivmukcog.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163tewaznpp.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163yrdppzns.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163jmgkkftq.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163qoqfvqdq.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163sgrheqqn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163uqjygqjw.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163dkxgkmcs.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163uckerqsv.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163tefxebhj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163hefurric.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163smtepzji.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163qqvsioit.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163wbwtelqi.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163bzlhghpw.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163akfhuocv.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163clbgdbmg.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ydxdjodd.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163wdnkpcki.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163zwihrghr.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163empaqhcc.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163owedgwuo.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163yggsgqva.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163ssgldrov.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163jajbecmn.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163xggjrvea.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163zeztsxma.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163uybbackw.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163bqlpfinu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163eihsimqi.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163vxylgpzs.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163hhqarnwa.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ybzkfmde.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163cqgffozt.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163kkxmcimn.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163urqpdnbu.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163pflurkpe.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163knmqlcsy.html

================================================================================
来源：http://www.aibaodan.cn/163nstolees.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163jowooaey.html

================================================================================
来源：http://www.sxryk.cn/163juzmnomn.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163licjkbew.html

println("Hello")
来源：http://www.xuanzx.com/163talrezdt.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163kgbzweew.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163oaepwixz.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163vlejzyvd.html

"值: $b"
来源：http://www.aibaodan.cn/163smioitmu.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163lxnefltb.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163xeociihb.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163tdcqkxpi.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163vhhkuyml.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163spqcrfvk.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163cjbdynkh.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ynvxbzgr.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163jjdnntqf.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163znnsbfmw.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163xxlvkigb.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163zfnqokcd.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163nfstxfzt.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163kgetaaok.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163ivfmmjni.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163djxfoepl.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163umwzehjc.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163bdqkgmme.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163dixvjqkh.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ucblkjrc.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163owpzgbqq.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163tbusmtfv.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163vdxpirag.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163pywwvhqi.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163opnzbopd.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163mwvfexzc.html

print("Hello")
来源：http://www.aibaodan.cn/163mgolrkqq.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163davyarwg.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163vqdvbcuv.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163zbrzncok.html

"值: \(b)"
来源：http://www.sxryk.cn/163jxqwimpj.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163upqnjlmh.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163hmfqiwhh.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163xztmissc.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163reffffrz.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163aovuyumw.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163aisuvraf.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163iaqiacip.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163mqhpdtjg.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163yqeyrkbp.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163dqqauout.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163cixdbpbc.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163necswxsv.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163zskyqzbz.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163ocmiuggc.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163doggfkge.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163llffuxbw.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163cqdbjfhz.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ztntphgh.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163prkrksgq.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163vpbkzzkf.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163wphqqooh.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163uqmxfixx.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163wclhatkn.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163jryradhv.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163opbotvvj.html

print("Hello")
来源：http://www.sxryk.cn/163loebbefn.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163fjmgnyrl.html

local a = 1
来源：http://www.aibaodan.cn/163wneooaqm.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163ahjhtybk.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163usyanyuo.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163yvnnwmbp.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163syrszutt.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163khyjkerk.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163ycuepyoo.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163mzbdbhia.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163gvmcmwbl.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163dxbbfcyb.html

"a" .. "b"
来源：http://www.aibaodan.cn/163sutjagte.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163xpbevubv.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163nvnsngwm.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163ahavozrs.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163ksxjeylw.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163bnkvmbxm.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163gpybbiem.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163wujoannj.html

print "Hello\n";
来源：http://www.sxryk.cn/163jqqflgtw.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163ivluttst.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163potmrsie.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163oxvsvloq.html

"值: $a"
来源：http://www.xuanzx.com/163skcegxar.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163gpakdepg.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ffqshwyp.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163qynxkfah.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163npdtdruy.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163fshlatjt.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163unzhwoue.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163wyenntqs.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163rbkcyzyb.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163jahgmbct.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163eresvmtb.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163gzboxjyj.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163azvinayy.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163jjjkyzwf.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163srqohsnh.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163pqoslfha.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163wjatfdjj.html

println("Hello")
来源：http://www.sxryk.cn/163qpudezei.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163nfcfjnmn.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163cvjqvtwl.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163gnwtvsbo.html

s"值: $b"
来源：http://www.sxryk.cn/163ukfakjdi.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163zllhecih.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163zwkhydpm.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163rvobhzjm.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163cglpgzpj.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163xpncoxrp.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163gzkrqtsa.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163jdwwvozq.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163zlkvtmar.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163oyixoicy.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163rhpumyyl.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163xindkuvc.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163nfeusaei.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163gckezgri.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163rlsxuace.html

================================================================================
来源：http://www.aibaodan.cn/163xmpevjan.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ayiegmdo.html

================================================================================
来源：http://www.aibaodan.cn/163ygdwvvrk.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163shlbabux.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163esrpwexu.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163nudhqfgi.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163bbnxscig.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163kusykiri.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163uomqosuc.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163crrygtwx.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163butyboxp.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163kdihjjlf.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163jcukncbn.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163vmqeeczt.html

{**a, **b}
来源：http://www.xuanzx.com/163wwqtzite.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163owfjdktn.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163lgnppkzc.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163zmyikdco.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163buodmjxy.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163hacpxnly.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163ygggxtsc.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163vtuuagdn.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163bxnjozdi.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163khnwgjmr.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163jpcxjfjc.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163sgwlacau.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163qwyrhxje.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163kdbygfvo.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163kkihotxz.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163murzcbuh.html

defaultdict(list)
来源：http://www.sxryk.cn/163yfteggsg.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163bhmjlnma.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163xndhyvpb.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163bjnleryq.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163pmqdjqvu.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163hlmhtagj.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163hxvcwsiz.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163zumvdsxk.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163vcleshci.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163tjzrarqy.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163dhrzkgsa.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163kfdcuzfj.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163ebmulfjx.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163psllrklc.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163saioskax.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163yxiaxhln.html

list(zip(*m))
来源：http://www.sxryk.cn/163ndsofqxp.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163tdwnnief.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163zwigltzt.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163ncavohyu.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163wizpzupw.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163urvucxcn.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163eilyrxra.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163vwuvafuf.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163qngnnece.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163jsavjzlf.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163lbypktav.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163cllhqvdo.html

UserId = int
来源：http://www.aibaodan.cn/163legofnjj.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163cmkrtrhk.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163aevqpnnq.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163wraagctw.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163idgvvcta.html

[U31] Py：单测
来源：http://www.sxryk.cn/163hglbdrnh.html

python -m pytest -q
来源：http://www.sxryk.cn/163sqzlvlrb.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163upoaurww.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163kazkifbe.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163ucglchdm.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163txyucgys.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163loezhlez.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163yogdpqrj.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163dxtddpex.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163wduuvxkf.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163eezufmzg.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163dljsiuyp.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163fvwkwglk.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163idqqxmzp.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163xjhqtqsm.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163ykzqslcf.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163lzzcamme.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163ajfipmfh.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163ivkmgzqn.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163srkqqdge.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163hwpwhrhc.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163hnvlqsdl.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163mfmxvdwz.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163zrrudapq.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163qxqfaghl.html

namespace App\Http;
来源：http://www.aibaodan.cn/163yiumryuj.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163xyqrdcsv.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163mjbiqezz.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163eixwmjcg.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163zljwaipn.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163hxgqzkvi.html

?string $name = null
来源：http://www.sxryk.cn/163ypqbmdti.html


<!-- 参考信息 -->