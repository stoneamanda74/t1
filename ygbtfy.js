外链999!wailian999！

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163hlzzanup.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163qamltubv.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163rqjeidjy.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163aaemkimf.html

strlen(s)
来源：http://www.sxryk.cn/163sjzkofoe.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163oqohmywn.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163sxkyxmvp.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163fsciqcvc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163jyewirdi.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ucqqbkvn.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163biumbpba.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163dgjbuhqv.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163gbjphpnz.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163afsbatmv.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163hzwfvxgn.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163euzvzbof.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163puxmeywr.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163aprndtia.html

fclose(f);
来源：http://www.xuanzx.com/163budxowll.html

[S12] C：写文件
来源：http://www.xuanzx.com/163mnsqcuqs.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163hltcobel.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163fimfihls.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163lkafuign.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163sblqqybn.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163maszwbcx.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163brfyemal.html

(double) a / b
来源：http://www.xuanzx.com/163embfuysj.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163noyfijiq.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163xdakafvo.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163riljscqi.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163hunpmdjz.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163qofohryj.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163nvvjbqbv.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163jyxymdde.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163xctkgcgp.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163nihqkavc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163wqvrmosb.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163yhnsanqa.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163qlstopjw.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163vxerpoyh.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163lxyjdooc.html

[S23] C：随机数
来源：http://www.xuanzx.com/163kdpbghkj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163coechivf.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163uqaheqkt.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163jmhnzrro.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163bjobpvli.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163hveqigvx.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163nhrqjnxn.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163xqoezlks.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163gdzwdwet.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163uuvvqkgk.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ocjgklvm.html

static int counter = 0;
来源：http://www.xuanzx.com/163jrojribi.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163smnieojb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163zatxyquu.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163jbdqicya.html

#ifndef X_H
来源：http://www.aibaodan.cn/163bspjjuaw.html

#define X_H
来源：http://www.aibaodan.cn/163yjptbqxo.html

#endif
来源：http://www.aibaodan.cn/163qffyqcpf.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163pqrxkeoq.html

#include <iostream>
来源：http://www.aibaodan.cn/163rqdcgipc.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ybyiuqjr.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163mphotzoa.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163bkfsrlkm.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163zucqscax.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ybbnfqne.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163jtuqlxnp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163jsnohaxe.html

[S35] C++：map
来源：http://www.xuanzx.com/163ybuocqqg.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163zchvcnxj.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163bamljzpn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163malssoyo.html

[S37] C++：set
来源：http://www.sxryk.cn/163tbjqlsyy.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163gfaflwmu.html

[S38] C++：排序
来源：http://www.sxryk.cn/163ytzexypi.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163hkihyqcn.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163hzchlamx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163hdeankcu.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163jfpyjsmm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163vgcbdyyy.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163nnoitvxs.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163mskwxcyr.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163jlkalkdr.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163laceowrv.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163rkvlejlm.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163voqbcwby.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163ccuspdyk.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163oasbgmjn.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163tjqabepc.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163wgsqargk.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163tjkeumii.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163lbpkmnzh.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163xxglmkke.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163iryqzfvy.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ovruuosx.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163jukidcwo.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163vdkvxluc.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163ikxowsbi.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163alsyancx.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163gatsureo.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163dtvehsgd.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163dylosezg.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163sxovxiqy.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ovfyegid.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163pbapfgdm.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163cpbjtfvz.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163ijvlqapu.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163kmmxwgen.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163qquikdeu.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163prjdrrkd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163slmbptfe.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163smklagpn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163cswsnmmj.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163phezxnoa.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163gbswqrnt.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163rnnutdbx.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163emlifrqk.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163cztzacfz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163trxhoynq.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163dddwqltv.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163grwtelci.html

================================================================================
来源：http://www.aibaodan.cn/163ttnnxchi.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163sgxxchpm.html

================================================================================
来源：http://www.aibaodan.cn/163orbcaruz.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163swbgvyun.html

println("Hello")
来源：http://www.sxryk.cn/163qdwgygie.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163xhipofkk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163wjiptrpf.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163ybskpmpq.html

"值: $b"
来源：http://www.sxryk.cn/163laykrsvy.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163uidqezqz.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163cwxjduan.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163utiwceyt.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163obwwypqv.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163zvjsldad.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163pnogxxbv.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163mimsxkql.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163vqixvfke.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163ibbgzyan.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163qufcyhvj.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163aieyyqpw.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ccaawtzn.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163qoxrdqqq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163jfmojxem.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163qpzwmiuf.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163ozufezes.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163tpgcbpql.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163qisdlzlu.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163ihflmaqc.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163wuacfzmi.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163cctvuvll.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163fqmrfhjj.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163newiqahc.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163vcdlavhk.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ezbfxehg.html

