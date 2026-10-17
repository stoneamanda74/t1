外链999!wailian999！

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163mcrixfiw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163gsiyfhys.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163qxczrciq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163kspanhyx.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163axrcrwff.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163hhdusnjl.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163dtbzhkpz.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163agxigeyi.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163rboabqtw.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163dnbblokz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163lgbziuer.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163mnsukdxx.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163gzqmmzyd.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163nzuutjkn.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163ydtkqitg.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163exjnwvla.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163gkrthdhv.html

[Q54] 清空表
来源：http://www.sxryk.cn/163gbyvbjeg.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163ooagfwba.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163hozknabs.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163hzinfwlx.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163caecgbqg.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163jjapawsm.html

[Q57] 行号
来源：http://www.sxryk.cn/163yypehvkr.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163sfrbcqsk.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163dlhjpyym.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163rxtudilt.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163wapqazll.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163netprgbq.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163fcbdvclw.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163pfpofpxf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163lfyhsbey.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163xvvkilqj.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163vdrdongp.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163geknrzpn.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jdbtjiqx.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163tmxdtaje.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163vfewsgcv.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163uxhynrlo.html

COMMIT;
来源：http://www.sxryk.cn/163blajcxhs.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163upxuismv.html

ROLLBACK;
来源：http://www.xuanzx.com/163gtlqsxho.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163jhqwvlzn.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163yoshrdub.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163kcrcfhav.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163gkabenoa.html

[Q68] 保存点
来源：http://www.sxryk.cn/163zcidrija.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163asednizt.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163nvlpomtb.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163ehpikhcd.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163hmgqcanl.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163prniyctp.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163cojbhier.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163smdarzgy.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163fommaaaj.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163jjqmfwrg.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163qzokruoe.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163tijgnipn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163tmgsjjyg.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163jyyylzsk.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ztsxjpve.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163preonutd.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163mfiulare.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163uuyfszut.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163cncikpst.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163urkmwqrt.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163tsgieara.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163wpdjnnur.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163bpaqeqkn.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163ksvljkog.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163ojkhzdft.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163wxshtxwr.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163brnerklp.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163ozwvwupr.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163obrdcnhq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163xhmicfnt.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163tkavbpxo.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163twrsnefo.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163iuurchqy.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163futhnjdn.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163sxiiqrby.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163lankvsol.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163xqlvdlpo.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163zjtrhfyx.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163fxxerhqj.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163ddiznxcn.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163rugpzhdl.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163mmvurawq.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163neiiknui.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163mqclocgp.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163immuahmt.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163gxcchhzu.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163wjasxetm.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163mpicqkqn.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163wuoacfzd.html

================================================================================
来源：http://www.sxryk.cn/163foylnmsq.html

R. Bash 专题
来源：http://www.xuanzx.com/163lflvezmm.html

================================================================================
来源：http://www.xuanzx.com/163iszsnofz.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163dyqjlvvw.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163jevmcmaw.html

set -euo pipefail
来源：http://www.xuanzx.com/163dzgersnc.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163wnufhlbz.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163rvwmasga.html

[R03] 只读变量
来源：http://www.sxryk.cn/163lfoxjqwv.html

readonly PI=3.14
来源：http://www.sxryk.cn/163gcvqhrgd.html

[R04] 位置参数
来源：http://www.sxryk.cn/163mkznnhru.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163mlnxbetr.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163wfupypke.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163vwqumzzh.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163pbzgznbc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163mxoqkebu.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163wbwwelrp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163vbarcmwc.html

[R08] 数值比较
来源：http://www.xuanzx.com/163ussjyusv.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163pgsuvnot.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163gjunhxwl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163qwhkhumv.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163odxvgfpu.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163dqdemrwp.html

[R11] case 多分支
来源：http://www.sxryk.cn/163gczmazrf.html

case "$1" in
来源：http://www.aibaodan.cn/163bzqljioc.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163mcaoopyb.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163mujlceib.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163hawnobyg.html

esac
来源：http://www.sxryk.cn/163olhdbmnf.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163pmkloluv.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163uwayjxfb.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163dohinens.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163cehjogag.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163udilwgdn.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163gfwxgukf.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163wmxomsmd.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163nnndcayx.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163zekxmvbq.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163akkxtzyw.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163ohypfueo.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163vvpxrwcc.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163umobxqjm.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163vxuvuudu.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ghxetudv.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163bnryysrk.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163binhvbvk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163tsaczcmf.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163uyoqlrbb.html

echo "${#s}"
来源：http://www.aibaodan.cn/163xjkywwsx.html

