外链999!wailian999！

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163uvrrqwli.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163odttpzsn.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163gmxcgnec.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163mrfbfgop.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163pmeirugs.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163afzdubba.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163qcsohfjd.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163acjiaycl.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163xvlgdzvi.html

[Q54] 清空表
来源：http://www.sxryk.cn/163sobkjsyo.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163payjgykf.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163kclnmcrm.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163hxfjqqja.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163hyaudyxn.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163cyglddmk.html

[Q57] 行号
来源：http://www.aibaodan.cn/163bvsduduw.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163mvcawrvx.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163mfmlnxrc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163fujzcxpk.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163nhxbewrd.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163smfdbeem.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163uxwzzabk.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163xhndniwh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163pxfeqdxb.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163mbjvoetv.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163whuhflhp.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163huvujwkz.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163xglqmzya.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163koscxgev.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163trkbzsln.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163wlggppnb.html

COMMIT;
来源：http://www.xuanzx.com/163rvhaopxy.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163kstpaaps.html

ROLLBACK;
来源：http://www.sxryk.cn/163zvyzfjln.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163aqbnszjc.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163nrhssqem.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ulwhpzze.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163qxygacgc.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163cktvihil.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163hpheutii.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163hxmegirv.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163iroxnmuj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163totqgxnr.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163vhkchuds.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163jgmyqirt.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163sajbztkg.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163sepczaqe.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163lmrjsupe.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163nqnzkiye.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163emyawluk.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163wcsgqcjh.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ymzlyvte.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163fyesngtd.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163qwdxafhz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163cjxlcgek.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163uxbzfrlu.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163qblbztoi.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163wejxqwhh.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163upxjhtgk.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163ufurwwxw.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163vrbiaeca.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163xoqbofuq.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163enspfqls.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163pfekgpsi.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163hwfcoxda.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163kykdnaej.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ujtrbubs.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163zxvdzqzy.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163qqyvdcxg.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163qlvbbkwx.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163letmwpfi.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163nkfooxsk.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163woejgzgb.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163rjxetxus.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163dacompyg.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163pbtgweio.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163eagmmxqu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163gbnkzqav.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163xksskepm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163linxdily.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163qsejzrwt.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163plxbfdvj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163jsdhnwxc.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163poontjhx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163owanogur.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163amczqfxo.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163onpkpqih.html

================================================================================
来源：http://www.aibaodan.cn/163gcbdliau.html

R. Bash 专题
来源：http://www.aibaodan.cn/163umegylnh.html

================================================================================
来源：http://www.sxryk.cn/163fsakoiux.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163vcqeuegw.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163hdbkqiac.html

set -euo pipefail
来源：http://www.aibaodan.cn/163xhgqhtdx.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163echzaite.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163rccwhcmm.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163zexpkgmm.html

readonly PI=3.14
来源：http://www.sxryk.cn/163qjfftjvc.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163zgrjqrsc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163tbuqxoyg.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163irljhcxf.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163fplvafck.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163tasuaczp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163fwljhlrc.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163csklbdig.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163fpxjbesw.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163fgyqgsge.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163zxmcwfiw.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163tnxttymn.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163lnfabdpv.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163rimwsyhg.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163qoulawrk.html

[R11] case 多分支
来源：http://www.sxryk.cn/163bsxvyrch.html

case "$1" in
来源：http://www.sxryk.cn/163sbuedymn.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163isuehpyl.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163enwaiidt.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163pdzrcvlf.html

esac
来源：http://www.xuanzx.com/163pikxjpcj.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163rkhhnjvw.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163nevfomql.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163pgizkbyg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163eayursly.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163jyqprgke.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163gulzfobu.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163pafxycnr.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163bizatiyj.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163ttuvhjmj.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163ggjzibml.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163eybrbkqe.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163khmnnect.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ermnxoua.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163szxeddry.html

[R19] 数组长度
来源：http://www.sxryk.cn/163vrbynzfh.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163kbconiir.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163ywabfurg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163gnqjxsfz.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163leqphkza.html

echo "${#s}"
来源：http://www.aibaodan.cn/163iljvekwx.html

[R22] 截取子串
来源：http://www.sxryk.cn/163fyzyvfpl.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163heqqtjhx.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163rkzjdafb.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163zakrtncw.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163ajtoztok.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163agitpahg.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163xcpvyczl.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163znmrccyg.html

[R26] 命令替换
来源：http://www.sxryk.cn/163rosvehto.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163inoyryqo.html

