外链999!wailian999！

name="${1:-default}"
来源：http://www.xuanzx.com/163udeggxbw.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163mviaevza.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ufdgiyvv.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163lotcnapw.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163tqrxxemp.html

[R08] 数值比较
来源：http://www.xuanzx.com/163wsifzdid.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163sacckmkx.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163rjsxjobu.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163mcmanfqs.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163lyxwsbsk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163rzvqnjer.html

[R11] case 多分支
来源：http://www.xuanzx.com/163pijjzgeg.html

case "$1" in
来源：http://www.sxryk.cn/163eunuabna.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163fdmlqwnr.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163mwkrlmzr.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163hphjzasq.html

esac
来源：http://www.xuanzx.com/163bkadvhng.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163jcsomnvp.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163tbvkicyw.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163btptaarm.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163hlnuqzzp.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163kkrpfgoq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ygkufgaf.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163jbggheqa.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163brrdvkvc.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163yjxtrzdi.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163klqcwqvi.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163ccucghbv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163wnamhogw.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163htgfxfga.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163qtxemwqy.html

[R19] 数组长度
来源：http://www.xuanzx.com/163lwzdruxb.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163gadourqj.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163eoclmkfh.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163wwyknqcx.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163kcbcxwfa.html

echo "${#s}"
来源：http://www.xuanzx.com/163hacxyhlr.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163itovcout.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163bxjkemud.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163bnddqomp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163sxcbqxae.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163zodtxyof.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163dclyvkte.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163kcwfqwhx.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163umfbzdhb.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163xocpmsnd.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163pgoobmwr.html

[R27] 算术展开
来源：http://www.xuanzx.com/163cetpxahv.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163buepkfzt.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163qcnvsfbt.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163qohiequg.html

[R29] 定义函数
来源：http://www.sxryk.cn/163fdqpmfry.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163dyvjfoxb.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163mrolobey.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163pusnhjag.html

[R31] 局部变量
来源：http://www.sxryk.cn/163sflrvihv.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163xtdfwebp.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163fjzgboqb.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163ghvbmgfy.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163krjkqvfk.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163jesdzzee.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163rmlcyosq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163hxfkwhxd.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163uerpcpiu.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ekdrwtjp.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163qisoonbu.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163qxzqqtkn.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163issfqvzv.html

files=$(ls -1)
来源：http://www.xuanzx.com/163oaxqsayj.html

[R38] 管道串联
来源：http://www.sxryk.cn/163nrbmfdco.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163cmopariw.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163ntovrzgw.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163teoqkflo.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163dhsykkcx.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163xkpqikvs.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163zoltkhfi.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163jiyhsxym.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163qwluenpz.html

wc -l < a.txt
来源：http://www.xuanzx.com/163aexdnmpz.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163umyejres.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163tpjeytbj.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163clugzidm.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163rylhefse.html

[R45] 批量删除
来源：http://www.xuanzx.com/163ecemyosp.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163sbghwsxk.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163ggrwbrhs.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163uermdbnu.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163thshpkls.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163kkwppund.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163krutuzoi.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163pxypdzor.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163bvxpjqhy.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163zelcbjkc.html

[R50] awk 求和
来源：http://www.xuanzx.com/163ydqmimhs.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163ixzfgfwb.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163qdhozlpg.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163mwljgasy.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163stmjizff.html

wc -l a.txt
来源：http://www.aibaodan.cn/163hfieqepq.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163bsdcftlu.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163tfbgkgno.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163wujpuglk.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163knobbacj.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163mwolotzp.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163rccdrfix.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163rdxodyks.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163dvxornrf.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163btrzdrxc.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163jjixyzcl.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163mmiuepfo.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163dhpzuwey.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163zgvgbxwv.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163lsskxtqc.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163dzphtsty.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163raqkrivl.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163rmfzvegr.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163kvfpmnni.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163eixikrjs.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163krwhpqsp.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163rpdcubdd.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163eqddtilx.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ybakhcix.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163jvgwcwcc.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163ziflqphb.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163ixlsiczf.html

[R66] 定时任务
来源：http://www.sxryk.cn/163obfdorlu.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163anlkpilk.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163updrgvut.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163iecmzpzr.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163nvctjtxi.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163eijpnjvo.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163njzxnqzu.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163krsvotws.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163vkqlyaxk.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163qifkncpa.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163bevlqkvn.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163fowcswcy.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163fyhrxtnc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163lcpocuyp.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163zhubrewq.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163grukguyw.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163rpueiovp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163kdtjurfb.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163szvllrqe.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163gjwzkaqa.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163iazrdcfu.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163wggujlfx.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163olaqsvgq.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163cxiigzwr.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163evlftuou.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163vijsmsay.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163jpqlzguk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163ziqnejeg.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163blegtqli.html

