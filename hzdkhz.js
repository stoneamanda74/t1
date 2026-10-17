外链999!wailian999！

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163jmizekyw.html

[R58] 下载文件
来源：http://www.xuanzx.com/163jwipudnm.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163rxgvzysl.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163hqcqackw.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163cpgupvpg.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163ikpjehyh.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163ukulvwqw.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163aruluxfm.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163cqbkiucd.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163cjkegusf.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163nscbvsft.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163igzbrhzo.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163choongjr.html

[R64] 结束进程
来源：http://www.xuanzx.com/163kfgxojbz.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163qzsaeoea.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163hoeoglje.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163llluxehq.html

[R66] 定时任务
来源：http://www.xuanzx.com/163qbzxbsmy.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163vduquaav.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163dkvrtubw.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163kqtmpnvj.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163nygjnmmb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163hckqsmnw.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163orrecdoc.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ctrfluus.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163mdonvqmf.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163nmuhgcny.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163afkxppjt.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163bbgkxjbr.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163joixqoen.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163ezvlirdd.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163efjbngfp.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163uuejpozx.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163mhqkpbnd.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163mzwqybgl.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163gfovzcag.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163gjxaanvi.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163rtltxnsg.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ucqzzymg.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163xbdqewmz.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163opvfmyuz.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163ywzdankc.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163zviszdfy.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163dvqzyurj.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163txaqxtdw.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163ipxtalsf.html

time ./run.sh
来源：http://www.xuanzx.com/163tytykqfy.html

================================================================================
来源：http://www.sxryk.cn/163qydscjbi.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163ojahsedr.html

================================================================================
来源：http://www.aibaodan.cn/163bmykimkp.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163ouoqljmx.html

#include <stdio.h>
来源：http://www.sxryk.cn/163nbpsxcxt.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163zxrakapu.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163nhaztkmx.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163oqmkskjl.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163wkxuljny.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163dxdphxoo.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163tthtmoxl.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163lptoftgl.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163oavmkqnq.html

strlen(s)
来源：http://www.xuanzx.com/163ukdsuuyh.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163gpwdjgox.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163izkeuvrm.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163iflbbcda.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163kmhcflkq.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163vkbghgym.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163zscmdhyj.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163hrpikdtm.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163zwwurwyy.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163kqrpjlgu.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163ybeiubky.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163wbbzcyiu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163hbqxhjbb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163vyxahywi.html

fclose(f);
来源：http://www.aibaodan.cn/163upysurof.html

[S12] C：写文件
来源：http://www.xuanzx.com/163uzgxotwh.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163dempntvs.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163tbwlrwun.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163nzfylcxn.html

[S14] C：枚举
来源：http://www.sxryk.cn/163acaxordj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163lmcjiehr.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163mggkaimc.html

(double) a / b
来源：http://www.sxryk.cn/163vqrdomyl.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163yjgzywsq.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163xollluum.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163qimtsihg.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163dqnttxel.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163pzwpetdv.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163lntcneik.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163xzqrmbvb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163gbwxlemj.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ywnvokbv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163buhipahx.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ekxnzztu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163tabignot.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163kkelvror.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163owxybxid.html

[S23] C：随机数
来源：http://www.xuanzx.com/163rubkfqwy.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163rvpnwxeg.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163xasaoxzh.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163hmjoowib.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ecnoxaip.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163mdycfwsn.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163lkctefuj.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163eaqfmbmp.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163szatbafo.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163bpaeskuk.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163rclkgped.html

static int counter = 0;
来源：http://www.xuanzx.com/163fafxryto.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163bqbuooik.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163utdqbdil.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163yzudsxdf.html

#ifndef X_H
来源：http://www.sxryk.cn/163wbnmtveu.html

#define X_H
来源：http://www.aibaodan.cn/163glsdzewc.html

#endif
来源：http://www.aibaodan.cn/163yvsfnlrr.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163hcdkptnd.html

#include <iostream>
来源：http://www.sxryk.cn/163iljxirld.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163tqztvsnb.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163imczqjye.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163khitclta.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163gunxtjud.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163ybfdqzwl.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163wfbgtyvo.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163cpeecznr.html

[S35] C++：map
来源：http://www.xuanzx.com/163fpfmrubi.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163zceiknjd.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163mkzwqezf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163pvhgcocs.html

