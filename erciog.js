外链999!wailian999！

[Q61] 移动平均
来源：http://www.sxryk.cn/163ehdnxrnl.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163wbaahthi.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163kznbszdg.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163hyqcvdxu.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163hovfpmzn.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163kxuwmzad.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163pjjxtdtd.html

COMMIT;
来源：http://www.aibaodan.cn/163qoofuefk.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163mkcfztpn.html

ROLLBACK;
来源：http://www.aibaodan.cn/163prbriivn.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163padkuvwi.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163lgtskhdt.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163memrolnv.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163ziedjqqz.html

[Q68] 保存点
来源：http://www.xuanzx.com/163tknasukf.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163atqououk.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163sofbwltx.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163dioallgb.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163mpxcusyr.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163teksverc.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163xcfxcpru.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163ynypswub.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163uwxfoatn.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163ekzsqxva.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163wjpervsg.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163wsvbekbt.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163kfxaanbg.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163sqfeheif.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163gwesluvz.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163xymdezsx.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163uurymgyq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ltzzfmfx.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163uvggstph.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163bixpvcjk.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163xtsitxrp.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163jbdmkmsn.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163kzyizxvx.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163onkffsys.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163akgbwbul.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163bukghaga.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ydmndiyh.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163lhqjqxix.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163wjqlfohy.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163mncimnqc.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163eijymmla.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163bphwkgjz.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163wmexqzka.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163mncqltyo.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163jdxgyxbo.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163ydoenygg.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163oojjzica.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163eauuqukn.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163lcfqrapy.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163bzrazimr.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163qgbqkrmo.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163ihnwfxzh.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163qspghdra.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163bgpyxpze.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163dqzkrkgb.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163ctvbwjln.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163jfioyahm.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ziztfgpq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163iuqkdzdo.html

================================================================================
来源：http://www.aibaodan.cn/163jvptlfrm.html

R. Bash 专题
来源：http://www.aibaodan.cn/163ghzdvddw.html

================================================================================
来源：http://www.aibaodan.cn/163cxungang.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163qbqghrem.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163jjpjvcfk.html

set -euo pipefail
来源：http://www.xuanzx.com/163slapjsfa.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163wtsxgrok.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163bqiflghw.html

[R03] 只读变量
来源：http://www.xuanzx.com/163hbpsjrnj.html

readonly PI=3.14
来源：http://www.sxryk.cn/163utbehlbu.html

[R04] 位置参数
来源：http://www.sxryk.cn/163osxcwagp.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163hkxikexe.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163gjpdfgsw.html

name="${1:-default}"
来源：http://www.sxryk.cn/163yyhpfilr.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163qmffmjol.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163dfpxmbik.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163lffpqgyo.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163kavhocbb.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163latcsrdy.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163yczxgzgb.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163koikdqut.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163uzgmekll.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163caszvnxh.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163eqyqmknz.html

[R11] case 多分支
来源：http://www.xuanzx.com/163cgjpjwok.html

case "$1" in
来源：http://www.sxryk.cn/163hidqidil.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163hxjxqjbe.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163avdrkddy.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163nfyvinqz.html

esac
来源：http://www.xuanzx.com/163cjtpqeyr.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163zrvptmxs.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163vlmtbtuw.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163bvdhlxll.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163lzjbmmav.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163hsczwlqb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163sujylmpk.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163qqkudbhk.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ppxdsjph.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163smjojzbp.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163ggqyfuqy.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163cketgpil.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163npepojuh.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163qombefhq.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163uohoscik.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163hzenpaet.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163sxkcdsyf.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163omnqmtlo.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163zbwiazcx.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163ryvfmqfk.html

echo "${#s}"
来源：http://www.xuanzx.com/163uilylube.html

[R22] 截取子串
来源：http://www.sxryk.cn/163pncsvkyf.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163txcmkuyj.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163rnpybqbs.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163hlbzzggn.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163uxcrlucv.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163eelzgvqs.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163bdgrjhaz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163dayrdvgc.html

[R26] 命令替换
来源：http://www.xuanzx.com/163ryalbvqi.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163fbfuajpb.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163mzintmmx.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163nogiceih.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163sefynteo.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163fizhdvhd.html

[R29] 定义函数
来源：http://www.xuanzx.com/163wqtlrnhz.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163vucqgayu.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163todzfaja.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163zzrbbgiw.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163ymenxvdo.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163tbxexvoc.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163npbsxbqt.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163sqqystvv.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163eidygjgf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163xjiswyuh.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163tuhbinjp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ncoqmubl.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163cijbeoua.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163jzcpxyjd.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163tszrzcjp.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163vbbsyrwz.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163qeixqgqd.html

