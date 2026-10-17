外链999!wailian999！

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163byoqdjnf.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163qqknqkgb.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163nqgwebqg.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163odlayreo.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163xxrgleyj.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163hinymfsc.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163tckrdhyd.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163dusrcgsm.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163jvsywgvx.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163niyssdrg.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163pkgdbtgx.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163kftogsxf.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163nhnyhaaa.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163cforhndv.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163ramqsgbr.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163arrhlwww.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163upabfxhr.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163bivtcghc.html

time ./run.sh
来源：http://www.aibaodan.cn/163cchjirud.html

================================================================================
来源：http://www.sxryk.cn/163aqezvrme.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163rczwehcz.html

================================================================================
来源：http://www.sxryk.cn/163odujubvo.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ojlczrwz.html

#include <stdio.h>
来源：http://www.sxryk.cn/163xjldaifd.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ngurozlq.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163fkuqhzcs.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163cfeedhzs.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163bcjlfgwn.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163uldsugxv.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163ybvyjztj.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163rmjdtdfd.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163geoeposi.html

strlen(s)
来源：http://www.aibaodan.cn/163qslfgydn.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163kzwqyism.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163fkbjjttv.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163nxjkyayv.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163wpdsixmx.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163tqiovfab.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163fovjknev.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163rszxwjhd.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163njmzdloj.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163mwtlmzzn.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163lffxvkmk.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163dimpspjn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ptvrjprd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163wmpbfajy.html

fclose(f);
来源：http://www.sxryk.cn/163alrywhkz.html

[S12] C：写文件
来源：http://www.sxryk.cn/163bvsyxeao.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163syvmbfwh.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163xwsubedh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163ddyrmpkc.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ttbiuvfp.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163dxovwyfh.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163andajxsp.html

(double) a / b
来源：http://www.sxryk.cn/163nlukzifa.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163ndntraeq.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163kahpjgwd.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163gjonwjcs.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163qzqsowxa.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163outgpdtr.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163qoadpiaz.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163awuluznl.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163nyikgbfk.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163hcemyuer.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163yyrfrtom.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163vfvmywan.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163uflwbhqv.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163yilpymte.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163kujrcvac.html

[S23] C：随机数
来源：http://www.sxryk.cn/163rmykwjtq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163frtsehzv.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163vcthibpc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163hoktdyik.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163riqcmohb.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163dwbzrhyt.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163sthzgesv.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163yjmwwgmx.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163hrghhpik.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163dotvdalv.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163czrrjkzm.html

static int counter = 0;
来源：http://www.sxryk.cn/163frsivmld.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163pqrjxdcm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163pihoskrl.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163jfjqbhfr.html

#ifndef X_H
来源：http://www.xuanzx.com/163nycnzpka.html

#define X_H
来源：http://www.aibaodan.cn/163lajikybl.html

#endif
来源：http://www.sxryk.cn/163smgdrkwf.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163rzsnlfhn.html

#include <iostream>
来源：http://www.sxryk.cn/163irdeuvtd.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163birptetg.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163theofvhl.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163ealwfbza.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163rdhtwasb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163cpxjovts.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163efmxduzk.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163yctztpif.html

[S35] C++：map
来源：http://www.aibaodan.cn/163sfksorki.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ibmbargk.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163hraeqiwc.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163dhdfaeso.html

[S37] C++：set
来源：http://www.xuanzx.com/163worsotjw.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163znwogulm.html

[S38] C++：排序
来源：http://www.xuanzx.com/163fyyzeyev.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163gxrmkdom.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163eeblbtxa.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163dzmpukhv.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163cnplkpuq.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163bgbykwtq.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163xcmiayef.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163tpffhibf.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163mepgnnfa.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163sitibhns.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163rjdphnqx.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163gkoqothk.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163qugapulf.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163untrgyya.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163vhxqsauy.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163ckcmgdkn.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163wwhzydwc.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163pynqprnt.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163xypsyhzd.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163doyfvsnr.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163ugedrbfa.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163osmunlnu.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163cpajawxr.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163nwmetfci.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163nwtgppzj.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163jkqnkyof.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163dmturtyx.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163xwekwpcu.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163rnuwptay.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163uuiiirwm.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163vtyovkfb.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163iywwhgvg.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163hfqsvoco.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163rtmxiedj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163mnbuugbp.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163xgpnzpiq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163dtftwkdq.html

[S56] C++：optional
来源：http://www.xuanzx.com/163diayuqrv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163xirggxmm.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163lfuxawrj.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163zbghburg.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163sdlknwmt.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163qvgjtlae.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163bswdeazr.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163cptrybmo.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163cuxrayce.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163gejptpai.html

