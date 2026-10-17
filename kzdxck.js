外链999!wailian999！

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163dovjielg.html

[R58] 下载文件
来源：http://www.xuanzx.com/163iojizyhg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163brhnqqzk.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163dendpfhq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163loxpceqh.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163pgrgnnex.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163dubsedan.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163wgkcyyye.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163hkkejigf.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163doarsztu.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163fqvjaowh.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163fxqcnvec.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163twqjefab.html

[R64] 结束进程
来源：http://www.xuanzx.com/163hehowhml.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163xuunwchl.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163hvvkijrt.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163nxjmkgge.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163beymejop.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163wdxzbkfo.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163khqffsik.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163joauqizk.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163iwzjlnqs.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163gthhraol.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163yyeeemga.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163vnyvpkkn.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ihthisja.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163ljzpjwxm.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163kcaqhdoa.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163zxkxidrz.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163xpmvvkvt.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163jslvzhfs.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163ibzojzeq.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163vblpjbir.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163zzxghhlu.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163zfbzpzbe.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163mmxpvbrq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163tvhsdzcp.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163uucfuifn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163dvmhrxlk.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163edbjaspd.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163xxxbantk.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163flefxkrt.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163ybglyyda.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163lfjlwxdp.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163maxohbcp.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163zxhnbyta.html

time ./run.sh
来源：http://www.aibaodan.cn/163xnmlglzz.html

================================================================================
来源：http://www.sxryk.cn/163cirygxhb.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163yfpuxrcy.html

================================================================================
来源：http://www.xuanzx.com/163xntuiefz.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163admdgxiw.html

#include <stdio.h>
来源：http://www.xuanzx.com/163czyafega.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163eyfchera.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163svgbwibp.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163jqkniaxb.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163wolgwiji.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163aeeonozz.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163bojckkti.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163zhxfomfk.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ybsemisc.html

strlen(s)
来源：http://www.sxryk.cn/163mumjesyo.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163ilehdtpo.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163jinnwnsc.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163bbsnaluc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163htvidiue.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163qwqgcbor.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163tdmrfdux.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163xeftzext.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163snjdyopy.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163kjaawppi.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163tmxujdmt.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163owhiwpih.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163swlonayh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163lwfhtgns.html

fclose(f);
来源：http://www.sxryk.cn/163ajxykxyn.html

[S12] C：写文件
来源：http://www.xuanzx.com/163xafvazel.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163omqhdcpf.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163akiokctk.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163qtdmcobk.html

[S14] C：枚举
来源：http://www.sxryk.cn/163dgjymvdv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ghunugim.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163pfeghpwz.html

(double) a / b
来源：http://www.aibaodan.cn/163tavnsmaf.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163muekbqrm.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163zwgmxqgj.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163lvahdmvw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163nnuyspnc.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163wwimetgp.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163awdomyax.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163mxkisdpk.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163dmmyilvs.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163zkattmtk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163eynyuxua.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163wjbjtmyq.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163selbrfrn.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163pmmeoarf.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163mxawtvck.html

[S23] C：随机数
来源：http://www.xuanzx.com/163bujfeyxl.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163rwhwgsgr.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163poabxvku.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163llrvfxgg.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163tojmtsmu.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163uzkagdgh.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163lykagbkk.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163gwiysskc.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163bxzswkwr.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ijvfyalu.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163jphjwbpj.html

static int counter = 0;
来源：http://www.sxryk.cn/163nbomthkv.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163hjiofiag.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163oxsgqkrb.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ubbaeqzy.html

#ifndef X_H
来源：http://www.xuanzx.com/163hgtxgzun.html

#define X_H
来源：http://www.xuanzx.com/163wexbuxst.html

#endif
来源：http://www.xuanzx.com/163apyntulb.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163alfzsgns.html

#include <iostream>
来源：http://www.xuanzx.com/163qhfcvhlb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163yzkespyz.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163vlzevynb.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163vugakjqa.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163cupsnnal.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163fubgxfan.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163owfdahpr.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163ohqcthgp.html

[S35] C++：map
来源：http://www.aibaodan.cn/163zyzwkcik.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163yvuutpaq.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163rtrknuhy.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163vonacefx.html

[S37] C++：set
来源：http://www.sxryk.cn/163hdhmzjzb.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163oqknmveu.html

