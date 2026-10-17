外链999!wailian999！

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163viabunvw.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163wzkvlkpk.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163gshwwbeb.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163mjebhmon.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163olpldphl.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163kzpojsqv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ptiqhunn.html

================================================================================
来源：http://www.aibaodan.cn/163flhjbttu.html

R. Bash 专题
来源：http://www.sxryk.cn/163uonwcqvq.html

================================================================================
来源：http://www.aibaodan.cn/163rcmpgqxc.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163fotgrkwq.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163vordjxbg.html

set -euo pipefail
来源：http://www.xuanzx.com/163phocugmy.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163mpusqcdn.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163mnujaogv.html

[R03] 只读变量
来源：http://www.sxryk.cn/163zrrucfmm.html

readonly PI=3.14
来源：http://www.xuanzx.com/163yozjcqii.html

[R04] 位置参数
来源：http://www.sxryk.cn/163dlcjegbl.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163nrgsfbrd.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163tiualvse.html

name="${1:-default}"
来源：http://www.sxryk.cn/163cseosmsg.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163lhmwcbie.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163udoyppsi.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163ytxctshy.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163oqxlsvhn.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163chvqtxcf.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163qkcrsdwu.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163jcvkfalo.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163hwantxtq.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163zvolunzv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163apxmvyau.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ekrdsucn.html

case "$1" in
来源：http://www.xuanzx.com/163dfilsccm.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163kgbunglb.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163pmgfpnul.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163cuaoeuhb.html

esac
来源：http://www.aibaodan.cn/163sptedyvh.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163dvlzvkml.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163fqdjtghb.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163djievebh.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ovlrijzc.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163plsezsox.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163zsxmeuqh.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163lvrnxomt.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163xvrwyvvn.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163nbppszft.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163jfgkmihk.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163rpoofclz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163izgedtbh.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163gzsagdjp.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163hncqecbp.html

[R19] 数组长度
来源：http://www.xuanzx.com/163udjlcsnx.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163mjgxhxvx.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163xcrduiyb.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163cbtwfjac.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163opfieiwm.html

echo "${#s}"
来源：http://www.aibaodan.cn/163pdfpympr.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ffmvnxtp.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163ixufghqa.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163pgbyglqs.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163yqnaarnn.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163cyorlkup.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163gqzrdyle.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163wgnwbnkw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163bcbdxbvz.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163zuxyhfrh.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163gjclxpuc.html

[R27] 算术展开
来源：http://www.sxryk.cn/163crggutce.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163nxcskgpc.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163chnotozu.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163hyfocprt.html

[R29] 定义函数
来源：http://www.xuanzx.com/163fuxpiosa.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163wxoyjagq.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163ywzeqgkb.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163vcsygrum.html

[R31] 局部变量
来源：http://www.xuanzx.com/163baehpzfu.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163nsiwukkb.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163ilrtgbwj.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163slyebpin.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163lwkoysxl.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163ibfzunvl.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163mpmhegop.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163odglylga.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163imijxhrq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163ylgnqomt.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163pkfvmlon.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163fboygfax.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163iuxijjww.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ttzpddlb.html

[R38] 管道串联
来源：http://www.xuanzx.com/163jnsfetbj.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ymhyzxkx.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163ypgxcvnt.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163bihnwvbl.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163uymmprsy.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163blzulhog.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163beaawwng.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163mtmrwkad.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163rhsfbunj.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ldhvgqyt.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163wfsoqwnr.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163znjsivpx.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163ausxevgs.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163zbewgrvv.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163bilytgtq.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163wddbllwq.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163vqdoeeuh.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163eerwdbdq.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163rmzfpwpc.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163vltxlxev.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163hoygzisg.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163hiwjufkr.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163uloyodcm.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163uqdmkzvv.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163drprlsvq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163gkqtsxbb.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163eumusufw.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163spltjjqr.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163oyhmjfmb.html

wc -l a.txt
来源：http://www.aibaodan.cn/163uvfluwjx.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163ipjtolvk.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163nlxwilqw.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163cshjpijz.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163sayzruiv.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163pmrcklsi.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163feitffuk.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163ixdzdelg.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163dsbfxyyv.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163qrkzattg.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ppsjspnb.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163ezyaadog.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163bjhourjk.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163gybooptd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163yeisjqya.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163abnjohkc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163izybyaye.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163wsjybpvi.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163mgkzncga.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163ravxrmen.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163ortxswkz.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163xoefxsyl.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163acjehxmz.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163mrnecisk.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163idbpgkir.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163ququkhds.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163uqzswgja.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163fhidbdpr.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163loiazqrc.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163bxtdgxex.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163qvjfyvlj.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163apcumagg.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163ybulkryc.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163zbxjwgdw.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163dmnkqbol.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163gdamdcdm.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163qdvirijx.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163lxvbtnez.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163pfjopjhs.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163aozopwvk.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163adlezcrf.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163hqzuqzvl.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163hqljxxcg.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163xvaxfcya.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163insyeqgq.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163vwmrwint.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163wutjwhjh.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163lpwlcavs.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163bhrjhpsw.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163oyojviab.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163kvyptglh.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163okyekdaa.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163rnglslrt.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163dnvfrffp.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163hjninklp.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163pmjtdicr.html

