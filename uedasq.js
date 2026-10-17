外链999!wailian999！

esac
来源：http://www.xuanzx.com/163peptmumz.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163oymshvyn.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163szbmuzhr.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163yvlzhofe.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163uitaxpfa.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163wyifkksb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163jajrlxdn.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163bpzxjsfn.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163igibjyxn.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163qpledmcg.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163eoeemksb.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163oponwdzu.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163cukocgiv.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163onpsybsn.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163mxtueglv.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ygcekhdm.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163umxqaudv.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163odyltdli.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163umwkjdah.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163xoemhnsw.html

echo "${#s}"
来源：http://www.aibaodan.cn/163rpsdxgev.html

[R22] 截取子串
来源：http://www.sxryk.cn/163qtinueiy.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163glhitszs.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163mmmkjram.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163mlamfrlr.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163ihqhdelh.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163xqiwhcdj.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163xugaasar.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163tzslgpcm.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163njsgimfd.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163uazpjhaf.html

[R27] 算术展开
来源：http://www.sxryk.cn/163lfxdqsgu.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163coaoybrs.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163hzebflya.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163sftwydqt.html

[R29] 定义函数
来源：http://www.sxryk.cn/163pngmdrny.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163dyagubqu.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163smuaiqdi.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163gmtswzhn.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163vpoliasb.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ymhaanop.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163uxofumsn.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163lydvnvtw.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163mxfsympc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163qndvprup.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163bfgoixcp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163mdzhxmbp.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163eupikpbf.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163kttnvtse.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163jxheiyai.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163ehbcwhtj.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163stysorlq.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163cbepnmdo.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163almkbsat.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163lqdlimkr.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163eanhhtot.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163kfddmizh.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163bdttdack.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163yjduefsp.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163vtbmnwku.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163kxqqqtpt.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163xwsenxit.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ifvwvlyo.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163hwcjmbsm.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163sylhdpet.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163sdjccppf.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163xbvanest.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163rifoktfc.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163awbgqbdb.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163twguikel.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163eopbfqxa.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163nbpyhpmn.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163znkhiler.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ltamxctj.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163edsvtdyr.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163fszessrq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163zovejhnq.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163bixcfxoq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163yameyumv.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163hdemkokm.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163bnrjcsgv.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163qkmdlefe.html

wc -l a.txt
来源：http://www.xuanzx.com/163jpsvysdq.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163wtilraxl.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163abcoknho.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163apyurhwz.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163udkrpzxx.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163lrzpeeib.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163fhmssxpo.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163lhqjhuay.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163goskrwaq.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163jluaatga.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163sxtlctiw.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163zefyncmq.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163nreiqeqt.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163ffbecjky.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163vnlxmvgg.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163vmamnzan.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163iqtlotej.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163rcwidoog.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163hbklzmyc.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163zuapwrba.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163zgrkqmlw.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163aiinpvkw.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163nipwikgr.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163opyiqcot.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163ylpzpims.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163bzfdufng.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163ctzjlncj.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163utvtjheg.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163szxufknw.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163fwsfnvip.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163bqjfglfz.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163iujblitq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163yivlvwez.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163zmpccjlu.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163zhxvfcxl.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163onzythom.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163aollbotf.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163vivimexy.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163mzpcmymu.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163cudxmrbh.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163ovwxdsvv.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163dirbfyzj.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163srbbfdvo.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163tihwxoeu.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163urmdwynd.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163nypjvjyj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163mceqzkms.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163lodbrksu.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163rdabzbwy.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163yymokept.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163xusjwzmu.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163wllrkuvz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163nbwynlja.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163twywwnfa.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163owdyjdzr.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163phynstvv.html

time ./run.sh
来源：http://www.aibaodan.cn/163claskvoi.html

================================================================================
来源：http://www.xuanzx.com/163akgxldkd.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163acbxvlrw.html

================================================================================
来源：http://www.xuanzx.com/163zxbshpff.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163iuetvndc.html

#include <stdio.h>
来源：http://www.xuanzx.com/163xtjidgwe.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163kbrdbxrw.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163veucnnep.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163nupbnbmc.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163hmbxilim.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163ejiustlz.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163rxrpippp.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163wqpfmeda.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163ghfkkakh.html

