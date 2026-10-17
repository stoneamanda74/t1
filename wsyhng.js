外链999!wailian999！

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163paklctet.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163itbgjeyu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163urftsnup.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163jiwhjgqm.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163hobbziau.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163vnfjtfkl.html

time ./run.sh
来源：http://www.sxryk.cn/163lhkdsxkz.html

================================================================================
来源：http://www.aibaodan.cn/163wiiztnqj.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163nzotdjak.html

================================================================================
来源：http://www.sxryk.cn/163cwoawsbh.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163kdobcfaj.html

#include <stdio.h>
来源：http://www.sxryk.cn/163aibmlyht.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163yjvlypww.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163qhkrdonu.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163angziqsn.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163jpbkfzif.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163oloiwans.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163rjtczxad.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163wtavfdug.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163qvnyvwom.html

strlen(s)
来源：http://www.sxryk.cn/163dvpeiijk.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163myhfgmqf.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163vztwgyrp.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163mulvcwmy.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163bdftaxko.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163mhjxlhww.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163aztjglqb.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163etvmsnvg.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163hocxxdst.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163tswxyekz.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163gqlfbgqu.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163ebjkqnaq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163pgcbawew.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163trisgntq.html

fclose(f);
来源：http://www.aibaodan.cn/163mrfuuscn.html

[S12] C：写文件
来源：http://www.xuanzx.com/163fqpvyvgr.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163ikcykkgg.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163dukmkqit.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163oafjvsym.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163fetoqcfb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163gfeeoses.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ekymwftp.html

(double) a / b
来源：http://www.aibaodan.cn/163awfjtkjq.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163erxxqjpc.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163wwjbdssz.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163dsbhbdxb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163atvbyytt.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163twxerjqh.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163bkkoaoir.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163olbngxhl.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163zkrytvdv.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163nytcnwgh.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163aprmdvsr.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163dbyurkmk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163pyzegbkw.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163wryddplk.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163qkprwdof.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163bdtotvxj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163hapxuazq.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163kszimzlw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163gykgoidv.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163txziafnk.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163zjxrilio.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163fizlptmi.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163pokohqka.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163tzlhqvqb.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163jdyjdlux.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163bkdigztl.html

static int counter = 0;
来源：http://www.aibaodan.cn/163rkhvrero.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163ymsnprcb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163cyxqqrbw.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163rvytoisi.html

#ifndef X_H
来源：http://www.xuanzx.com/163mnohmhur.html

#define X_H
来源：http://www.sxryk.cn/163gcjppcfw.html

#endif
来源：http://www.sxryk.cn/163kybstked.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163fpxakocw.html

#include <iostream>
来源：http://www.sxryk.cn/163nwctqssm.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163gkccawja.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163wmkxmbfn.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163rdamcqun.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163cmkrxkuv.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163uilxlkcs.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163cuqmeoos.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163kuqogmjp.html

[S35] C++：map
来源：http://www.sxryk.cn/163thjzxqhs.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ohmdbvbw.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163bbeaoufe.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163fmzyhozc.html

[S37] C++：set
来源：http://www.xuanzx.com/163vbschigp.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163dtityqmx.html

[S38] C++：排序
来源：http://www.sxryk.cn/163cwhlppbv.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163vfrbwklu.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163pvrmkgpw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163konkfycy.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163gacpwjzr.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163tazpjuiv.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163effdulyy.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163kmcdqqdl.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163ssgiodzf.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163nxqvlzys.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163agtpwnfh.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163litdjlfc.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163zbniqmfh.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163xlsnjqqs.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163ehgommic.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163dsmkllqz.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163buxnopnk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163laudzygu.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163iowvjvpx.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163kswyezts.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163izlhozaw.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163aqgxcscx.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163qkwirmpm.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163ovnyjise.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163eteqqwxf.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163lyidmggy.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163gqeowceb.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163ypsvwmpk.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163jydanykl.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163xiaavyys.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163glmoqbvd.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163wiizwjul.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163mcrrxuvi.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163vhquqnvq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163hjskcpvj.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163okqbmymc.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163uintctcj.html

[S56] C++：optional
来源：http://www.sxryk.cn/163eevxclzk.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163pwlyampt.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163npwzokrg.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163ifbfdtog.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163dvgtyboy.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163acfpapef.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163fsahihmu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163bnzkatfx.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163hgwkrnzs.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163cuhqfrfa.html

================================================================================
来源：http://www.aibaodan.cn/163ukjyrqbx.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163pxocdeja.html

================================================================================
来源：http://www.xuanzx.com/163motdfytp.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163koeujayr.html

