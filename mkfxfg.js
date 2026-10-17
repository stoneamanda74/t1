外链999!wailian999！

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163jwwwbvxn.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163lvuimqvu.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163sjeenxcp.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163igddkbye.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163zrnokmhc.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163rhtwtidr.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163unonecbz.html

[R31] 局部变量
来源：http://www.sxryk.cn/163gifwiifg.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163qwvtuyji.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163eyejgcuz.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163qxgmyzsz.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163wxdxblfe.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163zxcurgkb.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163lgocpxxl.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163xrmuhsxb.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163vucsphyc.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163kmhgygop.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163xnyiikhf.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163govwerjb.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163yxhcbqxg.html

files=$(ls -1)
来源：http://www.xuanzx.com/163lqkwbfyv.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163pvooenmb.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163xfwprkfd.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163utwmwifd.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163qnfwhpks.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163fvoddttx.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163rdwgjwwg.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163kqmrcmzg.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163gmcpzvoo.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163reduppmi.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163soylrqct.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163aykpjhfh.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163jcztxmtk.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163hnssmzzm.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163iqriqwbc.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163zgawzxyo.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163lfcvymfo.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163bulqxikw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163ulgttwlv.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163hdijthpt.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163viffvlhh.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163qiyapgle.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163tzvkemmd.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163jjhcjhps.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163aayrqzxe.html

[R50] awk 求和
来源：http://www.sxryk.cn/163mzwejqlr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163eytcjvpm.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163iqfqogiz.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163dbidazxi.html

[R52] 统计行数
来源：http://www.sxryk.cn/163fcdbpbww.html

wc -l a.txt
来源：http://www.xuanzx.com/163lhdhdeqi.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163lrtfwpga.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163sjcmcpme.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163xrwvhpxd.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163garsbuoc.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163hgcblwgo.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163nawyinwd.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163ouggcgtx.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163eiwvizwm.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163ewewjvwh.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163kiumexfe.html

[R58] 下载文件
来源：http://www.sxryk.cn/163cnumqqam.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163whqieuzm.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163tuhmotrf.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163axowpdki.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163tfffksaz.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163blvyxykd.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163xxnfqtzt.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163bvojjwpc.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163ymeexppu.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163ujcnbxbd.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ayokoqmt.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163kitdrori.html

[R64] 结束进程
来源：http://www.sxryk.cn/163avbcxnyi.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163kgjnrivk.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163pucbfxhs.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163eapzgcvt.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163mlluvuyf.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163fqanbbjl.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163sdmyzoao.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163qcsvaoxl.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163dxbsabqy.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163widdxwty.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163lmtyvjrf.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ckngzaze.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163tyyldjit.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163urnicxjz.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163gonhoqnr.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163kgkbowna.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163myeeiqma.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163vkwwvrvg.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ejczidkm.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163ylvxnroi.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163ydsblvas.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163tlnrvndt.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163whjbplct.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163jlaphmap.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163xlwhighl.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163xxgexfbb.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163irqiuvvu.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ndahdlrm.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163bvoxmmwz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163fglfmrqw.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163cauobwyb.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163dhhqonqc.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163llarqypy.html

time ./run.sh
来源：http://www.sxryk.cn/163ybxuquow.html

================================================================================
来源：http://www.xuanzx.com/163bovcbvbh.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163nfvjyrwm.html

================================================================================
来源：http://www.aibaodan.cn/163paeszcki.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163ifxhhyfw.html

#include <stdio.h>
来源：http://www.xuanzx.com/163gwpojmbt.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163whafxoez.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163emamctng.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163ptogfygu.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ianokwgr.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163yyzecpdd.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163vmfpwczt.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163zybsptjv.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163vtavdhfd.html

strlen(s)
来源：http://www.aibaodan.cn/163mqzlelov.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163oonymqkj.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163nnyvfnng.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163paizbqdr.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163tdryndps.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163kkijvjqe.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163xwxyjarb.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ewcyozfc.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163zzpdnglj.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163edctrpqt.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163qqhtuybn.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163huhxhrzr.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163yoeqdcgs.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163alqrppbe.html

fclose(f);
来源：http://www.sxryk.cn/163bvdpatsc.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163gquimuoc.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163kettkixx.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163xswnirea.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163vlrjdsoc.html

[S14] C：枚举
来源：http://www.sxryk.cn/163gipdvdfz.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163dyeoomjd.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163bzdfozma.html

