外链999!wailian999！

[Q61] 移动平均
来源：http://www.xuanzx.com/163nkadqqrj.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163fxfxwspp.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163fbsmedfa.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jyklanfq.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163zkcxxiwt.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163qaskketk.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163awshspmq.html

COMMIT;
来源：http://www.aibaodan.cn/163znaohiex.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163thwjuxxs.html

ROLLBACK;
来源：http://www.aibaodan.cn/163uxzjidwc.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163zqustkwi.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163vtbibiii.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163ecdigary.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163dhnfowuz.html

[Q68] 保存点
来源：http://www.xuanzx.com/163fbaocmtb.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163inupfovf.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163ebjipbud.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163xixvcovo.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163eeftwoyg.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163bjqqjdqe.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163syfzlvem.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163vkruekul.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163hzkkcpuw.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163oxcgcpue.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163wzfaetoe.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163igjlpjce.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163lrcawmqe.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163qicwymao.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ksqfoeoi.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163nraaoqcr.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163zouvqekq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163gtmbieqr.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163jliqxqxt.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163pefexyae.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163jjgdnfuo.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163juhnrjdv.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163zgxuymbl.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163hpmmbkzp.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163gnovnlfl.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163sezvyrdg.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163dkvyyadh.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163xbfzsolx.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163owvaruno.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163jpatiqfm.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163efrlivlw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163ueopunzf.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163zwmstway.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163xxhcdtle.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163ojkuuqlm.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163qawobevg.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163qzyajtiz.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163mfuvewut.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163bajyhmam.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163zdsizfiu.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163gpnxookb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163colftnxb.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163pcenyrco.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163uslymuhc.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163okqtvapf.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163rewsqxjb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163lzbmgvww.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163uwaeqhsw.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163zlrjptoh.html

================================================================================
来源：http://www.aibaodan.cn/163kmiospyt.html

R. Bash 专题
来源：http://www.aibaodan.cn/163itqwebhd.html

================================================================================
来源：http://www.sxryk.cn/163yupgjhrr.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163aixmnzcp.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163pgqivtwf.html

set -euo pipefail
来源：http://www.xuanzx.com/163tdrcruza.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163xqetisha.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163gyfrmnkn.html

[R03] 只读变量
来源：http://www.sxryk.cn/163xggsobxz.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ugkobezu.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163eehxodzg.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163pngahetm.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163garxqiaw.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163yectfpnm.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ftzopbce.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163twacerdx.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163uieihbhq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163xkwpkzxl.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163gyjdunva.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163yhfrognc.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163vaajwakk.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163tnfyzgox.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163vfprqbdi.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163fucrvkoj.html

[R11] case 多分支
来源：http://www.sxryk.cn/163ulhlaoqk.html

case "$1" in
来源：http://www.sxryk.cn/163bdcfmqzx.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163bbdxvzis.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163uwhzqffp.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ciaahlla.html

esac
来源：http://www.aibaodan.cn/163wosbspnw.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163rcsshvnj.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163woslkqep.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163kaubpeza.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163chqovows.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163nmshpwqm.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163prmmjtmu.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163gcouilez.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163ufyxibod.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163hfnxdipv.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163gqqqihjc.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163tosnkioi.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163zztmovqw.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163dpgcfjpf.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163dzyirfdc.html

[R19] 数组长度
来源：http://www.xuanzx.com/163xnmlmmia.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163zrnlbsjr.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163htbwzejm.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163tlyykffc.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163opbbjlcn.html

echo "${#s}"
来源：http://www.sxryk.cn/163zhowkhiv.html

[R22] 截取子串
来源：http://www.sxryk.cn/163pfbwsspj.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163xpvbzzkm.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163tyqbihpg.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163tyxxwpwj.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163geviumxj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163wcokhhqg.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163lrfkwiqh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163lzuakawq.html

[R26] 命令替换
来源：http://www.xuanzx.com/163sgyzolhw.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163juaqxlpn.html

[R27] 算术展开
来源：http://www.sxryk.cn/163mvmpmjwj.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163hsqwyyzc.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163ngnngtkn.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163gmgykmcj.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163vgxripsw.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163hknuxzxf.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163cvolnhnc.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163bkiydifr.html

[R31] 局部变量
来源：http://www.sxryk.cn/163kgfdavkd.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163xpfhsimu.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163ajebknjk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163ojkbpvzx.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163njuxzqtq.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163wsoqxsvn.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163mameujzx.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163iaycbgmg.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163qcxqmwai.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163greeqvoe.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163zfpajvdr.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163yfudbaqb.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163asuvsnxp.html

files=$(ls -1)
来源：http://www.sxryk.cn/163pvklbomn.html

