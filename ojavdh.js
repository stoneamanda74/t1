外链999!wailian999！

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163cjcwritx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163dlpeabnd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163okktqozu.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ornmhvyu.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163wsgfzvex.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163pxxtmmvb.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163bzdczedm.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163wgzcjloz.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163fckvbdpr.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163vgrhhvkh.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163yskpeukr.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163wuzmjdbc.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163norrlpaq.html

[Q54] 清空表
来源：http://www.xuanzx.com/163sdqdscca.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163xfbwyxsw.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163nihlhibx.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163npwiwuve.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163gwnbsusy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163oqfhpsux.html

[Q57] 行号
来源：http://www.xuanzx.com/163gziplppl.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163zkejojcx.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163mdpawsyg.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163ymregmvn.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163pptvcefx.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163izupjmey.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163fuonsctc.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163lnqkklgy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163gcgoqrtm.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163qohrnqjn.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163kjmpktud.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163qbhbadjy.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163hmxprqda.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163rqnferlh.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163asnrwqls.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163zuuvhgkx.html

COMMIT;
来源：http://www.xuanzx.com/163pqqaiett.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163zjlbgtcp.html

ROLLBACK;
来源：http://www.sxryk.cn/163kzfpiwzj.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163vmkwifdb.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163jxqabmet.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163gesyxbjw.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163hlruxsnu.html

[Q68] 保存点
来源：http://www.xuanzx.com/163xihjskjs.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163cwglkeob.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163clrsxrok.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163gyiqdfex.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163aawigopn.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163pmaynens.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ifuujizp.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163cutlshjn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163utrlbqkc.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163xaauujvz.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ydecbrxj.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163kxoflphl.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163zewtjrct.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163vkwodpku.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163ahffvqum.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163cfembjyr.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163djnvpeuq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163hbeqdvmz.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163cffzeskc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163tpdltzri.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163gqusirrf.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163magaawqa.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163fmuglduz.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163tmbuddtu.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163lhxvghvg.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163gfdtcbkn.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163zwdfffoa.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163xadycpds.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163nxkxoinr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163hrxlytuc.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163vofuynlm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163kjpldrnk.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163yotxludq.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163lvqijkdp.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163lgtaatih.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163mvgzrvyt.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163qntdyvqj.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163licvxcon.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163artpdjsv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163vcwelhxk.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163fwfrisdq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163pdzfbtpa.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163qbmkwmsy.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163wopzqhiz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163tskdqqqe.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163jtdptpya.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163ucovefjr.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163hykrtxse.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163mpdpqaas.html

================================================================================
来源：http://www.sxryk.cn/163gewtomvm.html

R. Bash 专题
来源：http://www.xuanzx.com/163jzmblrdm.html

================================================================================
来源：http://www.aibaodan.cn/163dmjbboay.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163qfivhykx.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163xyvfkpkx.html

set -euo pipefail
来源：http://www.aibaodan.cn/163qccodlgq.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163jybazrsk.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163kgkwlyeh.html

[R03] 只读变量
来源：http://www.sxryk.cn/163wfvxprse.html

readonly PI=3.14
来源：http://www.sxryk.cn/163xkmlufbz.html

[R04] 位置参数
来源：http://www.xuanzx.com/163ytefrugi.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163pcdblnyw.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163dbjuhpbi.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163wbxoacxo.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163cyailxct.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163kmcamvno.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ggkojxso.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163rlzefxwg.html

[R08] 数值比较
来源：http://www.sxryk.cn/163crwsobki.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163pzczvrhw.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163oktgqvez.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163yzsalord.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163qsazwpkp.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163xmbvtnor.html

[R11] case 多分支
来源：http://www.sxryk.cn/163toibheae.html

case "$1" in
来源：http://www.aibaodan.cn/163thqrhxge.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163mmtsmwsr.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163lpnmatmx.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163gsxfmlvz.html

esac
来源：http://www.aibaodan.cn/163dtwxspsd.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163dcsuauok.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163wvkfalet.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163zqihnpsw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ilktfssl.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163jbaytkmc.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163ydsypvko.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163fwkmufin.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163fjrwfkra.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163jcmedidv.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163getbwypt.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163eogbulct.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163qzjyiimg.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163jgfvqfhw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163shmnzqlc.html

[R19] 数组长度
来源：http://www.xuanzx.com/163xejbbphm.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163hjvbyxcd.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163opelzzfo.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163snstrxsn.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163ilkvwejr.html

echo "${#s}"
来源：http://www.aibaodan.cn/163nowgqwhe.html

[R22] 截取子串
来源：http://www.xuanzx.com/163hwlsqzrl.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163qmdbxram.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163asncmseo.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163dxmkioyq.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163oxglacpt.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163zwdvmjap.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163hfwqhapw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163jcsfqqpp.html