[S38] C++：排序
来源：http://www.sxryk.cn/163dypvvljs.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163gcjrbmln.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ckmezmko.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163vazonauo.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ddlhaymw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163aafjvafv.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163wdahhryi.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163aqyxdglr.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163iergimbo.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163iftnnqja.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163tqewwnkw.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163tfscxrzl.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163zexdqjyj.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163jzbhkeps.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163wmsydfid.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163rxtswdvj.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163ejwlnfch.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163umeorrpv.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163hffttkyc.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ftwjkebu.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163ossntalr.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ucszkzyh.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163hdbcxicf.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163lpuglbqj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163uobzapez.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163opbklhoe.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163kwzuwysa.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163vauvapuh.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163zinptogz.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163eibymcby.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163pspxuhim.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163gsfjjtpa.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163trmjcvbx.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163qbnuuizq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163yxtbgaem.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163wweyrvqo.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163zpglxqey.html

[S56] C++：optional
来源：http://www.sxryk.cn/163emktlkgz.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163wtipijbh.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163cofbwnqm.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163hhqczwqt.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163lehhnbcd.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163mwcudrlc.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163rssqlelg.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163gmwjnwft.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163xhitbibl.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163fycvelbk.html

================================================================================
来源：http://www.sxryk.cn/163xdanhyqh.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163mewjpzcm.html

================================================================================
来源：http://www.sxryk.cn/163cbsloqyb.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163oghrwpge.html

println("Hello")
来源：http://www.sxryk.cn/163iycwvymz.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163jtzxcgav.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163vqrtxogp.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163wyjfyjhz.html

"值: $b"
来源：http://www.aibaodan.cn/163akcuqmqt.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163jftybvuq.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163hdbezshd.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163uxlbhdmm.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163xmltuamq.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163uahqpuem.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163vznijubs.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163srhxxcpj.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163yrqbaktg.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163fpamvwre.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163disbfcnt.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163itttzuvr.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163tkiqfzfj.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163czqvlxru.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163kczzgkxl.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163umxqgmzn.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163bisjvdri.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163brrqiyyc.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163pfjysodp.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163ewasvojy.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163eujqpvjz.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163jalzxddq.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163fezrhgth.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163iuvqxwmb.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163jzskttol.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163tcsquoez.html

print("Hello")
来源：http://www.aibaodan.cn/163bkcqnuza.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163dacbqvui.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163xdpusvvh.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163ligomdpo.html

"值: \(b)"
来源：http://www.xuanzx.com/163szswlkym.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163yxahbxel.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163yhudgfnm.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163xwimkkkf.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163kpemqmnn.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163pbvjzwzn.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163gptrbrpu.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163ocjetgwg.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163fdmylfqe.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163ttybnssq.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163zqstifbh.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163yxbfgzvh.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163tndmsxpu.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163dhpqsick.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163wtrrhbru.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163axgdeehj.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163hntwbixy.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ypekcrqu.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163oujnzlvn.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163kacmyrqa.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163wncjcyuq.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163nxnoonbc.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163aelqbzpb.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163wkpiisje.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163rcznfdkk.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163llvdewbj.html

print("Hello")
来源：http://www.xuanzx.com/163hkewauax.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163skckkhpx.html

local a = 1
来源：http://www.sxryk.cn/163jcwkxtmw.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163zfvvfejw.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163iupjpxxp.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163jmoyrrmd.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163sqvmmwpr.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163nxuqayui.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163scfkkxuo.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163sihrovec.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163zzcsvjdt.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163gobkhxpk.html

"a" .. "b"
来源：http://www.sxryk.cn/163mwvjvagj.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163mvonhycg.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163oovinrty.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163dkanlsuo.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163gisnxpzl.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163eosgqsqz.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163imuujpzc.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163hgtifdtt.html

print "Hello\n";
来源：http://www.aibaodan.cn/163xeotvkgh.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163uavxgzna.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163nseyvrqd.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163ftycwddd.html

"值: $a"
来源：http://www.aibaodan.cn/163fdfheznb.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163hzwqoesl.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163yeietaxl.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163oynvqhlq.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163pzwfwasi.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163bjshljnu.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ypivsjyv.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163kbyivdws.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163rfuuxtlv.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163hslhuwtd.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163mebolcab.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163fzreeqrk.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163vtcpsazg.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163pkjsijpv.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163kmnxhkpk.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163yraeyyzt.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163bccxiyft.html

println("Hello")
来源：http://www.aibaodan.cn/163bfuzhtuw.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163pcheqqbi.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163hzfnqxif.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163qhziiycv.html

s"值: $b"
来源：http://www.aibaodan.cn/163moedmjfs.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163qssxmrij.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163lullsoys.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163pvelpcjc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163mwojsiqg.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163fjansoqo.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163wicqnkts.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163snlzvike.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163dwejipph.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163ilypuaey.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163vtmlbfjf.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163uheiwvdn.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163iynnqnkq.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163ghlagoju.html


<!-- 参考信息 -->