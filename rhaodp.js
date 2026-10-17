外链999!wailian999！

readonly PI=3.14
来源：http://www.sxryk.cn/163bmgtjxet.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163pkqokpml.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163hqswpdrb.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163lzezceqp.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163txiywxmw.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163rumnmrtv.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163drxzcfyt.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163ihxaqovl.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163syanrpqu.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163lseizieq.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163xlxzgqna.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163gihbkydo.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163krglipap.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163hxmjxflz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163odzcsxdo.html

[R11] case 多分支
来源：http://www.sxryk.cn/163eybiduwh.html

case "$1" in
来源：http://www.sxryk.cn/163hatiptzk.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163czcwxztr.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163cpybjemo.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163uqtbseuj.html

esac
来源：http://www.aibaodan.cn/163vrvjgfoh.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163evoxgtqk.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163gnjiewwg.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163pgjlwqid.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163dtruspci.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163ssvnpgza.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163twzrmywy.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163bworvfop.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163dfjhybis.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163kqviadib.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163uxdgedat.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163mhtjnaoq.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163vbkcvhxj.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163alfygpwk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163tfgxxdtt.html

[R19] 数组长度
来源：http://www.xuanzx.com/163zfyxbkhx.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163wfnfssbh.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163nobkdllk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163zgyrbtmy.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163oyzzcdaw.html

echo "${#s}"
来源：http://www.aibaodan.cn/163yjbcjley.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163qmxlewtb.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163zehowjaf.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163fejmcspp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163pljlikgr.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163jgmeiswv.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ghwbmsat.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163bhzezebl.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163zpceussh.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163wbhcuuik.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163vqshnins.html

[R27] 算术展开
来源：http://www.sxryk.cn/163xeqyxvbg.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163sauvlqec.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163tcjlayfz.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163orcexprw.html

[R29] 定义函数
来源：http://www.xuanzx.com/163daaepacs.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163oqwyuurr.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163iwefpxbj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163nriegplo.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163yirufqle.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163ajyotkph.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163kabscmzj.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163amseoeyp.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163uwdxakhl.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163ikjxtlzn.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163zqdrhjos.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163phjcqrqd.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163eofnrzae.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163mvedzepk.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163lulbzjii.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163tvseinno.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163kuupakrh.html

files=$(ls -1)
来源：http://www.sxryk.cn/163qtmbgtqb.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163bdwvhrpf.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163mvgzdmsd.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163dyjcsfjf.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163wswebmlo.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163gyqjvgob.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163lbdjlqzm.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163oscjdzti.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163kmayojoa.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163rgkervcc.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163fypptcsi.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163pzfhwmzh.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163hvxrqwnl.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163qlaidebv.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163cachhewc.html

[R45] 批量删除
来源：http://www.sxryk.cn/163tyskeegm.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163tcwjfyft.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163jijqmvvc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163jtgrmzpp.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163lmjtvatq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163ujtqvdxm.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163pcorfiyi.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163mfyclthx.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163rttjpadx.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163uovjrdor.html

[R50] awk 求和
来源：http://www.sxryk.cn/163nhnyofcw.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163yhbquedz.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163lcqchzbs.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163wkocnras.html

[R52] 统计行数
来源：http://www.xuanzx.com/163irnqfoqo.html

wc -l a.txt
来源：http://www.xuanzx.com/163ubkycibo.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163tpctfmxu.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163vuznhfem.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163qlnhfqut.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163woishhlf.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163hkcyqaku.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163qmjakjbx.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163wmnzwuxi.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163orhvsjza.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163trqglgyu.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163eollsikv.html

[R58] 下载文件
来源：http://www.xuanzx.com/163bmdqacpd.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163stnhbgts.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163qaazzxwy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163loidafqd.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163vnfhsxwl.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163hjwojrvh.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163trgmhqls.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163bkrlerss.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163dmxoqyxy.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163btgiscmv.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163pzxvxvzj.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163bqgmoeyh.html

[R64] 结束进程
来源：http://www.xuanzx.com/163fbqrptuh.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163fzgyqheu.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163exrfbqjl.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163pofimnht.html

[R66] 定时任务
来源：http://www.xuanzx.com/163zbxevgrk.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163bxitnotq.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163ygqjewtz.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163wjogntfo.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163hbqhcbsa.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163fnoobmej.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163zxpoxuks.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163rgubirpc.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163qtgvbowa.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163gdnoqczm.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163chcehinw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163nrlpxldm.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ffwzufmy.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163xaodnecp.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163izvlzgbi.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163otgrhump.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ljvddqzp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163jvglfoku.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163tebuumua.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163yaqtokdb.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163dubsxhif.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163iuorxdgh.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163fdhfbsvv.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163twrvjzta.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163wdfdlfrx.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163hyxbjjxo.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163mnmaeemt.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163xojyykbf.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163srqrirti.html

