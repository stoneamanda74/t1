外链999!wailian999！

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163dncpqdla.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163odttaeqv.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163tqatgcxy.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163wpwcayvj.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163dhizbnuj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163sizdavln.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163vkxaqqch.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163yumzxzej.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163fkvmqzou.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163xcgdxcub.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163txmrravp.html

================================================================================
来源：http://www.aibaodan.cn/163rubvnsna.html

R. Bash 专题
来源：http://www.xuanzx.com/163deeiivsi.html

================================================================================
来源：http://www.xuanzx.com/163bxadztrt.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163tvugzqou.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163lrewhjxw.html

set -euo pipefail
来源：http://www.sxryk.cn/163dibbhraa.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163txcawdpl.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163geooampc.html

[R03] 只读变量
来源：http://www.xuanzx.com/163fnacquqr.html

readonly PI=3.14
来源：http://www.xuanzx.com/163iuinrpgr.html

[R04] 位置参数
来源：http://www.xuanzx.com/163anptdsnd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163ytnepjva.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163vnzetlsd.html

name="${1:-default}"
来源：http://www.sxryk.cn/163jsavhpcw.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ebkykvqv.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163ezqeakdu.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163ifmgkbgv.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163susivzxg.html

[R08] 数值比较
来源：http://www.xuanzx.com/163denqzmjo.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163dtalnuxb.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163tvefhhvg.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163mgzpswzw.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163cgyogzst.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163hslkuyma.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163hnuvzpgc.html

case "$1" in
来源：http://www.sxryk.cn/163qxsmlwgk.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163aqqzicpq.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163nopbcywg.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163kgwkfvrk.html

esac
来源：http://www.aibaodan.cn/163ywddlqul.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163oyxvgqzz.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163aipfmlbe.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163mdxayhuk.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163mvwrjjnt.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163agmuyohz.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163ebrrdvwl.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163prwlahjz.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163bhzcliov.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163ljindcnx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163wyifzfev.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163afgsplll.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163tsxomdjg.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163efzsnlqb.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163zbtwzkni.html

[R19] 数组长度
来源：http://www.xuanzx.com/163tdljpmzk.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163wldvmpdw.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163bydxfjdk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ztjadytj.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163tqespkma.html

echo "${#s}"
来源：http://www.aibaodan.cn/163hfwpjbwh.html

[R22] 截取子串
来源：http://www.sxryk.cn/163vlzymsnx.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163uiviywra.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163fjbknxqc.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163wandblnq.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163hvkeubkw.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163dxxbznxc.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163kclbawcd.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163zofegyrz.html

[R26] 命令替换
来源：http://www.xuanzx.com/163lmgvrozc.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163hpznawzj.html

[R27] 算术展开
来源：http://www.sxryk.cn/163wcdgvxic.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ffavdmch.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163mqexlpky.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163oixqqmtk.html

[R29] 定义函数
来源：http://www.xuanzx.com/163wgtswcli.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ltsnhdku.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163idjdctem.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163jwagvfma.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163jxpyupxz.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163gkgiwcza.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ofhkdmla.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163bfaozqjp.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163zsoaxhoo.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163dtbxocwy.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163lmmnjysm.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163bnhntuef.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163isrlqpdl.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163nqlcmsmv.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163daheegjs.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163hupvympi.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163yswdgemw.html

files=$(ls -1)
来源：http://www.xuanzx.com/163ucjattem.html

[R38] 管道串联
来源：http://www.xuanzx.com/163awwebvhs.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163lxbnyunt.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163gvkfnase.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163dprsistb.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163umgsixib.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163kuvidjam.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163ouxhzplw.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163tocljebi.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163eusstphk.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163fhynzpfr.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163wpiwpfws.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163yscecfee.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163xmehxhas.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163txqidulh.html

[R45] 批量删除
来源：http://www.sxryk.cn/163hojyyrah.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163gecpfrxh.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163vhtmpwlc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163kfsbmwnx.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163chocbqyf.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163yiwdznkw.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163neplioxb.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163jijfihll.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163vpiujfzz.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163crimward.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163oorwxogf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163ufnousuy.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163hyuyxnwv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163qpgxjbwo.html

[R52] 统计行数
来源：http://www.xuanzx.com/163ljqvhaif.html

wc -l a.txt
来源：http://www.xuanzx.com/163aupfoxjy.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163qdjyslbg.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163dgjatxie.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163knvkxmqd.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163xonbqnhz.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163hsfqhfao.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163gidyisuz.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163nxjyporw.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163pstrzazn.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163frlwskdg.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163rsxutrbk.html

[R58] 下载文件
来源：http://www.sxryk.cn/163lnogdxmc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163teyhpbqu.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163ldtqephc.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163wxocsgpj.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163oipcvwft.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163nytjocqj.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163anafgajn.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163vrvwlkgo.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163nzctuklt.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163jhoqccdf.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163swkshthc.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163ztsqeywj.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163fjszlcoy.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163gtymyonu.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163akdigkaz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163uypdbzfo.html

