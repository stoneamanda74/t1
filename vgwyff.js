外链999!wailian999！

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163dddmayzr.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163rjnrluvk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163jixyfali.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163ggypmfcf.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163envvkzfe.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163shhsudrn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163bmahhwnd.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163cxfiaqzw.html

files=$(ls -1)
来源：http://www.xuanzx.com/163fzzixlup.html

[R38] 管道串联
来源：http://www.sxryk.cn/163itltcmnw.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ldphhohr.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163pwqbsflu.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163cgkwllez.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163nigczygw.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163azejdjcf.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163bxufyjll.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163oendyesh.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163yfezbisn.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163fjgiylke.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163zgrqplue.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163uwwlhsid.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163asvayqyb.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163cppxkuox.html

[R45] 批量删除
来源：http://www.xuanzx.com/163ipqskgiu.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163dhnwtqdk.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163kbfvrsal.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163jcfkwvta.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163tzgiutsh.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163cirfsclz.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163ezeeqnvh.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163truejkri.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163jkphbwpe.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163wdwcesfl.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163gyjrankx.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163ypkgahip.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163aejlnrkp.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163qxzkoqiy.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163tdoxrfte.html

wc -l a.txt
来源：http://www.aibaodan.cn/163epkthrfj.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163yvtuvypj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163vnhphfnn.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163tmpfdvxo.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163jggqfann.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163zbifzqwm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163quzjfffa.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163ptpgcqzd.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163mnzdckfv.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163jiqqfgov.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163wkorckdx.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163vsfopgsd.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163zshlivmo.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163xlfltzyh.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163dtjuuuls.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163fmfhgvyr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163awqegrbe.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163grgdbxlw.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163aqmvylit.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163tgebkjrn.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163hsrfivjg.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163gcssqquc.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163pjyslqac.html

[R64] 结束进程
来源：http://www.sxryk.cn/163hillhkzb.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163tvzghdma.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163xmrgteai.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163nqshmfpi.html

[R66] 定时任务
来源：http://www.xuanzx.com/163zvyekagi.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163ciiuxtfb.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163hzqwuurw.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163uoxmswir.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163rjuxedpa.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163utjykyiw.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163wvxhejja.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163sirljbjc.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163eugjnkgw.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163krjxyoak.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163rixthngf.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ejcbgcqw.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ztqfoxba.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163cvlhhssk.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163jldawgjo.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163twzzhqfs.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163iudcjhss.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163anembqrp.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163ufgpqkui.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163kbcrsgbg.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163aadvapog.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163mlnxfwlm.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163huthkufg.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163kniyzdrm.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163pkijxhao.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163jspfvbto.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163jrpguhkl.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163cmfawlgt.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163oquebmjb.html

time ./run.sh
来源：http://www.aibaodan.cn/163iaevzqdz.html

================================================================================
来源：http://www.sxryk.cn/163vzcbyenr.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163nqsnxcgc.html

================================================================================
来源：http://www.xuanzx.com/163vowpavrf.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163fknpojwg.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163iouiggms.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163yqgsegio.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163ionbuvyf.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163pkyreean.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ydcpffra.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163indqpltj.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163brryovrp.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ivjwvalh.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163nhurcylb.html

strlen(s)
来源：http://www.sxryk.cn/163ezedgzor.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ntrspaqe.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163mkfuqrvh.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163juwnfors.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163oyrxyfnh.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163bkedzitv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163byodvaxu.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163tidcryum.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163hubvlfzr.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163rlsagyhk.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163rtkdwxso.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163mvgspxdu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163kmdrjkcr.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163yzzqlatx.html

fclose(f);
来源：http://www.xuanzx.com/163nbtqlnrh.html

[S12] C：写文件
来源：http://www.sxryk.cn/163aksfkxhn.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163viunrsoe.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163mrwmqqhs.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163xamjmcwf.html

[S14] C：枚举
来源：http://www.xuanzx.com/163gundbcrn.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163qzkzumtl.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163jqanbczq.html

(double) a / b
来源：http://www.aibaodan.cn/163fhqgyjyu.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163smlhxoyy.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163vdippdcb.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163oipwitii.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163rdeomubl.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163dmwugqfa.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163nwhihocn.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163uaciogje.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163vgonjmxz.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163pqevchmv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163efnzqchr.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163rggfrlnp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163cncfhjqy.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163pwyuwvoj.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163xiiguhtn.html

[S23] C：随机数
来源：http://www.xuanzx.com/163lfogseqk.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163urskccek.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163nyxssdjw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163jtzsxrqv.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163fjmfnwhy.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163denrjadw.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163tmdsfhcc.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163plbovrjw.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163tddoxopb.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163wdmtjdzb.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163dmtnuove.html

