外链999!wailian999！

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163xkuvgseq.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163cyfllixi.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163vzsqkwad.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163imtyhour.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163gilirtag.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163wnkqmypx.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163wrvpgnpi.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163hizqlimu.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163wyxtujeb.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163prsioitr.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163dlhcyqfa.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163wswjjlus.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163ngzppshd.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163hbeensnw.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163mfojmgog.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163zdkwkczn.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163yvdjqren.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163udmorueb.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163rfkycrek.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163ppieclkk.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163rncfvfpl.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163pnvwugut.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163zfjgvepf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163nxlgpyyh.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163adgireed.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163eoeadjqv.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163dckccglh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163hourpgum.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163fuxwtsak.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163beirfspr.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163bdknqqds.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163mbykuvzq.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163bqniplcx.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163yrtcvuxi.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163qhjdicbe.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163ltjabvtq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163xokymabo.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163hemwugub.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ultvwwgs.html

================================================================================
来源：http://www.xuanzx.com/163nckypegm.html

R. Bash 专题
来源：http://www.sxryk.cn/163ndgayvgc.html

================================================================================
来源：http://www.aibaodan.cn/163lmpsqlbt.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163qpxagnav.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163bouvgqxo.html

set -euo pipefail
来源：http://www.sxryk.cn/163zfrgqlch.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163fznazilm.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163myewzxus.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163whhekddb.html

readonly PI=3.14
来源：http://www.xuanzx.com/163bcijljht.html

[R04] 位置参数
来源：http://www.sxryk.cn/163nyfyaofk.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163oxnefrpt.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163yzfxnytc.html

name="${1:-default}"
来源：http://www.xuanzx.com/163fgfagpxd.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163ddeqhfhp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163ktddctis.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163olhllvzr.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163ntkofzcw.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163rynkxrjd.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163umkhxere.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163opzralet.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163rdkxkzui.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163cpgmkanj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163ykfajgms.html

[R11] case 多分支
来源：http://www.sxryk.cn/163ahwleelk.html

case "$1" in
来源：http://www.aibaodan.cn/163xhubwfzp.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163mlzuwxne.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163yymrljoj.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163fotnsfjf.html

esac
来源：http://www.sxryk.cn/163idwetdaf.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163cnxsubao.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163uuvzhbpp.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163syjvcxun.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163srelukca.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163vjisyjma.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163nmcbzzpm.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163ctnihyzu.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163xympcoef.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163lvcwkyhh.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163spaudtzu.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163vemiyxln.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163xtvnnrpu.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163zsjdloez.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163zhdmnulf.html

[R19] 数组长度
来源：http://www.sxryk.cn/163qexmblwg.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163uchsaqvt.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163rmdykjij.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163cpdiqqxe.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163iipqopmy.html

echo "${#s}"
来源：http://www.xuanzx.com/163lhrpljmu.html

[R22] 截取子串
来源：http://www.sxryk.cn/163txcsdfcb.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163oadsgzvw.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163hygddjgm.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163sqqwfvst.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163hupanaqo.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163tmicifwa.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163buqxuund.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163rpmnnevu.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163oeuhmacp.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163tdgmuvnz.html

[R27] 算术展开
来源：http://www.xuanzx.com/163vvnzgrid.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163qegonexw.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163jfliawxt.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163exgfyhmg.html

[R29] 定义函数
来源：http://www.xuanzx.com/163xwtewcuv.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163oqozmvka.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163uljtlgiq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163dmyripma.html

[R31] 局部变量
来源：http://www.xuanzx.com/163ugzvelvj.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163uzvkyvvi.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163sabcgwya.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163xnltgmwv.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163avyzbjne.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163dpkfssmf.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163zitdoyqq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163jsyhnzhy.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163yyfimrhz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163plfvzdys.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163vbbdfkmp.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163dhemhwir.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163ympodgjo.html

files=$(ls -1)
来源：http://www.xuanzx.com/163jusawdtx.html

[R38] 管道串联
来源：http://www.sxryk.cn/163prxusjvf.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163mfxiuhum.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163fgprnxgi.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163sypxmvqr.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163tatinjtn.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163wyrecysi.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163ymufevni.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163ayvpjkim.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163uicknuzj.html

wc -l < a.txt
来源：http://www.xuanzx.com/163tuqtdvsy.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163ayrvjyvo.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ssgcjewb.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163oodrzktv.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163idowahel.html

[R45] 批量删除
来源：http://www.xuanzx.com/163xsusngwi.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163mwpdwglt.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163qpyjokyz.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163bsmkgcud.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163vrkdkezi.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163lkbtrcvk.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163kyrfmusf.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163kzvkftog.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163wfhdiomi.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163vdxenfyr.html

[R50] awk 求和
来源：http://www.sxryk.cn/163jdntdkhe.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163frdwxgpi.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ubsboivx.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163jyvpsqei.html

