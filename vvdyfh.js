外链999!wailian999！

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163rvtldyiu.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163mutzmert.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163laxcxqgj.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163ityysqpn.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163tdzllwgo.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163vxyajrdi.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163yambbvrx.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163njwhncak.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163aemwsskd.html

[R50] awk 求和
来源：http://www.sxryk.cn/163bnhbazmz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163kolaymww.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163mfynojdr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163pywjhzew.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163kinfgver.html

wc -l a.txt
来源：http://www.sxryk.cn/163dwynfdls.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163mfnyrove.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163cuzfneqp.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163lgjrjrzm.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163hlfkbysy.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163psxyrskh.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163hecbhysg.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163jfjtvxbg.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163ojyuceyi.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163nrqoxepm.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163knijjnnt.html

[R58] 下载文件
来源：http://www.sxryk.cn/163vfdkussb.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163szuhvqaa.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163zmxciiya.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163xfhemlur.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163uquyvwzv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163pmrdohrq.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163zuzdjmwg.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163dcqkjgyf.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163stxxbnyg.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163kysjotwy.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ltcslxzd.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163kdanyyek.html

[R64] 结束进程
来源：http://www.xuanzx.com/163lbakckik.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163napyunek.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163zsvdrnhx.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163jdzljgmn.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163labuxjvo.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163lkfqjdis.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163lbbjhobd.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163qztvbdhv.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163uwjhjisx.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163xwjtdsyz.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163zzftrrnz.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163tvacyqxl.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163tzsejeoa.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163skhhncln.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163jtcjqyfo.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163kagxlwdn.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163egyywekm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163hhfkqyro.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163amidybmj.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163wujgyiud.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163lbjhaqja.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163aqocwxpc.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163ebitokwh.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163hrgrkixj.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163jfaexihg.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163vvjinnag.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163hulenfmg.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163mwewxloj.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163knvawsju.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163jbajjgca.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163wshunrvh.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163ibgtaqvv.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163whmjfcpa.html

time ./run.sh
来源：http://www.aibaodan.cn/163sjahaafk.html

================================================================================
来源：http://www.sxryk.cn/163dpktcrdi.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163vfjdnwyq.html

================================================================================
来源：http://www.aibaodan.cn/163cnzaaaaz.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163xxpwvzqi.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ttiqtanc.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163dglejhca.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163xgnnjnha.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163igqwswwy.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163mbkupjhz.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163uojryjih.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163tlrymkgh.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163cfhjuftd.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163ufvaiiai.html

strlen(s)
来源：http://www.xuanzx.com/163shzbrfmh.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163fezklioj.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163xsjwbhru.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163tgteurkx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163alkmhopf.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163tifnnxwy.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163hppkgbsc.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163vsoolyfp.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ibepzpwm.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163qbnzqcdl.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163drubctez.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163nuugixam.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163nwenedqa.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163iotmhrlo.html

fclose(f);
来源：http://www.xuanzx.com/163sgnyqclf.html

[S12] C：写文件
来源：http://www.xuanzx.com/163hnyvwzmb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163igsdqdyn.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163rycieemz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163nqpqbtgv.html

[S14] C：枚举
来源：http://www.sxryk.cn/163obgcddvg.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163yyzvvvfy.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163kwzhjpmc.html

(double) a / b
来源：http://www.xuanzx.com/163bfqwypwr.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163yaccsltg.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ndkjuspg.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163seokookd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163mojxvlwg.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163eopdfesk.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163dmawaszg.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163sriotxmz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163rbqpgryj.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163gmvaputf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163coqwxlnw.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163dgwzntzy.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163npqqnzff.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163malthuyl.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163duzkswnz.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163tvdccsdy.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163pyltlcbx.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163uiejbwlg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ukaubasf.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163nscxyiqu.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163jbnwvlrq.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163fkzireqh.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163nhwvwxep.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163qbhomkvb.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163shrqmtka.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163afcrbudz.html

static int counter = 0;
来源：http://www.sxryk.cn/163xewbbbnt.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163pogjmhhv.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163iowrjsvn.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163odmmhjke.html

#ifndef X_H
来源：http://www.sxryk.cn/163wudxoxih.html

#define X_H
来源：http://www.sxryk.cn/163enslsmah.html

#endif
来源：http://www.aibaodan.cn/163grrwcull.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163uxyjenas.html

#include <iostream>
来源：http://www.sxryk.cn/163lkszsjot.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163qmducdzm.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163tqzloeyf.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163iplsfywt.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163zkamfdwr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163monhfqzh.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163sacwdknx.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163outattge.html

