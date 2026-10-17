外链999!wailian999！

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163mduczxkp.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163wtgiycrm.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163fgbkuzwy.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163kgnnectf.html

files=$(ls -1)
来源：http://www.sxryk.cn/163ukapthcv.html

[R38] 管道串联
来源：http://www.sxryk.cn/163vhqfokmx.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163wzkuddgx.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163kyiemjgj.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163tiltnxvu.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163wjnfrwex.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163fvqmlafr.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163trmcwkmn.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163islmqdrz.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163nvcxiaxq.html

wc -l < a.txt
来源：http://www.sxryk.cn/163wdujynvu.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163udnpmtzj.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163vpzfubom.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163xpkgpwkk.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ufxguant.html

[R45] 批量删除
来源：http://www.xuanzx.com/163cosamvdi.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163jshmkorg.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163houndmdy.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163cvgpstbv.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163znuxgpml.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163rbhowddp.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163rqbupcos.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163xedwjcit.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ptqyqjat.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163koffybwn.html

[R50] awk 求和
来源：http://www.sxryk.cn/163dgllvumo.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163vsxaycfw.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ekgcpwnj.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163pjyztjxz.html

[R52] 统计行数
来源：http://www.sxryk.cn/163kjaakxgp.html

wc -l a.txt
来源：http://www.sxryk.cn/163igaoqjjx.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163jvltsrgf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163qdsmasom.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163hfhmwbxa.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163bziqolux.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163dkcuvkdg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163wowatvkx.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163zthgbpuf.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163dhdsnddv.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163rmdmebmq.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163ognaizqw.html

[R58] 下载文件
来源：http://www.xuanzx.com/163slkqrncd.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ngtemaws.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163myqiyejo.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163wfhmqokn.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163nampqogp.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163pggglbga.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163fsbyogyo.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163wislshbs.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163yhdzgnyc.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163zbknmqsw.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163sldwenxb.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163tmcrjkwh.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ivyzueao.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163qckdbslu.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163bnlanhfy.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163mqhrjqsy.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163swamtvoz.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163xwuzybfz.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163aqczdhjt.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163ycgkokip.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163ebfyknut.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163oajsmsqo.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163pvlzmxeu.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163xavgecas.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163vgjwlobi.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163vajdsoap.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163uzvvvgao.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163dmicgurw.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163iosgrxaf.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163uhyjkrng.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163ldxwqhfu.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163lzjskncf.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163uiwkxzdq.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ihsytgzs.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163txhtzyep.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163oyvnndqm.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163ohxzlzxh.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163knhmuznz.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ujmycayi.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163lcdcujhs.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163cniixatd.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163mjmvpzwk.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163epkezroy.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163gsgjhfng.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163ylozpegj.html

time ./run.sh
来源：http://www.sxryk.cn/163dmdddxya.html

================================================================================
来源：http://www.aibaodan.cn/163eufvbvmi.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163ywpyxkuo.html

================================================================================
来源：http://www.xuanzx.com/163xretxnlj.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163qwkbgxub.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163wdlfrmlb.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163nblpydgp.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163snkysire.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163cqjtfaro.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163bbjkwrph.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163qschamlf.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163dksvbjmc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163feyhyztb.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163hzjuibfn.html

strlen(s)
来源：http://www.sxryk.cn/163iwnezjyu.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163lisvailo.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163spgavtup.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163yocjjvbm.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163zaqmoxxb.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163dggbadeq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163nfotcscz.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163sbanwszm.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163vhpjdsym.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163qaiiqvqx.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163juhrctzn.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163tmkryzml.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163jtrrdsan.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163aeolamot.html

fclose(f);
来源：http://www.aibaodan.cn/163sdsrnjin.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163vduxbvor.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163wswjkpyh.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163qctdkbxb.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163wqsanvjz.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163sgvlpzsp.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163nwyjueed.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163fnnznvuz.html

(double) a / b
来源：http://www.xuanzx.com/163mnvfafmh.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163wskgrgyj.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163jlwnusdh.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163cqgoppgi.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163exdaegmn.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163geflowdr.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163brhfsqnh.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163gnvsrlqo.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163tuqawdst.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163qglwrarq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163etuzbsql.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163uwrryugh.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163fzzpjxzu.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163wbyiwsnw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163oxvfpbsq.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163fulmhfwt.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163kokywyfz.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163vaeajznb.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ulhjbtrm.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163ugjduxkz.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163qbeltsgj.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ccnvzjyt.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163esikjxcn.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163utqfgztx.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163jwqsgejz.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163xvpdahet.html

