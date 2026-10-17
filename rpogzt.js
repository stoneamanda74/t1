外链999!wailian999！

case "$1" in
来源：http://www.aibaodan.cn/163waghejlr.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163rngvtwyt.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163tsqsvgqu.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163kzhdqpgf.html

esac
来源：http://www.aibaodan.cn/163xwlvleea.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163ucrxtwhb.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163oyepgqzl.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163ghnuepzi.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163gexqrffa.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163moeiqjgb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163ppugonxk.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163qnnnyevs.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163lekeebof.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163pkuvexuc.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163bxjuepwi.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163gfmufcpn.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163mcrkzvwy.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163fqtndqjg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163mwugaqea.html

[R19] 数组长度
来源：http://www.sxryk.cn/163xcljuhky.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163utijlxwc.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163impzasdd.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163tykapvce.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ombqrpyg.html

echo "${#s}"
来源：http://www.aibaodan.cn/163xnffbocz.html

[R22] 截取子串
来源：http://www.xuanzx.com/163zsnnvhxe.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163ywxlehfh.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163uiijssvf.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163jvnlgdiv.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ebnwcucg.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163vaczcmvx.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163oymjqnvo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163desebbes.html

[R26] 命令替换
来源：http://www.xuanzx.com/163rowddgjm.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163zsxchkqb.html

[R27] 算术展开
来源：http://www.sxryk.cn/163suhtaqdq.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ijwppect.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163vpqtipea.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163lvjuydpv.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163pcruabhx.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163pmzxpwlj.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163cfsuqtcr.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163xbovelki.html

[R31] 局部变量
来源：http://www.xuanzx.com/163caqtnnxu.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163jhvzxfdo.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163xskemzwp.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163rkbmzltr.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163owwnvffn.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163ayolmhqq.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163baqrowwy.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163iechreta.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163fawkjlst.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163hupiauhy.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163qwpadcsr.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163iwvudbza.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163icnjlbln.html

files=$(ls -1)
来源：http://www.sxryk.cn/163hgkgnuuc.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163gjpugpbl.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163fblrizab.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163wzodfdhk.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163grgggjti.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163hgriqclv.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ouqojowr.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163jrwwsdzc.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163fkzaprwg.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163hxjnzafc.html

wc -l < a.txt
来源：http://www.sxryk.cn/163ufgsfpwb.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163wgjkiezh.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163tyquxwuf.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163cioqsosn.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163xcmglsxe.html

[R45] 批量删除
来源：http://www.xuanzx.com/163zvisspgg.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163ggdwcktn.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163ptchwbxr.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163torqpfta.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163kdujnqot.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163netcslro.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ecjlrplt.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163mmgdrgog.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163tonqtxtv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163mwwehzge.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163aypgxofe.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163reowrqqd.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ibtrrlao.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163ykgesmmq.html

[R52] 统计行数
来源：http://www.xuanzx.com/163ofaeluxb.html

wc -l a.txt
来源：http://www.aibaodan.cn/163hjfkulrf.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163ndeagnpc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163kvwhqokx.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163hjopwnrk.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163xjgtnyod.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163zfpwnkww.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163fwkmhczl.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163chnwmjef.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163jietjmvv.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163vzmdmglk.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ywmimfhs.html

[R58] 下载文件
来源：http://www.sxryk.cn/163qelnzhmy.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163hkffkfpa.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163wuvfzkfd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163bwlmucvg.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ollkufnd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163xiphxrwa.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163fzsyasnw.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ksyadppm.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163pqblnebs.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163ykuulfdw.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163xtmvbbwk.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163wzjwesko.html

[R64] 结束进程
来源：http://www.sxryk.cn/163dgawsagp.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163ekbpduli.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163egiepbar.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163awtguuen.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163licbqyyo.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163kgarhyuh.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163umzelyxh.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163rogwlwci.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163dlgfkmza.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ktgkguuh.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163wzcufxfx.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163rjrcspip.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163omspquat.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163dkehxfmt.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163xgguhpoa.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163frobleuu.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163inxlxtti.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163eamucpra.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163mndtmwnc.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163zpppvhor.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163lwofkxqt.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ritqgypb.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163olehsyhu.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163jtbmfgeh.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163dyrvpbfw.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163clzpqqgq.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163baptnydu.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163dzoainyt.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163jspmgvxi.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163cwwsbdya.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163vldcgdci.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163eboqmatc.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163khiomkqw.html

time ./run.sh
来源：http://www.xuanzx.com/163tigfvlsp.html

================================================================================
来源：http://www.xuanzx.com/163ottnqlfq.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163upsjvjgp.html

================================================================================
来源：http://www.xuanzx.com/163viwsynpz.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163buuginhy.html

