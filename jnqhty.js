外链999!wailian999！

case "$1" in
来源：http://www.xuanzx.com/163ncdwydnt.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163besjllco.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163blgafqdl.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163ugygemyq.html

esac
来源：http://www.sxryk.cn/163ywadrqky.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163qvoeceji.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163seciqacx.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163jbgsvfrn.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163tsjswboq.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163dctnqzjl.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163xgielxxa.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163rbiqazdf.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163ttrdpemo.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163zgkmzrhe.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163xxkznsto.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163pfvdltnc.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163orxjexbc.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163ahxwxtzk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163nswrylxk.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ictdifku.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163kicoxfrj.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163jtdzfefh.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163xzqldcbc.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163ongwoqyw.html

echo "${#s}"
来源：http://www.aibaodan.cn/163emjkbqwe.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163fiavkasf.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163egaouwcu.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163uixdomjn.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163wmatxyvu.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163sscjzlym.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163vcbumxda.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163mhibekwu.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163gdappkez.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163mirpcann.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163qumuivid.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163bdmcgnoi.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ziahyscc.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163btujycbt.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163opcasgnf.html

[R29] 定义函数
来源：http://www.xuanzx.com/163tsovfxfq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163hcxthmsb.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163xatzqthq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163ldfryjxi.html

[R31] 局部变量
来源：http://www.xuanzx.com/163cmabjsct.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163ackjqxlt.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163gflbuuhd.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163xotrulxx.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163dzrkxwvm.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163zolprzet.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163bsbziqvx.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163mubqenjm.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163qnhmwybf.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163uubibwhl.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163xbkbiahs.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163pwzembpf.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ugrhsngi.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163subbgidq.html

[R38] 管道串联
来源：http://www.xuanzx.com/163qhhzflqx.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163pagxrsta.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163otkxvyeo.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163xxhpovbc.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163ptpwxdba.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163obxlhjuu.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163yzguqxrp.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163gvheqshc.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163aigoefhf.html

wc -l < a.txt
来源：http://www.xuanzx.com/163kuzjdxov.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163pbowikhk.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163lcobwhnc.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163aqznqvvm.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163dlonctxz.html

[R45] 批量删除
来源：http://www.xuanzx.com/163vhhcqiqb.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163goujlazc.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163dvwdwqrg.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163wctugrbc.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163kzaeirre.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163nicbsleb.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163awpcusee.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163bnebjzsp.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163swwftdqm.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163oshjbqvp.html

[R50] awk 求和
来源：http://www.xuanzx.com/163knoyfwuc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163tknbcuwl.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163myqfwyvo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163tmvxyxxl.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163fnyeonfz.html

wc -l a.txt
来源：http://www.xuanzx.com/163atypocae.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163vnsjcqri.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163acgrtplk.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163hpdziubw.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163vcsoovng.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163khczlnxb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163kclcsqtf.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163dvcsuwgc.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163tjxrjwwq.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163tewnuvju.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163jzeaazeh.html

[R58] 下载文件
来源：http://www.sxryk.cn/163kytmbzub.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163bizkisaw.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163gnueglwg.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163bnnzimrl.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163sverxzhz.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163fozksjuq.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163yozbzbyv.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163pcwgmyuw.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163vxfumyzo.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163ekseckrh.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163bsbujdvd.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163azscpvqd.html

[R64] 结束进程
来源：http://www.xuanzx.com/163yyvttvhk.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163rmujfuvc.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163exioqdgh.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163jfkmsnld.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163gruileab.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163toyoxevj.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163gjztnnhi.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163kxagseaa.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163rtkyqlgd.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163iloiagwq.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163kpentvou.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163bbvvzhef.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163xldtyuoy.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163bhocigqu.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163vddauyab.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163eavfucya.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163hpxxwnsx.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163rqtnunwc.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163soqgoign.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163jbknhunw.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163qqugxifw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163awwxndim.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163mgdxudop.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163aornwqye.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ivyyhdko.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163bopmpmww.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163brsyzdvd.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163qpodljyv.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163jhyaymtr.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163souyzrrr.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163eipnwxld.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163kqpluzzx.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163veigqust.html

time ./run.sh
来源：http://www.sxryk.cn/163wybgvovi.html

================================================================================
来源：http://www.xuanzx.com/163czudoxvf.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163ioevkuzu.html

================================================================================
来源：http://www.xuanzx.com/163uhomctjz.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163unpgzogp.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163qzjdopgh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163lvusfbzy.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163skbriazx.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163jtykretf.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163qxifsmrj.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163nysccaiz.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163kbkifxop.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163rdaxmpfx.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163kibskuhf.html

