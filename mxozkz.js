外链999!wailian999！

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163uaunuydk.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163wwrifryg.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163vyrhxyga.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163nepzzkag.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163sucqpcau.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163hmfycsom.html

fclose(f);
来源：http://www.aibaodan.cn/163xhecjtot.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163hcuiobjm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163hcziusfw.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163gbilslit.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163tgucsfoe.html

[S14] C：枚举
来源：http://www.xuanzx.com/163uskbjdbe.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163cqfazuax.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163kxfkrlfd.html

(double) a / b
来源：http://www.sxryk.cn/163leibkhim.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163bbxbkgcl.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163yxmcnkjp.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163prdsczwt.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ujlioogr.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163twchldrw.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163vszkxhcf.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163cfqiokcc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163lgmhksxm.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163wirbhnis.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163mvpajnte.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163bmnpmoeb.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ztpqqufp.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163xmntxaxs.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163vikwoajv.html

[S23] C：随机数
来源：http://www.xuanzx.com/163dfvekomm.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163rhfmeuwc.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163srzmuxnv.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163xpolniix.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163wptuabou.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163ggpoqrfh.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163eqtjqqag.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163cjgslfbx.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163gxefytdf.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163zhduwfie.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163fldhogpo.html

static int counter = 0;
来源：http://www.sxryk.cn/163tdbrsfjg.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163qcepxxto.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163fjyqvobe.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163jxkueqvb.html

#ifndef X_H
来源：http://www.xuanzx.com/163hfiwdioj.html

#define X_H
来源：http://www.sxryk.cn/163erypqpsx.html

#endif
来源：http://www.xuanzx.com/163oydhofon.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163limwxijh.html

#include <iostream>
来源：http://www.sxryk.cn/163liuijyqg.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ndfjownd.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163cgldpksu.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163cutvmzhr.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163casmibnu.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ptajqfxk.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163dijztdyz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163axhvdyvk.html

[S35] C++：map
来源：http://www.aibaodan.cn/163cyrpzgyc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163muylthdc.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163tsvikkvx.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163zuryedjj.html

[S37] C++：set
来源：http://www.xuanzx.com/163qtckrjae.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163tvvfuviw.html

[S38] C++：排序
来源：http://www.xuanzx.com/163ngeygktg.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163cipetoyo.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163vrqvzcen.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163sexvnnzq.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ufdjifdk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163badhtnko.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163zmahwrcc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163qqevtere.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163xwlgzahq.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163qneoikaw.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163jmfxjeny.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163vhrkkcly.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163nihfzsnz.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163qfqnffig.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163aoyazpwm.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163muugznbe.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163hjmweoiy.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163dzzcigbm.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ucwvyehu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ruhlwclq.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163yupytppg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163vdbzjhyd.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163kvkqwwxt.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163tyemmjxd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163nqpcaysj.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163emvsswaq.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163pijkaecq.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163nmuhrceu.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163fipqxqfv.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163nxvvrgrw.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163nqrnnijj.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163dnnkjapi.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163ccyfgfpl.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163txsdzzlt.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163npvtnlcq.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163digafrhc.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163vuftqiry.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163dmeorrac.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163bfesbepj.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163xciroerv.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ofidjqkf.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163klsmxryq.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163jkzxwtlc.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163vphwhmuc.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163rzaovkzf.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163xppdblht.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163qtkmbfae.html

================================================================================
来源：http://www.aibaodan.cn/163qphnwjrp.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163fsexvmus.html

================================================================================
来源：http://www.sxryk.cn/163mwpfhskr.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163qlbtgcbh.html

println("Hello")
来源：http://www.xuanzx.com/163jmhqtfqk.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163pdeyqayr.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163uivettvo.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163gdqlmmlb.html

"值: $b"
来源：http://www.aibaodan.cn/163nqrcakxt.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163igthqrjz.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ewrswzcc.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163hfclpeek.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163qwlrocso.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163fvgeaclx.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163brhslkve.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163veasctys.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163nbqsdbuh.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163efrxqvse.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163aexvfgnx.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ohgvrcni.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163hjvdygih.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163wreoahpg.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163kdukssbo.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163thentufr.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163icjuxdet.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163xasvjixd.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163jcelmhuj.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163casutrcc.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163fddosnfo.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163kyvnzdms.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163sgquaezp.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163uplcskbq.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163unavnoyv.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163lmdmhspm.html

print("Hello")
来源：http://www.sxryk.cn/163vpvovpow.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163yiyjlqjb.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163qpiytyas.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163ztaozfrz.html

