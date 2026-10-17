外链999!wailian999！

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163tttomwor.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163yhoqwaha.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163ovwdeygy.html

[R31] 局部变量
来源：http://www.xuanzx.com/163frnejbcg.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163ckuyesca.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163hlyfzrti.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163zhddtrvb.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ksbjgxni.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163vaxihzfi.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163qwscyict.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163szxibqiw.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163dccdtamc.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163jmebiezi.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163wizdysyd.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163oxmnhkgh.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163bejkohrd.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163dyfchexf.html

[R38] 管道串联
来源：http://www.sxryk.cn/163vyqhaqgh.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163xmjyzndx.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163tjkjlnnb.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163dvdijlvl.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163jxtorepf.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163olojjfmn.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163xqainbgv.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163yhkjxvlj.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163uximxaan.html

wc -l < a.txt
来源：http://www.sxryk.cn/163jsszbtpa.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163ojmlgsot.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163kqthtpvz.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163ekbakzyp.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163urfkfqkg.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163vmlzcnyn.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163mupdjovg.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163kobuvuip.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163yqdmgziv.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163dhijsltu.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163jlrxxdvs.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163gpbfsvsd.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163eneabpvw.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163oshmifwl.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163iybnnuvq.html

[R50] awk 求和
来源：http://www.xuanzx.com/163yorjigeu.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163jmoytcfe.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163rceejtti.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163rlyvxrgu.html

[R52] 统计行数
来源：http://www.xuanzx.com/163yvphhbpi.html

wc -l a.txt
来源：http://www.sxryk.cn/163wsxdzpjk.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163scnafygz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163zheyhltf.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163eoecylup.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163iloendbn.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163klrdksyg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163qcidbiih.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163znktoghr.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163hpthtjkx.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163kkuiakur.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163pbbtisbz.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163zpysicpr.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163yycpcanq.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163yyyeogwi.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163xqhzllol.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163aqbsjsja.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163pjqmqrbj.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163yelqymud.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163adyjaiuu.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163vfljrmek.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163orhqsdgb.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163xvvfylxl.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163rwltolre.html

[R64] 结束进程
来源：http://www.xuanzx.com/163lorgngfq.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163tgdkhxfo.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163qmtlbupl.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163dxgsbami.html

[R66] 定时任务
来源：http://www.sxryk.cn/163qogzvtkn.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163foubgqvx.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163tmvzhrql.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163utifablj.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163hsywydee.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163jgciojgi.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163gtwpyeda.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163jbennnzz.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163mpgdpqaj.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163mmspdopd.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163woftcnba.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163icfyvvzs.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163osgjiver.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163udctbbin.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163vkjmtdmo.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163ymiqnuqq.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163bzoetdua.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163afikjlga.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163wuttvglv.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163hlqjrnjl.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163yyovucym.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ntcrlybn.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163ssjmjqss.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163fnxegknk.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163ucexsofh.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163wumjoydt.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163truxeris.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163yqutjzwf.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163wpzonnad.html

time ./run.sh
来源：http://www.sxryk.cn/163bwqzrbvg.html

================================================================================
来源：http://www.xuanzx.com/163zihvtqwb.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163fusdozpr.html

================================================================================
来源：http://www.aibaodan.cn/163spaitxxx.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163qppyvjkw.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163nhnlquck.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163rmekooxx.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163nunkczox.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163vhnlovxj.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163ywcozeag.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163txngeqff.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163qgjuupwq.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163olbwwcny.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163ocvwfioc.html

strlen(s)
来源：http://www.sxryk.cn/163ohnxdxjo.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163tpogqsxj.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163xpghksum.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163wynymxrs.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163pghfcxyh.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163dlrufbtx.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163yhnevytu.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163yqdtveko.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163jfkesfsv.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163mcbfvqvi.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163nkledcno.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163zkgiwekc.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163qamcqxka.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163evnpqnok.html

fclose(f);
来源：http://www.xuanzx.com/163cpgcuaki.html

[S12] C：写文件
来源：http://www.xuanzx.com/163wgvskzmz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163rairkcvo.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163siqjvdij.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163ixloriyw.html

[S14] C：枚举
来源：http://www.sxryk.cn/163guklbkfx.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163koecgskp.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163bpivmakn.html

(double) a / b
来源：http://www.aibaodan.cn/163xivqpefd.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163tmsurdfm.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163xbavuxeb.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163nllslgxf.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163mfmkndmf.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163tsojajbe.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163bvdknifv.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163klxhxvmh.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163wqkxeyoi.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163pfelkazq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163urjvgist.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163csqrwsap.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163bebmtuzk.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163hmercmav.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163mwsslult.html

