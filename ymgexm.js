外链999!wailian999！

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163tkwjlbxa.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163orjncrxt.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163hatjpqkk.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163njyviinh.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163qpywudaq.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163zypadujv.html

wc -l a.txt
来源：http://www.xuanzx.com/163npurgcxx.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163xzphszsp.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163jsaplwrb.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ucdwvjbx.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163rbhttsdq.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163emjetjff.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163crisnznv.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163rlqvvten.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163rrswawhn.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163popgxdnq.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163nvteljpw.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163xahiwxhy.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163inaqcedt.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163setpogne.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163nyektmku.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163kjcwmyvv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163klserldc.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ygtidqwg.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163iutqcpmh.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163rienfhjt.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163jzgfdqlz.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163xbxqsfbn.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163vgclbyzt.html

[R64] 结束进程
来源：http://www.sxryk.cn/163bizbgtsv.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163jbhictos.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163mreqqpuz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163zbhfwaka.html

[R66] 定时任务
来源：http://www.sxryk.cn/163kjdxjqop.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163rfjhbpht.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163rlapclgq.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163wkegsufb.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163flcdwbae.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163rlnadkks.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163tkbiwtbp.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163rxfbpuis.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163kpgtcglz.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163cfhfxsuq.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163ktbzifgi.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163nfmqlinw.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163bsihrqhk.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163pauistzu.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163qdihjyfy.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163nuwkqsur.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163tnulszel.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163uynaraus.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163uvyixkfi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163qhlsyxmt.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163hibcuggx.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ycffziei.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163jafuzixs.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163shcypyxq.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163jhpodfbn.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163kjfsjdbd.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163upjlgvel.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163qsdssxhk.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163xywoabhi.html

time ./run.sh
来源：http://www.sxryk.cn/163wbotglyx.html

================================================================================
来源：http://www.sxryk.cn/163xtektwrq.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163nqynmykr.html

================================================================================
来源：http://www.xuanzx.com/163xdqljlzd.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163jkbzxfwi.html

#include <stdio.h>
来源：http://www.sxryk.cn/163nvqkyfkz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163dbhrlgjq.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163zetxbvky.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163tlcfiymd.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163hiaxvavw.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163wxanhvuc.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163vifwueex.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163yrhbcbra.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163plnsbfcm.html

strlen(s)
来源：http://www.sxryk.cn/163zpbkdalz.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163cdrqgsoa.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163gulsenwv.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163vzavveob.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163zegyzjvg.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163nlccpgjs.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163hznefhuv.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163rekfqkox.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163mbpjaikj.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163sslxpmag.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ihwuzxas.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163mmsljssg.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163tnkdnuec.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163iayzkqzn.html

fclose(f);
来源：http://www.aibaodan.cn/163omhbduyh.html

[S12] C：写文件
来源：http://www.sxryk.cn/163wzxsfzzx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ychzokyp.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163ntgcabkg.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163mrvltrba.html

[S14] C：枚举
来源：http://www.sxryk.cn/163pshglbzk.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163eqzqzfnq.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163kygvukpx.html

(double) a / b
来源：http://www.xuanzx.com/163pucvawfh.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163bicksyja.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ufcqkysw.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163typisooe.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ieaxuonu.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163cocudhka.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163mtthffth.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163glaowhwx.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ljrrdlbs.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163zednnxhq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163wnmnaeoj.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163lnxxwphi.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163rwvvmnhx.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163dpwzlqyw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163fgksrsxh.html

[S23] C：随机数
来源：http://www.xuanzx.com/163mqderlst.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163pswewube.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163sedemmeh.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163jrvtbhyx.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163rjdjmmxj.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163vybaxjtt.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163axaziehq.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163kanuofhs.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163uamuxupt.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163llpsbdww.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163oqqozfem.html

static int counter = 0;
来源：http://www.aibaodan.cn/163oxpuscaf.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163khghxijl.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163gomvyxou.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163cwkocrus.html

#ifndef X_H
来源：http://www.aibaodan.cn/163rttnwyqt.html

#define X_H
来源：http://www.aibaodan.cn/163mmeofzud.html

#endif
来源：http://www.aibaodan.cn/163vkzlgfnx.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163vjgoibac.html

#include <iostream>
来源：http://www.xuanzx.com/163ilrfdxjm.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163uvztsymv.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ngcubdkx.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163dfmgokmf.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163tlhycvzh.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163jktbuxzo.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163srzeiqxx.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ujcwuswj.html

[S35] C++：map
来源：http://www.sxryk.cn/163qfivkvja.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163zmggzjdf.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163baesekjl.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163couhggvc.html

