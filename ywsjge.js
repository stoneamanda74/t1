外链999!wailian999！

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163qbmbrbmz.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nsctdmdl.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gybqwbkr.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zhhcqubn.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163ptbppkpl.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163ppxzccvd.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163tbbtzlsw.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163xovcxvai.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163sidialtx.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163ccnsnyoj.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163cznnmhja.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163xjuwccdg.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163syxbtcql.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163kgadwxqo.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163hutjctir.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163lnfqpprc.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163pnahczof.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163rfymghcr.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163xybimcia.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163ddofeyuu.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163clmzwzxx.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163wjudbney.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163impgpqcp.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163rtvumyhn.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163eirbvdgn.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163xawmttai.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163fziqwaix.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163kzyesbml.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163tvsghvbl.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163tojcmocn.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163hwczdkwu.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163gidqhnty.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163jnxoyzkh.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163fmdnwlae.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163foixwlje.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163szwyhrhn.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163uxqlehpe.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163xfvfcwmo.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163bmiotmxz.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163xfjqixqx.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163bbetztur.html

Py:   len(s)
来源：http://www.aibaodan.cn/163xrvylcfm.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163sjaffbgk.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163eoiiadvb.html

TS:   s.length
来源：http://www.xuanzx.com/163vjmwpfid.html

Java: s.length()
来源：http://www.xuanzx.com/163bsxnkjpx.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163ifixbttj.html

Ruby: s.length
来源：http://www.sxryk.cn/163tiucylcq.html

C#:   s.Length
来源：http://www.aibaodan.cn/163suoiccmi.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163mzdbkzjh.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163wkfncxbl.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163ebragqwx.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163qcwwfqld.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163rsgozvvb.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163elpfgdcd.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163scuamxuw.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163umedpeyh.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163frmjvmpv.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163fhicgqmn.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163mishhtys.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163xefmmnyw.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163whlnwvjk.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163zkhashyv.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163qlewcwuj.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163bxpnvecy.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163syhhochr.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163leefzcoc.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163vrjnocch.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163pdhuiitj.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163qmyfaifg.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163rtfqbhco.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163qeplunfw.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163qwwctrjc.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163rtmzgtym.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163adylrnvz.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163nrjpslco.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163tttzoexi.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163xkyqheam.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163pxdvmmlg.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163efrfqjky.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163rijjglkk.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163wvjptgmr.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163tthoisfm.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163ukduoshs.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163hjletruc.html

================================================================================
来源：http://www.aibaodan.cn/163tlkxneia.html

B. 流程控制
来源：http://www.aibaodan.cn/163iliszbje.html

================================================================================
来源：http://www.sxryk.cn/163xtzdsjxk.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163slzdnrpi.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163dwgjnvgx.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163xauenntu.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163vktxjoyj.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ncecizxa.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hqmahmky.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163raerbnfq.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163zziovnyo.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163cruffboe.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163qbwvjaww.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163skkgqnrt.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163uzixqfyq.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163kctuxosm.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zxbgxqmu.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163lsjjgsyr.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163gblgnfeu.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163ongyntsf.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163phmtczyi.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163ljicofog.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163jocotduj.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163kmlzkdxl.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163zjvutnuu.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163icuhriqr.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163wihvnnzs.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163dbcdruqs.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163sizurijb.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163ykuxfdmr.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163vkynteae.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163jyyllhxp.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163tdpvduoz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ehjafzfw.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163lfmspojy.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163pqmcfzls.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163ewonsgfi.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163wiuyvhbk.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163ojviwuxd.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163vwevzhvd.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163zcckijti.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163cqpcctoq.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163bbkxdssl.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163udpiomwe.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163uiyknmak.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163jeiunhlz.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163yuvqvozl.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163hbpnbkfr.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163zbcgoocg.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163hwybxzdm.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163fzoijdup.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163zqvoqkjz.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163nsfxvjgz.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163ytdoooky.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163rmlmubbd.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163kdgiigea.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163ibzaqwed.html

