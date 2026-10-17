外链999!wailian999！

df -h;  du -sh *
来源：http://www.xuanzx.com/163aatohkvc.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163jaaipthd.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163ruxcmayw.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163kwbyxyou.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163hizcqrrb.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ewiabjdv.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163vfpnggwz.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163iqdwwfhy.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163jlmmrzaa.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163waukcpuk.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163nvnlwfik.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163ixpfnxpe.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163nwugbhal.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163eesbyiep.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163vmfkizia.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163pwftgapq.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ppoenmxe.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163mghbtugp.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163wbldzame.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163vxjtqgup.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163pcsulclg.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163lpbzoklq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163rlwwsoff.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163okozxpau.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163mheenbli.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163vpjiwdsb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163augdkmzj.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163iracnslr.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163bzziqddj.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163igtyejog.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163kdlftuol.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163tyafjedz.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163bgtainph.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163kgnxxepx.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163adqavnim.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163evkzmhkg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163ujwsxvqm.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163pkwmfosy.html

time ./run.sh
来源：http://www.sxryk.cn/163soqzluww.html

================================================================================
来源：http://www.xuanzx.com/163kobpgczp.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163bqscjagf.html

================================================================================
来源：http://www.xuanzx.com/163emhqdfoa.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163picxvenq.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163odtzzmhs.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163prnigojc.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163pbosrsrf.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163sypcezoj.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163fazcehjj.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163xpmaxfqn.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163vyselssu.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ujhcfpxj.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163ttuvbwnl.html

strlen(s)
来源：http://www.aibaodan.cn/163lhltysxb.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163avuizfge.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163wgnlmscg.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163hygtccez.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163mhtzgbxo.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163udhfzhwl.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163jwvhmzje.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163eoaqbnva.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ejcndjbq.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163dxaqhhrl.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163dbeywvkt.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163ayfyifdq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163jqsvxpgm.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163wugzwpaz.html

fclose(f);
来源：http://www.xuanzx.com/163poevnuil.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163mdwptwek.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163cnjiqjiu.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163ticxvcqy.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163xuplulcp.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163udfzcjei.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163xlrhzgfc.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163eioczqvp.html

(double) a / b
来源：http://www.aibaodan.cn/163cgkwnjkf.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163bhnvfvnp.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163saomlsro.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163zdbwrqwc.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163lvdpvanv.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163whpzqppr.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163kffdgdqm.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163vivixttc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163rmdmzgqp.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ndjvstel.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163uiqjwnwm.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163gnqyehgm.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163fxcevwai.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163sfakpmum.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163qfdgopec.html

[S23] C：随机数
来源：http://www.xuanzx.com/163iwcjiymh.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163bzghghxz.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163gvdchimw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163vnnjwjsq.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163glwfoyzw.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163ekvwksiw.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163naysexic.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163dgjppfyf.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ofbklmth.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163oabrwvdz.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163dgjftexd.html

static int counter = 0;
来源：http://www.xuanzx.com/163dksbtpqz.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163gxlcfldh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163aqozcqds.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163dvrounee.html

#ifndef X_H
来源：http://www.sxryk.cn/163wkaqtwgm.html

#define X_H
来源：http://www.xuanzx.com/163ubhqcvdi.html

#endif
来源：http://www.aibaodan.cn/163ngvvgnqs.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163lvyyvjis.html

#include <iostream>
来源：http://www.sxryk.cn/163jqjylcij.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163shduelov.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163nmblcwgw.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163pnamfglp.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163itimpxye.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163jamkbmdv.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163vombsxeq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163zlbehbhd.html

[S35] C++：map
来源：http://www.aibaodan.cn/163gtuyhtgr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163fphlydgw.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163oholgxot.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ekinqbky.html

[S37] C++：set
来源：http://www.aibaodan.cn/163fzocqrav.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163dfjojoas.html

[S38] C++：排序
来源：http://www.sxryk.cn/163pkgmytkr.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163ahijyxvn.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163ybdybfgn.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163owqueapc.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163txxojkon.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163oxjdllur.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163xwgvfnca.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ilskaamr.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163pzpiqwsn.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163kjcmnnyb.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163zjihzcew.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163kmutjfgw.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ndocmedj.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163hollzcvk.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163chytwiew.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ayqdcouy.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ordpaxfv.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163viwqfiwl.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163zmbfbufm.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163hzuquvxw.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163cnvovzfw.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163gfbgdhgf.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163pwxyysex.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163tehgvxaw.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163htleiccw.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163xskunrsy.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163adnzhotx.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163uljykugj.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163nsqmrcrg.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163dltwngpe.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163gfzehinb.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163lpfimpdt.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163cxdjkgkn.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163jxqldjec.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163zamomiet.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163hrdtrkwe.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ghujisep.html

