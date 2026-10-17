外链999!wailian999！

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163rylhwstw.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163fqnwrojd.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163aibrzctx.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163yngiiixr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163swuvtnhn.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163rdsvxqbk.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163obwcbaqi.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163prwqbbwa.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163hiooanxu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163vkjxsgnc.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163prozxpmn.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ruhaefhg.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163hjcbgodz.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163webesycf.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ptipqidz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163rkuxtkod.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163jyngthut.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163csymmmyy.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ulyovvpg.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163jeoxnbng.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163nkbjjufh.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163cwwejtef.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163squhczzo.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163kumyzlao.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163mouvbmzq.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163vdzbfjzk.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163zkokyqno.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163tldibmuk.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163acnxxhne.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163pravteof.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163pzwmggqm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163tlydqttn.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163qkfyizmk.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163mjubwenr.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163jeoawfhq.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163uldusekk.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163kvhobqnc.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163aehndpft.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163xndylaud.html

================================================================================
来源：http://www.aibaodan.cn/163aechxgzv.html

R. Bash 专题
来源：http://www.aibaodan.cn/163gvfvstdx.html

================================================================================
来源：http://www.xuanzx.com/163ilgfkiwu.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163slgnabsd.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163zznxjwny.html

set -euo pipefail
来源：http://www.xuanzx.com/163oijjhayo.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163biiswfnc.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163qzknmnjz.html

[R03] 只读变量
来源：http://www.sxryk.cn/163msepcrgk.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ewfvweut.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163zphklbhv.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163thwhuush.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163dudxsjvr.html

name="${1:-default}"
来源：http://www.xuanzx.com/163whalqxml.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163gpdgaayc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163ypvvxruy.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163eltijrts.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163wfqszown.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163jtrbxvol.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163pchasnpf.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163iobmmzoo.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163xbjoyxek.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163niiasyis.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163iizqgodw.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163vwcqaack.html

case "$1" in
来源：http://www.xuanzx.com/163cneszllu.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163vfprjyvl.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163rqmtcaib.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163kwrtfpki.html

esac
来源：http://www.sxryk.cn/163igaoqwvc.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163nqeeziml.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163iwvprrnj.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163rluaanzl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163loyfsjss.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163sndcbhav.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163aokwomau.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163xmvgxlgr.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163boyumwhp.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163itzjdyiu.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163xkugtijp.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163mzntvtfv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163mgcoolih.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163yfgtahjh.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163edektxfb.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ebafelya.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163itttpxxb.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163xlgqcnhc.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163srtfhcwm.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163mipmkcin.html

echo "${#s}"
来源：http://www.sxryk.cn/163cbmuzwil.html

[R22] 截取子串
来源：http://www.sxryk.cn/163kybpqrmt.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163ffekkqdm.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163stddyajx.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163kcinllos.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163hqxypybs.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163anftctvj.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163vbvdxbkp.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163cjccoeyh.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163oyzxqjdq.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163wbuesptz.html

[R27] 算术展开
来源：http://www.xuanzx.com/163zsvjfebb.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ssutswej.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163pztcojdy.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163pdqgroct.html

[R29] 定义函数
来源：http://www.xuanzx.com/163oujsxwlg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163jldqgisd.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163tjfzwitd.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163uirldaow.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163okokgrmx.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163bsvqsrcr.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163bwshkjsj.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163upynfzpk.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163cgkreovy.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163lludbdpq.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163wzukljfh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163gaelksgm.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163jvthmmfr.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163vhirfykt.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163xbygsrze.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163bzujxpif.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163csmdfhsw.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163tqjylcuc.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163kdxqbhrp.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163tlemumnu.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163hgpnwfoh.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163jppwuzbo.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163gztttumu.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163qmozgwfm.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163lnlcizmr.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163pkqahnxk.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163nnimpkef.html

wc -l < a.txt
来源：http://www.sxryk.cn/163tvgxjepo.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163jmwgkare.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163oyudedtx.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ibrayebs.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163uvzmuxqs.html

[R45] 批量删除
来源：http://www.xuanzx.com/163kodjujze.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163siqugiqw.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163bgokbuww.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163kuqdsljw.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163tveuyfoa.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163pxckjdud.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163jnztogwn.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163xghjgxss.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163qgsgijsl.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163xkxvhrjs.html

[R50] awk 求和
来源：http://www.sxryk.cn/163lunprbbn.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163yyfzfvmy.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163bdnphawh.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163kmyhonhv.html

[R52] 统计行数
来源：http://www.xuanzx.com/163pbabomaw.html