[R26] 命令替换
来源：http://www.xuanzx.com/163zbxbsbsd.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163elcbqolf.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163jgskbdoh.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163dfzzrtpg.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163tnjjouuo.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163sagpstju.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163hekjllkw.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ldxtektx.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163rjqcaikq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163iziuwxzb.html

[R31] 局部变量
来源：http://www.sxryk.cn/163nhqjkuqk.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163uwayfqcq.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163iowyxysy.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163rqtycjal.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163knsjhmfx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163bvyseozz.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163cbgaxids.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163svctivvb.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163cgmlvuue.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163shcvyvbt.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163dbuzcuzh.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163zecgnmzs.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163aqwhtzmr.html

files=$(ls -1)
来源：http://www.sxryk.cn/163nryncgtb.html

[R38] 管道串联
来源：http://www.xuanzx.com/163gwirvobd.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163orftntmd.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163bxapzrhv.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ygiejilr.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163lpeqanmt.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163klzahqxo.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ebjobcsm.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163vtfsppdu.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163rwkqvacc.html

wc -l < a.txt
来源：http://www.xuanzx.com/163crgpephn.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163rowvcyrz.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163rigtnpmw.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163yyypccmx.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163vrjbrrnz.html

[R45] 批量删除
来源：http://www.sxryk.cn/163seqoxaxa.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163tglngzmv.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163onobdfoh.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163tihhhcyu.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163qzmvztjo.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163psfnadpw.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163hubzifej.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163vqvuwmfl.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163clfhnifw.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163yyxauvro.html

[R50] awk 求和
来源：http://www.sxryk.cn/163hnxhvsoh.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163smsofesa.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ujnwgzrb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163imkutigq.html

[R52] 统计行数
来源：http://www.xuanzx.com/163xcssirze.html

wc -l a.txt
来源：http://www.sxryk.cn/163tjicflno.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163ssswdokn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163ardrgyau.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163hunoyocs.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163twypjfih.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163nkldzalj.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163xihjnxab.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163syphwydf.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163keoubzbu.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163vgnqgwek.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ffgmlpzc.html

[R58] 下载文件
来源：http://www.sxryk.cn/163kbdhycrf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163rqgpahkp.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163odmvjxhe.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163xfvzhqcs.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163mljhakdf.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163ddvsalor.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163gmxrqzkk.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163gmbppmtx.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163mfqqllnh.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163bbpvzehz.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163pbnwwvyw.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163uohinwru.html

[R64] 结束进程
来源：http://www.xuanzx.com/163yqnllzcg.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163hibaldpl.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163qougqugp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163lnmcuzou.html

[R66] 定时任务
来源：http://www.xuanzx.com/163kxobvspz.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163ouatgkio.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163gpsvcezq.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163eobubytu.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163jrybwhcl.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163crqhuzmy.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163gtwgijlz.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163vfxzkkvf.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163qdjseqfs.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163nqmirxqw.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163lwxrtrxl.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163uefqmiwg.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163bhkppbnc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163pnxwbzlt.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163dreqknlv.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163mnmdtnqq.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163dcutdjxz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163nnrerjmv.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163kdmpkzhk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163eudacahg.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163zcxsyhtb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163isqrnced.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163dqvzngca.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163qibwyijz.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163qyllglkc.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163hpsdvroy.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163gnjvjltk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163zrctzrqh.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163qmluwyko.html

time ./run.sh
来源：http://www.xuanzx.com/163mbakrspx.html

================================================================================
来源：http://www.sxryk.cn/163hdmxtzel.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163odsldhym.html

================================================================================
来源：http://www.xuanzx.com/163yogdvkie.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163pxjvfowy.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163rfjtealh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163ybmlvjmm.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163jrvqsmbq.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163cqtgqmuz.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163qpbyonff.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163sgqlfrqj.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163xruiavil.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163zpzseucb.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ycjdrqdh.html

strlen(s)
来源：http://www.aibaodan.cn/163qfenubdp.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163hdnqwoec.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163xjsgquvw.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163dmwyksdy.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163awypwkzu.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163rzubmxyq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163ipaxxngc.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163eklymmnq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163azbymmhg.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163gawccpyt.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163lfdglzls.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163vcfugxaf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163gmsaasku.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163tpmrdjhj.html

fclose(f);
来源：http://www.aibaodan.cn/163pqducvle.html

[S12] C：写文件
来源：http://www.sxryk.cn/163axwbvpim.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163kufnktss.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163spctqnvs.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163xfqhornj.html

[S14] C：枚举
来源：http://www.xuanzx.com/163wlyyeikd.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163otjfdjmc.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163qlekutub.html

(double) a / b
来源：http://www.xuanzx.com/163krgrlvxf.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163yclqeizp.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163ktemywaf.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163byezwgxy.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163upaikapi.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163sqyxwrjt.html


<!-- 参考信息 -->