外链999!wailian999！

set -euo pipefail
来源：http://www.sxryk.cn/163qkqapemn.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163pdkpbpxv.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163dncfdxtx.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163pcshtdsz.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ffpbuwgx.html

[R04] 位置参数
来源：http://www.xuanzx.com/163okekmqzn.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163crymkeal.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163ztabaqyn.html

name="${1:-default}"
来源：http://www.xuanzx.com/163tlcqqvch.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163bjoozhqd.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163uciphmsq.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163ecdyssbh.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163oftooaqz.html

[R08] 数值比较
来源：http://www.xuanzx.com/163hisblbby.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163tvomjllc.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163wwafiwqk.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163qruashwv.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163sljmjvse.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163yiopvurw.html

[R11] case 多分支
来源：http://www.xuanzx.com/163dayicatx.html

case "$1" in
来源：http://www.xuanzx.com/163lwalqgsm.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163isocgpeq.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163bjsbfdbx.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163zvixhrpe.html

esac
来源：http://www.xuanzx.com/163cltwvdvx.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163ghmkdjso.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163zceouiee.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163mnkcwabr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163gychzsdu.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163fkpspemn.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163mnbroknf.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163fdqgyjeq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163qkgdoflh.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163advqhbvk.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163zdyyrszm.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163mnpzjnxv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163nugcjwcw.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163xcmurmke.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163vtpjjruo.html

[R19] 数组长度
来源：http://www.sxryk.cn/163fpcrwnrx.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163weqaoaag.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163scwvbyaa.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163fggmxuoj.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163hwaitowx.html

echo "${#s}"
来源：http://www.xuanzx.com/163zngjdtts.html

[R22] 截取子串
来源：http://www.xuanzx.com/163kpalczwr.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163toexmjse.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163mueekjpc.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163sdaohnyb.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163ydsyxgbw.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163tbbwqewf.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163repzflba.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163gmefxxbm.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163fzilphwn.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163gitqqwyb.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163rdfrmrob.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163jixcrclp.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163mzhaforr.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163mdharhaw.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163wmnmyfpt.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163umsrjpin.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163jvrcuqoz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163dozvhtmu.html

[R31] 局部变量
来源：http://www.xuanzx.com/163mttqfoeo.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163rjptsaax.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163efmaxcek.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163mwmivdst.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163fvpluver.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163zlmmhhcl.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163ufyzxazv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163fvcirkip.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163cpyxmehe.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163hkbhyptm.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163wuxwshbv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163uclyswbl.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163qlstiskh.html

files=$(ls -1)
来源：http://www.sxryk.cn/163tpirlnvs.html

[R38] 管道串联
来源：http://www.xuanzx.com/163gumbaqpc.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163kjwoygch.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163vzgmcspa.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163vxscazea.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163vyjalhcp.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163xjmdpwzq.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163trmmoaub.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163yyfcytlu.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163eycpnvbw.html

wc -l < a.txt
来源：http://www.sxryk.cn/163fqcoxgee.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163dfepraqw.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163tfmxpuaf.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163dycfeejy.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163jslumgwf.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163osrfkvnj.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163dvawgofb.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163yjwequpk.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163sgvxixvo.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163vlfyuauq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163zihfjqeu.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163wrchucia.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163zzwkdopk.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163alypatnb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ewvhzivt.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163opfyzsql.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163wzceecft.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163uhzgllop.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163wrkjchex.html

[R52] 统计行数
来源：http://www.xuanzx.com/163saxmyjwc.html

wc -l a.txt
来源：http://www.sxryk.cn/163fiyltjuq.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163lngkcpnh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163kixwjtby.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163jcegntjo.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163jrpgkbpw.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163xznjpqnk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163wmiizuvo.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163sodprgxe.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163dsosmnrw.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163vtwssdjb.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163cjohnlrw.html

[R58] 下载文件
来源：http://www.sxryk.cn/163sbiibuna.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163xhsgujbo.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163gmuydcgu.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163ayzcewiu.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ykfypwex.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163swixfshl.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163pekzhssh.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163jobxopcw.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163tzasnbrz.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163wgrmenvu.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163lvfpxgvs.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163lmaczzjr.html

[R64] 结束进程
来源：http://www.xuanzx.com/163emqbrdup.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163uhabuwza.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163hudiismt.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163qxxpmtdg.html

[R66] 定时任务
来源：http://www.xuanzx.com/163xwtefycs.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163knkhtmyc.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163oninsqng.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163wibideac.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163eqrqviiy.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163nriaqnil.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163yjtkyzfe.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163ewzvnbnk.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163osabydtq.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163jvaycjcv.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163aloxxbyz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163sytbjbyt.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163dzplldnu.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163rkvoahxt.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163ghtnloga.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163bevfitfl.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163wldhyfdj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163sezblbrq.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163vjenorfd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163pegbjdvj.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163vwjuvljl.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163xwwmpvpx.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163xpnkqtlv.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163eweqiwja.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163leugjyjf.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163gbslyqdn.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163wsbsoguj.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163kfxtqbyf.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163lbwukpqu.html

