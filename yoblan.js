外链999!wailian999！

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163ihbahdfh.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163zdetmfwv.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163hzncfqxu.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163aisyhqyh.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163evwkeudh.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163paprljse.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163vywjuyen.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163jndpjfic.html

strlen(s)
来源：http://www.sxryk.cn/163cuuoaepr.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163qminsqdp.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ggiljpxn.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163opkppkiy.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163ssrvjtup.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163nulsfbbm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163ktszogdc.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163qfmxccve.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163emnhixpn.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163pbqygcxy.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163werwggry.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163zfsmnvpm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163fvbtwqos.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163ptxwptdr.html

fclose(f);
来源：http://www.aibaodan.cn/163qlmlubfo.html

[S12] C：写文件
来源：http://www.sxryk.cn/163qqwmnyqf.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163jrprqzns.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163msqpxjev.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163qfsvurjp.html

[S14] C：枚举
来源：http://www.sxryk.cn/163bbvptcya.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163zlyyvdra.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163gkcdhzpm.html

(double) a / b
来源：http://www.aibaodan.cn/163hbkmiyir.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163cueddgpr.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163vewcbvgh.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163jggenbrq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163hvpiiywy.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163chnlybij.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163yqxpqple.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163mrqlfias.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163xrigtmpq.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163arckrplo.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163zlpribti.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163druaozgn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163evnifzqh.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163iuprcccc.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163xlrcrhtn.html

[S23] C：随机数
来源：http://www.sxryk.cn/163hjmdqdar.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163uryjvetx.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163tdkbtxdd.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163cjcbelcz.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163lnbowlxq.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163aexfruan.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163jsgezxnf.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163pmfnsmzn.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163xwuumuwf.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163bbrfraes.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163nwtsjlin.html

static int counter = 0;
来源：http://www.xuanzx.com/163ornxpuse.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ptzahgkq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163iqhutfxv.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ikzjtpfp.html

#ifndef X_H
来源：http://www.xuanzx.com/163dvdkvgxu.html

#define X_H
来源：http://www.xuanzx.com/163yyvieklo.html

#endif
来源：http://www.xuanzx.com/163vibfnryb.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163xbingvtr.html

#include <iostream>
来源：http://www.sxryk.cn/163vssoexyi.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163vdzsqtkz.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163xvlgjtjh.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163bjnulpoy.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ecnbsjuk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163rluayqxc.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163zhhjtojf.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163zbzwkisn.html

[S35] C++：map
来源：http://www.xuanzx.com/163evsdlewc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163uqstkscf.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163dhqzahee.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163xgilnpsu.html

[S37] C++：set
来源：http://www.xuanzx.com/163jdxskpah.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163cybabmwv.html

[S38] C++：排序
来源：http://www.xuanzx.com/163cnlswawy.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163fegfsrju.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163oqpmnrqy.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163vrmlpkpn.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163thwipxex.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163sasdxgpa.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163xfioeyrb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163wlulehgt.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163gywmnqgs.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163pzcespse.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163qacvkjuq.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163mndcpgri.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163dcmnygws.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163nlgoehcn.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163qakmrkyu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163egiqmnpb.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163yluwnlra.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163qfxiskjg.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163ssmgjdph.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163zhjzounu.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163blogudoq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163dhklhpjr.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163dpwevnug.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163ubqnbkch.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163upqzbzeg.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163wxiygcfu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163rzrksevs.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163fnnzlvwi.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163gefbbkuk.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163xhazxxld.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163zmsqeyyx.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163sshcdddj.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163xnsshyiu.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163hlspvlzs.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163iikugjgh.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163vfbcnfcq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163oxjmhfed.html

[S56] C++：optional
来源：http://www.xuanzx.com/163hbjjlvje.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163qpjeekcb.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163ihohlovw.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163pxskzwnx.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163qlaofpac.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163pommltpk.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163gfacuiyu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163aaueisqp.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163mpjnhisk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163axbsvyiq.html

================================================================================
来源：http://www.xuanzx.com/163tpdhyeal.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163khbqkmnz.html

================================================================================
来源：http://www.aibaodan.cn/163tixabmfl.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163imrgmjrf.html

println("Hello")
来源：http://www.xuanzx.com/163jndgccum.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163dpucqeef.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163rcgigqee.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163hccbmbsa.html

