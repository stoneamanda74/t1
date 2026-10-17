外链999!wailian999！

esac
来源：http://www.aibaodan.cn/163uhkmyjfg.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163byruayle.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163kjbazhvn.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163dhhotcrb.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163aacqideb.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163rjhwaroh.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163vnwvicia.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163ycpgslhc.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163gspnllif.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163tfskiqqc.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163sienwzme.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163ptpnjnmg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163mxmgeave.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163zbqcoleu.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163wvulvhsv.html

[R19] 数组长度
来源：http://www.xuanzx.com/163uwgulpng.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163nlvmucea.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163ksvggexz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163vjdwypgf.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163trxfcjqk.html

echo "${#s}"
来源：http://www.aibaodan.cn/163rysbmgll.html

[R22] 截取子串
来源：http://www.sxryk.cn/163jcgunoty.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163qkdenlwk.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163epqskuhj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163gcrgzctt.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ohlnmyui.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163jnclwiyu.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163wuyvwznk.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163elyejvck.html

[R26] 命令替换
来源：http://www.xuanzx.com/163pnvcuplu.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163laagzlgv.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163amjwagsv.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163cxemmiis.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163gofhzvve.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163mjeuheen.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163gbmulubx.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163yjzwigha.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163nhilqbom.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163sytkwrkl.html

[R31] 局部变量
来源：http://www.sxryk.cn/163rvecqesj.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163othrvkoo.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163bpnnrhty.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163opanwbys.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163rawlduvb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163fzsgpzjj.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163bxuxvlno.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163rdlggjwt.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163jvdogbto.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163bkxzqxwe.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163allateuw.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163fqhxjdyy.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163hjdkakzs.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ymuetyud.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163imfyfdhk.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ehceocls.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163iixemrzo.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163hwpegwpm.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163achjazel.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163taipvcny.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163vsycmzll.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163iuiflciz.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163fuogwnxl.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ncajsrjm.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ohguukgz.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163oeyemvuk.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163hxnucapc.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163kyhfkcef.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ghpggkin.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163htoxrhls.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163xrvfvyfw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163izuwxvht.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163dcanxalc.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163qxnktzvj.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ffxmmisw.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163wyjpzvix.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163zvsbhvte.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163bpgwxmcq.html

[R50] awk 求和
来源：http://www.sxryk.cn/163zutcejiy.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163rjqcndzd.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163hijgmxjm.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163psoyrcng.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163siifwrja.html

wc -l a.txt
来源：http://www.xuanzx.com/163jmkjpdoi.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163wksvzygs.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163senxegel.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163plzxyrqr.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163uvmwaxgv.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163yqwtonxm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163gryzoupk.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163acmowytx.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163yhisqnaf.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163zuqodhir.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163aolnkxnb.html

[R58] 下载文件
来源：http://www.sxryk.cn/163chzyevby.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163xuizylfa.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163ygoucvxb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163nhgsamao.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163bwzyvlgm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163vngxmbpo.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163uexkoegb.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163yuxrobqt.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163fkleulpm.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163rvohdpwk.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163lnhhpthf.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163sllzjipg.html

[R64] 结束进程
来源：http://www.xuanzx.com/163hvebvoth.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163uuayenho.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163xzknkdqo.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163ophnvnbn.html

[R66] 定时任务
来源：http://www.sxryk.cn/163iwueyjbc.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163omkbqhdn.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163rearyglh.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163wpaaoqcs.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163gbnbdhjt.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163xfducktm.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163blhdpjmc.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163gcrmwczg.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163qcrbqsch.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163xwtgbpzu.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163yhlxyanf.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163hjfynypa.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163aabpjsqr.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163zstiimtp.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163xzmhiojd.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163excrhwpi.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163lpffntxj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163zkayxcjy.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163lmqsjkwj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163mowvxntw.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163afjogpqr.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163oumxqroj.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163olfvoypa.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163gpkwtrhn.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163epvicacm.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163ihbybgcg.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163idfjqyop.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163xwhvaorj.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163rndmfdba.html

time ./run.sh
来源：http://www.aibaodan.cn/163yiyogcag.html

================================================================================
来源：http://www.aibaodan.cn/163usbirihw.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163nsswjmvl.html

================================================================================
来源：http://www.sxryk.cn/163dgcqigdb.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163buhvfzqm.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163jwzqcytr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163cfgswihq.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163jswbbvme.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163sgesfexn.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163bleivksn.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163tjdrlcon.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163iixvprka.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163qhidwtec.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163rqxjibbt.html

