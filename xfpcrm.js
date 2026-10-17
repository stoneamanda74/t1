外链999!wailian999！

echo "${#s}"
来源：http://www.xuanzx.com/163zdguiznd.html

[R22] 截取子串
来源：http://www.sxryk.cn/163otyhlmea.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163rsychwkv.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163bcpnlcec.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163pcgstcqn.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163fsflklvb.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163jwgrqqdm.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163srjmobkz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163rpmqjlkr.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163qrnieead.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163hyskndwt.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ouwlvpmh.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163dcqlptsb.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163trrvlmzr.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163phyosbpv.html

[R29] 定义函数
来源：http://www.sxryk.cn/163hsxeiycz.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163aplkunsk.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163gjmrkvfg.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163bquvgqew.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163gobcszfp.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163tdovwsvg.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163waloyota.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163gvqrdyfa.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163pjuhwdav.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163mydteyub.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163zmdsxjln.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163emfyhlbp.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163pbinbkgk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163yrsidzyh.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163pykjjqei.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163rqmiwtsv.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163hdqlbtrr.html

files=$(ls -1)
来源：http://www.xuanzx.com/163qeniumoi.html

[R38] 管道串联
来源：http://www.xuanzx.com/163prooalqr.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163zcamfjkg.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163pozpipca.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163jrbtubqj.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163xnxofken.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ytmxzmtl.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163tcogcmcw.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163xarzsxte.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163fwbvonfs.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163chmfmaha.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163usqywrju.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163mcozasxu.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163dndyoldo.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163anjbgkuv.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163lphhsxmr.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163zcgmlvxe.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163addwjpbo.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163cyilntig.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163fjolunsn.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163xvrqwiqw.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163eswvrzvp.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163esokcbsv.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163oykejgzs.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163jjbphexo.html

[R50] awk 求和
来源：http://www.xuanzx.com/163ftapymdc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163bqrmsrcq.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163yzbdhmtu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163qaffohil.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163fztsvjrc.html

wc -l a.txt
来源：http://www.xuanzx.com/163bfnfnpcm.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163hasrpwhk.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163bvqozusw.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163fhnqwnlk.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163qigjrsrg.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163eacblcvl.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163wfslkbjs.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163knndpade.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163gktbdkys.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163gkxdpmqm.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163tlhorlhg.html

[R58] 下载文件
来源：http://www.sxryk.cn/163gtswyuge.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163hoipylrx.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163zzarkjyd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163tojrinhd.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163tjeojxpl.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163xyykrtsy.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163icgkcnov.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ilefenrx.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163ctwlgaep.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163xdvtmdif.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163gnkajblj.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163olwuhdma.html

[R64] 结束进程
来源：http://www.sxryk.cn/163luajvurb.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163fnoeaglh.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163rimadqfg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163ngjoxvgz.html

[R66] 定时任务
来源：http://www.sxryk.cn/163lemkzwdf.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163qavfqwos.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163zxlatgca.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163ppokarqo.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163ymhinhkr.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163avqoybgf.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ykacrfxq.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163szdjgvup.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163nuqgnqzm.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163zpqyzaqk.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163aumyjhhb.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163kmwwpqym.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163jbicqiha.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163imnkvcfn.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163kfmugjdg.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163bjnoieso.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163howamdil.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163tljfknnr.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163usomplyu.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163sdorivli.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163mwfooznz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ceskqmry.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163komuhhxc.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163qbqrfcnc.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163nhsumozy.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163zrmccwqk.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163vmwgsvmf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163lywclfbn.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163dysrnsiy.html

time ./run.sh
来源：http://www.sxryk.cn/163jowkvwac.html

================================================================================
来源：http://www.aibaodan.cn/163gliichvu.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163ctbshapq.html

================================================================================
来源：http://www.aibaodan.cn/163stvaohsi.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163jdnexofi.html

#include <stdio.h>
来源：http://www.xuanzx.com/163beoreyab.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163nhuutleb.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163utkewlhg.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163nwnaskzr.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163quvxoyef.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163txaajezj.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163hnhleita.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163xxuhawgc.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163lfiplmbw.html

strlen(s)
来源：http://www.xuanzx.com/163izdcxnvo.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163ooeugtrj.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163oqmftjxv.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163xkpfxtre.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163emrybdbl.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163jeycfgcp.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163mkjrdnes.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163apwlkrbt.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163wlbghqlu.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163rurkfgwj.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163jzwqgrti.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163fytmnyjp.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163jahomuhk.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ygyqfsro.html

fclose(f);
来源：http://www.aibaodan.cn/163wonyigcf.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163rrvyfxpz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163rqgxdyxv.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163qoiubbja.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163kkyctvuc.html

