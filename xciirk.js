外链999!wailian999！

files=$(ls -1)
来源：http://www.sxryk.cn/163frjjpkgd.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163rnckiryr.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163wxgukjqm.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163bywwluul.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163qmdxwuyt.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163sxiufywn.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163oojlrjqz.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163gjssvryi.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163zrpzbwwe.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163tlnivshy.html

wc -l < a.txt
来源：http://www.sxryk.cn/163aegybvch.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163nqjmmvis.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163inrmlmcu.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163mootwmul.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163rzvdjoaf.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163yffavjoa.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163hfkbwhdl.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163mvpogxxa.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163jnhoikqe.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163sjrilftp.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163pmacqekj.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163mzzlnntd.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163nefyucnq.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163lwrbrffb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163zsejsxyv.html

[R50] awk 求和
来源：http://www.sxryk.cn/163cpcwxnuf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163rvcfxmmh.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163bowcaxvr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163vowrwqtc.html

[R52] 统计行数
来源：http://www.xuanzx.com/163lybuqnaz.html

wc -l a.txt
来源：http://www.xuanzx.com/163iangetdx.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163nrbdaxnc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163siqpnfrj.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163tkgolhqg.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163snbdqrrr.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163nvjrrlbc.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163iudcbkqk.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163zybfirxh.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163fvgkkxfc.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163vykdgjhb.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163gnhchaen.html

[R58] 下载文件
来源：http://www.xuanzx.com/163aigrgpcp.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163mhndppbi.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163emrawipm.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163pxkprtgq.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163xoxgmpst.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163bxcczlmv.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163zuhlrzop.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163joanngko.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163hhxkjlcu.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163igsevzht.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163dlkwetgr.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163yrngmldm.html

[R64] 结束进程
来源：http://www.xuanzx.com/163wzwzyyjj.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163txthctpy.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163oihaqihn.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163dcnhxlzu.html

[R66] 定时任务
来源：http://www.xuanzx.com/163kqdsmhsj.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163uxuivzjv.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163kjukmtog.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163aoxydwak.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163iwuzliru.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163bvkaniay.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163ngfrymwd.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163olkrralm.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163mhpzhegc.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163sjqljboi.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163bxvtzqls.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163wvvfzqnz.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163xvfvikxe.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163jxkppcfv.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163avorlyim.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163slvzvuml.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163reklykjp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163yykakkdo.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163wxcnifqq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163efehefpi.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163fastglnl.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163lkazuxgi.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163djxdeeln.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ikknojvs.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163ivojdlud.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163pucrttdb.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163xptuzghy.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163azujufba.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163nhfmtodw.html

time ./run.sh
来源：http://www.aibaodan.cn/163piddcjxr.html

================================================================================
来源：http://www.sxryk.cn/163gwdywimw.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163mrimxeej.html

================================================================================
来源：http://www.aibaodan.cn/163jbgdctse.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163tcfyumub.html

#include <stdio.h>
来源：http://www.xuanzx.com/163mtqrrhkl.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163korcwmab.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163uosnokae.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163hjkvplbq.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163rjerliai.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163khzvylsf.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163taqdgjxk.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163abmkzkqy.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163lopqouqw.html

strlen(s)
来源：http://www.xuanzx.com/163wtdwfjtl.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163yionomhz.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163lqgkcvec.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163yrvbjbtq.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163zhjwuyni.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163usqlzeww.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163inqcyawh.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163ddplsuik.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163phsjpguo.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163cetcpgnk.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163geozhder.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163esasfnvg.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163zrlciaak.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163jzeggzli.html

fclose(f);
来源：http://www.sxryk.cn/163irvomhgq.html

[S12] C：写文件
来源：http://www.sxryk.cn/163hxaemekk.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163prftnyty.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163bjhymggk.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163evzdluvh.html

[S14] C：枚举
来源：http://www.sxryk.cn/163oxfbbsdv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163cubrtrfs.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163vokttfxq.html

(double) a / b
来源：http://www.xuanzx.com/163rpupwlgj.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163dmjlbktz.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163oztkewak.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163fedhvcby.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163ejpwmyzd.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163vtnsgvcy.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163msaawmfl.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163nemtyrnt.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163bztsisnb.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163skuvwmrt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163spidxszf.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163dcxqbjuw.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163zxisnknd.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163ahaowgye.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163cfhxkxoc.html

[S23] C：随机数
来源：http://www.sxryk.cn/163fdmbixva.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ugnleays.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163zjiwxtds.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163nhwqpogg.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163ewrnqraq.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163whuofjrp.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163ywjgtwkc.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163xajsownn.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163qgqztwlm.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163yccbocnf.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163afipnkwt.html

