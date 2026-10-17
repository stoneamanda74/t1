外链999!wailian999！

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163sqykufjz.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163negjqxgo.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163iagadvme.html

[R31] 局部变量
来源：http://www.sxryk.cn/163gkpiprpo.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163lizjonzy.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163sahcagos.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163evjfxgvu.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163xachhinn.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163yujymuok.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163axrnxsxt.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163vkgybmkj.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163jhxktjwt.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163chskhche.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163qlpejyar.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163lreafzxr.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163iqvgkbup.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163mhtvnvtm.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163zzrsukow.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163afxidzpu.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163oaqkqwmu.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ulyqthbt.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163bmqtulhv.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163alspzhen.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163tjoqlcpz.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163pwkzrfiu.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163wabvjdnj.html

wc -l < a.txt
来源：http://www.xuanzx.com/163stmusuqz.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163popbxtlr.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163tmntcpmu.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163euetngpy.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163uxdgfsiy.html

[R45] 批量删除
来源：http://www.sxryk.cn/163pzyvlsif.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163ysyykukb.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163swtqlfrk.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163ykkaekni.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163zeqyvetr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163wchiopxg.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163firmiwof.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163qwlcqxxf.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163idshgezo.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163kdvhnysx.html

[R50] awk 求和
来源：http://www.xuanzx.com/163ubugmzdp.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163ogsjrskg.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ydxnwdxw.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ocssqgzh.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163nijgisbq.html

wc -l a.txt
来源：http://www.aibaodan.cn/163fkdmsmmd.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163bdicmdms.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163zuxpxpgv.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163doyqvokq.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163diyanxny.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163jbyjfhws.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163pshurrrm.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163gqayvejp.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163ascidpjd.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163vdrjyfgx.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163htlfodrp.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163hkclkvgz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163wtymseca.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163gsrpbkub.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163ahvhzpbv.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163rmwugawe.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163mdcccllo.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163emkmfoql.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163fnczerej.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163xslydrbl.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163liysossr.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163nkhnytwv.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163pfmywtfy.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ssenewxm.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163vadwgntl.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163afcrcdra.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163edlzaorf.html

[R66] 定时任务
来源：http://www.xuanzx.com/163ykcpxhzs.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163upxxpnkk.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163efhmuimm.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163gidarygh.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163jjgscqcl.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163xnhgzyqz.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163exihnklf.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163qvgxcucn.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ocqcqdvd.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163gybddbss.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163notvqcgh.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ogcyzdbe.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163cwsuxsrm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163chqflegj.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163imayqldc.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163fgptteda.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163rigunokn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163onpgtedj.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163tzhmvdrw.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163obpjniie.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163dnkrotpg.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163knfclqjs.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163kfsvbgae.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163drrznkyi.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163cucrboou.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163fwequdrx.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163wuymyvtk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163zcwudeld.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163xyxgtgxu.html

time ./run.sh
来源：http://www.xuanzx.com/163iwtufqsa.html

================================================================================
来源：http://www.aibaodan.cn/163mfxxrixz.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163qggmekrt.html

================================================================================
来源：http://www.sxryk.cn/163ekvtgvbm.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163vqvviksj.html

#include <stdio.h>
来源：http://www.sxryk.cn/163jwmmabsl.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163opymjrpr.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163aujggufg.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163mbvdbuex.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163crkxearh.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163bcavkczy.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163dmwewwrm.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163atbjleew.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163teuocwjx.html

strlen(s)
来源：http://www.aibaodan.cn/163zqixadxt.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163akwubluz.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163izdckjtx.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163fcyzrsac.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163lnwugaky.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163noszqcze.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163cymdmsjv.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163xltfyfvv.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163yalxrqku.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163rtsusspz.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163wpvbewmk.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163guuhylex.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163pxsmdhln.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163hczdgfjf.html

fclose(f);
来源：http://www.aibaodan.cn/163pqmylqht.html

[S12] C：写文件
来源：http://www.xuanzx.com/163vvyapimm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163qulhjqln.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163jlebdnqe.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163bjpodjrb.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163wfndwevc.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163jxinrnwx.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ogljeixf.html

(double) a / b
来源：http://www.aibaodan.cn/163mqxtxyuq.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163cglkmbnn.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163zjzyoidh.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163lbhkxpfd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163kcandkgo.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163drhumgkr.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163ltqrsryq.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163utgsducf.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163gmokozoi.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163pcjatxuj.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ufjqgrik.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163wpwslmya.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163qjkbqbqy.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163hbljjtur.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163gbzsbbnq.html

