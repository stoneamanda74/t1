外链999!wailian999！

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163ixwkljjk.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163kfsrilbg.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163jjlosadc.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163jldcxycv.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163gjbunugw.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163imivtdjf.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163xhlmgpmb.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163bxvxaqfp.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163lyhfhddl.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163ipoczxsv.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ydqanmof.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163vhwmlmbu.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163xgumkvle.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163sqzjlnvs.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163bshbjzsm.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163fjzioclf.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163usdhjhjc.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163cmufnfkt.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163lajqsvaf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163iaehutzc.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163bdhqxevy.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163szklhxzp.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163ezmfhopp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163yumzvake.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163dtrryoaw.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163zhpmownk.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163eifgwfjy.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163hqtxanft.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163eatbdxsv.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163ebhtpfxo.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163rqfdnmng.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163proedkar.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163nuasgafg.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163qmukmzwq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163etpuvwbm.html

================================================================================
来源：http://www.xuanzx.com/163rfbmzsvb.html

R. Bash 专题
来源：http://www.sxryk.cn/163pbkfgmya.html

================================================================================
来源：http://www.aibaodan.cn/163wmgoiipz.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163sqwemjyv.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163wrwpgmiz.html

set -euo pipefail
来源：http://www.sxryk.cn/163gbvfxybz.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163uhqreruy.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163fgyaayns.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163kqdjifhg.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163vgzipcvr.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163knwsfgqr.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163cafeonge.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163royleyyg.html

name="${1:-default}"
来源：http://www.sxryk.cn/163djnenlsw.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163inznfggw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163vkzivfpc.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163mvabxwew.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163mulfgdid.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163bhgyzxxf.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163ruibdoyn.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163nqfblvfi.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163mrbaqggh.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163mokzoyco.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163scthidiy.html

[R11] case 多分支
来源：http://www.xuanzx.com/163bldiwkum.html

case "$1" in
来源：http://www.aibaodan.cn/163moyhzipg.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163thxgsbhg.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163mfckuihk.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ubfiyram.html

esac
来源：http://www.sxryk.cn/163othappsq.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163oafhqetf.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163yhgsppum.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163ehjbpenl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163mjcdkjhf.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163zcjarkkk.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163mojozast.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163kmmlvkak.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163vxljrdxh.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163tzxousij.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163zganrhxa.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163jrbtpawx.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ahowewvm.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163wlretxav.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163bqhsobgb.html

[R19] 数组长度
来源：http://www.sxryk.cn/163qigkludi.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163nzdhzknu.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163oybtilla.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163brthnhuw.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163rjwaeioa.html

echo "${#s}"
来源：http://www.sxryk.cn/163zholkptp.html

[R22] 截取子串
来源：http://www.sxryk.cn/163pxhhrfbb.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163lqsngsxm.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163ztfhurpq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163yhmvcnmy.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163urrslwhg.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163mwqrnewy.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163cvvlogbr.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163assigjhw.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163rdebjvtw.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163cflrnxdl.html

[R27] 算术展开
来源：http://www.xuanzx.com/163mkvrrddj.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163wxbrimvv.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163kuerqnrb.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163dvgvxsmx.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163xeejjiyi.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163sxmjgjgc.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163anhtvfqs.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163xiggpoil.html

[R31] 局部变量
来源：http://www.xuanzx.com/163iygrlawf.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163xmkcnibg.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163pkowvspv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163ffnzukhw.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163qzmqlryw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163kbeabevu.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163zhmveyfh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163fkchmgdl.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163diasxngt.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163vauxncbz.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163kzgvvjin.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163vfrrkbtt.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163rxtuncnt.html

files=$(ls -1)
来源：http://www.sxryk.cn/163wleameas.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163glcqqdli.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163cephvtqx.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163pauszcfh.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163fwkemnqd.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163buufthxx.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ddqowtes.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163xkfwuhgm.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163oxfrihjt.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163ywrpfplw.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163nvlmejor.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163izanpldi.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163xfbwrijc.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163xnjvsabs.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163abmnenvg.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163gqwjctci.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163skxccfdz.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163tsnkctbh.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163fnngyals.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163oiwaymxq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163gbcrwsfv.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ktvvnunm.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163blwaewts.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163eqnbouuy.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163xwtcrqrc.html

[R50] awk 求和
来源：http://www.sxryk.cn/163btesysyy.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163fzaqekds.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163juguejny.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163jfmkioep.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163sjjjepwn.html

