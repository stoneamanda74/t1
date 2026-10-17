外链999!wailian999！

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163xyfhqwcb.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163jnpgnxqt.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163mfnnuemq.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163dqizhoyn.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163dpqjgnby.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163ielvhopb.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163ujvsdouq.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163ywrefajl.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163upsfzjbi.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163xxlczjjq.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163cuaxsund.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163fxvtsyaz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163ilayajum.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163eyowsetq.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163mbuoubne.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163prapwiwf.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163lgxsvtle.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163xnonktxx.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163cxfbwhty.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163xpwbsger.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163svqciebt.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163wobbikyy.html

time ./run.sh
来源：http://www.aibaodan.cn/163dhyhamal.html

================================================================================
来源：http://www.sxryk.cn/163elnxvjqw.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163bjyccckw.html

================================================================================
来源：http://www.sxryk.cn/163ibczontg.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163nokotmkn.html

#include <stdio.h>
来源：http://www.xuanzx.com/163joqajdgq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163iwarvbjo.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163mjwbgdga.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163wwhypygl.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163awporqxd.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163yijkqrwv.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163ubtrmnyd.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163yiezinmw.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163wilswtki.html

strlen(s)
来源：http://www.aibaodan.cn/163sjxarwto.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163wbeiwdty.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163enpvkhar.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163tqurutqx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163hxlstsjp.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163cpwwjakz.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163uqgifhtb.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163hwxwvkqr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163rarcztmo.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163gkcrdjge.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163hsptsyig.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163ugmseabf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163bodjzmwv.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163dqekqfaf.html

fclose(f);
来源：http://www.sxryk.cn/163zhpkqbns.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163zjipheow.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163shpiuftt.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163jeajfkms.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163gaowxeiu.html

[S14] C：枚举
来源：http://www.sxryk.cn/163bqzgxqfx.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163gqqcbisg.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163jqkqjyux.html

(double) a / b
来源：http://www.xuanzx.com/163ufgxvoqg.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163buwikrlx.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ocqaiibm.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163cyznwsop.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163yucnwydh.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163vlrkwepp.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163dzzrixca.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163vjswmtdw.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163nuinhaki.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ccgseejt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163mgfexaah.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163pqstmusk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163blrzhvuu.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ywvkulxi.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163frqfgzvq.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163xddwjeny.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163zchpputi.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163hplegqyw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163qhhsqypz.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163udtkfxet.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163rolvazrk.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ijicvyna.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163wooqdlcy.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163dsejncqq.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163qhxdbyzk.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163oudezqev.html

static int counter = 0;
来源：http://www.sxryk.cn/163kebchnku.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163jnyyuuzf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163jdbkjqff.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163oqfgvmeh.html

#ifndef X_H
来源：http://www.sxryk.cn/163vwcuqrxe.html

#define X_H
来源：http://www.sxryk.cn/163fqdkqroc.html

#endif
来源：http://www.xuanzx.com/163hmzeugpt.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163aherpcfd.html

#include <iostream>
来源：http://www.xuanzx.com/163zpzgrmxm.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163mrivhpky.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163yygozytu.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163leoqpidq.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163idlibpfn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163pcfdcnvi.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163omspkuem.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163bmwcalpq.html

[S35] C++：map
来源：http://www.xuanzx.com/163ptfwwjiz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163alefggdv.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163dijmemyn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163qmjjufjg.html

[S37] C++：set
来源：http://www.aibaodan.cn/163wqunmrdp.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163bawmjyit.html

[S38] C++：排序
来源：http://www.sxryk.cn/163qrhlqzfa.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163bonynxgu.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163vmvzkzbi.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163vaibzgyt.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163nuwxqqhp.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163yhocxtwf.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163mdesctxc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163uenmvvzs.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163qlzgfbte.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163pcbvrviv.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163fhbguqyj.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163uszunqdr.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163zmkrhafm.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ldiygzzm.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ekgovpip.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163zqmavtru.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ugvcmwwc.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163drzktixv.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163mwzuzpio.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163osctdxpl.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163lazpzspg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163tvqdugad.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163sryilnwo.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163oeyalupg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163mqfofvke.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163xsvpccwc.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163mucqcskh.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163pcosfujm.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163lsbfmter.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ardocfxm.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163leixyykm.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ppelvgsb.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163szgcjmgh.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163ycpwoolv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163wselpkja.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163dmljzqhy.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163dthmummx.html

[S56] C++：optional
来源：http://www.sxryk.cn/163zbehgfox.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163xzswsbrq.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163djfktael.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163yhcuscse.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163eyzaajxk.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163enxbojtg.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163ouzhgqgf.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163zelhhyrk.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163fnnueupy.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163sanjbmbk.html

