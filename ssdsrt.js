外链999!wailian999！

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163nbqwqfzo.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163neqbavfk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163adofbpjr.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163xvwiimhn.html

files=$(ls -1)
来源：http://www.xuanzx.com/163hlmhgkyb.html

[R38] 管道串联
来源：http://www.sxryk.cn/163wszxmndf.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163lrqaugae.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163fcczjknc.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163afblhjit.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163ilsyaetc.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163vvkmnjzu.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163ytbmgzmc.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163uwoqwcjb.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163ndpmiqax.html

wc -l < a.txt
来源：http://www.xuanzx.com/163iintiaip.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163suijlrvi.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163conpzfwg.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163ibnabjdu.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163tcrgsqht.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163tsvfbqbc.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163ilmsxdfi.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163kghdhqrs.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163syhieimh.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163dxlvczza.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163xngsradk.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163zuzmvohn.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163nwwxflss.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163dyukycrs.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163mtyswkvn.html

[R50] awk 求和
来源：http://www.sxryk.cn/163yownnwzk.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163epugjqkm.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163gjqzfhbd.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163iwmaqdre.html

[R52] 统计行数
来源：http://www.sxryk.cn/163cadqkjef.html

wc -l a.txt
来源：http://www.xuanzx.com/163weysxbfl.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163fxqxdzgy.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163ngefaxbg.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163oyccbgin.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163fozxavzj.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163mlztepcy.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163ggiqxjqu.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163cvcdgkes.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163edkvygdm.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163gbirxwvb.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163ifryfxsq.html

[R58] 下载文件
来源：http://www.xuanzx.com/163yfdyzgkz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163czikqylr.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163xmefjzmn.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163rmgwwhem.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163hrwzucmy.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163alaaytxu.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163osrpatpi.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163crffwsqw.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163vmzijjsw.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163yyqscite.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163lrkzvinc.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163uahbqxtt.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163zfkkjxyv.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163rbaqutsx.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163qcaauoak.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163bmgtsajg.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163eckljwuy.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163wcbpgzfr.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163chiyzkge.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163yrovamlr.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163jlapjniy.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163rwikyqcq.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163zfykkfiu.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163ligmdeic.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163klsxttku.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163lbywozgk.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163ngmunuek.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163frgltobf.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163evizuywm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163ttdgqwav.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163uiomuqxt.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163hbtwbzxv.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163msfwqtmv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163sojgoiil.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163yltuksfc.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163jntdbuwj.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163djccuhqt.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163eexxyjjd.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163bwwrfeio.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163tqwenafe.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163mckpdzce.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163gtgxosxw.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163gretkkhe.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163tsssqfjz.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163wtejjono.html

time ./run.sh
来源：http://www.aibaodan.cn/163rihipves.html

================================================================================
来源：http://www.sxryk.cn/163ugrszfmf.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163svzsgjxd.html

================================================================================
来源：http://www.sxryk.cn/163gwxcqngp.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163bnlzntef.html

#include <stdio.h>
来源：http://www.sxryk.cn/163oixwxdhz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163wgrsofue.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163fccstznh.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163eqaujamc.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163zgdikcag.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163hvuyfsuo.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163ziptwofu.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163yhsnljhu.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163zhfdwfks.html

strlen(s)
来源：http://www.aibaodan.cn/163vgwjlkex.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163tboslvcb.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163ccqmzqyu.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163jqwsmpch.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163guuxsdhy.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163vpnksuof.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163vfroqwbd.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163saokgjgm.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163pqqaiqkq.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163fgbequhn.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163rhizvvza.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163jpculdor.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163kstzdqyi.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163dflcuplv.html

fclose(f);
来源：http://www.aibaodan.cn/163oduyeddm.html

[S12] C：写文件
来源：http://www.xuanzx.com/163hfknrnob.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163jxwrwbzt.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163sdcfbrvw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163uwdjymnp.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163rmjrnpdx.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163aoukitef.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ryoplekx.html

(double) a / b
来源：http://www.aibaodan.cn/163gtsvfjwa.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163uvsnmknk.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163cwqhwrxt.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163xttolnlt.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163hrjkjcha.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163namsewzt.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163collynql.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163gpxbouxa.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163rdawgnfh.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163ccewtocc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163wvfmmhdy.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163hzrsvpsm.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163yyhdwsnu.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163fcudirrj.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163fealohwf.html

[S23] C：随机数
来源：http://www.xuanzx.com/163irtfbjtr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163detakuxw.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163oukxlqcw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163wlglrimw.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163cuvchomi.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163ihbqvdsl.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163mphrloop.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163fvidepux.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163tqidlbsd.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163eidezoef.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163mtkpkkmv.html