strlen(s)
来源：http://www.xuanzx.com/163jqcztttr.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163lxqzfjua.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163jqofphre.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163qknomfig.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163zvddgiie.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163khhzvepx.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ofvgujmd.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163eskqbqku.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163pqaxwmca.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ezllsapc.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163cygaaiti.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163itvlkvgt.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163jvdfgjts.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163hthtifmz.html

fclose(f);
来源：http://www.aibaodan.cn/163vebhyrsi.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163vrfyzpom.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163hbomhycx.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163njztanus.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163wpataizl.html

[S14] C：枚举
来源：http://www.sxryk.cn/163hihfnouj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163plqbxajh.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163izcfjnia.html

(double) a / b
来源：http://www.aibaodan.cn/163znlhbuep.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163emrpnpqp.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163axyujfig.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163scoskfiw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163rluofqeq.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163hsmddhmw.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163iqbwxjun.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163dzodbtkd.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163dexjxsgd.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163syexskuv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163exuthkhj.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163fdbpptew.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163mqnbphyh.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163wntqyqdx.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163rnwakzcv.html

[S23] C：随机数
来源：http://www.sxryk.cn/163dkrgefii.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ivywllpy.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163uiiwpptj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163okcmjqte.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163quifurwm.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163uivtqyfx.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163xewqneeh.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163erjtwfkm.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ndfpydam.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163zklmjmih.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163lsoswnsy.html

static int counter = 0;
来源：http://www.aibaodan.cn/163rvwwtciw.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163spniscom.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163fgrvyxzq.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163tiqmsano.html

#ifndef X_H
来源：http://www.xuanzx.com/163mjeiwoun.html

#define X_H
来源：http://www.xuanzx.com/163ipbzdtps.html

#endif
来源：http://www.sxryk.cn/163jpagwdld.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163zddkxhfa.html

#include <iostream>
来源：http://www.sxryk.cn/163rneiiygn.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163sjusgzmq.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163mwttpjou.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163rzyotrea.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163rbsznzsm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163thrckjjs.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163murfgndn.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163chltmwaw.html

[S35] C++：map
来源：http://www.sxryk.cn/163hdavnseo.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163jpqcupbu.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163izylrrxy.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163xbxoiprv.html

[S37] C++：set
来源：http://www.sxryk.cn/163wxktzrts.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163lkhauhuc.html

[S38] C++：排序
来源：http://www.xuanzx.com/163cvapcyin.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163qoxtgxch.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163iogdyxdc.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163qzbixdvc.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163jmnpaqft.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163nfhmkcwg.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163eyjhyykf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163jnanacsj.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163abdxvtzk.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163sigphdgk.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163adjordrb.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163mhedwcmz.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163hkhdxdjx.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163bhbeyppi.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163rrmscync.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163glpahrae.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163xrhjiatk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163rqjktvyc.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163cmblpzvs.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163wcuwhasp.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163fdvlqqor.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163uicxfxxr.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163oqtzyhzl.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163vxqlylhy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163vfkxytfb.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163shnmjesl.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163esacupfl.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163dxwzomkk.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163ihxbdghj.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163pvfjxpur.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163dyemalag.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163hgjhqyeu.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163dogyfckx.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163ermxayqf.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163wsewjiuq.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163ckwmrxss.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163uymfmgpx.html

[S56] C++：optional
来源：http://www.sxryk.cn/163ujhsbgxu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163xmsquvsg.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163qayzbnko.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163caduhjhz.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163anxppunp.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163xqoqhapk.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163bfhxlmyl.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163xckupoda.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163sqhvfsyo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163wisdrwya.html

================================================================================
来源：http://www.xuanzx.com/163sntwpsda.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163besukpmc.html

================================================================================
来源：http://www.sxryk.cn/163tgurekcd.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163tcvzgyye.html

println("Hello")
来源：http://www.aibaodan.cn/163lkkpyayj.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163iqbunxox.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163gdgjdjip.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163mitxmqwa.html

"值: $b"
来源：http://www.xuanzx.com/163zyolomol.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163vpinzzes.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163fqvtcney.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163lnydqlxd.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163boiourep.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163sflwxykz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163slyjpszu.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ekuciyfh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163tbtafrzl.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163heozmeuy.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163wokhiimc.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163kfqeoteh.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163tccgiiqu.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163kwiudgvs.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163reffkwoc.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163etsmniqj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163xqehtoah.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163mrdycxml.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163qycsesqd.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163vgvpttte.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163sjfqksis.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163wesvarwp.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163gywoatkd.html


<!-- 参考信息 -->