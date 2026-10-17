外链999!wailian999！

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163praeipmx.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163jmhutnzw.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163npnsyukj.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163ddudfdez.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163kkuuxvcq.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163bgzcfnnh.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163lqwpewog.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163qyyxdykg.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163paqrnhhj.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163djbnvpak.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163cfnnwlir.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163ynaqafza.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163qdthlstz.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163tecnhsks.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163yfujfxob.html

[A17] 位运算
来源：http://www.sxryk.cn/163yensxxek.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hljdoabv.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163vgmqimlu.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ooedqnzh.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163nwtodion.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163bsapwcid.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163awkhhjyx.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gxywkkfp.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163rfqjukxe.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163efcxgyml.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163nzeuxfti.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163sxakgbsq.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163hooxoubf.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163wkajpdpy.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163fpparguf.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163vzctuemf.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163swohqnls.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163nefctlxb.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163cypuvojl.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163asvhmysf.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163uakrtucc.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163gwyjumqw.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163dbbunhvj.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163helyscbp.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163irtummyz.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163pkzrzpap.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163pkqyvtuw.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163ycacdogr.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163oltbgxwl.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163srklbdwf.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163viqhvngr.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163zyskokbw.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163zriwffej.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163ylmocxbo.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163agiguygb.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163ekffpsga.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163yuhdtdai.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163cysqikeo.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163hsmllhrq.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163lfbblrcv.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163yczvrsig.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163bgnatfka.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163psosnkew.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163pcmemfje.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163jxtunppb.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163ucrusdlb.html

Py:   len(s)
来源：http://www.aibaodan.cn/163dwljgimu.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163lgieqnnf.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163pqsaqduh.html

TS:   s.length
来源：http://www.aibaodan.cn/163jxikyacy.html

Java: s.length()
来源：http://www.xuanzx.com/163rydvbkvy.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163kznidggo.html

Ruby: s.length
来源：http://www.xuanzx.com/163nvfkqhpy.html

C#:   s.Length
来源：http://www.aibaodan.cn/163jgzkhmoa.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163fpyzxgtx.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163pgegtdyz.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163wccdnnda.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163nzjrazzk.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163fupfcppm.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163pxpcorag.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163xhbnfbsb.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163vtogwmtc.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163egpaprko.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163ikazeflx.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163gbcfsskh.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163vhfvdsqe.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163mthtjbys.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163rvuqjzwz.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163nvsctkka.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163zkmaxrgi.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163zhvqwtgc.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163jehacsqp.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163sbaguinh.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163uaejjitl.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163gxwvokdd.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163arpnzlaf.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ycvwlege.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163ibwqannw.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163stiarmqs.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163cvjxcrjz.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163vimavhng.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163lysoufyq.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163lhreqxtk.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163jnebzjoo.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163bhmdpeqk.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163wmjznnww.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163yjrnsqsu.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163vnukpxul.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163xmkfeczh.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163hwfqfzkn.html

================================================================================
来源：http://www.sxryk.cn/163vllpiksj.html

B. 流程控制
来源：http://www.aibaodan.cn/163sujeqexi.html

================================================================================
来源：http://www.sxryk.cn/163yqkgevof.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163dtehlrmy.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163arjavyfd.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163cuoqbyuo.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163cpqirxko.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163gpeuxbyq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163crpylior.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163brfvwqqs.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163etdfwobc.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163yqqzypys.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163qrmhrrux.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163euuelnkk.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163gutgpwtm.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163fcdxnimw.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hjhkaame.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163wzhdpqnt.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163ragqmoss.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163lrfdvbjl.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vnantysh.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163struapey.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163tnaymkuk.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ylqcpfys.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163fpwrlxmd.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163fafvlugr.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163kulghkaa.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163wdroagrp.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163melacmiz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163ocgcswrd.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163kcgrqppf.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163nixyuqxj.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163exndcrmt.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163cfrgszdh.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ruujmzlg.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163znpepbiq.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163mxhxdgnh.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163jgzbtaxb.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163bwnslngw.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163lfhlfmdo.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163kgqrtmie.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163gfqrdrep.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163fbtiubnc.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163betfvjzs.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163zeopncie.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163pbltynxd.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163aagbrztn.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163vbpgnrrs.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163cajqlezh.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163kxbiacob.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163solonjfr.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163usxraoeb.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163hzdsellu.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163tygwhwsa.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163dgxjjayf.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163izzherda.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163pnkymfkb.html

