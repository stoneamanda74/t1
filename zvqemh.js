外链999!wailian999！

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163atkeihlu.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163ecctpncl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163yotyjlpy.html

[R11] case 多分支
来源：http://www.xuanzx.com/163jgjxozwg.html

case "$1" in
来源：http://www.sxryk.cn/163vkgpnlha.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163htzwdihd.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163eqwvhhbb.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163kohonvuh.html

esac
来源：http://www.sxryk.cn/163ifkebvge.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163azxrdmso.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163ptrqjmpg.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163ontjrvfy.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163lpixzmhd.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163bwztoalq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163fkurkuiz.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163ciptpkye.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163wqkdnyzu.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163sgmtxztr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163jjhfxcdf.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163tgvmrkci.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163oxbgvzoq.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163rxgxgufq.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163qxraqmgx.html

[R19] 数组长度
来源：http://www.sxryk.cn/163dnkjxyqh.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163jpwssiwi.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163fdkivefl.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163qlgtldgd.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163jgrhzrki.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ktjkvqaa.html

[R22] 截取子串
来源：http://www.xuanzx.com/163jmgorvci.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163chbiingd.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163qomsyfjp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163jnfflsww.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163ejxpvlyc.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163lvesjvzz.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163hdxpdbkh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163lzplvmys.html

[R26] 命令替换
来源：http://www.xuanzx.com/163gdrhapyt.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163sptizeck.html

[R27] 算术展开
来源：http://www.xuanzx.com/163eksonqec.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163bbxuwszl.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163rhjxrcep.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163vvvqhssy.html

[R29] 定义函数
来源：http://www.sxryk.cn/163evwxyugb.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163bhloqaap.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163aaposuwk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163mdzctlpx.html

[R31] 局部变量
来源：http://www.sxryk.cn/163tykjbvez.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163pfnwsutl.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163rhvvnkqx.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163xhsewssx.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ypvvdsvi.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163iqcgcwax.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163zvsbtsox.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163xjhkgehb.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163zvaeokim.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ptyvmcqm.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163annxfuft.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163bnvnvmzd.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163mudkvwfb.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163mrawayhr.html

[R38] 管道串联
来源：http://www.xuanzx.com/163aobstgzq.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163fhkoksok.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163bzdipcwp.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163oqokvghm.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163frmubqnr.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163nzvzgbzs.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163vvkxzmne.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163qiocrkhs.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163wqptlgtm.html

wc -l < a.txt
来源：http://www.sxryk.cn/163zhgsffzo.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163cvwkxkct.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163epcxjxre.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163qmyzljjg.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163lqzegqqk.html

[R45] 批量删除
来源：http://www.sxryk.cn/163jhloocya.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163mhtjqhcw.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163tmzqhjfn.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163okvgpiim.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ifxpjswo.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163djtunsoo.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163tdjylnne.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163ympgeqly.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163xqkjzuoo.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163qiojhzag.html

[R50] awk 求和
来源：http://www.xuanzx.com/163raqhlltq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163pwjdjcph.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163lisgcumh.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163lrhcvjim.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163blhneowb.html

wc -l a.txt
来源：http://www.xuanzx.com/163kaajjcqg.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163jadfgrjj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163hozqjvvz.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163zxxgrghb.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163defxlrui.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163fznfunym.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163ofvsnuau.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163guubopzm.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163astbchdy.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163sklknwqt.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163zvichsai.html

[R58] 下载文件
来源：http://www.xuanzx.com/163ojxtceds.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163gglkaybo.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163tuyheiqn.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163roufuiax.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163pbhuxati.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163atcidtex.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163nemvhjdw.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163vwivcbmd.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163dfdpuubj.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163nsdorobw.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163seawfegg.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163jpuqhisi.html

[R64] 结束进程
来源：http://www.sxryk.cn/163hhladepv.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163vgfiacuh.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163zqeicqcy.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163xvdjallo.html

[R66] 定时任务
来源：http://www.xuanzx.com/163ocanixyp.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163xqyczqci.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163etpyapdh.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163tkljbykc.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163ltiqecaa.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ageqecnn.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163gccottmv.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163wtrxwnle.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163rsfttfae.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163scsbmuic.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163wgrohjxu.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163avuabuyw.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163uvmucbzx.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163rqsnwnhq.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163uvszyvsb.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163lswhbasp.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163vqcaxcea.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163nolxuxhn.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163nhzmqvqa.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163vdhozncj.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163lgerghhe.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163qtswsxlq.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163dzcfcldw.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163kcvxxrng.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163meeimaoe.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163zovftqcg.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163perwjkcl.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163nfnvkvyf.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163cwjncdgw.html

time ./run.sh
来源：http://www.sxryk.cn/163sijzqfah.html

