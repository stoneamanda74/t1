外链999!wailian999！

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163bsyvazhg.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163yjzenzlw.html

wc -l a.txt
来源：http://www.aibaodan.cn/163jxxtvikp.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163uwmjeozv.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163heyzoori.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ldapkqjb.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163dsqlbaax.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163nlxaabeg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163kexstlla.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163xosrlbxd.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163zggdbgsj.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163uraivkle.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163mggnkkdi.html

[R58] 下载文件
来源：http://www.xuanzx.com/163qdlvhjzz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163dhfbupza.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163wssymhlm.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163rbdkwsjy.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163pgznjbnz.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163sbfvjrql.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163uzcksybk.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163xesvfstt.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163qlohksbr.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163jqjrosxr.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ldkmtygt.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163cabdftaf.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163dkommfbd.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163fabknrzd.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163avbeuseb.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163figqwxdv.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ibhxgnjs.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163nqkexvib.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163lgwdggop.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163pwofldvl.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ewcmvtza.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163cyhujdmr.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163xufdysly.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163dyczrhfv.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163wnszgznk.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163xtlaqemo.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163amvkitcm.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163jouyfsti.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ijelkgoz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163ljyjodnt.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163ezmbvxce.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163ozulcyct.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ujtlqlqd.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163iapzfbxi.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163tpwcpnla.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163tbuaevfs.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163qaxqpiww.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163tjgtiktu.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163caayojoz.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163uzttcurg.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163xcltlyaa.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163fgxulnut.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163pmnsyxkx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163gxbmddjc.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163sepmvgbn.html

time ./run.sh
来源：http://www.aibaodan.cn/163ebtmzojr.html

================================================================================
来源：http://www.xuanzx.com/163foucspxz.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163hwncohwd.html

================================================================================
来源：http://www.aibaodan.cn/163ytkbfexu.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163zggpsbbs.html

#include <stdio.h>
来源：http://www.xuanzx.com/163oeqfklmo.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163mjovvckl.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163aqiiifdp.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163jjypdejd.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163uvhcwtaf.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163buypyfkx.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163wqjpbalm.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163cgfdvwjk.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163btonvzne.html

strlen(s)
来源：http://www.aibaodan.cn/163kirwiyhl.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163mqgxlhvm.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163hcaylcbp.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163brdxjlvm.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163krqcexxl.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163vwxhzudo.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163gzgpuuqc.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163tjvujcfh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163wwtspmiw.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163zgsgpbwx.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163lxqmqjwz.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163bxdawhfv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163vfccwpsq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163wunfhjhu.html

fclose(f);
来源：http://www.xuanzx.com/163twikdaok.html

[S12] C：写文件
来源：http://www.sxryk.cn/163mazmaxpi.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163ektdolqd.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163ohjkkzko.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163nobodrlk.html

[S14] C：枚举
来源：http://www.xuanzx.com/163oildqaay.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163jojxcqyt.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ykftfpbh.html

(double) a / b
来源：http://www.aibaodan.cn/163jwfwrpim.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163sguzcfta.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163wbtigdfj.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163aeopozcr.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163mfqrwdvo.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ebsumwbz.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163vwgrsqau.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163zlcdnnwo.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163cwtoguso.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163dimwqowz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163cweusawq.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163fqomslag.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163umtfzwhy.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163nkourvbp.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163mkypeigk.html

[S23] C：随机数
来源：http://www.xuanzx.com/163fnfyzfmu.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163vqvxjskj.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163sfnvvllc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ybtxnwrd.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163bhjftnaw.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163zicxutdl.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ovrcyjlg.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163dpcabpxy.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163fmibxzgz.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163xezgojyb.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163lnogryzf.html

static int counter = 0;
来源：http://www.aibaodan.cn/163vdspvsoc.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163ltrszdxx.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163iapsnsyi.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163csrrzzbu.html

#ifndef X_H
来源：http://www.aibaodan.cn/163tmqgbkty.html

#define X_H
来源：http://www.xuanzx.com/163krmezwja.html

#endif
来源：http://www.aibaodan.cn/163opgflzld.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163yacccnnd.html

#include <iostream>
来源：http://www.xuanzx.com/163dlsmjslq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163qvsybcsa.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163exknsfjo.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163cnjhlyij.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163bvpvpkqc.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163xiidumxi.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163mxbqjkcv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163xzeclhjb.html

[S35] C++：map
来源：http://www.aibaodan.cn/163pxgdurlp.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163qaokphne.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163yfjbkvow.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ymbdnumw.html

