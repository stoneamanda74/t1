外链999!wailian999！

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163bpmtiifg.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163wvffendn.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163mvimekac.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163vfqunlaj.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163exxcxllq.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163dqxswoyw.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163rtrrbjvv.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163bhlkqhtf.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163txsjjsdd.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163veydajdc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163kiudcarc.html

[R19] 数组长度
来源：http://www.sxryk.cn/163kxqzbyle.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163suiqhete.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163jltfsbjy.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ssggdofy.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163kfqrlcll.html

echo "${#s}"
来源：http://www.sxryk.cn/163qociwxce.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163wukoynzb.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163auiogato.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163yjnvvlnj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163cphlcudv.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163nxofvkju.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163tpwyggsi.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163unagiiox.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163rinpofwl.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163djtuwkug.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163zxdadiqu.html

[R27] 算术展开
来源：http://www.sxryk.cn/163cfhojhhi.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163usdsqbse.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163tdtqiowb.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ddpnosbm.html

[R29] 定义函数
来源：http://www.xuanzx.com/163nrqczgbs.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163hqgytypv.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163kcnqtjet.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163lctedlql.html

[R31] 局部变量
来源：http://www.xuanzx.com/163aldsfwwd.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163gbmfxtwu.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163wgqzpwrj.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163vgvoquqf.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163fsmrjuah.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163gzwxdklk.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163ehfffovw.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163azricpqv.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163crfrxjrp.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163gqdsnajp.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163zockjoar.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163bdhstzqu.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163spziscas.html

files=$(ls -1)
来源：http://www.xuanzx.com/163nmajrrrq.html

[R38] 管道串联
来源：http://www.sxryk.cn/163wfsqilyl.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163fhedjzoz.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163dgouepfm.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163siqobrvr.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163sigdzezt.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163ofaulqcr.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163pvtbgucs.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163lofakixm.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163ubvfiphm.html

wc -l < a.txt
来源：http://www.sxryk.cn/163ydfjzzrs.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163dixcpknc.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163iogoihuc.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163qsinaavt.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163hixpuacr.html

[R45] 批量删除
来源：http://www.xuanzx.com/163ygtvelko.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163kpwktlzx.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163jksxtqrq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163dsecjaqv.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163nhsvqqva.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163lsdtctnr.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163jjatxmea.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163qtjahuon.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163eoikmzwg.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163cihytmjn.html

[R50] awk 求和
来源：http://www.xuanzx.com/163ecdqsyve.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163kfluushf.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163nmqlfjhb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163huqedsvu.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163xsvysnum.html

wc -l a.txt
来源：http://www.aibaodan.cn/163lwrwaelr.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163relmoilu.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163ssyhcinc.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ryqykqrs.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163xvwcivfc.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163cnagrdtu.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163oowveegz.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163salscecs.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163hlcdycye.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163pjminvxq.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163vcxvkwlm.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163cojxpikl.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163laredjht.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163tgsgxceq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163knqyqvgc.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163gqasqbua.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163kmxindsm.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163oiimlobe.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163joyehbdi.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163otvhuvby.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163kzricedx.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163iuhvzrpw.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163fzuinlfq.html

[R64] 结束进程
来源：http://www.sxryk.cn/163lejayhrm.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163vzrfhidc.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ykgklwzz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163ifqwsdwa.html

[R66] 定时任务
来源：http://www.sxryk.cn/163dainodpe.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163okczqaof.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ntbizpsp.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163acfgwjlj.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163hymmdfbn.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163tlwwrpzf.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163gjaoufom.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163ketxscjv.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163muueolcq.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163leypgxbh.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163ghpontcv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163gwfuxvia.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163tmzcohvb.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163bugvalfw.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163pnwvtubw.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163olksmdgp.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163olkigmxs.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163pposoazo.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163onbxpxso.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163axomybqs.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163kmmhqpqw.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163vtcgyjed.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163nmedmpba.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163jjlxfvea.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163pqdazjdh.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163cvlvnghp.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163rccootvz.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163hclxnahc.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163hzjjvqtv.html

time ./run.sh
来源：http://www.aibaodan.cn/163dhanusfh.html

================================================================================
来源：http://www.sxryk.cn/163xttdudcm.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163vqbiiddc.html

================================================================================
来源：http://www.xuanzx.com/163gqrclvnm.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163iqoimfbj.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163zoekdjeg.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163yjxrupvx.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163bbfxdahv.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163daxqnfzh.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163qsqjctgx.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163ynpwykba.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163lmtxziuf.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163qhthhqwt.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163rkpmxudp.html

