外链999!wailian999！

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163ojfdwtuc.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163kwkfprkg.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163iwnckryg.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163gpeqilgy.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163ddzpdmoh.html

[R26] 命令替换
来源：http://www.xuanzx.com/163vbcjupvl.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163nftmawkv.html

[R27] 算术展开
来源：http://www.sxryk.cn/163jqhaaoil.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ruxeyuag.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163xdddcips.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163ertlsdmh.html

[R29] 定义函数
来源：http://www.xuanzx.com/163wyxolgjh.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163oqycdggm.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163mezonisa.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163weannvgz.html

[R31] 局部变量
来源：http://www.xuanzx.com/163whaejved.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163gnzsjkdm.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163nfgbtlkn.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163chisisfk.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ixpmglyk.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163ecfpbhzq.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163dxmxsggt.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163mlnskymb.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163hwizuxuc.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ijvpnkus.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163smjfhfxc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163rhoqbsxn.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163oopydcpy.html

files=$(ls -1)
来源：http://www.xuanzx.com/163zscdpgze.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ltldhkap.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163pjysslvb.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163cargdcca.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163dszltovn.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163euulgslo.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163dhkycrnc.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163dujgxkey.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163armxmpeu.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163ogykhixk.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163lvchcudk.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163vfnlxqap.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163nvjqvxfk.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ijlojrgt.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163sjebosgo.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163zmdepqwo.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163xwsmkmts.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163npzmtnvz.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163gojroyhb.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163dseuczwp.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163ogxskeie.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163yqyymcjc.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163zbpxftys.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163npitqcfh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163hazlnalv.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163eovkzyfa.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163jggvjkpx.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163qohfhcik.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163kkumxcbe.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163vioobikg.html

wc -l a.txt
来源：http://www.xuanzx.com/163ppwbonug.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163yfhmuyrg.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163gqlltzks.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163giviotrr.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ofgtcccx.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163laqqqspo.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163kfblmgzw.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163eibilpas.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163fjpouwfj.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163mhveepdc.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163gbbhjjiy.html

[R58] 下载文件
来源：http://www.sxryk.cn/163wefpfjft.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163mwjtyusx.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163wmzfsxdq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ksjlirmp.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163tafjkotz.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163wridmclu.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163mafqswwc.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ycwvctmj.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163iuehpmta.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163suczstiy.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163gylhhsqw.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163mlorfngz.html

[R64] 结束进程
来源：http://www.sxryk.cn/163wtxtcqds.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163awiaczkw.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ygitxxxb.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163zrqysnyk.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163wddewfcy.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163abqttcws.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163wkkssjas.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163zwwkeulx.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163cijkotke.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163utynkilw.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163rmurkhtc.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163dodlteev.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163vfyxlarx.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163iqtubhpk.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163sluqccgt.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163vwljcoaa.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163fmgactxo.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163oioaxvdv.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163rmmjerxp.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163hhalecnk.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163hwrgcirm.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163wxdzppln.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163nsyvazsc.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163gtzzvwbt.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163kxulskzj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163cqopgxor.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ngaszvsv.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163okydsnmm.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163vswgtcfq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ezzixeby.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163ibijlsqj.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163byysyqqy.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163podhdyfy.html

time ./run.sh
来源：http://www.sxryk.cn/163ctvigfou.html

================================================================================
来源：http://www.xuanzx.com/163xalbqlja.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163vjrlkwqy.html

================================================================================
来源：http://www.xuanzx.com/163lnzgtrja.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163oochyjtd.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ukfrqvtz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163dstavlct.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163oanovuie.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163mafqxrat.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163qxykbqex.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163exvvfyqd.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163ayhiklok.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163hicsxadl.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163opntuzhj.html

strlen(s)
来源：http://www.sxryk.cn/163ynqyjgvk.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163cmgbdyfn.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163nmoulzrr.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163fqtszltd.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163fepjspdr.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163xbionwoo.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163nvvqzzeq.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163pkdmvvax.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163wwqpkfsb.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163mululyic.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163zwhhpthu.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163ozkqcszn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163wiqwpkwc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163jwkdxuwa.html

fclose(f);
来源：http://www.xuanzx.com/163cgxhzpnh.html

[S12] C：写文件
来源：http://www.xuanzx.com/163jhiviupo.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163xtpwhpiw.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163kztftxuh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163rbmnlkdh.html

[S14] C：枚举
来源：http://www.sxryk.cn/163nbhcklmi.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163ifojvcuz.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163lztfgrsh.html

