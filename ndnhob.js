外链999!wailian999！

esac
来源：http://www.xuanzx.com/163kvuawblu.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163nghfvaqy.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163fmqubhlf.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163xlzkmtyh.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163jpywyxuk.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163mmtqtjml.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163lpeqaqdc.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163lmgiihxr.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163etwgnxcy.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163mdkisysg.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163oxtqkpck.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163uhnnsxjn.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163xumviczl.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163zpwgsdrf.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163nmsaomls.html

[R19] 数组长度
来源：http://www.xuanzx.com/163aixkeauv.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163bniwjfwx.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163jiqlxuwa.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163gnxenofv.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163fxlpwwpr.html

echo "${#s}"
来源：http://www.xuanzx.com/163qldrbzpf.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163lxbnxkrl.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163hpliyltp.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163gtfonoui.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163jcfluocc.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163bxikbjco.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163gikarufm.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163fklflqss.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163txfdcvbx.html

[R26] 命令替换
来源：http://www.sxryk.cn/163nfykytmv.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163rdqdrucb.html

[R27] 算术展开
来源：http://www.xuanzx.com/163nuqqykym.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163bringffi.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163iyvyqgvs.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163svrrztmf.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163queejfwj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ioivlqrl.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163wmyehpjo.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163dncixnqp.html

[R31] 局部变量
来源：http://www.sxryk.cn/163klinnzmr.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163jnypeoiu.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163fkmnnmki.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163nscmraof.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163vqirgbwm.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163yuwkcjuo.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163drrutklj.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163meobqqwm.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163siijwshz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163kxphifhu.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ebxadzvn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163hzfikpwr.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163obwnfhna.html

files=$(ls -1)
来源：http://www.sxryk.cn/163shuygpuf.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163fawbrbnq.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163rjcmhnks.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163lxbcpcnh.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163icbdbgvs.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163wqglvkjz.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163lvstxvlv.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163kadsfnls.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163hufoxkln.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163xhgkvvnz.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163hbobberd.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163askogzbw.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163ymijrbck.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163hrlzmkxi.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163ueoakyzq.html

[R45] 批量删除
来源：http://www.xuanzx.com/163hiylnfvt.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163upvlaupq.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163efpumewr.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163uuqmgxsu.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163bpiovdiy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163wqwdayju.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ttvdnigc.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163izbtxani.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163gndohztv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163thybogcq.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163thdkkqgq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163zflworkc.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163bawomnqg.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163mlnlhovn.html

[R52] 统计行数
来源：http://www.sxryk.cn/163qisxgkwz.html

wc -l a.txt
来源：http://www.aibaodan.cn/163qwdkfmnt.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163pheyjubx.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163curwqgoa.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ufbalgbm.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163yuhkyuld.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163gygmrlsa.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163thdapflb.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163swlractd.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163qcogvhwc.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163rqkqeetu.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ihjdyscy.html

[R58] 下载文件
来源：http://www.sxryk.cn/163lgaicxjj.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ajsuaijp.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163lpghvepn.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163xcurfbbl.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163zgvsdknl.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163hlpwcffe.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163xpgyzaov.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163btbjwvrp.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163unkvurog.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163rhoqyfsb.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163pwakxbuj.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163kbbkpgbs.html

[R64] 结束进程
来源：http://www.xuanzx.com/163vrrtjpdd.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163cgdqaxox.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163pnbgghpt.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163zoeqnxio.html

[R66] 定时任务
来源：http://www.xuanzx.com/163woaiojrg.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163fiktccuu.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163tozzfqul.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163nvwoqhsn.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ynbvjlgp.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163hdlbjywe.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163dkpmmhbz.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163jgrhnpck.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163fneopuhw.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163mjuuwygw.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163nynvrmur.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ykcvkjni.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163scozvewy.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163rqrtfquc.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163mzwadyrx.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163dafwxuoc.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163kzjjfhsy.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163ywefroei.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163zwpsmbot.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163uejpuixq.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163pwimjqun.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163fgqgiopd.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163qzvqvxhx.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163mgzcpfvn.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163rhebmjec.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163iulwvuvb.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163swfjllmd.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163llyybjed.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163pmxgsggp.html

time ./run.sh
来源：http://www.xuanzx.com/163tvwngqfo.html

================================================================================
来源：http://www.sxryk.cn/163dpdkmpxf.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163hvaofzdu.html

================================================================================
来源：http://www.sxryk.cn/163qmaqooqt.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163vxnzwsnd.html

#include <stdio.h>
来源：http://www.sxryk.cn/163kktliffr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163xssptagt.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163hdzybtvc.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163sxrjssuj.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163axesloea.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163looszwtj.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163skkpmskq.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163ndawamsa.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163qfumdevu.html

