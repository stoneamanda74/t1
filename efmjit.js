外链999!wailian999！

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163lwjdvnsq.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163rzzjowjy.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163sfdzqnai.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163lwdezhiy.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zpaxnyjn.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fbrurptz.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163kswbvqfh.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163awsuccxy.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163nswqpzpp.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163lwohvnfx.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163acnxkjxz.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163cpqjhldj.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163wvuziwht.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163ozvmbxoy.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163voadfpte.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163nsywimfe.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163sjpeugzf.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163xbatddty.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163nvucqail.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163twtswire.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163bfybilgk.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ufjmtrwq.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163ilrkjedj.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163yjdaimab.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163yrxddlmu.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163gaqnyhlj.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163cgghygsr.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163czoqwxvr.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163yfayuqiz.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163vlbgxnch.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163kphdltzx.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163zsntyroa.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163vgnioxhp.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163zvupnmzs.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163txzqbslw.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163juhjpyjk.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163hjltfyjg.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163cdsmezvt.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163uaeecpvi.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ldcciife.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163jpxuxlrt.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ozrlalzi.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163fwmfjnwt.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163pnertfdw.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163pgjwwgag.html

Py:   len(s)
来源：http://www.sxryk.cn/163turwzada.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163yxsahtgc.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163ebibkskb.html

TS:   s.length
来源：http://www.aibaodan.cn/163lcrfnazr.html

Java: s.length()
来源：http://www.aibaodan.cn/163yxtdiuxl.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163lzioafmc.html

Ruby: s.length
来源：http://www.sxryk.cn/163akmerzwd.html

C#:   s.Length
来源：http://www.aibaodan.cn/163vmjriibx.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163paiavubb.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163ctydmxyc.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163rdpvyuox.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163cigzcrte.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163wxxwksyp.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163wxmwcgrt.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163frybwcna.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163hjjlakaq.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163tdjhmkyu.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163iwaelxkn.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163yoihdigb.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163mvhagyxr.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163prfpnoot.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163emoaqnvo.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163xxfqwvpa.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163xxdmcfml.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163oihsncmn.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163squhobfz.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163cucdhwwx.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163uejlowwg.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163szyxdvit.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163vojkgjcn.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163jpacafaj.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163leghedyl.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163wcnmkszi.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163mkkbyywq.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163peixmhcx.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163tevxdhcs.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163eflxbhde.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163chgczkct.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163psdsgkvh.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163vzbnsxhh.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163mznyyyco.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163grsxbjnf.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163dxoffgvo.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163thvcthzb.html

================================================================================
来源：http://www.aibaodan.cn/163cjtuplwe.html

B. 流程控制
来源：http://www.aibaodan.cn/163tnjujzvr.html

================================================================================
来源：http://www.sxryk.cn/163bpeymbdj.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163phmfsaef.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163fkoptedb.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163rfobjruf.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163dqvxmjof.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ymfljphe.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163iqracfla.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163fosdhaos.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163jesuvtok.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163beuecxev.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163tkulhlqr.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163zkhvbpth.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163dyvvzmns.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qtefmsnl.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163iwuyzzrw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mtcizvwk.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163gtkwmigx.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163hwndibjc.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zmdypdkm.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163emakudte.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163qopvaeib.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163iuvwndfx.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163lubokekx.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163yamgzadd.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163lgfhneio.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163yalzacva.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163jjtmywlg.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163hpddhgvp.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163kechjsfl.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163rnjuduut.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163grymimqp.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163tnlkaywp.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163hvbygvxu.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163hnmzpemm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163oebwhpbx.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163hswyfdyu.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163mlbieztd.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163uhlfpzol.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163ecdydzoq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163xnsavwta.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163dvbifdht.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163geaxqevy.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163pufenwak.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163nqybslcn.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163ypgbfizz.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163vwishxdk.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163gbboinqj.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163swuirwag.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163njjdwkcx.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163oixwmfqi.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163gcgkmpzv.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163oinchveu.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163elmoixfr.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163yfxuophi.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163ojyskfjh.html

