外链999!wailian999！

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163bzpwjjfb.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163bpsaoetk.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163dylyohnu.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163yshssgeq.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163dzpwsref.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163wssuijfl.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163hoeelzbs.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163hautkfbu.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163eigyvivl.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163momcsrqk.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163hqcsgimh.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ffuzlhkt.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163egwpdltl.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163gjoqtkwe.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163pucppbop.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163aekhtpqq.html

[A14] 注释写法
来源：http://www.sxryk.cn/163nnnmuxst.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163ubbglguo.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163adjylzzv.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163sutiloxi.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ssgvfczm.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163ewhnvtkj.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ysgjosht.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163ymuqfpct.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ysxgwqmg.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163ruvcnzzc.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163wedpohxs.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163nbexujdn.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163pyevmfnz.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163iomlttdu.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163gmpgksah.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163vjejojyf.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163nkfraevt.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ikjbecii.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163biomtnwv.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163fsqbigzi.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163dkdlhsbg.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163kljghpvx.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163hoqedqqk.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163zrpufnrc.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163lrxdceoq.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163kunqvmac.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163vgzlgszv.html

[A17] 位运算
来源：http://www.sxryk.cn/163qidqumkg.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ygrglrff.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163icvgqttt.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zrykfjzo.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163gfrfavsg.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163unuiftpn.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163puhkojrs.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163lgiiuhog.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ofewfsux.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163sdzwjgtz.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163osuxvebz.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163ybhwamkq.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163bdivwavf.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163cpdyaclw.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163dedjwlpx.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163vevvqiqh.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163oogezacm.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163nocsprds.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163ggrfsewj.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163sschwxnm.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163hxjppfrm.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163lajqdodw.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ssfplbhr.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163reqlvrxk.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163lhopcffm.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163raibttou.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163nclnlsgp.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163iinqzkuo.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163fbqbuksf.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163jurxnmki.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163uxuobplk.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163qjihfdpp.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163vbjqilja.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163adavksqu.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163ejyfwcut.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163hyshwyxq.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163onmxqqps.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163vjpumysm.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163zafancze.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163wdjsjaun.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163pscnnmkq.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163teaiybes.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163hunwwtpa.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163drnnebtb.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163oaoaainz.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163ayipalqq.html

Py:   len(s)
来源：http://www.sxryk.cn/163oxnqikwc.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163aovhberx.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163meylcmgo.html

TS:   s.length
来源：http://www.xuanzx.com/163rdrfibnu.html

Java: s.length()
来源：http://www.sxryk.cn/163yaganmku.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163blrenopc.html

Ruby: s.length
来源：http://www.xuanzx.com/163xcgvtaqz.html

C#:   s.Length
来源：http://www.sxryk.cn/163fzijxpez.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163cjmwlwtv.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163fwsrmhih.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163wdcxopft.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163zuqyyotr.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163fysphyco.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163chxohtpa.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163wkqjrcon.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163soqgiqnp.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163mlhkbvhr.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163jdodopro.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163bmgfcbgq.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163haywffoc.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163bvtwhvvt.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163dmjtzdae.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163ymmpenap.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163nnlyhurx.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163qxmayzwt.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163kuwjnbaq.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163feftwodc.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163zxkuupbv.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163gktsflxa.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163lqfxqbhp.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163tjgurxbz.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163ytosfmoi.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163vacflsux.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163bivlixoo.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163mwbmzmid.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163rkkafgpv.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163ezvtimag.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163ahjmomhg.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163madqnumx.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163hsoyiflr.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163xrywgpmn.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163efljswnv.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163jwbebobq.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163bevaxrob.html

================================================================================
来源：http://www.sxryk.cn/163xfsluvzs.html

B. 流程控制
来源：http://www.xuanzx.com/163unayxidi.html