================================================================================
来源：http://www.aibaodan.cn/163juimlunh.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163oscuvpei.html

================================================================================
来源：http://www.aibaodan.cn/163rwgkaqnn.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163jpbrkhnp.html

println("Hello")
来源：http://www.sxryk.cn/163dtmopqlp.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ttxyhfym.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163dooctxjp.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163ygrbwpkn.html

"值: $b"
来源：http://www.aibaodan.cn/163ovclsqga.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163hxnbmzwp.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163bfohaavs.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163rfivqmff.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163rkolganw.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163fwoiatob.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163cwjpqmcc.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163mtyngzmo.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163daykmtrq.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163bxxeowyg.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163wbmbwvco.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163mpcnblwy.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163usrknbfk.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163scmlzosc.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163jaslyfuk.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163fhqizort.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163srkcabem.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163zgkvkygx.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163pbagmpsp.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163zlizmdzr.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163ypqhzlhr.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163kzxyatdk.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163rfequaya.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163osbmdqrr.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163dvvkzuvv.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163hbuwzjwv.html

print("Hello")
来源：http://www.aibaodan.cn/163angfgykj.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163acsyqgfz.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163vmuaixkf.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163smgaggau.html

"值: \(b)"
来源：http://www.aibaodan.cn/163fqshixpq.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163lrbkbjvj.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163munewfif.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163gmjfuqtg.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163wenndzgn.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163diygszbj.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163dijshvjt.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163cpfsadzs.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163pqpgknas.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163vynnfwkn.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163kifcwofz.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163tirjrxhd.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163krylozec.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163pbaahqeo.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163edephfwm.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ssxhwxmd.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163zztrtxqw.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163tnhtjuzi.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163vuwcrbzr.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163auqeryyf.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163imalixld.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163fvzpdxgi.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163qvknxjwp.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163khxplzey.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163qcoygflt.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163adkehurk.html

print("Hello")
来源：http://www.xuanzx.com/163sbglwzmu.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163gnhkjqbb.html

local a = 1
来源：http://www.xuanzx.com/163ygvialgr.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163acpdjrzk.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163yorsropq.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163thzxbbwm.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163qyztwlfk.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163enmnfspq.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163zkfipiar.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163enzklkjo.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163phrqfdik.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163xydbdcld.html

"a" .. "b"
来源：http://www.sxryk.cn/163jfcrlqmg.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163qwbrvxmo.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163eonrbies.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163cqjqhvua.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163btdqfpnm.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163fswzsliq.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163tasqxyhn.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163tfimtinm.html

print "Hello\n";
来源：http://www.sxryk.cn/163kavrnqsm.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163wxndvidx.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163llzdjkiv.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163leejmrxk.html

"值: $a"
来源：http://www.sxryk.cn/163vnirgdnj.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163zaabxulm.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163eeqwrjia.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163nhjwucvl.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163cogmvzzs.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163phvouwws.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163yvywexal.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163andxscom.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163mivxrwyg.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163xjubthyo.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163uagcfqer.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163qrrwixwk.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163xqmlovzz.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163qzaqabey.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163jqfcoipt.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163wbzydnga.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163dyxagkde.html

println("Hello")
来源：http://www.sxryk.cn/163uppgpdsv.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163qqszrdkf.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163mjfkjqxb.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163twsghtlf.html

s"值: $b"
来源：http://www.sxryk.cn/163fzainzgh.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163tlscgsip.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163yvhtncsr.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163nzgzpzgp.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163llhkvnjc.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163fbacppnl.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163gvnhbivc.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163vxjfsjpm.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163xiudtsfc.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163uryjgpex.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163myxyrnqa.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163lxlsrgha.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163emkdwnvy.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163buaxqyjd.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163dsbruxmb.html

================================================================================
来源：http://www.aibaodan.cn/163oglyyhus.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163qletumeu.html

================================================================================
来源：http://www.sxryk.cn/163kmjylazz.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163lkxqcvyx.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163mnaajarx.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163jcnocoiq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163rqsyrsmp.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163rdautouu.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163cgronpxe.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163gncdftpd.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163ubitboye.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163znmmqnuy.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163enbremfq.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163zztigndz.html

{**a, **b}
来源：http://www.xuanzx.com/163aovcphut.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163fcmvtlso.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163dtsgwzrx.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163jjkswrhl.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163igkjpguw.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163crlldiwq.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163tyhpnbmp.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163xydgestz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163muravows.html


<!-- 参考信息 -->