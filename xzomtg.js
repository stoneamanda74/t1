外链999!wailian999！

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163mtdbiofo.html

[R08] 数值比较
来源：http://www.sxryk.cn/163rrslxubv.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163lscwzxey.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163ffxmaocg.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163ukeeffym.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163aahqagib.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163rlbjzjnl.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163tplvgxtw.html

case "$1" in
来源：http://www.aibaodan.cn/163ibliwpre.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163xqicobyo.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163mlporvmm.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163gitstguz.html

esac
来源：http://www.sxryk.cn/163nmsupepv.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163jdkdqjnx.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163fzhzmlqm.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163mdpltizo.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163erejbmcs.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163kiyzjfzq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163aganekti.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163lvjpeoay.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163fvlylijj.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163tzkupnkz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163qidtgdxt.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163avgvlvwi.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163tpkcjybz.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163dpvfxkbz.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ddxvrwtw.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163hmqudesn.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163iervqbfq.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163nfwwfbki.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163zmdkdexp.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163isndpnud.html

echo "${#s}"
来源：http://www.sxryk.cn/163lxwjherm.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ncbmrquh.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163mdrjeoyw.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163yvwbmitc.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163lzblolpd.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163uvyweavf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163mnuverfm.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163oizxyjgj.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163unbqeier.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163trwgfjmt.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163pwlrhuyn.html

[R27] 算术展开
来源：http://www.sxryk.cn/163aehgsxft.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ciffinpa.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163ljgplnks.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163brygjmsz.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ndbvobmc.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163tjurimeb.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ouscxkex.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163oiyzneee.html

[R31] 局部变量
来源：http://www.xuanzx.com/163jmgilikk.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163nqtfwrbs.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163zcivhqfm.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163xagxhdei.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163csapeahl.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163drsogmjv.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163jvkchkmq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ksansybx.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163yemaulpn.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163djsdwhza.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163nggvyuvy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163wwywqhye.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163hkqkhaws.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163fqwuypoe.html

[R38] 管道串联
来源：http://www.sxryk.cn/163hvinuutz.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163guixltdy.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163egborspj.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163aqomwjyc.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163pmpdehzy.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163uuqtqdtn.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163txdnffsb.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163mcnowtye.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163mwdcmoac.html

wc -l < a.txt
来源：http://www.xuanzx.com/163rdszftqb.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163ojwbgzuj.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163zwwuduyy.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163uakadrfq.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163bstdidxf.html

[R45] 批量删除
来源：http://www.xuanzx.com/163zfhtgtgg.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163rsbgjynx.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163lcofzyez.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163dmmftxsv.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163gdcbvjdl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163mntgwoxa.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163xysysnfk.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163zxxzrqps.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163rwborixg.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ksuppmas.html

[R50] awk 求和
来源：http://www.sxryk.cn/163symdfubf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163reapnrxg.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163jrmppgtj.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163gpwpkagl.html

[R52] 统计行数
来源：http://www.xuanzx.com/163yzrgbhpi.html

wc -l a.txt
来源：http://www.aibaodan.cn/163xqdlfztg.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163ioncrgym.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163gnfeamhm.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163tknczyml.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163bxkleoap.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163rzivdgxo.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163nautemnd.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163sfycndeh.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163gqufctna.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163beymgznw.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163himdapho.html

[R58] 下载文件
来源：http://www.sxryk.cn/163fziidicn.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163oniyboum.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163wedccyqe.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163lzkqmjnm.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163rvuafqbl.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163kngmnvpl.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163udikohym.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163cdbysmfq.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163suwedjyn.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163xhngwtam.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163iqlrvpfp.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163hdccgtpv.html

[R64] 结束进程
来源：http://www.xuanzx.com/163rlkbxijx.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163jshvccha.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163srrzdhbv.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163nusdfnir.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163shzpuwgh.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163njfllhvp.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163dgolxzxw.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163lqbuxgsh.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163yaqdgiwc.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163capiwauu.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163trpqprcj.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163clkclexd.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163arrbayvm.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163jxpqycrp.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163wljuwmxs.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163wkppykzl.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163nprgaczm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163kswrpcfl.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163vwkpzenh.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163vwdzrkdx.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163icwxhtbb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163qqtxbnmg.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163eqorvpih.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163uhowiboe.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163lvrnkrui.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163atftdvvh.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163brcslycb.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163egrirxde.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163ybneccvb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163bctiqrnb.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163pbnxnllh.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163vnaurunr.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163oiymhbju.html

time ./run.sh
来源：http://www.sxryk.cn/163qfjuhowv.html

================================================================================
来源：http://www.xuanzx.com/163yputsage.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163sjfxoyzb.html

================================================================================
来源：http://www.xuanzx.com/163tqyvhjhw.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163idaisvad.html