================================================================================
来源：http://www.aibaodan.cn/163lekvjuml.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163idcjernc.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163qcbwjmch.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163btpcbhol.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wvqpupll.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163dfitiucm.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fjupxkec.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163gboweijn.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163zbaeflkk.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163dbfyvybx.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163ibqtmjeo.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163qwcvpsrv.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163duzsihuw.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qvlwfyxk.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163kchmltha.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zijgwkxp.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163mmpfqnpo.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163zpxzaqsd.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kadanvxb.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163yukymaeq.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163jvsndiqf.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163sqeqjnfo.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163crctkhhi.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163zcjknlwo.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163vkpwdrxk.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163pjgcznth.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163bwqzmbzg.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163nzgidwsb.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163swupspnr.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163wwcehpmx.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163nturmphx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163syarlics.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163anepletz.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163tmpgcitw.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163mvcskgic.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163gxlptqaw.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163wsndbqcl.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163izsugygn.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163sfwmqplx.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163qsklqwjr.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163mryfrtmj.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ejzfnmdc.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163adnmsayb.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163votyrejr.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163qjmxtklv.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163manwgemg.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163eerniosv.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163nqopdpgb.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163rgewjlns.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163adkybgqc.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163xzctehrd.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163bowexwen.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163vrrjqmvj.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163ywobwleu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163xrvqznny.html

[B07] while 循环
来源：http://www.xuanzx.com/163dpbdjsvs.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163qdgdvfkp.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163nmvajxrl.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vayhrdjr.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163yfdtbosh.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163drsfjrxz.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163bcrviibe.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163wtqwtbfw.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163htaofvbp.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163rgckurkn.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163taadztpm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163ngjkndux.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163udacjomu.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zydbcyji.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vcxwfqst.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163wmbyuqdt.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163sdxlkicf.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vlleirze.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163rbxpxmju.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163xovpckjl.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163aurdhwea.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zcuiiori.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cfjjgclq.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qgjrmquh.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163nblmquwn.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163txzecijl.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kiwdnbbj.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163sndmgjjx.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163eyrmqsxp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163azmnsjms.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163phdlnoxh.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163zlvywcva.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163axujegss.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163fpeloubw.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163ivahvmpl.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163idbzzjnj.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163mbfkadai.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163txxoazpv.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163qnomkqor.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163mmupfzkr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163eauglggd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163kfpmesty.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163zmxtdpqm.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163ycedaomp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163oxynyaud.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163sslwqlgf.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163ahaofssg.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163sxmhnihf.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163wwxvloxb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163wbnnlhnh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163fyqdfebo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163xxrtnobz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163oyguxjem.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163abfctbvf.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163xqydjscd.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163httzhbva.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163fgmntwhc.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163mbvhsnqj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163bkghwqgm.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163tgeqsksq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163ogkcjnex.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163mckactqd.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163ymwmbdaz.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163hvzaydxn.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163fzhwomxv.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163sfzcrhkq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163orijghuz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163sqgdizgb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163symewlqs.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163lrjqxkqh.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163ccnaibbg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163duiefprs.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163enfnwmuo.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163gmwmzadw.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163kujhxsni.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163annltmjl.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163vrwrrixa.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ihjsdnpt.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163dtiwrwmq.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ukrnixov.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163wqjynhmy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163nlksjyzl.html

Py:   if not data: return
来源：http://www.xuanzx.com/163lecmujlx.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163krehytfu.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163essxckwe.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163wokinmaz.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163wgeeqowb.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163qoyaeles.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163ymkikajy.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ljmsjpff.html

================================================================================
来源：http://www.sxryk.cn/163mqsxhwsq.html

C. 函数与作用域
来源：http://www.xuanzx.com/163invoxcmz.html

================================================================================
来源：http://www.aibaodan.cn/163btryhvdl.html

[C01] 定义函数
来源：http://www.xuanzx.com/163hjyqhuqr.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163sglxigmn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163zebxxwca.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163xhzedrgi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163wadfmzti.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rufutxqn.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163xaqfsbqc.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163tciagrzk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ifniubeq.html

[C02] 默认参数
来源：http://www.sxryk.cn/163gknakntb.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ukqwssfc.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163dvtjjrqw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ybahekvi.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163dktbauzt.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ichcloyu.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163uueojllp.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163tegqjzgr.html


<!-- 参考信息 -->