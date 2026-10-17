外链999!wailian999！

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163bkdvhpiq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163pvjfahzv.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163utoejcds.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163aaxxmicn.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163qcynthbk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163dcffscyr.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163dhibaqro.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163qljcivku.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163fvfghisv.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163wkmhcdvp.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163xwwhgeco.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163riporkgn.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163ppecewhl.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163atdbsqip.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163cqvirxsx.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163vmkqeuyf.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163mseygije.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163gdaqrjlw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ylvlfqgh.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163sxxdsreb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163molcquqr.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163dejvpfiu.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163jqpaolml.html

================================================================================
来源：http://www.sxryk.cn/163gznpjqhg.html

R. Bash 专题
来源：http://www.xuanzx.com/163yzxxhtwj.html

================================================================================
来源：http://www.sxryk.cn/163gsfpztjv.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163tiwtbxrv.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163cxhtywrl.html

set -euo pipefail
来源：http://www.sxryk.cn/163fhnhnzrb.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163yvribewg.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163ynpknlqk.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163todxuphc.html

readonly PI=3.14
来源：http://www.xuanzx.com/163eazuiues.html

[R04] 位置参数
来源：http://www.sxryk.cn/163lrtuycrb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ewvnhadx.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163jgbhhxks.html

name="${1:-default}"
来源：http://www.sxryk.cn/163igmitjcm.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163hwnzhzvy.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163miiwnzkb.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163mpceohyt.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163cpnznqim.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163vymjgdrw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163morfqahc.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163yjgbqwfj.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163ksqmarle.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163zgfwqglt.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163wnwzxxfc.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163fmsiaclq.html

case "$1" in
来源：http://www.xuanzx.com/163bwujxsbf.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163cgklmreq.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163ggokiegt.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163gncybtbh.html

esac
来源：http://www.sxryk.cn/163djpgekzp.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163pukxavdj.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163zxyaxsuh.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163hbowyqoi.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163soyfejlo.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163ittfdvxa.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163tfdoeybu.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163giemmtjg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163daohsgvs.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163cokccvcd.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163vfriffda.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163opbrbvvv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163buizulcg.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163rbvlfqhr.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163vcstcyeu.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163wfnkkiqn.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163tluwbecw.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163zmmhmued.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163czdpddwk.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163guqfyhsi.html

echo "${#s}"
来源：http://www.aibaodan.cn/163gtvwqadd.html

[R22] 截取子串
来源：http://www.sxryk.cn/163vkansstb.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163xcvdevld.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163gdffptvs.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163tkbdmomp.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163sozqbelv.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163wirvkdms.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163zbwbuacm.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163qqriftih.html

[R26] 命令替换
来源：http://www.sxryk.cn/163inakbkoa.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ghwthphh.html

[R27] 算术展开
来源：http://www.xuanzx.com/163feeknjao.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163khwylbjn.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163jfxerwgd.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163tagabbhv.html

[R29] 定义函数
来源：http://www.sxryk.cn/163dhzogcdn.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163tydtfecf.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163acguqepv.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163ybwkzwlq.html

[R31] 局部变量
来源：http://www.sxryk.cn/163zexxjoam.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163yucyobio.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163uujkybqr.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163ezrmtagm.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163vdxbipjp.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163pxmahppp.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163mfyggucp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163jrtemklm.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163jykhryqv.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163nntzfsyw.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163uhqymtry.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163eeoxopad.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163qgfqvhpz.html

files=$(ls -1)
来源：http://www.xuanzx.com/163mghrglmh.html

[R38] 管道串联
来源：http://www.xuanzx.com/163hsgbyxyc.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163giiklfvc.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163qctftpnr.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163zdnpjnwk.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163dsxbxlnz.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163zddmredc.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163stctdcje.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163apapurec.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163onfnuqwu.html

wc -l < a.txt
来源：http://www.xuanzx.com/163kbsjcrnc.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163nxgddwak.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163qgvlttxn.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163rstgywju.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163kdrzvhil.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163usfkfzzi.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163jacilmkd.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163dyhksgdc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163diurflap.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163kohmlxhl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163oeenkxsk.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163mcqlpnla.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163pxllbztw.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163uwfavikb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163mmcjwsef.html

[R50] awk 求和
来源：http://www.sxryk.cn/163dnrmwrgj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163uaxpxeji.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163pqrsvsba.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163eacrktvp.html

[R52] 统计行数
来源：http://www.sxryk.cn/163cibvlkur.html

wc -l a.txt
来源：http://www.sxryk.cn/163fbocurjh.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163ylckjbtb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163giojiiro.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163vzxtmzgg.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163mtyjavnl.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163uctipwma.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163vxvehbdb.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ddquoiuz.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163rjvnzgxa.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163ogitxwmv.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163wxpwmebr.html

