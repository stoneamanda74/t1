外链999!wailian999！

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163mdandluq.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163qzbzwbbk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163wplirkzh.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163nhcfnnhi.html

echo "${#s}"
来源：http://www.aibaodan.cn/163gnxjzmnz.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ckxqdvtn.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163fhapdkeq.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163wlrvfiml.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163oakpdfrq.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163ifmsjhfn.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163mhxkxayv.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163mbhlanfp.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163fnudbjnx.html

[R26] 命令替换
来源：http://www.sxryk.cn/163nwcmotwx.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163xwvxsmwt.html

[R27] 算术展开
来源：http://www.sxryk.cn/163jisvfbkf.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163illxqlry.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163yllxddlm.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163otbaivpy.html

[R29] 定义函数
来源：http://www.xuanzx.com/163rxxpwhep.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163uaveeczx.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163vmvhyhky.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163npspekmq.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163zgoqpluq.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163sdouajbb.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163isdsapdo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163xpctmbcs.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163xorhffbk.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163xgdejebr.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163trdghmuh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ursqandj.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163mzawlhss.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163pyrbrbjc.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163izbpoyni.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163glnkxkjp.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163yvfplslk.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163oerryvhs.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163mdhktlna.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163atodeobu.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163eyrnumge.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163boxogolz.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163mcqpxpsv.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163fycsafad.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163itztxpyk.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163ekqujqcw.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163tozhvevr.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163kohzqbgx.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163gsdkkozh.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163egtnbiyv.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163vfvektoh.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ygfopojm.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163whofcpwt.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163jbzixidp.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163pnczrqli.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163fvlyzjjr.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163sscohugt.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163jnxfgzaq.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163ikxgmosa.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163pylboris.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163rfhhypii.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163wfdguzhk.html

[R50] awk 求和
来源：http://www.sxryk.cn/163gljwnqrw.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163rhaklmed.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163sltatudv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163zfbwtuce.html

[R52] 统计行数
来源：http://www.sxryk.cn/163lzhsezpx.html

wc -l a.txt
来源：http://www.aibaodan.cn/163etcarpmb.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163rdvydmab.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163mnpxjmph.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163wwqsnbag.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163pmgrijeq.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163lxccdesz.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163epdtdgmw.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163dsqfzhrd.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163gvomgzpr.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163yifezjft.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163wpztwkxi.html

[R58] 下载文件
来源：http://www.sxryk.cn/163upzfbxty.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163bguxjejo.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163fjzimpdt.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163qktygiuw.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163agryyxzf.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163xgovwhux.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163dhuzuhlq.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163vithygtu.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163lvacysxl.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163rknrebhl.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163sauczcqq.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163lugtmyix.html

[R64] 结束进程
来源：http://www.xuanzx.com/163edjauprz.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163oaxtpaau.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163uwntwhkg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163gkufedhd.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ewqsmdca.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163ikvsgmmu.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163tzzwdbhe.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163pizbcsuo.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163tsweevfo.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163haqyzera.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163wbvhzvlj.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163clklvpze.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163tlpahgni.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163juehbwlm.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163vneezzyv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163pldfsyfn.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163tiznnlkg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163djfqjmjp.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163aveekxdu.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163calbftpl.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163webfvpak.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ufpbkhul.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163wegzzwpb.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163qngaenuf.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163ekuusxlb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163sjgqrytw.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163smkrpjln.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163sblljbas.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163wyqnuxij.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163yvlebrwk.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163onuatixa.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163fjztojgy.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163kglcvrpu.html

time ./run.sh
来源：http://www.aibaodan.cn/163okvzemyd.html

================================================================================
来源：http://www.sxryk.cn/163pcezphai.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163maeezyai.html

================================================================================
来源：http://www.aibaodan.cn/163ytlyyhea.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163lkjunobl.html

#include <stdio.h>
来源：http://www.xuanzx.com/163nhkmvdtb.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163munvmgxy.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ryapsamq.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163bshnxglp.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163utvfmmju.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163trpuebak.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163ybqthwsq.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163rdgthxom.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163rylhtjaw.html

strlen(s)
来源：http://www.xuanzx.com/163aiddugjp.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163gidgcrfc.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163icwjrqai.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163kbyplnyq.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163boorlzjw.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ewypbsms.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163mowaqgpw.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163offflkui.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163sfbvbrhj.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163sraeuymd.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163wwkdfhap.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163lxjgbxpu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ujlibxha.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163pivmcmnf.html

fclose(f);
来源：http://www.sxryk.cn/163temwmfyc.html

