外链999!wailian999！

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163bogogvjw.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163wfaodgyk.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163wmfwdwrm.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163euegobtr.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163comqfvkh.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163ozaoahet.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163ihrsdnjk.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163ykalyotq.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163jbouport.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163ltvgmirb.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163tfqbhjzv.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163tvvfrpxi.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163xqdiohwm.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163nrluqoqy.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163yolpenla.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163hmvpjumg.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163dxrwdpoi.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163jqucbzgc.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163ltxyisgm.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163lqljqvho.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163hxxifjew.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163zoyvwkfo.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163tetrlkvd.html

[A17] 位运算
来源：http://www.sxryk.cn/163zjtviqxw.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163dqxieakb.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163iarwrhit.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163cgdpzvce.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163wafupyjj.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163hrroxron.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163yyoluppt.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163cyakxrzd.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163lotgfvpd.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163vfqirxsv.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163tnqhiacy.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163crqwowfv.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163rlqxxuzx.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163kiugwnjy.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163pnxonxmg.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163wnfvymyo.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163ihtmtuyg.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163obtqmiwr.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163nvsougpf.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163vfmtosgg.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163mtrvyoxd.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163govudqwg.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163sgeinouw.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163noggnevq.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163bkqnwyhl.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163vnpxejtl.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163ntzmtvrq.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163yikeejtc.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163sxlawcgg.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163fdrjtllb.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163kgcivmfr.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163uwmamlsm.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163dejvbhbo.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163dqkzthhw.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163akloiwzz.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163asxcyrao.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163idberyol.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163ajogktmg.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ajbfexbd.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163alijytvz.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163rhqmhwak.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ayhtytcj.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163inhlsorh.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163cxqaonqb.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163iqpsqvtk.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163catejvra.html

Py:   len(s)
来源：http://www.aibaodan.cn/163fcfvqgth.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163ejbbzalc.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163zmtxygkt.html

TS:   s.length
来源：http://www.aibaodan.cn/163xxwrklan.html

Java: s.length()
来源：http://www.sxryk.cn/163mssgaybs.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163supcsheq.html

Ruby: s.length
来源：http://www.sxryk.cn/163tvnwreis.html

C#:   s.Length
来源：http://www.aibaodan.cn/163cvigtfrp.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163qmhifgdb.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163tgzlkhuf.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163kfmvffqm.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ffnhidgu.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163jbbdyjkl.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163oytkqfqk.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163ecrsinzw.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163csxclnmt.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163siyzechz.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163viuytqai.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163hncdqgvo.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163fdtdiyvs.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ygyfpsuk.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163xoknqmtm.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163blwntfqj.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163qnocbbxt.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163ecrufxqf.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163flhffmyy.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163mrfbvvdc.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163rsrksgge.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163flwcmrwg.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163pieunkky.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163opvgcmam.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163vnnwifqw.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163kwlnlzik.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163dsdtmnyl.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163glywriob.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163qxbhehgw.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163ovjirrpq.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163geirupky.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163kfkenljm.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163ohhxpwaf.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163cjjjpkyk.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163wmhsorgy.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163ahicqgld.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163fmzzvcsy.html

================================================================================
来源：http://www.sxryk.cn/163hhmrgiec.html

B. 流程控制
来源：http://www.aibaodan.cn/163vbptmbgr.html

================================================================================
来源：http://www.aibaodan.cn/163jcrpbfsw.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163gkswrkgd.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163epkbggam.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163lbixbgxj.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163tjooinqy.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zenwudfm.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hksbhxnn.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163comwagmd.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163dlhxqewh.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163awodvjni.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163uuohuyeo.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163vyllejyr.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ggxtpfos.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163foumffck.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mjjwjutl.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163xilpkbyk.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163rwjpzaqt.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163woskcbcv.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qhsdyzws.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163ydpoernd.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163hrslevwn.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163lgaqfjiu.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163glgwzvfq.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163zemzasms.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163afmljthh.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163uyqqyzzz.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163ibevsoov.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163ducaworq.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163nuetsunc.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163lpojcrxi.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163kvjygsmc.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163oppgcfec.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ynoyqsjq.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163wioqvkwd.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163mbhrworg.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163pofziwwd.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163yulvffjq.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163jjbrjifd.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163haispsvh.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163dbnovfve.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163mokvhnxa.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163cgqnbhjc.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163pfiivmhf.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163dvrojdni.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163dhegafan.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163sfpmwjhp.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163novsmuct.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163xefgyanh.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ggjutcaa.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163csvqyxpz.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163hqefxnxu.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163vkvfdpen.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163vtfndsxf.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163ulfmmhvz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163cerwgucd.html

