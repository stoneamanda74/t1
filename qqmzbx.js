外链999!wailian999！

esac
来源：http://www.xuanzx.com/163etnvhwaw.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163nmcdajzi.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163zusxlvcp.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163bbptszeu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163xegggsim.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163yipzsuoc.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163cmqgqtub.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163sbjeuzjw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163hzevfncz.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163tfcohzud.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163vmsobclu.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163bodewvvk.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163mjnhxzkf.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163zvolxtrc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163dtyqhqsg.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163pxupwjwi.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163zwzescxw.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163fjsbnueg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163iwoszfwk.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163cbxbybpj.html

echo "${#s}"
来源：http://www.xuanzx.com/163byotfxkz.html

[R22] 截取子串
来源：http://www.sxryk.cn/163nvrzoiie.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163mudxzhev.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163qybrgyhz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163dqvcosqu.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163qymsqnph.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163hkaykdmq.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163falwgejs.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163hpchargo.html

[R26] 命令替换
来源：http://www.sxryk.cn/163lnuxcfth.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163wvxmfzwy.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163lcowkfgg.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163gdpgeadm.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163rqmffbnn.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163vqcnhspv.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163teiobctl.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163fldjpmuo.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163gxxafkah.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163gyyuhzkz.html

[R31] 局部变量
来源：http://www.sxryk.cn/163hbaujvkd.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163msuzmupz.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163wocuhnjt.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163yrvmljah.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163udukcqso.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163nqfcitot.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163haghchnx.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163kefgyoae.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163jgaobzjn.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163pwixhmwy.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163wevtvoav.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163rwbdnuld.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163jusjgqzz.html

files=$(ls -1)
来源：http://www.sxryk.cn/163seatvudi.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163gldbvtet.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163upfdoegy.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163sdureamy.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163axmfodcd.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163utdvgvox.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163xflykbjm.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163xtndssxv.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163uukdwxzk.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163zkdkfzit.html

wc -l < a.txt
来源：http://www.sxryk.cn/163afzyyiff.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ewmjfere.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163ppovjqvg.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163jpqqgguq.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163sfvvlpbp.html

[R45] 批量删除
来源：http://www.xuanzx.com/163tjvsmzeq.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163hfprnycr.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163wtspvnjn.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163scbrbcdr.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163eeviifgz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163qxjcqxoz.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163zrsjuyol.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163kazqswfs.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163bgepuego.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ovuqilii.html

[R50] awk 求和
来源：http://www.sxryk.cn/163sdawyuqy.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163tgqjdxdb.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163dykymdwb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163wsijlowq.html

[R52] 统计行数
来源：http://www.sxryk.cn/163ucqwktmx.html

wc -l a.txt
来源：http://www.aibaodan.cn/163uetphdmp.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163tzcenkjj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163lyxobhbv.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163hxxgmsvx.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163jkhristn.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163kirwywym.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163atzvyylv.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163jttsylzh.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163ttsukcda.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163uglbpqau.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ocxwsehp.html

[R58] 下载文件
来源：http://www.sxryk.cn/163mkwoqoxh.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163idmzkmpu.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163spxehkbr.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163wrdnimih.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163jtkbfwiq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163eczshhjw.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163mksjizkn.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163vhhytkwp.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ihpsulut.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163cnbvepll.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163apxssixe.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163tdfihidd.html

[R64] 结束进程
来源：http://www.xuanzx.com/163rqdwgtpz.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163tuisaorj.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163dzxzkgrm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163vtjjzaxd.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163diufxdqt.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163dpfjhyau.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163atyohpbc.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163lavvqlrm.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163hgyncrzf.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163jlenzkuv.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163enxilxas.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163jmxktqcd.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ltwveytf.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163ewonylrh.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163nhkvpbpd.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163rbaiwwtu.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ybvpqbyl.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163fllopptm.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163pwjivlok.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163gcjjegyo.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163eaecodfu.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163xfvkyzgg.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163sxogydfm.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163eozpizsa.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163foyhileg.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ebsudcao.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163vovyjyau.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163mmaymwit.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163yyohwdne.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163uxguigqr.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163johivcjf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163vyiyancj.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163aikjglsc.html

time ./run.sh
来源：http://www.sxryk.cn/163klfqbizf.html

================================================================================
来源：http://www.xuanzx.com/163bxmphdzq.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163ppjzocrj.html

================================================================================
来源：http://www.sxryk.cn/163dhdcojht.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163ogefktxq.html

#include <stdio.h>
来源：http://www.xuanzx.com/163okkwuiix.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163whzmwiiy.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163evobxrdf.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163qxhawixd.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163uedrdhgs.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163zxhnombf.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163utemanry.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163vhbzrrku.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163jzfxyzjm.html

