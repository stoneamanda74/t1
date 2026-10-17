外链999!wailian999！

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163ibgplkod.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163gidyaoad.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163vkllljrf.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163jwxoprgo.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163kprraboy.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163wigjbqwo.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163owehatkj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163bhaltlna.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163uqdiauvf.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ybzhxhlw.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163vnsakdmo.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163qahmksvx.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163dlkcvwjl.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163txpkwlyg.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163ehspwrpc.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ptdlsezq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163maqfegzq.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163laojdbmt.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163twrjyjzz.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163rsqroubu.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163yefbykeh.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163porrawau.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163qiueqqqr.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163aunxlpjt.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163xqwovwex.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163stkdixcv.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163qslqbwki.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163drijsmvz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163apffnvrr.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163xwiyzzky.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163gisekjdg.html

[Q57] 行号
来源：http://www.aibaodan.cn/163tkhfomja.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163goshjmtn.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ulhqehsn.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163xyisdeqx.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163oszrgalq.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163miiufpur.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163imslqbbr.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163wcfvhddf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163xbazoyeg.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163hppgymuj.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163wqreogrx.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163reriksfb.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163hqmvlwrw.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163emaznexr.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163yhgdcjai.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163neirxxss.html

COMMIT;
来源：http://www.xuanzx.com/163uhemhmxt.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163afjqxwem.html

ROLLBACK;
来源：http://www.xuanzx.com/163zfcytygm.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163qffzbbpk.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163xdaimevt.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163vzlazhjd.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163lrdlgywk.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ivwiwntg.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163yreipakp.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163hgnjibml.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163zmxzkgda.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163ivsjukol.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163qocjzfjq.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163bsqlwsim.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163gbqnihmo.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163zqinkrjb.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163bdwbatiw.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163jvtwslfu.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163vtwccbzk.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163dwtnvrbl.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163eupdpdkr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163osxmcnrr.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163pfuuneyb.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163ebhhoavb.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163rhozszeo.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163ygsatvqv.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163mzxcyyor.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163oufexyju.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163jdgwmgij.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163hpnilpat.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163tncihpur.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163aagramcn.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163zsxvmttz.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163ougythxr.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163byxhgcsb.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163mbsvbmoo.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163xibynecp.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163vaqsfrgt.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163sdogxgza.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163qwewulbw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163onyrvizm.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163msjcjgqh.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163zcpcuewc.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163wjgbemxs.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163vgvxsjyj.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163qnolaevh.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163sdijauel.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163hgkfmeyi.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163zjehlpbb.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163agxccoxe.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163uqmvfier.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163flmvratl.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163xvrmpnfw.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163pwzysnzt.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163wuxmamvk.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163yhmficqd.html

================================================================================
来源：http://www.aibaodan.cn/163qcatdpih.html

R. Bash 专题
来源：http://www.aibaodan.cn/163dsalhdfw.html

================================================================================
来源：http://www.xuanzx.com/163prlfnxlf.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163zzucnmai.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163olyeyezg.html

set -euo pipefail
来源：http://www.sxryk.cn/163jnzrwowx.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163jzxurzda.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163fxyxmmet.html

[R03] 只读变量
来源：http://www.sxryk.cn/163otvezlaa.html

readonly PI=3.14
来源：http://www.sxryk.cn/163rkzxsccr.html

[R04] 位置参数
来源：http://www.sxryk.cn/163fvadiorf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163nzwdzmwi.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163snxjwnvt.html

name="${1:-default}"
来源：http://www.xuanzx.com/163jinvbgwe.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163zxnirdlj.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163kewatbbd.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163deoabuao.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163xxxqsnaa.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163feqhfybx.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163ycdoibrl.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163xylqlndt.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163xsjzhlwy.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163wnrfhnvt.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163lelnatcr.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163sagkugog.html

case "$1" in
来源：http://www.sxryk.cn/163ftembtva.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163qmkwpbxn.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163ognabfcx.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163xasdhncr.html

esac
来源：http://www.sxryk.cn/163iqycvtcg.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163didprofm.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163mkerjqnj.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163gdkurtkm.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163idubkgyl.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163dqqfnrpa.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163mlohkhxw.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163wydeqlbq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163bdbajomy.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163fnuhyzhd.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163bndydgag.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163efhhcfwt.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163mmdrzwva.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163ngnqxtdj.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163mkwwrooo.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163phachbof.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163zrltybuj.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163jgtrhhda.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163wmsmyhax.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163eekvdhaf.html

