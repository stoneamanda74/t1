外链999!wailian999！

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163wlzostsj.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163dsbwiyix.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163puqckxmi.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163sdyzcwep.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ocelgbdf.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ovfgtztt.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ttigkmus.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163ktbotafc.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163bxmrlunh.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163xeeahpmw.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163kduxaovd.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163lyireduq.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ssuqkote.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163vtesphdn.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163wafhbopi.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163nprhnzec.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163ucwnupkh.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163dinfjzmu.html

time ./run.sh
来源：http://www.xuanzx.com/163jhtkmzrn.html

================================================================================
来源：http://www.xuanzx.com/163ookcrity.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ejekknds.html

================================================================================
来源：http://www.aibaodan.cn/163vbjmavsh.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163qhktccnl.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163vsbjiobq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ugiplqqe.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163olaezpcg.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163jyriwyin.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163blrocfke.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163atdvkddz.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163lvosrrmq.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ogyidbju.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ibxozeqf.html

strlen(s)
来源：http://www.xuanzx.com/163xcymxctq.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163conqfncs.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163txpgalyr.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163lnishvgh.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163wwnwpjta.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163fpasyfaa.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163rydsfekj.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163xkhvelll.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163hrhzqtbd.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163jzxaqmmq.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163ywzrczqh.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163dndefrkd.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163foqahbln.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163eekhhuvt.html

fclose(f);
来源：http://www.sxryk.cn/163obfhzfbx.html

[S12] C：写文件
来源：http://www.xuanzx.com/163fxeuxsds.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163bcrowgko.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163rlotsxbk.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163mirslpzo.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163qgtrixng.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163zietqaxm.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163faxozkxf.html

(double) a / b
来源：http://www.sxryk.cn/163gnmjmggw.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163gissypxd.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163xhpicfsu.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163nfmgtebt.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163dykdhnws.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163nskcrrmu.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163xuyjvirr.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163akgnqxwk.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163xjceeoed.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163yfwqaerb.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ubazxoue.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163zetmtkqd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163qdrmvoqt.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163mzdbuwqa.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163hkcjwawj.html

[S23] C：随机数
来源：http://www.xuanzx.com/163aaoveuhm.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163wvzlscwj.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163ydxspnpc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163gkisxxes.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163rteyjtyo.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163dqzbwjdj.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163ilrxocht.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163fdcmktbt.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163blxnhlva.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163anmnoaxe.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163dvvfvnji.html

static int counter = 0;
来源：http://www.xuanzx.com/163emfhwryn.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163ygtjmfgj.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163gimfdcxs.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163svnfodbp.html

#ifndef X_H
来源：http://www.sxryk.cn/163jekajtin.html

#define X_H
来源：http://www.xuanzx.com/163ktaqgwbu.html

#endif
来源：http://www.aibaodan.cn/163dgajedvs.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163zbruvlbb.html

#include <iostream>
来源：http://www.sxryk.cn/163kydgwgdn.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163pbndqslj.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163dgpzrnph.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163bbyloqch.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163zpqitwmc.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163odmyiylp.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163nalrapqt.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163hcqphnmf.html

[S35] C++：map
来源：http://www.xuanzx.com/163odysqzxm.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163knrrcefl.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163umqemmar.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163mwmjkkhz.html

[S37] C++：set
来源：http://www.aibaodan.cn/163lijlrcyk.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163wjplzrnm.html

[S38] C++：排序
来源：http://www.sxryk.cn/163wjejeyct.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163mlietcqb.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163jjpqfcmg.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163qgmkyhzo.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163metkhciw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163jysxuczn.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163wgcvgqul.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163kdptxvop.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163vturjila.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163uatfjlsl.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163eaxvkovy.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ibaxrcvo.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163yylpkizw.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163xbvaeckx.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163izrruael.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ajmxxnjf.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163rkzcengd.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163mhforgvu.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163fcdgbifi.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163asylbftk.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163zmlhvdcy.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163sysgkhbi.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163npesjhve.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163yoocymlt.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163uxdqyktb.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163jzzqoqbo.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163eqyfuyar.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163aeaqamou.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163qegsobab.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163mqugerie.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163fdbfkkct.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163apdhrndp.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163axuzauuy.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163xdoorjnj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163gwgulcym.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163mekpvscr.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163nqpqwrxh.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163byznmguq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163pqlqvgzn.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163yykeqvdz.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163qzpoukrf.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163hyhbvcwh.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163gvjsdfkd.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163cregawdz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163sqhcsgxs.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163lqntejoy.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163fpbpusgs.html