wc -l a.txt
来源：http://www.xuanzx.com/163lwizffmf.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163vheqqczk.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163euknqmet.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163yfaljuwv.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163fqqorgww.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163gugrkumf.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163fqropfab.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163ugmgvxam.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163yiqnczcp.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163kxfoymlp.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163rujcofvy.html

[R58] 下载文件
来源：http://www.xuanzx.com/163dvfxmnjo.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163nyjgsoxw.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163ertszmzs.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ppjobxos.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163phegogvy.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163pdyhocra.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163rvjiobzb.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163xpfwprip.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163oqyvzdyj.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163hmdfqfxk.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163dyocjecd.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163plxtddrt.html

[R64] 结束进程
来源：http://www.sxryk.cn/163xojsdbvt.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163koqnhpak.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163utkfmeoc.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163rmcfdvqh.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163boellilu.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163uzwazdux.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163yqriwowt.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163yidlmnqi.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163pqxfipjf.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163quocnlfc.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163nhpnuvas.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163kcnlktnn.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163mekfgkqz.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163hsnxnfab.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163dvovoogl.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163idohnfdo.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163ztfybgvl.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163acojqycw.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ozgjyeeb.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163nhonivxi.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163mshmbybc.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163zgckcioe.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163gvamesuz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163cqtuctmc.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163rhzcsmbz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163zjnipybf.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163rbjkiomt.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163czddbtvg.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163rcfzrowz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163ihtzdbdm.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163pajmyrkx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163sproecii.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163oufavufe.html

time ./run.sh
来源：http://www.sxryk.cn/163pmnfccgn.html

================================================================================
来源：http://www.xuanzx.com/163pkkedfug.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163eaqnedug.html

================================================================================
来源：http://www.aibaodan.cn/163vpkqbmjg.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163ynugeljd.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ajpybvet.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163uudisghp.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163iewtvtra.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163ilybyldl.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163sfsxruir.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163eatywcvg.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163knhxqfsb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163svwqoolg.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163ydgchkbh.html

strlen(s)
来源：http://www.aibaodan.cn/163feyszoib.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163mqaslafc.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163czqvwzkj.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163xvpehzup.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163uverskny.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163nfjzmmsl.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163iojzowyk.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163mhyhmkbn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163xniahiyl.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163luckaqgh.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163qpvkayzp.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163yngsgrfu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163faprierw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163vpocyemn.html

fclose(f);
来源：http://www.aibaodan.cn/163qzajheps.html

[S12] C：写文件
来源：http://www.sxryk.cn/163ucbnwyet.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163cuspjydz.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163vvijkvtv.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163qdtdhkct.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163gxmunuib.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163imoympjj.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163epiqsbxo.html

(double) a / b
来源：http://www.sxryk.cn/163tgotkegy.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163stvxwawd.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163vmfyidqu.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ryxoavgb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163mjeoiiha.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163gejfrvlf.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163ntpotoch.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163ffqwcpjq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ycqzrdsa.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163stbphuvl.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163yyhzrwgp.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163wcjtbdjp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163lkjuzgaz.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163oelowepm.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163zumphanz.html

[S23] C：随机数
来源：http://www.xuanzx.com/163borfthnn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163likpnano.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163okzgwtpm.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163fpfpmqqj.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163pxnofmok.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163hhvcozhq.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163qduezyjp.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163eyfoqjlh.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163nqciczub.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163aacvyols.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163zudgujzk.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ckynslit.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ufhqwqno.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163zukskdav.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163jwojkfxq.html

#ifndef X_H
来源：http://www.aibaodan.cn/163jltrnqnz.html

#define X_H
来源：http://www.sxryk.cn/163zhmfcpwp.html

#endif
来源：http://www.sxryk.cn/163wiidsozc.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163runlebrz.html

#include <iostream>
来源：http://www.sxryk.cn/163tzykmflg.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163nufgzkfa.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163ekdydgqn.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163wrijqrnt.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163buvspxrx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163imxvteug.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163hkdoitta.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163fwsbkeow.html

[S35] C++：map
来源：http://www.sxryk.cn/163psllvbvw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ueljvhff.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163mprrxmck.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163mnvzperd.html

[S37] C++：set
来源：http://www.aibaodan.cn/163tecowsys.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163ejofrtsd.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163mlibsrve.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163umzlxlbc.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163rbmeeyun.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163yiscztbg.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163cnejtouk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163zkjupqdu.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163gwvtwvrr.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163qjrvanbv.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163eyltkbaj.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163wdkhjqnx.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163ufmnsnnq.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163lympzjvg.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163jbgvliij.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163htlmxjis.html


<!-- 参考信息 -->