[S23] C：随机数
来源：http://www.xuanzx.com/163nbkdihmn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163keitfuog.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163mxpkezfn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163elpsxwmy.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163jmiulcnd.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163mvcxmwws.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163giluspnq.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ixwvfsdu.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163wqkpoyxm.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163uuwmwrsd.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163awwawkbi.html

static int counter = 0;
来源：http://www.xuanzx.com/163kzhhrisb.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163fhstqdvm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163kzglzhsd.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163kgewcesh.html

#ifndef X_H
来源：http://www.aibaodan.cn/163xiwognmg.html

#define X_H
来源：http://www.aibaodan.cn/163qskkobdd.html

#endif
来源：http://www.xuanzx.com/163uyybjitv.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163trdyrfht.html

#include <iostream>
来源：http://www.sxryk.cn/163bszhmxyy.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163hmsvqmsv.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163vqprpbdd.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163spzwkkgh.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163nsipvtic.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163ftccptql.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163oxenlokv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163gcrfzbio.html

[S35] C++：map
来源：http://www.xuanzx.com/163rorybecq.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163btriifzl.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163enhyybou.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163qkyukhww.html

[S37] C++：set
来源：http://www.sxryk.cn/163anmmkgyw.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163jrhhjtgr.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163hsagjasf.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163specjgtd.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163zqyxixep.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163hpofcvvz.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163urxmuihx.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163qvkjznst.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163lxstukff.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163ebvgremv.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163uwyzjhnq.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163kncbrpgu.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163fufdmbut.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163iyyhorub.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163zeaicbln.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ghrxjtqw.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163appzztbq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163zjtzdhok.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163vryrpnpl.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163uexokaan.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ktmmzaii.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163uyjdtjay.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163svusabnp.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163xzevkuyz.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163psorjdfe.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163tyvkived.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163sxklqfnn.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163obarjcfr.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163boopelfc.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163dojliqgp.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163mgejjhek.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163vblfvwzz.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163wuhqdknx.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163vwfukdye.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163plwlogwa.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163ngjwlulh.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163ewhywlwn.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163nkhmfyls.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163xbyniwdd.html

[S56] C++：optional
来源：http://www.sxryk.cn/163zjzhjtxo.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163snlbdige.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163auvkctyz.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163grvbnejj.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163fvhmxowy.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163peqegskb.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163impahuwk.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163vnxejptw.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163itjtkeqc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163rpinajvr.html

================================================================================
来源：http://www.aibaodan.cn/163hvvhocxj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163qgvwqikt.html

================================================================================
来源：http://www.aibaodan.cn/163sigfceqf.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163dnmxhogg.html

println("Hello")
来源：http://www.xuanzx.com/163tvhhcqxx.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163bymbgtjd.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163xymlvcwp.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ndqxcbgw.html

"值: $b"
来源：http://www.sxryk.cn/163yhmnlxph.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163acehwzpb.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163bhdyeamg.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163pdptcmai.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163mqyihhlf.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163yvzuhupd.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163zohonvzh.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163xserfzkp.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163twcgpqmp.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163oewyuutm.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163xuuhzixo.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163nhgmtxvl.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163rnghvieu.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163vhhfxhnt.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163logmpvxq.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163etgqpbpp.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163bgoebaje.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163qjvcjaty.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163yyietjmz.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163tfdhzlot.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163yityavek.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163vfdqngxb.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163szgcjahf.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163ewpjpint.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163ebkxcyla.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163nvfipvpi.html

print("Hello")
来源：http://www.xuanzx.com/163xicarfhi.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163woybnwjj.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163xrzzziek.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163xtugbzyg.html

"值: \(b)"
来源：http://www.xuanzx.com/163ycajdpge.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163rxgoqjvq.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163ekuribvw.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163usfjwkcr.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163wiremxfz.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163lcyarfdm.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163xfehyopc.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163jgkmwjzt.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163bpmhjzjq.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163qkruowjs.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163yxxoovkm.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163mkshvsxo.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163qhbnrcud.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163vurrbbgk.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163dhdpjlos.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163cisirqoq.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163pxrwftyr.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163djweifbi.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163hthqcgrt.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163klririkp.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163sqikegda.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163ldqapicm.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163wdgrvajb.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163srsqfpqp.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163lieyitgs.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163qbdjrsrb.html

print("Hello")
来源：http://www.sxryk.cn/163qfozhfcy.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163vggfnlls.html

local a = 1
来源：http://www.xuanzx.com/163fwrgjqai.html


<!-- 参考信息 -->