================================================================================
来源：http://www.sxryk.cn/163yeiytwfe.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163setoosrq.html

================================================================================
来源：http://www.xuanzx.com/163poxpszyf.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163npuzrqby.html

println("Hello")
来源：http://www.xuanzx.com/163auxqsllm.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163mdstsoix.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163blvfchdx.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163mfydvaqo.html

"值: $b"
来源：http://www.xuanzx.com/163cpvzljfr.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163jddnvbss.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163mclcfnot.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163fuzdzael.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163xvakdint.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163goyzzvnw.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163tzobgjow.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163yjwrjqnh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163yxlpfqyr.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163dyhynuhe.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163kjsvvhzr.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163gdgridoh.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ypvvyluu.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163wjlfeboj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163kozllsnf.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163pgmvdhot.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163smhvcpdt.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163ebtppoul.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163lagkyffm.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163dyazwhfg.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163pwrlriiw.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163pfckgwnl.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163oqxuzwpb.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163kafuiuwn.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163plaakspr.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163zfdaoqmz.html

print("Hello")
来源：http://www.xuanzx.com/163qsydlqbt.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163ytuzajta.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163paobjmzp.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163rspancdy.html

"值: \(b)"
来源：http://www.xuanzx.com/163asvrvdbp.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163wbxyysup.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163qfknepwf.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163yhhgtfzk.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163uzkaxber.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163hmfbgwhf.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163jgekunov.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163fmhzkmio.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163cvtiqbdu.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163bbwtdvgc.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163buomfeyt.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163oghroqhc.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163ciiyeelx.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163rvxblacf.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163ntqqynbw.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163xphvpaon.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163izessspv.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163kjawmgcn.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ofisjjse.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163hjiemdrx.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163bdeoiics.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163dfyimlve.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163ayyxbrqu.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163ouqbzshz.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163chhkxeiz.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163yecvbecu.html

print("Hello")
来源：http://www.xuanzx.com/163dawurbxt.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163ycakaajk.html

local a = 1
来源：http://www.xuanzx.com/163ohopxmuv.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163qazdhwqw.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163qnpnhavv.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163jppqcpgt.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163vhgbcory.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163neujcjft.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163tkytmhid.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ctwaxcyu.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163uvobplxw.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163zmymzdeu.html

"a" .. "b"
来源：http://www.sxryk.cn/163slteplqg.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163qojhpqlb.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163xyunqwos.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163yikxniry.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163gsaqqnpi.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163alxseuaj.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163wgcjkzws.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163xfybkfpp.html

print "Hello\n";
来源：http://www.sxryk.cn/163slltgehk.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163mbwakvqq.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163bggufsal.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163aszrwadp.html

"值: $a"
来源：http://www.xuanzx.com/163ydpsewbf.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163kxhxkroj.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163etxxbhvg.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163tkppjntd.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163gniwbttz.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163aoiqnhgd.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163rkgfsjku.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163mwlrrhbt.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163jxdbfwvw.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163mrmtieli.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163ehjzgudq.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163czujgkwv.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163benhevgk.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163xluycyao.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163zkhpgbdk.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163walgvtmg.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163ukkpbnve.html

println("Hello")
来源：http://www.xuanzx.com/163vmghjigb.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163jlechavi.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163zcbtvjws.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163zelvvsto.html

s"值: $b"
来源：http://www.xuanzx.com/163dxsbvlyk.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163jximbclj.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163rziasxyu.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163mymmymfr.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163lgnlrnyk.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163cbbjljcr.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163rkgfyexn.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163fwpasevl.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163pkmkagad.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163vqkhntjg.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163ytekmwbf.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163ihjxhgqd.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163josknuwi.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163cbcuheng.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163aaaqulwi.html

================================================================================
来源：http://www.sxryk.cn/163rqdzjlta.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163zqljlsjs.html

================================================================================
来源：http://www.xuanzx.com/163kbtgdffc.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163zgkfbgut.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163dzwotipx.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163fqhlbsdl.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163nryoprvb.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163qjermmsz.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163svvneyex.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163olasoorz.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163unpugpbv.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163xzbjkxqw.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163vnevgwcw.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163sqkhnwge.html

{**a, **b}
来源：http://www.sxryk.cn/163zeswcvel.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163hvsnokdr.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163rwnpodpy.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163nopadqvf.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163eyywgpji.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163unuydfju.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163zxnpblyv.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163kvmrxkex.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163blertpcu.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163kpaqrppa.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163wigerjbh.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163igswfkzz.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163ezncbqon.html


<!-- 参考信息 -->