[B07] while 循环
来源：http://www.sxryk.cn/163srjrtijk.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163zksqnrre.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163cmiqklvj.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xijadgzb.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ohcludjq.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163prxeijtd.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ctuslvsd.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163utdakthd.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jqkxsgwl.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163himnaveh.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163owbjyqym.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163vmwzhter.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163pxevwdzn.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163iwmzefya.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qoqifgvr.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163bfgvfzkn.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163oymzxdfy.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163owzvyedp.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163bgaoxffa.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163hxjdpuvi.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163txkfqlep.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ychqrtoq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163adbtucls.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163yzvyxszn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163htkrdjju.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163dcqvxoqo.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163obhuixec.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163vaklrbgt.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163vfijxjvh.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163cpfwecgo.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163enfclehv.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163mvmsbisy.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163ydeeuuzf.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163oiomkmwo.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163uwypdyhk.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163kwgvqozy.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163krknunlq.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163fbqhpssm.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163brsodjju.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163oxbainhy.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163nvcqfizk.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ykyugceo.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163dmrnlbcc.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163nljecxkc.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163mscqxbwq.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163zgeysvod.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163rqphlfrq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163aunblfbp.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163okjbgmdk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163sobarprv.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163uudaxyvm.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163oiedkpzp.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ftxgrumx.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163vksbboje.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163iaqqoyhc.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163yezqnruv.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ejowoywt.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163dvmyxcjp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163kmbamsaj.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163ekjnlcky.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163yqfokiyc.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163ohepdcbh.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163yusbevry.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163fuxjwfql.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163bqkvbhtq.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163dkvwybmd.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163vuatgplh.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163lsgxnspp.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163wwcctrgw.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163qkbpnxqf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163zvgomskc.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163qjlqbifw.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163ysftxvma.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163docwcwng.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163akwpvblf.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163vwsnpack.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163xvdhmhus.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163pnxxaavj.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163wxuornyn.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163lsxijrvi.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163pneuaodc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163lrkugdwn.html

Py:   if not data: return
来源：http://www.sxryk.cn/163kjusnvsk.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163bchtgbwc.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ilxrprek.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ztdaqnzh.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163joqtybqd.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163cmpntwna.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163xjdhhhjn.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163pcvrvmim.html

================================================================================
来源：http://www.sxryk.cn/163cykizdcy.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163auqkwuxx.html

================================================================================
来源：http://www.aibaodan.cn/163xyuvcjhl.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ggfikdcv.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163fsuowifb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163psblfckt.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163jcyvypfm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163uzdqycxg.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163aivwwzkq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163bjmqzadh.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163roizxbds.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xviomikf.html

[C02] 默认参数
来源：http://www.sxryk.cn/163jtbsazty.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163izlclcjn.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163oeczrhgh.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163ynybyxzv.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163dhuorhzy.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163fflaiihf.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163xbvmiovy.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163wavecpqh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163xgwczaqg.html

[C03] 可变参数
来源：http://www.sxryk.cn/163rxgdimub.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ryzfejjl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163qyohifyh.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163rfixbzvr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163zftfcjef.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163mrpsyvto.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163halntijk.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163dayrkltl.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163mjobaewo.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163okjepcot.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163zxulrvwc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163jzyvpfso.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163yqdsrgss.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163znvtysoe.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163iktosshn.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163oddelgpe.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163riajaees.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163oljqwacp.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163lwtwbuvz.html


<!-- 参考信息 -->