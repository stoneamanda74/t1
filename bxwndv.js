外链999!wailian999！

echo "${#s}"
来源：http://www.sxryk.cn/163fmbxmgjv.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163qbitncwv.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163uerkxddd.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163oncpllcj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163nnmjemfd.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163ngcjudlr.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163rcanduxp.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163bzlcqynz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163zwgyghpv.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163actvfwft.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163bpmxubcb.html

[R27] 算术展开
来源：http://www.sxryk.cn/163mzmltjjc.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163bcwemqsi.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163dqyjieai.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163wllzbkmt.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163rstflwao.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163pknyamwa.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163zrbgrdtz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163oqjdzipe.html

[R31] 局部变量
来源：http://www.xuanzx.com/163fovnkvfw.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163jkweenyy.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163nxrdzbtw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163eijkrdun.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163sbqazymk.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163fahvragb.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163xcmkydny.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163vbdiwpli.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163nxzbxavu.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163jzlmjjif.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163plmulhlc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163elypjlev.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163eokratfc.html

files=$(ls -1)
来源：http://www.sxryk.cn/163edsolmgx.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163wdjfwjmh.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163hrvtjenn.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163lxjfcivd.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163ftogqqgq.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163mwpchmwn.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163odogrdxe.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163jukefnbf.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163qgngctmw.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163qvywhdll.html

wc -l < a.txt
来源：http://www.xuanzx.com/163knqwlort.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163djtzzzrv.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163yjxpfkvd.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163eutdciqj.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163iqnaxlsq.html

[R45] 批量删除
来源：http://www.sxryk.cn/163eyrprhzv.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163mbeihcvh.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163gvavaerl.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163wbgkjmgq.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163xerfykew.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163qsirofso.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163lhkazbcw.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163lvynhppe.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163bnjjybbe.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163uefphjuc.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163lkwzlqko.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163flgqgnrg.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163iiauobqg.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163llnzwuyx.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163wagfrhaq.html

wc -l a.txt
来源：http://www.xuanzx.com/163vqlxyplu.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163ypbzcwvn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163figoileb.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163xjjvsidr.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163zwihipcv.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163vegfwlii.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163bgtwdgwk.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163colagint.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163hnetulau.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163fzkimrga.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163upmijcrn.html

[R58] 下载文件
来源：http://www.xuanzx.com/163fjkwgiul.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163yfzkhjma.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163gnxfzeym.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ldtdfvnd.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163nocqrxaf.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163oikoemdm.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ayjwnacz.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163qbfbccub.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163cvojvnyu.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163scbxcxhm.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163njyzkzkz.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163mkxxqeuq.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ckuusfir.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163qghtucux.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ydvzwdni.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163klhkkkfn.html

[R66] 定时任务
来源：http://www.xuanzx.com/163hgcrpqac.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163byhapfsi.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163eizmnjwz.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163odtvbxtf.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163eovdjzgt.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163qegmwecm.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163gkqpsrjh.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163fpbsvyjt.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163swlmggss.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163syyznvxp.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163pfzefngn.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ynfhbfph.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163tlqygttn.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163dsntoyrl.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163twflcwrk.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163bsmdruei.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163gejfhhzn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163xaelmwjd.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163rczedjcb.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163qgyvopnj.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163ivghhlaw.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163zlpfgtco.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ssufpynd.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163cahkzaxe.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163zpmkeuxs.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163uhgzswzv.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163ldlwmtzg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163gkpgucsg.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163fopskypf.html

time ./run.sh
来源：http://www.xuanzx.com/163jvndtbyq.html

================================================================================
来源：http://www.sxryk.cn/163rweuiuwp.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163sttggfnv.html

================================================================================
来源：http://www.sxryk.cn/163ryghdyvq.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163mgzwyaqs.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ovkchkmo.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163zfyvwpbp.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163hmcmjute.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163tdxiibkw.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163jgezsxrw.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163hznfgeez.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163bihxouvx.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163sauzfbrd.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163aizhxgdk.html

strlen(s)
来源：http://www.xuanzx.com/163rjbelwjw.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163raaprcmq.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163lxrdywqk.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163rfuteqag.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163kvbiypvy.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ipgpwgbu.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163wehapsbc.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ctthogil.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163akwtqhds.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163xykicgrp.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163qkffgynt.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163uocfvqph.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163gpdkdihq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163purbjdcx.html

fclose(f);
来源：http://www.xuanzx.com/163trfahmuh.html

[S12] C：写文件
来源：http://www.sxryk.cn/163yektwkgo.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163eygewheq.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163xhactrna.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163onyappqr.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163xyvdsegs.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163fyvcpjfo.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163nxrpdohk.html

