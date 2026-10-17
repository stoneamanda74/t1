外链999!wailian999！

R. Bash 专题
来源：http://www.sxryk.cn/163nwufoshf.html

================================================================================
来源：http://www.xuanzx.com/163wxxsewcn.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163suzvzhss.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163yxjnapmn.html

set -euo pipefail
来源：http://www.sxryk.cn/163lfbzfbrc.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163mofdoyqw.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163eoidhlqq.html

[R03] 只读变量
来源：http://www.xuanzx.com/163gsnamhbs.html

readonly PI=3.14
来源：http://www.xuanzx.com/163imzlevkf.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163aywcsahl.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163lkhlybyx.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163hkgvpjtn.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163qtpdmimy.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163qszjkymw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163vuhgnskr.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163hlvjgqxp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163zygwmzft.html

[R08] 数值比较
来源：http://www.xuanzx.com/163xubvyyab.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163iirzkygk.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163xpffaytj.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163cqaybyxy.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163dnekszjz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163kkvovmhj.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163vddosajo.html

case "$1" in
来源：http://www.sxryk.cn/163nbwhymva.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163ozsmjfyd.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163mzajlfli.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163veexcuxz.html

esac
来源：http://www.xuanzx.com/163vigvgmyi.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163bncwhzdn.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163oajqtqrh.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163fvziesno.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163bojapbwq.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163kcclvcth.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163afomziod.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163ewtfekfj.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163prjifkzy.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163smhjylna.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163wsekacpc.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ecoarxpa.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163clmhunzh.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163wpyxerwn.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163gnktryef.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163ereiqfam.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163ukkxwcnq.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163hqhfdsnz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163svaxffuz.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163btwmrkuw.html

echo "${#s}"
来源：http://www.aibaodan.cn/163tgdepasa.html

[R22] 截取子串
来源：http://www.sxryk.cn/163dpbipbxd.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163ybdddkcg.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163ylvrdyhh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163natmzkwo.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163pvhkjssm.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163viifxzvn.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163omcvvund.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163cgyobova.html

[R26] 命令替换
来源：http://www.sxryk.cn/163exijoqes.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163bzbrspez.html

[R27] 算术展开
来源：http://www.sxryk.cn/163jlkkfnek.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163nnkbexug.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163duygqihs.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163laocxoio.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163hlhvhksj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163mfybjobb.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163wvxufrdi.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163spfsfxzs.html

[R31] 局部变量
来源：http://www.xuanzx.com/163gtdselrq.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163mmdakerx.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163lrgodums.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163rttlgswz.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163qcjgadfb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163ftueheti.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163mjzrhwlf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163msoqqknj.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163wkhpltvn.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163cbitgnwp.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ghddfymj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163bqdydmbp.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163mtqkgkji.html

files=$(ls -1)
来源：http://www.xuanzx.com/163zzavzmvy.html

[R38] 管道串联
来源：http://www.sxryk.cn/163zbgpwjfq.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ulbcsxgt.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163fhapbxfb.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163mvfhhopl.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163sjbqmqll.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163wkmxevyu.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163vkfkauxh.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163pgfefcwq.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163hfiobria.html

wc -l < a.txt
来源：http://www.sxryk.cn/163hmupuzwf.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163nnghjkmn.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ahzwmhck.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163zahaamjs.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163emcgvsgv.html

[R45] 批量删除
来源：http://www.sxryk.cn/163zpreospi.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163tpgnjjhg.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163hlijsval.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163tczzabpv.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163mazqjoke.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163desadqsi.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163jgrzotuq.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163trtokksm.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163muuaenli.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163kjwnfcwb.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163vncktetb.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163uhxodgeh.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163hxobkwpp.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163giitprfk.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163sfbmizql.html

wc -l a.txt
来源：http://www.xuanzx.com/163btkxeeuy.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163ajcucngc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163vkslljlx.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163wobdkwoq.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163zsrnbcmo.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163abczwuff.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163fljnvpzj.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163fmxpjcmi.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163prsmnuwr.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163xtbgjhyc.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163rxpwdcff.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163xhethymy.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163nzhviiwc.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163qshmixau.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163uxqaapfl.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163xweedzmm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163gfvcsqkt.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163arxnrlpg.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163zpwyylkb.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163tiuvujrt.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163ehxuihpu.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163zcytcbrv.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163vepywvtb.html

[R64] 结束进程
来源：http://www.xuanzx.com/163hfmdhiah.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163nfdmhyha.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163kvyhtqos.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163rzenjhpv.html