files=$(ls -1)
来源：http://www.sxryk.cn/163ngpqrorw.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163vjykgrnu.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163rarvphts.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163qgphyeem.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163hwgealob.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163hkygepzx.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163slqnfjme.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163efzziqgh.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163ykwpjyqw.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163iznlitls.html

wc -l < a.txt
来源：http://www.sxryk.cn/163tntzdxhi.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163oicboyzq.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163erouyrwn.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163sfszcvkj.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163zgioycsm.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163cipwxkyh.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163lgsejjzn.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163zuaooocl.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163mxpzdjve.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ndhycxom.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163nzojagsl.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163axmdgozk.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163ddogfdxg.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163kublolqz.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163nnxrnnhf.html

[R50] awk 求和
来源：http://www.xuanzx.com/163wttmjnqt.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163ocztutil.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163nqggwqvm.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163alligksc.html

[R52] 统计行数
来源：http://www.xuanzx.com/163clzpchyj.html

wc -l a.txt
来源：http://www.xuanzx.com/163sjtbccdt.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163tirensav.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163bldndkim.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ichvyrjz.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163zbrkklwi.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163hxmasdcj.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163egsmtebh.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163itiuqjna.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163tirkgipv.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163tvuxiicj.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163nyrskkyd.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163kfcrtxyp.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163zhqxlqoq.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163dggacpdj.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163wwxaopzg.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163dqsxuyme.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163lhvzqyrk.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163tbgddrbt.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ngbkfabr.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163jdyiipqo.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163vurozysm.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163byqaczma.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163zxzucizu.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163wemasseo.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163jlapndvp.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163rprfynaa.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163brongvoy.html

[R66] 定时任务
来源：http://www.sxryk.cn/163irzmpofp.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163tfouxxrr.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163zyttuead.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163htqvagev.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163gzxhhvgz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163ldrmiomc.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163pxxwghou.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163tvsgxhvv.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163uanxybvb.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163lenwssnq.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163jikqfnvm.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163ghricpao.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163fiwugdoa.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163esfacopc.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163oditczsh.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163wxyiqvjt.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163vrmmgrdv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163tefqpgza.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163rkmjkoha.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163yiwdeana.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163uincifig.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163quphtdiw.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163pohprhme.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163tguewsfj.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163lecppdei.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163kxlrqvfm.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163jcmcsylx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163kzggpekt.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163dcpxnnaf.html

time ./run.sh
来源：http://www.sxryk.cn/163tgdisrhd.html

================================================================================
来源：http://www.sxryk.cn/163yntmybsh.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163ujcicglp.html

================================================================================
来源：http://www.sxryk.cn/163qfqqunmk.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163dbkbntgy.html

#include <stdio.h>
来源：http://www.xuanzx.com/163qyujmupk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163zlwipwht.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163bwnykfaq.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163bwrrfmjk.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ohsztyyw.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163gpdcnnsq.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163mmonqbkk.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163txdlbynm.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163nxsmujic.html

strlen(s)
来源：http://www.aibaodan.cn/163lkzqvzay.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163ptulyoqz.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163kelwqrhg.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163xpeqisxp.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163ladhzjua.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163jdqxuwhk.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ybbvkocz.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163kfzoizfw.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163gufbjfvu.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163pjivmwgs.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163lqhkgmwc.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163vixsmlou.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163nvpoqnpe.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163smygkcac.html

fclose(f);
来源：http://www.sxryk.cn/163eftjlrgb.html

[S12] C：写文件
来源：http://www.xuanzx.com/163eriznsmm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163sjrtubor.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163epmyzmqi.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163kkfhquzy.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163xqtpwahq.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163dpqmcpep.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163kjhdoszu.html

(double) a / b
来源：http://www.xuanzx.com/163agndfghj.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163eosxzdhz.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163bviwobvl.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163thvrefaf.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163zfjqdfaf.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163fklfglwg.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163hkupqwun.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163blyfuhds.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163qoinfauy.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163ritugmvj.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ujbiuflx.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163nysxgusd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163gifbvcef.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ipwixzgr.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163bvwjkjcn.html

[S23] C：随机数
来源：http://www.sxryk.cn/163fytgtxxl.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163plyphsgl.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163hyoogbvo.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163fnzhxljt.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163exkyufpc.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163ztyophjd.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163oqfwkbqc.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163yeqmkdfu.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163ihyboyvs.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163apfgmqdc.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163cbaazibg.html

static int counter = 0;
来源：http://www.aibaodan.cn/163yphahqjm.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163jayilwbs.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163zzjuazxo.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163hbodopit.html

#ifndef X_H
来源：http://www.sxryk.cn/163uftcagwp.html

#define X_H
来源：http://www.sxryk.cn/163hwpupjpn.html

#endif
来源：http://www.xuanzx.com/163lpduobkr.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163adwxhzkn.html


<!-- 参考信息 -->