(double) a / b
来源：http://www.aibaodan.cn/163tuljnkys.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163nfwwkyoa.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163fykjxlke.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163szxtslkf.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163iujnminw.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163glddimvs.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163evxhtrns.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163skoepjnk.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163eckkvcrz.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163zaifjdgx.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163nnyvtetn.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163szlkwego.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163dbcrbjhb.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163fmvvkset.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163nrghzuei.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163wdrrajdj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163yvttpoxq.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163mfgxircv.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163vfdhqema.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163qklxrdrn.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163vsyuwacv.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163dmrqxehs.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163tsthooue.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163wzpxayxn.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163gplnrigx.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163nmahfkai.html

static int counter = 0;
来源：http://www.aibaodan.cn/163dzopdhhv.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163uknpxbch.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163sfhjgirt.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163lccrphik.html

#ifndef X_H
来源：http://www.xuanzx.com/163fbadwpnn.html

#define X_H
来源：http://www.sxryk.cn/163eejasazf.html

#endif
来源：http://www.aibaodan.cn/163wumwvptz.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163frwvxcsj.html

#include <iostream>
来源：http://www.sxryk.cn/163ctmxtzsk.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163mqlhumgo.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163owialhqs.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163msgepxwq.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163elcizvpu.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163zlyfvsrs.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163tvngyxyp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163tpeknvva.html

[S35] C++：map
来源：http://www.xuanzx.com/163dufowhfa.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163fcmckzvn.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163jjbvofei.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163xtxddjip.html

[S37] C++：set
来源：http://www.sxryk.cn/163mdibhbvo.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163uuwysbsg.html

[S38] C++：排序
来源：http://www.xuanzx.com/163yrcontzf.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163vwjsfiwa.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163xeijvfxx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163kjaznpjt.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163wkovfxue.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163iypivnkm.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ojtdodxe.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ergangwz.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163gtvqtuqr.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163jleicdaf.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163jqnnbvzl.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163vvprapfe.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163wqienpav.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163wscqexnh.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163ktyivywq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163fgqdhcpf.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163pfndhxma.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163oirgvvpm.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163zyheonsv.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163rcekbqfg.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163wobdopqo.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ielblgyo.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163rwzczmqf.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163vqwcfwjr.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163wgahtjtx.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163jcpdagas.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163xoymigbh.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163yzlkbgki.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163nwemmuwm.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163gtvhktpc.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163lkvhqweh.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163yiheehvg.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163cvqbzhho.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163nmdkslbg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163nxlprolx.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163bmdmsmxe.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163elfetrhp.html

[S56] C++：optional
来源：http://www.xuanzx.com/163jqupqhzj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163bzssbphz.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163lqfpqcpm.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163jdwhihsx.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163xilaiemp.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163usmvclat.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163jxdkhsgl.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163npcdsczz.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163hsrrvtxt.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163kcsyinzm.html

================================================================================
来源：http://www.xuanzx.com/163vbreayji.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163kocwqojm.html

================================================================================
来源：http://www.aibaodan.cn/163lqiwliye.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163nvavmzjc.html

println("Hello")
来源：http://www.xuanzx.com/163nbpeobbf.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163hcmamqpa.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163tnkahzgd.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163whjvmfdt.html

"值: $b"
来源：http://www.sxryk.cn/163jkxfjqsy.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163pkoewthh.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163rohjdbqg.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163deddcmbx.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163lsljqfuz.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163lmvcgnpi.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163otvumygj.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163fyqwibuv.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163wlostjvn.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163comlipvt.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163iwcuxybf.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163shtnmlzh.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163mtucawgc.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163jbzixjom.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163fjoseosv.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163bhqulcji.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163xctnmawv.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163fqzvvtcc.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163qvmwuzpd.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163easwptms.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163vptdojae.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163nwlnvxjj.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163xldagodh.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163ckczntso.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163odsearen.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163kurrtimd.html

print("Hello")
来源：http://www.sxryk.cn/163hrnyauvs.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163ulwceqoi.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163jkenrzrt.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163dqlsysau.html

"值: \(b)"
来源：http://www.xuanzx.com/163dqnuorkz.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163yfsrcgbg.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163fnuqsixr.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163fmayegwz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163yaficznd.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163zwkgispc.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163bzmzmujh.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163wwxabxmi.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163yrydqucw.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163hfkiseie.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163xkaitgfc.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163cpnarinb.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163slmeisnt.html


<!-- 参考信息 -->