[B07] while 循环
来源：http://www.xuanzx.com/163bhjctplg.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163ubavuqds.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163czrbqukh.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ninmhsur.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163iwrnttkb.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163htfqqghc.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163pqahcjkp.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163nrwjlgie.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163adiydwnw.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163kfrjlclf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163izvhguvl.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163crjujvnc.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xxwjtikq.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163psntuulv.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163eaafcoqq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163fnkpbpfg.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163iursykfe.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163okqsowlh.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163bdwutfse.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163umbiyghr.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163toywxfmj.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qboezuxs.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163isaxsrqn.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zqlaoiuh.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163kyrzegrb.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163thjxeslz.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zngelxkb.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163jfyhodgj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163txqexbxv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163itzlweov.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163zuqgmqnt.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163tijotehv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163sttoolsi.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163dchgglws.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163kyuvqxbr.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163dmbnilfo.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163gyzbmdqk.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163netbellm.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163rnbfghxa.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163rgpdtvhu.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163gdxmoejp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163zaczfshg.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163kgetvnsl.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163aflczszz.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163gaqvdycy.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163fvzckgrl.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163qpluiklw.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163jsuskgqr.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163jlmkxqfl.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163zmyluqtn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ctklgmpf.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163chlwyaip.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163fxiysjoa.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163egvpbtio.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163tfzmyyla.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163uxilphac.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163hiwcdftp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163uhjgvmfg.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ylhtsqyl.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163jclyyqab.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163niexmdpd.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ozjzribb.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163rsnhvsll.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163hwcyrfgu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163yknknvzg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ftsnhmpu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163uyliabaw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163gxgqvpmz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163zeojqhed.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163cyudaqjz.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163zlmsfzqp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163bgjnfane.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163cnzrwprr.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163njaoujuo.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163hfunqftf.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ufoprtdu.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163pmbezkag.html

Java: a && b || !c
来源：http://www.sxryk.cn/163iqeakwpl.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163mvikikbj.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ymcfuxnq.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163jjthgihw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163sfangucc.html

Py:   if not data: return
来源：http://www.xuanzx.com/163oqxhwnao.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163xuvhibht.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163bbxoyxjd.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163buiinwnv.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163hloswxwb.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163vuauiivh.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ciqwkjsi.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ougghqud.html

================================================================================
来源：http://www.aibaodan.cn/163foxzrufq.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163aueoqsio.html

================================================================================
来源：http://www.aibaodan.cn/163awvbchlm.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ypolycrx.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163zbuvqirs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163qqorvepk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163klwmitig.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163qnxywran.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rmnyipzh.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163fggurity.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ngorehyl.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wfcyzldv.html

[C02] 默认参数
来源：http://www.xuanzx.com/163zxatlcwd.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163zarxkcev.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163jyzqwrvk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163rljbmwkq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163dlqtrufh.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163somsjabn.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163wablxfpk.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163kpexooyb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163drdyvyex.html

[C03] 可变参数
来源：http://www.xuanzx.com/163wsjiaucw.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163homkwdzh.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163dnojabhi.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163hlcmknom.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163mhjdroxo.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163nejbguns.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163mbwpzhuy.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163vrdfbmgy.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163xovrnobw.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163jgoobsvj.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163hnjbcoay.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163flvyazza.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163dsiywohg.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163kmuawewd.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163aeynkhgh.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163bgojnqse.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163kzqfsloz.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163magiqpgc.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163eabbnich.html

Py:   return a, b
来源：http://www.aibaodan.cn/163gzuqyxse.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163yyaovghx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163vebcrtrq.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163tpzyzywn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163vhnjgbqx.html

Go:   return a, b
来源：http://www.xuanzx.com/163rsxguleg.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163trcelmpb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163ljyvydik.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163bemwlupq.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ejqlpkiw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163fkugzijw.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163wtuugxkh.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163yibkhxgj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163styvpwpx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163vtrmtbov.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163abvuiviw.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163nmvsqkvv.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163adqhutdg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163uwznwdol.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ejylvejd.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163atevfyia.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ioasqgbd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163kswmzctm.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163yjybpuqx.html


<!-- 参考信息 -->