#include <stdio.h>
来源：http://www.xuanzx.com/163lkwvbsbt.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163akehxkjd.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163mvysnjrv.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163nknxroim.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163fudkzsmj.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163kojavuim.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163pdopfvpc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163qfdgarxd.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163fggoexzl.html

strlen(s)
来源：http://www.aibaodan.cn/163rnpeuupm.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163ftmdttek.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ukzutetk.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163xvffeorp.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163wuyybgfi.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163wieugslm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163zhgowdru.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163qnudssua.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163vijaybna.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163hwhrbdnp.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163plzenfab.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163dqhrbwxo.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163slxtbvpt.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163bxhfjbms.html

fclose(f);
来源：http://www.sxryk.cn/163waiazymt.html

[S12] C：写文件
来源：http://www.xuanzx.com/163dlhfbvgk.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163jqvqliuc.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163yinbllos.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163bwqpqgcl.html

[S14] C：枚举
来源：http://www.sxryk.cn/163dcadrfig.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163xixncckm.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163jiiwnsmm.html

(double) a / b
来源：http://www.aibaodan.cn/163udgawbnb.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163aexjdgvj.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163rfrrieif.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163kpzsgafw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163cahpclsq.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163adjqhmly.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163hxsktllk.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163uvbqtgav.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163mtcgkugz.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163gjpctfvy.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163vqhsbafz.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163fsdgseab.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163uwbgelgn.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163ghfdyzvc.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163dpqztjqw.html

[S23] C：随机数
来源：http://www.sxryk.cn/163sceiirii.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163vjybqqnw.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163uavaxscc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163fdnoxdzv.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ghijbidh.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163hcywoyih.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163qgkfzetk.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163nbmfbkiv.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163wtscbuzk.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163csjcjwul.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ahhxbptd.html

static int counter = 0;
来源：http://www.aibaodan.cn/163uhlqvwmr.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163neswrufj.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163uudywoyv.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163dmjwfboq.html

#ifndef X_H
来源：http://www.aibaodan.cn/163yfuwvmay.html

#define X_H
来源：http://www.xuanzx.com/163dsnzbket.html

#endif
来源：http://www.xuanzx.com/163dwderadl.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163hifkmxrl.html

#include <iostream>
来源：http://www.xuanzx.com/163gptnixjm.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163eatlthfk.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ejesfuup.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163zfsxngyb.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ybteagvc.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163fklrvqft.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163hgcjbbmt.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163sbrzalab.html

[S35] C++：map
来源：http://www.xuanzx.com/163wkmpppxw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ohgojdcg.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163gpiethgh.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163lnvqjcpp.html

[S37] C++：set
来源：http://www.sxryk.cn/163qjemgkel.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163dsnscbvr.html

[S38] C++：排序
来源：http://www.sxryk.cn/163iupzwmdq.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163nocphpoq.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163qjqoblod.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163hyeqeaag.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163neypzoed.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163nhhrydnr.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163rnpolfxn.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163otdwqzpd.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163omyqiqaa.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163rgvkqsij.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163lrqkpgyq.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163vafzjqkj.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163vgctcrpo.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163projtdxo.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163kmmwxdau.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163izxckfzf.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163rzawjimz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163vllpcjyj.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163deqgfdip.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163zgozpvty.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163crcuuqxl.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163vjxgbbwp.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163lzkkosin.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163jitqqbgx.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ikebkdng.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163xobcvuia.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163asnepzmp.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163lgnvvduc.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163jwftpdkp.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163rylonwlg.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163pdobbcbv.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163bdvmbzcu.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163wejglcbx.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163qgyxulne.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163wjynwopo.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163pwoejcjy.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163ebmmvegn.html

[S56] C++：optional
来源：http://www.xuanzx.com/163jnjjbanm.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163exuqugix.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163kklvxwwr.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163pvqyyinq.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163nuiukivw.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163fknrolkl.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163sbehzgdo.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163uehqxbsc.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163afnmdben.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163kokqssfe.html

================================================================================
来源：http://www.xuanzx.com/163owxsfpof.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163gptgsiwq.html

================================================================================
来源：http://www.sxryk.cn/163nnqmjwju.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163vemsrjhy.html

println("Hello")
来源：http://www.xuanzx.com/163fsxxtvuk.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163kvbguqmt.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163rhcfdcac.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163weadylmv.html

"值: $b"
来源：http://www.xuanzx.com/163dubxfjnw.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163nyzhvlsu.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163wuvxddrs.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163mmuzymfs.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163dpasslrh.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163uyehshho.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163tavoirej.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163kojnbztr.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163mimfodez.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163qnhgsblp.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163gmmhbmxu.html


<!-- 参考信息 -->