[S35] C++：map
来源：http://www.aibaodan.cn/163forfypxk.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163evfetkjo.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163exyjgwul.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163pvnlmgvg.html

[S37] C++：set
来源：http://www.xuanzx.com/163ckwvhvkg.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163xkasdgsd.html

[S38] C++：排序
来源：http://www.xuanzx.com/163bxamwfin.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163kdimmnfo.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163qvznfzia.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163hmdymori.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163qhupeard.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163yjttlhsy.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163auphxpjf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ifzrcwry.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163tvsmgvsk.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163dlqaauhr.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163shbbfews.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163psudhycc.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163jlawinrd.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163cthrmllm.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163fbvdjxrz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163tgvaikhj.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163leqmxhrf.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163crmtllrd.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163nxiajugw.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163xdelyjeg.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163dttfvtmv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163ifpqtwym.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163vrjbirsm.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163fmdhlbhj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ydjjtvgs.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163oychssfs.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163taszfmcx.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163uvvyhsay.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163iqjrzwop.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163iquxsqlk.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163izkttqmd.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163mhobfhkn.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163cgrcpegd.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163rbpystyd.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163mjurqqiq.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163ybgttzuf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163necdhtds.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163qeripbzu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163mojnjqjk.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163tlqjimit.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163ihbwtxzl.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ftjhdexx.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163lajkljuo.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163ahfygssu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163dvufmmhp.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163fprwhqse.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163kseayclm.html

================================================================================
来源：http://www.xuanzx.com/163wasbkznh.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163zfamkknm.html

================================================================================
来源：http://www.sxryk.cn/163bnnivpva.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163seeknacm.html

println("Hello")
来源：http://www.sxryk.cn/163objrajng.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163aibyfshk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163bqmlmufh.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163mhckiehx.html

"值: $b"
来源：http://www.sxryk.cn/163ndliifyq.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163iismqaxs.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ahierucy.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163vbztmtnk.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ibkxaixc.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163dlzlcaoi.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163xhpcjeqr.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ymleaxqm.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163qlzrlkvh.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163geboxhbw.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163cpsvalyb.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163rkllmujq.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163dqrnzmch.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163tjiolgst.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163wwjidlht.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163qoifkaqw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163eipuorjq.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163cufakkcx.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ngscmgck.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163axkjejum.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163posatkom.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163mbdjocjq.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163qywrcfzr.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163ckkqvcrm.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163umjyuyrw.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163evftuiof.html

print("Hello")
来源：http://www.aibaodan.cn/163pwfnmgmo.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163obkitkkr.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163vopmtqpn.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163qxurxavg.html

"值: \(b)"
来源：http://www.aibaodan.cn/163zobpiadv.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163juahmkut.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163ccqfgcuu.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163sifmvgol.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163evdlsobu.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163aujgrdrp.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163gvlxmscd.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163uojkdpeq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ugejnwgd.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163nmlsrpyq.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163phldgmbk.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163yjesujxz.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163adumpuwh.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163kfkbrjfd.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163xqrypymm.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163httzuttd.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163lvvtcizx.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163pqmosaeh.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163umgsghvw.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163mmimvluw.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163hpybiwjj.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163alydvahk.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163tmuoloqu.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163caqkwvzw.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163kntykjmb.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163holbotdr.html

print("Hello")
来源：http://www.aibaodan.cn/163agvnozmb.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163ngyfutch.html

local a = 1
来源：http://www.aibaodan.cn/163kvjrtjwd.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163mtyqygqq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163rwnlcgvv.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163gozqgczv.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163ziuhqzee.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163abzbakgw.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163ekqnzzex.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163pzpssyyz.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163rhetxkcn.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163grktyvoy.html

"a" .. "b"
来源：http://www.sxryk.cn/163ytwuanft.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163oezmcidw.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163nmldjxmn.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163pxdsouhg.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163jtqnniqb.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163gwdbmewu.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163jwhybaem.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163vvrwbgwz.html

print "Hello\n";
来源：http://www.sxryk.cn/163zudvryri.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163snwgzlln.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163psryipdo.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163kzonjmtb.html

"值: $a"
来源：http://www.aibaodan.cn/163rahiulop.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163mdoeeigo.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163zjcwxqay.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163ierzbxoz.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163mcxytrza.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163gfxkydyp.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ycwqidah.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163visyavwk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163kimyjhnw.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163ykvwbbfa.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163rkpwnmrg.html


<!-- 参考信息 -->