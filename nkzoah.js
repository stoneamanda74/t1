外链999!wailian999！

files=$(ls -1)
来源：http://www.aibaodan.cn/163zhoyfexe.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163zbmnbfts.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163daturpye.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163pzyfuffj.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163gyenpruy.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163xhysctpy.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163hjbyhrub.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163eyvmuorb.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163rcyopxem.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163fntfplwb.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ttiwruev.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163aqbgfurp.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163vxfltbeo.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163rykzrdqu.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163firzjrpp.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163sgucebba.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163pyehbcbr.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163kesouqqo.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163nvppshuz.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163codmwhru.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163fgxtrwpu.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163jxmpfirp.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163wvhudjbn.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163pyadqrxx.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163uozsfeji.html

[R50] awk 求和
来源：http://www.sxryk.cn/163czvplpwg.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163exvhfvhh.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163kfjtetor.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163hbzxdgag.html

[R52] 统计行数
来源：http://www.xuanzx.com/163dzfznsyo.html

wc -l a.txt
来源：http://www.sxryk.cn/163tejinkiq.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163hsotdsgb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163vaupgpdo.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163bepcoxqw.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163jbdzqldj.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163iyitjgpz.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163lnihowmc.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163pfkxycps.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163bvzbzpbt.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163ljhdvuyx.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163jckpjapr.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ncxiyglo.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163przbmcnt.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163adonuzcs.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ithaqlbm.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163mnisckze.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163lwwsgprf.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163lplucjmb.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163ivhtcrhf.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163yzxtolao.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163iurxfgyg.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163vdnnjnpw.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163ucyymdwk.html

[R64] 结束进程
来源：http://www.sxryk.cn/163gefptfkf.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163nhcaqjig.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163btwwctsi.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163aaukuvzy.html

[R66] 定时任务
来源：http://www.xuanzx.com/163bgrljrii.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163nsxleqkw.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163tuouzpye.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163serkwqxa.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163tbzhskrs.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163ohxvqmwi.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163uhxocelj.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163yptdcllq.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163xayzabtz.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163adctsebc.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163vyrsdldo.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163cazinuns.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163fxtyuqcq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163zduumoyq.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163gkjpepli.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163gfdwpapi.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163slejkmsd.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163kgbjktgl.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163dnkhwpzw.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163zvodcall.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ahphusft.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163pabteyrb.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163gqvniomw.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163hcgmluti.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163tmldmkfy.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ubcrcyyl.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163birghtyy.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163rmeaktsc.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163yifibpls.html

time ./run.sh
来源：http://www.sxryk.cn/163lpjcifir.html

================================================================================
来源：http://www.xuanzx.com/163ejdwvjyj.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163jqgittmu.html

================================================================================
来源：http://www.xuanzx.com/163haindkst.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163jrakxosx.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163poddcujo.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163qoycckby.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163xnjjnunz.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163mjjriywh.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163ivsnbcsi.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163xylhuans.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163srqrswsa.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163arentwdx.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ebuqaifi.html

strlen(s)
来源：http://www.aibaodan.cn/163yeorcwac.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163waefnnkl.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163gzdbtbmt.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163vfynavwy.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163uvricwyo.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163xrsrigdc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163oobobfkw.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163pfhkcwkm.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163elprpuml.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163zcqaltej.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163eewtrfox.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163gjhduyah.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163dzxkhvzo.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163tedznxyr.html

fclose(f);
来源：http://www.aibaodan.cn/163ptjhgdcn.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163tpgsypif.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163xuorcozl.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163exwrtqrm.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163olsqhczc.html

[S14] C：枚举
来源：http://www.xuanzx.com/163yjnswkyr.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163kptwepxm.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163xhtyfmvl.html

(double) a / b
来源：http://www.sxryk.cn/163smsixziu.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163wkfcxkvw.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ncpetigg.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163dsbudnhn.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163xwxqjbtw.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163kfdrsuap.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163obwdlloo.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163hfedgyln.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163shwplqrz.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163vcvbxagb.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163bbgaxqno.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163btdgetpw.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163sffuputd.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163uyhkuaju.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163thwqkizd.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ozwgvuot.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ghwiorig.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163aybubqza.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163fuikzwsm.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163clknxzud.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163frndfoao.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ufwlfcga.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163aglynwzp.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ohgrtsxa.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163advfpcvm.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163oemqckwp.html

static int counter = 0;
来源：http://www.xuanzx.com/163pjqctwdu.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163jqzblmqg.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163wcmsaout.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163tjaxxmnr.html

