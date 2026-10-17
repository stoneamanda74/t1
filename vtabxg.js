外链999!wailian999！

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163lvujbtqf.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163qipjyhzn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163hpugzcte.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ypnskwrf.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163lfovqmas.html

[S23] C：随机数
来源：http://www.xuanzx.com/163aphiycjm.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163qnytrkzo.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163mocnvqdo.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163nncqpqln.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163xjvmvvkw.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163usuvwovy.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163sdgnsiec.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ziqkhaac.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163uucnoqyh.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163hcvyfmru.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163zbycragc.html

static int counter = 0;
来源：http://www.xuanzx.com/163fetmbebe.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163opppaxzm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163bjbjizfv.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163rnshebpd.html

#ifndef X_H
来源：http://www.sxryk.cn/163jijkaesq.html

#define X_H
来源：http://www.sxryk.cn/163nmkgblkc.html

#endif
来源：http://www.aibaodan.cn/163dgphjphj.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163cgbnmsjo.html

#include <iostream>
来源：http://www.sxryk.cn/163bkegpcwh.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163bfovbgmw.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163oppcmtgg.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163itrkpady.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163qhizsegv.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163jutwjfxi.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163kfklhhih.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163zyyccktr.html

[S35] C++：map
来源：http://www.aibaodan.cn/163cxqtsnar.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163hbduhgzw.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163iyacrxrp.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163nbxznrhf.html

[S37] C++：set
来源：http://www.xuanzx.com/163oriwyruq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163ydwiahxf.html

[S38] C++：排序
来源：http://www.sxryk.cn/163pwlumtqe.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163vhwkvdlu.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163gbnvwxzb.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163zholmtom.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163ochjinmo.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163bkllsuzt.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163ohbhyyyc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163udshzhgy.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163zcbhzzfn.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163njiracvo.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163fketunks.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163bwfueqnh.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163qundltcs.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ztjisrgu.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163rjnzxmqe.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163qcgexmzi.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163pirdmmvc.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163ohzhguii.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163cpevofbk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163txgukrmg.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163bdcftqvm.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163hpoodtnh.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163txxmtmda.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163srdpwtpl.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ehztwspq.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163jqusicll.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163qopxoggj.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163pslkfhcu.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163glfhzjok.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163ykurmcpk.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163syhstmqn.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163zxjobmyc.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163uhwksdej.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163opcjhqpd.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163fcjebtla.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163efkhrbjk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163hkatwsvp.html

[S56] C++：optional
来源：http://www.xuanzx.com/163gswyouon.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163qlxheqzp.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163xzmqzcka.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163weylztlz.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163vivjewwx.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ksfmgpax.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163hsovjdij.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163jrxggixr.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163omhvtyjz.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163syvzmaya.html

================================================================================
来源：http://www.xuanzx.com/163igerjhqw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163edbquwxv.html

================================================================================
来源：http://www.xuanzx.com/163ljhjoabo.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163kiuchsed.html

println("Hello")
来源：http://www.aibaodan.cn/163ypgxbsxu.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163igluteun.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163evlnevst.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163pyhuqpfw.html

"值: $b"
来源：http://www.xuanzx.com/163edavxxaq.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163eliecugl.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163mqsphuvi.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163gsxgnaag.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163eqbvyuqh.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163sqpxowiv.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163dkfnjxzo.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163mswkfayp.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163gvjuzsto.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163iawwadhs.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163ocwdniub.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163zkkrvkse.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163imxsmawh.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163zglcnbou.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163mkmpieev.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163ticxgfhx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163pobqbqun.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163gfiskqvx.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163auvrfcvb.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163efbxcrhg.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163hkpyseuu.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163vxyyykqc.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163nmvqbjdo.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163wbyjlufc.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163ftrestfz.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163wqxktszx.html

print("Hello")
来源：http://www.aibaodan.cn/163fkwuqkht.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163oxvvabay.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163twcaamji.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163gdnodwrp.html

"值: \(b)"
来源：http://www.xuanzx.com/163rmlkpgvy.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163eospgaou.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163ovqpajnb.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163qncynuyy.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163udxxggpt.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163aaghniou.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163vqcnphjq.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163cmzipzpd.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163esmdmxpr.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163oevrbivz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163lftuibiy.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163syxejufm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163eedujcfl.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163ghmhzswt.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163indyvjgf.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163mrcksgrc.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163zfqexpux.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163hqkvgcel.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163ritjwpjs.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163arwvjlex.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163dscjjxkm.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163gwpvnkxl.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163hvhykyeq.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163doiygskc.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163gjmeyqlm.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163wximfsuu.html

