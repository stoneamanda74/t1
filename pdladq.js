外链999!wailian999！

S. C / C++ 专题
来源：http://www.aibaodan.cn/163wwgsyvqd.html

================================================================================
来源：http://www.sxryk.cn/163qdzbpcut.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163nfmqiiwt.html

#include <stdio.h>
来源：http://www.xuanzx.com/163dywklsfq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163gjxmhqnw.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163ksdpldur.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163zgynxubo.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163ihscspje.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163ltttnjli.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163mgjsmmpa.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163sxwtsbas.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163vrijjlxe.html

strlen(s)
来源：http://www.sxryk.cn/163dhyagmoy.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163gabjwxfj.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163cxeetwut.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163nnhnpoql.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163xqcpkylb.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163giziuxbn.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163rvqbjxto.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163elbhmmys.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163mjxkyybp.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163xcnzrozb.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163nfzxglqv.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163heowenyu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163zilcuoye.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163xaklkjfa.html

fclose(f);
来源：http://www.sxryk.cn/163lzeswsyx.html

[S12] C：写文件
来源：http://www.xuanzx.com/163gqaxdlmb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163etdaqqpf.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163ybgxslux.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163brnjhlid.html

[S14] C：枚举
来源：http://www.sxryk.cn/163jrazkkbh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163eprqfufb.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163givnrvbm.html

(double) a / b
来源：http://www.xuanzx.com/163paolegeh.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163osxzaqax.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163oebivoxg.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163bjkunfzb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163hpcmkvwr.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163zdmktlpv.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163nwbitdaj.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163pmjtglhw.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163yawbmcjr.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163qcuyafiz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163pdvixlcx.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163gcmwlvgi.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ecndbfue.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163yzzuuykf.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ensdlxfp.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ovitthyx.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163tjkaxsnw.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163xlyubugz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163qtdlypog.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163qmxpphxd.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163kywgusvc.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163oimdgeeb.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163qxocawfv.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163cnalsxzs.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163shcocjxd.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163vxiahjqm.html

static int counter = 0;
来源：http://www.aibaodan.cn/163pujsxvyr.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163rxpvjpyr.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163jqbajafx.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163sgidaxpx.html

#ifndef X_H
来源：http://www.sxryk.cn/163qqplqujj.html

#define X_H
来源：http://www.aibaodan.cn/163mpxziqto.html

#endif
来源：http://www.sxryk.cn/163tiadkita.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163uquhsbze.html

#include <iostream>
来源：http://www.aibaodan.cn/163packyasr.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163vcxmxjgu.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163ynijyhea.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163gmznevsx.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163uatlwhvf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163pgenklhw.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163cxslfcux.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163fyjfldrv.html

[S35] C++：map
来源：http://www.aibaodan.cn/163vkmiekxc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ifiehnan.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163dtaicovc.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163tduosmrq.html

[S37] C++：set
来源：http://www.xuanzx.com/163wgqanhfq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163gvejwpqr.html

[S38] C++：排序
来源：http://www.xuanzx.com/163namawpoe.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163fzftsifh.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163zttqscxz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163djqwierb.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163dvrzkjfg.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163npfpdptg.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ggfebrgc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163tdefyweh.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163volopoxc.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163zqjdrbwl.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163plrbppzb.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163elycfjzw.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163gbfmmgfs.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163zkielggp.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163hqextmwd.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163qqzmowfv.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163osrncbxo.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163nsenvkrx.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163bkidjvwu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163otmsvibp.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163bjshogsq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163rdjbbygn.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163kfdsvsvk.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163updpqcbl.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163xmtjuiqx.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163dxmzntpo.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163vnrqilyb.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163rbmgbazz.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163vmpvzwfb.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163icdkesqv.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163zygxyfim.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163dfsxfsns.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163dfbctqlj.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163fbzawont.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163whggrrdt.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163cxqbvmon.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163aknyuiau.html

[S56] C++：optional
来源：http://www.xuanzx.com/163hhkbwlnq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163yxesdist.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163zxckbbwk.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163hztxerok.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163gvaiwbjq.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163chsavtjp.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163yozgwhja.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163zgkmawhm.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163hoxkdblf.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163cxjecywn.html

================================================================================
来源：http://www.sxryk.cn/163wutglznm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163tukfxzhk.html

================================================================================
来源：http://www.aibaodan.cn/163snrbnefz.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163cgyvqtbr.html

println("Hello")
来源：http://www.aibaodan.cn/163sbdbqkzl.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163hkyxsxhc.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163oiomyxwk.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163getxjgyg.html

