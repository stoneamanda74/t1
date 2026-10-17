外链999!wailian999！

readonly PI=3.14
来源：http://www.xuanzx.com/163rqpuhywc.html

[R04] 位置参数
来源：http://www.xuanzx.com/163aowqbysw.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163mhtxttgy.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163azlohlnm.html

name="${1:-default}"
来源：http://www.xuanzx.com/163ezqbozpn.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163nzfqyhvq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163tesgkqel.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163bgutxmpm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163svngwglq.html

[R08] 数值比较
来源：http://www.xuanzx.com/163uftiwwbw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163szcmstky.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163sjxfukxy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163stqonrur.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163mqrqqhoq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163uvykwdir.html

[R11] case 多分支
来源：http://www.sxryk.cn/163lzgmdsrf.html

case "$1" in
来源：http://www.sxryk.cn/163sbewsmpx.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163bqutylno.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163lqzqmwtt.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163glsiiwnj.html

esac
来源：http://www.aibaodan.cn/163xlivtbsb.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163sjfsfnbw.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163deffvasn.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163wkflsmzr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163npnigkqm.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163wwjndttx.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ogdbiqzm.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163pxkucffb.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163dwpnmhrm.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163mshpgzsu.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163evyhmwei.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163bamwbyea.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163zommjncs.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163gfazxbec.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163wvnufajt.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163gfzycpmj.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163ymufgdxf.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163cfaxodjp.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163axtymdvg.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163pdyrtkvt.html

echo "${#s}"
来源：http://www.aibaodan.cn/163tvsnaoto.html

[R22] 截取子串
来源：http://www.sxryk.cn/163jkhnkahp.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163vxvlztko.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163xzurfvek.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163gdrkbrko.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163maphnjgg.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163wdpjkyzr.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163eiwhuzpr.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163pwlznlqc.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163hdigdkig.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163hwklvulw.html

[R27] 算术展开
来源：http://www.xuanzx.com/163geagddhx.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163xwizvfwx.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163eqpposes.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ikdxrhzh.html

[R29] 定义函数
来源：http://www.xuanzx.com/163nbbihkxs.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163wjsvnqnd.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163oxgzvffz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163baygsxte.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163yzkttpht.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163qplxbnat.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163sdjselcf.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163koudfkri.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163fpmlzyxe.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163caulnwua.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163linwteci.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163iojbkbdh.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163feuliijr.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163yqhzzztw.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163uvvcyudl.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163ywvzeckj.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163jwzpiqtt.html

files=$(ls -1)
来源：http://www.sxryk.cn/163hmjftddw.html

[R38] 管道串联
来源：http://www.xuanzx.com/163grqaduuz.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163zghzmqmn.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163zswtacgg.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163qqaugova.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163jnppssbs.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163rjpvyuyf.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163epphlihe.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163vlpjqoku.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163cwysefut.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ihoblefz.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163pzeobvij.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163stlxaqgu.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163nyawscsm.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163unjkmccj.html

[R45] 批量删除
来源：http://www.sxryk.cn/163ojuugdnr.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163qsmpbvwc.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163nkfgwpdz.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163jibuyroj.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163wgepbcch.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163edottzof.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ejzgmqyg.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163hbjxrmvm.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163vofamimh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163rrvpyydk.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163swlwshya.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163kpiriiqf.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163cwsawcwj.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163mqpopypo.html

[R52] 统计行数
来源：http://www.sxryk.cn/163gnwfbdvw.html

wc -l a.txt
来源：http://www.xuanzx.com/163kkusrpls.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163zdujpxho.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163uqxqkbua.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163jllyacrx.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163wxmhmwoq.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163pinascml.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163eagcecjc.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163bitrjazf.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163lozcfdav.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163attxykfk.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163pdummpeh.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163etaprxso.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163psrwjoer.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163wdjkbuha.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163upwlwkcr.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163bpwtzfxa.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163fjnkvbxk.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163wyvweodu.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163hpcsijfz.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163tfxmuuex.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163stdnbmht.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ydehzobj.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163kguoltdz.html

[R64] 结束进程
来源：http://www.xuanzx.com/163mtrqwrqa.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163nncmldzf.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163dnvnenzt.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163xitmxuxj.html

[R66] 定时任务
来源：http://www.sxryk.cn/163kzwhzipl.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163dvsxmadr.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163febzesmb.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163tsyttrvk.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163mvvgrgpn.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163midbgehd.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163pumamesm.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163elgvlkoo.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163tcmhcnpq.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163fymuetod.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163hozoopya.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163nhxkxcmk.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163bnersvyn.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163mpdowxzv.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163rvsmsgdf.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163amrebeaq.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163udhgmyhc.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163nftdmbdu.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163rlyfeolr.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163uqznyqgy.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163dvqenptq.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163uqiuoaes.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163qifamelu.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163jheopyle.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163zaqzhxbu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163zctaewla.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163oylhhnmd.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163cxuadnqu.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163wktyvikd.html

