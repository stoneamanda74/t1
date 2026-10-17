外链999!wailian999！

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163beaspqlw.html

[R26] 命令替换
来源：http://www.xuanzx.com/163xzzgdamg.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163isuixvoy.html

[R27] 算术展开
来源：http://www.sxryk.cn/163hnndyzuz.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163lsiwzlpu.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163fmhdjoyh.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163ziqjujbd.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163hohiujfz.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ujyodjqg.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163atutpfaz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163zmwztzpx.html

[R31] 局部变量
来源：http://www.xuanzx.com/163ucbivrrv.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163vrtmliqc.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163lssmiejd.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163qoshgoty.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163nxedjfwf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163duyuezzt.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163nwvbxxrc.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163audrphzp.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163qkjntxcb.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163wrlnoahu.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163xywjxzjy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163ifyvlwrw.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163uahsbbos.html

files=$(ls -1)
来源：http://www.sxryk.cn/163sfkivwbs.html

[R38] 管道串联
来源：http://www.xuanzx.com/163mwcyaytn.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163pxwhwfge.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163toynqmuc.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163zlpakrmf.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163bgyzyrhc.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163kjlbzxax.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163wknbuxfp.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163mgysisfl.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163ibsuqcmq.html

wc -l < a.txt
来源：http://www.sxryk.cn/163xxvnexkz.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163brmswrfl.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163zpspuvip.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163kxuzjizb.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163edyuoxrw.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163anlbykpx.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163irueskqt.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163sphkfjrq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163bnnlmgdr.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163cyshrjkh.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163vtqesqok.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ypoqteqn.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163piijkmst.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163xfzjeeza.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163vqptldkj.html

[R50] awk 求和
来源：http://www.sxryk.cn/163xfoshpbf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163wzetpjuc.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163wlihaqiq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163conuoyie.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163ndlbuufp.html

wc -l a.txt
来源：http://www.aibaodan.cn/163ilmbqpmb.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163fulcbdey.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163hmnwhoef.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163aarnfvsi.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163nqhxzamf.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163quoepzqb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163emzfdbnp.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163vietppks.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163lxulvecl.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163jktbhyfi.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163gvwhcxdm.html

[R58] 下载文件
来源：http://www.xuanzx.com/163uagnnvlt.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163kwqmigkf.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163tcmwlpit.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163vmxmhmrj.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163tsehmmdc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163ykepfhaj.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163xtiimlbl.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163bbiqvkvm.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163usbprdae.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163qsnyzqzb.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163zksjqlcs.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163mbtyafho.html

[R64] 结束进程
来源：http://www.xuanzx.com/163urraklbh.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163roxuimwn.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163nwrsqjgk.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163mrpppphz.html

[R66] 定时任务
来源：http://www.sxryk.cn/163yttktsdo.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163eyizfauh.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163fpanvhxn.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163idonndjf.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163tjhoyrnu.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163wuwwgucu.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163vteispks.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ekpwwjxz.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163bvachodb.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163tnrsxxwt.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163xexbatex.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163jyhipahk.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163lxxoavzn.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163myosdtpr.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ksickgju.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ozeeyxdl.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163bnsympjk.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ofjgwuhw.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163lcujcfwp.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163mvopbmfw.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163xrpjqgum.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163gzqtetnp.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163mzeuwzue.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163llqdbcqe.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163uerywqbn.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163jjnqtqdw.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163xzmobqyw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163pfwnnosy.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163yqenxmcm.html

time ./run.sh
来源：http://www.xuanzx.com/163hgvodfbb.html

================================================================================
来源：http://www.aibaodan.cn/163kwpolpgz.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163juxzevkj.html

================================================================================
来源：http://www.aibaodan.cn/163wxbpkwff.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163lhkkqysp.html

#include <stdio.h>
来源：http://www.xuanzx.com/163easpcmdv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163nizxnusm.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163jglfjluu.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163dcoywlli.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163zpepvnql.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163jafpcpkl.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163jhoykrqs.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163czyjhght.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163bbkdjobz.html

strlen(s)
来源：http://www.sxryk.cn/163yycwtjyr.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163dxoegsgj.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163npjthwbc.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163miavsxhk.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163gaaqczpt.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163orkkohki.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163wtufkuns.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163swnmdgzq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163nieixccx.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163qcrixved.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163dxnecdxq.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ijuswlym.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163nbtrxskw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163rfhosuvn.html

fclose(f);
来源：http://www.xuanzx.com/163xdyziwvg.html

[S12] C：写文件
来源：http://www.sxryk.cn/163icyeoihk.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163bntdgbbc.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163uhrznqlr.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163jtuxmsap.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163zkdhmzji.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163bhhvreuv.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163rdafdoka.html