[B07] while 循环
来源：http://www.xuanzx.com/163gpniinsv.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163alzlcece.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163woqqiodj.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ongscdxe.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163aczvmzfz.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163swxflqdj.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163zohzsznl.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163heytwtgi.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163oztcgjhy.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163cbjbaltv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ftobbulr.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163hlpgwdqw.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ndnkntio.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vmymxcxf.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tpxmorsl.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163ilbotykl.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163zcqrhtxu.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vrihnhhe.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163rimkbfxj.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163moryxzfw.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163ofnnphab.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vbrjldbd.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163otkwnpsp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163quwnvyby.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163vhfujdfe.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163qpxbqctr.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ikxklvxc.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163nhnbtbuw.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163lmzgtcgt.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163hllpdhje.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163lthfharg.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163cgqgzksn.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163ioxtslqa.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163nygscsbh.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163wlsxruei.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163hmddynqf.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163sgipmneh.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ylpkwoxg.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163zspmqzxa.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163xxieewlr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163tmrxiwid.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163nqbmmfqr.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163nxjhbceo.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163ogvqmgfs.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163sabuoixp.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163spqxhylz.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163zymauetm.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163akdznuhg.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163dztcqdxw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163irdvkgrn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ovfckqgm.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163wevtafmi.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163giwcnlzu.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163idutqtro.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163qtlwaakk.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163txxtcdff.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163melynyya.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163nlmhtlqd.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163xhbxkkas.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163bccqlxdd.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163agwtvvoh.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163uknxjjtk.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163qgmqpmbf.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163qldkrcgl.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163kruyqxrq.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163hiabvhoe.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163xdtbwzru.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163cuvszxpo.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163jnmgrktv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163friptavk.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163xybouxxg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163wukjlyou.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163hkutjvfv.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163qyhzytyv.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163jwwlpnkn.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163hywlgaqj.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163sdtokdwx.html

Java: a && b || !c
来源：http://www.xuanzx.com/163faxaggid.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163kaevncma.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163inrhplqn.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163mtrpzaee.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163shsrlekn.html

Py:   if not data: return
来源：http://www.xuanzx.com/163bdssabfu.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ibxrsrrh.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ztrscqgy.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163usoqoueu.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163bqidxpzt.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163zjbdqres.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163wivulwzd.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163mkguyimx.html

================================================================================
来源：http://www.aibaodan.cn/163efkawwwm.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163rqzovfut.html

================================================================================
来源：http://www.aibaodan.cn/163sqwmfumd.html

[C01] 定义函数
来源：http://www.sxryk.cn/163vulktgmu.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ekvbmufo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163gqpbosuk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163cmtmszkh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163qzoulqnj.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163tjtofgeh.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163asqtqixy.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163qqdzptng.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163zqzokqqg.html

[C02] 默认参数
来源：http://www.xuanzx.com/163pcazueaw.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163vwiaqpjd.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163txzrqxti.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163jbpejxxl.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163tlirzxsc.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163gwabgbjh.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163sfyykjie.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163twoocoyf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163yemtvmmq.html

[C03] 可变参数
来源：http://www.xuanzx.com/163dqmirtwy.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163rfzmkict.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163iwuwhgvw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163trdojaou.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ltnnbbgk.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163hyblgjlk.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163pmeroxlj.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163elioxnjq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163xdnvomno.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163njrymshx.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163cnbqsdvi.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163swpxtaka.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163zxmekxig.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163suxifnvj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163qcrjzbul.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163xvxpbeaw.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163mpnyhmfb.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163dfmuuznq.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163wwfodyyc.html

Py:   return a, b
来源：http://www.aibaodan.cn/163xwwxsclj.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163ljlyylkx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163nsdffkoz.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163lpgrsagk.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163udspbalq.html

Go:   return a, b
来源：http://www.sxryk.cn/163tnicbgsd.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163bpjudicr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163zaoklyvz.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163myjhnjsn.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163hbnkytdo.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163qjuxayms.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163zznlznrl.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163gajzfypa.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163kylexmjq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ngxwigax.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163cgploytz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163helqmvkc.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163rheduuzq.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ztlvaydp.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163qglszbkq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163orqyzgeo.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163eponiksv.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163yqojyqmt.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163idbteuxz.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163tsabrkga.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163vxncbevh.html

[C08] 闭包
来源：http://www.sxryk.cn/163klrbeldp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163ejbyijuh.html


<!-- 参考信息 -->