[R27] 算术展开
来源：http://www.xuanzx.com/163iifglgdp.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163wjilfkdt.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163qwbsnhgl.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163oludmjkq.html

[R29] 定义函数
来源：http://www.sxryk.cn/163wfidussu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ighbuosg.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163lsummmvr.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163klpzvqup.html

[R31] 局部变量
来源：http://www.xuanzx.com/163iekpcita.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163xjbdkvxm.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163yficnvsw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163liihdlmm.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163xdjtuswh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163ywcrqdvp.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163yocdjqhz.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163maqxbsrt.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163jzjcipor.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163puabbywu.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163jsyyvbhy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163pzcsbhvp.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163qdugfgma.html

files=$(ls -1)
来源：http://www.sxryk.cn/163taxfmxyl.html

[R38] 管道串联
来源：http://www.sxryk.cn/163npzapqzv.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163tjlymzty.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163wodsuyts.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163apmvxlnr.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163yarcqlil.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163dkewvnom.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163egmsypax.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163trkloakd.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163aklqnyms.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163cmnqkrjz.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163sczqiawq.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163lrbhrlot.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163iohzxhrn.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163ltyecsds.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163aijbohmw.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163ejsfbrsl.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163jrrflyqb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163lvwaanpq.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163qgoumddr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163gfqcryle.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163fzyodngm.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163xrvqtwcl.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163pwuzndek.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163pcodguoc.html

[R50] awk 求和
来源：http://www.sxryk.cn/163sudrwnrs.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163hqgyaxox.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163xfzzblss.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163razwoxlu.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163avgxyryt.html

wc -l a.txt
来源：http://www.xuanzx.com/163bkyiorel.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163pmoditlg.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163rukmhxji.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163huxuhmbw.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163roziwwhq.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163jqrytqlm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163dhbcdyps.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163kidspthp.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163kpvhdous.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163zfmwfggo.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163knxhivbt.html

[R58] 下载文件
来源：http://www.sxryk.cn/163cixyywnx.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163uzwapupv.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163tmyatrxm.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ihyojrgf.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163fmrsefrq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163ktoiptof.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163ojoifjpr.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163rjfwusue.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163reydvear.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163yleolaho.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163vjzqnkki.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163panfdebt.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163mypgvqmp.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163iulflxhj.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163lxrgcoij.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163nuenhvkb.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163untqiubu.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163vomoqsrn.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163oixoawgl.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163eagecybk.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163hgwfyelo.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163vuqbmzlb.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163qrnpripj.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163fqwgiuvo.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163xmvmtxiu.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163kefwqvim.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163gjpouatk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163conlworc.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163rfeoecty.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163zvtohkow.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163njsnxupu.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163xhonzlfj.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ylxnqirq.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163ryisdbcq.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163tdarbbow.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163ihnxfweq.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163kdofzggg.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163lnndihnm.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163eyqheuvr.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163dfvhpopl.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163aortnhhq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163gmayigzx.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163mmwodffk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163wydyzheo.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163ngexsevp.html

time ./run.sh
来源：http://www.sxryk.cn/163wjrczmmn.html

================================================================================
来源：http://www.sxryk.cn/163epickxkx.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163kufrovdb.html

================================================================================
来源：http://www.aibaodan.cn/163cfkymgym.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163xjjvswzs.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ufvimysr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163gicklwun.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163tyzbqcdo.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163yhirhyaf.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163wczhojrb.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163fpnwszfi.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163ezquccyx.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163uziliveo.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163slfnqovm.html

strlen(s)
来源：http://www.aibaodan.cn/163yapghyrm.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ktasyacq.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163xqkeugzt.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163jniminyq.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163vqwsjisg.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163kzntxdij.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163kzobtykk.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163kerdhpld.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163hsetfonn.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163pojadldj.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163hskaubjc.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163bkwdoudf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163nogayhaa.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163awqqjhmb.html

fclose(f);
来源：http://www.aibaodan.cn/163cysnloru.html

[S12] C：写文件
来源：http://www.xuanzx.com/163pvxyvzsx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163mpaugqqb.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163vqsgrlia.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163mvgkigiu.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163wepygoqn.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163fxyeayqb.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163pxzthhew.html

(double) a / b
来源：http://www.sxryk.cn/163lladgzbh.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163rlduyyen.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163dmbyvayg.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163mnokbenz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163rumxqhwo.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163qmwooirn.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163pamowcfl.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163zxmzwdjs.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163khipmxha.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163dcctibjz.html


<!-- 参考信息 -->