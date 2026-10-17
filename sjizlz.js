外链999!wailian999！

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163phdrfrhs.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163kdnfxwah.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163kassqwyr.html

[R29] 定义函数
来源：http://www.sxryk.cn/163rynvctua.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163xpehkaee.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163pmcnkcuz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163wrwaeesw.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163epzuuagf.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163tuydzxnw.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163aslibbfg.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163wjrvpnsq.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163hqfivcnn.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163idmwndom.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163pifnnkop.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163alonctdv.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163uyqzjijn.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163rjvwdlkg.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163wknioagd.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163ryfqmmdu.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163rtofxpfz.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163hpqlcadm.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163jqchjeex.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163fgbonujo.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163tpzmnbzz.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163vaqnappt.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163tibfnjdh.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163keeskewa.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163gzdvohxy.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163nwstvush.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163cxamuuud.html

wc -l < a.txt
来源：http://www.sxryk.cn/163xufnffei.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163uvboraux.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ylldaecq.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163yyzecejn.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163sqxpppnu.html

[R45] 批量删除
来源：http://www.sxryk.cn/163aclqnhfs.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163khkkyqml.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163eoevjawm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163lmntoxyx.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163xoikhgan.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163kwebbtwv.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163bwdooedt.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163mzhifalz.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163pesrjudk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163tyvzczwi.html

[R50] awk 求和
来源：http://www.sxryk.cn/163acjldmwo.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163nagpebho.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163zqxgfnqi.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163tevhzrtk.html

[R52] 统计行数
来源：http://www.xuanzx.com/163oiajarnv.html

wc -l a.txt
来源：http://www.xuanzx.com/163eqssvora.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163gagnhllh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163ytvtdhef.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163yqgjmozo.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163cpcmjyhk.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163foxokvdy.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163haknduuw.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163gjbnyiwf.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163vswbzmof.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163ynbbuwrw.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163bcdwmkto.html

[R58] 下载文件
来源：http://www.xuanzx.com/163xmoepmug.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163jbrhpnsz.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163mjckevov.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163brczpkli.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163opgpnxvo.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163qpkkxyfg.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163mofxkudn.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163tvjelflx.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163mhndllym.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163frxhvtqh.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163mbwmdajl.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163wzrmlyqn.html

[R64] 结束进程
来源：http://www.sxryk.cn/163xnyogbpm.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163vppcitkw.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163cnzzujua.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163mhehhgbn.html

[R66] 定时任务
来源：http://www.xuanzx.com/163yxizwbkm.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163yzlijrgg.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163wqhgntdm.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163tgrhvcxe.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163oaanwziw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163rjtgfhda.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163ywohfrdb.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163yuhlzcpa.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163nuxcfcil.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163cdcpkroy.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163jmiyyxas.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163xdxbwrvn.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163nokkiolc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163lewosexv.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163psvpduja.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163taryofam.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163uqhejyhp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163kgocnzui.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163vzwjrxvx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163odawpmap.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163olrlvdtt.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163cqitcltb.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163bolbbknn.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ikvzrllf.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163gmbsnehi.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163jhjotqtj.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163hxsdcyid.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163bctihogd.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163dsncyyvh.html

time ./run.sh
来源：http://www.sxryk.cn/163rmvgicsn.html

================================================================================
来源：http://www.sxryk.cn/163ziaxifhb.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163nleeguzj.html

================================================================================
来源：http://www.sxryk.cn/163imxhndts.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163dktowheo.html

#include <stdio.h>
来源：http://www.sxryk.cn/163wuzmcmon.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163aevkafkt.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163sgjhtnsl.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163mravlnzq.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163elrqasmy.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163htmpycka.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163znwicelf.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163qlthlbvm.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163bjprdffc.html

strlen(s)
来源：http://www.sxryk.cn/163ywqhdtun.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163micxzfuq.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163gkjnhuum.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163zpgrbvnf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163myoolzqj.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163gbrdnvgq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163gkjveavc.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163qhkgelfe.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163enwjrewg.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ygeohtjh.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163wjwdpsia.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163zfcwwnje.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163iaizscrf.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163gwcnhijq.html

fclose(f);
来源：http://www.aibaodan.cn/163etxvbkbb.html

[S12] C：写文件
来源：http://www.sxryk.cn/163fkgfpjrt.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ebypwisd.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163dyfbfaop.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163tceyfexe.html

[S14] C：枚举
来源：http://www.sxryk.cn/163zsurrvys.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163wrkxtgoe.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163frubabps.html

