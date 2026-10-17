外链999!wailian999！

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163bjqddypp.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163gixruqrw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163pzwjobyt.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163lyaporfg.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163fjowufmv.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163mxezpxrq.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163ekrmpkmy.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ehhlismt.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163ssrxmxis.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163sjelhojz.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163dwuvpuyj.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163jgqhyvqn.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163yspfheox.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163bugddbcn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163tqlzdwxh.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163caazofcd.html

files=$(ls -1)
来源：http://www.sxryk.cn/163cbpjoffj.html

[R38] 管道串联
来源：http://www.sxryk.cn/163chtuqwlc.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163eeutfnuo.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163uzgzxniw.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163vfhzwsvw.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163chybxmsv.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163wbvhiavs.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163wtjyllmy.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163shnmookk.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163dapglfci.html

wc -l < a.txt
来源：http://www.xuanzx.com/163jhgitxqm.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163ojxnuruy.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163nqrqmmkn.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163tiscgpnl.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163wubaakbl.html

[R45] 批量删除
来源：http://www.sxryk.cn/163kpqrwthb.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163brywjmng.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163wmrglkkl.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163chodlvdz.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163yqaflryf.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163qzqqfacg.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163gglfnxmh.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163chroglrj.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163aicqbvwv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163zolejtaf.html

[R50] awk 求和
来源：http://www.xuanzx.com/163gqiqgfwy.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163kcijjphr.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163twzeoltz.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163qwobnmjq.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163hwmruirl.html

wc -l a.txt
来源：http://www.sxryk.cn/163jnzhnowy.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163vcpeuuua.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163pvgywbcg.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163raeimptv.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163dgpnckph.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163mekvaikz.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163oahozqhg.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163etetdomf.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163ejqehyak.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163dzwzarib.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ubogoukd.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163tkpglmmu.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163wdyaapbz.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163ytfcihmp.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163nrpfjndf.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163cxgbczxq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163pxjcrkjn.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163xwcbwghe.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163tcspslve.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163vriklpva.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163fpcenjyx.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163pjvfoust.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163keganmhd.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163tmeqirtf.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163affvstdj.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163qpkxzzre.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163ajttzdrr.html

[R66] 定时任务
来源：http://www.xuanzx.com/163zebsqqos.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163zfejdccl.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163gfodlfkd.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163njjzolrg.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163gfjkljya.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163dnwwtfdl.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163snzuvtsi.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163cykzadxk.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163yxqloenu.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163xpvswito.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163hrtulaiv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ftqbltps.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163utglyssn.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163xthycnym.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163yojsmpyy.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163jwmmtffc.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163qizglsgk.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163vimtnryy.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163waqhkwbg.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163ngfteoav.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163qikgmjml.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163hflenreu.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163diyqnqrb.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163nlirlmwg.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163ajrogbra.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163suctrlxo.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163fbbbdutc.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163bmorxixy.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163lwaufkmo.html

time ./run.sh
来源：http://www.sxryk.cn/163qsgyyuqv.html

================================================================================
来源：http://www.aibaodan.cn/163aohyjsyq.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163frrievwe.html

================================================================================
来源：http://www.aibaodan.cn/163xxucumqd.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163nkidrrkh.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ufttgcrd.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163aptbtvln.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163mxrbhcxh.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163nfxcchxb.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163gfudhged.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163eoqtbbpp.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163kskozkha.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163istethfx.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163dygnvmiz.html

strlen(s)
来源：http://www.xuanzx.com/163fqlfdmil.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163waesswuo.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163pslktswt.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163nbugfjoa.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163spxxdnos.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163mvmeshws.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163pgczlcgw.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163pmmtrroj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163fmgfsgbb.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163ulfiokoc.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163jsrguyuv.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163myihtovp.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163rixuslzt.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163xqdqtvyq.html

fclose(f);
来源：http://www.aibaodan.cn/163mvtkfxfg.html

[S12] C：写文件
来源：http://www.sxryk.cn/163ftqinsyj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163epycvbwn.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163cfmkuptu.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163azogrbpb.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163dbttqmtb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163zdocoyyw.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163cacpkhfo.html

(double) a / b
来源：http://www.xuanzx.com/163pdigrmqz.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163zkbilopr.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163rlcpmmju.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163ebxvalrw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163mfvojmzu.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163umhmlswv.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163uygljopq.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163gqkptykn.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163nosiiggv.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ocsdebjt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163pkxlnyvz.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163vzgiboiz.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163wopjxxhp.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163hnqebqsf.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163rjxeyuol.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163rqtnqrxr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163sabzeeva.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163megdrilg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163wlqbqoae.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163uegmjpgm.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163fpoeynwg.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163veebkgfx.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163imfczkvh.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163ttpkinhd.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163pcgwkmkm.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163cuqmmfpr.html

