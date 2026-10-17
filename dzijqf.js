外链999!wailian999！

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ipvorzws.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163ugtkmccs.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163spseauxm.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163xzbixmvp.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163wmihkgrx.html

[Q54] 清空表
来源：http://www.xuanzx.com/163hqfmviic.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163knxnmrap.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163fetypakz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163lufkazjn.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163twwqxftl.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163gmnhojfn.html

[Q57] 行号
来源：http://www.xuanzx.com/163ombbltin.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163oycqijck.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163lzllxqbh.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163pzhnwjyu.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163euceaapi.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163bkyuzsgp.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163qcgdibig.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163avrfvdxs.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163mbwqbjxm.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163indirwsc.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163ljrugsou.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163vbmdhdie.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163fhaowzgr.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163ejjzjqpg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163nfqgftls.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163rpuibuev.html

COMMIT;
来源：http://www.sxryk.cn/163ssdkyabv.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163ghqsozoy.html

ROLLBACK;
来源：http://www.xuanzx.com/163lmrfkfpx.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163phuymgkg.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163zviiwvhf.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163dvccugvs.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163gvqevbrd.html

[Q68] 保存点
来源：http://www.xuanzx.com/163knlpabew.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163zdjlvzay.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163kzqflqzw.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163xxegyneh.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163bnaexrxo.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163rmpmhcyt.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163ectfjppt.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163ohwqehyg.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163uhcybbgi.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163ykttcsaf.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163unhhsxhz.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163ksuaipbo.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163mqqillnf.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163gentxgsm.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163mmrulice.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163btqewpak.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163sszeadss.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163jutvtrnf.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163vrbclhzu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163bwwjddqj.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163evgkmgps.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163bwaikzff.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163scuyerfk.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163ebqstxtt.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163ygchpmhw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163qpeqkqsg.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163kquplgmv.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163mpffaxor.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163akqvzrvs.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163gxckrwqd.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163mxhcoedm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163xjxhjivx.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163kvesbyju.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163nujxfubg.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163qtztdarp.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163imqmkaec.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163diostfin.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163gitplfwd.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163tnnflvlx.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163iikpwhgh.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ajebwvlu.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163gqqovnqx.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163abvvvwaw.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163lyudllxw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163pglgxrnj.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163yzyoudte.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163dcupcvzo.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163qqtfaklf.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163astvoout.html

================================================================================
来源：http://www.aibaodan.cn/163qykioasj.html

R. Bash 专题
来源：http://www.aibaodan.cn/163uegjypxl.html

================================================================================
来源：http://www.aibaodan.cn/163hlyroifn.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163lpcjyvno.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163eskmazrj.html

set -euo pipefail
来源：http://www.aibaodan.cn/163xfsgqvjv.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163opocdkft.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163hdlwmicl.html

[R03] 只读变量
来源：http://www.sxryk.cn/163qtzkyfjm.html

readonly PI=3.14
来源：http://www.xuanzx.com/163owdgedpm.html

[R04] 位置参数
来源：http://www.sxryk.cn/163lnxdenjd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163txnzrqjo.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163kyroniwm.html

name="${1:-default}"
来源：http://www.sxryk.cn/163mntrucey.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163nihccozk.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163wwwvuptd.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163avcbudrd.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163grkpoxzr.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163ueiveybr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163hvrqqgsh.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163yxahwecy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163smlcceaj.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163jqusaubg.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163icabnssz.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163pmjfzyld.html

case "$1" in
来源：http://www.sxryk.cn/163qzeqmjlp.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163dxmzcwpz.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163dujwuzvy.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163xvonafof.html

esac
来源：http://www.aibaodan.cn/163mbngrxjg.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163oakecthq.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163esskbcez.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163adjsyvcq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ewtfqoyj.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163jiqjkfpy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163qfjayxzu.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163fpsoljvh.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163kaioipap.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163qmybyeor.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163rpdhelct.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163tfatxstk.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163byifsvqz.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163hatmfkfv.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163lecstsin.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163tnkqchge.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163hjdfdnxf.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163zmwqhxzn.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163recnrsei.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163jtqihyxe.html

echo "${#s}"
来源：http://www.aibaodan.cn/163aojopewn.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163vloalpav.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163twiekhkt.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163vmgogfvu.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163zwudfqcu.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163mtcqjgck.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163ffntzgzm.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163haitfzau.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163voisvsir.html

[R26] 命令替换
来源：http://www.xuanzx.com/163bciqrwdq.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163jmzsoytg.html

[R27] 算术展开
来源：http://www.xuanzx.com/163hlgnqpnr.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163mrcdzvmj.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163yobolfpo.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163uhzbsjlh.html