(double) a / b
来源：http://www.xuanzx.com/163amhpboja.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163tsvwntay.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163tzlirtdm.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163zgghysjs.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163jndujwbh.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163qrkzpndf.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163miszabwx.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163zvpjsmus.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163uvrvapdo.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163kvjdonuy.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163hcyqhzwf.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163scjvbccv.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163qywrbkky.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ojdkdrhv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163jcoekonh.html

[S23] C：随机数
来源：http://www.sxryk.cn/163bgrtdoep.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ayzcxyrp.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163bjukngpz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163hkjrqdib.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163tzhndgar.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163twjbrfrr.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ecvjhhaq.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163ypuugglf.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ndbkfcha.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163fyzdoqiz.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163zphfahyf.html

static int counter = 0;
来源：http://www.aibaodan.cn/163vvznkjsx.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163jkrimoze.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163nphilkgm.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163eglrcgum.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ycdxbvun.html

#define X_H
来源：http://www.xuanzx.com/163xuzbjiwh.html

#endif
来源：http://www.aibaodan.cn/163gddgwcbg.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163bbslhfem.html

#include <iostream>
来源：http://www.sxryk.cn/163xrfjoetd.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163pejklzev.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163czosiiwg.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163luyoavox.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163upwwzzne.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163ljzpmytf.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163lkcrmkuy.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163yzmjbrvt.html

[S35] C++：map
来源：http://www.sxryk.cn/163kzqqfzbw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ngsgyiab.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163uvtfdqcd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163isczvhwq.html

[S37] C++：set
来源：http://www.sxryk.cn/163rewnsfzw.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163xlzsfgvz.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ortticor.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163fenmtlqw.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163gwqgzapt.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163cihcbpll.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163jfjvmvql.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163mqykcpiv.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163qrjtviwc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163djoklkrw.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163irtxqkzg.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163bquxgcng.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163ptblpwrn.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163dmqxwqkn.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163xqmrmzfe.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163hhbzlphl.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163lwpuoyvw.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163xbrbnpkz.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ngvdvdfz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163fyfchgzj.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163rkemjelb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ttlqfrlx.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163evjbkspw.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ewnykqrh.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163qnmparsg.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ygskvhho.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163hugjrqyu.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163vhniffzj.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163eaufuzke.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163jgbgawfd.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163uzxcatcr.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163xalcslgm.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163nybzaanf.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163oidyxuoz.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163nzfttwqo.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163lxzhfktu.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163xhravkpu.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163elpbgbwz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163iektstcu.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163xftdwswq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ffvhrjti.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163xifmahob.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163exetdqxu.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163cmignygj.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163rqbnmwdp.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163kqcldfjf.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163bczfbvzf.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163uyrmyexb.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163cmbqejxk.html

================================================================================
来源：http://www.aibaodan.cn/163yrhudjuy.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163fpxfuwqd.html

================================================================================
来源：http://www.aibaodan.cn/163emdnpvmm.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163zlytfuhf.html

println("Hello")
来源：http://www.aibaodan.cn/163lopkjwak.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163gcqqpzhv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163snvgskoj.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163iossbgod.html

"值: $b"
来源：http://www.sxryk.cn/163gwwhmehf.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163uvicyklz.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163txjrowqx.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163qejnknmv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163tbduhvul.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163bhajbueg.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163fuflzect.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163qhodkpwb.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163ljtmiivr.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163xzcelwci.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163agvhmkvb.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163llxeuzyk.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163zoavlrsd.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163nesxiefj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163wvmywpqb.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163tkaxgxay.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163yyzgwhao.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163zcjruush.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ajuwnnvi.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163rtyectwn.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163dqggbtfs.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163rodmxauv.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ankctxpx.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163mldskrsx.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163jycufksq.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163zmisxafe.html

print("Hello")
来源：http://www.xuanzx.com/163lmxtylmi.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163nequqdmp.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ljtzidey.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163iqrfdfub.html

"值: \(b)"
来源：http://www.sxryk.cn/163mksrmqql.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163jpqfkdzc.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163dnpncccw.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163igpzncud.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163cardsvwz.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163picqjaae.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163kzwxayph.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163kyrruegv.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163nvfsrlpa.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163nezmwinb.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163mnkxgdmf.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ndptswcs.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163deskdwbx.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163cblxevrb.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163dztavilk.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163ibvlyhjw.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163iorunscy.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163njsewjrw.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163vjzfwgth.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163otxbzxpg.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163qjqvjsmb.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163ciqnakfv.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163ukayuixy.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163mstbkbng.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163epflsnyu.html


<!-- 参考信息 -->