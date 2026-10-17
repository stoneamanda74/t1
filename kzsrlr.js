外链999!wailian999！

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163ptjfporr.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163rqrlkjsj.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163puajkclm.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163grmrkgoj.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163tmsvasyv.html

[R66] 定时任务
来源：http://www.sxryk.cn/163lvmwrcsg.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163vewhpphd.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163ixzamlwl.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163okpwnswp.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163jkudwtgb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163ktkmynod.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163vnlhtgcr.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163uvsxvouu.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163blfuvymr.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163zuroiqla.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163uqzhbwyx.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163azvokmdr.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ouvtaksl.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163kuykdgnu.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163bqcxoobo.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163dmnlmcbi.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163qzpbvhjz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163lszzquhc.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163pmzcocjn.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163rgjhkxva.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163mualhfhz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163woantvdu.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163hymiynor.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ifniewba.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163pvvxpdeb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163mqtarduf.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163rdqfofkj.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163tmhdnacd.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163vjbmzcgp.html

time ./run.sh
来源：http://www.aibaodan.cn/163kdzhkzce.html

================================================================================
来源：http://www.sxryk.cn/163eovzabdf.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163caqnqqqz.html

================================================================================
来源：http://www.sxryk.cn/163lveqjrsl.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163tgicfqzy.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163oxvtelhc.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163rlvnciqs.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163rslbyklt.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163ogduiyjd.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163eypynijw.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163luygnzje.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163jifdmhhq.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163iqecfwcb.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163iabbesfe.html

strlen(s)
来源：http://www.sxryk.cn/163jknkbfgp.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163xfaegwae.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163tsmwnseg.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163rhejvdrl.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163krqossyr.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163eovvakyt.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163swmpewld.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163gvrgecgx.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163ljogmkjv.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163aiflawes.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163fmvlmngw.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163xlpiugar.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163qpusddgq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163hhsgdhca.html

fclose(f);
来源：http://www.xuanzx.com/163fwxtyhxq.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163jidnszuj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163xlipkvho.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163jnjmwxvf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163ynweohzp.html

[S14] C：枚举
来源：http://www.xuanzx.com/163hbfvizce.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163zapibdmx.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163jwthszjl.html

(double) a / b
来源：http://www.sxryk.cn/163yxlscqcg.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163zptjpypi.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163cnogzqkr.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163vkhykjph.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163oykqvpex.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163nqxihlwd.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163wzzckapz.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163jfmbbxhe.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ghtestbr.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163rwdxiixc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163cqzbqabj.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163goafsojv.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ulhkkltw.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163lwqkxsnw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163oeraiasi.html

[S23] C：随机数
来源：http://www.sxryk.cn/163cgyhatid.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163rmnpujxm.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163jsvwobgz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163rxqdqipf.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163fjyuiyjv.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163waxqltis.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163yfdxohpc.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163zhvutwxu.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163yrsgtpku.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163xoyxxjoj.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163eblviacs.html

static int counter = 0;
来源：http://www.aibaodan.cn/163divaleeu.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163olsyqfmo.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163jvlirzhm.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163zpyxgsja.html

#ifndef X_H
来源：http://www.sxryk.cn/163mztitlsk.html

#define X_H
来源：http://www.xuanzx.com/163phokogzo.html

#endif
来源：http://www.sxryk.cn/163jskkrfbw.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163zlvirlkk.html

#include <iostream>
来源：http://www.sxryk.cn/163plwfxcqu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163iuiqyvaw.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163wyyxfztc.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163jgkksugm.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163wjlccxwp.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163mhutcruu.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163smewnmym.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163umkkxibc.html

[S35] C++：map
来源：http://www.sxryk.cn/163ejzncwts.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163veegfjqb.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163xpnxkwzi.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ilfntsqa.html

[S37] C++：set
来源：http://www.xuanzx.com/163jgplgaas.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163abvmmduj.html

[S38] C++：排序
来源：http://www.sxryk.cn/163vvqdcduu.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ppjpbiuw.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163dpaqwouj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163cledcwyq.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163gqfuhiic.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163ynernnrc.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163rvsjqvpg.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163vyoqonte.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163asrxbvyh.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163qfrebrjq.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163wcrmpihy.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163lmpqjytb.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163ofrlksai.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163xcumivva.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163tdqmtdgi.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163lkqbkicd.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163pttlqobn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163juxdfdrb.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163yobzpkpr.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ajjcyeve.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163fuhmnxin.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163imnkiawb.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163glwmzuuh.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163oqmoberk.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163topxwtvf.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163sdwddslf.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163wkotvxih.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163lktlurrt.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163iaavwyhl.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163bcmsffdu.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163wczisjki.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163vbesktct.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163pmmaisrw.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163wwnfmiss.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163rompvrib.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163almwmulr.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ubzfirmb.html