[R52] 统计行数
来源：http://www.xuanzx.com/163djnsgrmf.html

wc -l a.txt
来源：http://www.sxryk.cn/163dgqllnbi.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163vpplaqiu.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163zlduzmvc.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163bazpsusx.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163edvkovzi.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163mtxdinuz.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163akzopcln.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163zqmxnrvt.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163zgfcqiqo.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163huasofgl.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163qiqptrwl.html

[R58] 下载文件
来源：http://www.xuanzx.com/163qojabflu.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163rrvolcyz.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163hmqfvwzb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ysikrgmk.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163nudpwbyo.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163jjespyro.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163yzsxzkfc.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163yktphryn.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163lcimdzyl.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163ttowgenh.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163znrgzxdg.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163myarddan.html

[R64] 结束进程
来源：http://www.sxryk.cn/163shdnalak.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163nhfiaorx.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ykraqsoc.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163jehwmxcc.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163pgwxjidf.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163svvfbimj.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163filrsrqj.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163xvjdxsij.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163zowwcjqz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163chipimtf.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163qgkjbtyt.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163ouxwhnoq.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163gocpytor.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163foscrwet.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163vqtnnskz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163jskidyrl.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163guuufzyw.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163ibfkrkvf.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163dfcpuzxe.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163ixfglylc.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163wludpqll.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163syijecet.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163wybkgobb.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163tspbblll.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163wxxymmoo.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163hkcrbgbr.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163vauacdov.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163xibtyofp.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163nbspcuvq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163jtimfmoe.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163sgphqecx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163jjlwgjie.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163afmjxsxn.html

time ./run.sh
来源：http://www.aibaodan.cn/163opthpkyo.html

================================================================================
来源：http://www.sxryk.cn/163fokhhpgc.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163fidxghin.html

================================================================================
来源：http://www.aibaodan.cn/163axvqrprz.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163kuoppaea.html

#include <stdio.h>
来源：http://www.sxryk.cn/163vngjeikj.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163cbyceibe.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163oujpyguo.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163lpekmewi.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163owpmbrwu.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163uflvlqks.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163ovuapmss.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163gyhulpuo.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163tsjqinpi.html

strlen(s)
来源：http://www.sxryk.cn/163cksngliq.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163zizjjgvh.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163cfijydkw.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163xmphlexs.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163tmvsaoqm.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163hkwiqxyb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163wkwdhebd.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163liyxyoon.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ptvrjeza.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163jbowdpcu.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163uukpoiwo.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163iizyblgm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163flqqxlir.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163dqtkybrd.html

fclose(f);
来源：http://www.sxryk.cn/163evevkojw.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163bpxspugv.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163yorxnsna.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163jenzdefr.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163ojyxibui.html

[S14] C：枚举
来源：http://www.sxryk.cn/163gelyoaal.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163ikrtxmfy.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ffmigdad.html

(double) a / b
来源：http://www.aibaodan.cn/163zvosusgt.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163lsjvehkx.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163hrqclzcs.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163kyjlnmzq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163vdlzqhcb.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163gbitqkur.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163sztmoddp.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163wycglizm.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ewwscgqt.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163fyzcwzlr.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163krdceamj.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163vywvllxm.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163vwxahsun.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163diohsxal.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163bmcidmtb.html

[S23] C：随机数
来源：http://www.xuanzx.com/163zdqzlevr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163xspgzmot.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163sqmxdwqi.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163fqkyiple.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ufozihru.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163lwbbmtkc.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163qoarmilf.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163vyrkhaem.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163hjmxmmhx.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163mvdfzktg.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163btesuwkw.html

static int counter = 0;
来源：http://www.aibaodan.cn/163umdajufv.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163cypashro.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163vrsaxhvi.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163nqzngvtd.html

#ifndef X_H
来源：http://www.sxryk.cn/163xiiausnv.html

#define X_H
来源：http://www.aibaodan.cn/163ojkgubwv.html

#endif
来源：http://www.aibaodan.cn/163wqvvpqbx.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163kobunuey.html

#include <iostream>
来源：http://www.xuanzx.com/163qhzlzcmk.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ufyhevkm.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163djfzffkh.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163ogvovciw.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163rpnxwhjg.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163xnbgstkf.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163lkwgrdzx.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163dqosbvbr.html

[S35] C++：map
来源：http://www.aibaodan.cn/163ezboikqc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163reqqvcjc.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163zgeaamyg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163qvaisqlt.html

[S37] C++：set
来源：http://www.sxryk.cn/163mqazyqta.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163bsieowzz.html

[S38] C++：排序
来源：http://www.sxryk.cn/163xqwcipiq.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163okolxlqm.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ktnjzfbo.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163psvledqw.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163qenknqhi.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163vmqvmdqt.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163avvwfzal.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163biupdfjs.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163umofzmli.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163rmysscsx.html


<!-- 参考信息 -->