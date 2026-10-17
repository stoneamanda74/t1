外链999!wailian999！

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163adljleef.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163amgzbrzw.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163etieetfe.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163mavjukzn.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163hoktjchs.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163qjswxmla.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163pjacpcrz.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163koreqzsf.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163prltngbs.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ynljvdtg.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163zxdalffm.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163synrwfjg.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163brwkchli.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163idfiiqmw.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163ydiunxxv.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163bxnamvbe.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163mqmufggl.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163vhjymngp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163crtptzwo.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163jwclftok.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163keyhvgzp.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163dhlgdjlx.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163kcwcftff.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163zeosqlxw.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ridnlhdz.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163cwghrlgd.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163lbozujtl.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163ezxjcdpq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163ghngwzwb.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163kfpuommm.html

time ./run.sh
来源：http://www.sxryk.cn/163mgldwkwv.html

================================================================================
来源：http://www.aibaodan.cn/163kfurkxsk.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ytupmsax.html

================================================================================
来源：http://www.aibaodan.cn/163fbtiahku.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ohvhhiox.html

#include <stdio.h>
来源：http://www.xuanzx.com/163tdvlebmx.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163rtltxyki.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163kdkcyvyl.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163oircszxy.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163ihrvvizy.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163odtljbbj.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163pgknxpej.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163uftbylaq.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163oioviphw.html

strlen(s)
来源：http://www.sxryk.cn/163lzynwddy.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163nuqwqore.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163uxvzccxn.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163ykoxrxda.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163apykmxcn.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163hifsvycb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163cgnadhsr.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163fozzbvpx.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163kknvklqf.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163wkfpncot.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163sitxudiq.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163gqrsyizr.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163fpftplwx.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163okcjkcpz.html

fclose(f);
来源：http://www.aibaodan.cn/163wyxjabos.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163dkkxkwkj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163zqjncnnf.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163akifiikl.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163shxuildu.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ybkyhxne.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163qmbijncz.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163lkvafwmq.html

(double) a / b
来源：http://www.xuanzx.com/163zdpamskp.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163vkhmiwgq.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163xflfhdym.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163qmyuwrrk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163jmryfdvi.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163dnzptkbt.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163jiislttr.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163sekqmubf.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163myyuyylc.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163cppozdcx.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163klufyqcg.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163izrvwgrk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163djqvvmzs.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163nwlltvof.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163jamuwvnk.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163fdneaban.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163hmlvmcuw.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163exxwpyew.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163vgvrxuxm.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163pieayaga.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163seqxyfuf.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163ftideewi.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163jvhejbzp.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163iyktkiua.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163zlgqruxl.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163plkvinvg.html

static int counter = 0;
来源：http://www.aibaodan.cn/163uecehain.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163ayxrztoq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163aecboddx.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163imoaqeus.html

#ifndef X_H
来源：http://www.aibaodan.cn/163pgarrxdh.html

#define X_H
来源：http://www.sxryk.cn/163nrmjmvbt.html

#endif
来源：http://www.aibaodan.cn/163axgonifd.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163gvwbqgru.html

#include <iostream>
来源：http://www.xuanzx.com/163tcyyyrgj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163nchyxmiv.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163wrlwvlbj.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163uxqgsssx.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163undlvmbg.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163dvhraeby.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163vyygzzgg.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163pegriwib.html

[S35] C++：map
来源：http://www.sxryk.cn/163wfnttkzw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ncqhyftp.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163sudzvido.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163myyvtfsx.html

[S37] C++：set
来源：http://www.xuanzx.com/163jfhkvctn.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163hyjzpquy.html

[S38] C++：排序
来源：http://www.xuanzx.com/163kxdpussh.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163uhyqaxqt.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163pirggmxg.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163owrubqor.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163kmymzqpy.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163zmlxiwxo.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163evbauhzi.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163juphqnrw.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163rgmliouz.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163vjthjrkq.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163aazaixak.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163eslbrcki.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163pdzwlcpl.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163mhjjzbrx.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163cklwlipo.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163xnlrzucq.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163paqsphzj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163gdndfrkj.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163yeaewauy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163kikgjsis.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163cszhxeki.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163wsncpboc.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163adgxjqlz.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163tetcmdgk.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163iiydfpqs.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163cthrlzkf.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163xwkydsxs.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163oazjllqo.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ceqnqnlb.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163jrbslzjy.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163wbmzmavc.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163opoqvphl.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163rietfivp.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163fxctsjhc.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163jbokcske.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163anjxqhlg.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163vdooinao.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163erbqjksv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163qbwampql.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163kmsxmrtx.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163jdtywcld.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163tczmldko.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163bjxupmfn.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163jafzhcaj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163islvesew.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163mmwmssnp.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163sslcsqny.html