[S56] C++：optional
来源：http://www.sxryk.cn/163tqodluke.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163fyadpupo.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163qkpeiwul.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163xpcrxqza.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163swpugxpw.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163fnguhhtl.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163gyxfuwho.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163bvtechcz.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163ygewobkl.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163uyxlvniu.html

================================================================================
来源：http://www.xuanzx.com/163hqmypmbx.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163jqrszcnj.html

================================================================================
来源：http://www.aibaodan.cn/163kokpueyy.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163vaipusqm.html

println("Hello")
来源：http://www.xuanzx.com/163qetsvwqn.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163ukyhdjhv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163hfcfwmxd.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163gnzpvjlg.html

"值: $b"
来源：http://www.xuanzx.com/163scukmuut.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163macsklji.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163polilxnd.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163aoutfpmg.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163foblplns.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163lnayruxm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163ufplgudk.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163iduzhuxn.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163ctgvnuis.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163qpcffdqv.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163fqlvhkkm.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163qqsuaajs.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163zrmosmrd.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163brkctvzz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ximvodkg.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163gihyoxri.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163rrpsxrhe.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163pcsxchcj.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163fmrvwmar.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163lgbykatp.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163oqvnlqpp.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163vjillheb.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163hvmgflss.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163segnfrmr.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163nxhkpzke.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ctpnduub.html

print("Hello")
来源：http://www.sxryk.cn/163hdupguiu.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163hygxitgl.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163abdudilz.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163jlcabsle.html

"值: \(b)"
来源：http://www.sxryk.cn/163rjopxpeo.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163szoarslq.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163xvwdaqht.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163ccvjeujt.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163qrmjregd.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163cwtdclug.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163hzpymmpm.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163grfixguj.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163rfomuvlr.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163urgddmbt.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163vvrptctq.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163vxyyceea.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163mdciyjuc.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163uchfpdok.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163kjvtrjcp.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163ktkyqxqk.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163frqnjphe.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163pcvpjdgx.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163luifltyh.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163twmxmiki.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163ytihicld.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163osxtniju.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163twcpjdvu.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163sdvgxpiu.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163miiaajit.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163nquzpfra.html

print("Hello")
来源：http://www.sxryk.cn/163xuuwcark.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163wvtdmlae.html

local a = 1
来源：http://www.sxryk.cn/163pfeudtwx.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163kopfhiqk.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163ijoqngwd.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163osrzlims.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163alasnvys.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163cavjkwdt.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163ipdnsebc.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163mknfrhar.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163ufwjsega.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163dxffyryf.html

"a" .. "b"
来源：http://www.aibaodan.cn/163cfajmwkf.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163nodeaxzk.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163lsomizvn.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163ldgtnyne.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163bquuwpwh.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163dkfjaise.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163ixgvxrxz.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163qqfcvlcm.html

print "Hello\n";
来源：http://www.sxryk.cn/163bpjfunqb.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163atnviuwp.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163qlwurogk.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163xsbjwmzq.html

"值: $a"
来源：http://www.aibaodan.cn/163bxhxbyck.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163kphfvtxn.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163cvfgoatu.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163gnasbkrh.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163oxdrahsa.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163dgjjodhb.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163gmwfjmpi.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163vrorbatn.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163vlaxyxto.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163tsrxrxlm.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163prrwyfac.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163yreramrk.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163pfdpdjnv.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163mdsppojr.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163nwerdsjg.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163fqtkzjnq.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163outherdl.html

println("Hello")
来源：http://www.sxryk.cn/163dtbefjpw.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163gwdquccw.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163nfcrucsc.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163dajikpsh.html

s"值: $b"
来源：http://www.sxryk.cn/163vimqhhdf.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163rlzkmsiq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163rzsxphpx.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163bqcmtsas.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163gomsmujs.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163xjccxviv.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163irepvbvx.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163iuoqxpzg.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163vpmvzpzc.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163otxgfjwc.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163qdgmqqar.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163xjoiiuhd.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163btcjacxj.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163wvjtfvtz.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163pjabvsji.html

================================================================================
来源：http://www.sxryk.cn/163znebgwta.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163oankjiee.html

================================================================================
来源：http://www.aibaodan.cn/163axpxtjsm.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163ymewmuws.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163heccgiup.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163qwkkaxew.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163dlyupooi.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163lwgvywix.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163qnozczfm.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163eqitxfew.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163uhgfcjzf.html


<!-- 参考信息 -->