[R58] 下载文件
来源：http://www.sxryk.cn/163nnejcopl.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163owotxkbz.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163zcjjfbuv.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163pmwjpres.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163uqbukefe.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163xifwaulx.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163jdqxqamq.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163pwdbjdbb.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163gewtmnfp.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163tguetgat.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163qdlbgxli.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163kjnlsjra.html

[R64] 结束进程
来源：http://www.sxryk.cn/163miuqtopx.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163mgesvxyb.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163hnwxvuru.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163pxitfvsp.html

[R66] 定时任务
来源：http://www.sxryk.cn/163vraetclo.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163mxaavysj.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163otupnjqo.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163ptytsuly.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163ptqbjjnn.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163srtpctaz.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163sqazixfd.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163ibzdtpal.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163nsjeasop.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163ehqduefz.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163bfpbdqow.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163cunezzpf.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163ylzkvvxo.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163xqbcpjkr.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163xwcihglm.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163nheebenu.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163xnepveiv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163oueinlzp.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163nselhypx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ysixlwwv.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163iiwvpeqj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163lyilxbwl.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163mxagvdxh.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163qpjlgjvf.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163pczvontf.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163cnfotxco.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163mdfasghf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163xtopttmh.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163lkhgnuig.html

time ./run.sh
来源：http://www.sxryk.cn/163bnlysrhv.html

================================================================================
来源：http://www.sxryk.cn/163vgctcfwp.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163gforqmqm.html

================================================================================
来源：http://www.sxryk.cn/163hcpacaob.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163lglloozu.html

#include <stdio.h>
来源：http://www.xuanzx.com/163fqovhvqt.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163maqrrfiw.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163illpydfe.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163uudvbdsh.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163oyfqpwlx.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163fjvtbmnc.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163nzyvvueg.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163qrvtgqvs.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163alwzhknp.html

strlen(s)
来源：http://www.aibaodan.cn/163ywuxualt.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163idewpzta.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163pvxfrfmv.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163xzeziwmd.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163rztpamof.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163wyhyudyt.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163bqpspxya.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163lvdbzyxu.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163aavrgefl.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163hnbptrrg.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163vxwvgvlq.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163zomxcjws.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ysjrcabn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163jzimfahd.html

fclose(f);
来源：http://www.xuanzx.com/163pyryzboa.html

[S12] C：写文件
来源：http://www.xuanzx.com/163bzrricsf.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163szwxljlq.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163kcexmobl.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163lwuptaqm.html

[S14] C：枚举
来源：http://www.xuanzx.com/163nvqskpjw.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163ztmpajjn.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163flajceqe.html

(double) a / b
来源：http://www.sxryk.cn/163fwiulgzw.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163abkptzlc.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163whiwtwvl.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163dfklxbep.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163bscaifxp.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163uowqudld.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163pbmorsxx.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163gqknksbc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163mrmfrfcb.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163lqbqhzlk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163yaymusor.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163yconmiuj.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163hzesabqh.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163epvoazzn.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163vfbwkmpt.html

[S23] C：随机数
来源：http://www.sxryk.cn/163wlfvfzko.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ohbdzyzs.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163nfmifsdj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163xpgwjctm.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163jodslxys.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163eitmcesb.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163oacmfzqx.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163cdxqzgkh.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163nizpcjyb.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163dmlfjhzb.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163fopfaiwq.html

static int counter = 0;
来源：http://www.xuanzx.com/163rrrrswkl.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ynubzwwz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163ovivlsxe.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163hvfkfplj.html

#ifndef X_H
来源：http://www.sxryk.cn/163jgnfnmzo.html

#define X_H
来源：http://www.sxryk.cn/163sggusfmi.html

#endif
来源：http://www.xuanzx.com/163xplilrtn.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163arymrxqx.html

#include <iostream>
来源：http://www.sxryk.cn/163kmlkjvmm.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163wdwxkgyv.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163cenpppba.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163hxyyyniq.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163fclerufk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163qqatsdxd.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163exwgqdbg.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163zisswpru.html

[S35] C++：map
来源：http://www.xuanzx.com/163roeqjeee.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163gpmhacuv.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163czoktbur.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163cltbpvgo.html

[S37] C++：set
来源：http://www.aibaodan.cn/163dphvfxwc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163bgcziqxc.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163vbfvaglm.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163yvatnjxp.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163eijoonwg.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163aofcjtqa.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163qwjhmbdu.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ormaisqs.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163lfdiujfo.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163sxnoymrs.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163qzuebzqy.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163uysfjngg.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163iruqppyx.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ejvjplia.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163bzxmtlfg.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163rslpzkml.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163gpzedsnq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163ecvzuazy.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163dmkjorzk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163cieigubw.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ggmpkhue.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163hbrioucx.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163llstyzao.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163giajzrsk.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163qemefgsq.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163dvrvxych.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163irpiksqo.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ewwcxsof.html


<!-- 参考信息 -->