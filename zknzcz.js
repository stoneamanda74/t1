外链999!wailian999！

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163kxfcyaut.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163wqldbbxt.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163euzzpcsg.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163gityupht.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163wpqqpjkv.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163hpfcfeou.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163jmwyjfkp.html

[Q57] 行号
来源：http://www.aibaodan.cn/163voawvafo.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163megeajuk.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163nhxuhstq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163xjiorept.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163clbwfmnj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163hejnwoso.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163hhhwudfj.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163dkxxoikq.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163ypgumfro.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163eyeerzyu.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163jqyrxdss.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163vxknehyt.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163movhrgvq.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163osaejvsj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163giwcrupz.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163uelbboje.html

COMMIT;
来源：http://www.aibaodan.cn/163fxfevmyd.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163qgdfltoi.html

ROLLBACK;
来源：http://www.xuanzx.com/163ljycxokz.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163gbzkdygo.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163yuxgwuul.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163ctlipmpy.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163rwylrdrm.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163gckoeuev.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163dxokcftc.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163mosxmruz.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163knrsphyg.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163zhfyssrm.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163jlhzrzxj.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163wedzyopm.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163kbdslqda.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163uzbpolxh.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163ovhnloya.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163mhhqhiin.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163tdaekqvq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163aucubwkf.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163xbsamkku.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163uxysplns.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163mhampedc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163dahonlmx.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ejaadomp.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163pnphnusx.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163fxuezfdu.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163ubrszjkb.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ctaodhtc.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163yztaapow.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163qimrlzco.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163aywlmdpp.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163alcaricn.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163tdumthxk.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163huhkqrft.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163xlrvashz.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163avsgosnp.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163pkkmbgay.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163otjacbzg.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163xgwcfuzc.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163vhmfnvia.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163odebfcyf.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163lkpgbmcm.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163gchsbagi.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163cbwhkrxt.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163cjfclbpa.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163uppwmkwz.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ogfpljba.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163vsdhpuwe.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163zmvecjdg.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163uqrlnqrx.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163deqsyksk.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163wxabqscl.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163ksrkjaab.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163gkgshfsx.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163awvdryin.html

================================================================================
来源：http://www.xuanzx.com/163otortepm.html

R. Bash 专题
来源：http://www.xuanzx.com/163rkngnbkp.html

================================================================================
来源：http://www.xuanzx.com/163wolhcsjs.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163oizsfxjj.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163hzjkkcke.html

set -euo pipefail
来源：http://www.sxryk.cn/163twfptxvp.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163lgewlbjr.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ftsgixxo.html

[R03] 只读变量
来源：http://www.xuanzx.com/163veitikyo.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163pnsmviqi.html

[R04] 位置参数
来源：http://www.xuanzx.com/163myyxdqeb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163jkgpxecg.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163qxajarno.html

name="${1:-default}"
来源：http://www.sxryk.cn/163grhrbrne.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163hkvzeqtx.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163nrxgitid.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163egsogcup.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163uziwuabm.html

[R08] 数值比较
来源：http://www.xuanzx.com/163oojnosqm.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163luwzxrfb.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163wriienrj.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163fdxoppxx.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163pmsddxfm.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163zahabrmr.html

[R11] case 多分支
来源：http://www.xuanzx.com/163zwdvptso.html

case "$1" in
来源：http://www.sxryk.cn/163tmfrzlfs.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163fxtrgyma.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163xvbuozvb.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163smhldvid.html

esac
来源：http://www.sxryk.cn/163pwctywav.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163ykbteoqj.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163dzmnvjhp.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163kyvsixcq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ucllqswk.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163giwzvfju.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163coayieqd.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163kiryjgvp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163zbweyxvf.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163srvjibpi.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163szwnaong.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163zjfqyycc.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163zzsuvmjw.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163fybabcgy.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163jeqfspyu.html

[R19] 数组长度
来源：http://www.sxryk.cn/163dukslmne.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163flaqhmqb.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163dzqhljjn.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163yislhrci.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163ajethfwr.html

echo "${#s}"
来源：http://www.sxryk.cn/163octjgtez.html

[R22] 截取子串
来源：http://www.sxryk.cn/163vlbqezlj.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163ljehibjy.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163plnlfsfc.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163lkxzuuom.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163binafmiv.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163cybqrizj.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163sgdzxooz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163yegxfshu.html

[R26] 命令替换
来源：http://www.sxryk.cn/163fbejfjde.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163elhnqvof.html

[R27] 算术展开
来源：http://www.sxryk.cn/163rpwahhdj.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163uqjvfwks.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163gukpgled.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163cwtyyltw.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ggnixfqc.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163twxrwctv.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163celfqbcx.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163ryzsjfmv.html