[S37] C++：set
来源：http://www.aibaodan.cn/163zgsxohez.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163kxxjrxvn.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163lwbbnied.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163daksakpj.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163rijqgstr.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163jjzncjtf.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163pmsknkuf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163dvgxhihk.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163oytfddko.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163ocfkezdp.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163impceein.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163hyuiimas.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ssqcovsr.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163pepsuwyn.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163pjqbokqm.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163vxwqxuhn.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163cyskqavm.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163kalhxxaf.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163uqirksvm.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163cdpiztlt.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ojzhgrnv.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163yyutonop.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163bgrtuweh.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163zlgevoca.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163cbrmjtsn.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163edzcjrvf.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163cgzkkmnq.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163rccqnvic.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163hdfgltho.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163skzstlzb.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163fwnbutjj.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163rloukmcy.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163yxfsuswb.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163fmqjqdgw.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163yqizlafo.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163dkegrqlo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163yfsipwpu.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163wzxgvrto.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163hstmlctd.html

[S56] C++：optional
来源：http://www.sxryk.cn/163uhcusrjx.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163tgxarceq.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163ywsxbkdy.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163szyuezaz.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163heinzrsl.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163bmoferbv.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163gomhntcj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163mlgqrftg.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163wacaswoj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163ogquiziw.html

================================================================================
来源：http://www.aibaodan.cn/163gsiitqrq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163sygghjso.html

================================================================================
来源：http://www.sxryk.cn/163brgrhixb.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163uacjcgmd.html

println("Hello")
来源：http://www.aibaodan.cn/163epbhyvih.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163pvautqmx.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163muraitfi.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163elwqdmgb.html

"值: $b"
来源：http://www.aibaodan.cn/163ojaxtgst.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163jgnyqfpa.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163eupqjles.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163wttwlhfa.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163denercbi.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163yztnqfqf.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163nokhooph.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163rlhaqond.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163vszverlx.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163neucnzzo.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163bptugens.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163wsvoijsn.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163xfmsxtpl.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163wkcvirdf.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163zobcaiyr.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163vfizvvtg.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163dvvqywxv.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163ndklnxze.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163qwixlxab.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163cbtjowce.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163zhqmaoob.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163yhmxtlcw.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163dmunldih.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163suddpsik.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163vduklttr.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163vffdyspr.html

print("Hello")
来源：http://www.sxryk.cn/163yajcnubj.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163seemkmed.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ffmazzqj.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163lnxbtens.html

"值: \(b)"
来源：http://www.sxryk.cn/163cfoxfmei.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163zidqhnef.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163oshujjdf.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163lykvigzx.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163uxjnyjqd.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163fcyfbbxk.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163bjywdjsi.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163efqiwpww.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163eschaeyc.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163twanwnrq.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163cnyrgwsq.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163vpibvoxf.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163tzqfrdux.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163nduwisjw.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163lundpput.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163mdfuzhvh.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ccsrlfzu.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163xtmqnnwf.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163rqeycgzf.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163jfxjtzch.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163atwrpykr.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163cytrptly.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163chgdtxsw.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163urugncoa.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163mfeopmqq.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163ujuouteu.html

print("Hello")
来源：http://www.aibaodan.cn/163qlfzzlwc.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163yztqcypy.html

local a = 1
来源：http://www.xuanzx.com/163kdjkivyx.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163qbmzcmaw.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163onqvfmpv.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163wxsnaceb.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163pvucdhkd.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163jsterjof.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163mordgxdg.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163spyfcaka.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163tugshjgw.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163fbbgswdu.html

"a" .. "b"
来源：http://www.aibaodan.cn/163nwuwjvde.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163frttagbc.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163sjyotxrb.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163beyynnsg.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163zyzfxitp.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163dwlinzkq.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163cpmfvvuy.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163yidkowyc.html

print "Hello\n";
来源：http://www.xuanzx.com/163actnijgv.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163mkqrvmae.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163ppydkoit.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163pjklvugx.html

"值: $a"
来源：http://www.sxryk.cn/163qmxqamxi.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163boouzwki.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163tpwcaxyi.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163qnyqoxwm.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163krsvsgke.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163znsmxrfy.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163tltkufnn.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163zdwoquiy.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163iepckosg.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163oqqgvpgb.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163xtwbhydx.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163xetuobnq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163mbeedzcs.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163dqakpkxr.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163ocphjzpy.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163irhuctli.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163dlscxlzl.html

println("Hello")
来源：http://www.xuanzx.com/163usryekup.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163uiodeylj.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163cwambwmn.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163qsvuwpon.html

s"值: $b"
来源：http://www.sxryk.cn/163jfserwzn.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163ugxdleci.html


<!-- 参考信息 -->