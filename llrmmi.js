外链999!wailian999！

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163xcffcjgt.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163vgqxeifx.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163wopbedpq.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163hycnepbc.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163ruxevkdm.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163johfwbrq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163stbqrhhy.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163zbjhpccx.html

files=$(ls -1)
来源：http://www.sxryk.cn/163mzfdpqrr.html

[R38] 管道串联
来源：http://www.sxryk.cn/163vozexqtn.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163lcqillnw.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163zoyxshpv.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163vrckxqrz.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163wxzbvecu.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163skycxyag.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163afeixlxe.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163oyopscci.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163inbzoqdw.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163dniezosv.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163uomxjnsw.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163lrdgdmxv.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163qdrxubvr.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163xbccaant.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163plrwrzcr.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163txoqihpb.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163ajpxzfyg.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163yqydxtre.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163vmusvkmj.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163dapjqtsb.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163qisbanyr.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163zzzethqw.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163hjghhhmo.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163xvricckc.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163ieorzngi.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163tbfgcvae.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163xzigzxtx.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163pighcwrh.html

[R52] 统计行数
来源：http://www.sxryk.cn/163tnepoujz.html

wc -l a.txt
来源：http://www.sxryk.cn/163qawvvvjl.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163thuezbhf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163trxykjse.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163gznfztmp.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163jvbkvoaz.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163ezpcqsmo.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163tgrzvobv.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163cvvlzlnj.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163fudycilc.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163jghgmuza.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163iuzounls.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163maohrogw.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163bxueuess.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ixbzljkq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163ikorwjti.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163klhvoejk.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163vxxihzbr.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163ckonexhb.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163juzbwwnb.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163zzhsdpju.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163xpwfftih.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163bvhieeug.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163apnrljpi.html

[R64] 结束进程
来源：http://www.xuanzx.com/163qdnvbzja.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163ixpvzoxd.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163mfrhsyys.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163rnwogfur.html

[R66] 定时任务
来源：http://www.xuanzx.com/163dxizvdsj.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163niqyordq.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163hdxagftv.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163ajruophu.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163crpqucdm.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163ummuszgf.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163otftmzfa.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163yoowmdwa.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163guasewsg.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163oksvoyhy.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163tueyallp.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163xovpacuv.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163rwpstgop.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163cbukxqkh.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163gbzzkarr.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163zwnigfbf.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163kolzqmpg.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163vnvspgxa.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163axhidgvi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163rqmnegsu.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163gsououoy.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163gturidvs.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163mdtasxtx.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163qpkwutug.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163eyzyqiuz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163hjunhqku.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163cvntgoxi.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163dhjdejex.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163qmggezya.html

time ./run.sh
来源：http://www.aibaodan.cn/163nsvhomlu.html

================================================================================
来源：http://www.aibaodan.cn/163cgyqewxn.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ouqpyzeh.html

================================================================================
来源：http://www.aibaodan.cn/163tuekobst.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163yyoepxam.html

#include <stdio.h>
来源：http://www.sxryk.cn/163bmgkdpej.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163vkrndqkx.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163ovzbhtrv.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163qiszknhw.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163zfkxoyij.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163bvcaxogz.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163yjjyuekm.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163rbyjfjmo.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163ieynlbbh.html

strlen(s)
来源：http://www.sxryk.cn/163wbzdewuz.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163spnsolxn.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163eakemgol.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163fzgkkcsq.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163wrylckia.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163ziixawqk.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163tbnmhexa.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163pevrhynt.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163hgffjeds.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163wnqwmmwb.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163idgfgwwn.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163jhknjrcu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163bxhvmskz.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163xpaaweiy.html

fclose(f);
来源：http://www.aibaodan.cn/163mtbsjeow.html

[S12] C：写文件
来源：http://www.sxryk.cn/163agaalayk.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163iwpllszn.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163lkqddtmc.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163rpyykbvn.html

[S14] C：枚举
来源：http://www.sxryk.cn/163cgqbnudp.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163wnppfxca.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ntnulahz.html

(double) a / b
来源：http://www.aibaodan.cn/163ejhnsckc.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163xvdpbvij.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163pjiibgln.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163xoftffdg.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163xapsfrmt.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163zeoipqsn.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163fotkvlwy.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ghtrzxob.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163gccksvgb.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163wfdfgafg.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163zwmzipaq.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163otefavfk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ghlepbii.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163nnnxffnr.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163zpzibike.html