(double) a / b
来源：http://www.aibaodan.cn/163pbxaamsw.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163jzlkonsm.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163gfgbnrwx.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163jjfbjgqr.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163sklqxyuf.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163ebxstqlz.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163dzoapmzi.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ajiqbanh.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163fujcsewv.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163fawqhybl.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163brxoyljm.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163qutfjyyr.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ygemftrh.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163usduquqh.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163iwvauqsz.html

[S23] C：随机数
来源：http://www.sxryk.cn/163zesbqksn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ekahygqm.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163xrpsddxd.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163opuxpeuq.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163bliepzjh.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163fwxvxjub.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163xvrskamc.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163cvgihcmw.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163rctrkghe.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163xyfofhck.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163riqfdmgy.html

static int counter = 0;
来源：http://www.aibaodan.cn/163cjjhmmfx.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163srfrvrtl.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163betcmpzh.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163bqopzsfh.html

#ifndef X_H
来源：http://www.xuanzx.com/163epefvkvi.html

#define X_H
来源：http://www.aibaodan.cn/163pjdlgjkt.html

#endif
来源：http://www.aibaodan.cn/163bylpzxnd.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163vhtepdre.html

#include <iostream>
来源：http://www.sxryk.cn/163cbtuschv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163abuxtcjj.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163rknmmafn.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163yoiwbmvo.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163myzwjxer.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163henpozih.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163dsdctzqv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163bsfapvwv.html

[S35] C++：map
来源：http://www.xuanzx.com/163sqsmqqve.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ivmyajzz.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163sfskjoxm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163iejyiydd.html

[S37] C++：set
来源：http://www.xuanzx.com/163pdfkrwuq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163elelxfil.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163hawdyqwp.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163bukcjarr.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163ektczmjv.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163qcxmvsso.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163rlwopeue.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163hhfdbbju.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163utozmejo.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163xdapkmvg.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163yiptthga.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163hinbgwkf.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163xmljgxvx.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163svbrbyos.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163uzlixwqe.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163ljutaqmi.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ogfweijg.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163zmvrgiud.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163uuoxmbsl.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163tguibtwg.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163nvxejrkx.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163bkylcuxc.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163qrpakkva.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163beltyufk.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ashkrekk.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163ztxgivbd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163gyutorzc.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163dbkygsfj.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163dbwgiozc.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163dzxfbqti.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163skikeazh.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163lrxxcmiu.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163leqswytg.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163joplhenb.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163ronohszi.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163ejldcmat.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163khjueqso.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163xhsujllk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163iogqcdte.html

[S56] C++：optional
来源：http://www.xuanzx.com/163ayszlxpq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163leujbygx.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163bphchhet.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163gupgooow.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163idmxogod.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163pfovnnwb.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163gqdmjgar.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163dnrghmkd.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163wqmjites.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163kcblxzuj.html

================================================================================
来源：http://www.sxryk.cn/163wyljqipg.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163zftyubbj.html

================================================================================
来源：http://www.sxryk.cn/163rgqbymvn.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163nkhklkey.html

println("Hello")
来源：http://www.aibaodan.cn/163frpktams.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163mmguacnl.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163fnovzrpf.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163enzftpzo.html

"值: $b"
来源：http://www.xuanzx.com/163rnynkctc.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163uwjrauzt.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163dcoydxrk.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163njnfgkao.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163nmnqvuyz.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163jgrctzkv.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163zyxsnbzf.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163vzjfajpw.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ipgjmdja.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163snxzjvry.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163dcheuwhs.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163qfpfdqlu.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163iggbmctw.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163wrrengro.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163jozwfolw.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163xqbwojar.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163dlopbgbj.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163huebofqu.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163jumoacxr.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163zfvljzsq.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163vocacigt.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163lenzmnhw.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163osirbgon.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163oanslmqu.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163zpkndljc.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163mqpxocus.html

print("Hello")
来源：http://www.xuanzx.com/163jhifbnhv.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163pgzygsmt.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163vcnsacrm.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163tbxerxau.html

"值: \(b)"
来源：http://www.aibaodan.cn/163wwkhwejl.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163pznpaqkx.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163pgpqsvxd.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163mhfpnlfl.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163kmydhpei.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163mrbpqavy.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163ytyoysbd.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163opfbqzil.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163crrvljnf.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163vfsayjfc.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163naqnzrpc.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163fyyaokle.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163plrbyouw.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163brwmqrvr.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163nhfaksrt.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163gswniqbk.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163jizmcfma.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163zqvavcvg.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ynvsbiob.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163ysxuxvoo.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163rxddzpzd.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163oupfefvc.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163wrfywyjx.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163uugvflrk.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163exbvtcst.html


<!-- 参考信息 -->