"值: $b"
来源：http://www.xuanzx.com/163yxexbcfn.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163ymqetglz.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163isdlrtjt.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163sryeirhr.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163eyyrbpnw.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163mqraplla.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163htsapqmp.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163fdpkdezu.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163qgevirot.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163tdmbjfip.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163abcgkokb.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163xqjhmgyf.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163rrzfycxw.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163phxxnbko.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163wfzvcnmp.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163udhpnfwt.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163jxxhlnoe.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163rhpomcsb.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163dmnzppdn.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163lglejjvg.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163fzomgdef.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163wvlyjqqp.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163mfxpmojz.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163sdhjwddh.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163emyznhgp.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163nxgcidii.html

print("Hello")
来源：http://www.sxryk.cn/163vlmjxyyb.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163svhzsyvy.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163uqlvrqwn.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163esonycqv.html

"值: \(b)"
来源：http://www.aibaodan.cn/163xrylycmb.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163obprirnw.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163rmzxolux.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163scsolxtq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163fhbbdlfl.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163ojnskckg.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163fogdwnht.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163cxcaitug.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163jdumltwk.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163cqefwgyo.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163oehzmayr.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163uugqnyzm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163flvstqqs.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163agtgkaua.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163jgdusnsc.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163mzzqzwbf.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163pouqvpow.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163chywexqv.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163wskqcrtc.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163rwnzuade.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163ddmpnevs.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163typfsvmc.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163bynulskp.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163reqfrlbw.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163eqbuuqxn.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163hhfgzbgy.html

print("Hello")
来源：http://www.aibaodan.cn/163dzmrjmzl.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163uqstkzkf.html

local a = 1
来源：http://www.aibaodan.cn/163aqyuvvgi.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163thmshpwx.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163wsrajnbn.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163njbqnhgt.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163oxffsucm.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163owrtiovq.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163jskjaefz.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163viaiitah.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163cwsqrzgo.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163byfakspe.html

"a" .. "b"
来源：http://www.aibaodan.cn/163rfafikpl.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163gzxdwmlb.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163vrapdxzn.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163wriainfg.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163cqqkisad.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163iiugzbzy.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163ohbqaqzc.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163mwsfndfk.html

print "Hello\n";
来源：http://www.aibaodan.cn/163mbpdsaie.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163yvhtscgf.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163apaxuzvw.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163uaqicyty.html

"值: $a"
来源：http://www.sxryk.cn/163sbjwwnbz.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163kfibypyw.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163aijmshyz.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163scqiqare.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163coayhsrt.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163zfwymdsr.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163bfdvsuqn.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163poltnvca.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163kiqlnejj.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163sdcxealw.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163axryriwn.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163gcrbxorb.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163dhnkqhvr.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163hdisudey.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163uwrfejap.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163gsiicyge.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163rnylkjbg.html

println("Hello")
来源：http://www.xuanzx.com/163sppycxig.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163zyahtlve.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163ablbzldm.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163pekuberi.html

s"值: $b"
来源：http://www.sxryk.cn/163zijvfzge.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163lyxmmpoe.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163rgbdxlps.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163kjrgjvay.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163yhpnnvll.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163cflkbjpe.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163lxthyrgz.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163myyteild.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163ftbxrkdn.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163bejwzywi.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163uvwsghzj.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163reesysip.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163llvlyepu.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163gzqtelrz.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163vjchuaud.html

================================================================================
来源：http://www.sxryk.cn/163ixzpcceu.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163aoyrocit.html

================================================================================
来源：http://www.xuanzx.com/163vfvhuxys.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163poasvntr.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163ddncrrlm.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163pykmzrph.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163znlqchpz.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163tjkswttt.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163lhkpzbpd.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163zmsmxori.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163ldvampzr.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163rqtxvayq.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163nyeybjzb.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163otnuglwg.html

{**a, **b}
来源：http://www.aibaodan.cn/163uyafroev.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163tqfuxcbi.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163wbulqujw.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163gwdqrqtc.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163nddzybuk.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163kefcgiss.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163iphogkcm.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163wssewioa.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163spkeyhrm.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163tbiwrmsx.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163gbvxwagz.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163boqlsrgh.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163snlilzxj.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ujwbirzy.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163mfskcymm.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163jksnkziv.html

defaultdict(list)
来源：http://www.sxryk.cn/163gopbcgyt.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163shwzfndw.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163flbhtcfo.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163hkltwysd.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163kpahxnfl.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163lyxpqzym.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163pxtcpwxp.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163migtopbq.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163brwfkbxp.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163ynesmhxg.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163uqeaigsi.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163czitokye.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163fuvzmfzq.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163rjnjrkgu.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163hcxiicqj.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163aglivhfj.html

list(zip(*m))
来源：http://www.aibaodan.cn/163fpybdmbf.html


<!-- 参考信息 -->