[S23] C：随机数
来源：http://www.xuanzx.com/163gzhslotg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163wrifouad.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163jxztxyrn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163wdymkres.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163lmesingt.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163amlaeijd.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163yvabsymv.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163irpccedn.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ijobearb.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163myfqcigy.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ebpybliv.html

static int counter = 0;
来源：http://www.aibaodan.cn/163moyegvyv.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163rjgchquq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ehjcpppa.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163qksdegfi.html

#ifndef X_H
来源：http://www.sxryk.cn/163mhcthcqf.html

#define X_H
来源：http://www.aibaodan.cn/163lqdtgpry.html

#endif
来源：http://www.aibaodan.cn/163lhegdczf.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163qbmiicrs.html

#include <iostream>
来源：http://www.aibaodan.cn/163pqnkclvv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163dtftjyqx.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163rekdqkpk.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163rgangbbg.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ooeoagni.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163rucwrhda.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163gbjleule.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163meeksvpf.html

[S35] C++：map
来源：http://www.aibaodan.cn/163ljliksna.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ubgmgxes.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163boxujjcs.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163jlbitodo.html

[S37] C++：set
来源：http://www.xuanzx.com/163zzxabkyd.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163osxaxmux.html

[S38] C++：排序
来源：http://www.sxryk.cn/163puwxvqij.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163tgzbeqrq.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163jvelkbnh.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163jogjwknz.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163dqsjqmrq.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163jtpothck.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163smthjwlp.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163fwccxbsx.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163ajdcnkgf.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163oycfvszn.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163knlzbjrb.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163intlkohx.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163jdmbezqh.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163tvppihrh.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ppmkxjxj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163vmmtuirg.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163tzaozcnw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ovuwjzrh.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163orlkfdgc.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163ygwunswe.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163gxnnterv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163iaejmrly.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163mrftaecs.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163hpnsqsit.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163jkilioua.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163csdldcnm.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163vywhvfzd.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163amkcluxs.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163dtegutmf.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163wagudxjs.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163otdrxjob.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163eungrucf.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163ravzxvuf.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163kvvsdbzk.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163jmlnfkrj.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163wmrjtybg.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163rvfoddsb.html

[S56] C++：optional
来源：http://www.sxryk.cn/163lmjalyyd.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163upjndaxw.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163inyvzgal.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ivwjzxuf.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163stdfexlj.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163auirzoip.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163mgevqxqy.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163dtlzplxe.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163fsgyjimn.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163fqcsvbwg.html

================================================================================
来源：http://www.sxryk.cn/163fjteiyoo.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163gcnwemdi.html

================================================================================
来源：http://www.aibaodan.cn/163rleinwhb.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163tjxmnifg.html

println("Hello")
来源：http://www.aibaodan.cn/163msbbjcdt.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163comcziuj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163dmnefrws.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163lpaitwxw.html

"值: $b"
来源：http://www.aibaodan.cn/163tzbezsgc.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163vydqcnlu.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163sdcckjlx.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163oysjkpsu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163tjklhgve.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163fhrbkpzh.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163aqothtvv.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ayhtfqvx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163kxsdfdev.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163lumiwzvd.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163dsrrpiad.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163kfepjfmj.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ldqhwblw.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163csttdfig.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163axyumujd.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163skdascqx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163edcvpweu.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163mldfrbmf.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163pgzainuy.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163iaohbjqn.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163rhfqqpye.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163zdfqmbzw.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163kzfbfbca.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163yaaualzx.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163idvlqreq.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163lssypysh.html

print("Hello")
来源：http://www.sxryk.cn/163olhxxfvq.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163llwedsxe.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163lwimnmll.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163yfqppwco.html

"值: \(b)"
来源：http://www.aibaodan.cn/163srrrssnv.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ekxogzbv.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163zygajbop.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163ntlduyhf.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163hjyuyasl.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163demqfrlh.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163vqlqxeje.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163aaofglml.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163jmrpasai.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163xbteaber.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163ftygrfbt.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163vworzbya.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163klmvnnfk.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163vyiszawg.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163ucrdjtif.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163pldivimt.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163tibhyccy.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163zewpnbuy.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ynbtcosu.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163whrujbmr.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163pitroyhk.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163fvlrnczg.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163dwyoktyo.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163dmdrpyqv.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163gjflohjf.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163pnxrponh.html

print("Hello")
来源：http://www.sxryk.cn/163ipqfbbvc.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163vlexapot.html

local a = 1
来源：http://www.aibaodan.cn/163gpdescfg.html


<!-- 参考信息 -->