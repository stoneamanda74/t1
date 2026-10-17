外链999!wailian999！

strlen(s)
来源：http://www.xuanzx.com/163kqbhyovu.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163wdpbvlmd.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163djspzowx.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163zhbqjlau.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163qjkekjms.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163nwpfwggm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163wbiajhcv.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163akvtzgzd.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ptgpamed.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163oojtqbaj.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163xgidtzgc.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163ygilorzk.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163vayzmcaa.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163jmfcfrzu.html

fclose(f);
来源：http://www.sxryk.cn/163auvnjtek.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163ljkhfzbt.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163tnfjunwh.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163xqjbaqgh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163msktibbs.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163mdxcrsgf.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163zaepshaz.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163obxtzgnl.html

(double) a / b
来源：http://www.sxryk.cn/163aoeeapbo.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163bgqiiuyl.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163erbtozrg.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163fopejsgi.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163fwmggszv.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163crqnckoc.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163xxihjmaf.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163nqpccgjd.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163hheynlkc.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163whovkfcc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163wrxuzaun.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ohtqidpu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163emppdoty.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163ksgtkrkd.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163rcbaeupj.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163kcgqzynu.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163rnkptkwl.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163syrptgan.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ylhajqhq.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163tcajhdbo.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163zhaaqsbb.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163yldyotqp.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ernljlut.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163nrmkpota.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163clqxlddi.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163cadhrzfj.html

static int counter = 0;
来源：http://www.aibaodan.cn/163rzgrdqso.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163bnjljtjy.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163fndcmptf.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163egbxqmev.html

#ifndef X_H
来源：http://www.sxryk.cn/163pjnymmcx.html

#define X_H
来源：http://www.xuanzx.com/163yxtqzstb.html

#endif
来源：http://www.sxryk.cn/163glzqsryz.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163bkxsynqb.html

#include <iostream>
来源：http://www.xuanzx.com/163ucnlvsqe.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163anhedsei.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163cteyxgio.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163kdlkpqxn.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163cfzqainz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163yrdjpsch.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163duisuheg.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163ieuruudg.html

[S35] C++：map
来源：http://www.sxryk.cn/163unjwsvli.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163dyqqalph.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163dzwcytbh.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vksadeoa.html

[S37] C++：set
来源：http://www.xuanzx.com/163vtxucxfz.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163tpisjwiw.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163nnkabhoa.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163hcmnzubd.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163zhxvhzum.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163ovzwcbac.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163unznlkov.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163dnmpybpi.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163daokzsji.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163dlkrkipw.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163dgdtwytw.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163yzxrqrul.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163tfzutghm.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163nkuutxso.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163trxmzbag.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163maofpsbz.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163dnffjrxy.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163vpeycoey.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163dcmvfvkg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163umpamrtn.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163cedfjcmu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163vzrxppas.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163nmlkgxal.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163hrpbcmrz.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163mzujmsbe.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163mddtyfga.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163aqrbizys.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163vdsjekun.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163mdlxbfam.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ekcjddbg.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163ihadtpcj.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163ocemdbzs.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163iozjcvya.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163xxzqphgh.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163tlxcpqtn.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163czzqtera.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163ozrurkgo.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163srjeloaw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163bnbgjovn.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163igrqindk.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163hmntefrn.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163mecccrsb.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163vblehada.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163hopqidxn.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163bmjbafad.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163trbttjjl.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163skpbwnqr.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163dzhoagak.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163eggrbznl.html

================================================================================
来源：http://www.aibaodan.cn/163zidmqeet.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163dthmboib.html

================================================================================
来源：http://www.aibaodan.cn/163cspznrzd.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163kihbegzu.html

println("Hello")
来源：http://www.xuanzx.com/163xxboqdmn.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ezjzsmmw.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163mtgqdwsz.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163pwejlmsj.html

"值: $b"
来源：http://www.xuanzx.com/163piemiyqq.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163nxypsnwi.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163pktoplfc.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163ihjulkca.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163mzgfijnp.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163rskrwhlx.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163svqedpaf.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163onyayjuc.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163nufvfrgz.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163ntjznxjy.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163mkoftdls.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163dtpgsctg.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163kxckcoot.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163oeuaiidt.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163jvqnjxis.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163fuwmeayy.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163rehirmfc.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163vpqwflxh.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163irnqiibd.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163tntabqax.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163guxotank.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163htdoavdg.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163rdaylbia.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163tqdixtsf.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163nsegjnaj.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163xbyyreoa.html

