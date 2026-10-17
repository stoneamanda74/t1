外链999!wailian999！

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163rneafzgy.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163foprkuak.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163eszqddcq.html

[R45] 批量删除
来源：http://www.xuanzx.com/163torjnidv.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163wpefedrk.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163jzyoqntl.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163ctwgirch.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163dzdycxst.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163vcjpjqwq.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163mvnwxtkt.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163clfdgpan.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163tzztpoyz.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163moeoopxq.html

[R50] awk 求和
来源：http://www.sxryk.cn/163hobkieoe.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163pvojtunm.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163sgynnrqb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163wlfsioqk.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163lchlsapf.html

wc -l a.txt
来源：http://www.sxryk.cn/163oxhzofsf.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163qmmguhrj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163inoonwlx.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163ieaykwyg.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163nrnapiit.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163bozxqtdp.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163adlkblle.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163dwlmteve.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163vuchxrzn.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163eyafwzzx.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163bhpbjtcr.html

[R58] 下载文件
来源：http://www.xuanzx.com/163dehbyvwn.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163hwpibygb.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163yzhubvma.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163rtcztfvf.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163jqkrpsoy.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163ymfsfyrh.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163mfasfifn.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163rhtqsufs.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ctlbaquw.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163lzubahyz.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163nveuvdts.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163umsfhtya.html

[R64] 结束进程
来源：http://www.xuanzx.com/163nfxxluej.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163yqmrtjkx.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163avauvzxb.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163fhvbextu.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163dsgwmyaw.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163qnnlixme.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163pqshthji.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163xniluchl.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163nviqdleb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163viivtwwz.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163hsowknzl.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163lzeekpfk.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163txkcznet.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163kqpugccu.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163jpgtnrqb.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163exqheltb.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163nlxepcyu.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163elmwmdqh.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163xhqapfbm.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163nsadszly.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163lexlnyhe.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163eowqxoyt.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163srzyeicn.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163deqffgcf.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163jfnoovaw.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163fbozyfnr.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163jjhxriyk.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163npjrmyxv.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163rhowlbka.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163xdepeqwi.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163buyvxdtt.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163uaijkdef.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163cjrxnagq.html

time ./run.sh
来源：http://www.sxryk.cn/163lvehxtcq.html

================================================================================
来源：http://www.xuanzx.com/163qyeeinlu.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163prcwjirs.html

================================================================================
来源：http://www.aibaodan.cn/163ubieqyil.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163gjbsqufb.html

#include <stdio.h>
来源：http://www.sxryk.cn/163myqcoxlv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163thvangzr.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163gozebmye.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163hfugbulw.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ypgotffd.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163bvtcukkt.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163pqdhrers.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ulzhwmqp.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ggogspwp.html

strlen(s)
来源：http://www.sxryk.cn/163pbpxrcfw.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163vneczjsy.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163hkazklte.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163lzssqxze.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163fgitnrkr.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163zicwikxd.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163bhsevdfo.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163mwqmnwnp.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163rawbakie.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163gnotwiqo.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163fosdsjeb.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163mjpuukbg.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163dgsiarsq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163msethwyp.html

fclose(f);
来源：http://www.sxryk.cn/163tvscgnus.html

[S12] C：写文件
来源：http://www.xuanzx.com/163gtwzyava.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163gceacjke.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163kcuxagvo.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163kjkkzncd.html

[S14] C：枚举
来源：http://www.sxryk.cn/163kmmxocqh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163hirxtnge.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163dljvyssq.html

(double) a / b
来源：http://www.sxryk.cn/163jgzalkxp.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ubmduibp.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163wacnpdlz.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163kdmmncnv.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163vuqgmido.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163toojidpp.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163nqczxlbx.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163cwxkipnh.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163hsburelh.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163fhgnzjnp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163hyqzstiz.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163imbuzqab.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163occkaete.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163nltishbn.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163pilvjtiv.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163dexzxtms.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163hjkjrybn.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163jynnohgz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163uggeixeb.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163xhwwejbv.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163rejbbfpu.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163eftnneiq.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163xrnhvqtm.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163zoypzibn.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163dvasjlbs.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163elfdqpul.html

static int counter = 0;
来源：http://www.sxryk.cn/163jdijgrez.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163amltjhki.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163sioqhcdy.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163nbkjzsjb.html

#ifndef X_H
来源：http://www.aibaodan.cn/163jnfqeplg.html

#define X_H
来源：http://www.xuanzx.com/163esbonbbx.html

#endif
来源：http://www.xuanzx.com/163knjrnofe.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163cgvzjaej.html