static int counter = 0;
来源：http://www.sxryk.cn/163jlsynjgt.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163mmpwvont.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163mxhqyfie.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163bmkxetal.html

#ifndef X_H
来源：http://www.xuanzx.com/163fkjmdpbz.html

#define X_H
来源：http://www.aibaodan.cn/163qbstufqy.html

#endif
来源：http://www.aibaodan.cn/163zasuohed.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163zjlcqdpi.html

#include <iostream>
来源：http://www.aibaodan.cn/163lgfltztf.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163onwzwiie.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163anpruqih.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163kgpcejwt.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163xnujhuhm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163oetvwvxf.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163cldmzqeu.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163efgoxfbf.html

[S35] C++：map
来源：http://www.aibaodan.cn/163zdequbmi.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163qnbtdymt.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163etnctbvl.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163vrnbqium.html

[S37] C++：set
来源：http://www.aibaodan.cn/163tfftybjs.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163iyhoiveo.html

[S38] C++：排序
来源：http://www.sxryk.cn/163ctxjfkhf.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163oloyhxqr.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163kjvzjhqd.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163bfxcobxh.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163qzyjijod.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163fqhjxubp.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163gryisboq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163iegfflnf.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163jiyvzbjs.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163blcvjimd.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163seuzjeul.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163zgrhpnuy.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163pewbnupj.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163dsxxvvwo.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163fdhgyicy.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163emhaxlqa.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163nlxxbngn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163mstslbny.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163mqyeoffe.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163dmkxshzf.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163qgnccveh.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163qdyhxwhc.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163mpfdyasw.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163wnwgthlg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163kbkczniw.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163nuhnrjks.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163byyrtdhx.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163pmiqlzzu.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163msftckqt.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163brqmrftz.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163qbklqqvu.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163oduggueg.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163vnnrygyx.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163uiksjbfe.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ydrcxitq.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163faqcfrtw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163ihgiqopo.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163tgujmbjn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163guockbhn.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ychmnnxl.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163sxkzpoqo.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163lfjfnqng.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163skxpbwej.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163qlttcgwg.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163huoqlgil.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163raowunuw.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163lsxwzcbm.html

================================================================================
来源：http://www.aibaodan.cn/163hgjcdyfy.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ethzwozz.html

================================================================================
来源：http://www.aibaodan.cn/163wuwudlxh.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163muwatyut.html

println("Hello")
来源：http://www.aibaodan.cn/163owfxlpfm.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163kighluku.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163yztoeztb.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163fcmwdclc.html

"值: $b"
来源：http://www.aibaodan.cn/163wcrjoufh.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163swlmiftd.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163aeotyiqy.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163tikafgff.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ymfjxept.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163syeksfcb.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163mktszdlc.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163owjabkag.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163fdncycxl.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163tizelryh.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163awenvytn.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163uizccrbr.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163tbvligmv.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163atnjdvwy.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163tzdharuz.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163bkxabtnq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163rnzrfmvi.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163nvigjrri.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163dqvtumdf.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163lphsykdx.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163qnqpqvch.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163wqdiimim.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163qjwyfbxw.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163fozdtfaf.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163uqemaxql.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163yjsthxop.html

print("Hello")
来源：http://www.sxryk.cn/163mvlcrutz.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163qmhwjmtj.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163newxdwym.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163racconco.html

"值: \(b)"
来源：http://www.xuanzx.com/163ygruvrca.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163kyehrosw.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163chmxntrv.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163ubgmrqyh.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163mumuigmm.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163wnvrlbee.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163juhfifll.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163rztyijde.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163lgxgsamu.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163wknsynpx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163reiagpxt.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163oxfxdzer.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163rulludim.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163egkzaeue.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163estpdjxv.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163tgyixywx.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163zvpxloqm.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163kxbiaigx.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163bbocyvfw.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163qrmaszfh.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163iihxfrwo.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163pcftetfs.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163pgqjmbyq.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163jzoxdapv.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163grsdheml.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163ijgbnbgd.html

print("Hello")
来源：http://www.aibaodan.cn/163aqxoxbev.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163nfnvmrdp.html

local a = 1
来源：http://www.xuanzx.com/163vqidmogt.html


<!-- 参考信息 -->