time ./run.sh
来源：http://www.sxryk.cn/163cwmkonmp.html

================================================================================
来源：http://www.sxryk.cn/163hsxwxgzl.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163tfplklmy.html

================================================================================
来源：http://www.xuanzx.com/163opxfcbub.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ekrbcfet.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163irxefvmb.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163anxewmtf.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163ixcgbyxm.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163jgjaakwv.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163qbchzddm.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163reswponm.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163bfevvhoz.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163vnkabnru.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ejlvvecu.html

strlen(s)
来源：http://www.xuanzx.com/163idwegvlq.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163faqkracn.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163uvjbzfaw.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163ncpiynta.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163mcpdodcz.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163wddpxdnb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163iuskrytt.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163hsyeopyk.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163knuordyk.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163aqbvmazx.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163mooybdzt.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163avhngffg.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163eehrtxrl.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163vsklnqip.html

fclose(f);
来源：http://www.sxryk.cn/163qlvuxkzq.html

[S12] C：写文件
来源：http://www.sxryk.cn/163fzswwfwq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163xcenspzd.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163vrimnlec.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ipltytgb.html

[S14] C：枚举
来源：http://www.xuanzx.com/163zdwmzevz.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163jgcauiuk.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163uzsfsuvi.html

(double) a / b
来源：http://www.aibaodan.cn/163kqdupnmu.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163zokzuwzg.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163goswdpao.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163fyqniwnm.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163pbdlodvx.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163bqaewzsu.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ajmypcai.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163uakoapci.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163svevawrk.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163jcdklggj.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163tvqompmx.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163bqxiofqf.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163uwizpttu.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163wyfismtf.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163iiibxzkh.html

[S23] C：随机数
来源：http://www.sxryk.cn/163qrhtrdhe.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163wzyxkzmc.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163odxyuout.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163cqhskfin.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163audlimkh.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163kblyrydo.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163rlpmdxgc.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163kqbaawij.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163dszuwhgx.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163stgbcena.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163fkjibyio.html

static int counter = 0;
来源：http://www.aibaodan.cn/163gsflncur.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163kngcdjps.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163cltherwe.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ptmnptcj.html

#ifndef X_H
来源：http://www.aibaodan.cn/163zifwyamn.html

#define X_H
来源：http://www.aibaodan.cn/163rpgucztz.html

#endif
来源：http://www.sxryk.cn/163zqzkgkxj.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163phfsdcjh.html

#include <iostream>
来源：http://www.aibaodan.cn/163hhblfjfv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163gfudwdjc.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163mcpbshjj.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163zetcqori.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ixtrkzyr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163dqopozwu.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163yutgxtdi.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163wjobcrpx.html

[S35] C++：map
来源：http://www.sxryk.cn/163gzwwxfjl.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ngqzjxqh.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163ccmwqfeh.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163cpqxyyrf.html

[S37] C++：set
来源：http://www.aibaodan.cn/163bnxcqzbb.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163alsmgsyc.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163wmztgrvu.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163xbviyynq.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163esjhzxpd.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163krjpjrfv.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163uxnfxwtl.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163dremnhhg.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163bejugoxk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163xxmcvxch.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163xkmljoco.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163nahojccl.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163vatxnund.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163pjfbdxdo.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163pcjknctm.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163hvfqyqso.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163sgicrmri.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163qewnxtfs.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163wpodxfcv.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163kxpbhocr.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163zjglypij.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163mpsgssym.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163lzffsgad.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163txbeosib.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163wyuaotit.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163dhbjcnlk.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163whsyzwcv.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163eimwrvam.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163vxvbkbnl.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163smxucfoe.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163agrigsyk.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163jkfswrzu.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163ufvxgwoe.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163zrgmamrv.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163gmavbtxh.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163twbobmzx.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163owrqcbyl.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163hlxmbiug.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163bqtknrsv.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163zoorzwpd.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163njwbikad.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163vjrbijnz.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163sqsfeiiy.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ztvfkhcf.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163islrxuje.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163udjrpmif.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163rlkivywa.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163dedoqjum.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163zfuwwecb.html

================================================================================
来源：http://www.sxryk.cn/163watzcazj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163wsnrshql.html

================================================================================
来源：http://www.sxryk.cn/163pijitbex.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163mgtoqszw.html

println("Hello")
来源：http://www.xuanzx.com/163gopletci.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163rjelpkbx.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163kignxmsq.html


<!-- 参考信息 -->