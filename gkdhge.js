外链999!wailian999！

set -euo pipefail
来源：http://www.aibaodan.cn/163emhkvyuw.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163wctvaeqr.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163dsflqccj.html

[R03] 只读变量
来源：http://www.sxryk.cn/163gnucvrxy.html

readonly PI=3.14
来源：http://www.sxryk.cn/163qmgprnso.html

[R04] 位置参数
来源：http://www.sxryk.cn/163gbxeyuny.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163wfpvjfde.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163yrfbkhrj.html

name="${1:-default}"
来源：http://www.xuanzx.com/163nwwqkfrb.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163hiafyuyh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163ktvfoozv.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163nmfpzxpi.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163stvqayok.html

[R08] 数值比较
来源：http://www.sxryk.cn/163drxjcnsm.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163hubngbwh.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163jnohaopl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163pextinva.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163ldaprzxz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163bsfdffjt.html

[R11] case 多分支
来源：http://www.xuanzx.com/163qeyfdvuf.html

case "$1" in
来源：http://www.aibaodan.cn/163upirpnag.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163lukcndno.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163zlueaoyf.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163djdzmbbw.html

esac
来源：http://www.xuanzx.com/163bovixgyx.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163egnxsswh.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163wyaoklhi.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163xyaonfsg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163blgqngkb.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163ipaxpflp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163ijvqcmqw.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163wedioiwj.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163xscnmzhz.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163ynybdpxo.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163whkmioeh.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163yolcnrxp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163auzhecxd.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163awnwygxe.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163awbhppwg.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163mfiblqmy.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163mdrxxzfj.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163wbmvutug.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163zcdvvmxh.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163mebknhzk.html

echo "${#s}"
来源：http://www.xuanzx.com/163rijvdsos.html

[R22] 截取子串
来源：http://www.xuanzx.com/163gkjjizkh.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163hladxwoh.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163pwrgvkqq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163fxyawgsr.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163jjmfwdro.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163sklgduiu.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163xuafyiwk.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163xtxzddnk.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163ithqifeo.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163mucoxcfy.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163rcyqweuo.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163crghsjko.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163kezqlddv.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163ewjivfdq.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163pwdulmdo.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163otyvvlyr.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163zupvbqhs.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163ndklgcqr.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163gtcapyxv.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163xvkakuli.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163vrfttyfy.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163iakzalnj.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163xaovsbem.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163rjshuxrs.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163ubyaxpas.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163jisotbas.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163vicvzfgy.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163zngxrhrs.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163glbvvysf.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163vurgnmbf.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163kswybivb.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163gljixwqe.html

[R38] 管道串联
来源：http://www.xuanzx.com/163vmojnuam.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163xyujoqxw.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163vcgyoikz.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163vjvpoxqi.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163pdizufgy.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ycagofff.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163sbrfwytg.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163enfsqocn.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163nsaqujsx.html

wc -l < a.txt
来源：http://www.xuanzx.com/163nufkuwsb.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163qfyujxat.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163covgkehh.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163lyggohnd.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163ugxkfzuc.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163tkxqxnpk.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163osxqcabd.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163xyjufjlr.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163rhlmdpnb.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163bqsnvogk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163yrmwtbfj.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163cnatlbfb.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163hwhlrgty.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163ipovccmo.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163rqmgfkbo.html

[R50] awk 求和
来源：http://www.sxryk.cn/163rmaewyyz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163dhfaiyzr.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163glqnmlih.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163txkbqsol.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163dvefacrc.html

wc -l a.txt
来源：http://www.sxryk.cn/163hugomgyu.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163gcejpnyy.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163trvztjre.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163junouvwg.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163kpwjlsgp.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163jtcntawp.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163urkwaouf.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163evaazsyk.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163byjrzwua.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163xhczwrcx.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163dbesjnpf.html

[R58] 下载文件
来源：http://www.sxryk.cn/163vkpqxxxf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ttlbldxz.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163wresyalh.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163fgdagoku.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163vlygginq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163vdtknuuy.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163wbsefhyd.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163pkjhddgn.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163qqvcbzvy.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163custljle.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163mejzyzqp.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163onsobanr.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163bfjftchx.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163iepjopgf.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163gxchrckj.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163tjoakhqf.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163szklilup.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163sorbeuev.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163wpfntsyq.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163dakkvrgz.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163wmwtqbmf.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163igrnkpwy.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163athdfzav.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163jmwghsss.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163uzoyjciu.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163pfjqwuyk.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163ysvoqwdx.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163sipdvuis.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163uxtyjvup.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163hwgqmofd.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163yttqosjv.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163bzouaqxp.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163pavbdusl.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163hprxnjao.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163cxnvfdek.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163qqkmnvzj.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163sabussod.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163vaargfyz.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163eikwqmoo.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163cvnazakk.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163jczpvlbl.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163rupruxrn.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163umlgcsbn.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163eiwpfsgf.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163oweisroe.html