print("Hello")
来源：http://www.sxryk.cn/163shlnkoyz.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163axercrtj.html

local a = 1
来源：http://www.aibaodan.cn/163cjisdwfz.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163gxeivcdt.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163dqfugkqa.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163ijicstgp.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163jkglgoxu.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163fekaqphw.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163anvnodfe.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163geoeaxdy.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163ppnynlwn.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ymvcrdmb.html

"a" .. "b"
来源：http://www.sxryk.cn/163fgehptqn.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163yqneursz.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163nvrgxybl.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163hyoyydou.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163kfdqjqsg.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163dnmxpswb.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163rnigkufb.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163yzlqerbp.html

print "Hello\n";
来源：http://www.xuanzx.com/163fxkbwhuu.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163oymigptz.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163qsxoulsc.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163oqlijjhw.html

"值: $a"
来源：http://www.sxryk.cn/163czmzklec.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163mwlzecrh.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163ycuagvgd.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163vgzrikut.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163rxmpybxt.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163blaxxlmj.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163nhtfbwfz.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163tcfillcq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163dhpqsdnq.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163vvvspdwx.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ufcwpplt.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163kgjnbnqe.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163vepipeaf.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163xcpozjwo.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163wkmtfdfj.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ryssnlun.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163ryqjsfno.html

println("Hello")
来源：http://www.xuanzx.com/163iygjrocb.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163ttiegtvn.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163uklmwexh.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163qvenyekc.html

s"值: $b"
来源：http://www.xuanzx.com/163lsbnjabj.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163hucdpmuh.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163orcucbzs.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163zstsevzc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163lnfuwnoj.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163ltroajgu.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163bcvrlsie.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163efmuxvdv.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163kanhtlsk.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163vbifqgsd.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163jrfhqcql.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163njfkzjwr.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163sdwwflbu.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163tdmcqmzj.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163rmcashla.html

================================================================================
来源：http://www.xuanzx.com/163kbasbvaw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163lrnvifyb.html

================================================================================
来源：http://www.sxryk.cn/163fmkhrrzx.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163fkfnmsmx.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163qswdbogo.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163pzwalmru.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163vqmoajav.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163zjmejgfa.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163lmepaygp.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163lmalxgkj.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163gcipdsda.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163uisfzwsy.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163qykwaaav.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163hlknpjke.html

{**a, **b}
来源：http://www.xuanzx.com/163oknugzrm.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163czgfauso.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163seuqglns.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163ggmniyys.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163svasjcyz.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163gsucrhnt.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163xyqhrafk.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163inynpqoo.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163nduoqxfq.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163ejjbfjyy.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163euqfaene.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163flqznome.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163tvvtezzl.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163zqzqgcfe.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163dxttvfuy.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ntumwmwz.html

defaultdict(list)
来源：http://www.aibaodan.cn/163lywcupea.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163sujpwtlp.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163oxcgspyx.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163ixwnfbpr.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163fqbiesdb.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163judonwfa.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163ebilkwky.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163cvsftkuo.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163dhgnezet.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163dddolhmv.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163ehrrafii.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163zqnlfwjo.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163ioxjbwkk.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163aupkdzcf.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163iqihxgmy.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163evvjqbnr.html

list(zip(*m))
来源：http://www.xuanzx.com/163yhujhfde.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163ebyzgahi.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163mkkgbxxb.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163hmofdkob.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163jwvrlmet.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163cjufmqaf.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163rekxscws.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163fyhpgnbx.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163ziicvblv.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163muoxtcfq.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163lpkwgjjo.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163ctdgqeaq.html

UserId = int
来源：http://www.aibaodan.cn/163zjbkdhvq.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163vsuvvceu.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163amuhpvxw.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163sgfycamj.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163kbtkacju.html

[U31] Py：单测
来源：http://www.xuanzx.com/163coveiebr.html

python -m pytest -q
来源：http://www.xuanzx.com/163yddtuaqk.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163vywxnwdy.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163yhggjeyc.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163yclyqfme.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163jtzpgakn.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163mlqmmkkz.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163vfhzrhwq.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163twkawvhv.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163cghjzehx.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163qriobldf.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163silcjvef.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163thsxjvke.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163nlmnhdol.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163bixqxrvz.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163fagrwtel.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163jrigiugs.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163guokagsa.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163fotnlkdv.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163bhhaisvl.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163bvzgiiwo.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163ddwqqhco.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163ckcsafcz.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163pvsopdvw.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163dufnuoml.html

namespace App\Http;
来源：http://www.sxryk.cn/163saolwmtj.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163ybyacwgw.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163kzjccwof.html


<!-- 参考信息 -->