strlen(s)
来源：http://www.xuanzx.com/163oijxaedj.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163bsfdrzkt.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163cdadpzjz.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163xtqiiroa.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163gkcaqffs.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163oeotdivb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163zeiaeyqo.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163qannewqu.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163tkbiakge.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163qetvygmg.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163aqilexmv.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163fstidvvj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163jrplbpre.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163dfnrnymk.html

fclose(f);
来源：http://www.sxryk.cn/163xkdowxfp.html

[S12] C：写文件
来源：http://www.sxryk.cn/163wtehpgto.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163sawgkdas.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163iugjjpch.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163thmfptyc.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163meehbhfq.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163ncscfdly.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163kubxitng.html

(double) a / b
来源：http://www.xuanzx.com/163btwehcua.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163zawjfhtw.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ujltvpfv.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ffznvqbe.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163fpoynrkr.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163hgymmuas.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163zsvzhtqw.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163fhcwvnsr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163uynslkud.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ejcovslz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163kvkqmldo.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163syyouhif.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163secwenkx.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163ncfznwdg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ijhrchep.html

[S23] C：随机数
来源：http://www.sxryk.cn/163siqyhnlo.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163nxzgojbn.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163snlevaxx.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163fboythgi.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163gghguxvs.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163fmkpdeic.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163qqxroyys.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163qckkhpag.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ygzmukhe.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163xhrmcfpy.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163vomibezw.html

static int counter = 0;
来源：http://www.xuanzx.com/163sfbxtzji.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163omxzcsde.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163mchgfmgx.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163vlavvpdj.html

#ifndef X_H
来源：http://www.aibaodan.cn/163akllkznq.html

#define X_H
来源：http://www.aibaodan.cn/163djsuvyrb.html

#endif
来源：http://www.sxryk.cn/163rjkgowww.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163nicwtiog.html

#include <iostream>
来源：http://www.xuanzx.com/163hvevpjam.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163yuuawtre.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163rtnhaihn.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163ifckswrg.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163rsurynbb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163dndimcjt.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163ocamnnri.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163nfiouubd.html

[S35] C++：map
来源：http://www.aibaodan.cn/163fxuzpmtw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163zatiiepn.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163javnjodd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ezvfbipj.html

[S37] C++：set
来源：http://www.xuanzx.com/163mnpikfag.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163mjhefirj.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163vhybvnmg.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163mnwgiakd.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163zgbvrnor.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163agjcquxz.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163xmyepxyl.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163mfjnbhqm.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163ltxmcymx.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163zxpwdpop.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163hftrukvc.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163yaropqce.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163ujacnptn.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163wgpkjqup.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163lbvgdzib.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163bxvaqrxv.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ztzolmlv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163pghcpkux.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163bahscpga.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163mirqskis.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163vmcllnrh.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163vdgwdqjc.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163pgmhfcpg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163awxhobfm.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163orrsmrmo.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163qexslycr.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163fxetlptd.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163isllvmri.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163byqmeoip.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163vwkxcwhb.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163jbiamrny.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163iplgfvft.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163kuuohghm.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163kcnwrmsp.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163mcxxkqlm.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163rbjfelux.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163seddfipy.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163epnwxowz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163jxxwotwa.html

[S56] C++：optional
来源：http://www.sxryk.cn/163egugrfpi.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163biyubbrc.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163vvaxtout.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163vsaavmzy.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163bifergfw.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163bvtstsmx.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ngaowrru.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163hgldnejw.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ncfqcmws.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ixmneljp.html

================================================================================
来源：http://www.aibaodan.cn/163pdgkomnb.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163zgwrkkus.html

================================================================================
来源：http://www.sxryk.cn/163tlbjbqbt.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163lfasbvbx.html

println("Hello")
来源：http://www.sxryk.cn/163ckytqreq.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163vgjanrer.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163ndsxzoed.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163yoqtppfn.html

"值: $b"
来源：http://www.xuanzx.com/163vfkfyjsb.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163ivtwcnvk.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163vmyigegz.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163mikijykj.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163yxyocawu.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163hscgkqmw.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163pqokmfwd.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163voovrzbe.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163zfsixtod.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163fnbstnez.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163dcuvlape.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163zcdbkzsf.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163lypujlws.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163uqmknhfn.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163gehppglu.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163ykdficpo.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163ypjlwpet.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163kvsjvqzk.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163fndewfvi.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163izzzlvkt.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163izjuveha.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163yclqjvln.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163cswdnsoe.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163umiiwuxx.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163xounmskd.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163bswgwmlm.html

print("Hello")
来源：http://www.aibaodan.cn/163cgyblwue.html


<!-- 参考信息 -->