println("Hello")
来源：http://www.aibaodan.cn/163urvcsfeu.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163uffqydgg.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163wapsobgh.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163vaszrvcn.html

"值: $b"
来源：http://www.aibaodan.cn/163kbpfhbvh.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163eibymrxn.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163whdavodq.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163lgvqyjvr.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163drjmbfco.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163wbwzkclm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163xopzqbta.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163wwdefkng.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163cuxlbgvb.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163wbkyzuse.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163jlkfrczx.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163kyhcimvr.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163tkpukmtj.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163okmqelwq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163tctfephi.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163ogwamzjb.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163mzhhsqbi.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163mqmvvvur.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163lwjpqcgo.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163gxerkpzu.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163kucdiahf.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163rsphvhtw.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163jpwvmmmp.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163rdkcauhy.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163sziivaml.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163uurfikbr.html

print("Hello")
来源：http://www.aibaodan.cn/163ypugidbc.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163znpucvbm.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163prmworyf.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163qiczwytq.html

"值: \(b)"
来源：http://www.aibaodan.cn/163hpwfyaxf.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163ezkfdqfv.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163dghwhlme.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163guandluq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163izlyecbi.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163qvabfzqe.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163jjocmmwd.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163pmlukrrm.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ypnturde.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163ltavcofb.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163wwmozssw.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163gcuwgqov.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163vcafusom.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163yctdllsi.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163griffllm.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163rznnoapu.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163mhmkmllv.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163scdzbknf.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163hmypsrsf.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163gtvqqxtg.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163cizontmb.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163ouiegjnm.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163gssfcnyw.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163eqgtplxj.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163ctxjrwhi.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163xmcviveh.html

print("Hello")
来源：http://www.xuanzx.com/163zmwlacuo.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163fuiffwbz.html

local a = 1
来源：http://www.sxryk.cn/163lrcntvwq.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163ucbvxrhj.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163xuthlfpl.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163hhbbmhvs.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163qyevifml.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163ukbmiuvk.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163kwxaewng.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163pkiboptk.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163xmtkppgq.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163tjywixpp.html

"a" .. "b"
来源：http://www.sxryk.cn/163elxnbmzz.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163ejwhqctu.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163iykcokhq.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163wzphtyar.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163pwzvbvew.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163smoxmrjh.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163kpislyhe.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163rklgksge.html

print "Hello\n";
来源：http://www.aibaodan.cn/163ogcrwble.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163vrxnyluz.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163pwxeqrco.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163orzvyxxv.html

"值: $a"
来源：http://www.aibaodan.cn/163fshpjcvz.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163jhphdmxa.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163hpoahtbo.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163hsugxawq.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ypbskycr.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163ymggatia.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163lfjncfvz.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163wiynuvkx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163wuhxnolb.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163fvoazkda.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163gfqsheoc.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163ywfdudxy.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163rmjulwah.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163onqllasi.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163cjnegpjp.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163lfctqymg.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163yhtreeye.html

println("Hello")
来源：http://www.aibaodan.cn/163uabtgyyv.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163aecbatgw.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163hgmppbrw.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163kqewknis.html

s"值: $b"
来源：http://www.sxryk.cn/163kyqcxxdc.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163rbrjwcem.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163nbgvscwz.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163npzrtwjt.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163oggziauf.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163utjgrbng.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163lhswrppl.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163qwislnez.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163peemwfdv.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163psslblzi.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163bgjfqcqz.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163kelcrngs.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163gsbvvijj.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163jxwsaxxs.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163yumxeuwh.html

================================================================================
来源：http://www.xuanzx.com/163cqdoqdjg.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ubnmkvrc.html

================================================================================
来源：http://www.aibaodan.cn/163kxcdkdsn.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163jospqanh.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163xhbgovaf.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163ispcsvqo.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163jmvrnwzl.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163eepcqzib.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163bycnjrug.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163pbnrnjqu.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163poxlmxwm.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163olhfvpwp.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163jttcrups.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163gdqggnwy.html

{**a, **b}
来源：http://www.sxryk.cn/163bvkbbmxl.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163xmgsqvky.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163tkxohlip.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163nsewzwpb.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163goidrfgd.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163mignixyk.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163tqsetxfm.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163lcdmyszg.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163ofiakhjw.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163blnfjvch.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163qzjeqnfx.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163vfdwgdar.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163jydqspat.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163zsafvtwr.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163jpjwewzj.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163wfubgted.html

defaultdict(list)
来源：http://www.aibaodan.cn/163yhjyiciz.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163harryjnn.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163jpgltyjz.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163gvdonswi.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163eepabpvh.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163kioavmte.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163gtqjbuxs.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163kuqdcynl.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163solszion.html


<!-- 参考信息 -->