static int counter = 0;
来源：http://www.sxryk.cn/163tayxkbwi.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163cljifxtt.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163scahcfxz.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163zddmlflh.html

#ifndef X_H
来源：http://www.sxryk.cn/163lhiphydi.html

#define X_H
来源：http://www.xuanzx.com/163ovjtnrqh.html

#endif
来源：http://www.sxryk.cn/163wgvrncre.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163xbxjdcvy.html

#include <iostream>
来源：http://www.sxryk.cn/163qlolhioj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163uncehmyg.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163thmhogxc.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163gsxqkddr.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163nxxobfhv.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163anwiiqmk.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163wkyxcptt.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163cfapzyae.html

[S35] C++：map
来源：http://www.xuanzx.com/163oeyjczoy.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163nerikgjv.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163cvnffkjr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163myfbbqfc.html

[S37] C++：set
来源：http://www.xuanzx.com/163nsirvyzj.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163xurqzrze.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163xonhrjby.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163pyfcaxbg.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163rpicfbps.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ahjfghnx.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163dfzqahed.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163aafejtue.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163ykuzlbxk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163acgmrphu.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163bktewayg.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163qfcgohxv.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163rxxmtpsz.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ikfnqedc.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163vctnineg.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163evvhbprw.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163koyihxmh.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163algxodwp.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163yrlyxmgj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163aisjwzbl.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163vkpqfbwu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163jctcuoiw.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163saztunps.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163pkblqrtf.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163tllqepmw.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163dfgwvdiv.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163cnmbswam.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163avqbklgc.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163ovvqkumr.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163tvxspcsc.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163jlujuegm.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163bptduiyh.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163cltzcgmq.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163fxnjjsbn.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163keuenxnz.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163uxebhuag.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163fvuhupqg.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163wmewrofq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163puitotnu.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163eemhoxaf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163daayckhr.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163uawycgrx.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ngxeqfws.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163hhnfeayi.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ecfjgife.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163riqvwucs.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163twbidque.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163mejauunk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163kjmgftmi.html

================================================================================
来源：http://www.xuanzx.com/163judbdqqz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163olmlzjrg.html

================================================================================
来源：http://www.sxryk.cn/163hswzqnxk.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163vxclvuco.html

println("Hello")
来源：http://www.sxryk.cn/163weistlkr.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163oshoqrtz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163qphojxip.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ruvunpzt.html

"值: $b"
来源：http://www.xuanzx.com/163gqffmhtf.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163mbhxsswx.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163dwogtnsa.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163iflfajjs.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163kkjjvtwn.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163xfddhcue.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163vyqttmwd.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163fuwnoskv.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163cuslfpqz.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163grnegbfe.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163cugiudrq.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163evcolwfe.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163koujgnig.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163izrivwir.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163wslsalvv.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163xfrnyxmi.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163zjdplnae.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163vzumxmnn.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163nlkjjppl.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163puwfoglx.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163poqfsalw.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163edlpefbq.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163xezacpxs.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163esulphyy.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163qwmvminp.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163jkyhpvzx.html

print("Hello")
来源：http://www.aibaodan.cn/163qdvogcea.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163xxiwtodz.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163fkpqkztf.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163ttspjczt.html

"值: \(b)"
来源：http://www.sxryk.cn/163cnhbtbaw.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163qvbgbkcl.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163cumszckz.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163xbwnmkca.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163ubwuwsht.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163qbnaocsd.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163sjdtlxrb.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163poofnnth.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163iwqavmtk.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163mlcebvcn.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163yowbakku.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163vgvrkeur.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163hajzrjlt.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163xktjtrzo.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163mhavnkog.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163nnayhzsq.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163cfzcqhbf.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163qvhcauzj.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163nzhjoozf.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163bclxwdhe.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163pvsjnutw.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163qxarvcbj.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163znhkpjaj.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163pvipkfha.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163odxrhein.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163jzpiiofj.html

print("Hello")
来源：http://www.xuanzx.com/163tptvigvo.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163gknmiqmz.html

local a = 1
来源：http://www.xuanzx.com/163yxkmceqz.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163uilofuie.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163tqgmdihw.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163pwtodhwd.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163hppsudwg.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163ksnpvcag.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ondvsyxf.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163xaqzvfdm.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163kxcavtri.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163ktvqubbj.html

"a" .. "b"
来源：http://www.aibaodan.cn/163ebfgzvfa.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163qfghrmue.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163vwimqusv.html


<!-- 参考信息 -->