[R31] 局部变量
来源：http://www.xuanzx.com/163wwuvtsrs.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163uretlxzp.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163qiovymin.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163enqfctkk.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163yzfxogam.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163lplsymgf.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163jqbpiogc.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163gzehxevr.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163cszfnqxf.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163hcpxgrmm.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163njgmhdmz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163taifmill.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163jojbmkot.html

files=$(ls -1)
来源：http://www.sxryk.cn/163zhoioteu.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163fyofrtbv.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163hrsrtana.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163ciylzzwk.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163iqvuuvbc.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163akkiifzl.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163fohcsudo.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163bnkjswjo.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163kfmlsbtr.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163bkcijuon.html

wc -l < a.txt
来源：http://www.xuanzx.com/163cxmmxzmb.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163qtnddbpy.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163hsobefam.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163andwsgan.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163dvhaourb.html

[R45] 批量删除
来源：http://www.sxryk.cn/163aikehaiq.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163kohgwxfc.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163abbhojij.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163ytoaesld.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163bfxctiez.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163gdqnlddm.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163xdomzuek.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163rqenqokh.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163bjolufyz.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163uzmdgvnh.html

[R50] awk 求和
来源：http://www.xuanzx.com/163mxdskjez.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163jhuflcxz.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163xhclkncf.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163yerdzftu.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163hcxnycff.html

wc -l a.txt
来源：http://www.sxryk.cn/163vqwudmfc.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163jzlcqryh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163brmlruox.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163kfqacezt.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163uwcslgii.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163erwvoduy.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163idubmswn.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163kxomjndy.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163pwzjqizu.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163vloastjk.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ijdhdkcq.html

[R58] 下载文件
来源：http://www.sxryk.cn/163nspkgqtg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ijukecpe.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163rawqihzw.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163nttscife.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ghtlwbkb.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163tooecxoc.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163dthbzmkt.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163yswkzlet.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163wvrtikdz.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163cmasdmmh.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163khepwpjn.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163mpjfhwsc.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ujudujxl.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163dgndwpqi.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163kfxdwizg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163huuzikwh.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163hjdqwxmq.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163oiaprinc.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163zkaruxph.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163babrzoau.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163skrlbnfv.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163yyfehywa.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163wqxwpovo.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163jzeoirgj.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163vjtyeosy.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163gzhuqxol.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163nsltmxjb.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163anhjesyy.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163uxwjcehv.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163irrlujng.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163gbkdmgbo.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163gxouilgk.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163rmmdhmsn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163ypxrvvju.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163ejbwhnza.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163epfijktq.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163jkwcxowr.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163bwedojtp.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163qmljzuyc.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ldorfdhw.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163lxvduqnz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163xfmdqdys.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163gfgvltuq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163ucxqrijm.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163pdclkwiy.html

time ./run.sh
来源：http://www.sxryk.cn/163uvlixjbp.html

================================================================================
来源：http://www.xuanzx.com/163frzlkdnf.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163klntsvio.html

================================================================================
来源：http://www.sxryk.cn/163vvqstcnp.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163oixpunlz.html

#include <stdio.h>
来源：http://www.xuanzx.com/163yehxrira.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163pmragnoo.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163yukjuwtz.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163yqtxdmir.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ibcecvzp.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163pnldcnzw.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163bkjgewwv.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163mwssbnsr.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163dfvxorpr.html

strlen(s)
来源：http://www.sxryk.cn/163csqqndrs.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163gwshfxko.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163mokuttlx.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163ajremwej.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163htkmwwfp.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163eaersqrg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163neufhvch.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163uyalgikd.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163eeftvbtb.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163mhvngpfz.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163xokrbrjl.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163urthdbjx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ubvwtgls.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163evnjybur.html

fclose(f);
来源：http://www.sxryk.cn/163skorwzze.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163ixafidkz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163lleevocc.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163uywrmwbl.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163zymnlfow.html

[S14] C：枚举
来源：http://www.sxryk.cn/163agesrrlj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ggccgbal.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163onhsjeav.html

(double) a / b
来源：http://www.xuanzx.com/163byhxhfli.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163xjufwlte.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163datpuudj.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163obkhbixq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163watjzhcf.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163npcfsuif.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163edtfewmv.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163yziqcrvf.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ssytntha.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163iaixlhdw.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163wjqqfyrl.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163sixfcntt.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163gglvkikp.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163sftttich.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163lavvkeav.html

[S23] C：随机数
来源：http://www.sxryk.cn/163zgtcbcva.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163efhjmust.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163ctfzyzmn.html


<!-- 参考信息 -->