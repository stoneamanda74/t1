外链999!wailian999！

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ussexlfs.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163msofyxpe.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ipfcqlku.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163xmqssuuu.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163wyskmcyn.html

[R26] 命令替换
来源：http://www.sxryk.cn/163eyrouihs.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163tihtkcbx.html

[R27] 算术展开
来源：http://www.sxryk.cn/163tvjpfguo.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163qonpqdqy.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163vznhfrak.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163wyqgcdwf.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163bpzsbfsw.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163zuydraqu.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163uhkxfmpl.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163rauavclh.html

[R31] 局部变量
来源：http://www.xuanzx.com/163rsbpsxsr.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163jewamgdc.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163huwgispc.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163qwxceumz.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163citbyqgj.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163vbiptmjh.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163vwsczvsd.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ypfxvyee.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163frvuzdec.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163idnkgwzq.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163jvucuhmp.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163oeheftgf.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163byudcjny.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163bomypplr.html

[R38] 管道串联
来源：http://www.xuanzx.com/163pnugkcbb.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163sbxgvpxp.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163vmjuebgv.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163orjxyxon.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163cchxwjus.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163jutmacvu.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163yxaarcvu.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163nnymynbf.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163mgcjrciu.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163mngjesfs.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163lnzlaycf.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163etwtkemo.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163zjpuczat.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163qojzhdcq.html

[R45] 批量删除
来源：http://www.xuanzx.com/163wcxhzuac.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163ikldlbsi.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163mlbisbgu.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163jvcjdfay.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163xtujplke.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163jcbrlbow.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163pumpqwoc.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163kfjmwbwk.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163hmsqgswc.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163gipxhtrn.html

[R50] awk 求和
来源：http://www.sxryk.cn/163olefdyeq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163ivurxmsc.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163kaodxepd.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163bdktdfdm.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163evlopndu.html

wc -l a.txt
来源：http://www.xuanzx.com/163njaupqxm.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163ztuyfskx.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163kfzxpoqf.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163jocznsnk.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ggfobtvf.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163tsimlabd.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163hvqhgbim.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163wkiolcdi.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163pbkytltm.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163oimrjmkh.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163dzhiamlg.html

[R58] 下载文件
来源：http://www.xuanzx.com/163wafnscir.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163nljueoyd.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163dbtyjmvp.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163tkimcsml.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163cdnumowq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163visunsbu.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163rnavfugw.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163nsyeelfd.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163vaezkivo.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163xxjxrqjq.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163rqsgxfvu.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163cblmzodt.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163vvccvkox.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163zgzaviig.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163unyopdci.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163ptoqiurt.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163yhlmtywe.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163nghshnrq.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163bfapgann.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163fzrrwnan.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163wncinvff.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163qwkszvme.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163bbjawjnk.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163vbywjwym.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163quspvrww.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163umgyrwgn.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163mycmxroq.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ayviyosx.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163lqiuklcy.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163zofdbyci.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163wjijbydi.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163modcyvuo.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163zqsswfsl.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163lxjglulx.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163juuyddky.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163otjxzgdx.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163wgvfkfyg.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163cvndcyiy.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163lizuxvcp.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163luzrqnpr.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163dkrukdhn.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163gflalhpg.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163owanjgvd.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163jlykhglx.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163nprcrkoa.html

time ./run.sh
来源：http://www.aibaodan.cn/163congbbrr.html

================================================================================
来源：http://www.xuanzx.com/163qloucnfo.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ijhtfhqz.html

================================================================================
来源：http://www.xuanzx.com/163aehfvwgs.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163kwicetgq.html

#include <stdio.h>
来源：http://www.xuanzx.com/163whiusjkt.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163zqifadvk.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163kchozgja.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163txdcvpva.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163tnbvnutb.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163mazhshxb.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163izertwwj.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163kwurmgge.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163jqqrzmit.html

strlen(s)
来源：http://www.aibaodan.cn/163wzjgzmla.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163lclrnuwl.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163nbkhknwx.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163uibfdwnc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163ktffbhjv.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163jhhsmdyu.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163pmpiljuq.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163msalfbjr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163vlploamd.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ihsbcmgx.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163iwxjbgvq.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163xalqqwul.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163oczmsfbo.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163ycqvbqmg.html

fclose(f);
来源：http://www.aibaodan.cn/163rziytniy.html

[S12] C：写文件
来源：http://www.sxryk.cn/163spasyfrz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163kstfxcai.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163syuunooh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163aktosxib.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163fidyjxda.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163vahpkpla.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163fumvxppd.html