[S37] C++：set
来源：http://www.sxryk.cn/163qogfswno.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163rqfpnaoa.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163iezabnnp.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163dquvzayb.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163mjivxfrd.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163xdfdvxmb.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163qkjmwptd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163ebnkniwg.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163fglopyjl.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163jgoqqjrk.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163jjzuzccb.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163oltmeahn.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163cdhfxuwu.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163fhzqnmjf.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163hjwvojbv.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163tmamcggj.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163hkuanfgx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163aufynlzi.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163inzuevlc.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163ykntqzxr.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163qkltvere.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163omkanrpc.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163syggvdwh.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163pgliavdg.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163veixogqc.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163cchvyvxl.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163smpshuzd.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163qolaxyjl.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163spzhrmrm.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163zqxypctg.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163uxmhmswb.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163qvxbwtpy.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163ekfbeuwx.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163laiuthzy.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163yxhqdejf.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163qwsoxdnl.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163oycmxkmj.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163rugjozuf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163dqmimpdl.html

[S56] C++：optional
来源：http://www.sxryk.cn/163adisaobo.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ndhpbgau.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163vjuhqbyo.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163closcjvb.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163lkrydbha.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163oyxjluuf.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163lnshmhdj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163dexzecqp.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163hyobfqre.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163gutwhgsw.html

================================================================================
来源：http://www.sxryk.cn/163xqoynvve.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163rjsptizr.html

================================================================================
来源：http://www.xuanzx.com/163kczwwpxu.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163dzubybbm.html

println("Hello")
来源：http://www.aibaodan.cn/163slpkgext.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163bqgwmhji.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163copljrlq.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163vttowhtf.html

"值: $b"
来源：http://www.sxryk.cn/163zxxfrwob.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163eeqwaikv.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163gnrqyjuo.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163xpemvzcq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ezztcmjv.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163flsjqfad.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163qzxhrjpu.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163vjifgdom.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163fkbqmlxm.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163ypssvlup.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163njkiklid.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163jcthbldf.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163ewziwdna.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163zfglsmha.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163lnyrcqnd.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163syufqyys.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163psfdnovo.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163qhydnhuo.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163yiauaman.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ctmrlvhi.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163roekftgu.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163jmjycwgj.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163hrnekekc.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163agoordbp.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163thnyizwk.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163xxzfojgq.html

print("Hello")
来源：http://www.sxryk.cn/163aakcqqfh.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163hythcrzd.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ueqruxuk.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163mnqpoqve.html

"值: \(b)"
来源：http://www.xuanzx.com/163rvebsdeu.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163dbkjbqnq.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163jaudmpfz.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163reyvfqsj.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163lixolfbr.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163rmtsteum.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163qmbjuxdd.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163olrenxqg.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163kmgasrqg.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163rdkyxzpv.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163siesgxke.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163nkjapnpp.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163pguegigz.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163iigxsevc.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163juhksthd.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163nctgqrrt.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163uxezdfhl.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163mxvuhfgd.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163hxlcfydn.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163kfzdzkro.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163iqwyselr.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163adnkmoxg.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163ishkerzw.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163izvgtuty.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163qcdntseh.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163dykkeuvi.html

print("Hello")
来源：http://www.xuanzx.com/163tqcxfelh.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163ahfkmgsb.html

local a = 1
来源：http://www.sxryk.cn/163wueyrprs.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163xzpqnnud.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163xtmkwyqt.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163zkrevqgd.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163iagbedyt.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163svnasxua.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163dgspxkdm.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163ncoojzyh.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163kmymlsne.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163uyiqcuge.html

"a" .. "b"
来源：http://www.xuanzx.com/163ecqozqne.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163fnbryolh.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163nhromzey.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163omlwnfal.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163pbaktqed.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163xfdlyoxx.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163exvfjzpe.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163tikfxqqz.html

print "Hello\n";
来源：http://www.xuanzx.com/163fqfwizyr.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163yerlsbrm.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163vijpjfyu.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163cffeucfx.html

"值: $a"
来源：http://www.xuanzx.com/163vqpdwqhf.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163vzzmryux.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163vgbzkmpz.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163tywnnqsh.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163hwcuzlfx.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163ltxczcwf.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163vlevhxoj.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163khsbnnpi.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163cqqnjtsb.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163qrvjcdvu.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163ivrgvotr.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163dgmrgeeq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163cxwzahui.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163bfwmptku.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163fokcxtzy.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163ndfamezt.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163qvthlpwj.html

println("Hello")
来源：http://www.sxryk.cn/163rsuhaxuq.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163uezotbyd.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163wvseideo.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163fylxpayr.html

s"值: $b"
来源：http://www.aibaodan.cn/163voyojudz.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163dvipnclh.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ivyvkoii.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163dytiemko.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163dxclckgw.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163xvhopeqj.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163qlkskquc.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163aljwehat.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163ucyunnbt.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163yccxvaok.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163rgzetrim.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163jexxoigx.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163jsfbdmby.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163juwvkekd.html


<!-- 参考信息 -->