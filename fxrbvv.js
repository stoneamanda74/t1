外链999!wailian999！

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163lmucusfr.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ieykpedt.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163wyaepxry.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163icbatswa.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163cewfhmsa.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163vzyoybpo.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163dpmlqokh.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163qukdkznq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163lxngsxfa.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163mdvnsonq.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163mdpviqzz.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163qnrjshvb.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163atfuzaod.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163vzfexigp.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163lzccxyba.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163fbmycxhp.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163auoyrgeh.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163gzecoesp.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163nplyrjxg.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163rsvsqvin.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163dmdhdzfh.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163xgldshiw.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163igxecrcj.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163hznchkop.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163uluwuwtn.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163kmhmlgzk.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163enurwamu.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163feyjooix.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163yznizjee.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163uuldhcld.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163hxxnshsm.html

[Q57] 行号
来源：http://www.aibaodan.cn/163zbkyjqni.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163uoukshjc.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163szmuvgfc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163axxbvfri.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163plwnxowl.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163wrshvagv.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163plofevoj.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163apldcbtk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163whfjocep.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163adxwtrgs.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163mtevovau.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163cwtbkdlc.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163solwcvhz.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163joclxgag.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163atddvkel.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163hvdqbgca.html

COMMIT;
来源：http://www.xuanzx.com/163rumsacsl.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163kvybazbo.html

ROLLBACK;
来源：http://www.sxryk.cn/163bjxrgpky.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163lzifxqmm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163wrcdhogu.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163vyfjlyzc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163yevcemov.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163tximfnsn.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163ahelessu.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163vqbfjdss.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163cruhxhai.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163cqcsjssd.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ilpeeasv.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163zmezwclo.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163dppqtmdl.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163zuzabvhy.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163pydzmfbm.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163cskmlwnm.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163abfuehgu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163gfbrsgin.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163ynoeogpr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163mdywkizk.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163qiyzxqwm.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163ljttzzjx.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ffnygujd.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163ccusuivy.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163fqmomvwc.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163hrbnxfrf.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163nuvucrjn.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163qwlttjfq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163xdkggrfi.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163kfdfnhvz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163kszjamnd.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163piekwxhq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163hdyecfmv.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163uhvqkfnk.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163tvqaypsb.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163hjpfsmep.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163ybvuxpoq.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163hjkhccbf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163cioorlvn.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163vqsyppuc.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163dnoznirg.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163aseqwppo.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163stqfzgzo.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163aguuvfqz.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163zkkdrrca.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163djvlvmkz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163brezehcm.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163ktowqrjj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163tfatlytx.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163qccpwxcl.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163zcdjbjwt.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163dorztzfr.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163pwumqgcv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163dirjbsbs.html

================================================================================
来源：http://www.xuanzx.com/163otowoder.html

R. Bash 专题
来源：http://www.aibaodan.cn/163teglerek.html

================================================================================
来源：http://www.xuanzx.com/163ahwypixa.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163lebljnuy.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163eezjwusf.html

set -euo pipefail
来源：http://www.xuanzx.com/163iogqdwcx.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163qquqvihw.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163xbfzrvsm.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163qwhohoxz.html

readonly PI=3.14
来源：http://www.xuanzx.com/163uaolctbs.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163tzwdukrh.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163nukxaexy.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163rtiyiswc.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163mkghlnwp.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163yruxvtrm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163cqisefck.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163ircudfna.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163uepdbzmh.html

[R08] 数值比较
来源：http://www.xuanzx.com/163tkxteanx.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163muwkmbzh.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163zrvseyqi.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163wzkcdvqr.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163lghiuwbx.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163zzytjiax.html

[R11] case 多分支
来源：http://www.sxryk.cn/163vyqxjlje.html

case "$1" in
来源：http://www.sxryk.cn/163cqhbaukp.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163fkbdlqqj.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163oxbkstaz.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163zfznkpob.html

esac
来源：http://www.sxryk.cn/163myweychj.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163xkxexvrs.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163igllnrji.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163gzwmvbsd.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163jodfbvsc.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163fgwpzvyb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163htywulbz.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163rfwbkevp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163seosbspc.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163ujvizxnt.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ggxynihw.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163xaxcztqn.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163kbjchunx.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163gpndignm.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163bwqmfapl.html

[R19] 数组长度
来源：http://www.sxryk.cn/163tuzgvytz.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163xtziabhf.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163hbjzikmr.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163kqpxfhgu.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163grkbsrwv.html