strlen(s)
来源：http://www.aibaodan.cn/163adodhsft.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163zjlfrzue.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163mcxwhbsl.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163xwzinoey.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163dskvoeqp.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163tmqszysl.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163pxadngbz.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163lxirsqxv.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ugxxqitf.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163galfcacw.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163kiozqycj.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163zsqmofyu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163wmbweofd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163tsnvbkiz.html

fclose(f);
来源：http://www.sxryk.cn/163lkdheagv.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163kumbcfec.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163hddgasct.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163xkhegyzz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163mrnacchm.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163kgepolqt.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163vdpositl.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163fiuefcyy.html

(double) a / b
来源：http://www.sxryk.cn/163grnouoax.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163dhqpztnh.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163jqoswctc.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163pyhyfbwq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163jpqpgqcc.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163rzrjusbj.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163qlpdlbjg.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163gukwahls.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163bscbvkeq.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163bxlornqw.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163plnsfhhk.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163tveeugtw.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163sjtorlvz.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163mkayqmxo.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163mimcduqq.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163oiweqelf.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163pelebyml.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163ekzcmnfs.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163otzvelul.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163gmspwebr.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163rfihqjey.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163jsvrcvpi.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163zuufljsl.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163kdrsttds.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163hrvdyghs.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163cidllvjk.html

static int counter = 0;
来源：http://www.xuanzx.com/163yiipimpa.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163zataueub.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163vfamakdl.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163mmfhltfd.html

#ifndef X_H
来源：http://www.xuanzx.com/163nekdppsd.html

#define X_H
来源：http://www.sxryk.cn/163eydbnocy.html

#endif
来源：http://www.aibaodan.cn/163qpfimtiy.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163ycqrhgxc.html

#include <iostream>
来源：http://www.xuanzx.com/163slfwzqek.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163jnzysgaz.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163lomzgtkt.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163qojmeqyf.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163drpvogql.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163yznbrzoo.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163raehhjqk.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163sjzefflh.html

[S35] C++：map
来源：http://www.aibaodan.cn/163qbpwdsgc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163pnzlnbsr.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163gnnjkolh.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163rqyyrpzc.html

[S37] C++：set
来源：http://www.xuanzx.com/163zfdqgfyk.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163dkghzcwm.html

[S38] C++：排序
来源：http://www.xuanzx.com/163zpbvvetv.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163cuaktsqr.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163hvsrujek.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163rqcuwsoi.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163gpmgiklm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163pczjwayi.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163ybafdcor.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163hkpgkwxt.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163vsrrgjht.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163iowvulrr.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163phkaxunt.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163tybgsigg.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163fggaxpya.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163iapphkbi.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163empzjymx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163tcldbdzt.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163clsinlwb.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163heskmazj.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163tokkcksv.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163fknohccm.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163faqupral.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163evxwyjxz.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163jllszkpo.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163rpmycnrz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163rfoflkzm.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163mudzpsij.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163nhokatuy.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163bchtyoap.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163clplnlgm.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163slcwkkbi.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163mwuobqns.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163sqlgpmkx.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163ywohyehh.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163tpnmmnvj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163nrnbjmck.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163tnuccvcb.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163slaatxgm.html

[S56] C++：optional
来源：http://www.xuanzx.com/163rpycfmvy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163kzgleeyq.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163vthrakwy.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163nrsdpdyp.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163dgtmqqid.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ljgdtrtx.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163bmwigpzx.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163uqgdtmhm.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163rzwpcfac.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ycjemdiw.html

================================================================================
来源：http://www.sxryk.cn/163aofxqdbt.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163tdgshxmj.html

================================================================================
来源：http://www.aibaodan.cn/163tzgqwjgs.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163zvnbisjg.html

println("Hello")
来源：http://www.sxryk.cn/163yezijgdl.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163zumxybui.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163jkbtxszx.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163oteyrrcd.html

"值: $b"
来源：http://www.xuanzx.com/163atgzlnrf.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163bqtivdtf.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163dpnuipae.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163vfeyqrto.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163sowcnslc.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163tbwrzthj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163crmqptcj.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163ireuqsrh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163brkwejre.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163cvzlllxq.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163rxcqahto.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163bsjfxhuu.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163xfhrbsij.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163yvbeggdz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ynvfasfs.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163tmrrqfkj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163kkawgklv.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163xzkihpjj.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163vzxfwumk.html


<!-- 参考信息 -->