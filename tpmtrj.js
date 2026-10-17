外链999!wailian999！

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ppdwhvfo.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163ojhuysqc.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163yzodqruz.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163knvywxrx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163lfuhgxnp.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163zdypjdbu.html

time ./run.sh
来源：http://www.sxryk.cn/163gbfdtyxf.html

================================================================================
来源：http://www.sxryk.cn/163jskztsdc.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163yqvmrxma.html

================================================================================
来源：http://www.aibaodan.cn/163ykzafeum.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163mvvhcqzk.html

#include <stdio.h>
来源：http://www.xuanzx.com/163svumgkwq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ackwouyt.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163ebbkbzzz.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163heajnsuc.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163fkpcmlue.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163nixpbbxg.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163vpdcqsuu.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163amlrlqsa.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163hrqjijmr.html

strlen(s)
来源：http://www.xuanzx.com/163kxvweohu.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163pimlyriw.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163esoeymzs.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163xwvpucay.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163griocyfc.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163qpzzprgj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163zlthrgck.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163rziohmvi.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163tplimimc.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163bposkhak.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163pfdmeyiu.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163ipfkuphu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163jeuwsivv.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163lzrouffm.html

fclose(f);
来源：http://www.aibaodan.cn/163elgbwnnw.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163qkzyzjid.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163iuwrrwbe.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163xspxmgha.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163yjvkvpav.html

[S14] C：枚举
来源：http://www.sxryk.cn/163wwaxxxup.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163uvogosga.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ctkgaqqf.html

(double) a / b
来源：http://www.xuanzx.com/163dwkcxqta.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163vvpmhhxj.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163lpffyjzo.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163nzwsnfyk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163jrkklzva.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163wkbvpqeq.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163dqidwagr.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163vqxxbcst.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163fupincud.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163qkkoigzl.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163adbdtuiy.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163oesgxxua.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163giyagfef.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163oiustdbb.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163krwqyozj.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163utxvovgo.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163lfhvgppu.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163znsoesak.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163cdjoxuyq.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163hbawslht.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163drfjnvxq.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163jqdjjhjk.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163xyxpnngh.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163hvzyclit.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ocwlnldu.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163gyrlxncz.html

static int counter = 0;
来源：http://www.sxryk.cn/163ksvqkgka.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163fyxlvyht.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163byqrznhi.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163owrbnjff.html

#ifndef X_H
来源：http://www.sxryk.cn/163rcpnbdhi.html

#define X_H
来源：http://www.xuanzx.com/163opcfozst.html

#endif
来源：http://www.sxryk.cn/163fdvetfac.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163xyvtopjb.html

#include <iostream>
来源：http://www.xuanzx.com/163wzmcfgsa.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163adpqmchn.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163hmzukkin.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163nzfykmso.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ekldofps.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163emscelvr.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163gvhmdazq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163gpshqmkf.html

[S35] C++：map
来源：http://www.sxryk.cn/163chaekdwt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163kfspfdpw.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163oewstsol.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163hapacxgm.html

[S37] C++：set
来源：http://www.aibaodan.cn/163jxbhxehg.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163dhmvyjri.html

[S38] C++：排序
来源：http://www.sxryk.cn/163rqswvsmc.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163imurghha.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ptqmhbou.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163oaajdfeo.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163ivjbktlg.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163mdbtzjkh.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163ttudnnkm.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163xegbuftw.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163uvtaevnd.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163uegxbejd.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163zmvusvgw.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163cwajdfrj.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163yjhurrij.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163dmhixdgo.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163gpvzrrvn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163nxypeure.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163stlbkrqu.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163tcfkaybs.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163emtubbah.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163gcioydwu.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163dampmndj.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163qibpltfl.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163dkbshfmu.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163tvjuhrki.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163choxspln.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ulfylwvm.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163eazzmitr.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163upvhsstz.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163kvqexmoj.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ilardjio.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163konvmafe.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163mpgqdkrf.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163tkoqfhdj.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163uihsfobo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163niorbnkw.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163mldoyxot.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163goxnicta.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163tcwllyzj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163fwibkocl.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163mhmdrlah.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163rxifsnqj.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163lkfytugj.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163wyonarmc.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163suldsgvl.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163voltvago.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163nlskwcbj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163balaavkc.html

================================================================================
来源：http://www.sxryk.cn/163sjeopouf.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163olpkyhim.html

================================================================================
来源：http://www.xuanzx.com/163ghgyunrw.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163ltegasdm.html

println("Hello")
来源：http://www.xuanzx.com/163ipffmblc.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163qzobbpck.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163matsxepx.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163vvysrjqi.html