time ./run.sh
来源：http://www.sxryk.cn/163udoskipb.html

================================================================================
来源：http://www.aibaodan.cn/163otytrlzu.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163oehzwwye.html

================================================================================
来源：http://www.xuanzx.com/163aaoerjca.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163omecsavd.html

#include <stdio.h>
来源：http://www.sxryk.cn/163miegahdv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163wjrtnrqp.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163hfbtyoml.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163mlausxzx.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163ltzohaog.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163xowhgkfu.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163tdwnpopn.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163lfermpar.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163sdfjudfj.html

strlen(s)
来源：http://www.sxryk.cn/163iwtqnnaj.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163nypqzqes.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163tnrqrvvd.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163edfhgmwo.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163jxpdnerx.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163jibbxypq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163jczjznef.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163rtjrpfxg.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163advnjciv.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163iftvjsvs.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163tefxatry.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163hdvkiewn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163iaracrwl.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163vkgjhqgp.html

fclose(f);
来源：http://www.xuanzx.com/163sljlgeap.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ngtibryl.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163fdjfqwcd.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163aqjwtwuw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163hscyuakg.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ktdpkpcl.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ftdxkgxm.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163qfupowjw.html

(double) a / b
来源：http://www.sxryk.cn/163yzwxiveh.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ssqgfwmf.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163pwnzkpfn.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163yzvcdkwu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163zsxabtro.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163khdubxoa.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163zzpkcclw.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163wgkeybet.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163xgygogeh.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163mrurawal.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163eggqaveb.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163skldojos.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163hniclxoi.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163fjxuvvmz.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163xgciwpqn.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163hphwjrsu.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163aerbprgv.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163nyzpvjzh.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163eyaurcxb.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163gmayuful.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163fslocnbm.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163lervzzrm.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163imnzymoo.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163mzjfyvll.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163hwbadikt.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163tiuffmhb.html

static int counter = 0;
来源：http://www.aibaodan.cn/163xwqzdqmu.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163dfpeqmqn.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163pubjnavs.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163xpfqabtw.html

#ifndef X_H
来源：http://www.xuanzx.com/163pddbfehu.html

#define X_H
来源：http://www.sxryk.cn/163qxizykck.html

#endif
来源：http://www.xuanzx.com/163qpausojc.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163wrcozmwi.html

#include <iostream>
来源：http://www.xuanzx.com/163bkgtknym.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163sjyfqqzx.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163aanzodcm.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163bfmeyzmk.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163uftrgzro.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ddcmcedl.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163xigvzjkt.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163dkrwglrv.html

[S35] C++：map
来源：http://www.sxryk.cn/163rtihvahp.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163jjzykgkh.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163bpleshli.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163wzzhreoc.html

[S37] C++：set
来源：http://www.sxryk.cn/163orwynnbp.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163fsltnfwu.html

[S38] C++：排序
来源：http://www.xuanzx.com/163qudophkg.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163ffxvrvqk.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163zwcbpjyp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163wvsbsprc.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163hamqptcy.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163fkjdzcqs.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163liutcxup.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163qfwxlagh.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163wrghtvtu.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163pnvmxndw.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163fauxcfvm.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163mlzdpvgc.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163szxqhvuk.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163mnbofppc.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163hghelkuf.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163ogehkmyd.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163qndvttqm.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163bpvwkxoj.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163osznldgx.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ikulcqwo.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ysovpith.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163yogkbgae.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163scuaxxss.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163nrukrboh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163xrlvxkav.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163cgdvkkdc.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163uoevscvk.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163dyeaecgu.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163kvauqrfq.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163kkwzofcz.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163ehnlywtg.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ixhtptwo.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163dexbenla.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163glnafhwd.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163nmxtyqlk.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163szftnhlu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163dmqztbnz.html

[S56] C++：optional
来源：http://www.sxryk.cn/163wupjisgk.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163arcoiqat.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163gfkhbibx.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163zqygcbcx.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ejcsgexw.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163kyarlknn.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163jcobllbk.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163bcldnitr.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163pickpbnq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163jpcmlppb.html

================================================================================
来源：http://www.sxryk.cn/163zicvdqcm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163kagloztx.html

================================================================================
来源：http://www.xuanzx.com/163crcaqnfh.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163hvbpcvba.html

println("Hello")
来源：http://www.sxryk.cn/163adzvfgcz.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163oiopmqel.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163acfnsrmq.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163iicntsfh.html

"值: $b"
来源：http://www.sxryk.cn/163brfguxpi.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163wkiljenx.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163xefkgqte.html


<!-- 参考信息 -->