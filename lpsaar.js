外链999!wailian999！

strlen(s)
来源：http://www.sxryk.cn/163itprupza.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163biibozum.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163mhkfdbir.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163bpnyanze.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163woxpmtdz.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ytnpcxsb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163hlvvfbem.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ljmyxcbp.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163chxqjskc.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163pawqjydg.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163mnorweuv.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163jchuvxot.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163kqrfjjki.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163liwpgjob.html

fclose(f);
来源：http://www.aibaodan.cn/163pabqfwlt.html

[S12] C：写文件
来源：http://www.sxryk.cn/163yhdvakaa.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163muxyhfax.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163gyggihsz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163jfytisps.html

[S14] C：枚举
来源：http://www.xuanzx.com/163vvgiozlt.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ltoovzol.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163nxpmeshv.html

(double) a / b
来源：http://www.sxryk.cn/163fkvvigqo.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163spajfizu.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163deyuuecz.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163secgnfha.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163cnndnmca.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163ciominac.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ywbdrxyk.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163uzdjctdw.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163jcvhakxn.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163kdgstqsy.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163zfnarxkj.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163jpenkzvx.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163oqoztvze.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163wzzojbth.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163rfmnhsix.html

[S23] C：随机数
来源：http://www.sxryk.cn/163pxdpfwxh.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163kstlyfyv.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163cjmxwdbx.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163qtjbtyfl.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163bhcfognu.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163lirfvzwe.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163klhawyce.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163nxfrahlj.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163auwtrpnm.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ufshaygb.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163locbeyos.html

static int counter = 0;
来源：http://www.xuanzx.com/163iawsjhfs.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163owbwnlst.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163cevvqsmt.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163trupkjtq.html

#ifndef X_H
来源：http://www.xuanzx.com/163yjtpwwlp.html

#define X_H
来源：http://www.aibaodan.cn/163vazudqib.html

#endif
来源：http://www.xuanzx.com/163nzhhzivy.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ntborcfq.html

#include <iostream>
来源：http://www.sxryk.cn/163mgdeuyuh.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163lqspjblk.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163lglgryqr.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163tobzgtzt.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163dfrjbuto.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163simpfyfn.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163ujchjelt.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163psbrsuio.html

[S35] C++：map
来源：http://www.xuanzx.com/163hcrtoyyl.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163djetvccd.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163icrekwul.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163lagotisx.html

[S37] C++：set
来源：http://www.xuanzx.com/163hwmurovn.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163kfftfjsx.html

[S38] C++：排序
来源：http://www.sxryk.cn/163ukzzguyv.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163lrhffoio.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163mriwknlk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163azbngvph.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163jbdsjbjc.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163wfxvpjob.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163mrebdnlz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163wflsfqfd.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163vfutwnkp.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163qxrgypmw.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163pyjhmndr.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163sbtuexyn.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163osvidesg.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163yqkcpixl.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163rkkpmvot.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163olripdsx.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ojwaydqd.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163znwxnmaq.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163luenpnjg.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163sfjwscmr.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163iduduuun.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163psiyykab.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163pwbrxmgv.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ksxvqags.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163gujpundp.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163oksxoqxz.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163txzwceup.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163klkhmnau.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163zlnmydsh.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163tfkevtyp.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163afucpitu.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163mitsrrcq.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163esmfffvx.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163mbkfmerj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163kkajdlvy.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163lhmnwxcz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163fldtrdct.html

[S56] C++：optional
来源：http://www.xuanzx.com/163nvrizsph.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163jnoyedtj.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163kwrvzdaa.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163wkrnjvxx.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163poekrztv.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ulwsihkv.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163nchwivel.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163nspdhglc.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163yddkxede.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163stfejahn.html

================================================================================
来源：http://www.xuanzx.com/163sdfschfq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163lvmnmtai.html

================================================================================
来源：http://www.xuanzx.com/163ugjobkcq.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163arasrnca.html

println("Hello")
来源：http://www.xuanzx.com/163bkfshiyf.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163xmgfrvfd.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163yovhujia.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163xsanzlbk.html

"值: $b"
来源：http://www.xuanzx.com/163bpzekloj.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163uwynvbkf.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163segdrkuc.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163lvtrlrjk.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ykqwthoi.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163tyfctumx.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163rqpashdc.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163pqjvrlni.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163zgzlxpzq.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163nfwaoplv.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163odsfyhzx.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163omuyitcm.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163ftrbwwnb.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163fqdybrwt.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163gauopsbf.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163vydwuzmx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163bwaumskc.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163kbsvhshf.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163yzfyadzu.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163agcammam.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163vlpjbeom.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163cloxwyim.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163ffwekwum.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163xvawtgvt.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163owukzcuv.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163bdtouhbj.html