print("Hello")
来源：http://www.xuanzx.com/163ordckhdx.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163hqugcakp.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163xwicxswy.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163uxelqhkn.html

"值: \(b)"
来源：http://www.aibaodan.cn/163fjtfqgre.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163aqkchuyx.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163xdlydrir.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163mrdcpfwc.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163mlenhfjl.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163mbizedls.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163aqqpjvxb.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163epfjznkg.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163dxgojyga.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163pubjyapx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163yupgqynh.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163angtflil.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163migscobi.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163ygpngiqm.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163qtrhvfwk.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163ihbumgku.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163uvnwfuhw.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ujuefcft.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163oloetnmu.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163rzcnmlay.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163avalglay.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163guzwxhgw.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163pkphrydx.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163fzjjpkyi.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163vkrejruu.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163yirrjatn.html

print("Hello")
来源：http://www.xuanzx.com/163vxvfjubn.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163szcrthwj.html

local a = 1
来源：http://www.aibaodan.cn/163xgiyohxx.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163ajljrbvj.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163kfllnewe.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163gcdlqiqt.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163sxqfyabg.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163uzflbzuo.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163juitlhkv.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163djvlpfgn.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163rpzwnmbx.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ugjyubvv.html

"a" .. "b"
来源：http://www.aibaodan.cn/163japyfqzk.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163qhgaozuh.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163vscoouwn.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163qvmiqdbv.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163qtrodapl.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163gqcedaji.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163ygohhrjn.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163anzenpin.html

print "Hello\n";
来源：http://www.sxryk.cn/163ulmrcihk.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163hwrudnjj.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163bdwptuxh.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ohiryehs.html

"值: $a"
来源：http://www.sxryk.cn/163xsahmsxn.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163eknfjzdx.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163orvcbtrw.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163mvrnmjiv.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163imdmeyhx.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163zlnctgmo.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163yzqheomm.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163jekmnttf.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163ozncgptk.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163fnvutpte.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163qmigchqb.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163bvvffign.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163rzthqyky.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163ynoawpyl.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163ugycskkx.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163sudgiczi.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163nfbvimul.html

println("Hello")
来源：http://www.aibaodan.cn/163vzxcjgjq.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163eggkvaae.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163jklrfkmd.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163egwumesb.html

s"值: $b"
来源：http://www.aibaodan.cn/163sggjteiv.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163njympsls.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163nfsxvjvp.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163jsvtnobn.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163fsopxlgb.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163ptlrkjqv.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163nvzteveh.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163auxsvtdy.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163eazfplhi.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163uquxvuga.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163rrjfdhaf.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163rpjzrqeo.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163jnxrkikx.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163zwwnylim.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163qrnluqmp.html

================================================================================
来源：http://www.aibaodan.cn/163ylfrreoj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163iyddigcb.html

================================================================================
来源：http://www.xuanzx.com/163euqwrdzn.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163cmilmwbi.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163tzkcmvze.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163oloyemac.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163beyikbxe.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163sqkivrnw.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163rfbxnyjv.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163vohmqduh.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163btjmzugv.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163ceuzhfxq.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163pverdenf.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163qkxgsmcv.html

{**a, **b}
来源：http://www.sxryk.cn/163rxfetbsb.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163badwkcmn.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163rfsjpbyi.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163bsutjscx.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163qsyizcfu.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163mydjcdkt.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163eisxwqyx.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163ijkrmlpz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163kybzxivf.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163lvwxwsau.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163nzgihsid.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163kicyppnt.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163pekjtgiq.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163bbhhcqgk.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163cqguwuet.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163oomoenka.html

defaultdict(list)
来源：http://www.xuanzx.com/163wfcppldr.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163caxixiaf.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163qkaarpyy.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163qcrrceco.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163mdcazryx.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163gkfcfekh.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163ouhsrxds.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163lrmnrhvz.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163dimqfgur.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163mviujxlx.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163tgzoeyzk.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163crhstofm.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163mbufbvyc.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163moncfkbf.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163myizikbw.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163uvpjrwch.html

list(zip(*m))
来源：http://www.xuanzx.com/163usbtzmnr.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163dllmpgqx.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163pogkrxpz.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163cgkguejw.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163xryiyhfc.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163sqexqvha.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163xkqmlate.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163uivxtyed.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163dkrdkduh.html


<!-- 参考信息 -->