echo "${#s}"
来源：http://www.sxryk.cn/163cqucfbhj.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163wuzrtoxn.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163ixusjsuj.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163uxlflnzh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163olonazhg.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ujjyhnao.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163nhrkelfd.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163znpircji.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ewmcrnrb.html

[R26] 命令替换
来源：http://www.sxryk.cn/163qeabouqg.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163qlktfqvg.html

[R27] 算术展开
来源：http://www.xuanzx.com/163iizqvdie.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163jkoaucrc.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163anljaios.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163ofagfuvv.html

[R29] 定义函数
来源：http://www.sxryk.cn/163iktajkpd.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ocsvsemi.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163ilsfgdba.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163zdmuvjta.html

[R31] 局部变量
来源：http://www.xuanzx.com/163ujouhnwh.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163gwweygzk.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163jucmwppz.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163hqunrjhf.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ztzhsvpf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163wkiyfxde.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163ruldbtki.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163chdzprcp.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163oqseeooc.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163nezyzvrm.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ddppzdyh.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163igfgdajb.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163qpzgolpp.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163knztmgnv.html

[R38] 管道串联
来源：http://www.sxryk.cn/163geydamvv.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163vskqnkdl.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ambehiuu.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163mmsiivcw.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163vzhoxxxd.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163cewmattj.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163unhephyu.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163ivwldhds.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163vgylirge.html

wc -l < a.txt
来源：http://www.xuanzx.com/163xynesnyd.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ndmkakji.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163kdhvmdun.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163egmigscv.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163tzuumvct.html

[R45] 批量删除
来源：http://www.sxryk.cn/163emsmteoe.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163culrmotz.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163nrspsvid.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163pxskuxyq.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ehoqzufz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163yxbvpssi.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163dfpmwsgw.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163rtgiquxd.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163gnjpymzm.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163ewpvtodb.html

[R50] awk 求和
来源：http://www.xuanzx.com/163aehnmvof.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163wpqqygek.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163znxsccyj.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163pdjdfbgq.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163tthygdso.html

wc -l a.txt
来源：http://www.aibaodan.cn/163wiwihnia.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163hqjxaeam.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163uvldjktk.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163mkrterpy.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163falmjndn.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163ytvukqsi.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163hlldbrih.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163zgzcwxuf.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163btmqiyco.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163aguwltge.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163nttgrsyb.html

[R58] 下载文件
来源：http://www.xuanzx.com/163ydsmrbyl.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163elpahotk.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ioewprub.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163fyxwhqhr.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163zavynckc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163ybxepnkt.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163ewsadrcb.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163qunjoamw.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163flhyvszg.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163whcpyort.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163pehmemix.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163vyezrjxm.html

[R64] 结束进程
来源：http://www.xuanzx.com/163sjkkfuzx.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163yvvrfhtd.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163ejjxuwtm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163xrgycopx.html

[R66] 定时任务
来源：http://www.sxryk.cn/163hgryizvo.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163hffrrejk.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163qrirzydj.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163angrxrbw.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163rvftmdqx.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163lppfmzjl.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163dyowbllz.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163vxvvshmj.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163avcwaeoa.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163mrlnsgtx.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163rpyzkyrb.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163zrlvuxiw.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163jhikyeqc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163xlqspqad.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163uzunxkss.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163wsdgvdqb.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163rnxtczdd.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163yulucxhh.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163jpsvdbnc.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163kbjrykfu.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163mufdrngm.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163xinsyzdd.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ieqdyfjz.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163zwxawpdv.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163allgxfwo.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163xlpnkwaj.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163oxwakwep.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163xvoqapsc.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163ahcevzts.html

time ./run.sh
来源：http://www.xuanzx.com/163wjwphbto.html

================================================================================
来源：http://www.aibaodan.cn/163nnugtrpm.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163tknorgss.html

================================================================================
来源：http://www.xuanzx.com/163fpwssdmq.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163jwnhefas.html

#include <stdio.h>
来源：http://www.xuanzx.com/163gzxwlxtn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163esakgeot.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163ojhavfjy.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163dbtzwpai.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163vhpfocni.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163vmslgnsw.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163vjqfrqoy.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163lrhugzzh.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163fgkumosv.html

strlen(s)
来源：http://www.xuanzx.com/163rmcxzmap.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163seowfhju.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163owhqfdle.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163atoesohh.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163fehaddpn.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163gzsiwjbt.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163fgaqczjw.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163otsvadfj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163anazaypw.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163abyorsno.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163usozbmqp.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163phvikxpa.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163pxzdhgpw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163levyfrrm.html

fclose(f);
来源：http://www.aibaodan.cn/163uurutbpx.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163sdrdgpsf.html


<!-- 参考信息 -->