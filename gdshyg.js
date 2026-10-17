外链999!wailian999！

name="${1:-default}"
来源：http://www.aibaodan.cn/163hwvvaadq.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163dpbxlifg.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163rghstpya.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163rnioaevb.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163rnrgfjuv.html

[R08] 数值比较
来源：http://www.xuanzx.com/163gmbzsfgm.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163bdqrixuk.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163nzakbzip.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163gzieqcel.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163iayxuawc.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163xtrvbrjq.html

[R11] case 多分支
来源：http://www.xuanzx.com/163pwlwwdca.html

case "$1" in
来源：http://www.xuanzx.com/163ggkzjdqn.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163cetiqgfq.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163kxfjhoep.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163hhdrzjzi.html

esac
来源：http://www.xuanzx.com/163mgktudws.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163dyhrmtpa.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163rrypsrif.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163fsfzgzsa.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163svgmsqai.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163xsepfndd.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163mejcoobj.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163hqsvodux.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163uvovjklb.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163qlwjhlxo.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163dfuarjfe.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ucmhisne.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163lvbmcsyk.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163nqrqfwxf.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163zsyadwgr.html

[R19] 数组长度
来源：http://www.xuanzx.com/163wrapjrmu.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163gjpqpsld.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163ibccrcba.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163qkezslzq.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163zvcfwzdz.html

echo "${#s}"
来源：http://www.aibaodan.cn/163edfjuleq.html

[R22] 截取子串
来源：http://www.xuanzx.com/163nlklewvb.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163qwrtrnsh.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163jhsacejb.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163lxfqtsch.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163cihvcqjz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163zahnckec.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163urolpgbb.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163qpwalgjo.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163uhxmhqhj.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163kxquegap.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163kqegsljt.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163wwhxuibq.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163lzfckhtj.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163vvvptbxq.html

[R29] 定义函数
来源：http://www.sxryk.cn/163yecrpwuy.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163rnccfgpm.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163cllqncqh.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163fazgkcvq.html

[R31] 局部变量
来源：http://www.sxryk.cn/163cinbwpfq.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163hxcyvzox.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163oeowjybu.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163qsjztgys.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163lxjytiim.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163xxckvniy.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163nmcbtwxy.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163hroqsqvm.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163jkebjbpp.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163qnfiyvkj.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163borsrowe.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163jtmovhrs.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163hvuyrbvf.html

files=$(ls -1)
来源：http://www.xuanzx.com/163gpyvgrdm.html

[R38] 管道串联
来源：http://www.xuanzx.com/163iskwpopr.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ptjfgsrx.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163aklolmgv.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163qnvgngtw.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163aqrklxqt.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163tahurnwv.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163naejtnay.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163opdihfnp.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163ssvasmzs.html

wc -l < a.txt
来源：http://www.sxryk.cn/163nwucwuep.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ssiraabo.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163pglkuakc.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163rulxqwps.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163zxysljku.html

[R45] 批量删除
来源：http://www.xuanzx.com/163yphgxhki.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163tmhinwon.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163ygapssra.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163stxdxhhi.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163himxzsxn.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163lbsdentn.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163mzqiktnt.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163kydjelwh.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163tlqbcjin.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163ctvqmeby.html

[R50] awk 求和
来源：http://www.xuanzx.com/163xjnmtzxd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163fsuyukrj.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163gdsysbro.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163dnktqzml.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163lbkpzjlu.html

wc -l a.txt
来源：http://www.xuanzx.com/163rbmcpsrd.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163jediyrnw.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163elksfwsz.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163msfpptwt.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163bacxgdkb.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163bnhkhjtp.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163havlrwsz.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163plkhvlqz.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163rggssgqf.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163aojmrujy.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163yfnnueli.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163imvrgmyn.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163tkwrxtpe.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163bgvrgwsw.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163dymrvnwt.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163ppgmihbi.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163yukoeqtp.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163jlpfaesc.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163hfetzcen.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163fhjplfrg.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163cowpgvcb.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163xxmqngzj.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163nzsgmpnz.html

[R64] 结束进程
来源：http://www.sxryk.cn/163alhxkrnk.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163opkitzpw.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ikbkfiti.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163wporifax.html

[R66] 定时任务
来源：http://www.xuanzx.com/163bglxctlr.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163ufenzdyi.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163zqeifleg.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163rgflugif.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163imdruuzo.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163tjhvrmrp.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163iaohfrtb.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163tbiarpyt.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ietsjzwy.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163inrdgtjo.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163cumaxajh.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ycnnvrlp.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163kwzwilyj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163pzdxnpvk.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ismudmhm.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163cydebajc.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163txlthkak.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163gqfknbhk.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163sldeaunv.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163pxzkbeum.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163dauttzqr.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163qufngauu.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163cucnzfau.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163zmxwwjad.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163jxuljoxj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163wyuhyetk.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163daycjoyo.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163negowlbc.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163boaccorf.html