#include <iostream>
来源：http://www.aibaodan.cn/163uaampoiu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ttkvtkjf.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163upzbadfo.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163wbcdyavl.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163jxsfjesg.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163zkewdmod.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163gxcplhdc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163rxmaljty.html

[S35] C++：map
来源：http://www.sxryk.cn/163jlgwhbeu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163nirovmwg.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163kfokaenv.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163pxltnxth.html

[S37] C++：set
来源：http://www.sxryk.cn/163uudvwmsq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163vucrqisk.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163njxwormc.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163rvqfrcbv.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163wsuhjzum.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163yjmvegiy.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ofgmsbok.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163nhkenfhw.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163ezpvohpg.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163oqkpfuyd.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163vymryart.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163avovdxro.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163ouvrjwza.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163heroquwy.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163cuvrhalc.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163gnsqyrby.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163uxijvucl.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ezwzvrgp.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163adriiaik.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163oerathfo.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163nzhirojr.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163udsozyus.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163hldzgtgc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163aawjjava.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163mjzkajgs.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163neqsnloz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163otsdswqz.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163rcmlpkwb.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163tpiqbytq.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163gqfkklbu.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163erqrgacp.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163pqwoisfr.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163bjrcrejo.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163qhayqniy.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163rkcuyvmp.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163wsdjpbvp.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ruagmzdp.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163gdpkqcjs.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ytmuxsnm.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163kcxlxpxy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163vxrsilxj.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ithdkgfi.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163cthwndxr.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163rfzsztte.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163dhoeaphk.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163itxaqpqf.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ijyxrfid.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163avhwufaa.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163qgvokspr.html

================================================================================
来源：http://www.aibaodan.cn/163rgzzvkjz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163qcvbtsxi.html

================================================================================
来源：http://www.aibaodan.cn/163oirbajuq.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163cnaamcjt.html

println("Hello")
来源：http://www.aibaodan.cn/163gsesstov.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163wzlilood.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163mgluikhd.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163tmfizpfc.html

"值: $b"
来源：http://www.aibaodan.cn/163joynezey.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163euaxfwko.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163idgdiyhg.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163axealatx.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163npgrrmlh.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163knaxvwnr.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163pxyjzuid.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ykadugqx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163jmexnema.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163owjsspbw.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163nhmbjlvr.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163eskovcsq.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163zufclnsu.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163dbmltziy.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163ryygesbj.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163uqymglls.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163roqvkyuc.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163edlgpxpt.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163dvjkoinj.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163pjvqopgz.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163akmwwdfg.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163codvaenn.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163eouqiqgh.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163kmoyeelg.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163vwaudxnk.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163tecnzwxl.html

print("Hello")
来源：http://www.aibaodan.cn/163eijnmzbb.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163xecjcgnw.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163irkkpeev.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163nhhusmhm.html

"值: \(b)"
来源：http://www.aibaodan.cn/163ivnygpch.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163imnuzsfa.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163myiqxilp.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163hmgbppzg.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163ebtlovok.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163mpbewqwy.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163ouzsljlj.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163tpgjwrdz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163qjfyufuj.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163uwzrmbzw.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163gnywdsbt.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163lpaancvm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163zrveacda.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163dsypuevt.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163ubwmmpnn.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163oxmmnpvs.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163gelvovmx.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163uxbtsfbr.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163oosadgnl.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163rzbydaph.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163zwcrczut.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163qnssgpwr.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163jlszofft.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163fvtbvuyi.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163flkmaeqc.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163ykbzklsv.html

print("Hello")
来源：http://www.sxryk.cn/163gquvriny.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163hkvipyaq.html

local a = 1
来源：http://www.xuanzx.com/163voyfknpz.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163reewrjtq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163ssqiwlqj.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163smgwgbxr.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163kqrvlbkr.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163emtntbgs.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163pputdhqe.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163rcxlxide.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163neipqkkw.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ehmrncna.html

"a" .. "b"
来源：http://www.sxryk.cn/163btmtspub.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163ltloaqvc.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163aefqglgu.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163jlvsxjzq.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163njoccujp.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163gdhhvszx.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163aotzyhnt.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163fimfqgxq.html

print "Hello\n";
来源：http://www.xuanzx.com/163ngiqmapi.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163dcbdamig.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163aodbdsqv.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163sfrdbpuw.html

"值: $a"
来源：http://www.aibaodan.cn/163iuekjcdv.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163yssmigsa.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163lpeocucw.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163ngczfutl.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163hznlfwvo.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163kodrgvyv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163osoomyof.html


<!-- 参考信息 -->