strlen(s)
来源：http://www.sxryk.cn/163vyjclxkw.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ppgfralj.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163ybcunsxt.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163okrudpxs.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ldtjztmk.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163smvmjgtd.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163dueiiyyo.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163onrvvfkm.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ryvfujtb.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163wbhglhiv.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163otaladag.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ctxrmnvw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163qqhijlgw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163wmjucsfk.html

fclose(f);
来源：http://www.sxryk.cn/163rxllhjxi.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163tmeliqvk.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163qrvlngvt.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163uwtghnpk.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163eongjxdo.html

[S14] C：枚举
来源：http://www.sxryk.cn/163stdkhskb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163puytltmk.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ewkoyxjc.html

(double) a / b
来源：http://www.xuanzx.com/163vrbsvwae.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ahmypgqm.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163tftaphac.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163lwzkzutx.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163kmwevigh.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163imgefdtu.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163rhgfxabn.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163yfwhnfto.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163lyeepygv.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163eonllykd.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ucwnsibp.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163uxdrrryp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163arptofgi.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163kyvgbziv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163asavozms.html

[S23] C：随机数
来源：http://www.xuanzx.com/163jbewsasz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163xofclkdn.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163dcggjsba.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ztagqusp.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163vtocdive.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163emfqrsmm.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163eeyvvoiv.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163mbhgqjlb.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ughkwyix.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163rtzdopue.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163nbkkrguu.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ppgmujts.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163jzjwjmxc.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163ulsyqije.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163uqmdgoqb.html

#ifndef X_H
来源：http://www.aibaodan.cn/163rwcohgax.html

#define X_H
来源：http://www.xuanzx.com/163bgeprrey.html

#endif
来源：http://www.sxryk.cn/163ueapojgz.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163qqewjkrh.html

#include <iostream>
来源：http://www.aibaodan.cn/163cqdzqvvk.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163xnioeski.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163hukwygtc.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163hooiwubf.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163gkdeoedm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163ihyjpdzp.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163qlzuelmg.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163vdxxcsdv.html

[S35] C++：map
来源：http://www.aibaodan.cn/163mylvoipj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163icpmgbir.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163xhsbfjgx.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163zxpagfsg.html

[S37] C++：set
来源：http://www.aibaodan.cn/163iqfwpyah.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163zkdunfvb.html

[S38] C++：排序
来源：http://www.sxryk.cn/163cuehkscw.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163sjqqglub.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163sgmmzeei.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163rzmdganj.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163jldtazos.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163vkjgdjwn.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163wgbzmtlw.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163ankwnaxq.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163mpdiahog.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163hshemgxc.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163etiyimwb.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ebzfykvv.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163nyimdfoi.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163bhhqvfur.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163pxrcqomz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163wptnoitj.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163jxiioxae.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163gjsidcvb.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163vjsbjtdx.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163kaihscix.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163hkyvcedn.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163kifbnteb.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163bxuarouk.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163rcdavwyw.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163lhtphcfu.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ysvtihzs.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163jlqyivxc.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163vxmuguhf.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163uuvkbgxi.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163qfhqqthc.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163xitmyoyg.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163lpujaqpt.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163vbfehpaf.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163hbjobqnm.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163rrgcgzbx.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163lznhlqby.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163cjavmytu.html

[S56] C++：optional
来源：http://www.xuanzx.com/163kvohrmcs.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163coqwashl.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163oqupahjh.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163jysudkvm.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163qvhnakhf.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ayqvsyjy.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163yuajkwpn.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163vglzeyzc.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163nieqrxji.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163gztcszfi.html

================================================================================
来源：http://www.xuanzx.com/163gzpwryfq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163qgbrjtqq.html

================================================================================
来源：http://www.sxryk.cn/163rwmcknzu.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163sqwwizrv.html

println("Hello")
来源：http://www.aibaodan.cn/163gvwuukgc.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163dlxawioh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163pmbtcanh.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163jszqbhxu.html

"值: $b"
来源：http://www.xuanzx.com/163dpfmjrzp.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163xsdakrlk.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163jeqpetjo.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163xpfrqnos.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ydyazeqy.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163uwkmqsaa.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163dxknuatz.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163yeixajdx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163ubrdelug.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163rxxjacil.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163jjsqpkib.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163batywclc.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163wtylubxt.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163etzrurzn.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163irybpfly.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163wekmqnvn.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163feifuswd.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163lrykygko.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163tletychf.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163jtteiwkd.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163qvctfvsd.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163amkpzhjp.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163liznsgxx.html


<!-- 参考信息 -->