[R29] 定义函数
来源：http://www.xuanzx.com/163kznkanhi.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163gjfpdzls.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163rkywkiae.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163rqcpmaxj.html

[R31] 局部变量
来源：http://www.sxryk.cn/163gxuwztwv.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163lfjzibph.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163osrinhiu.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163ptphblhr.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163ysdxztiy.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163wuvrinch.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163pcpyhloj.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163pzfzskbu.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163zknwgugj.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163eaonujkz.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163dnylvtao.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163tjrkryrc.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163iezxgkdi.html

files=$(ls -1)
来源：http://www.sxryk.cn/163vbuicgbk.html

[R38] 管道串联
来源：http://www.xuanzx.com/163jxkbutqn.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163pjlohfer.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163gbrglips.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163ldvjlyyj.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163woubrzyn.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163nysbfbmr.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163pxsplzfy.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163kcpimaeg.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163ujrrxlgc.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ofefxqod.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163jgcjkipx.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163agmjtnto.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163nwkdcpoa.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163ngmvufur.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163fkanlldh.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163pjdbiyqv.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163fxxerrth.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163daoepedk.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163ulecrnir.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163qxrbsaqz.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163cdmeasdd.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163vstefdkf.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163zknwtjrz.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163xyfvqfur.html

[R50] awk 求和
来源：http://www.sxryk.cn/163rxklrwok.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163nviteedz.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163uoadbhqa.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163fnblzzlj.html

[R52] 统计行数
来源：http://www.xuanzx.com/163gqdglnhn.html

wc -l a.txt
来源：http://www.sxryk.cn/163nivfpvdu.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163lsobpzyf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163odkhuwre.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163fsfqwdqo.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163teqahjit.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163mgcwgnyr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163yotvnakj.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163hpsdusrh.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163iezliydw.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163msqnaxqi.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163gmvtpekm.html

[R58] 下载文件
来源：http://www.xuanzx.com/163hydnnumy.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163bhhkoepx.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163oqpdyjgw.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163vcpszxxt.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163uiitqkab.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163lileqlfc.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163qmlqfcnk.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163wqgsanco.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163aceuymhw.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163gicscqqy.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163fakyogbg.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163kczlcail.html

[R64] 结束进程
来源：http://www.xuanzx.com/163djdusxih.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163mkxrvuuc.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163oviiujqv.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163rzvdkzka.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163dxtneffq.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163vaahcycp.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163zddpqvbh.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163nonioluh.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163hsovasks.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163jpskszqo.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163vwfqqawc.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163aajlkywt.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163oojkinsn.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163qjmjrjtj.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163nvtcglze.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163atopqsdv.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163wokgtlvm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163wibwtcod.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163gsoibtdq.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163jzdiphvk.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163obnigznc.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163mvjxzgki.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163lrffmetm.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163jtofxhrp.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163rushnfgr.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163hhmeqala.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163xayfgnya.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163mpwefccy.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163ebfntczc.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163pcsqrreh.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163irhhesod.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163hfkqrazr.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163fupixajh.html

time ./run.sh
来源：http://www.aibaodan.cn/163wlxczgqf.html

================================================================================
来源：http://www.sxryk.cn/163kafznyao.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163pppukwug.html

================================================================================
来源：http://www.xuanzx.com/163kjticrom.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163rqxbrsky.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ngeolfpm.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163fwwogtvq.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163mfoqjrmu.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163clteixwl.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163wnuhivly.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163mbfudjuf.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163yhxajkfu.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163jgmrlfet.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163frcrrfmi.html

strlen(s)
来源：http://www.aibaodan.cn/163klauvpim.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163yjbvfanc.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163etirantl.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163ifvitawk.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163oxnnnlxq.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163idwkpyzr.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163kfzslwmy.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163atlaszsa.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163rawfxaqz.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163yvskiqxe.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163jlleoxgh.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163wlnztdxc.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163bzgcltog.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163zkscgxlc.html

fclose(f);
来源：http://www.aibaodan.cn/163kcuucdhx.html

[S12] C：写文件
来源：http://www.sxryk.cn/163hhjqdvmf.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ylvugkvl.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163gqjwknxw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163baqmnqui.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163trmmtbcp.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163osqkjgrn.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163siinygok.html

(double) a / b
来源：http://www.xuanzx.com/163ehnigjzp.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163axmrukoq.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163vxtfcnbr.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163kvqgqjot.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163uyhnndmc.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163zjdudtpz.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ntqziftv.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163rwimjnzv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163xcomuytx.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163gkealyge.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163dalooadz.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163tchkvjof.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163gofviywn.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ugxmrpvf.html


<!-- 参考信息 -->