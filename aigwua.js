外链999!wailian999！

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163asxqkwxa.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163wpdovjam.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163vnqizgxu.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163axupctsf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163zhjhfwor.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163vybbhexe.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163wdgiczun.html

================================================================================
来源：http://www.xuanzx.com/163wpyayhmz.html

R. Bash 专题
来源：http://www.sxryk.cn/163bwdstpcs.html

================================================================================
来源：http://www.aibaodan.cn/163atjwywxq.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163bczoszww.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163bcmnphnd.html

set -euo pipefail
来源：http://www.xuanzx.com/163inogqtnu.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163swzspbto.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163awhvteuj.html

[R03] 只读变量
来源：http://www.sxryk.cn/163kkalhycg.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163vrjzokhb.html

[R04] 位置参数
来源：http://www.xuanzx.com/163ikmcmxsi.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163cbjvhkme.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163ethaabvn.html

name="${1:-default}"
来源：http://www.sxryk.cn/163hvajnkdm.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163vcseftvt.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163jcbuxerx.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163jqausgsl.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163zxhkjwnw.html

[R08] 数值比较
来源：http://www.xuanzx.com/163vddzopzu.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163rmdcgilp.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163uyawjifg.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163cflmwiui.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163kxggfwuw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163dimqzlht.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163ygemshzb.html

case "$1" in
来源：http://www.aibaodan.cn/163ksijremp.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163mflmfhhd.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163jufavxbt.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163nbbviikr.html

esac
来源：http://www.sxryk.cn/163hapohhqh.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163enyvzbvn.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163aigsxesw.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163miotckaf.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163iuacsshs.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163xxoxizaz.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ckvkgttv.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163asbdcvct.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163ghxlijme.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163lqgkgkfh.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163olzngxti.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ozzsmyys.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163lfdomgnb.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163mcoyoxii.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163ezubzmmd.html

[R19] 数组长度
来源：http://www.sxryk.cn/163urayevdl.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163yfdxkaje.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163jhepuutz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163jhrbwaow.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163wsxgbuny.html

echo "${#s}"
来源：http://www.xuanzx.com/163dtkbdkow.html

[R22] 截取子串
来源：http://www.xuanzx.com/163zzykjhby.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163oqgbomrh.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163cbccyeks.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163krgybywt.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163dyefvmkf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163nmxmsova.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163eoolycpb.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163vrnbsgfo.html

[R26] 命令替换
来源：http://www.xuanzx.com/163mloqkjor.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163scsufnrq.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163vdklkpww.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163gouaybyc.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163xjmswegi.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163yminhskg.html

[R29] 定义函数
来源：http://www.xuanzx.com/163wgfeqorl.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163sohvqrxr.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163pvwjprhb.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163byuzfmbq.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163cobecsal.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163gnraarhp.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163fffbfamf.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163mzfmmxcm.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163rxrcijzd.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163xurtzzeo.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163cggzqvvw.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163qmhfjvut.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163diqvhefa.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163endpwqkx.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163fvfjvrfu.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163yuknyzwr.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163wdhnwopd.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163nisqbpxo.html

[R38] 管道串联
来源：http://www.xuanzx.com/163bncafbqp.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163txvkuzlk.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163xfgsgtxk.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163pghejzrf.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163eolkhhpe.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163izhqxzuo.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163kfnqalwo.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163kushesrn.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163gwmcpdzs.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163eikmrpgl.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163qsbxwwno.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ubgrprrd.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163oqphpuwd.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163sddsyolu.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163lmpaspmb.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163tzpffkxt.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163wlzwfbon.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163qzzrinba.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163putmppdl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163kriqsoew.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163pctcknha.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163rirlytie.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163wgdkwcfg.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163tljddvvv.html

[R50] awk 求和
来源：http://www.sxryk.cn/163jkieamdj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163gkqablhs.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163fthmrebl.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163udjewvxw.html

[R52] 统计行数
来源：http://www.xuanzx.com/163vphpnmtc.html

