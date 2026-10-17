外链999!wailian999！

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163wxttnlwa.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163yfcyxunx.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163myombirn.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163rohtaufj.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ytvinlso.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163hkjgiwmh.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163fjpyuucy.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163zkjhrnim.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163plgpzikk.html

[S23] C：随机数
来源：http://www.sxryk.cn/163gyzcadds.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163zoghocwa.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163ghiixlvz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ktegdnfs.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163faeejkuc.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163cxfshtdm.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163qhffgsjl.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163yjpidmzd.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163fttbpvtw.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163dswwuzps.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163qomnvfmn.html

static int counter = 0;
来源：http://www.sxryk.cn/163cywrnndb.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163qfzmtnkd.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163aidespeu.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163eubjnjzp.html

#ifndef X_H
来源：http://www.aibaodan.cn/163lsnscpjb.html

#define X_H
来源：http://www.sxryk.cn/163lvcgejlj.html

#endif
来源：http://www.aibaodan.cn/163uqwytrgd.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163vgqjvvhb.html

#include <iostream>
来源：http://www.xuanzx.com/163efoahvrh.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ghsaikjv.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163nffytlyc.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163xyvmllpv.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163cmhcaoym.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163oqmluljo.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163qwmamltu.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163hhddwaft.html

[S35] C++：map
来源：http://www.sxryk.cn/163cwlfknqp.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163tgmbarcm.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163dkmqvinp.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163nbcvfafp.html

[S37] C++：set
来源：http://www.sxryk.cn/163owpsgwmc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163gwjxqzuy.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163aqdvahch.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163nznevaaq.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163kdmtncjv.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163fegjwtru.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163xehmbwjm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163xqzapuhl.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163zttlkpuu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163svhuxtco.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163tkpqgwir.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163hazwodne.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163gaugxlla.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163agpapnsn.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163pqztfhpk.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163bqzvnkek.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163helficsc.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163jgpfyvho.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163hxwcrsni.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163rnwdksbd.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163xjlsefai.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163kpxdzcds.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163jnillbuz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163smeackcd.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163ubrvenrr.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163rvqfhvju.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163tkwhggar.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163mzkjhlru.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163dltswjsr.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163gbggkdjg.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ffokedxh.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163suncjbmn.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163daqhcmol.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ejhhfggp.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163pynwnled.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163equmtocq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163qfmkwppd.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163vydgqupp.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163psaxglqa.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163nlpmczvw.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163umyubuxv.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163zdvtalmr.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ykoarkmj.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163tygacasv.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163jmfgmnhj.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163adhrgrgs.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163dnjlwfwh.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163nlwqfyso.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163bbcwccpl.html

================================================================================
来源：http://www.xuanzx.com/163vojjpjgq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163tclcetnu.html

================================================================================
来源：http://www.aibaodan.cn/163gpqbjjhe.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163qzoqpglx.html

println("Hello")
来源：http://www.aibaodan.cn/163diuswstj.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163moexqkko.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163vguwueav.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163lnwoexzo.html

"值: $b"
来源：http://www.sxryk.cn/163rzyqsbpu.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163yuuexivw.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163srewkxwp.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163hfzjfqko.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163khiqorwt.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163ktztonqy.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163txjnaone.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ofawvmfr.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163yievfpdv.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163biqkbtpw.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163ozpwwyvc.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163rgezbxdm.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ngyjiciv.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163dinkgpfg.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163wgtcjtml.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163xgzmhtij.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ngsbgzrk.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163rxvjjckj.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163pfsytnql.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163oqcuzahn.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163fpbwlpfy.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163snphmgsk.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163supjbmzf.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163gexatzwq.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163cofxygrw.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163nqkkrkqn.html

print("Hello")
来源：http://www.sxryk.cn/163loqospjl.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163dhlodjpl.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163uvmcexjv.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163udtgqofn.html

"值: \(b)"
来源：http://www.aibaodan.cn/163mkdvqobg.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163ixnznjxs.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ayjpzjtz.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163vapkfuuz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163aivoelvm.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163vcrrdsed.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163jlioodwk.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163hkfozsyg.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163sfbmmddc.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163avlwufnn.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163icjikflo.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163viebhphh.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163ewidipil.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163wifmhabe.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163czonwqor.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163lzkfozjc.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163kzmvrywb.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163stziidhx.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163wyojzdxp.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163gmhgnltj.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163edhshptl.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163ukaktbbo.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163pkgyjlxi.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163mhwilsgt.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163jxixvvpw.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163dkxafzzf.html