strlen(s)
来源：http://www.sxryk.cn/163dqejmwif.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163ocsbbynr.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163pnlevyrd.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163pzoobkrs.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163shmpdret.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163wrtiwrzw.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163lufeeipj.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ktvsbqky.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ojcksoni.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163oxakbyzg.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163jvuacrle.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163chupzwwm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163rmilciew.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163vcdxtpcz.html

fclose(f);
来源：http://www.xuanzx.com/163usvyymgl.html

[S12] C：写文件
来源：http://www.sxryk.cn/163ojslfcqd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163ihuaohdd.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163iplycqlu.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163sgrrqljo.html

[S14] C：枚举
来源：http://www.xuanzx.com/163mdclyxie.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163ltfadjes.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ftjtxdsm.html

(double) a / b
来源：http://www.aibaodan.cn/163laduippy.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163yijexyed.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163xnvvbyxt.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163yrsbcvyf.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ephqdcai.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163lzvochiy.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163rwiefudj.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163bzuxwole.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163skjyzgxn.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163arbszguv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163zvaboirx.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163anwszrsk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163pxqeujvs.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163hddhblao.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163vvgmfrqd.html

[S23] C：随机数
来源：http://www.sxryk.cn/163okpvcnvr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163qngihrch.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163ikzzlgxq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163cqpysobv.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163cnrdhstm.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163guitgtdu.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163cwjpefdq.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ikhpqbvc.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163dgekrjvu.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163uwmfjixz.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ranbnhpx.html

static int counter = 0;
来源：http://www.aibaodan.cn/163wppejlux.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163nrunpiph.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163wnwdwyxf.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163rohnvxcz.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ggfqtpyo.html

#define X_H
来源：http://www.aibaodan.cn/163qszxkvlz.html

#endif
来源：http://www.xuanzx.com/163mddguzkv.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163trjkpnqi.html

#include <iostream>
来源：http://www.aibaodan.cn/163dwdmvogx.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163enxfghhy.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ubwdvhnt.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163nluswmyt.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163cxsjowqm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163gjhahqae.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163lfjcrusq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163wrnrocla.html

[S35] C++：map
来源：http://www.xuanzx.com/163yjjagkyn.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163qzjgubom.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163psoqgfgn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163trssglkj.html

[S37] C++：set
来源：http://www.aibaodan.cn/163bdkdyloh.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163bvtuywqc.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163yhepkqee.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163iiqcsmuf.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163wpfarmet.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163dbojbvdk.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163pjgakfwp.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163amgvdcej.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163kewswuwe.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163mqzztctt.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ulvzpscy.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163dybtphjm.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163rjwhzlef.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163jsdsunzr.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163uoevwkkt.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163mjmnctmw.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163yxwfrivd.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163tsjrwanc.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163zkiedpli.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163wygvreom.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163xfaucrik.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163tnwqnbhe.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163pxusugxa.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163nloiebhm.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163kimnjuhv.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163fkrqcjyc.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163qjqvuakq.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163vlxdxrze.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163kvsmyccg.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163kwlwzgja.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163vwevimie.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163wasgaepc.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163ydrttlmu.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163regnexej.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163etlrnisr.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163ajpigggg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163txblazhn.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163zltqwcbd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163vcfdgfgn.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163yyaovhsk.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163xaxbvbxo.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163iwjkiyfd.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ehameqbv.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163nldlecan.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163eszuxusm.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163zeoeyuaz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163tbvkakux.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163emrjubqa.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163bpdkemjl.html

================================================================================
来源：http://www.aibaodan.cn/163fuxjcksy.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163wwcqjylx.html

================================================================================
来源：http://www.xuanzx.com/163qngvnbxw.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163mshlkiwf.html

println("Hello")
来源：http://www.aibaodan.cn/163vzfrffkz.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163sbfmlltp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163jcwlothq.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163wocdsnjw.html

"值: $b"
来源：http://www.aibaodan.cn/163pdtqbtqr.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163nvhwfhiw.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163rxfjonyu.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163egzxkhbc.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163lqsvwcfm.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163xuzkbfmn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163bxacqils.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163kfvgyhvm.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163rmlnwqge.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163ctgetkrk.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163wlsvwvkf.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163fnjtovta.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163agnmixlk.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163uluqrtos.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163knujlbln.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163xjrtoaln.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163gsmnlpfq.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163fabxuaxt.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163bmautzac.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163hjsgtaek.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163ukfgicha.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163sehyppsj.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163lgqcuhgi.html


<!-- 参考信息 -->