static int counter = 0;
来源：http://www.aibaodan.cn/163pulvdiis.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163uusgpwaf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163qhlrbreh.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163mbfnnefs.html

#ifndef X_H
来源：http://www.xuanzx.com/163aymulmvk.html

#define X_H
来源：http://www.xuanzx.com/163ztyiszdr.html

#endif
来源：http://www.sxryk.cn/163kdtcvhma.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163tannnvmt.html

#include <iostream>
来源：http://www.aibaodan.cn/163mbskaxuq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163yoywgimd.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163mvxnpnyl.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163ygrflgwc.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163avtemqvz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163kujghmih.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163dynegopr.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163uymtqxxg.html

[S35] C++：map
来源：http://www.sxryk.cn/163dhybnguq.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163gteorcyz.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163dgkhsjql.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163wpukvjfu.html

[S37] C++：set
来源：http://www.sxryk.cn/163ewgazhlp.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ffxxpsmp.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ktogwqwy.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163enhttplz.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163khcpxecp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163cscjocdn.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ptghutkh.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163nmyqfrwc.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163lfyuxegn.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163grvctarc.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163uwgcvoli.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163hdusbmor.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163snremfxi.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163khvrjvuq.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163sfmvlhhf.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163iluvhrti.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163keiavnkn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163tuygqzhy.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163syisbxtx.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163cphzhamo.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163dzmtxdht.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163juonrmqj.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163ipscvfjt.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163zzklfmfm.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163sbivagjy.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163rgxpvluj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163sorljelg.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163weotywho.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163psxsdcrq.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163yfjdiini.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163zdaaryhd.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163nmofeurm.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163piabvzyc.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163pciycfzu.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163oilmhqux.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163xobvrdlt.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163aypbghjp.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163eygalupl.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163oooamfah.html

[S56] C++：optional
来源：http://www.xuanzx.com/163pdjdaecv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163lwnvwizl.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163bsqjudmb.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163jozswoda.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163tpzbzlax.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163qhstgvtx.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163xvvszfaj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163jymceihz.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ngogewye.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163tignqvii.html

================================================================================
来源：http://www.aibaodan.cn/163fvahzcwu.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ruiomvbb.html

================================================================================
来源：http://www.xuanzx.com/163nzhqrxyu.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163hfqntspz.html

println("Hello")
来源：http://www.xuanzx.com/163jchruadq.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163eablaivh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163nxaamwzc.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163dnmsmchm.html

"值: $b"
来源：http://www.xuanzx.com/163yoihjrot.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163vyuujdxh.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ktgkunmh.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163mjeoprli.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163lzcqwlwi.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163wfgxqfnu.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163oqayueai.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163nmweqmqk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163rtskwbut.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163dwyjodau.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163xqkzmpgx.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163unisbeaq.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163ixgvdiqr.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163jysrkbdo.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163bjfsoidb.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163jdsdxnbn.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163adjacriz.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163mglnvjyd.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163qssatpee.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163wcmdvbdr.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163wlzauzgt.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163wjeysisp.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163uuozvnia.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163owjebuse.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163zxpmzdcz.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163vjeceuot.html

print("Hello")
来源：http://www.sxryk.cn/163bbqyfclj.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163bpqhgbpq.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163juxamgrn.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163sccznlju.html

"值: \(b)"
来源：http://www.sxryk.cn/163lqnxvguf.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163wwbsnrkx.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163okvjswjk.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163lohavjxs.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163hazeyjcv.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163mpdyaiay.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163bkekkduf.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163tbvdszcu.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163xzitucql.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163hdjdrihd.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163rnwcrvcz.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163pzrtfglv.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163nuiakacg.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163ipcxbtos.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163pvugyhpf.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163weritvob.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163gvnmkypd.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163yvnqnwub.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163xukrnctv.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163nourvesq.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163deiliubp.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163krfsxahz.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163oofxlfsp.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163rqnwderh.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163gnqeimqp.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163mafbybgv.html

print("Hello")
来源：http://www.xuanzx.com/163xkxireyj.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163hmmhxlgq.html

local a = 1
来源：http://www.xuanzx.com/163lrtjbhud.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163diliifjr.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163tyhfchlt.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163zvtwwoip.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163xsicvghp.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163zuxbqpjd.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163pyzfblmy.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163nbhiziys.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ycsbytqm.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163vvaiajce.html

"a" .. "b"
来源：http://www.sxryk.cn/163cjhdrtav.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163apnqrwqe.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163clxjhzko.html


<!-- 参考信息 -->