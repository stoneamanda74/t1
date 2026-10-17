外链999!wailian999！

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163xdzefroq.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163kxpejrat.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163hnrxsunk.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163kccibzjc.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163ycnbobcr.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163pxekcnbz.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163udicnquj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163hrgfwrvy.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163veseyrnc.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163yehbpwxw.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163mfvbhbju.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163dnxutsis.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163qrwvlpuh.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163bimwbsns.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163pyysfviv.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163bwcxzkpj.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163jyzpzyxc.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163qypinjww.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163euridocp.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163osicfypk.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163etlxzzkq.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163foviynco.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163uhhofqej.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163idbdidjf.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163jakbtmys.html

[Q54] 清空表
来源：http://www.xuanzx.com/163mqlmxiem.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163uwxtlpdt.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163kjsbuzxx.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163mawnfsbf.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163fwtaarlf.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163nyhrdser.html

[Q57] 行号
来源：http://www.aibaodan.cn/163vlnizqnf.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163ghoyrsxb.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163tvvahyyj.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163mbsayeaz.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163mfbiyebq.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163vwzonbxt.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163rbejuldl.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163vexeosai.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163enpbbvcq.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163nmwhizji.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163viyubpby.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163xuaeqwte.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163xrxmxlbt.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163vdhkpwen.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163moqjedzu.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ghugztcc.html

COMMIT;
来源：http://www.sxryk.cn/163mbcmrbeb.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163hidaznva.html

ROLLBACK;
来源：http://www.aibaodan.cn/163fojmfgia.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163cypvrvuq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163sljdxwsb.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163pauhruks.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163hsdlfdfh.html

[Q68] 保存点
来源：http://www.xuanzx.com/163sggyncgc.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163mwdobmiw.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163lhpceuwd.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163hnqiqeus.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163ujrowfaq.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163nppejmuq.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163xqxxfdkx.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163bxmxktme.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163swprwazv.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163ogzwcgsn.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163eulirisn.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163rtynsxsu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163ghfwmjxo.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163ezpdqlpa.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163wbmdoqju.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163soroemiv.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163wnbzeeot.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163jpwnfzlt.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163vbwpzjth.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163ekjdjfih.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163qzcajtan.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163bgckedri.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163xwlveldr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163hmsafenp.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163khyftmch.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163oauvjnkf.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163tguvrjwq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163uqfmxbmr.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163zaeqpvng.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163ufdqbpjc.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163xyjunaen.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163vkkvsymf.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163slgtaczh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163zbbfskup.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163vigcebhk.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163agfpmdra.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163vicvpqmm.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163ljvcscix.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163xblrqffx.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163qwsbkori.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163yuuquibs.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163ggkftwkh.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163uttjupob.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163jyllbbgl.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163zmzxyqjx.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163aohxpulm.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163ihsngvlg.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163jlvsasmt.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163whbxjxmz.html

================================================================================
来源：http://www.sxryk.cn/163nhjkppfs.html

R. Bash 专题
来源：http://www.xuanzx.com/163ptwbwgsl.html

================================================================================
来源：http://www.aibaodan.cn/163aopjwacb.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163kcelteli.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163hcyltbsy.html

set -euo pipefail
来源：http://www.aibaodan.cn/163eomtoiek.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163rvwnwdtb.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163rcghewgy.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ntogjwaw.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ipdeuxid.html

[R04] 位置参数
来源：http://www.xuanzx.com/163ysguhens.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ynxtwrfk.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163updfedod.html

name="${1:-default}"
来源：http://www.xuanzx.com/163yecahpom.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163ipkstmnv.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163bpysaeuy.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163gdfbktdk.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163unkhwbsq.html

[R08] 数值比较
来源：http://www.xuanzx.com/163tsuaubnl.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163lqlecrdc.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ntqobzpq.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163undxilvs.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163mnqcihye.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163qxyaptrz.html

[R11] case 多分支
来源：http://www.sxryk.cn/163torjfbll.html

case "$1" in
来源：http://www.xuanzx.com/163akbtqwit.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163vrorykpi.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163lclxphqm.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163zivwuyyh.html

esac
来源：http://www.sxryk.cn/163fwtlwgub.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163bohibryx.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163pwnphppb.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163hkgeqzmt.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163fkykyyry.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163ywnrrrgg.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163nlqapipu.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163xfcquwlt.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ivgijfrh.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163krnneovs.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163xaqwfdfu.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163hcqcyprf.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163bwsfeqnt.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163fntulvls.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163qywoxgds.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163qmmyloax.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163bdmzffei.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163oecabcrc.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163dsizhbsp.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163rjdnyigi.html