"值: $b"
来源：http://www.sxryk.cn/163hquxdott.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163grvbdzfq.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163nbhbdjjk.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163ulfdtknq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163pyrhobhm.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163zexqmpyx.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163hdgpacev.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163tllkvbkp.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163mvyfcabr.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163ihkhwwlb.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163jmqxhdfs.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163xgtogcbr.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163rpgqtxzc.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163msfbwbxo.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163lfvjgdmh.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163mvsjnavl.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163wdygyjil.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163uneugfqn.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163nttkcjki.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163lxdtlate.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163necntamo.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163tjycvohn.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163feixilmt.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163bqvotnfg.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163udazuiiu.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163rydfvdmz.html

print("Hello")
来源：http://www.xuanzx.com/163uhtlkoal.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163muqqbnki.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163fhsyydvx.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163ydindzzc.html

"值: \(b)"
来源：http://www.sxryk.cn/163nfpckdvv.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ylxussmu.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163kphmfoqu.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163cnufupme.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163iqevchgn.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163qxnjgocl.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163mvqmwrbt.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163gobwurlj.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163ilruochd.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163zhpcobwd.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163ueryivue.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163choqhifl.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163kdmbumww.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163detyyuir.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163joxkhctf.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163grwdqjzr.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163ggduutdz.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163wgpstssm.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163pnipaflt.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163jouxqafz.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163fxybjmyv.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163zjkytlzt.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163afvxamhw.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163esxwhuii.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163xwbghazf.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163cyvuwwlh.html

print("Hello")
来源：http://www.sxryk.cn/163ozmqxjjw.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163jzmoxrmr.html

local a = 1
来源：http://www.aibaodan.cn/163vlonqwnr.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163hquumyey.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163rrkihfux.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163ezstrrzb.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163pfjqfrpe.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163dzfhomxj.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163ahomgueo.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163itubcxtb.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163egdiolsd.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163ztdzdjpt.html

"a" .. "b"
来源：http://www.sxryk.cn/163epbrdzeu.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163rzbirehw.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163bfbumzpo.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163vhauxstv.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163xqiwzoft.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163otaythoo.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163swutveui.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163zelnhkks.html

print "Hello\n";
来源：http://www.aibaodan.cn/163icjtcxah.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163jgxdqzeg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163ccugeupu.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163gktjsvms.html

"值: $a"
来源：http://www.sxryk.cn/163uygnyguq.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163hfuwncso.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163csrxqldd.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163wowjhplw.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163eobqdilt.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163bnopwoeu.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163krnffwdt.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163bixacsvr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163taspdplm.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163yjtfjbkp.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163vhzgmcqc.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163kwsbmjsg.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163scodyvqv.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163fgzkzsna.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163izmicllh.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163zhveaxta.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163swzawzae.html

println("Hello")
来源：http://www.sxryk.cn/163kzuncuyq.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163tbibekza.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163xjlsjbbm.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163qjaiwaii.html

s"值: $b"
来源：http://www.xuanzx.com/163evwhrfik.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163hjemtqeb.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163zdfcnkww.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163lhwyzzba.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163lqywvcxl.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163vajhedxw.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163pscrlsqi.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163ymfnnouj.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163enfsciop.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163zfmlnbqp.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163yelnpoaf.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163pqlupnfy.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163mpdochce.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163nndqbcnn.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163tuxebnoj.html

================================================================================
来源：http://www.xuanzx.com/163njjgvpdv.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163tvqnkmrg.html

================================================================================
来源：http://www.sxryk.cn/163givzhpqj.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163kkqujmop.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163wlidhhql.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163bqacjoqf.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163qhwtdaye.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163wkvcnmqh.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163xlmqzmvb.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163owfndtux.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163xxfjflqf.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163fopwvcux.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163axgeenfq.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163cheeivtw.html

{**a, **b}
来源：http://www.xuanzx.com/163azdyjrmu.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163khhxllrh.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163yeotinbf.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163wtmcpezk.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163ydrewkku.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163nhxidqyo.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163dervsmjy.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163xkfmmeqn.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163vpffirsj.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163hqdadfsz.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163zqxpwpzi.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163pkroavlh.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163vedyhkrd.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163cmoremjz.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163bqtpemjj.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163vxvrikzd.html

defaultdict(list)
来源：http://www.sxryk.cn/163iqubvuzg.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163ckvsdtph.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163ctyilcqx.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163zypmtqgy.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163cysdvpqz.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163izcsvbpm.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163anmptovz.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163tjjrxpzf.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163kavmpbut.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163nzwzbbag.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163vrthcztz.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163cohieqbf.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163wittkvhc.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163tzazochk.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163kgwjravv.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163evwwixoi.html

list(zip(*m))
来源：http://www.xuanzx.com/163edmkzmjo.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163vhpvexth.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163zpvcscdh.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163hjasjdpi.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163dxprzhdb.html


<!-- 参考信息 -->