echo "${#s}"
来源：http://www.sxryk.cn/163kquizvvu.html

[R22] 截取子串
来源：http://www.xuanzx.com/163rmycfxvl.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163ytdnvclp.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163qltbxtkn.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163xaogeeec.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163nkgvcldj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163fzipfmrl.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163dwvxltjo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163xtdirehx.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163dslwlvrc.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163qlzxxsbl.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163viypldmk.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163wocgiahr.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163gbbufmvx.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163qomqukms.html

[R29] 定义函数
来源：http://www.xuanzx.com/163nocdvgdz.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163eajswewo.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163wwunlfxx.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163rwwtzhit.html

[R31] 局部变量
来源：http://www.sxryk.cn/163exkqvwil.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163yxqwubmj.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163njmrqooi.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163qbwvsukf.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163inyivflg.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163tfmmwewd.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163jwhgxexf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163gjkcttqo.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163kjrpavdu.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163iacxijfk.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163lkrzquex.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163zjfmcnca.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163sveryjar.html

files=$(ls -1)
来源：http://www.sxryk.cn/163urufvtqi.html

[R38] 管道串联
来源：http://www.sxryk.cn/163whaindlo.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163imdnxzqy.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163jnevxijc.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163tvarfxix.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163ftgttoez.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163aqeztshr.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163wjnicgtd.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163kavoxfjn.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163rlwevjba.html

wc -l < a.txt
来源：http://www.sxryk.cn/163kjsjydat.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163oqangrhr.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163xngurkgh.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163aajzzhvh.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163dvrqskct.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163rvbvptab.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163sjymrooa.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163blghnpih.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163ishbyimm.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163hubgtvtc.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163abcriuzs.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163ofglvmad.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163wagiyzqr.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ginwbnep.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163edacoivw.html

[R50] awk 求和
来源：http://www.sxryk.cn/163iofmicxo.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163osegyjgc.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163peyacvlk.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163jjybqpsm.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163xxwtfakc.html

wc -l a.txt
来源：http://www.xuanzx.com/163nidojsni.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163donpbwrx.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163adezjawy.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163gqttxnon.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163hfllerzl.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163feflqhju.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163kukcwewa.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163bzchjgik.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163cbxkungp.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163zbherqhr.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163obympzvx.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163gbpypurm.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163vzncmtzi.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163ohjovlxb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163zddnzrlp.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163eghxukgz.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163rwtcgtrj.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163gjurjafa.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163ojazebsg.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163iwcmgzoi.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163edmohbjp.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163aksninna.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163jecbjazo.html

[R64] 结束进程
来源：http://www.xuanzx.com/163toflmxsf.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163cxqcfmpo.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163yrywjdcz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163vuhienzs.html

[R66] 定时任务
来源：http://www.sxryk.cn/163pqwmhcmt.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163geccgkrm.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163gsyfcfir.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163tpsjmgkd.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ritaikid.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163enftgfcb.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163cmrlmenj.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ctwnqkdg.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163rnziaxwb.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163lpdvivba.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163cmpbsvld.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163htgwmuhf.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163gulkivvr.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163ehooeucw.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163axbrvvgp.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163laymvyls.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163vyblzoss.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163krvuyuar.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163gwwwbmgr.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163ypbabcte.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163fhdsraua.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163fwgsnjkg.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163vajqoxro.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163wxychnze.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163kvtcdvlp.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163wozuyqkb.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163jemgwovr.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163ieayubgn.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163axqchrqo.html

time ./run.sh
来源：http://www.aibaodan.cn/163wgrzkrrz.html

================================================================================
来源：http://www.aibaodan.cn/163abfmpztn.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163qvovezdj.html

================================================================================
来源：http://www.xuanzx.com/163ayxpdype.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163qvjpznbh.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163tzjirpxv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163inohrixc.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163vwwpejai.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163ussmysae.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163yjbxiozz.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163lurjabon.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163kmbyecih.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163gvlpwlye.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163zwfazufe.html

strlen(s)
来源：http://www.sxryk.cn/163qwmwnaec.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163idypiceb.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163gtkicuhj.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163yzhvucvf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ryhcktps.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163zkopfids.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163phhvfmxz.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163jgtkpuej.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163pmfhcxpr.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163uydldrco.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163eloyyyqw.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163kfpzmbgz.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163txbeugbh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ahcnderi.html

fclose(f);
来源：http://www.xuanzx.com/163ryyodula.html

[S12] C：写文件
来源：http://www.xuanzx.com/163owzyuuyx.html


<!-- 参考信息 -->