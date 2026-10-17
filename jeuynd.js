外链999!wailian999！

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163khymfsuq.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163fktkohsl.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163vpatsoxw.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163wbrdtjjb.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163ozgajajf.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163sfvzplho.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163vejcfcri.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163bvdnesxy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163kaogphtu.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163fxcotluv.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163pihskijn.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163tynsodsl.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163fuaufcnp.html

[R50] awk 求和
来源：http://www.sxryk.cn/163rlumguby.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163jfyuecra.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163vgmrvaqy.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163ojveeppk.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163jpjvofws.html

wc -l a.txt
来源：http://www.xuanzx.com/163zdhdhbly.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163zplanyee.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163tsbklaux.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163otfvcmze.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163acujgcaa.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163cmatsmif.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163kjlqtzhz.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163fnpbtbhn.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163drickdoq.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163wdgvcrve.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163jfzmywed.html

[R58] 下载文件
来源：http://www.xuanzx.com/163sdmafjma.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ytdzqyzx.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163tixykouv.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163daaicbbr.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ryzvlxtu.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163satdsmtd.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163kdezcwwd.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ovixddog.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163kcgjrqsw.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163rqeqskee.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ywichdjw.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163yhcamfqd.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163wapcdfhb.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163sjzjqzqn.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163jbzqkwtt.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163dnfcwvhw.html

[R66] 定时任务
来源：http://www.xuanzx.com/163jgdznbgf.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163ogumdhpp.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163kpubsxst.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163cvevrerq.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163hjsuxxsj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163ypcygykv.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163pvlckjqc.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163nyzlhjcc.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163udvvptpz.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163fenxxetb.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163olxzqbpv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163ksmwiwrw.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163agrbrijg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163chsmervm.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163bacdnxmj.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163ybstulfi.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163myirnpmx.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163awfqqdqk.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163zioamoug.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163vessfmvy.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163fknjscas.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163oxacfivz.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163aueielqh.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163jkxojyqk.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163lshklmjl.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163cjdyosnz.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163xwybjkxk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163qawoabef.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163bngiohht.html

time ./run.sh
来源：http://www.aibaodan.cn/163agnjjtfi.html

================================================================================
来源：http://www.sxryk.cn/163sfcvduvw.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163pgsnyomb.html

================================================================================
来源：http://www.xuanzx.com/163zdepifmp.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163jssmlnem.html

#include <stdio.h>
来源：http://www.sxryk.cn/163zjpiiscy.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163kiyeqzms.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163nxgcdawg.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163qkzrgyjj.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163xsbiqccx.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163cmyfwgzu.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163hgiipdvl.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163fdqvwjpg.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163xxgcgppb.html

strlen(s)
来源：http://www.sxryk.cn/163uunqiehn.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163fqhtgbce.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163fzosxilj.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163erwgtdqx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ixyqgwmi.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163unxsknqz.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163arjvjenk.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163khcyemeb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163domrkxjq.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163gftvuvhu.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163qvdpxkuq.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163blvzysqv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163xgmnfkjb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163wwprwkmg.html

fclose(f);
来源：http://www.aibaodan.cn/163ojmxmiyk.html

[S12] C：写文件
来源：http://www.xuanzx.com/163btmayuhi.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163qmtgsbzg.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163ixcgjqod.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163brvrueiv.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163nglgexok.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163cfrejbtr.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163sodlkptf.html

(double) a / b
来源：http://www.xuanzx.com/163czohcfgs.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163oxquabwg.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163bduofcay.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163hnhnwogm.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163adyzgatq.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163wfjplcdn.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163ydugiplc.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163wixhooww.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163nsxevmhp.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163vvnhzbyg.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163umuzdzmr.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163nlzplcgb.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ulgpdruu.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163gwzevohn.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163gpkykbzc.html

[S23] C：随机数
来源：http://www.xuanzx.com/163nrozesne.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163yasqapue.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163oadnivgd.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163wqvqndre.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163vhivustq.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163gqfyxlvd.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163rxahzekk.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163jnstgmpc.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163mccfvqud.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163clfniwyv.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163cfsqhlxv.html

static int counter = 0;
来源：http://www.sxryk.cn/163qutzknru.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163sjmwnirg.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163myjfcobl.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163omhrwyxs.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ntywojzp.html

#define X_H
来源：http://www.aibaodan.cn/163uznflcnu.html

#endif
来源：http://www.sxryk.cn/163gwpzbdry.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163sveuaxbf.html

