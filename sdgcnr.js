外链999!wailian999！

[Q63] 开启事务
来源：http://www.xuanzx.com/163xeytclvr.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163hxjpiece.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163oablqepb.html

COMMIT;
来源：http://www.xuanzx.com/163bthfrtyx.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163bnvjdkbn.html

ROLLBACK;
来源：http://www.xuanzx.com/163rvyrwbya.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163cpytrxvz.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163opjjxxse.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163pyewumka.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163wpwinjen.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163jerngdzb.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163rrigwrkj.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163jvfkxviz.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163vjbcczyq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163wlrvkolz.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163rxciuhuv.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163fvqajpcd.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163cvrrimrn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163lzzuvyvy.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163bossicfy.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163hjmbfxup.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163rdswpwvk.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163fvqahtns.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163jbmaamuo.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163exorvlkb.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163plzkjlxo.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163yzqlkjag.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163xhbyqxsl.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163uegwfrss.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163wgeezuty.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163yqmofvsb.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163pzxjqfch.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163tmdziqxg.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163qkarejqm.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163iozovpdz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163inmqrkxd.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163itszuxnf.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163lpsloxji.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163dtefleko.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163wdghfvtw.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ppbnozjb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163sxzsccep.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163kdaaofxj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163nzqiysqf.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163crcohggq.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163sovvamny.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163mktqjxtx.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163yvvyrdps.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163hzhpxwpi.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163kdbwfnai.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163wmjqgoza.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163yclhgvjm.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163yiiolxmq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163gwuqjpgy.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163sakamqoi.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163rfoujwym.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163brukbqrm.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163kmhuyglr.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163nhokgnmd.html

================================================================================
来源：http://www.aibaodan.cn/163dtmlhmyx.html

R. Bash 专题
来源：http://www.sxryk.cn/163cubnxrxz.html

================================================================================
来源：http://www.sxryk.cn/163thwwblgr.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163vjwwdael.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163pysrkmmg.html

set -euo pipefail
来源：http://www.sxryk.cn/163pgyaxnfa.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163fwrpphji.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163mfktvpkz.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163vesawmte.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163wnlqutwr.html

[R04] 位置参数
来源：http://www.sxryk.cn/163qndptsge.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ljqhyakz.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163xzgtkkdo.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163qalbxiuu.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163nekgndln.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163lmyhbfbg.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163nbswfheq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163wwvvvlki.html

[R08] 数值比较
来源：http://www.sxryk.cn/163wecosjwt.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163ydrtbpri.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163rqtlnjwj.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163oylkrmwa.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163jcnmovqb.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163tkjofzkh.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163kueweyjc.html

case "$1" in
来源：http://www.sxryk.cn/163mbefbwye.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163hatlcgti.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163ipocsrxb.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163zxcpdqdf.html

esac
来源：http://www.sxryk.cn/163ivdznbfo.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163zgowauoh.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163ytgrvdxv.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163qmosiate.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ihxazene.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163kfxetnbv.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163cbxjsney.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163sotijjrp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163hvckyabv.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163gzujcjbv.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163avtpooqi.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163bfmtjpaj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ldrvwdkv.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163svjygffl.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163vzbflite.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163ptjmpspt.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163cvczzxfz.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163anfuzvok.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163ktexsvzm.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163hrogykje.html

echo "${#s}"
来源：http://www.sxryk.cn/163lzmzumva.html

[R22] 截取子串
来源：http://www.sxryk.cn/163udqokblh.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163zxvwznca.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163jjijxjfu.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163dbwzccwf.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163fgwtztlx.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163mwfpwuqv.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163bguyafwu.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163wvbjpacy.html

[R26] 命令替换
来源：http://www.sxryk.cn/163hmlrjffz.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163mqhdekut.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163octnlqiy.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163lafghqtl.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163ygqhuvrm.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163wdclmchy.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163alxwuwwj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163gggtifng.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163ijdaqslp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163mlvtlgph.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163jpiducob.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163hmbuycqn.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163fglaurdf.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163tcshbflm.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163kvcnnxkf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163wlgiwkoa.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163shsuhakc.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163xvmvpvyq.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163nmejgvoh.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163gsyptiim.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163xhfdjdit.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163zltuzdcw.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163palgleyr.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163zyuolway.html

