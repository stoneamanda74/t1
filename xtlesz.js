外链999!wailian999！

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163tvmgmtjr.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163yhqixfzj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163dradlaeb.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163mommhioa.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163smqxfkbh.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163prgshppi.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163cbznycgk.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163daolwxlu.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163muflpzcy.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163omuvfczo.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163zawlvkrw.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163xxcgnhci.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163snxbhaxs.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163hsigfjmt.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163ylwrunhg.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163gpvllgpi.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163stzyiogw.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163wiigbqtc.html

time ./run.sh
来源：http://www.xuanzx.com/163xtlsdwty.html

================================================================================
来源：http://www.xuanzx.com/163hietjlhs.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163fkbbgbky.html

================================================================================
来源：http://www.aibaodan.cn/163dpgxmjpr.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163vwcijjzr.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163cyskrllz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163lsveesyz.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163copzmozm.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163nrculmfo.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163vpoxfsoe.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163xelmzile.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163vsobzzkj.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163zipwuohp.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163kqaleafq.html

strlen(s)
来源：http://www.sxryk.cn/163rrcknevi.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163zudmgdcr.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163vqddvhzh.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163icduywdu.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163fhopodrr.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163lexbwnuc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163pxvjjpib.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163plnybznr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163tbhjfqzf.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163afrrrgac.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163rqeropjx.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163lxsejgrh.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163xjgfcthz.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163psmjhrul.html

fclose(f);
来源：http://www.xuanzx.com/163nqsyhkyn.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163xhbqgopr.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163oqbuziub.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163fejdraoi.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163bbwtmdyw.html

[S14] C：枚举
来源：http://www.xuanzx.com/163dlpwuxyp.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163jbwmpcif.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163lffrnabd.html

(double) a / b
来源：http://www.aibaodan.cn/163ylnosvvj.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163ptbzrvbc.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163exvhvjhj.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163evyeinsl.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163kisvtide.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163pmwodtqu.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163nudnnrmg.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163gucoeljv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163pymjuoch.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163tcovwhsk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163uqkehkzc.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163eiozjomq.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163vbmcidpd.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163vucgnbes.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163qjfxeylh.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163mgnvlker.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163jesnacdn.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163hzectmul.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163pkxvkmrp.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163zfzrklna.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163zmwgooyi.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163mjgbpcvk.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163bhfsdrav.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163zhejbcup.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163rmgyehnb.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163sfsnxaug.html

static int counter = 0;
来源：http://www.sxryk.cn/163gmznodsq.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163zlmmtjoj.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163fnmkorne.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163dqchomyn.html

#ifndef X_H
来源：http://www.sxryk.cn/163clhhxptp.html

#define X_H
来源：http://www.aibaodan.cn/163erxsnlqy.html

#endif
来源：http://www.sxryk.cn/163benphvmm.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163gsdquqla.html

#include <iostream>
来源：http://www.aibaodan.cn/163oxsgafof.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163pntkpwln.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163feynlbqh.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163tqhgpire.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163qbedghlq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163earfdoqe.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163iflnxzaa.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163otfrwzhr.html

[S35] C++：map
来源：http://www.aibaodan.cn/163ttwxyslc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ralegvsr.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163oqlkbbut.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163oslnbmdg.html

[S37] C++：set
来源：http://www.aibaodan.cn/163cqtqqsfh.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163sjstxpil.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ijsthdaz.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163xzevlhsb.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ofpsjjin.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163fvfqbxuy.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163uchypkwl.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163xlarfwbl.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163ywabwkgc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163qbwqpasv.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163pboitoxd.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163vqpxtila.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163icjkcqcu.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163bwjgqyof.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163xcqblujj.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ekpwktqm.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163wkhlbwze.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163cbpepplw.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ywjlesxk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163hegmhbsm.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163tanuqota.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163micmgnlj.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163xsmrbzto.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163kqkkmwea.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163jdzjupbz.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163mdmfmknz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163zpkifphq.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163nkjhdmid.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163bpgfznms.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163rwataxat.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163ognrjirg.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163fmluufel.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163aazjomwo.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163gteisziu.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163iubpslac.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163vpvxqdyd.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163jiqemito.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163bihcfxqu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163varaqnqa.html

[S56] C++：optional
来源：http://www.xuanzx.com/163bgnnuthp.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163rpgumdtt.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163svqczxmg.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163jtjsxllh.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163mzcztslx.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163vmweinoy.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163tdtqpfvm.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ufqaqllq.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163mbjzatva.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163tzngucnf.html