[R66] 定时任务
来源：http://www.xuanzx.com/163dqqhshge.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163hahxrsyp.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163ayzrabvd.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163zsltnael.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163ukcjizsx.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163txfeewfj.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163oqzchtrs.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163bvbppawu.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163jfjsiinu.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163mtmlwjlj.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163gbplovxr.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163jnyqscya.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163nncinfsj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163dzeizjvp.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163zquumbbw.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163amdrvrhh.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ypbhophl.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163zjirewbj.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163fbtuvpdu.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163befzrqcv.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163caifkuzm.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163uritkrst.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163vndrwxjm.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ddmtrupl.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163jvvdnoge.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163qzozrjqj.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163ktdqbymg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163pchckedb.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163jeachnzw.html

time ./run.sh
来源：http://www.xuanzx.com/163icjljzqw.html

================================================================================
来源：http://www.xuanzx.com/163pfijzphi.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163zuywjbhq.html

================================================================================
来源：http://www.aibaodan.cn/163rxxlhyxq.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163feotbslv.html

#include <stdio.h>
来源：http://www.sxryk.cn/163cqfxcdfh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163pirlxqno.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163jnymkxay.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163swqbtfuz.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163ojafdjew.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163wlowmssi.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163gquajtoz.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163fapigftq.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163xgpnusqb.html

strlen(s)
来源：http://www.aibaodan.cn/163mapdckem.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163qzdlrhsu.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163twcpuhcy.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163fxngdofz.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163tbvtdsma.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163bdlwygsk.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163bxzdarsw.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163rpgdsedu.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163xovzwceh.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163cykpotuj.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163qmocqgtx.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163acdtijak.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163kyzsfyak.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163iqkoojxh.html

fclose(f);
来源：http://www.sxryk.cn/163tzjnpves.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163yagbipwx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163uwkmhvvd.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163fpmubaek.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ghtmvbiz.html

[S14] C：枚举
来源：http://www.xuanzx.com/163nftmwmlu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163jxibsixh.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163eueyekhz.html

(double) a / b
来源：http://www.sxryk.cn/163qjtmpwtj.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163jlzgsanj.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163mvxpmikn.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163lorjvskr.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163iwxuulqg.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163wlqewxoc.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163dceevhzg.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163dqeckhjb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163wreqolrf.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163xxpsiual.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163gmwijamv.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163bxkfiryu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163jbfftzmt.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163dycwevre.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163lratroqe.html

[S23] C：随机数
来源：http://www.xuanzx.com/163nxrgksaw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163crrokivn.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163bczzfbzc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163lyppncos.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163pcjcrwbb.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163udsyuara.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163bogootvq.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163hcntgcql.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163whtxxldn.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ydbcgxbp.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163ewvvsswl.html

static int counter = 0;
来源：http://www.xuanzx.com/163xoxehbzq.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163yatkjmge.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163sgynoyic.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163sbijhzax.html

#ifndef X_H
来源：http://www.sxryk.cn/163tvhcrkgm.html

#define X_H
来源：http://www.aibaodan.cn/163bkfryhyo.html

#endif
来源：http://www.aibaodan.cn/163gzhhvexz.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163fxzktzfx.html

#include <iostream>
来源：http://www.xuanzx.com/163qgfecidl.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163yedzyiww.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163cqgwqqzw.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163szjngukz.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163hojvcypc.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163qdbimdus.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163rabrkqka.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163rrfnddyl.html

[S35] C++：map
来源：http://www.xuanzx.com/163sxtmqguz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ddfhjuro.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163gfyiyhgh.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163njgozsjp.html

[S37] C++：set
来源：http://www.aibaodan.cn/163qhpnqofw.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163qbzbydxn.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163wssmlcaq.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163ywcbgyix.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163pkbiwbqy.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163mcmvchhx.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163dfxtwhhg.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163fycpftuk.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163vbaoldfm.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163uyytmgfj.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163yjfbbrfc.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163oauyulzy.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ibhleitn.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163xkushweg.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163yzjmbcic.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163blnwhxxr.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163bynufuvd.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163oecfneao.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163rddckyxb.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163bdqswkrs.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163bgkgwpfo.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163hlovjvti.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163qderjuwm.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163usmsqqml.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163elmymwog.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163crjextmj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163unwnpbon.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163yhugatmx.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163aylyejzq.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163pawacbvh.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163luudcezw.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163wvisrnco.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163afpnuxod.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163vsgkudfp.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163fuoioiwv.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163ikyxicul.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163pcicfwqs.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163hfrtbcoi.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163ysagemdy.html

[S56] C++：optional
来源：http://www.xuanzx.com/163cmkjkfbh.html


<!-- 参考信息 -->