[R38] 管道串联
来源：http://www.sxryk.cn/163xyvhlahh.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163ubhliigm.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163xnienfhk.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ovdukcaz.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163apynddpj.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163xhbwnswi.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163ecdfqayu.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163khaejagc.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163wgplvwqx.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163usmtctnh.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163yiqyhpqa.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163akfwerkm.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163opdudlwk.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163fdgwzrde.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163fuclccsi.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163hatwwvlu.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163nxqdqnms.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163hogvtajy.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163rcnyvenf.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163fsvlwlpk.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163qsttkens.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163msvhrulr.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163fyimxgrm.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163fwgtgybu.html

[R50] awk 求和
来源：http://www.xuanzx.com/163wbadpojy.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163vzzjhpav.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163auuafxkg.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ffxxsqid.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163esnrrrlb.html

wc -l a.txt
来源：http://www.xuanzx.com/163vmbxbfst.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163erfakjwf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163qoiopada.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163rnvjgwxc.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163jbnnycpp.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163vgjoilha.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163attfiimi.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163zpdmuuur.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163kijuflax.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163evqktzaf.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163lnipvlvl.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163woflasmx.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ejwobtjd.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163gfycruxg.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163wrwpryyk.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ueszbukm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163ejyvbjgy.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163psmrrcss.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163morvspwz.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163aphvwpke.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163upfcwais.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163fuovnsjt.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163jonhzbhl.html

[R64] 结束进程
来源：http://www.sxryk.cn/163xrelgffk.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163kzupdmvh.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163rjlawlmo.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163zxxgkiuh.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163lgvtaanj.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163flhbbgvk.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163hfccpqen.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163qgskwqnr.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163xmiwzrcb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163trqviibw.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163httjnjxr.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163dkzrryoc.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163luvpnedi.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163hzyxkahl.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163zrivqdyl.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163oxwszjid.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163atpwzwjr.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163uuevuxpt.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163dbybfeyw.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163auzbvvdc.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163odciydar.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163jpjreqrb.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163pjexxulx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163udungdqz.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163rjdchsqt.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163nxvgfuey.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163xzesmatv.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163hanuffmq.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163mwufhane.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163bczclvjl.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163tzbckjps.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163ptsdocur.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163buftvdcb.html

time ./run.sh
来源：http://www.aibaodan.cn/163bwwjevcj.html

================================================================================
来源：http://www.aibaodan.cn/163nbvlizqe.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163gifnfoqv.html

================================================================================
来源：http://www.xuanzx.com/163lutfuswf.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163cngzuhol.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163yryceeva.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163idgidjph.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163puucjcml.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163eiutvnyz.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163ucdplhie.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163ecdztzpe.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163diqrztom.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163zgebefdh.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163czowlomp.html

strlen(s)
来源：http://www.xuanzx.com/163prvuhdxu.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163oxrnhdux.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163paaducdf.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163urglxmyo.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163iwjpjabi.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163ecjspzqk.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163fbfkmwpf.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163sfzelqvr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163mokveoni.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ujcyenrj.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163wtnxxhhl.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163dmbtpqjt.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163omxzuwrm.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163ayqbnqff.html

fclose(f);
来源：http://www.sxryk.cn/163tccmrlfb.html

[S12] C：写文件
来源：http://www.sxryk.cn/163ttkieykd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163omarxjyh.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163wmhiqizt.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163zqrondbt.html

[S14] C：枚举
来源：http://www.xuanzx.com/163rfkphpsv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163hmtiayts.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ajetjkbt.html

(double) a / b
来源：http://www.sxryk.cn/163exqnpvjb.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163xqwjdlaj.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163vwdpicbb.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163zgmorzfu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163fnwwsrvr.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163cxzvyehz.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163rmvjzkwf.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163qanxrnas.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163mslufifg.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ziokrpmk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163kkbkwxii.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163yjgwrcjz.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163jtsgyubh.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163dgdbelri.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163cjdlktex.html

[S23] C：随机数
来源：http://www.xuanzx.com/163cpecqfyj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163eakmbswi.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163afxwwwgw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ijksgvwl.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163utipwafh.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163vbczdtvk.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163qkjzikez.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163fmfeqxsu.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163kpayhwiy.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163rmtuptne.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163qhxtohss.html

static int counter = 0;
来源：http://www.aibaodan.cn/163tkjwkgbq.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163afgjjybq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163xceohkrj.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163scmzxcvr.html

#ifndef X_H
来源：http://www.sxryk.cn/163xzilmxwr.html

#define X_H
来源：http://www.aibaodan.cn/163osasbozb.html

#endif
来源：http://www.xuanzx.com/163vglbsccs.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163byfhxddc.html

#include <iostream>
来源：http://www.aibaodan.cn/163ayxaijqz.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163buqxgcmg.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163yfsahcin.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163bjzloxvs.html


<!-- 参考信息 -->