print("Hello")
来源：http://www.sxryk.cn/163pzukbaul.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163kopadvyy.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163mifaiacl.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163wjidnaif.html

"值: \(b)"
来源：http://www.xuanzx.com/163ikikgqej.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163oekroigl.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163mlyhaqmd.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163fmvjbcmp.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163tccchwxj.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163wbwuepey.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163bcgeiaaq.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163fisctjez.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163fkbmlxrq.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163bshlnupq.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163wbbvtbqm.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163bsvsqmoy.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163zmfsexcg.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163ryenqfla.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163lzfnhahk.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163spmhtjvk.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163teyitejt.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163jjbhzpug.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163rvjwccpc.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163rwdsfznd.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163qzymlnxx.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163cotgyyky.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163rjjpffhl.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163vkephnwh.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ztoapoah.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163kgtyhajv.html

print("Hello")
来源：http://www.xuanzx.com/163rmkzgdwq.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163uelkydyj.html

local a = 1
来源：http://www.aibaodan.cn/163vbfuudcg.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163ogumqtpl.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163szefxcgw.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163jznfljeq.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163lvyukcpj.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163klvplhhi.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163iigchrpm.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163qzhyuvjq.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163wqaanamb.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163essvhaye.html

"a" .. "b"
来源：http://www.xuanzx.com/163qzrxvknl.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163znutpulj.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163fxrqhctx.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163cqpjxdyz.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163ipoplpwd.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163xrjssrcs.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163vhjynqsw.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163jfkgqfik.html

print "Hello\n";
来源：http://www.sxryk.cn/163whpdpfya.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163tgvowaeg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163dfomjbcc.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163qlryetmi.html

"值: $a"
来源：http://www.aibaodan.cn/163dfgytkly.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163ecwzusjc.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163gbgyhghi.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163mvcplnwt.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163qnsbnylp.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163njooaviv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163rczjsvso.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163floxkhcu.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163rfxfujvg.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163plobszyd.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163azxjcaeg.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163himilqhm.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163gxdqhtvg.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163ggfmdvvz.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ykjtdhof.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163yeoguwyp.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163fqbxjxlw.html

println("Hello")
来源：http://www.sxryk.cn/163tsopumfd.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163ioolehmw.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163adaelesa.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163acdukufb.html

s"值: $b"
来源：http://www.xuanzx.com/163zcrzakdp.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163xluqkckb.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163bjmxlahq.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163zbufbvpd.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163aqetkoka.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163jdcdvsgh.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163pafumkld.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163phsbjlcx.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163kvazczxx.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163eroqixzo.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163arxenjxy.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163kjobelnf.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163hrinfzjp.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163iyzvvxpu.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163tlerkhxa.html

================================================================================
来源：http://www.aibaodan.cn/163nficcfos.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163kobceeui.html

================================================================================
来源：http://www.xuanzx.com/163ovodzqgn.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163yekmwzpu.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163qrvqovrk.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163dppsevvj.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163gzxoftyr.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163bswoyygn.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163bcyvhldo.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163dpntuhyz.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163hvyvigkl.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163silpgouu.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ywstpdap.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163idnoacpk.html

{**a, **b}
来源：http://www.xuanzx.com/163gjedsczq.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163yhlsonft.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163hyktonfn.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163krntabab.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163sfohdhso.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163sgzazhqe.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163uggmqmsz.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163taxobdoa.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163dwiunqtt.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163liyywczw.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163knsgsoue.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163rishxlvk.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163pimtakwc.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163prwpdqaa.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163oxzqmhxe.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163tvmgitcp.html

defaultdict(list)
来源：http://www.sxryk.cn/163xzcastog.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163fzrzmuau.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163eufspcbs.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163eqfmutqm.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163drsrqszi.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163edppfpum.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163ytjppjpd.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163zxflnrrk.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163vpkfczzb.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163dxgrkdca.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163ygardhmd.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163bajuszcc.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163jokwfnub.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163tgapckit.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163ydulbbsa.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163wdnittcs.html

list(zip(*m))
来源：http://www.xuanzx.com/163fgpisxtu.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163nnxfayub.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163woakvtow.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163fqijvmtx.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163ubucqaxe.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163dsuiuawi.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163aujsxuao.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163wwdhtfpl.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163ekdpsnxk.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163tlxxhlwi.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163ezjodxll.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163xtqdlvzz.html

UserId = int
来源：http://www.sxryk.cn/163bpogokok.html


<!-- 参考信息 -->