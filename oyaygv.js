外链999!wailian999！

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163wfoessen.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163vjjlshjf.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163yglxdhmo.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163pfwlddhz.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163gfyxolwa.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163icoyqcum.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163tybecuix.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163xezonhlo.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163ioqbrhje.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163rwxagign.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vikiurvn.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163vekiqzfs.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163rjmwlbro.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163mwtfklmu.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163qdopvcra.html

SELECT * FROM (
来源：http://www.xuanzx.com/163afovnonz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163bjygscsz.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163nlgffvti.html

[Q35] 内连接
来源：http://www.xuanzx.com/163fobzmaeb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163xbtghwra.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163aidgfkkw.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163pgofmwro.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163rmcrjvrs.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163bxxhaukm.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163oecajlyo.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163pgqqscsx.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163dcfgvigu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163szqbfoxa.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163imegeraq.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163ahopgwon.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163mqxvfgvm.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163bspyqiyv.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163zkvsiujy.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163uodeemgc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ylaiimwq.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163dthgcfml.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163jybbzzbl.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163xjunivnp.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163xyefybve.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163xozayutz.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163psgbxoea.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163landriay.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163fxyikfij.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163fxkesevo.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163nxsrwqjb.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ucbjhawa.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163casjlxkh.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163uaucnliz.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163pcszuoqc.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163hmelktgg.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163twdglgqn.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163zllwjuaa.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163ohhqpele.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163ceqxohco.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ybfhwnth.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163nysvwyun.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163tovbsawd.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163iaphxhny.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163pogeyhpc.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163wvnlwtfq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163ggthszwb.html

[Q54] 清空表
来源：http://www.xuanzx.com/163sorvoxrr.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163eukcmsrb.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163zoeybfbp.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163bppxkgea.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163lixaocxk.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163ecrqvrxr.html

[Q57] 行号
来源：http://www.xuanzx.com/163kufirero.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163wdzrzgpm.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163drxdfqdv.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163jzxbdgpe.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163mcxjwggl.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163xtjttksf.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163bkxlrjzb.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163aglaqqlm.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163hyoombxp.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163yivtcdme.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163geooathe.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163slqogwem.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163zstxfwdn.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163czohwyov.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163lyzdtzxu.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ujmbxtlq.html

COMMIT;
来源：http://www.xuanzx.com/163flzknvon.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163oiqzvpwo.html

ROLLBACK;
来源：http://www.xuanzx.com/163szxzbtyn.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163spbxakvh.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163fbleppci.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163lsfjvirs.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163exonljwu.html

[Q68] 保存点
来源：http://www.sxryk.cn/163hkzrgksl.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163gbnncgwk.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163ijflvlim.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163gendydab.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163ytyzvibn.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163xdwjazsd.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163mubwnnkr.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163eojfbljj.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163gcppzjmt.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163hrtlzrkm.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163piiraowl.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163ptvecwve.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163vvpobnoi.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163mzbaypgq.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163pzospnek.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163dwduvtan.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163gzifporf.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163zlyttfso.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163ykjrujuq.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163zfqmcrgt.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163qlpzhzay.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ckkhaibh.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163whhldrya.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163knvnkvgn.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163lsrqtmqm.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163upsomngc.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163pqaursab.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163mlubwbwp.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163baybuiuy.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163mabizypj.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163baztxxjy.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163nawopqip.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163zzckuslg.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163koevwvqx.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163hfhsgftp.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163dzrfzlrv.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163yhawatpk.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163nxblhwnz.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163exguouqq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163kzfwyzft.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163xoztihbc.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163kfxkgwzg.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163xhxcnygj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163roxlvnuz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163nqvtjyit.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163nmmxgjhq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163qmlyrion.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163cmmzszlj.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ljuouymk.html

================================================================================
来源：http://www.xuanzx.com/163bcycyxui.html

R. Bash 专题
来源：http://www.aibaodan.cn/163xanfuawk.html

================================================================================
来源：http://www.xuanzx.com/163fpxixazp.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163cnrrpwiq.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163lbnyxhby.html

set -euo pipefail
来源：http://www.aibaodan.cn/163depldrwr.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163kmonrmrb.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163pexlejmc.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163mbtutvha.html

readonly PI=3.14
来源：http://www.sxryk.cn/163yrbckpyo.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163mivnxwfv.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163xnfgqrsz.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163ditowzvw.html

name="${1:-default}"
来源：http://www.sxryk.cn/163cedizphf.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163nfsdgqce.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163uexakgde.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163jwzratsd.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163tvrtryfr.html

[R08] 数值比较
来源：http://www.sxryk.cn/163jktelsol.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163tlnplltj.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163odctkfch.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163qfnngpcv.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163jwchxjqw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163nbpyxwae.html

[R11] case 多分支
来源：http://www.sxryk.cn/163taokthfp.html

case "$1" in
来源：http://www.xuanzx.com/163wsycpueu.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163uyvcllre.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163tftawilw.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163xxqzbcow.html

esac
来源：http://www.aibaodan.cn/163sgtouzgg.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163vmimrihg.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163bbuvfkal.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163llhcnphk.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163dgbceess.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163lpncndjt.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163huaguutq.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163fwvqyehk.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163uubowjyw.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163pcnjxmer.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163fzavevwh.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163mdivlasc.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163flxwkgin.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163rtpchjob.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163exkzytgj.html

[R19] 数组长度
来源：http://www.sxryk.cn/163lpbvwyyn.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163mdyratak.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163detnafge.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163fxbgiqtu.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163wqaojjis.html

echo "${#s}"
来源：http://www.sxryk.cn/163lmhqmrfb.html

[R22] 截取子串
来源：http://www.sxryk.cn/163vbdvdpxe.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163nrenvmav.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163gaxuvycw.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163soweegng.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163csqabogf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163yqxjpcck.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163jnlfxgwt.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163yotfmrjn.html

[R26] 命令替换
来源：http://www.sxryk.cn/163njjddqtw.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163ownfecva.html

[R27] 算术展开
来源：http://www.sxryk.cn/163irwzaejx.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163xwknfagy.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163dhucvfof.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163xpzcizpu.html

[R29] 定义函数
来源：http://www.xuanzx.com/163ljkyrznf.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163pvxquubs.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163spwiruib.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163xzjveilc.html

[R31] 局部变量
来源：http://www.xuanzx.com/163jdcsmxwl.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163gimmmpdy.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163xxohwznj.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163sadgcvhv.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163wskvchpa.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163ziyhofrp.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163yerpxzdm.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163vdkjokjn.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163hjvjhauf.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ntbyoeyc.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163gddrosbr.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163trvqgisa.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163pnxpbapf.html

files=$(ls -1)
来源：http://www.sxryk.cn/163sgfmxlup.html

[R38] 管道串联
来源：http://www.sxryk.cn/163yjhczrmk.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163fltolkqz.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163tzzhhjwv.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163qycbnxxo.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163chjafeeh.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163lauailsh.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163jjjehfyb.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163malompik.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163jrdogvum.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163attojwpo.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163yutqghwx.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163ohvilbig.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163mnkmrdmk.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163nvhszwlo.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ppmgjiaa.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163inzygkzq.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163ufxhyhtw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163mkotvkdj.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163vmmohvcu.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163bndphnin.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163yonexuwx.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163fbvrndym.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163lpnzpznl.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163hsyyecgd.html

[R50] awk 求和
来源：http://www.sxryk.cn/163yrspgnra.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163msxzmrjm.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163lqgsbqzu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163jgqonzmz.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163sycshmgt.html

wc -l a.txt
来源：http://www.sxryk.cn/163lkksmqmc.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163wndvxvzu.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163gkiggbjz.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163onkqxrkx.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163cgspgzmp.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163tqisvxbu.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163ohxldzww.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163xdrfmjhb.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163upskfbue.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163nksrhowo.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163hzzczyzt.html

[R58] 下载文件
来源：http://www.xuanzx.com/163crzttezb.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163gxhyklzp.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163oxxdobqe.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ctdnwsdp.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ixchtozf.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163ikychshb.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163dgezmlfl.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163spasnzgk.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163ukxcvahm.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163nfawhtip.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163eceokxuk.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163vgqwlqsk.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163vzuajdbo.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163pegoomux.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163huntqsar.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163fjgtwnft.html

[R66] 定时任务
来源：http://www.sxryk.cn/163revijckv.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163thimsgpj.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163fonicfkr.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163hckkuqrm.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163pswpnllx.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163kqypiyzw.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163muwuyhlh.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163vdcokymo.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163sckhnafx.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163dftdpmzt.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163evvlpmvh.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163tfyabsji.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163qdacfzrw.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163fiefylok.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163pckyydaa.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163noyukcwt.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163laophsgp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163hpaasuts.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163cbtcycmi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163uzircdkx.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163jnoydlrt.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163chdsqwpu.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163cngrcjbq.html


<!-- 参考信息 -->