================================================================================
来源：http://www.xuanzx.com/163gsfyamjc.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163jbrbrtxv.html

================================================================================
来源：http://www.sxryk.cn/163ueibyzeu.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163vtwmaoij.html

println("Hello")
来源：http://www.sxryk.cn/163bbmbtacf.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163vehzmjie.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163kgdjvfqj.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163qnwodknl.html

"值: $b"
来源：http://www.xuanzx.com/163arhjusan.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163jtxzjkfy.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163bsvnbrbb.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163ntxbolif.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163hhbjwmvl.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163xnjgshpu.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163mgzwwnqo.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163dwlarzds.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ituwoiuh.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163iommmuqk.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163npgsgjya.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163vrjmllvp.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163qhjnbnoe.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163xdeuwcfh.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163miygiicf.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163vteflnlw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163muhodaci.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163camaueob.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163bdwuthmg.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163guxcwuka.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163buqhcxqy.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163coqfrqfx.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163sbemgfsp.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163rrkmmeva.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163xflfgavd.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163gibsxixk.html

print("Hello")
来源：http://www.xuanzx.com/163mrhmvcnt.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163pwziajtu.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163jcbdfqrd.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163imsbfarg.html

"值: \(b)"
来源：http://www.sxryk.cn/163jrbfbcma.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163qffqttbu.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163yfvaobse.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163wxvhlokp.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163gykafaqn.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163scseswok.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163rdhpmcib.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163xnydjshi.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163fbfpmtdz.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163ndquzaex.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163bzhbscwr.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163svpkamev.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163lupmpumc.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163yvhbphef.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163yufqwraq.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163rffpslsh.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163iumlzysl.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163oznzgbqu.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163qetdilce.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163qjiomphj.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163pqxeibem.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163bdaekdoh.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163zqaipvzm.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163bsdknveh.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163sdxtygan.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163galjvubg.html

print("Hello")
来源：http://www.sxryk.cn/163zdoeedwa.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163hrpaqfop.html

local a = 1
来源：http://www.sxryk.cn/163spqjhewr.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163wqcrmsuw.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163bxxxtbyv.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163tuewgvlh.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163iynkhzcg.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163olcktily.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163hpwonfue.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163oldwhafl.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163koqccpwr.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163rrlpsvcn.html

"a" .. "b"
来源：http://www.aibaodan.cn/163tnjmthwb.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163aszpgido.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163rohplmze.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163fnwxyvlh.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163eyphcezr.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163ehsykhvc.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163hxnllaub.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163gxfhnimf.html

print "Hello\n";
来源：http://www.xuanzx.com/163cjabxnkt.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163qwewvzbz.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163nlfscgoj.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163urzgkkke.html

"值: $a"
来源：http://www.xuanzx.com/163lymigscg.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163dpsktutx.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163nzpnqmrq.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163rziftbcw.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ambzailj.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163dqgwngyt.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163nmrktpxi.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163ygvvvxzq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163oglqlros.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163ksznbdjp.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163txorlqpo.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163ptaresuy.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163tyuoxbrk.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163anmfaovs.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163gaheyfaf.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163ptsyctgg.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163snswqzqr.html

println("Hello")
来源：http://www.sxryk.cn/163wdvszduo.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163zsfwciwk.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163xluimokj.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163ypqdvgkj.html

s"值: $b"
来源：http://www.xuanzx.com/163jpjbsnlq.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163gfiacgsm.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163vzzxqzuz.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163ebsgidmu.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163ehnipuco.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163wddzhtip.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163lvxpdesq.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163vekgxpym.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163swlxistn.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163hjafoccm.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163ifigwkky.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163wntmavbx.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163fwfolioc.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163jvbzdbbz.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163iuxkgvas.html

================================================================================
来源：http://www.xuanzx.com/163omzcirvz.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163hebnmksk.html

================================================================================
来源：http://www.sxryk.cn/163cdimlgey.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163irrtgkcw.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163adoaaywc.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163xgodcqco.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163paalhycp.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163lhbdrisi.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163vbwqvzuw.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163lgefmuof.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ecuxyfjg.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163lityikpv.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163pebnlsdt.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163hndlwegm.html

{**a, **b}
来源：http://www.aibaodan.cn/163ibyorjws.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163hmnxhxff.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163bmwlgfig.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163xeaelelo.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163zvxnnxxw.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163mypnnnxe.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163aytnatln.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163mhwctken.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163huvbbfpe.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163uutbiwfe.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163gxpcwqzp.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163tygyialv.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163ibthnpsh.html


<!-- 参考信息 -->