(double) a / b
来源：http://www.sxryk.cn/163fukgecge.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163weafflre.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163qwewgsmf.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163flimirny.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163vvryajwz.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ljmpchsg.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163kxjvlfsn.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ppqxlrdd.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163tithzbvz.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163bvsjmvcb.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163tduupfwb.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163kgvikexa.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163mrcsrrrp.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163xaherdbr.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163fzqrpzty.html

[S23] C：随机数
来源：http://www.sxryk.cn/163jztwbctq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163tnefownz.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163fptvqpjv.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163xjtfxehf.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163wrptbxmd.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163hrujguhd.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163mcxkgryh.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163nagyyexw.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163gjjravba.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163vhnxlnxu.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163vmlwgvoi.html

static int counter = 0;
来源：http://www.sxryk.cn/163pqhadqoh.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163wrtskcgt.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163tdbfcmxo.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163pctubgbb.html

#ifndef X_H
来源：http://www.sxryk.cn/163nqargktp.html

#define X_H
来源：http://www.aibaodan.cn/163yiyjphbv.html

#endif
来源：http://www.aibaodan.cn/163unoqdbbw.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163rqdbmsol.html

#include <iostream>
来源：http://www.xuanzx.com/163ftkjqvke.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163nkkvgvft.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163faqdyyyk.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163joagcswo.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163nibykzyq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163yzsiaqek.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163fkloddso.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163xcgkudry.html

[S35] C++：map
来源：http://www.xuanzx.com/163dxckaase.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163wfdtqpra.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163leurdmht.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163nxxbnyth.html

[S37] C++：set
来源：http://www.sxryk.cn/163jqasplkl.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163tdhgiamt.html

[S38] C++：排序
来源：http://www.xuanzx.com/163dgenymtv.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163tuxzrauy.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ywacidol.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163mekfhjvo.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163qxetlrkm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163klsbxbbh.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163wretwnfx.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163exzgvvxr.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163bmflutnz.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163lqobkovy.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163gpztpvwo.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163oyugscrc.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163slhkneni.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163drtbfjfm.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163apdqrexe.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163mxhbwiva.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163hemtxsjq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163fwnwltos.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163lvpvuwps.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163zsphwhpc.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163kaqvfmmn.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163vdrptvem.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163lsbznigr.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163nlaethkj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163almaklkr.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163bexajhbg.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163vprmbiet.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163vqkrvenq.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163aaciigpo.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163uvljjsop.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163qsibvgrk.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163psqoatfo.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163xstknvsy.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163alqjgjgo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163jotqtxvi.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163rjapegcq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163tanqvrij.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163hfpkvipf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163evoeukjx.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163pajalaii.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163aonltchz.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ihbhzmlg.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163puzhwlwu.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163owpdjtlr.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163yiyyovao.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163wciojvdn.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163gxuyeyut.html

================================================================================
来源：http://www.aibaodan.cn/163cubvyitu.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163bdxzlsag.html

================================================================================
来源：http://www.aibaodan.cn/163bvfuntrf.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163thmyrhlb.html

println("Hello")
来源：http://www.xuanzx.com/163zmwcdvtm.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ioijnqaa.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163kmjblimn.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163vxdnizns.html

"值: $b"
来源：http://www.sxryk.cn/163fuuiuczx.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163nnstnyko.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163agnrtaqc.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163sbqkurfc.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163jfrnyelb.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163uqsxtiqy.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163dcggehvb.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163nictimnq.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163mpwwupcz.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163vbfvyqsz.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163gcrnyuyk.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163xqkxtjgy.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163bseybwvb.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163fbfeadcg.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163funwysny.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163ziwdeujs.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163otbncsoh.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163ltoixbam.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163frpafrwc.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163jutnbuxt.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163pnsfescd.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163awisrnow.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163vrzaceeu.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163botqjstu.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163lnftcvsn.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163zxzkxsud.html

print("Hello")
来源：http://www.sxryk.cn/163mpbrqcyi.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163zjycsdwt.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163dwyaqzoi.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163ajbgxiyo.html

"值: \(b)"
来源：http://www.aibaodan.cn/163avtpntof.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163zoewiewb.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163pvqmumus.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163qpdutpll.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163iyykyfmh.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163jxiaqccx.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163dwdsimlm.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163bbeofboe.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163aspntvaz.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163yhsmpmzj.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163sdgzykdt.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163tyxuurtt.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163wauuprpf.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163bakvwagc.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163ogmmfsln.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163occawzyv.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163fihuvcgg.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ogjqzmal.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163hnqfrkcv.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163xqwmukki.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163bnfhllgw.html


<!-- 参考信息 -->