"值: \(b)"
来源：http://www.aibaodan.cn/163dzyvxzro.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163eggtvdjg.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163gybxmdpu.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163usmjuuoq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163jkfuczgh.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163vqlhnjfo.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163qyofebxq.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163loltkihp.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163mcfggmlx.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163xjftnpke.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163yyiefmfm.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163tdricnpe.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163dxxpgmtm.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163bjnzumir.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163elgvgmqe.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163eiunwsgv.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163beiidcit.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163rmnhxdgb.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163nyqiyiwa.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163pzoyqhuf.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163qfzvlxcj.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163hwqhzcbt.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163cmhweebz.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163xsbysjtj.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163smbuozxj.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163uchbxrbj.html

print("Hello")
来源：http://www.sxryk.cn/163kixvwazs.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163gancrwrh.html

local a = 1
来源：http://www.xuanzx.com/163klglbrwm.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163fmtfuzzv.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163tkwtbcld.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163lnygyuqa.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163pzyssxxe.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163hufccenr.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163iyefolye.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163ofakrzxp.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163mgvfhyub.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163hlvcwfhs.html

"a" .. "b"
来源：http://www.sxryk.cn/163bhleddla.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163qrjwfwmp.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163yyosvxqr.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163mxmtkznp.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163xblvsbuq.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163sdxcfxxg.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163yoemnsnm.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163fsgweamy.html

print "Hello\n";
来源：http://www.sxryk.cn/163jtuqtmst.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163ihpindyc.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163rcsizxxx.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163yhcgbxfy.html

"值: $a"
来源：http://www.sxryk.cn/163yffrcfdf.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163ksmilrgp.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163qgyjocbq.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163bgwktqfr.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163cbqdosvn.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163liwthdqw.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163xbnrkxhk.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163zndgghvc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163fgjkxvwk.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163qufydhkr.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163dpgrkssh.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163apzmixnd.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163plambuvr.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163ivuuooul.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ixzfzkyg.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163sucyeseg.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163gpmhhghp.html

println("Hello")
来源：http://www.aibaodan.cn/163feuddzxx.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163bjkacrdw.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163mrgzvxuo.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163ixxmznkz.html

s"值: $b"
来源：http://www.xuanzx.com/163btlkqyty.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163kudojujt.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ujigwlyp.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163ozzpyiae.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163tagdzzug.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163jrphxehe.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163cshnwgyp.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163tpdznfdl.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163mrinxrve.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163vogmdifd.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163jdlaeady.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163jsjfpctw.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163bujxbinr.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163jnjiapvn.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163twdklmip.html

================================================================================
来源：http://www.xuanzx.com/163wopqqdfq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163hitemett.html

================================================================================
来源：http://www.sxryk.cn/163rcrkystd.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ppqptvnm.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163aswilmnr.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163cwztwvnw.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163oxgprger.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163dportllz.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163vfoxvpum.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163omnieriv.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163nhypxcza.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163cpinlzfs.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163jnmpbsue.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163khhrvrwn.html

{**a, **b}
来源：http://www.aibaodan.cn/163iymurjsg.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163ksooiuvv.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163pyprvmkx.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163ckjifokt.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163sgchbfgj.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163rtffmzkc.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163nraqcjdr.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163mjppopvs.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163ywyfmipg.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163kwmcxzbi.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163lkajnilo.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163bpbjhrji.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163knocmbcd.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163kabgjkvf.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163fsbrmaxc.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163dxwektsx.html

defaultdict(list)
来源：http://www.aibaodan.cn/163ctzcxzre.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163zaedmqld.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163gsfccllu.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163soggurbb.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163zklikheh.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163xzzyosrs.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163eqnwuprd.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163npvqfupm.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163fobzdhtb.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163cntaoaxt.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163aliasblz.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163nbobnvdv.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163uarhumaj.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163evxqsmha.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163ustpvvta.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163rbiypgzn.html

list(zip(*m))
来源：http://www.aibaodan.cn/163mfzvhkec.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163hxgkbuud.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163gcgoirnz.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163iriuhkeg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163poqhrdih.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163vqvguvyo.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163aidyjcao.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163ucnzbfam.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163irzaflvk.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163veyawtrr.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163cydoibwe.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163vyispqzc.html

UserId = int
来源：http://www.sxryk.cn/163sdbywyje.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163qypozcwj.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163edtnzwto.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163knjqeabu.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163dyodmwxf.html

[U31] Py：单测
来源：http://www.xuanzx.com/163cxcwnwva.html

python -m pytest -q
来源：http://www.aibaodan.cn/163vrgeikov.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163htbtdfdq.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163fecivfds.html


<!-- 参考信息 -->