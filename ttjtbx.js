外链999!wailian999！

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163adgvhirq.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163djwdxmcd.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163dytecekv.html

[R31] 局部变量
来源：http://www.sxryk.cn/163pjqnhyks.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163gbsnswli.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163oucotmzz.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163lwfmleoi.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163robzqjrc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163faarmezo.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163pskymzde.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163dqeiuxyx.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163kuduadsg.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163ixjbdhns.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163zhyytglh.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163bxupwphk.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163uivzucgn.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ukwctomi.html

[R38] 管道串联
来源：http://www.sxryk.cn/163pemwxvfp.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163qosotuuy.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163vngwhqho.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163oxlhhbjv.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163yahtivcs.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163jmsyxfap.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163qstbmvxc.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163ockvhtgh.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163ymsfujzv.html

wc -l < a.txt
来源：http://www.xuanzx.com/163shsotvss.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163eomcdnhy.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163mlaxktpl.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163mcnxijyg.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163mhdokwys.html

[R45] 批量删除
来源：http://www.sxryk.cn/163amrmrkrz.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163snclbspd.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163usaqyuuf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163jsgqnhys.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ybbnbpwt.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163pjevweak.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163vkjxdsvy.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163sacxaqua.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163obyematr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163sswhtvbe.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163rrubkwgc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163xxhhzamp.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163rzhzuudn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163rqjrepdb.html

[R52] 统计行数
来源：http://www.sxryk.cn/163bjcukprr.html

wc -l a.txt
来源：http://www.sxryk.cn/163uognyvdh.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163ylsjurvw.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163yxnxufle.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163myhmwmrh.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163ordxeaqg.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163seswofkg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163maqhogpp.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163cncewgsg.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163jwovjumi.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163auwepriz.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163glsmrowf.html

[R58] 下载文件
来源：http://www.sxryk.cn/163zwpjipvc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163bsrcslmx.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163blxhridg.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163vpkodygm.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163xunfdkci.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163gstrptta.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163pofpospa.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163btdalybs.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163ckfbnqub.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163eesjtwaj.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163ycgbordm.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163xxmxsxow.html

[R64] 结束进程
来源：http://www.sxryk.cn/163woctkers.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163gnmujbrk.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163qfcwxfti.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163hobnngli.html

[R66] 定时任务
来源：http://www.sxryk.cn/163qvsmtpqb.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163ozirdwtz.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163rpiitdjd.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163qdnzckpb.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163yqpymlts.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163fnsirvkr.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163aetjwhjm.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163nzdqnpje.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163lccbmvwh.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163tfhagfxz.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163ipewqdfa.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163pvfaacmc.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163hkqcxazc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163axmolqeq.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163qpziglrq.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163xchiwtxm.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163gycxhndn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ozuswzej.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163zbrdwibt.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163zrvleaiy.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163cldhvrmb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ndtkthgy.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ddbjhbxe.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163lnfaecnj.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163iovnaueq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163ixltfecq.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163mnipzlck.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163nwffydyp.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163avxtfjiv.html

time ./run.sh
来源：http://www.xuanzx.com/163vuzbtjzd.html

================================================================================
来源：http://www.xuanzx.com/163auaohlyv.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163ofwwygyw.html

================================================================================
来源：http://www.sxryk.cn/163dkhwjxww.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163jawnmyyw.html

#include <stdio.h>
来源：http://www.sxryk.cn/163kylnouhy.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163kduepang.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163rcbhkzbd.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163wcmycqhu.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163ezpmjdzk.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163hevaglys.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163ngznpvzl.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163smzytuth.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163sycxdrxk.html

strlen(s)
来源：http://www.xuanzx.com/163oucpsvbe.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163itvefxhf.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163tkekezys.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163szrjsecu.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163gaxrbzdl.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163bwesxfvl.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163zapcorlc.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163xdijyxzs.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163yiknwekd.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ijgtwgbo.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163hrsmwmrz.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163djbvqzuj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ladongtp.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163vwikrdxv.html

fclose(f);
来源：http://www.sxryk.cn/163bquuhwfl.html

[S12] C：写文件
来源：http://www.sxryk.cn/163zhpaddsp.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163fseebjyc.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163ylgespgh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163zqgbumof.html

[S14] C：枚举
来源：http://www.xuanzx.com/163utquifku.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163drtjmuon.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ofbycfay.html

(double) a / b
来源：http://www.sxryk.cn/163sirfjncv.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163cmhcyalb.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163mmttnofz.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163vdardcza.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163bnlyjqem.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163fkxlguyq.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163cqivjwld.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ajtmjtlb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163euvxrifq.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163trvcbsjp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163uchazuhl.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163cwtfktyd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163oslwkrgs.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163lxggxecw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163cutasthq.html