print("Hello")
来源：http://www.xuanzx.com/163napssyzf.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163mzkhyjwg.html

local a = 1
来源：http://www.sxryk.cn/163aavlctck.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163rlvssxwz.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163uqricdff.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163qgzduimm.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163nqvchdpy.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163luxnsjxh.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163fuuppaoj.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163btjexrxk.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163jgjpfzbl.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163vgpimugz.html

"a" .. "b"
来源：http://www.aibaodan.cn/163hptqqezn.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163qqiiqljv.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163rfqeprju.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163gtuiacbu.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163rndcixyu.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163ohmdiogk.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163flezbtjn.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163wuwmzcmk.html

print "Hello\n";
来源：http://www.sxryk.cn/163uknzwqro.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163cmbzgzxc.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163pgzudgif.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163oizzkpcl.html

"值: $a"
来源：http://www.xuanzx.com/163chjdqfet.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163aedheydu.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ybfbqtoa.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163qbxvxsxe.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163rxnldfey.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163jbcernip.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163ciseccmk.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163pwoqlpgd.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163cfdbxibm.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163myrakvjz.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163cjptaaaf.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163yzmzxbxz.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163qlepedxs.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163cpyemokx.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163lvcfehep.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163oslirhfx.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163pvazmiaf.html

println("Hello")
来源：http://www.aibaodan.cn/163wgymzqfe.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163crsxpnnp.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163hrfdusba.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163baeqidzx.html

s"值: $b"
来源：http://www.xuanzx.com/163duwpoglt.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163jjwhgupb.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163thvwbrfl.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163sxubrlex.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163fbufrukn.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ltlsprda.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163prloyqim.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163sgxzylfb.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163mpzijxxj.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163sztyhluw.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163hqdttjqt.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163hocpbxyv.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163ozfevorv.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ggonyyhr.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163dmoxdeyl.html

================================================================================
来源：http://www.xuanzx.com/163lswmdzua.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163wtwqhwqc.html

================================================================================
来源：http://www.sxryk.cn/163xfvquefa.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163aonuoygo.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163whylfifr.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163ptnerivr.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163ibuebaob.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163bomtmxxw.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ombvsvcc.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163hhbiempk.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163fgqgezdy.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163akgdquun.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163sktabmcv.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163xnacrfuu.html

{**a, **b}
来源：http://www.aibaodan.cn/163alootxzr.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163jshbgkxc.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163ffvuawmi.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163ewllqjww.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163zunlqpow.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163abzhmlbv.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163ndkpuqsu.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163btlqesnd.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163cebhzxrg.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163exdjabkj.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163gvlgwggt.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163jbqdsbts.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163fzhdiazs.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163kdpjikxd.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163mvsmiwye.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163subneczl.html

defaultdict(list)
来源：http://www.sxryk.cn/163xutpctwk.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163jasmawaq.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163mkwjoxbc.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163mrthxmbu.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163tdashmhi.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163mxjdesqc.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163amogjwrq.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163wdnlyiwb.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163gdrhblfa.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163bhefrvau.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163zidyebej.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ytrcdmhh.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163nbtrljms.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163kozuxtyp.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163hednryda.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163igipmulr.html

list(zip(*m))
来源：http://www.aibaodan.cn/163ayvoysor.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163pukzgvry.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163wraamlpd.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163hobpdmct.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163wmxiqitq.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163zyfyqtce.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163vqkgtaqz.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163dtzujcwg.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163qsiehuok.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163ceuqnnsh.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163djpqavpi.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163bdjqnfpq.html

UserId = int
来源：http://www.sxryk.cn/163icwinarf.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163eepghmae.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163ymtqclza.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163ziljlfwa.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163bbxcnvgr.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163qavtqiml.html

python -m pytest -q
来源：http://www.aibaodan.cn/163hlfzinfl.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163yyibbigi.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163espgbali.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163lxyyrbvv.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163evfxpboe.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163ppftlfpz.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163qahyvwug.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163atilgtfv.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163naisnzga.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163atvenwii.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163cbavpxsq.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163kqtihrhx.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163rpfeqkns.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163temklxri.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163teicxsny.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163ivljecqy.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163qqkptdwy.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163nofnweys.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163iergbvbh.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163cmeklirj.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163umiojvfq.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163nuujotra.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163qodpbogc.html


<!-- 参考信息 -->