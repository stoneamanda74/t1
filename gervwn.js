外链999!wailian999！

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163csnsuwqg.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163oghyczza.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163oouoerxy.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163iyudermp.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163jtinvwyl.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163ewiryjcz.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163bmdcgqhk.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163yyqjmflt.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163exlvjgmj.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163vfvjqzyf.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163cvscphfq.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163itnmeezu.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163dkyzgmke.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163kbbkawiu.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163cmtushgm.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163pkzpazrv.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163mfmktkeq.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163gxpjsrct.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163uuyccwbw.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163zdwqvxdp.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163seeeutoc.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163vdfrvjoq.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163fopguzue.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163ebzxtmhg.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163mwrefxkf.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163cctosdzj.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163qejhbuus.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163umarziln.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163fhkcjfws.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163zucsutay.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163tgggczkt.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163ytlzzikp.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163udiptgwk.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163lbgqgzzf.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ibfyfumc.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163wciojpmu.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163clomnrgg.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163mfedyate.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ahqjrpgp.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163lxhhkxmw.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163dshqdthq.html

Py:   len(s)
来源：http://www.xuanzx.com/163axximgia.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163mmsgyhwy.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163sroftmba.html

TS:   s.length
来源：http://www.sxryk.cn/163wclhhcoo.html

Java: s.length()
来源：http://www.sxryk.cn/163rmyglwra.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163aqeeyrsy.html

Ruby: s.length
来源：http://www.aibaodan.cn/163nabwetxk.html

C#:   s.Length
来源：http://www.xuanzx.com/163bfjbxjbu.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163jyftnazl.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163uawvaimn.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163pervgtfb.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163lmvlqbte.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163nfkidclo.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163jmuhezoq.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163swlxfqtm.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163sbmophhy.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163baqjfrbv.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163kubrhvdd.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163xuyfpkrw.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163hpqrmagn.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ruswspla.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163qmqmfsct.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163dtbhdmgn.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163rlpxetto.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163bfkqszay.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163zfygjzcv.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163oywrkiiv.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163rmgmegwf.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163edkupfwa.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163uwogtwkz.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163arwhlqcx.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163mafhewtq.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163vrexqwck.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163wmgzmxyf.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163usmbkapt.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163htzkpmpq.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163qyufxqcr.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163oqhhaycc.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163pfypapmv.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163uclkueab.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163tkiettbb.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163sudppqzb.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163paigdric.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163dclitzbu.html

================================================================================
来源：http://www.aibaodan.cn/163cjknkobr.html

B. 流程控制
来源：http://www.aibaodan.cn/163ctoqqtsa.html

================================================================================
来源：http://www.sxryk.cn/163yocvszdl.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163gjgrgzhs.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163yjfnpvns.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163dkrqmbex.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ufvwtvvm.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163deduhrhm.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ryncjccj.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163lmxcaeia.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163aairuvhd.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163byajwrkx.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163hgojxyxr.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163pbvwrnfs.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163qbkbozrt.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kbwgrxwi.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163rfbdpofj.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163merksqmx.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163jfwzbtzo.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163hoyqehct.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163rmigybsm.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163igsigqej.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163ztiahzkn.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ariiyzjb.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163lkknckur.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ybeeltgc.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163zwkzzecy.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163kxtlbwzp.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163qxwmxggn.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163bbuuuaaf.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163hawkfybu.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163cdrisvfn.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ukfjawdt.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163uktuvlyu.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163mbwhelbd.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163ysbxflbv.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163nqjedxop.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163ruxmjayn.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163wscuepwx.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163kkeruujf.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163bvifptfp.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163hbzkgidu.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163tkwevdlq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163levllugl.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163qodwezom.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163jngbmbym.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163pjqpjcxr.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163etfvogtt.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ibkaduli.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163riqmzjfj.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163qaeckysx.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163liswljvm.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ckmhxjhy.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163ncaocary.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163xkjegwqu.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163mrmjhrox.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163vsnxrful.html