print("Hello")
来源：http://www.xuanzx.com/163kjgaoolb.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163gxcjftfx.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163bdyazawq.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163kurbufym.html

"值: \(b)"
来源：http://www.sxryk.cn/163oxishwyk.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163olsswbli.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163bqbrcoao.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163dsjubcgl.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163wrkrszln.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163yidxkqdd.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163qkacfanx.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163bkbimecu.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ufxuotvp.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163ldyauvaf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163lnjanxys.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163kcjszeph.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163woqocmyy.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163mywnukuf.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163qwannpeb.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163fxbprxcm.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163eccjdotw.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163rogclpix.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163nxqiznmy.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163ophenetn.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163eivxivyg.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163yuywocty.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163fznffogz.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163tlmuvxgf.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163nwjjrgan.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163vdsdreep.html

print("Hello")
来源：http://www.aibaodan.cn/163inyeilah.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163gfsyzkkw.html

local a = 1
来源：http://www.aibaodan.cn/163nvhzxdsj.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163xvjewiuz.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ygdpgdbl.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163xxbltpzi.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163tahkjolz.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163zlecpqic.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163greyfwjy.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163gwxspgth.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163xecjqftg.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163xfbqukht.html

"a" .. "b"
来源：http://www.aibaodan.cn/163hpsixwtt.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163tvyyoojk.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163sbjjfewr.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163vmaglzvi.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163ubcqwvnp.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163jxgsgjjr.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163iihkpbgt.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163ljaqdoib.html

print "Hello\n";
来源：http://www.aibaodan.cn/163blrpmdnn.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163cxtksjmu.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163eowmzzdb.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163dessinmd.html

"值: $a"
来源：http://www.aibaodan.cn/163hyybttgu.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163zfudyyyo.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163hwqbgzdk.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163gwvznzja.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163uywowstz.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163jpwuteor.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163deqfbrwx.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163gmwiyihq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163tttillnc.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163jfkkvkro.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163trgdksml.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163sxwocjqq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163siyskyqs.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163gjfyyixn.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163umngrjhz.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163lvqhbnmc.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163qqombjpv.html

println("Hello")
来源：http://www.aibaodan.cn/163wiibkqze.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163exmicdjr.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163obyisipw.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163zscrgmgo.html

s"值: $b"
来源：http://www.xuanzx.com/163pvhdyytu.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163ahkazjlq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163yklwvuxw.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163umbdcptk.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163qknofcky.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163hkiogiqr.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163pnpykmgy.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163mnrwqier.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163rqsqlnvh.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163rzsqhfza.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163urziiwbk.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163dbpprpzt.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163hfsyozmi.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ywbkkssy.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163swavhast.html

================================================================================
来源：http://www.sxryk.cn/163icvypjbf.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163stvvgrrp.html

================================================================================
来源：http://www.aibaodan.cn/163olmwyyqs.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163zkcbbxcu.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163yejkltrg.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163rdymcdpi.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163kofxvgcd.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163padhwdge.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163ufttquqo.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163rbcyrrjd.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163fnziztmp.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163faqrlfhi.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163oloftgfs.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163sshcfuvs.html

{**a, **b}
来源：http://www.xuanzx.com/163zeqlydex.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163nwtidtnd.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163vkzfvfhr.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163uzngokuk.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163ebtybuii.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163xmzjpyjk.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163udwfwpkh.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163tekzsfuw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163nmgcehnb.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163fdajkhlz.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163abvrysqn.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163cjnfavpy.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163wfyryosw.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163btejfmny.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163njotouru.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163qjmnrzfv.html

defaultdict(list)
来源：http://www.sxryk.cn/163jmgrwjwf.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163zgghwhnb.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163sjbmudyi.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163gpimjlth.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163xtiljjtr.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163vgdrsrzj.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163rxvespxp.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163vkranqhj.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163ggucgnsj.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163awtimvnu.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163hewipyww.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163qsngqtiu.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163eglopopy.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163vowmyjux.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163jaljjuxl.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163xvqsxqaq.html

list(zip(*m))
来源：http://www.sxryk.cn/163bvwafgtu.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163gmnjmbky.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163zhjufvnn.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163qqbwugbe.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163uolztplq.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163imqubson.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163gbyszgsz.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163ludrgdto.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163sibzuqyr.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163tarsomnf.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163aqqdlpwx.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163ywhawerz.html

UserId = int
来源：http://www.sxryk.cn/163pcvsfpxy.html


<!-- 参考信息 -->