[S56] C++：optional
来源：http://www.xuanzx.com/163fzdiulbg.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ujtxjezg.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163ofegutdr.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163qxlwwool.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163hfjzzppz.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163ibvesgxl.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163xkehvqzd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163efmdjaik.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163zrbfeezh.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163fqyourzi.html

================================================================================
来源：http://www.xuanzx.com/163bpwvrpdv.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163jfkdmnyv.html

================================================================================
来源：http://www.aibaodan.cn/163tstqjtki.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163hyfclyos.html

println("Hello")
来源：http://www.aibaodan.cn/163wjqyyxhr.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163jdpjhkll.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163knecqwgu.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163qtziowli.html

"值: $b"
来源：http://www.sxryk.cn/163flqrjqlj.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ggjucmpq.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163nypivnbx.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163rxghuwrr.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163fmywuzcz.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163jgwubsyu.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163nirbuopb.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163xisyquqs.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163miiapljb.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163heiyuvjm.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163fjcyclds.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163livhbjvn.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163vwapmunn.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163dkpegeia.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163wpukvfzf.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163tdrfbcbh.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163tkdvdxfc.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163iyawbsbc.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163sljrexoy.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ixktxugq.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163hlslleyc.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163hpxoclic.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163hsahjdit.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163yfnfqfgj.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163ygpsrkto.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163pgdgtozb.html

print("Hello")
来源：http://www.sxryk.cn/163zvbwttnr.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163xeytvjly.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163siukqzfk.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163kqurbjqv.html

"值: \(b)"
来源：http://www.aibaodan.cn/163rbutrzqd.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163xubylqfb.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ufmmnerw.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163dhutugib.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163iuromiqw.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163dinymfyr.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163ixzgkreg.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163etelqebx.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163legopnrz.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163fnmpuxft.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163mkamracp.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163cwegfiee.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163dxvzjlsw.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163acrcwvif.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163cktzzbjr.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163koqtcnuw.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163gwzfyraw.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163rcsenyxo.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163xeisokdy.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163ztbhirpd.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163yjpunove.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163qzodiiwm.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163amqkqenx.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163meofucoc.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163ltjewosr.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163dsehbodo.html

print("Hello")
来源：http://www.sxryk.cn/163oqpxdtsx.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163fqnfxrnh.html

local a = 1
来源：http://www.aibaodan.cn/163ngqhutbu.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163rsdoxreh.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163rthuxloq.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ftowhrzu.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163puzesbci.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163ngerolcj.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163dchowejg.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163mfqzdvaf.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163wbiqbuxx.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163adbldljt.html

"a" .. "b"
来源：http://www.aibaodan.cn/163rltszkjh.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163ocfhwgth.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163vwguuxpu.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163wmpkpxez.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163qvqsmeji.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163xanjnfsv.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163qrgipioh.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163pnxexdky.html

print "Hello\n";
来源：http://www.aibaodan.cn/163tdiluspw.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163vhvehmti.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163hwuehfcu.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163juavxawi.html

"值: $a"
来源：http://www.sxryk.cn/163nsniqqsi.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163rdcszlji.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163qcroyktx.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163cqvycpqj.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163mnjpncvx.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163fbpxknqm.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ooejnstk.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163dgztrsio.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163gplaqbwv.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163oltprjhw.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163kzwqmfxg.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163zdpyckzt.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163gdfsevhh.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163qjwexcjn.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163orkczdnm.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163hgvlzzzc.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163oqhrouif.html

println("Hello")
来源：http://www.aibaodan.cn/163xwnjxfye.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163mbwumlzo.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163yofsljih.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163ekgcpkar.html

s"值: $b"
来源：http://www.xuanzx.com/163oumuqwmp.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163gugfthyz.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163ffslaxlo.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163sjzamnuy.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163yjmaqwqt.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163psprergc.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163rjgqftev.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163uxhsamws.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163fggnwfcb.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163sffbbscf.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163bzexqxvd.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163opdcaxxk.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163ejvtptmx.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163bqjbyweu.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163gssnavfl.html

================================================================================
来源：http://www.sxryk.cn/163xppdzsft.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163vcrmbimf.html

================================================================================
来源：http://www.xuanzx.com/163ryxuelrt.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163yvgnnvtb.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163jkoqaqfn.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163uckfhxvi.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163ypaxgvva.html


<!-- 参考信息 -->