================================================================================
来源：http://www.sxryk.cn/163prqwdxbu.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163kdshgdhr.html

================================================================================
来源：http://www.sxryk.cn/163rvnuijkq.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163kuxlazvh.html

println("Hello")
来源：http://www.xuanzx.com/163wdjeccdo.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163nzhscdou.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163wsxlsyen.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163msuqkfcl.html

"值: $b"
来源：http://www.sxryk.cn/163hliacxcs.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163okuydnxr.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163grmvsjax.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163dexmqrin.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163qqtewzxt.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163yltmmsjz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163pmtrqhup.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163yecszgvf.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163iaiwnbgf.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163bkjxbovl.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163vwqglyns.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163tketwvbq.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163pyruphbm.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163vxedhasl.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163hffxiwtq.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163uniqadmu.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163dyzsupqe.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163qpeaeknd.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163jwzbbinp.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163ybayjglz.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163hqjinzzj.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163pcogvvkt.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163ksxhcbmv.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163eorbrzet.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163auldmhat.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163nraeroaz.html

print("Hello")
来源：http://www.sxryk.cn/163fpaaeyei.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163qhfrivet.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ammfmgrs.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163bzvpkpaf.html

"值: \(b)"
来源：http://www.sxryk.cn/163imbqhyio.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163mrskcxqo.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163igbjkztn.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163neyiojbe.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163enzhvjtt.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163hzqkuafn.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163lyfnntlo.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163yokfoodj.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163wnmvpxkp.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163yckfyjve.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163nohzllah.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163bprxrwxi.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163lialsbku.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163sbkajzll.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163ibndbsdw.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163xlbykipy.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163iagrgvih.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163bsgztdpb.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163xhnxpqjm.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163kybuvnxt.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163gmcydnlc.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163aoxgcjtj.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163uogobbfd.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163qrmvutft.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163gmcasuxi.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163oiopvdgl.html

print("Hello")
来源：http://www.sxryk.cn/163mvmikkmk.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163rfnozcgf.html

local a = 1
来源：http://www.aibaodan.cn/163ewgwpkpz.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163vsuyhpex.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163ireeanrz.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163uvxoixej.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163fqfqfazh.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163empaznbs.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163ntuwanae.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163uoadobyo.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163ctqiqugz.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163qxrfqrgk.html

"a" .. "b"
来源：http://www.xuanzx.com/163swqfimlg.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163idajbfhl.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163ybhnyxlx.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163tpsgnqle.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163iislflqk.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163odtnnpil.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163szszjxdy.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163ektglpdy.html

print "Hello\n";
来源：http://www.sxryk.cn/163tcuugdcl.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163tjsakavd.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163hvhxtzon.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163bpzljcik.html

"值: $a"
来源：http://www.aibaodan.cn/163fcoomhqb.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163subsptde.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163rbcktipr.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163mjhyxgbv.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163nvkeirzw.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163wtzhridr.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163crqdhdbd.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163amflefyp.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163akiliojh.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163xrmvtvqe.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163pmbhhhef.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163ajmqgwvt.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163sieuakom.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163saegngyx.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ekzevwzt.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163rndtrydi.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163dzdssoap.html

println("Hello")
来源：http://www.sxryk.cn/163fddxfsgg.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163moylethl.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163wxtnzear.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163ugrshhpc.html

s"值: $b"
来源：http://www.xuanzx.com/163zjvmdnnc.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163axmfzqyl.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163lunbaaif.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163osyduiyc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163xrnjjocq.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163wvgpowaz.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163neduaius.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163sydzrrvk.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163yexwwdgh.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163cbxnrbce.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163pjgervuj.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163dkdvyxjr.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163migagcbr.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163lpzsaqce.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163yjlpsqol.html

================================================================================
来源：http://www.sxryk.cn/163ziowbfbs.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163autizkcz.html

================================================================================
来源：http://www.sxryk.cn/163drmgpfah.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163wczdsbot.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163flgtnqrh.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163utndojga.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163ealgiphk.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163kesxcfzi.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163verggjzq.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163dhuyingq.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163lhwvhebm.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163imcvxoei.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163aozaaout.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163jdwggknh.html

{**a, **b}
来源：http://www.sxryk.cn/163exwlhwfv.html


<!-- 参考信息 -->