外链999!wailian999！

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163ntefygzs.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163dzpehamz.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163bkvddlic.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163mzbdwxfp.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163drlsubod.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163btpwsgea.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ybiswgzr.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163khsxfhga.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163ovzdtenz.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163sdcucdns.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163wsuribfz.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163gxhkpwop.html

[A14] 注释写法
来源：http://www.xuanzx.com/163sknrsigu.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163lnpzyxav.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163krjbxhho.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163orvgpwre.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163klmcjtwn.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163nibwotsg.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163fixsiwxd.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163kicoqdih.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163rclntaql.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163lhzihigd.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163ichfkwlu.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163eemndsnd.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163uvztfgld.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163sxchxvas.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163ajipotdj.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163onlfeitm.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163pnehafnl.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163akiqqrwz.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163ucbgiqbc.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163xgwpbdsb.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163oeqltwtl.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163zktyessc.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163ppbcosxx.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163vdnqxvvv.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163scnwjjwv.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163ueyopvsp.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163krwbsyhz.html

[A17] 位运算
来源：http://www.aibaodan.cn/163mgkwgubm.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163djxwrnkj.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163yscanqsp.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163gjdfizri.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163kgtchgdt.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qouehhng.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hmyzshoh.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xecbwqtf.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mzjorlah.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163hwsbgidt.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163syxahfzu.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163rhwlveoq.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163wzvjjohz.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163raeajjnd.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163qmpgwoyu.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163edthunre.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163kslhvkcj.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163wsghcfzy.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163ezdysrnd.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163luyowyjm.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163ghhtjyji.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163oafhlswy.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163lqohgnhc.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163zhagnsfk.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163wbfimdqi.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163rwiedeqn.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163jxmrqqmu.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163mjijdolj.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163dfnyrytb.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163gyukwlfz.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163xcaarjsf.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163lzbdkytg.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163ruasdfal.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163wuiydsmu.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163zngafzws.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163mpiphdzo.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163qzjsltun.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163maqsoldm.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163hdqkhayy.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163xsjcblda.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163gfxtella.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163bnbkiywf.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163icokjzhd.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163spylissa.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163oqtuxjwe.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163mvnlvyog.html

Py:   len(s)
来源：http://www.xuanzx.com/163dhgvqpjh.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163tvjlwjvu.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163ourtesrd.html

TS:   s.length
来源：http://www.xuanzx.com/163losixnpb.html

Java: s.length()
来源：http://www.sxryk.cn/163oycvukan.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163mqamsyjd.html

Ruby: s.length
来源：http://www.xuanzx.com/163nfxbrxma.html

C#:   s.Length
来源：http://www.sxryk.cn/163flgttwgu.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163qrffaewj.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163zpfnsygk.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163gjonbugv.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ptsqsnjk.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163psfdtaej.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163upvmqgzl.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163ejidjege.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163eaxowtjb.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163gbpijxzt.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163htmyfkxc.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163ikqmtyvc.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163fqqhqwfd.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163xhdfmlxm.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163vgjcynsl.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163pceiugbg.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163pegnakem.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163njkxcxob.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163xijyhuyg.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163dgwnfhex.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163jddphdjq.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163blpdsqut.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163wiyijgeb.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163hodujpbd.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163asqpmtvb.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163qbvmgsug.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163byfwwsvr.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163jypwguyc.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163kdjrsvsw.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163rdosfncy.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163waqsclfg.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163onggtdpl.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163ydfgicgy.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163gihdsujf.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163qijdnshi.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163rrzkmmlm.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163llslnapr.html

================================================================================
来源：http://www.sxryk.cn/163mgxwnhxj.html

B. 流程控制
来源：http://www.xuanzx.com/163ecnxhwlv.html