[B07] while 循环
来源：http://www.sxryk.cn/163tsxsfxei.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163kvrsaljx.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163wyqszhkn.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163abvxqgwp.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ygvrsqkm.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vahhopbv.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163tkbzdfah.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163tfubnkxl.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dgydpoyl.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163chkudexb.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163jvhwxfnl.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163lcbbjmis.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163tlwpqbgq.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163pstxcyrm.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163eqhqrwrm.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163dhtuexec.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163fohalbvi.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gjczqbik.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163anihjime.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163uphtmkpj.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163lkgowmhk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163reyiveys.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tssvmnen.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nbhmnrit.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163odopaoip.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163wqkozhov.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ieijgfya.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163qynyqvbk.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163hcfmybjs.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163cztuhqmh.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163pxoawabw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163usnvgomv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163fotmfwid.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163owcsagxl.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163yqeyrqwu.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163oxsmckox.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163akonbcbj.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163bhnyhltu.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163yrpxqatb.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ykjtsmon.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163bqpsefco.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163ukztfejt.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163snqrcrkm.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163zqktevjo.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163wbbpbcbp.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163osvgvqmn.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163vontzmsi.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163uzdbczlk.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bvakhipx.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hiehmvla.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bjotoegd.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163kzqcotpm.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163iywyabaj.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163oweddbwi.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163qrkhfago.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163mxepfrqs.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163lscvkmmn.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163tuebdoor.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163fkepmdyj.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163paiibvdd.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163uytnyuxb.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163ibnflepk.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163vkdrcvqe.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163qcywjxpc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ekhzqrbg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163kotuxivj.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163gxuanmtn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163xxtylfhq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163wyybxymi.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163wolxtxgd.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163kggefvzu.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163qnmqcrlm.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163iqadypqp.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163vqlxsrne.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163ymljqymd.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ntjwklwe.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163opiiwwta.html

Java: a && b || !c
来源：http://www.sxryk.cn/163meexzghl.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163ngxbviwv.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ectpgnoz.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163vgpjshes.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163chiiuprx.html

Py:   if not data: return
来源：http://www.sxryk.cn/163bfuqfeji.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163qbyjmnkj.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163debreuzk.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163qycrnmeo.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163jgshdwfk.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163wcwxdtif.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163edayaccy.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163xoikskol.html

================================================================================
来源：http://www.aibaodan.cn/163hfqqeahw.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163pltnctuk.html

================================================================================
来源：http://www.aibaodan.cn/163possnzwe.html

[C01] 定义函数
来源：http://www.xuanzx.com/163eohustcg.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163vhtzfwhr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163xeqkgvku.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163xwxdrvgl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163stjwhihh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163cggmyqbu.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163swfktgdt.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163uotdnguq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163atearnjh.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163eiuwsiws.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163xpjzbrwd.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163zauvapwz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163vptuozvu.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163gfudadol.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163cdzoxlwz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163efdoggmd.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163fishljap.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163mayptlbw.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ugzhqean.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163pxlifxkp.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163lzxipxoi.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163shdvtufl.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163fhajsvus.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163jckiejpv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163kngoazeo.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163mwdvcwzr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163liecwyup.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163jhwsaixt.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163yycxwcgm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163gilmvjdi.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163wtmheavr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163afbhptyw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163gehnhnip.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163wcohhhou.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163srgivdgy.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163nenlgafn.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163fowfxuwd.html

Py:   return a, b
来源：http://www.sxryk.cn/163ytvxiqbi.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163nopftexk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163wipzjsdg.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163jrwffbut.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163jigrhsof.html

Go:   return a, b
来源：http://www.aibaodan.cn/163piybfpps.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ojzsndub.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163bfwbcxvc.html


<!-- 参考信息 -->