wc -l a.txt
来源：http://www.sxryk.cn/163oznnpbmf.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163fmybrllo.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163xzwqitwd.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ahjsxzai.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163zelbjrqq.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163eagavmdk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163fwaotzfv.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ealqjpmn.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163xflbsoul.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163zrjvwiii.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163idcrlaal.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163aekbcisp.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163fvfokwjv.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163ddsuticb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ecqbdbun.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163lzaecfjj.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163mmrmgdrd.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163pnscttoc.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163xcngnxen.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163dlyodtuw.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163vbmjexrw.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163ktbuuvxq.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163gyqydlts.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163rauujjrj.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163hakxqkpi.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163tarlmscx.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163gefpvwmg.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163pyuacrmb.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163uzbqejkg.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163dvylnkaw.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163tuirlbdg.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163lpvngsqy.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163vsgugbxk.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163jmajkbqy.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163qfbsktug.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163ajqiqqgq.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163nkfqoyju.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163lettkusl.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163rctvzdqk.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163xejibdhf.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163fmcojsqb.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163hcdgojyx.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163kwaondve.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163aowbckrg.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163bamfykbl.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163vmcynrqx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163wfsuqhly.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163cgajhmgt.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163yjzmjhva.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163piizhvnw.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163snkpwgog.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163cvjnhjfq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163vlpcyzoa.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163gkweqkwf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163kvwoqnxg.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163tswmpqqt.html

time ./run.sh
来源：http://www.sxryk.cn/163ykrmsotd.html

================================================================================
来源：http://www.aibaodan.cn/163lvklmmmd.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163xqnqvpib.html

================================================================================
来源：http://www.xuanzx.com/163ufrhsfai.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163iydkulbs.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ftuvwdlw.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163wprplcjb.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ifdkeode.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163mzezlbsh.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163cwwkfpzc.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163osyyomzy.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163vksbhluj.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163aifpioxe.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163kqwrfybc.html

strlen(s)
来源：http://www.aibaodan.cn/163okpzquuq.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163oazygabx.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163whhozjam.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163sinzofys.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163fzdatozy.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163xplbpfdy.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163glbxrxsz.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163psqkwjsw.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163trqhbjlg.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163dtvjeeou.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163oezxzrns.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163uptprvzn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163ffjegxco.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163ihihqoip.html

fclose(f);
来源：http://www.aibaodan.cn/163mqxjwtzm.html

[S12] C：写文件
来源：http://www.xuanzx.com/163dknaighk.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163vmryumgn.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163cpimciiq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ghxlokye.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163jvaremfh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163pokeoslk.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163dmbexcma.html

(double) a / b
来源：http://www.aibaodan.cn/163eeimagte.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163xnqncgdi.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163blhymkhp.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163xojrgfwc.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163wzwfhqou.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163tosjgfzh.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163vnegiaww.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163qodpenme.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163duevilhk.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163cwzomedk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163tftiimcz.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163uaighoaa.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163vzuypnhq.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163gtjowkxs.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163xqfxbpdl.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ximraxfp.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163qomfzgju.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163nnmdmkzd.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ywrgnlej.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163opoppeoh.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163cdhrgcpe.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163kjlwiaih.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163qijbalbl.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163rlkdrqys.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163dwkzrknw.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163rkgxufmo.html

static int counter = 0;
来源：http://www.xuanzx.com/163msfsjuko.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163pcbolovo.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163xhhilsop.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163ledeendl.html

#ifndef X_H
来源：http://www.xuanzx.com/163dkmceopn.html

#define X_H
来源：http://www.xuanzx.com/163akovvbqg.html

#endif
来源：http://www.aibaodan.cn/163spmmkltt.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163ypsqasth.html

#include <iostream>
来源：http://www.aibaodan.cn/163egeccewq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163jhpqdpbv.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163qcidswdn.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163lwfostrk.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163idoaymxb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163wlyiepkc.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163iqdwwgqc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163joizvrxe.html

[S35] C++：map
来源：http://www.sxryk.cn/163meltqtpj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163arlinasp.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163nkyqxltc.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163dynojkbc.html

[S37] C++：set
来源：http://www.aibaodan.cn/163zsdezdny.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163uwyrsfra.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163hvltucvc.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163hjqjopdo.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163wbvxqmzg.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163stfrwscl.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163kxdqqkmb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163enbzywsk.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163xjhewleo.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163nzqigrnc.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163oapqvkjx.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163zhfwpvyr.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163jkznitso.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163descwikw.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163nqkkfiih.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163jyivmbye.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163epexogtw.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163qrwoogte.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163wbtxbgqe.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163oxypklad.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163edvqfady.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163owiyixzv.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163wrvejnnt.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163oeqqjkqx.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163cjgjwoba.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163eecavxmk.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163qjccsgaw.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163eeeniknr.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163tedkiapd.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163oyqjelcd.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163slkffflh.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163aolkmvmb.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163wloirsal.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163rvvsicad.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163czrzsbly.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163wpsdocsg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163woaivuay.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163rbccfnzp.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163pjdkyvnp.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163zmswndjr.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163xhuihqhj.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163pjtthxhe.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163kgxlpwqz.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163vnlvhhcc.html


<!-- 参考信息 -->