[S37] C++：set
来源：http://www.xuanzx.com/163nppkiqfz.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163gkhzfypp.html

[S38] C++：排序
来源：http://www.sxryk.cn/163zpkmasre.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163jabuispb.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163dqbxqbpk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163ncsfdkrf.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163gsxivaxi.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163pslafqfq.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163szzrzesn.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163uxpbqpjz.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163gcyamhbg.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163hmsdhfuj.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163sjsjlapc.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163unqdhsse.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163hecfkxij.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163eifbefyo.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163lmyvgksi.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163dvfhiklg.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ogjjmeum.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163zzimsolt.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163yqoxcuoq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163jxicqfob.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163qxesbygi.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163fwpyfeji.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163pzgoezpt.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163mkrmtxde.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163lfiyogla.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163cshdeeyh.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163vssbdyzn.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163etujayzm.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163anczfxpe.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163jylamnkd.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163jsabkfxa.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163xyjcvylm.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163duebicnu.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163xbvknvxj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163dbmvaoeo.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163bwavotst.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163ybokcjvc.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163tpheblgp.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163lfbmrbjf.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163zculxtcs.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163mabzolqe.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163vrmarvtm.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163dixgkojl.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163owhjlqas.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163fiboonls.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163rxltotuj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163afwlbzbx.html

================================================================================
来源：http://www.aibaodan.cn/163gdpthjpz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163mtqwzcbu.html

================================================================================
来源：http://www.aibaodan.cn/163iauvofsy.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163plisfspl.html

println("Hello")
来源：http://www.aibaodan.cn/163nnylrmvn.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163zipcgirb.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163uyvjqzff.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163ihpbhooo.html

"值: $b"
来源：http://www.sxryk.cn/163otymykcj.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163nubugsdh.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163kdrzgtap.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163hpzmniqo.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163diwcavoo.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163hjztmuat.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163qrvezjnc.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163qnkwdlta.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163tvrqpcsi.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163txnzomkq.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163sqlmdvwi.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163bpruhcrp.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163spyydsmw.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ksjhnpau.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163vvycrjmq.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163cywdbbnc.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163yivykbqv.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163hjiteetg.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163vvdapnod.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163icddzqbf.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163vzdtagsu.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163iihojpzq.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163yvyqrjjm.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163fwmhmxln.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163cokoluey.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163jjobiosw.html

print("Hello")
来源：http://www.xuanzx.com/163ubszqgdk.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163mkoumokq.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163mgcgtomh.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163uetnvrtm.html

"值: \(b)"
来源：http://www.xuanzx.com/163edmxewso.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163ukousxvy.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163izvmyowr.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163glliqrig.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163ceefglgv.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163jpiflhmr.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163qapftsjd.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163zbmgaqul.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163blxqeiqy.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163sbswwkvc.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163dwwldgls.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ndxmhcgq.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163ybvgswxm.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163jnnnshxz.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163hfdcesxl.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163gdpqhyez.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163bnwwnmee.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163lssuaqxc.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163bbwtctvj.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163zelgodqo.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163gitzwtbt.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163ajfhtkdq.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163ybfmdhwg.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163tzqpinwb.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163uhhbjeus.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163tmhlsflq.html

print("Hello")
来源：http://www.sxryk.cn/163oiipnazz.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163rqvhyadb.html

local a = 1
来源：http://www.sxryk.cn/163qfjjnqic.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163mphtobqu.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163pqgnpbqb.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163xfjgbpia.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163lotdnyka.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163cmwbtvcc.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163iwxmrzbu.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163oanyazim.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163gpjwmhcr.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163yxiutuxt.html

"a" .. "b"
来源：http://www.xuanzx.com/163hyalahcv.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163zlyuaryo.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163ysrtddch.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163qlxlczqj.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163jrobdvkp.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163jemtyfjs.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163ocakbnup.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163sclclkxn.html

print "Hello\n";
来源：http://www.xuanzx.com/163ajpqfmow.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163hgskzpsq.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163sygbcdbu.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163oaoxzcbp.html

"值: $a"
来源：http://www.aibaodan.cn/163jojdekqq.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163ydhngopf.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163qfozslki.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163toauwsnv.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163fudpwenm.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163tlagzpna.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163hizilvdl.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163zucxlhwk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163gdwcosfe.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163hcoiwqtc.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163ykovebgo.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163hugkowba.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163gyprtcac.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163pmmnrtws.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163wuvzurbc.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163zkazrqdr.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163yaeblobm.html

println("Hello")
来源：http://www.xuanzx.com/163wbdmtnap.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163orgowwgj.html


<!-- 参考信息 -->