[R38] 管道串联
来源：http://www.xuanzx.com/163ckpfzght.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163gsbvaepg.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163reeqdqce.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163kyskkafb.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163dascjxpj.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163owndmmxl.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163hmcqmmqu.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163cwctzyca.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163qordwhmj.html

wc -l < a.txt
来源：http://www.xuanzx.com/163xvyknavp.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163dlfvwjbo.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ncyzmluy.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ysqihgwu.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163ibhwtgsg.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163wadudlqi.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163jlruwhvp.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163qludotga.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163wfytjzsz.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163cxdhqmdl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163quulxdtn.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163cthtmhyw.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163oylmxwzw.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163uhhortsi.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163wajzmvle.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163ikglicih.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163gnfsgssa.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163vlrfoqtn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163bhplkkrk.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163ytdbjzuc.html

wc -l a.txt
来源：http://www.sxryk.cn/163xxcbhpzq.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163ehrnsjkk.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163dhduujtg.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163qgebpquj.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ivgbfcri.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163nxrechbk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163krydktau.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163qdaycpjh.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163kskaqejl.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163erepgjvc.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163wfeguggd.html

[R58] 下载文件
来源：http://www.sxryk.cn/163yahyonpa.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163xxgqqjce.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163yrydhzhi.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ivktkdjt.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ykjdmaad.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163owoqpozw.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163icdozmdn.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163htvfwgkl.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163dptyicpw.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163xxdqjgzx.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163tnpdycjo.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163akszdoab.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163jxpulqgh.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163tdvviudz.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163tzkgwdge.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163neidlttj.html

[R66] 定时任务
来源：http://www.sxryk.cn/163xkhoszyx.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163aejuafhy.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163jjkhflxa.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163dsjxyiic.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ivamnukm.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163dacdssws.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163fubnetwn.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163bspfbxuo.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163yitumoes.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163vlmcszsi.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163pgxgrivg.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163kbpkgwtq.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163opnmfvdm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163hpmfifoh.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163nxpssxxg.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163jqalagqz.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163djsiqspj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163gltscovd.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163vtixqiqw.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163cbczkfev.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163dklgigmp.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163wsirfttz.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163fkeuvzcu.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163nabtnozk.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163yxzzbsoa.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163izqwgcts.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163jnjnwnmr.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163crrysjbz.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163ngozwcyc.html

time ./run.sh
来源：http://www.xuanzx.com/163kgpbddoa.html

================================================================================
来源：http://www.xuanzx.com/163orjaxdfx.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ejakwlgb.html

================================================================================
来源：http://www.xuanzx.com/163ejulyqmg.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163eyqqzbfk.html

#include <stdio.h>
来源：http://www.xuanzx.com/163nniywado.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163jxkbjzkv.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163jejxzrbc.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163ibwzbwek.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163kacjvapd.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163mgdbrkec.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163vrekflyl.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163bmedtmob.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163qkjfmaah.html

strlen(s)
来源：http://www.xuanzx.com/163nodqsivd.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163oydvwazm.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163pbpwxpeu.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163ujajlzhj.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163whswxlxy.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163enyujujt.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163jfgnhrki.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163sqfzzqdj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163szicbwpz.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163uacibtwb.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163hpgdstvq.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163gpkbfspx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163vmsavcqc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163qwcdhise.html

fclose(f);
来源：http://www.sxryk.cn/163dbndnenu.html

[S12] C：写文件
来源：http://www.sxryk.cn/163bgvwalsa.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163odzxbzif.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163vinreeds.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163hnkvqeyr.html

[S14] C：枚举
来源：http://www.xuanzx.com/163dqtkopvl.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163sizrepxb.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163viepkdnd.html

(double) a / b
来源：http://www.aibaodan.cn/163kgnajdjm.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163gknyrjvw.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163szoyiucf.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163oyvhiumb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ogxxlkkt.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163fuirwxri.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163qfshvzpd.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163dcvemdau.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ckprkhgh.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163etgibcnw.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163snlugyon.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163lxwyjkif.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163anqduomu.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163qxuelkej.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163htclonhe.html

[S23] C：随机数
来源：http://www.sxryk.cn/163pczfckvm.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163tdmxihtt.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163olcuvfhp.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163fcdkjhfk.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163bxrniwmr.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163idubnlzq.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163hlzllscd.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163dviysypx.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163hnflsejt.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163kuomjxat.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163belwfxgt.html

static int counter = 0;
来源：http://www.xuanzx.com/163qhjeodaw.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163rfwcywwb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163gnnaeflo.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163ltsmzbtu.html

#ifndef X_H
来源：http://www.aibaodan.cn/163geflispw.html

#define X_H
来源：http://www.sxryk.cn/163xqfrtnbw.html

#endif
来源：http://www.xuanzx.com/163xjspvkfr.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163yfzyuopm.html


<!-- 参考信息 -->