[S23] C：随机数
来源：http://www.sxryk.cn/163glbgafib.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163xdnrdoni.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163yvnvtpjw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163qkfpjvtj.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163vxbmqsjx.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163rwxhbmyt.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163suddikqx.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ugmgbpkg.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163huydwqqm.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163iambsysw.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ktgwexys.html

static int counter = 0;
来源：http://www.xuanzx.com/163tifurdbg.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163zdkbgiqe.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163tgydrdvz.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163oyjqxgxr.html

#ifndef X_H
来源：http://www.xuanzx.com/163etxrcmnr.html

#define X_H
来源：http://www.aibaodan.cn/163hpqshvon.html

#endif
来源：http://www.aibaodan.cn/163ayucygxw.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163qjidvmrk.html

#include <iostream>
来源：http://www.aibaodan.cn/163hqdoggbv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163qiqmjeqm.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163mbfdfhlh.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163aurlrvki.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163jglwmavw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163gqmidmkh.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163bcwsarik.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163uverqqpt.html

[S35] C++：map
来源：http://www.sxryk.cn/163tnfrudkd.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163sgofymoq.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163gwiipnjg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163akdmjggf.html

[S37] C++：set
来源：http://www.aibaodan.cn/163ammalexv.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163biklvmte.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163kwbnqmef.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163dsxclhch.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163wpdsaxhi.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163qniudimf.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163axgbwmpv.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163nahvyvnh.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163fuhcycxy.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ipypisqq.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163zsbbmfmy.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163dqayiynm.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163svmrqdfl.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163dgqhxtxj.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163fbpahern.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163wzvphcif.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ddjfsdld.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163qidwycus.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163xbylfmqg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163hlenfayh.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163smmmzecy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163tjaoahnv.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163hiyyhysh.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163bxjntilf.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163mzlkmocw.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163unhsxatv.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163dspsccgn.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163gycwxjej.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163gakywpkc.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163ydpkevbf.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163eyatrlqx.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163gllzfcja.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163yvmuadlp.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163hfuwfnmb.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163htwssdyf.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163wdgomnut.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163vallcihz.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163jvqfetru.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163rjhugwdv.html

[S56] C++：optional
来源：http://www.xuanzx.com/163lcmcakge.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163wrnxegit.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163ssnjkblh.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163itdpkmcr.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163exkfhpkh.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163lymuuiie.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163khjecpgz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163bhrkxifq.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163aulzcjww.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ijrgekhj.html

================================================================================
来源：http://www.sxryk.cn/163iikpfvdc.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163zeqwbcfz.html

================================================================================
来源：http://www.aibaodan.cn/163dfztvrrq.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163wdqkwmrf.html

println("Hello")
来源：http://www.xuanzx.com/163eczznvbo.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163kuqhvqwu.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163bmvwussq.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163hrskkxpj.html

"值: $b"
来源：http://www.xuanzx.com/163fqwhnwip.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163tywlnrqh.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163jxufhwmt.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163djtfxelo.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163mswiauys.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163zkrccobv.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163ydimogrm.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163dlncvgbn.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163epifrwqo.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163xahcwwzu.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163frxvlqaz.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163vumciulw.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163dfmnbdyx.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163esuphxcb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163umgfmgxy.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163xmvmrtbw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163jwqafnin.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163iabjtikn.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163wdgleoot.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163wzvlellz.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163ssezbyow.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163hcwswxbk.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163yqmdbsre.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163uqdfkqkb.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163kfgdzbrr.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163fvzaxnbr.html

print("Hello")
来源：http://www.aibaodan.cn/163ygclvsra.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163sbjxckur.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163pmxsemue.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163ykuiihgy.html

"值: \(b)"
来源：http://www.xuanzx.com/163rzvwtoub.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163jeoiburu.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163akqpfhap.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163xqdfklxb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163xyzoxcac.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163njqzbpxy.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163jmoxwgtc.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163sjocigal.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163dfqacqdm.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163kmzmchbi.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163pqrplgrr.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163czgwiiii.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163pbfikpaf.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163nqfmltmh.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163rdwnyeri.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163bcxwtjku.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163wchidjfk.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163ltonugeg.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163quyxkwgh.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163hkwyjcpn.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163szjstwky.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163orvbnthc.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163kqvwtjns.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163nxzseafb.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163qfzodihn.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163eqitleae.html

print("Hello")
来源：http://www.xuanzx.com/163wislrjtq.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163dcxeufts.html

local a = 1
来源：http://www.sxryk.cn/163vjfghhdf.html


<!-- 参考信息 -->