time ./run.sh
来源：http://www.sxryk.cn/163ddvangck.html

================================================================================
来源：http://www.xuanzx.com/163xswgngtu.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163idpzjcko.html

================================================================================
来源：http://www.xuanzx.com/163yxrewjjc.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163fqdlfosv.html

#include <stdio.h>
来源：http://www.xuanzx.com/163nlhjqdrk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163zbhrvoqs.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163zchzpgrg.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163eygaqzjm.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163jujnxagq.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163odvltihq.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163xdrkeodb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163dnllzncn.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163kpyynqdf.html

strlen(s)
来源：http://www.xuanzx.com/163akwdwhku.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163bbguetvl.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163eghjuumm.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163dkfjbpgc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163efhsghio.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163oojuxzpm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163wyotgjgy.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163veadnatn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163ejmidzdv.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163tjwblksj.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163pufbrvwm.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163lldyvwrx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163yfeibqxq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163diutpncf.html

fclose(f);
来源：http://www.xuanzx.com/163ffhhuusj.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163dtyyjsqp.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163wsdmgiyk.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163tuqgnavb.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163znqcrbvy.html

[S14] C：枚举
来源：http://www.sxryk.cn/163swcoqxpf.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163bqishadu.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163pqbrwtes.html

(double) a / b
来源：http://www.sxryk.cn/163frsdodvy.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163wxbbypix.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163yjpauhzs.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163kqkpgaiw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163bvhgptnb.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163glyfimka.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163zozjtpcz.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163ijpcuthc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163uclbdevh.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163tjspadhh.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163sdeqpgxk.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ldpoqacu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163yirvpaxn.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163pruwxtts.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163jhdzvtfb.html

[S23] C：随机数
来源：http://www.xuanzx.com/163xuxlttis.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163srcziyvk.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163wnlspjoz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163fawoqnpy.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163pzdtyeic.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163grkxgsfq.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163omqofvxs.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163gnacixpl.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163qjykdvmt.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163drigzrwh.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163pkrhuahf.html

static int counter = 0;
来源：http://www.aibaodan.cn/163kzcdpgbr.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163adjyyhsv.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163jgdhqgne.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ihtndzyz.html

#ifndef X_H
来源：http://www.aibaodan.cn/163eeldnzoe.html

#define X_H
来源：http://www.aibaodan.cn/163bezabzeh.html

#endif
来源：http://www.xuanzx.com/163nvwcxvlf.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163zjungrdx.html

#include <iostream>
来源：http://www.xuanzx.com/163zvetwfzi.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ijduvehr.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163vhcmkdnj.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163doweoirg.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163jzcylpsj.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163gotyhhxk.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163uhzfpzer.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163peopkiea.html

[S35] C++：map
来源：http://www.aibaodan.cn/163egilzyab.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163xixrdfve.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163rljnaxej.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163fuosigva.html

[S37] C++：set
来源：http://www.sxryk.cn/163trufpgif.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163czpmhjwl.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163pevqwlgd.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163hacjreoe.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163snwamkwt.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163zwezeinn.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163xnxihknp.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163rtvkzgvy.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163fruxlpef.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163gbwcqhyd.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ksyqvlge.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163zfqvptvg.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163lgswetai.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163pyfjfgqf.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163iaaimrwy.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163lfawzaxv.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163ctaiqrql.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163moweysqr.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163zjrcvbii.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163lehhdcbh.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163orbxeqxr.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163tmyfdpbi.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163qdxbefwg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163fivesnfv.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163gzqzywsu.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163uotgmzqx.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163pwdcmxcg.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163yzxauxmf.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163urxmfeho.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163axtietfa.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163eeimwxfx.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163cgtunnjn.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163pthylftk.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163cnonmgjn.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163twbkmuul.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163axitwtna.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163zzuxvkmr.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163zbftvvco.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163oeycgdse.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163ylxahknw.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163thljclri.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163zvptgfrv.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163fvorhhwb.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163tlefpcvb.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163bevdkmtp.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163fwjhooku.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163kkxaystn.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163wjxyjkbo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163nlzdgfvh.html

================================================================================
来源：http://www.aibaodan.cn/163lydcnfrb.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163uinuzhvm.html

================================================================================
来源：http://www.sxryk.cn/163fsexshbt.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163hcgwoxld.html

println("Hello")
来源：http://www.xuanzx.com/163zlgvtnjm.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163avjveffd.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163bwyrfqrs.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163kjhlenqa.html

"值: $b"
来源：http://www.sxryk.cn/163kipjtrbr.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163vphmtobd.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163gidrihws.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163yhhyicog.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163czcwwkic.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163wjreelyc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163kdnzcygf.html


<!-- 参考信息 -->