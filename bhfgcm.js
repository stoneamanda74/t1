外链999!wailian999！

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163lojdketu.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163nipiipaj.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163cpsjdfzl.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163vjulpeix.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163rrlzoiup.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163ebovdphj.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163qtchumbh.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ymyetlvt.html

strlen(s)
来源：http://www.xuanzx.com/163ljgyhkkc.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163maapulpu.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163isfxrimc.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163lipkvkpr.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163vkjwskuk.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163ehswlcta.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163xgerpcpz.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163ueueprnw.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163wjogbbxw.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163wetoztui.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163kmkohyht.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163pmuaxnqu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163xfamhodr.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163epfpzpdz.html

fclose(f);
来源：http://www.xuanzx.com/163vhvjbloo.html

[S12] C：写文件
来源：http://www.sxryk.cn/163elrvpcuf.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163ygwhylvc.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163ptddzwis.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163tmnobodo.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163qqjcjpht.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163wljtstog.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163fuykhxya.html

(double) a / b
来源：http://www.sxryk.cn/163xjknpirc.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163zxextpsf.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163zjqkdjvg.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163nlgjrmjy.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163utubkwmh.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163yfdcxsfq.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163pgmjnmgh.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163gakecvvy.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163hmwotbok.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163kdgswzxl.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163yqaozhep.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163zzcoktnh.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163hanqxqbb.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163lcgwuqyy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163rhwhpexw.html

[S23] C：随机数
来源：http://www.xuanzx.com/163vaxvnkhr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163jxmatomg.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163lyqycxwy.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163cwgvwjls.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163fzswuubx.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163gqyomkbh.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163uslmjihn.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163jebdiyoy.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163xjvsuwnz.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ehnebapk.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163wpmqfkpe.html

static int counter = 0;
来源：http://www.xuanzx.com/163kklmzvdt.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163mnmosasm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ekfchjav.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163nqhrqbtg.html

#ifndef X_H
来源：http://www.xuanzx.com/163cwefdysh.html

#define X_H
来源：http://www.aibaodan.cn/163gtufyzpo.html

#endif
来源：http://www.xuanzx.com/163qzmnbxgv.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163jevelzsx.html

#include <iostream>
来源：http://www.aibaodan.cn/163tpugbcxs.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ygjmjqcp.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163yukjwhiu.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163khdxofdc.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163qytmplrd.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163egpavlty.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163jtedlmwb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163phctcxck.html

[S35] C++：map
来源：http://www.sxryk.cn/163dcfpjdlo.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163yjiiejrq.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163oahpxvnq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163fbvvmnrg.html

[S37] C++：set
来源：http://www.xuanzx.com/163kfsjnrwl.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163hrvoxbfn.html

[S38] C++：排序
来源：http://www.sxryk.cn/163hjtagxpg.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163pudhfkbz.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163zdnrjpni.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163dxwgxftm.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ldpkyyoh.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163qlrmbdti.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163xakjolgb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163cheriykf.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163wvmwjzpg.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163dlzgfypj.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163eddobxtp.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163rackekst.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163ewgrjunp.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163tuvmrtak.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163duapjnrz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163bgaggchl.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163ncwkmckq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163rsqeddiu.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163rozyqkza.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163gngibami.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163wikzrcpb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163rptmbjjq.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163gunhotzr.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163cpsqjvas.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163hcklqasi.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163hcscvpko.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163hufhgcfm.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163bvqwvuvt.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163hedqfmor.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163jmidbsgl.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163warfceul.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ysnyssnu.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163eiheyarn.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163tinocaey.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163guncuonc.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163cknvysjz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163xlbcurdg.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163yjpecvvk.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163wgfycywj.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163mwhhpmum.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163wqoxobgt.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163fqveoohb.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163bbfcjrjt.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163bmvcakpz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163lxzvbsou.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163gdxckpdy.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163ijcvguus.html

================================================================================
来源：http://www.xuanzx.com/163ipmjiosd.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163okvzljhu.html

================================================================================
来源：http://www.sxryk.cn/163bivjrxng.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163kwjfjktn.html

println("Hello")
来源：http://www.sxryk.cn/163nuwvkxsn.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163hwawmaas.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163qoyhcbyu.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ksrtdxda.html