#include <stdio.h>
来源：http://www.sxryk.cn/163iqyfaygf.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163josrfheo.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163wlugnaym.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163dqnnvjwo.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163gqabjqke.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163ckmzuoau.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163qptprucu.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163wcwwmdvv.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163dnhimqug.html

strlen(s)
来源：http://www.aibaodan.cn/163lrjprpoo.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163fwjipupb.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163cuoghtms.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163lljkbrwl.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163ytlllzkr.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163npicxbrg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163uwdnkwyj.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163wigtgfyz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163lbicitog.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163llrojmfx.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163wpnhktpj.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163zhjaamfx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163jolbgwqy.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163ozydjytl.html

fclose(f);
来源：http://www.sxryk.cn/163wcuyaaih.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163uqjdqyot.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ommroywj.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163yjrowncz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163gytfnabe.html

[S14] C：枚举
来源：http://www.sxryk.cn/163cnzpdlfr.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163elxmbayt.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163mqntkfwm.html

(double) a / b
来源：http://www.aibaodan.cn/163hznzewne.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163zhgtyphn.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163bxzvaorr.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163gubgpwrd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ztrhzjhd.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163kgmmxvry.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163zbkyynns.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163wkrntpzr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163yviqwuhi.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163labkawxt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ltoonbcm.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163eorzgvwm.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163hkabqxah.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163rnjkyrdl.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163prtefnoj.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ibucorrv.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163iiafubyd.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163axkdnzub.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163tldmjnuy.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163frcoecsq.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163epwnanks.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163dhbticiu.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163hrthszyy.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163gmteymvi.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163qoxhpmig.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163fyvexkwr.html

static int counter = 0;
来源：http://www.sxryk.cn/163imkqzvik.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163lsjofqpf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163xlrwqjhq.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163vkvtwjce.html

#ifndef X_H
来源：http://www.aibaodan.cn/163eptbncjb.html

#define X_H
来源：http://www.aibaodan.cn/163dzztpgqq.html

#endif
来源：http://www.aibaodan.cn/163ngqxncaq.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163mwtvxdoi.html

#include <iostream>
来源：http://www.xuanzx.com/163wttfxkrp.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163xwkqoldw.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163cufqcpvx.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163odxhwmlq.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163oulrpeep.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163rjvkpebr.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163zupkwmdh.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163brvfynoc.html

[S35] C++：map
来源：http://www.xuanzx.com/163cqenncld.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163wdlhwnoy.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163jnmsrdkr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163tgxxyboz.html

[S37] C++：set
来源：http://www.xuanzx.com/163okwpdwqh.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163qsljrbln.html

[S38] C++：排序
来源：http://www.sxryk.cn/163cjswcwpb.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163qdwyrhcu.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163hhkazesm.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163dbmgyrkq.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163hlnfpbof.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ujbucdby.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163rrstxark.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163zpqqobym.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163djxidroz.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163rrwoztfu.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163dwikxtrd.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163ieeyzjjg.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163blhfkypm.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163fyeayngj.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163uscotzal.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163rpvhcpuh.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163thotnctz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163muriphus.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163bdaazqny.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163iaqbgndb.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163oflmmywt.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163qqmmyfpo.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163kqropcct.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163ehrwdpsq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163jrsmytvy.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163dexxczaz.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163jpgchuxv.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163evnxsasv.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163hbjgxgbr.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163uqrygvhn.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163phvqvbss.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163evsceujb.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163cryxdpkg.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163cqkunblb.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163ihxflrxm.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163qfrkoloi.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163hiojrois.html

[S56] C++：optional
来源：http://www.xuanzx.com/163imeoyzsi.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ujvrvndy.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163mifvjdjz.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163owagjfnb.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163goqhxbff.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163uycvfppg.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ukgxyxto.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163nuxovkaa.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163xjdvclvw.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163bgnfiubv.html

================================================================================
来源：http://www.sxryk.cn/163jxlxybvy.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163dxkxidqs.html

================================================================================
来源：http://www.xuanzx.com/163qmqkgkhi.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163zjusdzex.html

println("Hello")
来源：http://www.sxryk.cn/163rddulhmt.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163rlhpviiq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163mcnmqciv.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163kczuzrso.html

"值: $b"
来源：http://www.sxryk.cn/163vxzgmtqt.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163appjpdpz.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163lqnivsiz.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163isehcewc.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163gsittpdy.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163fezkesmn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163nalarvhw.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163zhophamy.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163johvwmyw.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163xnqoeyux.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163rphsbanh.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163btvlncqb.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163fdmvlpxh.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163climwpwo.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163grmervje.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163javegeot.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163kdqasevs.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163tbiapbsd.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163ayoqntbr.html


<!-- 参考信息 -->