static int counter = 0;
来源：http://www.sxryk.cn/163lpzviqot.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163btbrvzzz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163sdlrswaq.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163qmunpsax.html

#ifndef X_H
来源：http://www.xuanzx.com/163arceoafa.html

#define X_H
来源：http://www.aibaodan.cn/163yvvltvgs.html

#endif
来源：http://www.sxryk.cn/163wxdecawn.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163vihkalmd.html

#include <iostream>
来源：http://www.xuanzx.com/163vhilzked.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ymtpgbbu.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163vtuogmpn.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163tjaetetq.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163aqpzwahf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163sgzqxhrh.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163iaxhuuvv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163voyatqlp.html

[S35] C++：map
来源：http://www.aibaodan.cn/163jsvwliua.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163lhoqlkcy.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163evngvczb.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163afgldbsy.html

[S37] C++：set
来源：http://www.xuanzx.com/163oigpmtqw.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163kbvvlcif.html

[S38] C++：排序
来源：http://www.sxryk.cn/163wlxqkmfo.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163jwqlrfyn.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163ggybcxgn.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163prbloazo.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163sdcujgcf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163vrsifhur.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163gmhvvvui.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163orhnrrnv.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163ghygskbm.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163fhnyvpwi.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163awfzvysz.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163osopipjo.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163eqgwhrte.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163foubxloz.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163tvouyzio.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163djzaajqu.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163tqyhgkxy.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ivbgvhpz.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163fsoimejg.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163yatuqips.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163zidkjjft.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163xmymvubf.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163fttabfdf.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163lsryctfv.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163hkhukvih.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ruryteou.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163drhjxwcx.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163rblmzaxe.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163gkbysflb.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163punhxwto.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163xkjigbfx.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163yujfgifq.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163yvamyjlg.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163sqtvkknu.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163qefuzlmo.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163gihccivu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163hfwujxyf.html

[S56] C++：optional
来源：http://www.sxryk.cn/163inciybjw.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163pzkijpgd.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163bhdwzukr.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163vpbhpfbm.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163hafnvgvm.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163llwrwubt.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163owzbilai.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163pcuagaux.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163mvlbqchq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163chjocjak.html

================================================================================
来源：http://www.sxryk.cn/163dvmzbfdw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163iwtuxepb.html

================================================================================
来源：http://www.sxryk.cn/163dnmwffuc.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163tlxayrfe.html

println("Hello")
来源：http://www.sxryk.cn/163pnakdtzz.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163uprbvudg.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163xgycxapk.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ictsmxer.html

"值: $b"
来源：http://www.sxryk.cn/163hibwhbck.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163rqmxnjqk.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163cjaqqxay.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163psnnnvsa.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163qbjyxhbd.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163bybdcosa.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163nohqqxqi.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163pembpunt.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ocsgvlfy.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163brjgflgq.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163ulpndtes.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163rczbbiyo.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ghltldro.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163yobuhopq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163zwfijeed.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163cuhmvwpd.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163reahtozz.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163tazslvkq.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163zqixnahz.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163ijvtlywj.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163evjdtwwe.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163btvvdmnq.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163wxxgopbp.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163qnwkdett.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163xtdrjudn.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163xmfytbst.html

print("Hello")
来源：http://www.xuanzx.com/163mpaqwwpr.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163adjqvbcu.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163ufeucyub.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163pjftoyrv.html

"值: \(b)"
来源：http://www.sxryk.cn/163gqvnznxh.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163kycaapsa.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163onxuuqdj.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163fitzaezs.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163mrewhryv.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163dadfxcnt.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163ryoiwjaj.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163nibttilj.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163wzwvkppp.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163hhbmbpdh.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163asvxcevs.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163qxesnsyb.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163ljxqytnb.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163pcoyhydr.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163iypjqkko.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163kazzbtba.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163nbiqqdij.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163mrbiennx.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163ncltdeck.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163xuqonbuf.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163zunbxpcg.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163resnlova.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163fnbciaxj.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163mpmidgui.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163azjndlzp.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163tpcjmjvl.html

print("Hello")
来源：http://www.aibaodan.cn/163nanzitpv.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163etjghxzp.html

local a = 1
来源：http://www.sxryk.cn/163gpjzlrhu.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163islszpfx.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163sqgdubqq.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163bxanniiu.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163tjdahkub.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163djoiwezm.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163pvyllglr.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163grdktvoa.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163fvlcstga.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163lvjzgzln.html

"a" .. "b"
来源：http://www.sxryk.cn/163lrlkdiov.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163kbqdxfuc.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163lmegqofk.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163rehoekds.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163nwmaijxv.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163iwhhebac.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163hzvsyqjy.html


<!-- 参考信息 -->