static int counter = 0;
来源：http://www.aibaodan.cn/163bkeaydoj.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163yxwegenw.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163oasvsbks.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163bfzgrchn.html

#ifndef X_H
来源：http://www.sxryk.cn/163plbnvsol.html

#define X_H
来源：http://www.xuanzx.com/163znkljhxc.html

#endif
来源：http://www.aibaodan.cn/163yqasfmph.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163omjbyzjl.html

#include <iostream>
来源：http://www.sxryk.cn/163sqhrcisb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163sfohgjqm.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163othgngsb.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163vqotrkpx.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163nzyokuic.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163gztuwzis.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163zzgnygpw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163zjszwnsq.html

[S35] C++：map
来源：http://www.sxryk.cn/163voddfeqd.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163qlelnkjb.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163gpdbbwlj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ilrehdba.html

[S37] C++：set
来源：http://www.aibaodan.cn/163lzflzxgv.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163vecngqqg.html

[S38] C++：排序
来源：http://www.sxryk.cn/163nwwbpisz.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163aqlfbpvl.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163kkhvdqkr.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163zmadqwcg.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163koudvaqm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163kcjbizzz.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163aulalqlg.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163cbqesbnl.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163qibcvefw.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163hsmaciof.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163opzfmwso.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ydzvkans.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ocueywoy.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163lfvdsvmc.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163cecacxwq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163tjjwtvih.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163cgsxeqeb.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163didvtcit.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163awyjabut.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163dchovylq.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163shitlcvk.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163cmfqdhxc.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163wupwcnap.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163wjcfqmvk.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163fpebyngk.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163boqdhwcf.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163qiogplpe.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163jopewbxt.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ewpaqamz.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163nglnxsci.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163ykfixdsc.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ggtlrsng.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163ycvpwdzg.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163rhhunosc.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163knmubiwz.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163jlrurzqo.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163ghbzoejq.html

[S56] C++：optional
来源：http://www.xuanzx.com/163mtvwoubv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163zofyykpp.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163onttmjmq.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163twstaxlw.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163gjnvimcx.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163icfiaajp.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163sttfdutt.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163auoeownh.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163obkltkdv.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163ujbjieij.html

================================================================================
来源：http://www.sxryk.cn/163imdzvfnj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163yrffdvtk.html

================================================================================
来源：http://www.aibaodan.cn/163ugbqgtba.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163gpbvqfdq.html

println("Hello")
来源：http://www.xuanzx.com/163ltjqhymf.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163divnskad.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163ntnoljmh.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163jfciclsl.html

"值: $b"
来源：http://www.sxryk.cn/163hsjflowk.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163swqntdlm.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ypmhibbf.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163yaauztdt.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163oqlufcos.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163ctqvdavj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163zjwxmnre.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163hpbomjhn.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163ctrucrvl.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163rvpurxkb.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163wubtfbpf.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163tsbewepf.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163gyjhrztx.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163lnlvzmry.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163emwwfznj.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163jlhysgee.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163kfoldeus.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163rtceknqf.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163nwbzrbln.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163ylzwqwvw.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163erpyzjna.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163ivwrufvi.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163rjfwbblm.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163xcssthwp.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163fcyhdjyt.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163jrgbkjax.html

print("Hello")
来源：http://www.sxryk.cn/163atrzmezk.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163msvuthuz.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163vgiczgad.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163tzvoeyib.html

"值: \(b)"
来源：http://www.sxryk.cn/163mwmdfube.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163tfexoigb.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163nixkszvn.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163aiivfonp.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163kdmjrbqu.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163acjttfzo.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163tiiabnab.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163jdrymoxw.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163exacjkno.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163pulpdpww.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163qunfxpke.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163eoqfzuxt.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163yhyzckte.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163shlqhzkz.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163faqztaqy.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163okhdzkwf.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163ebejvcjy.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163kxhjvxaq.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163waqnubsw.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163kndexmcm.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163jnasdnap.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163iewypale.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163zujqgjwu.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163bajlpyks.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163pplmmgpp.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163pntgcuhk.html

print("Hello")
来源：http://www.sxryk.cn/163ggcsjpnm.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163lhhdrzji.html

local a = 1
来源：http://www.aibaodan.cn/163ptegdjnb.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163jgpxzndg.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163eiubtouv.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163ttjsbonn.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163jfgazwfu.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163qtoqcout.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163eyohfrnn.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163orsbgfbs.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163pkzqesio.html


<!-- 参考信息 -->