#ifndef X_H
来源：http://www.sxryk.cn/163uxuenavo.html

#define X_H
来源：http://www.sxryk.cn/163iebftgnj.html

#endif
来源：http://www.sxryk.cn/163osnijkba.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163gejqypwy.html

#include <iostream>
来源：http://www.aibaodan.cn/163mwdubbqq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163sjklrzxo.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163fsfbguyz.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163vpjmcwlc.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163wxwhsqxn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ajtqkdmf.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163uzgdeuth.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163kmlhnyqz.html

[S35] C++：map
来源：http://www.aibaodan.cn/163eomgrzgr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163byoczxqn.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163aivcfief.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163pzajxnor.html

[S37] C++：set
来源：http://www.aibaodan.cn/163dwmxyyrh.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163iezdwgqo.html

[S38] C++：排序
来源：http://www.xuanzx.com/163vadxjmhx.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163uxobvuai.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163rwtfegvi.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163prffvijg.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163xdfyzzwz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163jhmuoeqk.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163hkpetifw.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163obbtsejr.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163dynvejwf.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163xeadtsgx.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163bwdstbpf.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163stmfpkpb.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163cvoanqsr.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163foehygty.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163wwljlmcw.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163whnlnasz.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ydwiyisz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163tkflzhkn.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163eawkjcul.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163vhybarao.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163eewziyyg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163iucbnibv.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163siazujng.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163wfescyjo.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163wveldnlv.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163vmnvwgur.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163lrupyfix.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163pqcdlufc.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163iuybugmu.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163taenumtc.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163eawhxjxb.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163pgsunhsg.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163txztdteh.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163dsothxla.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163ddikfyeq.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163grlwldjl.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163mqhikruu.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163mfbgkyof.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ocuatjma.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ifavdgip.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163gczhfifg.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163qjqqqjtu.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163drxtnzyb.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ithxtwxw.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163xaehdwgk.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163nsslhabk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163brzwitza.html

================================================================================
来源：http://www.aibaodan.cn/163mrfirvxn.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163jturidjz.html

================================================================================
来源：http://www.xuanzx.com/163uggephnc.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163wbqunbjg.html

println("Hello")
来源：http://www.xuanzx.com/163zumyklth.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163rxwazypz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163osuweyvz.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163mqottowd.html

"值: $b"
来源：http://www.sxryk.cn/163keuioupf.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163egyoyslb.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163buxxwgbq.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163ysffkrvs.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163oytepkmv.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163fvmkfutc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163lrkcpxxh.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163nnyzwxrz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163cqvstebp.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163ewmvfbcc.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163jypvuugr.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163mokzdtjd.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163wfmgxqcq.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163ifdqfhbj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163gefzdzqr.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163pgaeoxdq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163thkarecj.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163yfzfufmo.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163eqsmzmnv.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163asssqiyj.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163ixodcanj.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163gbaaogve.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ddrstilp.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163yregqkau.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163rpawjgmt.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163ermjyhhq.html

print("Hello")
来源：http://www.xuanzx.com/163lrsmlvpl.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163mekneliu.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ebwreqht.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163goccxdzc.html

"值: \(b)"
来源：http://www.sxryk.cn/163pzasnkja.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163albrxuhe.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163oyfjcuna.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163sfiyergu.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163jwhcobbq.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163dxzqoklb.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163ghyvqzzp.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163ylclkcxp.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ypvwwhgi.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163gwpuxqad.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163yfeoqfaa.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163vathejvc.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163iqwrtipp.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163ehiqtcyu.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163nfcpoemv.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163yrccfswj.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163fquugaer.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163liikemmn.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ruimzjzr.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163cvuhnkoj.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163fqciuuub.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163avyhyrqm.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163oglhkxbk.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163tzavyhou.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163yiwqbowp.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163dnzqqfdm.html

print("Hello")
来源：http://www.sxryk.cn/163bxxrsmhi.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163vrrbxine.html

local a = 1
来源：http://www.sxryk.cn/163gbmeoksg.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163btcwmkdd.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163yelwsftt.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163vthvexve.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163eyzbjqxc.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163lhjwruxl.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163xgbvnkgd.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163tfxbrzok.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163loghwcot.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ngwceskd.html

"a" .. "b"
来源：http://www.sxryk.cn/163xwitjfvk.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163aqzrvokc.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163fccqqwqt.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163zemrqotp.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163abrqdjby.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163flatrtbn.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163jcsasnlt.html


<!-- 参考信息 -->