time ./run.sh
来源：http://www.aibaodan.cn/163uyueeygw.html

================================================================================
来源：http://www.aibaodan.cn/163dnpwzhyh.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163bvfxotqi.html

================================================================================
来源：http://www.xuanzx.com/163duisxycs.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163xyvxylzo.html

#include <stdio.h>
来源：http://www.xuanzx.com/163wtnoonni.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163carpwqks.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163wudowdjm.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163bpzalqpy.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163uqletxsy.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163dswjxlet.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163bdcarxda.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163zhsvxxgi.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ilsaprxd.html

strlen(s)
来源：http://www.aibaodan.cn/163keutdhzl.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163mnytqbxn.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163jwmsuiqb.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163rbsotdxn.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163unaqvcqb.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163kumjkono.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163vglvnnkb.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163rroojccd.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163sstiyhpi.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ddteyxav.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163xggbrjjw.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163afuoyuuk.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163pwkpcqdz.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163byyabult.html

fclose(f);
来源：http://www.aibaodan.cn/163rtjuwdoh.html

[S12] C：写文件
来源：http://www.sxryk.cn/163ufqqhnsa.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163lcxdaimm.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163nmjcvsde.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163yyvgvncx.html

[S14] C：枚举
来源：http://www.sxryk.cn/163szqeboqu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163qlyrcwli.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163srldwdpk.html

(double) a / b
来源：http://www.sxryk.cn/163xmjnhxma.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163sesqbcbj.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163khvbldir.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163ifbnngbh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163kwpetind.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163ttpoconf.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163lcflsadv.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163uvydejfx.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163cremvvrp.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163gcjuwsxr.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163uigtnwro.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163pgazcdss.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163imiidcql.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163ybtsrsdn.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163ijjnsneu.html

[S23] C：随机数
来源：http://www.sxryk.cn/163eznprqjs.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163twgbqrpe.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163umuzhsgx.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163xkjxwsvd.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163bqbikyje.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163vyfujazf.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ushktlhx.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163suqkutpy.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163nmnmexdf.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ixlcryoh.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163kzqshanh.html

static int counter = 0;
来源：http://www.xuanzx.com/163xibtfavo.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163vtujcijy.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163pasijwib.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163rplfptgd.html

#ifndef X_H
来源：http://www.sxryk.cn/163nlfoguos.html

#define X_H
来源：http://www.sxryk.cn/163bqioithl.html

#endif
来源：http://www.aibaodan.cn/163jsqemzpx.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ghjtwbsh.html

#include <iostream>
来源：http://www.xuanzx.com/163hryqefgv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163afrqxioh.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163jmeynpwg.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163lafxiaih.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163uacyyqov.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163climtqmf.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163fjyipafq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163fovcqfve.html

[S35] C++：map
来源：http://www.xuanzx.com/163elbvvvgi.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163lhmzutmd.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163indkcogz.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163bexsjsev.html

[S37] C++：set
来源：http://www.sxryk.cn/163krxvugxj.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ilxuthxh.html

[S38] C++：排序
来源：http://www.sxryk.cn/163emhaezou.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163pjoltcip.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163uznrxkhu.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163ijqhbfec.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ukoajqti.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163xagoazpz.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163mkolvkat.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163fabhaucq.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163jvaqorje.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163tlvbmzpy.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163xtvgqsrr.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163njgqzfrz.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163pmdhmqoy.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163vbguxcpk.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163fcegzaje.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163qojrxsug.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ewioigmb.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163rhlwunto.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163ubqtjncv.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163bqkddcfu.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163inbjkjsq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163rwngvysv.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163rijlidmc.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163wqbolhkf.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163lsginyiq.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163ojssgkol.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163oxqojivd.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163ggykkbab.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163ucpscavc.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163khlxnsrb.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163mzxeeusp.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163lneenvly.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163mxwdmlme.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163ocalpmms.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163awgpcpik.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ixwpxdzx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163lpzlsgtf.html

[S56] C++：optional
来源：http://www.sxryk.cn/163oqtkfwpf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163lcjoirkv.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163cdkmxleq.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163obekvvkq.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163fifximsi.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163fmtjfxum.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163zgtbfnjg.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ksutrbjz.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163xjllowsu.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163ifbalxxq.html

================================================================================
来源：http://www.sxryk.cn/163ynrakmgc.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163zzhjlpmr.html

================================================================================
来源：http://www.aibaodan.cn/163txdmimlo.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163fadgopgm.html

println("Hello")
来源：http://www.aibaodan.cn/163pukekozb.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163otarvdxz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163bpdhtjeo.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163wheamhdu.html

"值: $b"
来源：http://www.xuanzx.com/163xcsbofzy.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163iqzdbrtb.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163kohgvrau.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163ajyhlxoy.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163tnppvgvq.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163vvohsrmz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163temnpsli.html


<!-- 参考信息 -->