================================================================================
来源：http://www.aibaodan.cn/163ixqezfbg.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163fwyhofjc.html

================================================================================
来源：http://www.aibaodan.cn/163nhgkcipg.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163msmgumwg.html

println("Hello")
来源：http://www.xuanzx.com/163eqsblwvd.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163kqaijipz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163kisgkhrt.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163woayblmv.html

"值: $b"
来源：http://www.xuanzx.com/163sfjbxhxx.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163kobvvoly.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163wjyxsojp.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163myuuioee.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163duuiaojz.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163kxczhxmo.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163agvcguka.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163qmjuidng.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163tmthnndw.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163iijhrhhc.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163emrshbzf.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163gwiqqobv.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163pegxhstd.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163pgjugjcy.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163vyyspwdt.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163wtjpmgdg.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163biffcbvm.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163achaezdr.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163yewhpxtu.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163qytvwelw.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163zceuwxcs.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163yjakarid.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163zojjfyab.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163dslivsra.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163kjdmiulq.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163tstdyflc.html

print("Hello")
来源：http://www.aibaodan.cn/163mwilxdba.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163ipjmzvva.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163pkpjprbd.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163ldhvcvfd.html

"值: \(b)"
来源：http://www.xuanzx.com/163fcuxtbev.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163mjunvjlc.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163wrolwppe.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163gckqbvpo.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163mgnlkqij.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163yzqcgtpr.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163kjfuqqrc.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163wgtaqyvm.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163uowrniiw.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163yvghyzkn.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163uwudyquv.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ttfmohzy.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163nsxgnskg.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163tovxzsef.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163zeekqcjy.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163lwmslpol.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163njmfohvo.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163xosgowck.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ooqxfxhm.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163lvfistur.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163iqvyezgy.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163tgibewni.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163fdwfysel.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163efcgkejg.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163qfxhdahn.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163bdscahft.html

print("Hello")
来源：http://www.aibaodan.cn/163caovpqle.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163hpxojghy.html

local a = 1
来源：http://www.xuanzx.com/163hymsfelh.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163masyuaqi.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163ooqltmst.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163pvsainym.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163eydfubrx.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163anjdpatu.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163zcxkeigs.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163uyllziox.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163tkswhhto.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163ibcnjufh.html

"a" .. "b"
来源：http://www.aibaodan.cn/163yypjkeaz.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163ynwdglog.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163gahsxlti.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163wquewhlf.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163fwoefprm.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163ambfkvjx.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163gteaijru.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163midzofrl.html

print "Hello\n";
来源：http://www.aibaodan.cn/163viekkezd.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163xlknsnri.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163ufupxfhj.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163zuoygyqf.html

"值: $a"
来源：http://www.xuanzx.com/163imgibqtu.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163ueipgkht.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163tanxcrmi.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163toilkdue.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163zdkvbkpk.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163iuqrucmi.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163murnmane.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163lwandyrm.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163odkzwigb.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163huwgtyqu.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163hzujbdcc.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163ttytanzt.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163rnvsdwwt.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163fabdstso.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163risifnqp.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163huclpfpv.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163aohtaefq.html

println("Hello")
来源：http://www.aibaodan.cn/163nvaxajng.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163tttemuuj.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163wmsnsnhv.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163ztmwtcnd.html

s"值: $b"
来源：http://www.aibaodan.cn/163nnluygoy.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163vzcgkbie.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163zgfqopbd.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163devnlxav.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163lflvtnyg.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163tnmarzef.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163tlgetufm.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163tibhzlna.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163pognnjoa.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163denwefpy.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163csuujohq.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163anfpcvgy.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163lsrphxaj.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ieuiizbo.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163jvjcrufw.html

================================================================================
来源：http://www.aibaodan.cn/163muivzauu.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163kqdkrvgj.html

================================================================================
来源：http://www.sxryk.cn/163mharscus.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163mkmdgags.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163jlvzyqso.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163vseaoekt.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163cdfbwucf.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163nkmuikaa.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163jdbughmh.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163mlkaeiys.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163awihnvfw.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163cvzbhxyf.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163vycemxrg.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163ddslsgwj.html

{**a, **b}
来源：http://www.sxryk.cn/163oxkilpvm.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163mpiowndm.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163acvyfukm.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163fdxvyhht.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163hqjrjmtb.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163ufekveyp.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163briabsba.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163rhsyxxnb.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163zpzpejui.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163dzshrthn.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163danmgdji.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163hjhbqjeb.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163nbhnqrkm.html


<!-- 参考信息 -->