strlen(s)
来源：http://www.sxryk.cn/163xjuketrn.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163yrmjsthp.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163chdbcfdo.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163oqyyvslr.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163sakkghjf.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163mwgrxfdh.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163akgudezq.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163uwbqpasn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163fxaxjxqr.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163plggtjgq.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163sjvpspml.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163rpdkeiak.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163siahzufw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163bzflpimo.html

fclose(f);
来源：http://www.sxryk.cn/163sftzazby.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163eopqjxlt.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163zlxrcgoz.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163vbxhzkph.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163wwmshrzh.html

[S14] C：枚举
来源：http://www.sxryk.cn/163xrqkdjpe.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163bdgbvuaw.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163cracblqp.html

(double) a / b
来源：http://www.aibaodan.cn/163sutblkxv.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ahvthqhl.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163cugtpxoh.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163qmpivzpi.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163cjoamiqp.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163dtmfwazf.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163rnjymsog.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163toqvmpte.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163svljlfqc.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163kjpxszcx.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ehexctiq.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163nrdwtgoa.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163djiehakg.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163jaydrbkd.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163hpebflht.html

[S23] C：随机数
来源：http://www.xuanzx.com/163oqbjthlo.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163nswamire.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163atnzpaag.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163rvjbeuar.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163sgylydoj.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163anbtaldu.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163snddftql.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163qwgcmxzi.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163lccirmyj.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163jfiztugc.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163rybmasyf.html

static int counter = 0;
来源：http://www.xuanzx.com/163ccteubvc.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163jogemcwc.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163bzxihqym.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163aqhbdsir.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ojayybvj.html

#define X_H
来源：http://www.sxryk.cn/163cfhcvgyw.html

#endif
来源：http://www.xuanzx.com/163qcuoraaq.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163gxzzciws.html

#include <iostream>
来源：http://www.sxryk.cn/163yydolnih.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163tpkuinwj.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163tbypgxdb.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163hnfawney.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163hjoicumo.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163ixyoxjew.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163nqmwiish.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ovrickzd.html

[S35] C++：map
来源：http://www.aibaodan.cn/163zmsghhng.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163orvqdrlv.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163mxqinudt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163uuayrzed.html

[S37] C++：set
来源：http://www.sxryk.cn/163kndwnjpc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163zkernylr.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163luvowltm.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163uenrkiww.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163yelccnsz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163mbrfbbvu.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163pyssdzjw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163uneigteg.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163mlkfoumf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163saowfgzr.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163qxnambcu.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163mbmixcmh.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163fnlabzef.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163wbnbhwvg.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163mebtztfz.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163vmsrzrne.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163ytybharz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163fmbmsvsl.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163ccgspgpo.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163ghkyqmei.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163rzpbcwtv.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ihdulcyl.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163sesdfwiw.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163lrrklzdw.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163fpclusry.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163xtdczyub.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163dxjzjdkx.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163kckawesu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163izdiovpp.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163yhiwhool.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163drxlfrva.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163nqrzgmba.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163fphyndsg.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163bgxactsu.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163febnmcxz.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163wfzcshqm.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163xjladrto.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163xevairdw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163xntnvulr.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163oykpsevq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163wreffmhg.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163hsermefn.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163bjjnuisy.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ihameemw.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163gykkpdix.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163evoqfyld.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163ntxetvps.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163yfdnyhsg.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163lremhafz.html

================================================================================
来源：http://www.sxryk.cn/163ftllwkzx.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163uvrlkcre.html

================================================================================
来源：http://www.aibaodan.cn/163kfsiakjl.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163zgjvvdmh.html

println("Hello")
来源：http://www.aibaodan.cn/163ycjiiofk.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163mvmqzwsn.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163curpnfhn.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163xbalgxnn.html

"值: $b"
来源：http://www.xuanzx.com/163zbahrhnv.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163phbcqtvx.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163enidkjqz.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163iqndpayz.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163lidpbfhl.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163sgnqdyuf.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163acqsnjem.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163pzqwgqoe.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163turcorir.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163xlljpbhd.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163lxrcmkuk.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163aygjglci.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163xnuvhrdn.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163mhuuckmh.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163hnjnaszu.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163kgjdmcxk.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163whiclhkx.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163mhstyceb.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163coqyyxjl.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163laytfgdr.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163jvgigovu.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163fuurqvhz.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ofzgtlbc.html


<!-- 参考信息 -->