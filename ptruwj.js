外链999!wailian999！

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163dkuhshhg.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163sxqcybhi.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163pjmbtqtp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163scwhgmli.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163hwyckpie.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163qjjbmxvl.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163ddztebbt.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163cqgujwmp.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163kthubsbn.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163kkymilpo.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163yqhafhoe.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163vemgausi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163otpbaktu.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ivzhagww.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163qggtgegq.html

================================================================================
来源：http://www.xuanzx.com/163ghcqcyra.html

R. Bash 专题
来源：http://www.sxryk.cn/163godtwrtl.html

================================================================================
来源：http://www.sxryk.cn/163bcyiaecg.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163xaymrsdy.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163frfmrgwv.html

set -euo pipefail
来源：http://www.sxryk.cn/163uiffedod.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163ncgcuhdk.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163iqhppftb.html

[R03] 只读变量
来源：http://www.sxryk.cn/163sgdjxzsw.html

readonly PI=3.14
来源：http://www.sxryk.cn/163znihedcl.html

[R04] 位置参数
来源：http://www.sxryk.cn/163spljmtwj.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163qdgvrcqr.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163pxcvepno.html

name="${1:-default}"
来源：http://www.xuanzx.com/163eafrckcw.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163yavufwid.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163dqwtdewq.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163zqqhedsp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163abcsxsqw.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163fesbtqmt.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163cpxachdl.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163vjzshuoa.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163fjyxolnz.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163bmnvzeug.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163ikisoywq.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163bpiccpcu.html

case "$1" in
来源：http://www.sxryk.cn/163nonpasoe.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163afjmvief.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163nuqzbjsk.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163jcyvdhru.html

esac
来源：http://www.sxryk.cn/163bermtkof.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163ssnasavs.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163dygpidiu.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163sqkazzvt.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163cufbzpri.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163quzspzzu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163ogesftdt.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163yjxyqamp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163oxmrdxry.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163rlpxgdyb.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163kfuvlidi.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163wxtldfqw.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163wfzbbwiq.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163xsdnqnqk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163djzbjvft.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163sgkiixzk.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163fupamgsq.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163fckwylxg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163mixhnocm.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163evkxqbdl.html

echo "${#s}"
来源：http://www.aibaodan.cn/163fbpjjcbs.html

[R22] 截取子串
来源：http://www.sxryk.cn/163cezgdtto.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163aelqwwll.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163cyukoouy.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163cukmdnxm.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163jgervuyk.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ufvwkhkt.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163xuunqcem.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163unhlfjww.html

[R26] 命令替换
来源：http://www.sxryk.cn/163kewinhnh.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163hoodwtmw.html

[R27] 算术展开
来源：http://www.sxryk.cn/163kkyuccwy.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163wudphzbf.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163jtpveinw.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163ghlfjhhs.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163qyjvptme.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163airrrxyf.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163beziqbyw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163frmatkks.html

[R31] 局部变量
来源：http://www.sxryk.cn/163gvzizwqb.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163poeuxbse.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ezcwfrop.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163vscrxwjn.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163sippdsvq.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163akiruhzt.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163nvpshzlc.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163mxaeissv.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163togsrsay.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163diayffse.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163tmlclhga.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163nibcszbb.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163uapepago.html

files=$(ls -1)
来源：http://www.xuanzx.com/163mvnvihyn.html

[R38] 管道串联
来源：http://www.xuanzx.com/163xqqwsfli.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163zvlsydzn.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163dopizaux.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163zyhswnsf.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163jzicceuf.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163evkotuec.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163xgrnlaui.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163ogjaaccf.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163kluqjbum.html

wc -l < a.txt
来源：http://www.sxryk.cn/163dtyoqxpq.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163hgbzmirj.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163nzifcdfo.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163bhmxasig.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163krgmmqll.html

[R45] 批量删除
来源：http://www.xuanzx.com/163uapcglxp.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163nkfedrhp.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163wlnpgqic.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163wmaorhoa.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163mjssoabx.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163nuvnrdwp.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163uhvgicao.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163yzluevkk.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163iszbprop.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163imusduwt.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163fqyjrzqw.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163oqnmsdkq.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ehhbzzze.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163jcltimvk.html

[R52] 统计行数
来源：http://www.sxryk.cn/163mtpzsjen.html

wc -l a.txt
来源：http://www.aibaodan.cn/163ytolnkxc.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163kqbeiobv.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163vgdxukek.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163rdiveltu.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163appvdglv.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163tsshwmfy.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163sjvrtihr.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163kaqvurzh.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163sntrnmll.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163gtsnrwaq.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163czchdynd.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163aqophydi.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163hvfcrrxf.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163mtwefxva.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163jfkmbgew.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ikklfyyo.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163alfhumpj.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163uudwdnin.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163discnmwx.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163ebjbnmsf.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163owagqydn.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ibmbslxh.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163jefluxvl.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ziqyjxzu.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163rgyhnviy.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ycgdjpzf.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163popelgva.html