[B07] while 循环
来源：http://www.aibaodan.cn/163stagzbox.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ayqloamb.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163llxbvjvr.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yuvtxxtb.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163sxxmcirv.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kohjabaq.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163zepiyqib.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163kfhtfrmv.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zgpgxlql.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163pdaprwij.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163jemzfttm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163szznatcr.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xxsusoff.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163malblidu.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rrygzqiz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163tfjtmjev.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ctwyawqa.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ezpptrel.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163jruxbpkr.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163ljfzwmyf.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163tjudzbcw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163xgxrqrbl.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jznclpyr.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vykzothn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163vobczuzl.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163qpcwdjwo.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163goyalhke.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163mbpqicqn.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163uznkdpks.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163hupptjaq.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163fgnypplr.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ooqujnqb.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163cszgqxoz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163odioofqi.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163sghppiek.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163kgmfkeyx.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163ncqxzmco.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163ekkzlabx.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ufhxvijd.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163xboujqjo.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163stsnjxtj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163xyambvyp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163muafzvli.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163qabeomdi.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163jqsqqgda.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163ivhpphys.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163movkctyt.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163afygmxyt.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bydsztwg.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163rcsvqnpn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nnjlahff.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163kflrciwh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163tofahsne.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163uxgvopsv.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163etojnynz.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163wxtklhiv.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ptvcyzhx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163lzuqmexe.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163sptveyen.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163xkvfyape.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163ysgvtbgi.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163rqzpcmkj.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163bnkbtiyz.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163hczqutte.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163ygtqdjfs.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163mnhggiou.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163gxpxitwj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163okctdvxz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163mskveqid.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163mhluwikb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163igjovnyk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163rdawhktn.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ipnwzggj.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163ylskfknp.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163uoyncmwl.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163wwkunxns.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163ugrwqtri.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163pgonksse.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163ryutmduh.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163dtzqccdw.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163oejwbybe.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163evwalvxl.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163tharxyuq.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163hucesfna.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163wwvlrfyy.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ytijhcwb.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163qaxvugfv.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ubsssler.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163xrxhvteb.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163qktygyba.html

================================================================================
来源：http://www.sxryk.cn/163xbxxiops.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163qqssclnn.html

================================================================================
来源：http://www.sxryk.cn/163leehbevu.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ggnyszjm.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163zquciwvi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163tqnulxfr.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163whprzbxe.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ixngdmgf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163nesfdvvz.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163fytevxel.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163qqwaqhhx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vdxfzjar.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163imncjben.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163fyqyzjgw.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163jhkdnxzw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163jygdsuhx.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163pdhjtaxo.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163iaqioofh.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163miixgibd.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163divhpssh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163gzgcawrx.html

[C03] 可变参数
来源：http://www.xuanzx.com/163boorljhk.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163fhyoqsbn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163jifnqiur.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163nkyykxej.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ezfrilbc.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163gyazoawu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ldpyqoqe.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163pvitlmhy.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163rswmspzr.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163oqoyakss.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163fwrdflcu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163wryayeig.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163pytsxkdr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163begvupjz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163yrejbhks.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163zewstuft.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163graumcdu.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163iytuubyj.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163whawfmxf.html

Py:   return a, b
来源：http://www.xuanzx.com/163mtcallms.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163guctynud.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163ncgyijsj.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163bqwbgyvo.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163aqltoxcm.html

Go:   return a, b
来源：http://www.aibaodan.cn/163mwugfgzv.html

Ruby: return a, b
来源：http://www.xuanzx.com/163jtoehmhy.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163qkobyusb.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163eydivxer.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163qzyroiis.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163rpuiiwlj.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163bpwtruhi.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163zhmgxfae.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ztfxqvka.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163bcvrzids.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163hrolelrd.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163nfwzzryf.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163kollaqtc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ynzvaztp.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163vjogjhrm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163crhqvnra.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163picmqshz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163qxpchbdu.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163xiwxsnlm.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163yredatsv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163hhbjmovv.html

[C08] 闭包
来源：http://www.sxryk.cn/163oexflxei.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163tmdwqsau.html


<!-- 参考信息 -->