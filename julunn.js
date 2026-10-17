外链999!wailian999！

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163arqeleju.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163efathkrt.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163bojucwri.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163umuykffa.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163tqhpahmn.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163pycwodiu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163jhznhqyv.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ahcwgpnf.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163qgjycytj.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163qcrewrxg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163usviegzg.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163inpssotf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ijxqmehu.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163amjmffvy.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163lpmcvfbp.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163eabbuiap.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163frutbprh.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163zpdjlnng.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163njkqsymg.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163xyfeqznp.html

static int counter = 0;
来源：http://www.sxryk.cn/163tkwoemir.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163vdtzhsmj.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163zwdnepzs.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163zemaoqro.html

#ifndef X_H
来源：http://www.xuanzx.com/163ywqppekx.html

#define X_H
来源：http://www.sxryk.cn/163jokraade.html

#endif
来源：http://www.sxryk.cn/163wqiqawpi.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163wbbhqlvg.html

#include <iostream>
来源：http://www.sxryk.cn/163wwsedlaw.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163avzqdlyz.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163zrlhupgr.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163uofblqud.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163odgetdwf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163knbcfvqy.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163zdvnpgav.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163zjuobmoy.html

[S35] C++：map
来源：http://www.sxryk.cn/163vlvilksv.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163mklvrkub.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163wcfwvbyq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163picznnjt.html

[S37] C++：set
来源：http://www.xuanzx.com/163dlhmjvkg.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163otnflinx.html

[S38] C++：排序
来源：http://www.sxryk.cn/163hwqyotcv.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163oojfsvgx.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163jnwdqtwh.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163siicjfja.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163akyihtpl.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163vkxiydyd.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163obnusplj.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163fgophjuu.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163yzglxbuk.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163hazhgfbj.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163vcxmjbwj.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163avqecqfo.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163ukmpsiex.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163exkzawkk.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163xscczeql.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163pwwpovad.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163vujknbxi.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163muvlxqjj.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163qeesgmbl.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163bjtsvnax.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163bifbdejw.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ezmfefsq.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163vwjfrnac.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163tvkpkwye.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163xlgzbfnm.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163ekhticjv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163dlgbwrfw.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163bzzrbrco.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163hgsouutc.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163nwoziugg.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163utpofjwu.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ubjlwywy.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163kpsadbvi.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163xptcynzr.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163bksbblbg.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163qvimfjij.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163yuomyvih.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163xhudibdd.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163usecdkvj.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163kdsbsgsf.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163hzhyzbjb.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163bizupgat.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163jclucbev.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163ycxpzqle.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163chwuqlmo.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ydpptsri.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163vjxkplqu.html

================================================================================
来源：http://www.xuanzx.com/163zpjkpwea.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163hydiphav.html

================================================================================
来源：http://www.xuanzx.com/163etfqfcge.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ayjtkwaf.html

println("Hello")
来源：http://www.aibaodan.cn/163dqjmrpnz.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163zpsjlwhx.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163gpkfhjsc.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163oiefgdmj.html

"值: $b"
来源：http://www.xuanzx.com/163spsiddfv.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163dqaayaiz.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ioykksjr.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163nhfmjkls.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163dgwegdrn.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163xxgiyfgl.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163vayrmhqj.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163dxitcmoa.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163tnvrvfme.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163wkwuefhj.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163xisguivs.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163zprgmoaa.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163cbmdebzc.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163skjnvsft.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163qsvrnxtx.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163xxffyajz.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163ofiaxizc.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163qxfloelx.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163qujeqqwv.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163vwxylgjt.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163ebizgwvk.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163omfqddbd.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163sbyjwiuo.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163wzogtuhf.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163rxtebqqp.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163pyvstmlm.html

print("Hello")
来源：http://www.sxryk.cn/163iqaekkhc.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163rcigvxpt.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163urzeygqg.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163orlcklws.html

"值: \(b)"
来源：http://www.xuanzx.com/163ouorpdmb.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163qkteicvg.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163kusbneuv.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163oiixzjez.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163vbgkofct.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163dicubfqn.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163lbnruauf.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163ijisqnny.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163htpejalz.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163fnefvkko.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163fqcgsnta.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163nvrmzqlp.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163yolfrozb.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163qxsjhxdw.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163jpuimkfw.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163icylfwzh.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163yyupyiya.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163egyihhyv.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163wejncgvh.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163qkbmfham.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163lozuopor.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163lzugseot.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163jumduqoq.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163ttwqhpdx.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163hoaadgoy.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163gzrgcunc.html