[S23] C：随机数
来源：http://www.xuanzx.com/163vdcnipig.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163rmwvivjr.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163mmiyjoqj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163yleakqlb.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163tzgnmwub.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163moteqvac.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163piqxctzb.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163rcuagvur.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163nvdaqliu.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163jfxyiebk.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163oxgklvwn.html

static int counter = 0;
来源：http://www.sxryk.cn/163cvlzatmb.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163pyxtynlf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163xsaeyequ.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163umuavtot.html

#ifndef X_H
来源：http://www.xuanzx.com/163qpactdvb.html

#define X_H
来源：http://www.sxryk.cn/163qvfdxgzw.html

#endif
来源：http://www.aibaodan.cn/163qbmuyyaw.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163bzqvcaqd.html

#include <iostream>
来源：http://www.aibaodan.cn/163eaqkuilw.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163lvrsgcqb.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163teqgcbry.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163vxzcofdh.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163imlbvjcp.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163slsheuoe.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163mcgiqfoh.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163hfgbfsch.html

[S35] C++：map
来源：http://www.aibaodan.cn/163hzinuibg.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163udnhstcz.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163pvoykpac.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163gahbjpkz.html

[S37] C++：set
来源：http://www.aibaodan.cn/163pwmctuyj.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163btmxmjob.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163mjqretcg.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163jbufvxsi.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163rrjbhlpt.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ikojakmq.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163dtcypkdx.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163eiuuwrbo.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163jleetkyj.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163bwzjajmc.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163itlwnjof.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163edmzxmnt.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163sykvkayb.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163fhuseigg.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163rmydrwcr.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163qsfdjdxk.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163kyppbwnk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163yanihoml.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163enqqqkvj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163oozqkrjs.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163vcjufrhm.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163lckcfrvx.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163xvlypgsy.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163vuddslei.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163owhgdhrw.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163rindykzc.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163srfgaqci.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163ctvrydsi.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163nkrrtjkc.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163qvzlpmot.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163rmgyllfq.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163okavbfbk.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163sbqczrwd.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163pkhnxjru.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163pxdfveeg.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163rpcjftig.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163wqhxagvc.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163ggbvhuoi.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163lywjlndn.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163ccdesxxg.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163yvjnnhrl.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163eolffcxl.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163psogqehv.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163abbvyups.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163acwbbkee.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163nbcoxjan.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163mqkehoyy.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163utqtxuej.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163zkpmpbcu.html

================================================================================
来源：http://www.aibaodan.cn/163vgfujwgw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ejtnrkgi.html

================================================================================
来源：http://www.sxryk.cn/163pmaumwfc.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163vipoaxjx.html

println("Hello")
来源：http://www.aibaodan.cn/163ssxmbolq.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163lfexpvoz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ygnhnezz.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163wdduyauc.html

"值: $b"
来源：http://www.sxryk.cn/163eqscubjv.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163vconbyft.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163yqvikopv.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163qfuinbyj.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163tavkosel.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163dltbgsce.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163rtnfgghx.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163otfojemh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163jofabfro.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163bpleepzu.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163rmdsefqt.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ltcojjko.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163cgqbjxtz.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163aczoonme.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163uwgyqnbf.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163kldfhdss.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163zoroxvmv.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163besubawt.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163fapdxjqk.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163smdfrxdc.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163smdwgscv.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163hafhpxal.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163bookaaag.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163xnrxesfx.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163dxnlnezz.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163uwaufcec.html

print("Hello")
来源：http://www.xuanzx.com/163miqywbcm.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163wgrtszzu.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163viclymmv.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163noupsycm.html

"值: \(b)"
来源：http://www.sxryk.cn/163rpaubetv.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163okfpeiwo.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163snmnnwrx.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163owxqeqqa.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163ametixgw.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163whvfkgen.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163vpolkchm.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163bkhadvsq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163siuobvog.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163eqphqbrf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163zcfqegfy.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163sfeinekq.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163sljrbdry.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163btxtadhr.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163flaalqzj.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163bjilekln.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163jazectls.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163tonxeqjc.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163hlovyxmh.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163vrjfuqlx.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163bvfxzkop.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163rjztqcds.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163zgxwqobb.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163qfskfbjo.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ccjrkehk.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163lllypytc.html

print("Hello")
来源：http://www.aibaodan.cn/163wcprcjmw.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163bdexvddj.html

local a = 1
来源：http://www.xuanzx.com/163krvvzbnu.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163wjmlgbvy.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163fxuoyric.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163fdvsxxvo.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163nrgjqtik.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163hfatflit.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163euzmxled.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163cxtahzrr.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163avqawpws.html


<!-- 参考信息 -->