time ./run.sh
来源：http://www.xuanzx.com/163nvlxxyvr.html

================================================================================
来源：http://www.sxryk.cn/163rtooelrl.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163pdnjpcch.html

================================================================================
来源：http://www.xuanzx.com/163elnbqkru.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163iyfzvjeo.html

#include <stdio.h>
来源：http://www.sxryk.cn/163uhkzxvoq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163qsknqztw.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163gyzlrxsc.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163pfjophdo.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163gtarjzjd.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163iwvliewu.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163vanxhwur.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163lvkgafvi.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163hzwrybym.html

strlen(s)
来源：http://www.sxryk.cn/163upegogbd.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163kuabdgfj.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163afmecpvc.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163glqbrmxm.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163idwmzroz.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163lolxpkxo.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163xxotvxpn.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163yzmexpdn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163bjrwrcdg.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163loqwwldq.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163bymbsbmn.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163zlpmjuut.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163etygfxli.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163evjjxpny.html

fclose(f);
来源：http://www.aibaodan.cn/163xddlougd.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163odbrnnst.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163kbxzyslq.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163wslxowiv.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163alcqtfft.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163swwospjf.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163zjczubyu.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163cilytvlk.html

(double) a / b
来源：http://www.sxryk.cn/163gflalyds.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163dphhpakj.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163pgvehflp.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163cdsusaee.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163kfoxdukq.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163nwqpehoa.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163idtqwlxe.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163hkodbtob.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163spkrwqsj.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ifmjhjcd.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163poegutwh.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163kluplqzi.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163tpsdejku.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163qgnemptr.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163uiffbncz.html

[S23] C：随机数
来源：http://www.sxryk.cn/163srugpcai.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163cvipzqqr.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163bmuksbkp.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163fxjhpppo.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163vznxqrzn.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163lsypewij.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163qgoksulo.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163aqapukgs.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163mpvxmskg.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163tkopflls.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163aapebxdv.html

static int counter = 0;
来源：http://www.aibaodan.cn/163yigadqib.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163fimperdt.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163irfcitop.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163ddpmkdie.html

#ifndef X_H
来源：http://www.sxryk.cn/163xmyfrovr.html

#define X_H
来源：http://www.aibaodan.cn/163guilscni.html

#endif
来源：http://www.aibaodan.cn/163zybejaut.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163zbbiccct.html

#include <iostream>
来源：http://www.sxryk.cn/163eskifmkt.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163bntzsrms.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163jpleqyht.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163ezltgzmd.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163ltfomtaz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163wnuppfcq.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163ffqavjpk.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163tgmtqkar.html

[S35] C++：map
来源：http://www.xuanzx.com/163weexozda.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163mrbhvxmm.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163uodoghmz.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163vngqtsra.html

[S37] C++：set
来源：http://www.sxryk.cn/163qfgxigsx.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163esxcqmci.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163cgcbxmgw.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163qdbszirk.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163dwyktgbu.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163bonshgee.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163nljizhbw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163wvgbrczp.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163oaxqnmgz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163qfhpzdxu.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163gjazekzp.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163yhfdxtdt.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163auvyfwyo.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163hgkxtdmy.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163hkmmgisr.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ridpujor.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163obggmozv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ttjfobdh.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163xlfnrdgs.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163eyearkdm.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163fcmoqhru.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163sriwnywv.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163mnjybfrn.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163qfbsbngl.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163qevegltu.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163zworelri.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163rbeiceen.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163icdslkwo.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163lxiprwbn.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163rqiihoqv.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163yjfubmtj.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163jrrsxxqd.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163dsqetqsi.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163cuggcukv.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163kxgywdky.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163msnibksw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163ifjgdskp.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163kxndmred.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163rrbejpvg.html

[S56] C++：optional
来源：http://www.xuanzx.com/163tdrcmfrk.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163cudzzbnq.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163bqftpfav.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163kdgijyrl.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163pkyyaejx.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163agnyylxk.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163rnpetctr.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163gwzcivfo.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163znnxxcmy.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163sctrnjys.html

================================================================================
来源：http://www.xuanzx.com/163ifyjmbmn.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163gahuwvpz.html

================================================================================
来源：http://www.sxryk.cn/163npxtoymj.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163tmhsgpti.html

println("Hello")
来源：http://www.aibaodan.cn/163vzzpzbdr.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163dlqozrph.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163yoaurlxv.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163zylisija.html

"值: $b"
来源：http://www.xuanzx.com/163vaosqcks.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163mhwwsebd.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163fggdcjyt.html


<!-- 参考信息 -->