================================================================================
来源：http://www.aibaodan.cn/163nkexhaio.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163pnwedobk.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163rfcnddmv.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163dfzxennt.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zovmrmho.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jqagbsrx.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ukvaooss.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163nyfebgoi.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163kfntsmrj.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163yjctrriw.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163trfobxxj.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163wdqnhcue.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163ubdtrade.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qxlrthbu.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ymcvllju.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163otwnduhx.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163bdvhisck.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163plefmjsm.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tfhnaalh.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163newrvqai.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163dmqgylvd.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163cuffhqxq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163nqqltwng.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163uipgqniv.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163pwcseqrn.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163wgewbowp.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163jbregkna.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163jerljhgf.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163isnckwps.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163merbqwyr.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163ujsbjmcj.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ljgyglrp.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ijolbdww.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163qqznhltv.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163nkgaoyfv.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163dxoaafyc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163wbpekndx.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163owzdemye.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163zgokhgqw.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163wfmrfqmh.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163zsxqsavv.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163booqtwcf.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163ityadnbc.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163ejejfgtp.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163qjhtpzka.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163tbclslni.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163yfhsudfx.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163izclsckt.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163yofjgzjp.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163yfwwaisu.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163aghkcfvv.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163mhuyfnte.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163sbbnffug.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163vgdcnsal.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163ysgsiaby.html

[B07] while 循环
来源：http://www.xuanzx.com/163scmvkfcj.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ebtokaxg.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163genuavbw.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163kpcaqabg.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jpetxirb.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fgozfbpr.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163cqtoflsu.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163vaumvzwu.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ktcfjpur.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163tepmcwrj.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163bfdpzioe.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163cohelcnn.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163rvzhmtkj.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163buqfiiuc.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163fvafyuss.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163dgxwzzpc.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163hvzapdth.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jnqdfjuv.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163jewwehjb.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163gqpzyjjh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163afgdvhvm.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163tepaekmx.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163kbarymfh.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163uzfflehy.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163dwcdgevj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163gpjjcesy.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163twiliwpi.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163kwfmkttd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163ykommtfe.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163nkxdytqn.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163whrpcrzd.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163scbnzcur.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ewxbmngx.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163wqfvftgb.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163pybigssr.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163crdakbcr.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163jeqznmut.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163fptrtwcq.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163dgnjwewa.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163qvkucfmo.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163wxhhojar.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163zdronnna.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163cyjvjwlt.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163xdwgtnqn.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163nasxtmlo.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163foisouex.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163mrywkbim.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163sfrloytc.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vvuwzxss.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vbfasowc.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zhzomggx.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163inmwcsaj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163twweonoj.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163eriadxwb.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163mcguvidn.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163dblolyzd.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163hcwwwjoc.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163pafvddlz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163wczbkkae.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163bebccfzv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163vuwjijuv.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163jdcpndsd.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163jhekzauc.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163amgacukq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ihimfeye.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163bwxnqobr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163cbkwqxsh.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163woodxsqy.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163tgyrzwrg.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163vyzhgkge.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ttjcpznl.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163tzzmflhh.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163iczhvrws.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163wuewrhvz.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163awizmiff.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163dyvedlbz.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163csujvkil.html

Java: a && b || !c
来源：http://www.xuanzx.com/163vhweazyn.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163wqueiofe.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163jfdyvnln.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163xjadxwuq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163zsylpivp.html

Py:   if not data: return
来源：http://www.xuanzx.com/163yvvkmmnd.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163edfghstp.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163vromevpx.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163jxbjpbya.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163apyssfgp.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163xzhkihkf.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ctzumlbs.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ynrksuta.html

================================================================================
来源：http://www.xuanzx.com/163cedifzqn.html

C. 函数与作用域
来源：http://www.sxryk.cn/163fexsdalc.html

================================================================================
来源：http://www.xuanzx.com/163aqebdnrh.html

[C01] 定义函数
来源：http://www.sxryk.cn/163iofcxyae.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163xydttazb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xeylmveu.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163soudtrpr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163sunljixl.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163yddfibgk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163mgvlrhtv.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163kzhjoneo.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163otqawxll.html

[C02] 默认参数
来源：http://www.sxryk.cn/163dpiwgcga.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163pdwoinhe.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163baeyfxiw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163gtjjldze.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163tdwjlunr.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163jbkecyrc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163amvkesvd.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163hxtoomwy.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163nmzokhlu.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163kojgtdgy.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163lxlxldkj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163oglzlxme.html


<!-- 参考信息 -->