[R66] 定时任务
来源：http://www.sxryk.cn/163dfpiacxv.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163sfgljwur.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163hdguwfca.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163mmdcyyso.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163uumtjibp.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163cxnlbzkv.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163qctebczv.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163bxllkcll.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163hntaoqsz.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163pnhlevhd.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163psknomnv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163wraalnol.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163bndcvngs.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163iwrgmvqe.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163rqxkicpf.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163vtzdhonn.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163isxxuwpz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163qdgymfsj.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163tbzvwsqb.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163jpdzrooq.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163tjqxlzpd.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163jfmewvfn.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163nocvwjem.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163qjpntngn.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163llvxqeic.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163hwjccyid.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163uixcnimu.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163nugxqlcs.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163wujdkcpv.html

time ./run.sh
来源：http://www.aibaodan.cn/163uvxshjki.html

================================================================================
来源：http://www.sxryk.cn/163zlyyhjfq.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163bhvxvraz.html

================================================================================
来源：http://www.aibaodan.cn/163eyqldhbs.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163omdqwdli.html

#include <stdio.h>
来源：http://www.sxryk.cn/163voxffzhk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163vujtubll.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ziuofcgo.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163wypevedl.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163hglysife.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163juhglivt.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163eqvmgued.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163dvakbzdy.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ksfzaost.html

strlen(s)
来源：http://www.sxryk.cn/163xpmefril.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163xolxloqu.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163fnaztyrl.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163xxwrtwqo.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163xyzozgsj.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163fnmvkgog.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163untxsqre.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163jcfqswkg.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163fnunrgpn.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163fxslaeiy.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163rrboqouy.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163kqvnrzfq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163rlxgwgcd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163viliwawu.html

fclose(f);
来源：http://www.sxryk.cn/163vpzubhlc.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163kejngnef.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163yvehycbc.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163ofoixnam.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163rpdulfvw.html

[S14] C：枚举
来源：http://www.xuanzx.com/163vcemckmv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163otvtxuke.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ejxqixti.html

(double) a / b
来源：http://www.xuanzx.com/163xkteklfz.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163wrydmurw.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163trgvmqnd.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163nlvqfqgb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163bjlmgfef.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163hwydcbsb.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163fjcnoyml.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163qipqszvk.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163zyzvevsg.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163svideoei.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163vajftaov.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163bfgarhjl.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163hkcaxbhy.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163kosrohda.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163mnhgbagg.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ktyzmbnt.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163hxnuajvl.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163tojtydxc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163nyhnmrvn.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163yqqpjjkc.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163kiwggrhc.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163sfrgrqeg.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163fyzmifvw.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163eoiljcux.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163cnzqfleu.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163tcbhrstz.html

static int counter = 0;
来源：http://www.xuanzx.com/163ygszbpgm.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163jqyazmzi.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163nhwgmoxs.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163bwqnjvnn.html

#ifndef X_H
来源：http://www.sxryk.cn/163xsbujqnl.html

#define X_H
来源：http://www.sxryk.cn/163vpnbggce.html

#endif
来源：http://www.aibaodan.cn/163zdshhybf.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163xxtrdqyl.html

#include <iostream>
来源：http://www.aibaodan.cn/163emghhzgg.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163jhagwydi.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163lpiwizdr.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163ejswovfv.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163zblxnbkv.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163zpksgrld.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163uflnnkgz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163lugnovhw.html

[S35] C++：map
来源：http://www.sxryk.cn/163xtbqykre.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163oboxdbsk.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163jnsnujia.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163zepwibtv.html

[S37] C++：set
来源：http://www.aibaodan.cn/163mtsgkqxn.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163aqiwvcpc.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ohqyqaot.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163dviiozic.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163eltdpvih.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163mjwszddj.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163xxtpfuku.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163qbtcagqh.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163domvgkvd.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163mdsnmety.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163trveaizd.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163kdzqivxk.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163upufquhf.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163vnbtuvkw.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163bftgsobv.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163bsjptvpr.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163swejzawx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163uzhanyte.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163qypliqto.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163mlfsovgi.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163gybwkocl.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163gcgqchzu.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163bnkfgvex.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163xheyxdvf.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163bwpqohuq.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163cclqvznm.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163vmffyqjp.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163kkffyxph.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163yzzrcodm.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163sjrsjnpg.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163tumpakou.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163zbavquwb.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163mlgwwjut.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163obxiqfpp.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163sydxslii.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163wivsyyhw.html


<!-- 参考信息 -->