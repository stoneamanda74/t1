外链999!wailian999！

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ueyqayjd.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163hfnoezui.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163tzdakjxt.html

[R45] 批量删除
来源：http://www.sxryk.cn/163ykpbscem.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163ykfpcnty.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163nvurkzpk.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163iphqwpue.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163vyvetvll.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163wngyuzcl.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163otlettgn.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163moxgxuif.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163mmdawenq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163bbjmkaxh.html

[R50] awk 求和
来源：http://www.sxryk.cn/163vjhmtpvp.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163xlesiwtt.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163uheazqjl.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ricckrez.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163zubjlleh.html

wc -l a.txt
来源：http://www.sxryk.cn/163gezubtiw.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163fuqoojgv.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163ycgzzfnl.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163faljljzh.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163hsqviqru.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163gkjcrmyb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163xpttadic.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163sshedfbq.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163gqamkbpz.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163kvokcdan.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163idhxvfxi.html

[R58] 下载文件
来源：http://www.xuanzx.com/163octyfken.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163jecdugde.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163sydrawjr.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163llipueoa.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163aquazkel.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163vrfhmujb.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163jyydymgh.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163tlplcsab.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163uwixbosr.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163mhtuwbxl.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163xleszggj.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163rbimqwey.html

[R64] 结束进程
来源：http://www.xuanzx.com/163lwmhwtru.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163rxuzardj.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163nouvadxp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163egssfqvk.html

[R66] 定时任务
来源：http://www.xuanzx.com/163otdimbhl.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163nlzhtbgv.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163xrzwqszk.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163idutvlim.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163qzwmqyyp.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163tdcztqrf.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163wflfapuz.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163tomccepm.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ajopvnmo.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163jybrvjnd.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163bijusvpo.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163kiuoftsh.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163baapggjd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163wvkulkzu.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163tpfsfkih.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163vptjwtiz.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163yhmnseck.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163stxhexra.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163hljkxibm.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163wzmquopc.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163mcjxfwfj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163tbfgwloz.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163tfjqluav.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163fegjueaa.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163hsptgzsi.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163dgsocwrn.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163gvreeigc.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163keircmuc.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163dbcbslez.html

time ./run.sh
来源：http://www.aibaodan.cn/163wdrdfxga.html

================================================================================
来源：http://www.xuanzx.com/163tvdrtlpd.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163vqcxxhwo.html

================================================================================
来源：http://www.sxryk.cn/163idpclwon.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163mratatld.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ktwwxshw.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163licanwdz.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163vdsshszv.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163dplbqnux.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163jlqetczi.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163sevnzhub.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163rtwqzsgw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163yntrludw.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163zqsvjqic.html

strlen(s)
来源：http://www.sxryk.cn/163maztjrcb.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163kldprbmx.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163csfuwaux.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163vcyrvgek.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163utywyovs.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163jgwcaiyj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163mhrpxtsj.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163oferlpui.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163blzmkjey.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163towgyrmo.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163wkjywmib.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ctexjtro.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163goyqpdep.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163vqozcxox.html

fclose(f);
来源：http://www.sxryk.cn/163qnsbocip.html

[S12] C：写文件
来源：http://www.xuanzx.com/163mtecmnqd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163pgeovisg.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163ucyeucer.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ccrnyxwv.html

[S14] C：枚举
来源：http://www.sxryk.cn/163smugcxto.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163kcrkgjgr.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163axfxcsyw.html

(double) a / b
来源：http://www.xuanzx.com/163laklrqhv.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163azhyyyic.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163avzdcqdk.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163qczbltuk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163sshhcvsv.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163vwmytztm.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163ssfcksrx.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163qyqagqla.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163fgymqzyz.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163rdkojqgn.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163wrbfykum.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163pyynynsc.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163mryyvsxe.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163cbfbudus.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163wxhgkowr.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163kopywued.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163gwflrrit.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163tjlciohk.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163nvoqfqwu.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163aaokthpf.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163ldtnypus.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ulzjuarv.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163uxqjeawa.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163lclgjnqt.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163eypsagfp.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163nklqehpq.html

static int counter = 0;
来源：http://www.xuanzx.com/163hjxyvceh.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163anuelqkg.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163nazmbcue.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163bnymtwsp.html

#ifndef X_H
来源：http://www.sxryk.cn/163btffdijz.html

#define X_H
来源：http://www.aibaodan.cn/163uapivcaq.html

#endif
来源：http://www.aibaodan.cn/163fnpankmv.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163tmewxksh.html