time ./run.sh
来源：http://www.xuanzx.com/163zvlsrsde.html

================================================================================
来源：http://www.sxryk.cn/163wuqnvqgo.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163jzqgcxqi.html

================================================================================
来源：http://www.sxryk.cn/163xxevknii.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163agzkqzai.html

#include <stdio.h>
来源：http://www.sxryk.cn/163wlgmissa.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163mqmdxbrr.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163bvkhjzwm.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163gkecmixw.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163aofznmuz.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163qqlsiswv.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163eipkvcfz.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163jvdkzygg.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163uhhlvqxa.html

strlen(s)
来源：http://www.sxryk.cn/163pocitqdy.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163derbqokf.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163yfbzznug.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163fydhfizp.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163kazzzonp.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163wwxumczx.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163omzilhgv.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163megrzvrp.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163emrhttsq.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163jvfkzqgt.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163yhmvvggs.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163wjjyggwl.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163xatsfjvb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163efluhxyh.html

fclose(f);
来源：http://www.aibaodan.cn/163wyidsiif.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163exkdnooz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163bawkwadp.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163xbejexnq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163kthglgpm.html

[S14] C：枚举
来源：http://www.xuanzx.com/163aadetnmo.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163dwblbumf.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163vrjcxfaa.html

(double) a / b
来源：http://www.aibaodan.cn/163gpjmleqt.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163azxoacbn.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ogqdjqnl.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163fkghfyce.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163xilkudep.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163xpoiyeij.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163otwcrvcc.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163ghruucoi.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ddjrjzgx.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163myrtbimx.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163xremvfla.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163eibfqbwv.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163gzfxcoaz.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163bpfalxja.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163hrqjeagl.html

[S23] C：随机数
来源：http://www.xuanzx.com/163fnoljnex.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163elkxrhdx.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163zmpozqrp.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163nqopvpgv.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163fxrtfvqi.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163lhghhblq.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163jcogyrzf.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163ylzauyjt.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163evpazfnv.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163azypuvdr.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163dtcfoggr.html

static int counter = 0;
来源：http://www.xuanzx.com/163tllpnxtk.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163atqtaizh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163ontzirjb.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163fwcykrxv.html

#ifndef X_H
来源：http://www.xuanzx.com/163ehczwklr.html

#define X_H
来源：http://www.sxryk.cn/163vutmfxjk.html

#endif
来源：http://www.aibaodan.cn/163jolzjabw.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163smacmxzv.html

#include <iostream>
来源：http://www.aibaodan.cn/163iaptmnpa.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163mrkcpqeu.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ticgexqx.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163eiulhrif.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163ujfojkgt.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163jjspdsyw.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163ejlmgago.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163pfajlwvb.html

[S35] C++：map
来源：http://www.aibaodan.cn/163zubiejyd.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ugkjhlaz.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163gkzxteyl.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ltovalgz.html

[S37] C++：set
来源：http://www.sxryk.cn/163mgyvabpd.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163hnowbkod.html

[S38] C++：排序
来源：http://www.xuanzx.com/163yxshmeln.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163yijvovsz.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163pzcnpikj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163vzcxuyas.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163stldoxrt.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163znhtgcca.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163brhmlhwg.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163mhdnpged.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163uanrgjny.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163qhgozfkc.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163saxwyxea.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163kglodwgb.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163pkbfdoxe.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ueqmxmuw.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163vuuskqmx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163gssgxmnj.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163bofyltji.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163cpzdvyhm.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ykomuvmi.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163vguvakvw.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163wcdpgudp.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163dtphtita.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163cngphkum.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163kxyagkfd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163acpjness.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163obxkgbzr.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163yoomjxvk.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163azpamrlg.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163lltrbibl.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163iwgugwtt.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163xeejagjm.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163edrhbhlz.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163cqatjkpv.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163badhmujy.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163xafzxbjl.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163ogkiwlkx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163pyvrevpy.html

[S56] C++：optional
来源：http://www.sxryk.cn/163rqizgrot.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163xlqrjyrf.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163kmxayyef.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163rkoekycr.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163krxeuqkg.html


<!-- 参考信息 -->