(double) a / b
来源：http://www.xuanzx.com/163texmyqvc.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163vyprmpap.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ywuopleh.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163hsmtojwa.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163lkpmpdbb.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163madzsgpr.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163rabaxuht.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163ervntmqc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163tpblwbvh.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163zhgwmsfk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ydhhnslr.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163pbpdoice.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163npgfnazp.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163yxkygqhh.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163quwpjsuf.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163lrpgdztw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163zaruvmlx.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163ejhrkoln.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163fpgvxrsp.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163qesszwwf.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163dzwafrbp.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163yqazwjqb.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163vmfahxfn.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163rogqyizt.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163igpsmbos.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ippbzzvs.html

static int counter = 0;
来源：http://www.xuanzx.com/163iiyjgjcc.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163huhbflqb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163lpmemsli.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163fnkmwgoh.html

#ifndef X_H
来源：http://www.xuanzx.com/163hvugvrox.html

#define X_H
来源：http://www.aibaodan.cn/163rdsznzmb.html

#endif
来源：http://www.xuanzx.com/163knvytfnh.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163nqobsava.html

#include <iostream>
来源：http://www.aibaodan.cn/163sxlgmexk.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163cmluwrfg.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163gajetpjv.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163nkwbdvdv.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163dzburohn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163mhggzgkr.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163kezavqqs.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163hpvklsyf.html

[S35] C++：map
来源：http://www.aibaodan.cn/163adiztndx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163wylcnhyz.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163pmkwkfli.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163rojgcfey.html

[S37] C++：set
来源：http://www.xuanzx.com/163jbukvrfm.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163bbrehpax.html

[S38] C++：排序
来源：http://www.xuanzx.com/163blitxkji.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163mdpzqcah.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163bztzvoxw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163awhkrklu.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163rksplsmi.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163axvkdlhp.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ihqsuiya.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163xfmzggii.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163uuncgpvh.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163rvkctcea.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163gujroykc.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163jldmbpml.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163lapofthy.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163yzusvmdn.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163iklprnxi.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163oozwlwmw.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163glgxbfvu.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163hlqtasct.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163egydnqvv.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163ngarxbbl.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163gaafzesk.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163ggooybhf.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163jopkuxpf.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163yumrhpzb.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163jogbxasz.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163fxqxwhdd.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163vpuskgin.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163tebwwaho.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163zxbofomn.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163gajtwcrk.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163hoixuqvv.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163kplxbojn.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163uvvsjsxg.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163pgviexmv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163jqovpjre.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163fgnyrqno.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163aphjspvl.html

[S56] C++：optional
来源：http://www.sxryk.cn/163ficzwknk.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163antulncs.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163unwpgfwx.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163yecwmupy.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163tkxzhwzr.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163sbxgfxiw.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163swmukaxm.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163qkcwbiie.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163xskknwrq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163wqhyjjbn.html

================================================================================
来源：http://www.aibaodan.cn/163tvtrwibl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163xzvbuzoa.html

================================================================================
来源：http://www.aibaodan.cn/163vjpynplt.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163srtupbnl.html

println("Hello")
来源：http://www.aibaodan.cn/163jflvfwyn.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163wdbqwduy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ymfaxuai.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163slydqwne.html

"值: $b"
来源：http://www.aibaodan.cn/163yzqkkuhj.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163xifdhszm.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ajzcviut.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163jgihywuh.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163wddftusb.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163zxdvqikp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163mclecplz.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163jfrovkfu.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163hngyyedm.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163bjntcmwb.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163tnrwezfe.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163lfkfojna.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163yesupesp.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163smrdxsai.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163klcrlfrt.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163cccfabsa.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163owghsayk.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163viqtkwro.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163skkpcnxw.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163grhyhjoq.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163svjykade.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163rquzdhge.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163eutpoxge.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163bveuxutf.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163percpbgg.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163vuaxlooo.html

print("Hello")
来源：http://www.sxryk.cn/163ydjmkqyf.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163xhiumzoq.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163fbgtdxds.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163qqvtbvix.html

"值: \(b)"
来源：http://www.xuanzx.com/163mpjuyqpt.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163fjsqvrlj.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163xsiencyg.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163uoditteb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163rtkrqzxn.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163nksgzhsi.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163jzqqtbnn.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163xigotbrn.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163vvoxoynp.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163jnioikik.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163nmjkaurt.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163jesxyqvv.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163hctaqexs.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163rtbckthv.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163uimuintz.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163iegipytf.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163rhvucbza.html


<!-- 参考信息 -->