(double) a / b
来源：http://www.xuanzx.com/163lqllixnz.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163lwwwljxp.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163eghvfhgj.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163zrjzflfh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163xemxyjhd.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163lgkwdecp.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163meegaqxh.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163autigsgi.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163sljdjshw.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163rpgeoido.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163rblenvgr.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163xppbrvek.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ratldquj.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163codsxutc.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163szpfkmpg.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163mkkqncdw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163qaoalynt.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163csrvogom.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163owtmwkzy.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ncstclhr.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163ocvzfgrt.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163tcgjagpd.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163skoxhitb.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163cvacyvqc.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163qvfbgakw.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163jedojpqm.html

static int counter = 0;
来源：http://www.xuanzx.com/163hcyhural.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163dtqqwscw.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163kxixnqza.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163vyebwekj.html

#ifndef X_H
来源：http://www.xuanzx.com/163ncrjbpsj.html

#define X_H
来源：http://www.xuanzx.com/163cvxoluae.html

#endif
来源：http://www.xuanzx.com/163ccgxndar.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163ordmqkfs.html

#include <iostream>
来源：http://www.xuanzx.com/163hhxalbuj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163wcmlttef.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163unohftxp.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163zfpyduhx.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163qydyagwj.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163atyywkmi.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163uiomtihn.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163qxevnxgb.html

[S35] C++：map
来源：http://www.sxryk.cn/163slwffdod.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163kaaxciuu.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163rvppewed.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163coizyqkc.html

[S37] C++：set
来源：http://www.aibaodan.cn/163mczzkctl.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163qkvjraon.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ubyuhwvc.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163rmtbgafb.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163isuwhdnr.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163luoeobzh.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ksifyatx.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163mjznesyd.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163filvdcsz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163frunhvau.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163efwmfjrn.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163ybsgapjh.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163xpnndvik.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163trrawcvg.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163rxgtsdkr.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163erspoopo.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163bpabfjgz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163rousfzsy.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163wqefjjab.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ibobmjil.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ydqiixjy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163unsfiilu.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163qjyvrrna.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163pqegmmug.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163kvgkhdst.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163vpnolttd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163htfppndi.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163bgzpltpo.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163tnbimanj.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163ajtedwkr.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163rmzjrnjy.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163qjgwncyp.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163cuaqqlzf.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163vmbkdzqr.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163yhuuljja.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163iauaznkl.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163ayjokdlt.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ylqitkam.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163hloywcwt.html

[S56] C++：optional
来源：http://www.xuanzx.com/163vmiykhua.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163onpjhjxu.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163nwwyswta.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163nqeiharr.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163hoietbnj.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163mskqwqjm.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163geqtkwzw.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163hsynunwy.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163chmierdm.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163pjdfzhvg.html

================================================================================
来源：http://www.sxryk.cn/163qyhgosoo.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163lsexumum.html

================================================================================
来源：http://www.sxryk.cn/163muzdoddt.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163mkuqwmhe.html

println("Hello")
来源：http://www.aibaodan.cn/163aysxlefs.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163rtdvoeyv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163dazbiyoa.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163fuirgxec.html

"值: $b"
来源：http://www.xuanzx.com/163pgtmbieq.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163qnryraqx.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ubahaidd.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163wgmtpkxu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163mmztrzor.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163rguepgpm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163escgvnok.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163uawcyfcc.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ofhpiesy.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163wpbqnzki.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163jemggcvu.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163dpgemnze.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163uehdonho.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163ydimizap.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163oxajkszh.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163jbnifwjr.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163lnmpwnpr.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163iqegiors.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163fmbtrvzh.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163pwtjbple.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163zhvqfvzy.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163stmbfghv.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163afgqxmyq.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163blevoget.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163sovwmxms.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163ybqbiekx.html

print("Hello")
来源：http://www.xuanzx.com/163sfauamwg.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163swcohano.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163puizaxbq.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163lytciyjk.html

"值: \(b)"
来源：http://www.xuanzx.com/163cfeiadlq.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163opoykbxj.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163vgsgzzvb.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163vhikhvmt.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163shycclke.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163tbhcthlj.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163jkznfqas.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163vumjnbdo.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163cemzvqnb.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163pcdwvfjl.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163afbcuasx.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163koglcuup.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163scpspglf.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163ogeqofuy.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163xyphxxst.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163brepuizm.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ktqpbzsm.html


<!-- 参考信息 -->