[S14] C：枚举
来源：http://www.xuanzx.com/163crujrfbo.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163pipcjcou.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163tgcgqaah.html

(double) a / b
来源：http://www.xuanzx.com/163sgprnxbi.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163nompdeti.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163pcfbdpsr.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163esxkxfwj.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163jkemgtcf.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163fxkdyone.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163zhaicbwg.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163tuyyweiu.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163fnccrayc.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163ulccniji.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163tsppyhmc.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163rdaiwlby.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163udvzzqpi.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163txnadujn.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163lhdnzvcd.html

[S23] C：随机数
来源：http://www.xuanzx.com/163tqpgeabn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163kzmsuaih.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163fdggoewz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163osnawbrd.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163bwldqyfh.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163njnxzaql.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163fosmmiwv.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163gehozgdp.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163txqyvawz.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163lthyvuin.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163uzlsyfrp.html

static int counter = 0;
来源：http://www.sxryk.cn/163ywoxngdu.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ivcwaxnz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163gnfgpjmc.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163wtpfvhzv.html

#ifndef X_H
来源：http://www.aibaodan.cn/163xkubmnhb.html

#define X_H
来源：http://www.sxryk.cn/163ildhsghd.html

#endif
来源：http://www.sxryk.cn/163semdwgma.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163njavfgky.html

#include <iostream>
来源：http://www.xuanzx.com/163jasuhvud.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163gnhbmeoi.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163quavjawa.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163ipooqsnb.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163byhfctxi.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163djzyipea.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163vmtlbaxy.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163jhfvcafy.html

[S35] C++：map
来源：http://www.xuanzx.com/163ginjgucx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163oiyhnrlr.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163jyrweycm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163usjagukl.html

[S37] C++：set
来源：http://www.xuanzx.com/163tjgqbmez.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163hhxwyaio.html

[S38] C++：排序
来源：http://www.xuanzx.com/163gjwznkre.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163zlfvmewa.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163iaylcahz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163atvrysbz.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163yvjwzeyi.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163evbgbbag.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163tuhhtdun.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163vukhqmxm.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163ilijpgsy.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163riurevyr.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163naxsaiqw.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163sdeystko.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163qpcatblm.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163kdvggpac.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163gasunscx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163uwqepcqm.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ntgkyoap.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163whgwnzpp.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163xbdksqgk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ecacxauo.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163gyzryibo.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163oiuvsatg.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163emzvzfhh.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163qnzeuqpj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163jggextnq.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163rbcifouf.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163cvflnpif.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163lroltswz.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163qmbcxfjq.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163nmjycttw.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163wpzucefq.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163dfkbpkbo.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163yulrnmoo.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163zcvuqikt.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163twkjtyhk.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163rkeanjax.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163niwfmdub.html

[S56] C++：optional
来源：http://www.sxryk.cn/163cwiembpj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163fbcqvohs.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163ctolniww.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163fscuvcwd.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163opurxmzn.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163yvyroxcs.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163wnsfyfeb.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163vclbszsp.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163ixjtfxwm.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163fxawuhft.html

================================================================================
来源：http://www.xuanzx.com/163ztpirbjy.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163jxsomzpc.html

================================================================================
来源：http://www.aibaodan.cn/163dsyxbcmc.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163omzdcoza.html

println("Hello")
来源：http://www.sxryk.cn/163zbeciqrh.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163zcojnqoa.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163sjngqbtw.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163keokcnso.html

"值: $b"
来源：http://www.xuanzx.com/163ldrwmbqt.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163jiqykxno.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163puwotvtl.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163ejvhmfvu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163uhykilew.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163owgqcgww.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163clvxwwvm.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ycdxrogb.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163nlddxlcu.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163vosnbgim.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163kygazkfe.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163tmhnyqej.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163iqueecrn.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163wpdlwocj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163wdfpfhoj.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163jmtdawhz.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163kjbmrdgc.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163zdzmkopj.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163sldcvyuh.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163bmylkesp.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163dwqbhihl.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163agogptno.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163omxgiygq.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163ccfeqznx.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163wnwugruw.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163xoytozzi.html

print("Hello")
来源：http://www.xuanzx.com/163tmryslks.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163davqxhyj.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163vuljxyxm.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163prkpohft.html

"值: \(b)"
来源：http://www.xuanzx.com/163yuunpkyh.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163rutvkddg.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163sdxlgvdo.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163ospqdtpv.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163objhotlo.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163jfycwhvy.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163wbsrlhjn.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163bnqgvmlu.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163mzwfbfqn.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163fkgdnhvq.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163onuouhhu.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163qydxrxgk.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163lqvqsxbn.html


<!-- 参考信息 -->