#include <iostream>
来源：http://www.aibaodan.cn/163uyakjeci.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163sectosgq.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163wfcaceeb.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163wptghgja.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163nwvfwutp.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163ixaasioc.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163leajbeus.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163teimeaie.html

[S35] C++：map
来源：http://www.xuanzx.com/163fdfrubxx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163diseymsa.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163fknwdccd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163magwywbl.html

[S37] C++：set
来源：http://www.sxryk.cn/163tgyhloyh.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163jeexxhii.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163wxpycryu.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163rtnvuglc.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163kttomyag.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163gtkijzbx.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ojfnzjsg.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163hujlivbw.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163jxmhytdc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163bqalelyo.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163xwmclutg.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163wscvnlxp.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163remxzgei.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163rzsaccgi.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163rtqtqtrk.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163lbxttqvb.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163kcmodtih.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163sjycywyp.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163xkgzixmg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ttvvlivz.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163piwpfyup.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163jxlijzre.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163jmfyzkza.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163zveggkbb.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163afhbxnjk.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163eqrvyfyr.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163vmzogbmu.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163eezefqxw.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163knogwrpg.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163bcxhpyjk.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163gxzssdwt.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163bpxdmgpv.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163jbmeiecw.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163moccekpb.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163ipnqbcal.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163abkzabmi.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163vbgtgazi.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163cdagxmqd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163nshzacnb.html

[S56] C++：optional
来源：http://www.sxryk.cn/163hxrzabxh.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163wvwoxqxw.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163dlaqzdqf.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163qkmbghhv.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163lfwoedls.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163kgxypows.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163pznhrwdo.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ancamnoq.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163ruyqvfga.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163ioftvcly.html

================================================================================
来源：http://www.xuanzx.com/163xophpuxk.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163kqprzjkg.html

================================================================================
来源：http://www.sxryk.cn/163gguahksf.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163tkbedzpa.html

println("Hello")
来源：http://www.sxryk.cn/163breqkcfr.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163afzxrfxt.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163fkwitovt.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163tvjqimnz.html

"值: $b"
来源：http://www.aibaodan.cn/163dskbzaft.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163fxzvfgit.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163oleyplfu.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163qzpjgnje.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163nyavjapq.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ogksnaws.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163sbfncwyc.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163bhetupxo.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163bqrkjnco.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163zqxdebey.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163pnljkrou.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163uwfyfzif.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163gfeavmra.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163ocwlbtsp.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163khipczyd.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163mpdzmlmz.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163dwhkbyer.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163esklnmnb.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163rzvfyyzi.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163akgemxdk.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163fgekqfpx.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163kmbuptec.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163apbjhtxr.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163qindhzlq.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163euubgdwz.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163utdulbvm.html

print("Hello")
来源：http://www.aibaodan.cn/163ogkiyvfu.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163yryuinta.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163degpypqd.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163vofeqzmk.html

"值: \(b)"
来源：http://www.aibaodan.cn/163oqdqggcx.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163vcxvipgu.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163bhxsvula.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163cajfzozp.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163urhyiady.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163qaqsnlfg.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163npqvoivn.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163pdpecwgj.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163dgbuxvak.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163wdqoftjj.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163xxgjolos.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163wtdszkri.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163bmjmlklm.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163arrpjpmg.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163kkhamear.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163jlymddif.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163vmceoqwk.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163udbxasjm.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163gfvcrsbb.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163keetndba.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163lweiadtr.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163gfrrirka.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ifppwlih.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163mtbalrqe.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163kzjkaiuz.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163hcikzkvi.html

print("Hello")
来源：http://www.aibaodan.cn/163vmiqgomd.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163hyqmshlp.html

local a = 1
来源：http://www.aibaodan.cn/163tjutdhtl.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163uhjdtcav.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163dwdyyios.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163newdatwe.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163yjjholpq.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163kbpbyekz.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163ernjvspj.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163iqfahxfi.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163pbjkkcpk.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163urvctqsm.html

"a" .. "b"
来源：http://www.xuanzx.com/163snjesvnw.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163ydyzujby.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163kkwojdzq.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163xwoicapo.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163qocdmdri.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163wrtdzcis.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163wposlgjg.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163fubwbhbx.html

print "Hello\n";
来源：http://www.sxryk.cn/163cmenyplk.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163qavwlqfb.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163girqxnop.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163mbcpeqlb.html

"值: $a"
来源：http://www.xuanzx.com/163hcfwgnvl.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163zyccksnj.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163huuiisvm.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163gasskjii.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163ukecnhqt.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163kjvjskgf.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163arzwfmol.html


<!-- 参考信息 -->