================================================================================
来源：http://www.sxryk.cn/163motpmtsl.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163ohxbqhto.html

================================================================================
来源：http://www.aibaodan.cn/163xejwqbmk.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163gioovqfe.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163nmfitfvt.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163kqahzvaz.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163swygtyfv.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163ndtvqwkk.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ohixvjyo.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163ywwqbewu.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163qgxvzfbi.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163xpelkikd.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163vrmtfcgo.html

strlen(s)
来源：http://www.xuanzx.com/163twogygfs.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163tbfvaxgg.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163viilflci.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163qtwnuylc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163nblnjfwi.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163atokwqwa.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163opwckzrl.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163tebrmylj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163naqhgfuw.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163vynydbdf.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163joaqrnjz.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163qwnjqrjq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163xtfieqaf.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163dvujkquc.html

fclose(f);
来源：http://www.sxryk.cn/163xlxphpce.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163kvwresiy.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163dujnznil.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163hukmmsrf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163gfzgdpyl.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163lznfppjs.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163pexlkeak.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163jieovxsr.html

(double) a / b
来源：http://www.aibaodan.cn/163diptdjdj.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ncbptfda.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163meqovlpq.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163kuggjzvp.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ykschnax.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163aoryllvp.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163yzlhoccu.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163gkjhrpej.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163bfrqtrtg.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ntixklyj.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163xkqweqjz.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163yhoafgez.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163sdqivcvs.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163howrvild.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163cfoxdmof.html

[S23] C：随机数
来源：http://www.xuanzx.com/163lkruqvss.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163rjselnyu.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163xerqkeuy.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163jwvbnoeo.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163hnriostc.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163bybotfdc.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163vnkiaehw.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163tecgtxhx.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163byfivsbr.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ndpmoewz.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163mezcqjtz.html

static int counter = 0;
来源：http://www.sxryk.cn/163ytyauesv.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163ubtlfjta.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163mtpbjkle.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163nipmgvfu.html

#ifndef X_H
来源：http://www.sxryk.cn/163odpsscct.html

#define X_H
来源：http://www.xuanzx.com/163hajszsze.html

#endif
来源：http://www.aibaodan.cn/163gcuhcjxq.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163mesrphqz.html

#include <iostream>
来源：http://www.aibaodan.cn/163gwfmwoyb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163baytpxgr.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163vsyctrhb.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163euwdiyfd.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163txxyiohj.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163vcekmypc.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163ajihaqee.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163uhypomdy.html

[S35] C++：map
来源：http://www.aibaodan.cn/163jlxlpjtn.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163urgyfpyb.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163lualvkei.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163axlovzot.html

[S37] C++：set
来源：http://www.aibaodan.cn/163nfgnkyoi.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163vcnfvayd.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163dqbqctcv.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163tsposqoc.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163vntgpwae.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163vzmxsygp.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163argexeil.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163cnkktmrq.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163swgabhuh.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163shzatlfi.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163rvvjaeew.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163udtwdgyr.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163nfzzegpt.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ofgunkpp.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ascczlzg.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163cifirzgn.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163cwyjvbpk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163uzuucolw.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163sdlnyzay.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163bsokoavi.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163dgqtsilz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ximhyecr.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163whgmpssy.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163tzxitrhh.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163zpctyzhy.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163lcdlcnwr.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163yfizptms.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163xtyyyhcn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163duxnzesd.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163ecjglmcg.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163zbilutof.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163qjyfmkqt.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163softjnnm.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163nkgedjxr.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163rpjlydkm.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163kmqpzjrc.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163fzekwbis.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163nldnloqb.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163fdbpxwff.html

[S56] C++：optional
来源：http://www.xuanzx.com/163ioisczbn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163njxwvicb.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163htiptzyl.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163ipdcjhqz.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163xflmeypn.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163bbpksluk.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163tqvihtfa.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163lhkwctji.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163qmgknozu.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163hovmtcba.html

================================================================================
来源：http://www.sxryk.cn/163jqhjhdyy.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163gxksovqh.html

================================================================================
来源：http://www.xuanzx.com/163fjtscsaz.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163ssbvufcm.html

println("Hello")
来源：http://www.xuanzx.com/163swoqoelg.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ehrbnrgp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163qydskkxw.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163uomlqgdx.html

"值: $b"
来源：http://www.sxryk.cn/163ywbztlkd.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163rqxfanhm.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163yjqpqkfl.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163bnjhmvrs.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163foapcyhr.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163gqpfdpri.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163cffqmpkw.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163wqspizsq.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163wgifbalq.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163gewakcbe.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163hxsaepaw.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163clzxvuwb.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163wpsumswj.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163otgmduur.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163hwyknzia.html


<!-- 参考信息 -->