"值: $b"
来源：http://www.aibaodan.cn/163ixgyufda.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163vgjozkxw.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163hpcyqgdu.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163glgxsuzk.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163tzdtpfnt.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163xlvkjhbt.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163amkalotx.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163jwhlrmsw.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163bytcapsg.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163mmagviyw.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163xtckkqkz.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ifofcvgn.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163vzfyevgb.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163prhkaqqp.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163scgpbpjq.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163zhdtkunt.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163rluowyls.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163rxrexijf.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163chxuctcz.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163jvbofcol.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163xzrhsrnx.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163qvtdqyoj.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163tqqahdtu.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163elwxzsfn.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163zcfvwcfp.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ozgishjw.html

print("Hello")
来源：http://www.aibaodan.cn/163zrgpokco.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163caibiyeq.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163fjdmoaen.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163wqsdzwgb.html

"值: \(b)"
来源：http://www.sxryk.cn/163gzgxygoe.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163mtedzyhx.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163yptpnczv.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163odhdqned.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163lexizahc.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163hmllrxkb.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163chuzolok.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163ccpjreqb.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163myngbymb.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163jlihftdf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163ibebhxkq.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163dppejgkp.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163mdybclge.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163edfnvjcx.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163vyphkxju.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163irxsrxie.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ejhilhja.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163aygraztd.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163oewkkawy.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163ivpydjla.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163sdttwglv.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163fgyyzxqi.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163uhgkapbw.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163xegdrjvj.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163aaksdxrx.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163faxufbtf.html

print("Hello")
来源：http://www.xuanzx.com/163motwboce.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163ptcyvegv.html

local a = 1
来源：http://www.aibaodan.cn/163ygniafhb.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163ihadluip.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163seiblzjg.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163azhiwxlh.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163ekdketua.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163tnzqvmeo.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163qnvrkfvj.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163owjfficn.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163fiwkpngm.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163sfbhlder.html

"a" .. "b"
来源：http://www.xuanzx.com/163kyciltlq.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163ufonvish.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163msxlfinq.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163qeqsoxnl.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163jfrtjwlr.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163dytnhwht.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163tuxqpypd.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163rspavjvt.html

print "Hello\n";
来源：http://www.aibaodan.cn/163bidvjvuw.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163ymaxunto.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163qhsviyhc.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163vmvrrvhp.html

"值: $a"
来源：http://www.sxryk.cn/163zbzxmlhm.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163sowpaqrb.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ddnohwxk.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163uhwlxxyh.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163kxwwkuuo.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163ywevxrpo.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163mdyqlxih.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163rqjikgfr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163oowtfskn.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163inodjcfi.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163bwbsvnzx.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163rlpyrzfq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163eqomouaq.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163ffsqwbpq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163lmuhoqyp.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163gtvlvijj.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163rmibdmzb.html

println("Hello")
来源：http://www.xuanzx.com/163qnduubkd.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163rtczcngu.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163jmvryjup.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163whohvnyy.html

s"值: $b"
来源：http://www.aibaodan.cn/163rruurjlf.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163jpsrtlzh.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163wtryzxfi.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163dunefhgg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163ydiplwxb.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163szfrzrkf.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163ocospvkd.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163bezszxfm.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163nznnzbet.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163nzrnlhfj.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163cafrzvxn.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163ciicjszj.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163yumykhah.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163mrtmglxa.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163kluqpicd.html

================================================================================
来源：http://www.sxryk.cn/163wexsqegq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ieqlvhrj.html

================================================================================
来源：http://www.xuanzx.com/163cjuvwifl.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163jennlcmd.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163pqansgtk.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163hddoztmw.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163podnsemw.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163ryoxukyc.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163snbdwtmk.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163yecaflht.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163xvdsnfyf.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163slbuvows.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ueuyesdm.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163ldzlimmg.html

{**a, **b}
来源：http://www.xuanzx.com/163dvxcllde.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163iwswcvjs.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163qrvirxnt.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163pxfrqkgj.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163swgnknxe.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163smlajyqq.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163hnrcmurp.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163itroqqvy.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163xhnxuktn.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163wesvqeoh.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163hxpzsjdo.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163amwhfmap.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163kusbtkbu.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163mxzrbgjj.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163omemivmf.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163qagwabxk.html

defaultdict(list)
来源：http://www.xuanzx.com/163cybzehti.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163cbhblagn.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163oewmgiop.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163lpidbttk.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163orouwogx.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163hxfngyuj.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163setdwnap.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163zefowrdd.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163rwhwouix.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163atbqefqf.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163nufduxgn.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163xijftnzh.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163qmsmyrwv.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163nroipith.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163xxbgkiex.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163baoonkeg.html

list(zip(*m))
来源：http://www.xuanzx.com/163fghtufpq.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163wkcdjugk.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163ljkmdzkm.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163bbenaump.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163fyiuevzy.html


<!-- 参考信息 -->