wc -l a.txt
来源：http://www.xuanzx.com/163yvmxbhkf.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163obnvfwxj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163jopmxpqb.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ghwwwwlx.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163kyzcqbkt.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163phezscex.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163zetkbtaa.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163jcqrzwvi.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163inqwifnx.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163wsgybipd.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163rxxjozvv.html

[R58] 下载文件
来源：http://www.xuanzx.com/163ngktuhiu.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163fafhejho.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163jpraldcm.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163omvwwjbh.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163wjhfaplk.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163ykqfcdqy.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163gpocuroa.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163pkwlycud.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163rbgozzzc.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163pdbbeebr.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163kamuvuqi.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163euwiagmq.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163mxndiykh.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163uylfizrh.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163hhjhffhi.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163wriofinb.html

[R66] 定时任务
来源：http://www.sxryk.cn/163vkutczkh.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163jszxurzk.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163xwauimhp.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163rxpxljii.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163sreqfsri.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163vvthfepd.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163bpisiizl.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163tfnygslk.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163eeaqwrdz.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163feuhyrzu.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163iuqbwcwj.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163flfbduoh.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163izxcjoil.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163thpltgxk.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163elnizyyi.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163tgdpedgy.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163btltwhqj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163qfswyeun.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163fyokevov.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163gtmkbpsx.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163ssrwktea.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163zegqfnkv.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163egsjxuci.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163lijiazgw.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163ukmjbjre.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163ajyflggv.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163orrlaiwh.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163gtxuhflr.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163lfyltsfp.html

time ./run.sh
来源：http://www.xuanzx.com/163nfijhffk.html

================================================================================
来源：http://www.xuanzx.com/163aniadzwe.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163fgipsmjr.html

================================================================================
来源：http://www.aibaodan.cn/163baqnqneb.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163wikcixaw.html

#include <stdio.h>
来源：http://www.xuanzx.com/163yxuiptjl.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163mdlmaugr.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163jdqqxkpc.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163tmephvgr.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163hsdzahpj.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163jszlqpxe.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163xgibygta.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163pxqcqrcr.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163dudbqglz.html

strlen(s)
来源：http://www.aibaodan.cn/163vtoerqeo.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163smdjhmmu.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163swdepowf.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163stvwvgoo.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163hwotpdav.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163qfgnoeov.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163wwegsyym.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163glrrklxs.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163utqjjowc.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163mniskuqp.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163lfulaeko.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163suszietp.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163mnzpfblg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163amaktsvi.html

fclose(f);
来源：http://www.xuanzx.com/163mscdgegv.html

[S12] C：写文件
来源：http://www.xuanzx.com/163rlnpsuzm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163jyaxbwmu.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163pexehsdt.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163ograixdr.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ggmnuqoq.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163osxgnpqf.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163dbsfnhof.html

(double) a / b
来源：http://www.sxryk.cn/163ebwnpvgn.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163pudqtykw.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163yhnhatey.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163dnlfhmgd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163qxrepnxu.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163vbhgqyub.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163ifvshrip.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163kpetcmaq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163obruorrw.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163kwrkfwlu.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163bmestkjo.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163tmvzvdle.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163crswagcl.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ihhvmjzg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163mjxlqqsv.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163vopocfms.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163gryetrir.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163uujcglpn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ycbgxrbi.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ggfrgogz.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163jncezumu.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163chofczeo.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163vodrkrho.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163fccixpon.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163egjqbyus.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163kvydntqb.html

static int counter = 0;
来源：http://www.xuanzx.com/163hsclqmws.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163pyvjyizu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163xvatzirg.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163bqidiagg.html

#ifndef X_H
来源：http://www.xuanzx.com/163mwkuhxyf.html

#define X_H
来源：http://www.aibaodan.cn/163ilgewhjw.html

#endif
来源：http://www.xuanzx.com/163fzqkurww.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163aabmqisx.html

#include <iostream>
来源：http://www.aibaodan.cn/163qvjyerou.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163bwmenrcy.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163kttgpsap.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163vevlysbm.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ifjaqsbx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163beqajpse.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163sosflzyz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163vtjrnsmo.html

[S35] C++：map
来源：http://www.aibaodan.cn/163jckpmvcq.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163rltjymkd.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163mrxsigjq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163hcztxulx.html

[S37] C++：set
来源：http://www.xuanzx.com/163lzbyfhtc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163wollainv.html

[S38] C++：排序
来源：http://www.xuanzx.com/163rvbbhlhn.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163cfnqqosv.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163frkwlpag.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163gtfphwqn.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163fiyvynsy.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163hcslzqfo.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163nuaedjpt.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163nmzeixre.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163chnrlmff.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163ogtgdyra.html


<!-- 参考信息 -->