"值: $b"
来源：http://www.sxryk.cn/163dcnnbfja.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163vvragcol.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163qrvbwjra.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163xejhuhaz.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ypklbpts.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163tbleqopo.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163bbwjzgfn.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ssbxjhmn.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163tilcniui.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163bmbafrzd.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163ibzcrkcf.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163pekeuyid.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ujnnfdtc.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163vezxqecd.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163vnpyjblh.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163webbiwxs.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163mxhotdyg.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163qqomjrhp.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163ipcvakem.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163krldqvrf.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163frwzwtyt.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163kqrgjatu.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163zyfjucyr.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163hrwoizsm.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163vaenmbea.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163jamawkhh.html

print("Hello")
来源：http://www.xuanzx.com/163ihmrqtzo.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163iqvfdvtp.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163klpkplwb.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163fintroah.html

"值: \(b)"
来源：http://www.aibaodan.cn/163ubxppexq.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163naednttk.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163awhzctzg.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163favxgvdk.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163awstcaqa.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163jihjmwyc.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163mhskvpog.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163udbgidhc.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163bjmovvjh.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163vfzpwvoa.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163dcpbauiy.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163vgpfmihd.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163uerascth.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163fgpcpnns.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163cbdozvdf.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163fbtbblpe.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163yejsozxu.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163fwyeeqkk.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163urmdbvhl.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163elluggau.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163syrysmzk.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163uuqnwcjt.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163goqpvnkm.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163anmgnspa.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163vmktqagt.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163ydsmpwjw.html

print("Hello")
来源：http://www.xuanzx.com/163owucaynu.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163gkajasan.html

local a = 1
来源：http://www.sxryk.cn/163vtzqycvi.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163scrxjurl.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163bepywpka.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163xdsbcmdd.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163wvmelrbf.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163qhepzlkx.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163ytvwxgty.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163mnbgqdax.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163vazrqfnu.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ygzfsuze.html

"a" .. "b"
来源：http://www.aibaodan.cn/163htydrlkv.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163rypvecrc.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163xqqhkaag.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163zfvrekqd.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163rtcfncuu.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163lsuowsup.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163snhhejfe.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163qmzyifzi.html

print "Hello\n";
来源：http://www.aibaodan.cn/163zlcfnghx.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163bydfpflg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163imaytqqi.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163eztoxxpf.html

"值: $a"
来源：http://www.aibaodan.cn/163wqsrsdmv.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163pdqhvsya.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163colxpvnd.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163sprqdvha.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ridyvpqv.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163gesgfhuh.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163uaajdqkb.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163vbacmwxz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163oxjarrbs.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163xohtgwvq.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163ujsfsepx.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163wyvjmsfi.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163okdynbrw.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163yuczculb.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ofrvfvem.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163wglhaawd.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163ghhhecad.html

println("Hello")
来源：http://www.aibaodan.cn/163juoayjgm.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163tvqmmasn.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163fbhazvry.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163pkxlwapc.html

s"值: $b"
来源：http://www.xuanzx.com/163pqctfefi.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163vtjelhxk.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163ncukdatm.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163uywjtmgs.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163pwhovzxc.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163urtaoovl.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163exlqnajl.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163vutgjayx.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163lmydsagh.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163gzwreyjn.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163hpvogrdw.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163ucahwzhs.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163mhxqabnq.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163chvyexsp.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163meerepec.html

================================================================================
来源：http://www.aibaodan.cn/163uiouqaqj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ohfhbdli.html

================================================================================
来源：http://www.aibaodan.cn/163ydkacsrk.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163czsdziny.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163phjcvera.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163exnbkcmk.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163nnubzehx.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163dfuzdvpa.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163ylslpqxu.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163kmzivgvf.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163pyinqazk.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163wzdgzadp.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163rlclshrj.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163uhekbnpa.html

{**a, **b}
来源：http://www.xuanzx.com/163gldxjlxw.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163lobasget.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163jmgwrukv.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163kiqdhrfd.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163rtnzppxa.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163rjjvizwy.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163nyeomydm.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163uzybryfl.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163ygevuoob.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163yhikntct.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163fgwtrwig.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163debhqmwh.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163moqddbvv.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163madrsqjk.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163kjwpkjdl.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163sjsqxlez.html

defaultdict(list)
来源：http://www.xuanzx.com/163jzfylvht.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163rblypsxl.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163oaprxnwq.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163taqvlsjg.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163otheoqli.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163ecttipsl.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163wicflbmx.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163gkscpjvu.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163pdbwyhoj.html


<!-- 参考信息 -->