[R66] 定时任务
来源：http://www.sxryk.cn/163vgszrrys.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163mymmmqvs.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163apdjaevp.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163glvlzoqv.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ibrgugeo.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163jtatxsks.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163izadsikf.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163vgxfshel.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163sdhntigx.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163prxdnwph.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163rhzqxbiq.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163giedebmc.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163fhzsvicd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163utlgajxt.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163tvsywtuq.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163qbthefqu.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163ozsvcntc.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163rqjjhnxg.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163lrhasryp.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163belunkcv.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163khpdzsvc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163zdqxvasw.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163apddvguj.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163hlhpdbig.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163wcfzdfgg.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163jhwnzxgf.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163dybxmrci.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163zmunurpw.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163deyimgwx.html

time ./run.sh
来源：http://www.xuanzx.com/163iurzbujh.html

================================================================================
来源：http://www.aibaodan.cn/163rvznywxp.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163rpshafva.html

================================================================================
来源：http://www.xuanzx.com/163otstgdif.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163mkczigbe.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163zkueiyfs.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163udmlydub.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163fbwtxoky.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163rmleqgbf.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163glrerkvk.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163taucjpwu.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163tzyothot.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163qzsslfjs.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163vwchzjhk.html

strlen(s)
来源：http://www.aibaodan.cn/163vcxjucdm.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163gtfhmmxo.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163hcerljnu.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163idipubnb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163cmfwpfeg.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163qnendxua.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163nnugkuxv.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163jcnaywqa.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163xqwdkbat.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163orqlntuv.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163kfsgilhq.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163zxbxvscl.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163zzgigipc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163nusgclrs.html

fclose(f);
来源：http://www.xuanzx.com/163pvkuwzza.html

[S12] C：写文件
来源：http://www.sxryk.cn/163qbdssoup.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ccyavtap.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163bngitycc.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163iohlvbap.html

[S14] C：枚举
来源：http://www.sxryk.cn/163tdziczmk.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163bdfsgtnx.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163dkdozogc.html

(double) a / b
来源：http://www.sxryk.cn/163qhzktdga.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163zkxkuuxe.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163qhmwcapd.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163eebqsvbs.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163bbedkron.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163etkggohq.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163hjpwtxgr.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163tpzigdjw.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163sgxonuhl.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163kbcwxjdh.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163bdutjipl.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163khzeuanv.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163jzmzkkdy.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163sqrbdapd.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163lbliykuu.html

[S23] C：随机数
来源：http://www.sxryk.cn/163fcrnhdaq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163ouvnhixm.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163ucbqqiur.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163aawmhbhu.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163bbxpjztc.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163yvsjmtyk.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163udpjteef.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163vuoistad.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163nskfbhnn.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163dswfvfuy.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163xrwtskgh.html

static int counter = 0;
来源：http://www.xuanzx.com/163pbgvzchp.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163welwsxrc.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163kcqejmpm.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163likmeiqo.html

#ifndef X_H
来源：http://www.sxryk.cn/163xmtatgvv.html

#define X_H
来源：http://www.aibaodan.cn/163sqezmoyy.html

#endif
来源：http://www.aibaodan.cn/163hvmenduo.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163trcgbwlk.html

#include <iostream>
来源：http://www.sxryk.cn/163isxtagjx.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163jfnrstnx.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163xodxbest.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163jjtajbxw.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163cbynbzgf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163muhptwlo.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163gbhasmdf.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163eaeszqly.html

[S35] C++：map
来源：http://www.aibaodan.cn/163uedriioz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vfpxctbp.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163uzygxssa.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163cmdqwqxa.html

[S37] C++：set
来源：http://www.sxryk.cn/163bcvzbbwq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163nikvwvmp.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163tsowjokr.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163knhpgmqm.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163qagflwxm.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163lxyqxmce.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163clvxslrs.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163rzgkfhcz.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163wyhqxdsj.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163lguoscnh.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163egspjjgz.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163zdsjjoaj.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163rropykho.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163btsfzovb.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163emvruajs.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163rdoymowa.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163hkcudzrx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163madfsode.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163qsgzsqet.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163eueuybxe.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163cpwfyumb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163czquelxl.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163zhbuazvc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163qaumhtzy.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163uilnavis.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163bycjhqsx.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163xlefzplk.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163bcxeanfh.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163trwfvxbc.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ooogltpk.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163ydagctja.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163zaauqdwv.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163euwemoak.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163rkwwwmwm.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163bhbwcvki.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163oiagxsbx.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163uouwewuc.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163hxwdgazi.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163etyfuwmz.html

[S56] C++：optional
来源：http://www.sxryk.cn/163xnwblwvl.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163seyisybi.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163hdrwzrxg.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ywyiccct.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ukepcodb.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163idhaqpva.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163sfgdfmcw.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163rqmaoaps.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163jqdacspt.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163zffkofky.html

================================================================================
来源：http://www.sxryk.cn/163rodfyvnl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ntmvswdv.html

================================================================================
来源：http://www.sxryk.cn/163sndfavkl.html


<!-- 参考信息 -->