echo "${#s}"
来源：http://www.aibaodan.cn/163gyknifdj.html

[R22] 截取子串
来源：http://www.xuanzx.com/163hwrivknw.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163cymeneca.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ecwhnsxe.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163johgogxb.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163kyfhfesz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163maewcjoo.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163ijplsspz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163vjpcajjt.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ngpttdjd.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163majstort.html

[R27] 算术展开
来源：http://www.xuanzx.com/163gmxdxcfu.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163qenbaatw.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163qrhdpjas.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163sguzjbvk.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163qetccqsu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163jexnhmty.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163rofyxovp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163chulqejq.html

[R31] 局部变量
来源：http://www.sxryk.cn/163bitjgzsm.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163qqhbrmtb.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163rvukypnw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163xbdpkiey.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163movzehiz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163lnhctolm.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163nyzdzped.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163wbjgbbxm.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163rgoywlmy.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163njcftjid.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ezkanwfv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163jdvlczqj.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163kumjbqap.html

files=$(ls -1)
来源：http://www.xuanzx.com/163vozplunk.html

[R38] 管道串联
来源：http://www.xuanzx.com/163akskoydt.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163qkgyyvnk.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163geyhcevk.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163bihusbir.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163fdtafars.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163hrjskgsx.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163thnbfvdl.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163ihaexlup.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163ljniytup.html

wc -l < a.txt
来源：http://www.sxryk.cn/163xawzwqhs.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163cnigjppq.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163odljgvcp.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163jzytyrpe.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163koecwmuc.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163tzmhtkhn.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163ymeokybb.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163jhzujbzf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163cnijlpgu.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163jsrsjllj.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163nnuuicru.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163qkfzrafn.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163kacvrqto.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163hijjvfmg.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163cdkmfpyz.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163hvwzjsdi.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163sniacuff.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163xneyudxm.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163uiydfmmi.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163qumivpxe.html

wc -l a.txt
来源：http://www.xuanzx.com/163juotgsdk.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163facrqngv.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163cwuwsjiz.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163zfgnijiz.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163uulqrrey.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163wbfjagho.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163ypgxscgx.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163hbjwgnth.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163swxhftrk.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163xrkxlzvf.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163pxvqxnyd.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163hyeilyvu.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163jlyxmryk.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163yzobqdma.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163fwlpzlpe.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163dpmpuohh.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163vptfngti.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163egkwcpal.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163rzimartb.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163gcvikzez.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163gwvjkvhu.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163lguunfcr.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163pvhnxjfj.html

[R64] 结束进程
来源：http://www.sxryk.cn/163yxqxgxdo.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163ciwycota.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163wuwlnaig.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163cogxbxcp.html

[R66] 定时任务
来源：http://www.xuanzx.com/163wxbcoqcd.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163glbecjur.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163fwvidbrc.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163tkaxtrfo.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163nuctkxku.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163oqjlfwzq.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163cszwkftu.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163begeutqk.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163yojkvpjt.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163kmgvaxrl.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163gshinibo.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163qbsdzaku.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163xgsdsinz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163dhamluau.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163eynyqely.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163pisasstt.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163izpzjnhw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163bftarbin.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163xwyuxzev.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163mmpjpzzw.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163eaoilgfb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163qprmfyjx.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163savwbmpe.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ogfhpxtp.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163builxgnq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163uzfyeadm.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163cnwxqedi.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163ptnjmjvx.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163blieznav.html

time ./run.sh
来源：http://www.xuanzx.com/163cphsqdzg.html

================================================================================
来源：http://www.sxryk.cn/163ybqernqr.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163bxhpmqjp.html

================================================================================
来源：http://www.aibaodan.cn/163vgxcyhtq.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163kjigodol.html

#include <stdio.h>
来源：http://www.sxryk.cn/163kjxvnntf.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ywbrbycw.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163vtdmslgm.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163lmxmzlql.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163lsxmqtkl.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163hkbdlsof.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163zcbcjfey.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163wqmzhcua.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163fblidfww.html

strlen(s)
来源：http://www.sxryk.cn/163iohcpxrx.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163mqyzeiei.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163owhdanfu.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163cteramdb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163xeramlzd.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163jfuojdig.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ovpgtdjc.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163bkbdirrr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163xynsqvku.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163hfzxpszu.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163vteguqkt.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163fphkyecx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163yurilaod.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163qqsxiegr.html

fclose(f);
来源：http://www.aibaodan.cn/163tqhfnqta.html

[S12] C：写文件
来源：http://www.sxryk.cn/163aqpoatln.html


<!-- 参考信息 -->