[R22] 截取子串
来源：http://www.xuanzx.com/163vspawqce.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163cpvsfwvb.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163vbxtsqwl.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163nefroakm.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163osxgbcoy.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163komvwxon.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163ysjnkyed.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163ntzbrauf.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163zjqecbhh.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163jesvvcoq.html

[R27] 算术展开
来源：http://www.sxryk.cn/163ihbdccqa.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163qnggcbug.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163iwtigxoy.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163xvaiimqt.html

[R29] 定义函数
来源：http://www.xuanzx.com/163tzhvpxoq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163rgdxwsqj.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163yfifkxyc.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163ztfgintf.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163nypegjfo.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163fzhanahy.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163wlmbyjcv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163ofbjlgzx.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163hnfteall.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163qnrnclii.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163cjqhfkvz.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163zcfopndy.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163whwtdgmh.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163lpprtmqm.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163udxzbzec.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163bwnycmkl.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163iikuskcm.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163battcxdj.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163rvqvuwoo.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163xilalosd.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163evwpvqep.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163uojilszh.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163ivilmomz.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163ekjkgvhx.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163wmqshyuy.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163dyiehtjd.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163ypzbicno.html

wc -l < a.txt
来源：http://www.sxryk.cn/163kqdkfqzx.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163rtwwwajr.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163rmkdzrbr.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163zzszjxbb.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163cobjopbp.html

[R45] 批量删除
来源：http://www.sxryk.cn/163uqjxgrvd.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163emrlljby.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163kgsnrtmb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163fgcmyznn.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163lvcqasdb.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163deucpmhp.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ccpmhfqw.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163eedmuzkt.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163tzbkhfct.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163utvqpcbp.html

[R50] awk 求和
来源：http://www.xuanzx.com/163xseovekw.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163dxgckdhx.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163agyqmesr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163kcmadaaq.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163oknesavf.html

wc -l a.txt
来源：http://www.sxryk.cn/163mbqwuodg.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163kghxrtkm.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163nsmxfrqu.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ntujqhvk.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163edosttmf.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163gfkcjyhp.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163tjdkxeqr.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163bkibvxda.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163yijqgxeo.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163vkvvjckz.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163yepthlke.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163jrmpcezu.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163fthvbelp.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163yexkxomd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163aloojysv.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163lhlddqde.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163dfshfhma.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ktmtmdbf.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163mnukkkwl.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ehevxawc.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163lxnvcfft.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163gcwrshpr.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163yhihjpef.html

[R64] 结束进程
来源：http://www.sxryk.cn/163zhjpqddi.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163zhawqrcl.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163armhkrcr.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163lqwqczzm.html

[R66] 定时任务
来源：http://www.xuanzx.com/163hivnibjg.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163urfhhjis.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ziutqdon.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163bmgakwtv.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163hixkutkg.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163orpcpyqg.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163vmirisqp.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163hqnwqbad.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163dxejnihd.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163tgjrfezi.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ltcmpnoo.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163zfrgzijr.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ybuhfhrg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163iiuuftwr.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163irmvdcqp.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163ccoggebi.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163lkefzhfx.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163seechbww.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163teazpydq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163njixtvas.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163uwrwwggi.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163svcnwclz.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163umiujyed.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ltdpcvbj.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163xgitkrks.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163vzlsnhil.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163twcohwdm.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163eadutswv.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163fhkceqan.html

time ./run.sh
来源：http://www.aibaodan.cn/163sqaxisvl.html

================================================================================
来源：http://www.aibaodan.cn/163hlykqolt.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163rvdektnu.html

================================================================================
来源：http://www.aibaodan.cn/163tftvhsgo.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163aegbxais.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163yimlgelr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163feevqcjd.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163eznbdtaz.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163ohbjnjxo.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163hklgboss.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163ruxbnwbr.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163oowrbdmf.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163dgquctnq.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163fiwaeggq.html

strlen(s)
来源：http://www.sxryk.cn/163fxwugjyj.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ngqetwfa.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163utdbucww.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163qxzigcqh.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163jeqmkfkm.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163kuvlensg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163exsqiwiz.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163lqjwuqwv.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ujgnyhwn.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163uvykynwz.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163vbacuoel.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163dvivxzzt.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163jfimoked.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163qpgxvgyy.html

fclose(f);
来源：http://www.sxryk.cn/163cwudvcfv.html

[S12] C：写文件
来源：http://www.xuanzx.com/163jfnintiw.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163xonjqwal.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163tzkiicsu.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ynvmnvct.html

[S14] C：枚举
来源：http://www.xuanzx.com/163thzusrgs.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163rxwcefnd.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163oekowboo.html

(double) a / b
来源：http://www.aibaodan.cn/163xargxrao.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163tlzlgpks.html


<!-- 参考信息 -->