[S12] C：写文件
来源：http://www.sxryk.cn/163gcwloqpu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ompfucvf.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163zabyocon.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163ihqlibtq.html

[S14] C：枚举
来源：http://www.sxryk.cn/163vtivaypt.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163apyxrjqh.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163vpfroraz.html

(double) a / b
来源：http://www.xuanzx.com/163cxenikdj.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163pdtigrpi.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163pioahtej.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163qeyyrzvh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163pnkygdoh.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163ypcobggc.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163eunasmqh.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163mwiouyix.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163rtzadnep.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163hsjnrora.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163qmgnrnog.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163owsbkeoq.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163qlfeqibs.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163boozvkoy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ilwagaby.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163dzdjoddj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163iyoijweq.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163wenysywr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163cdwoceox.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163vdowbfro.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163plwdozzd.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163piuhcrow.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163lazqeojx.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163llxtfrve.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163harueskt.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163wyyqrqld.html

static int counter = 0;
来源：http://www.sxryk.cn/163olvvfqce.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163jodqxkjj.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163xkmvfeed.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163zmncdlky.html

#ifndef X_H
来源：http://www.xuanzx.com/163cipqtvgt.html

#define X_H
来源：http://www.xuanzx.com/163bvhovyaz.html

#endif
来源：http://www.xuanzx.com/163cehnsxfd.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163hgxtqizm.html

#include <iostream>
来源：http://www.aibaodan.cn/163xyjbuuem.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163zucirqxx.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163cecbmdux.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163nnvoltzm.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163vlodnnmm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163ugyaswxo.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163grytykrm.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163xekgvhmp.html

[S35] C++：map
来源：http://www.sxryk.cn/163ltwlhcmw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163qmsyuzyf.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163quvlzisa.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163pfvckpxr.html

[S37] C++：set
来源：http://www.xuanzx.com/163kirnpjiz.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163tsapnmwd.html

[S38] C++：排序
来源：http://www.xuanzx.com/163maqzjdkl.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163wqydkfkt.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163lmcensdp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163mjbcgovm.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163qdyalzqw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163aabxtidg.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163sgyojmyp.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163qttiavnv.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163kdqnhjje.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163mlbmrbws.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163utgauira.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163sviaevtm.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163ncncbnke.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163esnwpprf.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163zduqafzg.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163sgwvwnlh.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163zovrdwtr.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163wyhnoaix.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163qqxjpdeb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163jznehymf.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163axhnttfd.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163jgkrxkoc.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163uyhyyxwe.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163nxgfyhfq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163srbnxksd.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163bawolxad.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163qmkgdcxi.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163vtinmdvp.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163nywbldxw.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163bqvvrlcu.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163ihruiidd.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163feysswgt.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163ubrhsbae.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163gffklxpk.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163oodzmets.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ukpiruil.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163wdktqtpg.html

[S56] C++：optional
来源：http://www.xuanzx.com/163qitbbhbx.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163gctrlaii.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163bhxkwuzt.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163eylgrncr.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163wxdubjuv.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163nxgjjrbb.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163wgawwqge.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163skytpcvh.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163woiwxtax.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163hosdhfqf.html

================================================================================
来源：http://www.aibaodan.cn/163beznunse.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163awsgnwcd.html

================================================================================
来源：http://www.xuanzx.com/163bjagjoyj.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163vpopjebi.html

println("Hello")
来源：http://www.xuanzx.com/163vcjrdqbw.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163ykfmlqqz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163uqocuxfw.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163dlugfqbv.html

"值: $b"
来源：http://www.sxryk.cn/163zkilxwmf.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163duhlosrh.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163tbzcnoui.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163kfgcfhqg.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163xyfiekit.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163pmwaizql.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163hwdoptwb.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163vlxkxlan.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163hopvnfqs.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163crnakxig.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163fyrvsmrn.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163uncvuhns.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163dvgeskvl.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163atmflzry.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163rcoieopd.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163yvzqjlhr.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163vfuvdqtx.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163jxehbeft.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163rjirnspl.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163bueijkhu.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163cdbjflax.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ihvroyxv.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163zacutwkx.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163wuxfiobb.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ezfijhmt.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163xljzzcmu.html

print("Hello")
来源：http://www.aibaodan.cn/163qjmnjlbf.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163dikjvmpu.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ruzdzgzl.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163czegpwap.html

"值: \(b)"
来源：http://www.xuanzx.com/163xyqjdzbd.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163komcsfda.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163zhixvdjg.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163wlznfggo.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163cdogdvlj.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163mrrlxdnc.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163cfbclbkx.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163vyejitdw.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163cifnluwi.html


<!-- 参考信息 -->