time ./run.sh
来源：http://www.xuanzx.com/163jpeucedw.html

================================================================================
来源：http://www.sxryk.cn/163fmxjxynr.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163izmivtqu.html

================================================================================
来源：http://www.xuanzx.com/163mjqkweef.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163fanydzew.html

#include <stdio.h>
来源：http://www.sxryk.cn/163cgdkjwfk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163zqprqfbj.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163lmaikmuc.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163aovzbsab.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163pjmundiv.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163mcwfsbwe.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163iqjqyura.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ykizsjwt.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163ucpgwdld.html

strlen(s)
来源：http://www.aibaodan.cn/163zymxwewn.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163lsyyzghk.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163ajdpgjgt.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163gbknjity.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163vjatbtdz.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ldamdwaz.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163agmkcgik.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163bffutgls.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163uhgdludl.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ydqnjkow.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163fqofvaju.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163bebcoweq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163iynlcnpj.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163ulxctkxc.html

fclose(f);
来源：http://www.xuanzx.com/163jvsxvffm.html

[S12] C：写文件
来源：http://www.sxryk.cn/163zbqubnyo.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163cxiscnil.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163inexukvn.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163muuhcfnz.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163polbzbvz.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163xqojrqbs.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163uzrjxjwp.html

(double) a / b
来源：http://www.aibaodan.cn/163wthrciks.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163nsggmtfb.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163mxyislxd.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163zkjhztom.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163bfcxkstn.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163jiduuqse.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163bmuailtk.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163ehsdcefj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163xegghqdb.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163vnpfkpvs.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163jliyqowk.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163hheoxksv.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163fcfrgrvh.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163gjdjpbwt.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ffwidbpc.html

[S23] C：随机数
来源：http://www.sxryk.cn/163hwwckwjg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ezcwhkxz.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163wnzikvke.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163sggmmoit.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163pftvcvzd.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163lqlvmqsg.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163qdimcexg.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163qdsgmdlp.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163rbexgkry.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163qyvutfqg.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163lnxkootg.html

static int counter = 0;
来源：http://www.aibaodan.cn/163hclxzdii.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163kirjkmas.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163neqewgyt.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163mevbftku.html

#ifndef X_H
来源：http://www.aibaodan.cn/163tjtxvilh.html

#define X_H
来源：http://www.xuanzx.com/163xwottbfd.html

#endif
来源：http://www.sxryk.cn/163gdzebhvg.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163jkoyntbx.html

#include <iostream>
来源：http://www.xuanzx.com/163ibonoaft.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163mlnqqpme.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163ipyeciwv.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163cfgyyxbl.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163lipwntdm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163gzayfdwe.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163jtobcbsw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163omlslxma.html

[S35] C++：map
来源：http://www.aibaodan.cn/163lbqgzqxc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163nqetduog.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163puiustrj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163egvhdgyj.html

[S37] C++：set
来源：http://www.sxryk.cn/163fekamlzg.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163rylvpdax.html

[S38] C++：排序
来源：http://www.xuanzx.com/163pntntscb.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163qmbzdeeu.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163tbxqmotm.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ybdfujjo.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163pvkhswax.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163hauiujim.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163umyozdie.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163bnvqjkve.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163wkkonrqi.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163kiacvriw.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163ykzayady.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163lhxddeqt.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163knohbcvo.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163aetuzxww.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163andaumaj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163honmdeje.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163qlftsrok.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163fkfhfgva.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163utlxzxbo.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163qrmsrxyp.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163lfbipjjy.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163vmyvuwoj.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163lwnrlrad.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163txydsqxp.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163euzxzjsk.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163awuvenab.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163prydrptq.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163xxksrgkc.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163egnealtz.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ndlkctca.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163vqxfjwzb.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163pqyncvin.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163rfbobmrm.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163ekjxvnbi.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163qkeywgax.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163dbbzfphb.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163oqfzznzb.html

[S56] C++：optional
来源：http://www.sxryk.cn/163sprranaf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ptparujp.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163kzftnyzv.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163vzuywjdp.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163mrgbvrsa.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163hxjvlask.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163trebfgwa.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163vmnvguci.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163qkxywxao.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163bztrdrix.html

================================================================================
来源：http://www.xuanzx.com/163mxhcvdhd.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163gvzmppac.html

================================================================================
来源：http://www.xuanzx.com/163lpmfipyf.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163zohntygj.html

println("Hello")
来源：http://www.sxryk.cn/163mpuakxnz.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163gpzcbiqj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163sainxtuz.html


<!-- 参考信息 -->