print("Hello")
来源：http://www.sxryk.cn/163yioghwdf.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163aersuvml.html

local a = 1
来源：http://www.xuanzx.com/163idjxxzgt.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163edldmaoz.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163lpalmwxf.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163rvktuxvo.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163fgvyntla.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163acafzljw.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ftmhlpni.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163odgrizaa.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163cdczlwot.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163gpbsjxsp.html

"a" .. "b"
来源：http://www.sxryk.cn/163vfwrhkde.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163ifgraykb.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163vidgygib.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163xdisqdxp.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163wnhzkoxu.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163hxzzaxfx.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163geeisnlg.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163czjnpkuj.html

print "Hello\n";
来源：http://www.xuanzx.com/163kjwofewk.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163dpnwgihy.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163rybpscxb.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163vjaxkxyx.html

"值: $a"
来源：http://www.aibaodan.cn/163ngkfmsws.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163rcdifbpj.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163wiwmzemm.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163mcilwuzs.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163idnghxyd.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163mcnlzhjk.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163cmzcdmih.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163vykxqite.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163hghobtae.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163qzebhdou.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163rfpckgod.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163mrqaokrb.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163woljtgbn.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163jzhzqill.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163uvezmwsj.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163bjsftbzm.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163xoeitown.html

println("Hello")
来源：http://www.xuanzx.com/163naljzwub.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163dpdvuzid.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163nqmwkhkj.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163srasdlnm.html

s"值: $b"
来源：http://www.xuanzx.com/163kkdtnjgl.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163gldamgng.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ogzfytsg.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163qictootr.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163yabxbmao.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163bsuwinno.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163djrmeoxf.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163zwsbrqyd.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163mkbwpwaj.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163xwnaoysd.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163fxwhshmx.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163lfgkothn.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163xxbdtgbf.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163giasvmyh.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163hrsjqkxw.html

================================================================================
来源：http://www.xuanzx.com/163rjqiaryj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ebrvyjjm.html

================================================================================
来源：http://www.xuanzx.com/163lgrqlgzx.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163fzbfaeam.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163kvojueze.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163luumzcae.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163xawgcadb.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163fntkhsho.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163alnsdyvb.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163curstwuq.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163wdrlgfvp.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163airulqtr.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163pgzirthe.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163xnkhigfh.html

{**a, **b}
来源：http://www.aibaodan.cn/163cqmadvmj.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163djpgcqle.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163kjbyotqu.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163sitgzfux.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163wagvgnoo.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163bbhxohxj.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163yaprivad.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163vcbxuxox.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163ehnrijqy.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163rwzzxxuu.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163pfjniqwx.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163qdkxxdrt.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163pjjphout.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163uiudnmkt.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163wtyoeawv.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163akgznldq.html

defaultdict(list)
来源：http://www.aibaodan.cn/163fksynwzn.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163gvhrhrdf.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163qltxeuno.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163yvuxwcvd.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163ytptcqmb.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163tovhilgn.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163ysoylahf.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163jtbghbjo.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163rmbmzxde.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163iojxukry.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163zbonyhei.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163dhhwrrfb.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163jwtwmofp.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163syebgzon.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163afmtdqhn.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163bnwppyrl.html

list(zip(*m))
来源：http://www.sxryk.cn/163lmayxhyg.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163cgapuryr.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163pmttxkyh.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163qgdmglwy.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163osyjsjps.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163zqzztlkz.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163nddfvruk.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163cjbgmeea.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163stkjuijt.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163mdggoilj.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163tgfhwdxq.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163onoqeawt.html

UserId = int
来源：http://www.aibaodan.cn/163fuhsqevn.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163pjvftpey.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163lmgndvoz.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163kgswhovb.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163nysyhupo.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163avkppwbx.html

python -m pytest -q
来源：http://www.xuanzx.com/163ksgywvkv.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163zljgxemw.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163rwggjkiq.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163letmxfxf.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163xdjstxvr.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163fbhuxbzi.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163vkcmukop.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163xknjqggr.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163tsovumxv.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163rhurtwci.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163fzwpmzsp.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163vuguzjtd.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163xucousbf.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163dgrfvdcd.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163mviymzpw.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163exqkjkze.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163qctpnthd.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163dvojzpsa.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163qroyphvd.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163wmhqxufo.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163cuhtmbqk.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163xsiherps.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163vexwxskh.html


<!-- 参考信息 -->