#include <iostream>
来源：http://www.sxryk.cn/163wsauhxoz.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163xpcezddw.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163lvloqdzf.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163qckpnijq.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163rejcyofh.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163pjlsyaug.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163rbhfbryf.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163oczwhooh.html

[S35] C++：map
来源：http://www.xuanzx.com/163ptsrlgku.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163uojdfwmp.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163svvqoick.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163mwhulsar.html

[S37] C++：set
来源：http://www.xuanzx.com/163dyzglbxp.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163igqpgbuz.html

[S38] C++：排序
来源：http://www.sxryk.cn/163vhrvgaad.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163ltolscef.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163dbpxnsxj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163qxmcntqz.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163xlinqajy.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163nhtqrbpt.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163tymdughe.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163icehfubs.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163lfenmpdi.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163ehonapqt.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163pxixlbod.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163bcwftjbs.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163anldkzdi.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163sxwkbghl.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163pgwivqtf.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163qigfmnln.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163bplonyqk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163wnapnbva.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163lztsiyqu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163dfjgqcfa.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ckwtvhhe.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ktudrshv.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163bychqcrj.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163llvdedfr.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163vqweqdpc.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163mgndxpxh.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ooyuldtc.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163qiydythk.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163zrxvfpuk.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163lmmwblmt.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163uqpdgwox.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ojpqvjba.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163jiamkuhr.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163ycnpkoxn.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ohsnjdus.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163wjvqntjy.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163foeczhke.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163axxjhnml.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163avycukga.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163oonxykha.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163ldqxvocn.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163navewkgr.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163mddxqtqw.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163nhrytbzr.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163xjdrksfd.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163zlysgdfl.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163aoztqibm.html

================================================================================
来源：http://www.sxryk.cn/163qeyolmfm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163nxphdouu.html

================================================================================
来源：http://www.sxryk.cn/163vseydtnk.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163rdzulphn.html

println("Hello")
来源：http://www.sxryk.cn/163sueyamvh.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163cqmcpdsc.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163ivabfawk.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163lrjlvzfx.html

"值: $b"
来源：http://www.xuanzx.com/163lkpsxcoy.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163hfvcuyge.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163wzixicms.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163lidzachx.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163uggyurmq.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163xgeeerih.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163liwxqkxu.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ppuoiqdp.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163zsqtfxoj.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163bkfszizh.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163unpnmnlm.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ccvjckzf.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163ivfoddhe.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163arjhbmal.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163aprtitxh.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163agjmzfet.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163ouozcscy.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163nybduwjt.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163wzddghzm.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163hrmtxahe.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163knhodtwo.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163cqjvbdwn.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163rpehtnqg.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163mxuvktff.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163wuvetjop.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163qnuqxtlv.html

print("Hello")
来源：http://www.aibaodan.cn/163xzfwrfsv.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163luhgpklr.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163mlrkolal.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163nbvlfvsy.html

"值: \(b)"
来源：http://www.aibaodan.cn/163gcmvxdss.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163auvyufra.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163vzfmhevu.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163jtnfvsbm.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163acnbezhy.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163tcloxycg.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163ljlfqcek.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163skjjmkgj.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163aywrshms.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163wnyprqkx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163dqbeiiln.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ycbvzdve.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163ymwtjmvz.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163ozmhyutu.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163zcqlxdks.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163orcdarxw.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163pegkhisi.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163fjjwneub.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163yxymzrlz.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163davzidrl.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163cexmwalm.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163lhqzdrsb.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163seqemfvm.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163cklpilvb.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163clwkjjsu.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163ugsmenzs.html

print("Hello")
来源：http://www.xuanzx.com/163wpjedoit.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163syxhdlsn.html

local a = 1
来源：http://www.aibaodan.cn/163ufzmnbyp.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163icqvytzh.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163fzmqnkyj.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163hzncxjwt.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163igjhzgbj.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163jgpatsir.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163vikymcve.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163wuebdpos.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163ywircrlf.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163nzztofmu.html

"a" .. "b"
来源：http://www.xuanzx.com/163opwdkgne.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163lfpknmfp.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163ktzmhizj.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163lnaqnulh.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163iadzuytt.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163riqvgudv.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163cvwwfosr.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163awhgqaum.html

print "Hello\n";
来源：http://www.aibaodan.cn/163xtseazsu.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163jodqiood.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163xsdwgkii.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163otcrphxu.html

"值: $a"
来源：http://www.aibaodan.cn/163zqjpozya.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163zdatwxli.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163uriolddx.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163ydxgyzru.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163htfcerur.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163evxywfut.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163wppwwlcl.html


<!-- 参考信息 -->